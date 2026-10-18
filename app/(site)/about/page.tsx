import Link from "next/link";

const services = [
  {
    title: "买房",
    desc: "首次置业、换房升级、投资布局：从需求梳理、区域分析、约看到谈判交割，全程陪跑。",
  },
  {
    title: "卖房",
    desc: "定价策略、staging 建议、多平台曝光、谈判跟进——让你的房子在正确的时间遇到对的人。",
  },
  {
    title: "租赁",
    desc: "房东委托（租客筛选/租约管理）与租客服务（找房/约看/谈判），两端都熟。",
  },
];

const principles = [
  "数据先行：每个判断都给出来源和时间，不讲“感觉”。",
  "讲人话：把市场术语翻译成你能用的决策依据。",
  "不追热点：每天只精选真正值得看的动态，宁缺毋滥。",
  "亲力亲为：从第一通电话到交割钥匙，Wendy 本人全程跟进。",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.35em] text-radar">ABOUT</p>
      <h1 className="mt-3 text-3xl font-black text-ink">关于 Wendy</h1>

      <div className="mt-6 rounded-2xl border border-line bg-panel p-6 sm:p-8">
        <p className="text-base font-bold text-ink">Wendy Wang</p>
        <p className="mt-1 text-sm text-heat">Bay Street Group · 多伦多地产经纪</p>
        <p className="mt-4 text-sm leading-loose text-ink/90">
          我在多伦多做地产经纪，买卖和租赁都亲力亲为。做这个“热点雷达”，是因为我发现：
          客户真正缺的不是信息，而是“这条新闻对我意味着什么”的判断。
        </p>
        <p className="mt-3 text-sm leading-loose text-ink/90">
          所以这里每天只精选值得看的 GTA
          地产动态，每条都附上我的点评；每周五还有一封市场速览发到你的邮箱；
          随时想问，就去“问 Wendy AI”——它读过本站全部情报。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://www.youtube.com/@WendyWangRealEstate"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-heat hover:text-heat"
          >
            YouTube: Wendy Wang Real Estate
          </a>
          <a
            href="mailto:wendywang.realestate@gmail.com"
            className="rounded-xl bg-heat px-5 py-2.5 text-sm font-bold text-abyss transition-opacity hover:opacity-90"
          >
            邮件联系 Wendy
          </a>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-black text-ink">服务</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-line bg-panel p-5">
            <p className="text-base font-bold text-heat">{s.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{s.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-black text-ink">这个站的原则</h2>
      <ul className="mt-4 space-y-2.5">
        {principles.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/90">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-radar" />
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-line bg-panel p-6 text-center">
        <p className="text-sm font-bold text-ink">想每周收到市场速览？</p>
        <Link
          href="/subscribe"
          className="mt-4 inline-block rounded-xl bg-heat px-6 py-3 text-sm font-bold text-abyss hover:opacity-90"
        >
          免费订阅
        </Link>
      </div>
    </div>
  );
}
