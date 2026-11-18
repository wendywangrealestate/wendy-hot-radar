"""Render the public editorial snapshot into the existing bilingual site shell.
Run in a directory containing editorial.json and current {zh,en}/insights/index.html.
Only finished public article fields belong in editorial.json. No credentials needed.
"""
import json, re, html, hashlib, base64
from pathlib import Path

root = Path(__file__).parent
payload = json.loads((root / 'editorial.json').read_text())
articles = sorted(payload['articles'], key=lambda a:(a['published_at'], a['slug']), reverse=True)
assert len({a['slug'] for a in articles}) == len(articles)
for a in articles:
    assert re.fullmatch(r'[a-z0-9-]{1,100}', a['slug'])
    assert all(s['url'].startswith('https://') for s in a['sources'])
    assert all(a[k] for k in ('title_zh','title_en','body_zh','body_en'))
out = root / 'output'
out.mkdir(exist_ok=True)
e = html.escape
def write(path, content):
    p=out/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(content)

for lang in ['zh','en']:
    template=(root/lang/'insights/index.html').read_text()
    template=re.sub(r'<!--EDITORIAL_START-->.*?<!--EDITORIAL_END-->','',template,flags=re.S)
    cards=''.join(f'<a class="ins-card" href="/{lang}/insights/{a["slug"]}/"><div class="ins-meta"><span class="ins-cat">{("新闻解读" if lang=="zh" else "Market analysis")}</span> · {e(a["published_at"])}</div><h3>{e(a["title_"+lang])}</h3><p>{e(a["summary_"+lang])}</p><span class="ins-read">{("阅读全文" if lang=="zh" else "Read the analysis")} →</span></a>' for a in articles)
    heading='新闻解读与实用分析' if lang=='zh' else 'News analysis and practical perspectives'
    section=f'<!--EDITORIAL_START--><section class="wrap" style="padding-bottom:48px"><h2>{heading}</h2>{cards}</section><!--EDITORIAL_END-->'
    marker='<section class="wrap" style="padding-bottom:56px">'
    assert marker in template, 'Monthly-article section not found; stop instead of overwriting the layout.'
    index=template.replace(marker,section+marker,1)
    write(f'{lang}/insights/index.html',index)
    head=template.split('<main',1)[0]
    tail=template.split('</main>',1)[1]
    for a in articles:
        title=a['title_'+lang]; summary=a['summary_'+lang]
        article_head=re.sub(r'<title>.*?</title>',f'<title>{e(title)} | Wendy Wang</title>',head,flags=re.S)
        article_head=re.sub(r'<meta[^>]+(?:name="description"|property="og:description")[^>]*>', '',article_head)
        article_head=re.sub(r'<link[^>]+rel="(?:canonical|alternate)"[^>]*>', '',article_head)
        article_head=re.sub(r'<meta[^>]+property="og:(?:title|url)"[^>]*>', '',article_head)
        article_head=article_head.replace('</head>',f'<meta name="description" content="{e(summary,quote=True)}"><link rel="canonical" href="https://wendywangrealtor.com/{lang}/insights/{a["slug"]}/"><style>.editorial-body{{max-width:780px;margin:0 auto;padding:40px 20px 64px}}.editorial-body p{{font-size:1.08rem;line-height:1.95;margin:0 0 1.5em}}.editorial-body h1{{line-height:1.35;font-size:clamp(1.8rem,4vw,2.8rem)}}.editorial-body ul{{padding-left:1.4em}}.editorial-body a{{text-decoration:underline;overflow-wrap:anywhere}}</style></head>')
        other='en' if lang=='zh' else 'zh'
        article_head=article_head.replace(f'/{other}/insights/',f'/{other}/insights/{a["slug"]}/')
        paragraphs=''.join('<p>'+e(p)+'</p>' for p in a['body_'+lang].split('\n\n'))
        sources=''.join(f'<li><a href="{e(s["url"],quote=True)}" rel="noopener noreferrer" target="_blank">{e(s["label"])}</a></li>' for s in a['sources'])
        body=f'<main id="main"><article class="editorial-body"><a href="/{lang}/insights/">← {("返回市场资讯" if lang=="zh" else "Back to Insights")}</a><p class="eyebrow">{a["published_at"]} · Wendy Wang</p><h1>{e(title)}</h1><p class="lead">{e(summary)}</p>{paragraphs}<h2>{("原始来源" if lang=="zh" else "Original sources")}</h2><ul>{sources}</ul><p><a href="/{lang}/contact/">{("与Wendy讨论您的置业计划" if lang=="zh" else "Discuss your plans with Wendy")} →</a></p></article></main>'
        write(f'{lang}/insights/{a["slug"]}/index.html',article_head+body+tail)

write('assets/insights-editorial.json',json.dumps({'articles':articles},ensure_ascii=False,indent=2))
write('api/insights-articles.js', 'const snapshot = '+json.dumps({'articles':articles},ensure_ascii=False)+';\nexport default function handler(req,res){if(req.method!=="GET" && req.method!=="HEAD"){res.setHeader("Allow","GET, HEAD");return res.status(405).json({error:"Method not allowed"});}res.setHeader("Cache-Control","public, s-maxage=60, stale-while-revalidate=120");res.setHeader("X-Content-Type-Options","nosniff");return req.method==="HEAD"?res.status(200).end():res.status(200).json(snapshot);}\n')
manifest=[]
for p in sorted(out.rglob('*')):
    if p.is_file():
        b=p.read_bytes();manifest.append({'file':str(p.relative_to(out)),'sha':hashlib.sha1(b).hexdigest(),'size':len(b),'data':base64.b64encode(b).decode()})
(root/'uploads.json').write_text(json.dumps(manifest))
print(json.dumps({'articles':len(articles),'files':len(manifest),'latest':articles[0]['published_at']}))
