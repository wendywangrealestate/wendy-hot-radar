// 雷达信息流种子数据：每日精选的多伦多 GTA 地产动态
// 字段约定：每条 = 一条"情报"，含信源、标签、热度与 Wendy 点评
// points / image：总结图卡片用（scripts/shot-summaries.sh 截图生成）

export interface RadarItem {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  source: string;
  firstHand: boolean; // 是否一手来源（官方/机构原始发布）
  tags: string[];
  heat: number; // 热度 0-100
  points: string[]; // 总结图：3 条关键点
  image: string; // 总结图路径 /summaries/<id>.jpg
  title: string;
  summary: string;
  wendyNote: string; // Wendy 点评：这条情报对买卖/租赁决策意味着什么
  url: string;
}

export const radarItems: RadarItem[] = [
{
  "date": "2026-11-24",
  "firstHand": true,
  "heat": 68,
  "id": "toronto-pbr-phase2-nov2026",
  "image": "/summaries/toronto-pbr-phase2-nov2026.jpg",
  "points": [
    "19个项目9,667户出租房",
    "含2,059户可负担租金管制",
    "12个月内须开工否则失效"
  ],
  "source": "多伦多市府11月16日公告（补录）",
  "summary": "多伦多市府11月16日公布第二轮目的性租赁住房激励计划结果：58份申请（约27,000户）中选定19个项目、横跨12个选区，共9,667户出租房，其中2,059户为可负担、租金管制单位；入选项目须12个月内开工，否则失去激励资格。一、二轮合计34个项目、16,886户出租房、3,849户可负担单位。",
  "tags": [
    "租赁供应",
    "可负担住房",
    "市府激励"
  ],
  "time": "07:00",
  "title": "多伦多第二轮租赁激励选定19个项目：9,667户出租房，含2,059户可负担单位",
  "url": "https://www.toronto.ca/news/toronto-moves-nearly-10000-new-rental-homes-closer-to-construction-including-more-than-2000-affordable-homes/",
  "wendyNote": "这是实打实的租赁供应增量，但要读准：9,667户是“获激励资格”、不是“已开工”，12个月开工大限才是试金石。对租客是利好信号——未来一两年多个选区将有新出租房源入市，租金上行压力有望缓解；对租赁投资者，留意这些项目周边的竞争格局变化。"
},
{
  "date": "2026-11-24",
  "firstHand": false,
  "heat": 60,
  "id": "dec-hike-odds-nov24-2026",
  "image": "/summaries/dec-hike-odds-nov24-2026.jpg",
  "points": [
    "Polymarket加息概率52%",
    "Kalshi加息49%逼近五成",
    "经济学家仍3人押按兵不动"
  ],
  "source": "bips 12月议息预测追踪 · 11月24日",
  "summary": "bips 11月24日追踪：12月9日议息，Polymarket加息概率52%、按兵不动48%，较23日的49%翻回五成上方；Kalshi加息49%、按兵不动50%，较23日的41%大幅回升；4位已表态经济学家仍3人押按兵不动、1人押加息。行长Macklem今日12:40在多伦多经济俱乐部讲话，可能是下一个变数。",
  "tags": [
    "央行议息",
    "加息概率",
    "12月9日"
  ],
  "time": "07:00",
  "title": "12月加息概率一日翻回五成上方：Polymarket 52%，Macklem今日讲话成变数",
  "url": "https://bips.ca/resources/bank-of-canada-forecasting",
  "wendyNote": "概率一天之内翻上又翻下，说明市场自己也没拿定主意——52%对49%本质还是五五开。浮动利率客户继续按“可能再加一次”留预算；今天中午Macklem讲话和12月4日就业数据之前，别对任何单边下注。"
},
{
  "date": "2026-11-24",
  "firstHand": false,
  "heat": 56,
  "id": "enterhome-nov24-2026-pulse",
  "image": "/summaries/enterhome-nov24-2026-pulse.jpg",
  "points": [
    "11月至今售出3,785套",
    "同比+174套继续领先",
    "中位价$865,000同比-5.5%"
  ],
  "source": "EnterHome GTA快照 · 11月24日更新",
  "summary": "EnterHome 11月24日快照：11月1–24日GTA售出3,785套，同比+174套、环比10月同期+846套，领先幅度较23日的+91套扩大；中位成交价$865,000，同比-5.5%、环比-0.2%；中位售期69天，比去年同期快2天。量升价跌，仍是买方市场。",
  "tags": [
    "11月成交",
    "月中快照",
    "中位价"
  ],
  "time": "07:00",
  "title": "11月至今GTA售出3,785套：领先去年幅度扩大，中位价同比跌5.5%",
  "url": "https://www.enterhome.ca/research/gta",
  "wendyNote": "销量连续两天跑赢去年，领先幅度从+91扩大到+174，是个实在的积极信号，但中位价同比跌幅也从-4.9%扩大到-5.5%——量回暖不等于价格反转。买家继续按“可挑、可谈”操作；卖家别被销量数字带偏，定价仍贴市场。注意这是抽样快照、非完整MLS统计。"
},
{
  "date": "2026-11-23",
  "firstHand": false,
  "heat": 66,
  "id": "benjamin-tal-eighth-inning-nov2026",
  "image": "/summaries/benjamin-tal-eighth-inning-nov2026.jpg",
  "points": [
    "楼市调整进入第八局",
    "高层Condo仍处衰退",
    "低层住宅已在改善"
  ],
  "source": "CIBC副首席经济学家Benjamin Tal 11月17日演讲 · Storey Team 11月18日刊出",
  "summary": "CIBC副首席经济学家Benjamin Tal 11月17日对多伦多经纪人演讲：楼市调整进入“第八局”，未来3–6个月是过渡期，2027下半年至2028年市场将转忙；高层Condo明确处于衰退，低层住宅已在改善；预计央行再加一次息后暂停，利率不会回到疫情低位；转售Condo售价已低于重建成本，新供应正在悄悄断流。",
  "tags": [
    "专家展望",
    "Condo市场",
    "2027展望"
  ],
  "time": "07:00",
  "title": "CIBC副首席经济学家Tal：楼市调整进入第八局，低层已改善、Condo仍衰退",
  "url": "https://storeyteam.ca/what-benjamin-tal-just-told-toronto-realtors-about-where-the-market-is-headed/",
  "wendyNote": "Tal的判断和我们的盘面一致：Condo买家现在有议价窗口，因为转售价低于重建成本、卖家肯谈，但这个窗口不会一直开——新建供应断流两年后会反过来推高价格。低层卖家可以开始收紧议价空间，Condo卖家未来3–6个月仍须按实价定价、好好呈现。"
},
{
  "date": "2026-11-23",
  "firstHand": false,
  "heat": 63,
  "id": "dec-hike-odds-nov23-2026",
  "image": "/summaries/dec-hike-odds-nov23-2026.jpg",
  "points": [
    "Polymarket加息概率49%",
    "Kalshi仅41%押注加息",
    "4位经济学家3人押按兵不动"
  ],
  "source": "bips 12月议息预测追踪 · 11月23日",
  "summary": "bips 11月23日追踪：12月9日议息，Polymarket加息概率49%、按兵不动51%，Kalshi加息仅41%；4位已表态的经济学家中3人押按兵不动、仅1人押加息。与11月19日约64%的加息概率相比，市场预期已翻转为按兵不动占优；11月24日行长Macklem在多伦多经济俱乐部讲话或是下一个变数。",
  "tags": [
    "央行议息",
    "加息概率",
    "12月9日"
  ],
  "time": "07:00",
  "title": "12月加息概率跌破五成：预测市场转押央行按兵不动",
  "url": "https://bips.ca/resources/bank-of-canada-forecasting",
  "wendyNote": "加息概率翻转对浮动利率客户是喘息信号，但49%对41%仍是五五开，绝不是“不会加”。12月9日之前，12月4日就业数据和明天Macklem讲话都可能再翻盘——浮动利率客户按“可能再加一次”留预算，续贷别赌单边。"
},
{
  "date": "2026-11-23",
  "firstHand": false,
  "heat": 55,
  "id": "enterhome-nov23-2026-pulse",
  "image": "/summaries/enterhome-nov23-2026-pulse.jpg",
  "points": [
    "11月至今售出3,515套",
    "同比+91套反超去年",
    "中位价$865,000同比-4.9%"
  ],
  "source": "EnterHome GTA快照 · 11月23日更新",
  "summary": "EnterHome 11月23日快照：11月1–23日GTA售出3,515套，同比+91套、环比10月同期+577套；中位成交价$865,000，同比-4.9%、环比基本持平；中位售期68天，比去年同期快3天。销量跑赢去年但价格仍在跌，量价组合仍是买方市场。",
  "tags": [
    "11月成交",
    "月中快照",
    "中位价"
  ],
  "time": "07:00",
  "title": "11月至今GTA售出3,515套：销量反超去年同期，中位价同比跌4.9%",
  "url": "https://www.enterhome.ca/research/gta",
  "wendyNote": "11月销量反超去年是积极信号，但要冷静：这是成交量，不是价格反转——中位价同比仍跌近5%。对买家，现在是挑房窗口，议价空间还在；对卖家，别把销量回暖当成可以抬价的理由，定价仍要贴着市场走。注意这是抽样快照、非完整MLS统计。"
},
{
  "id": "kennedy-danforth-rental-hearing-nov25-2026",
  "heat": 72,
  "tags": [
    "Scarborough",
    "租赁拆建",
    "本周观察"
  ],
  "title": "Scarborough拆租房听证11月25日举行：拟建276户，含8户替代租赁单位",
  "summary": "市府11月3日通知已安排11月25日9:30起，由Scarborough Community Council审议411及415 Kennedy Road、636–646 Danforth Road的出租住房拆除申请。方案拟拆8户租赁单位，建设23层、276户混合用途建筑，包含8户替代租赁单位。相关分区申请虽已获OLT批准，但本次租赁拆除程序仍须审议，不能写作已获拆除许可或即将招租。直接发言登记截止11月24日中午12:00。",
  "wendyNote": "附近买家、房东及租客需关注租赁替代、搬迁安排与未来施工，而非只看总户数。行动：将申请20 211505 ESC 20 RH加入社区尽调清单；如客户需要参与，按公告自行登记，核对会后正式决定。",
  "url": "https://secure.toronto.ca/nm/api/individual/notice/8007.do",
  "source": "多伦多市府11月3日公告 · 11月24–25日程序观察；示意图：本简报依据官方资料制作",
  "date": "2026-11-23",
  "time": "08:25",
  "firstHand": true,
  "image": "/summaries/kennedy-danforth-rental-hearing-nov25-2026.svg",
  "points": [
    "11月25日9:30拆租房听证",
    "拟276户，含8户替代租赁",
    "发言登记11月24日中午截止"
  ]
},
{
  "id": "statcan-payroll-gdp-nov2026-watch",
  "heat": 69,
  "tags": [
    "经济日程",
    "房贷预算",
    "观察事项"
  ],
  "title": "经济数据观察：11月26日工资与职位空缺，11月30日公布Q3 GDP",
  "summary": "统计局11月20日更新的日程列明：11月26日发布9月受薪就业、工资、工时及职位空缺；11月30日发布第三季度收入支出法GDP及9月行业GDP。The Daily通常于多伦多时间8:30发布，日程可能调整。目前仅确认发布时间，不能预先报道增长、就业或利率结果。",
  "wendyNote": "这些数据可帮助评估买家收入稳定性及经济前景，也可能影响市场对利率的判断；统计发布并非央行议息，贷款机构报价另行决定。行动：先记录客户当前贷款报价与有效期，数据发布后只根据实际结果及更新报价调整预算。",
  "url": "https://www150.statcan.gc.ca/n1/dai-quo/cal2-eng.htm?WT.mc_id=twt",
  "source": "加拿大统计局11月20日发布日程 · 未来观察；示意图：本简报依据官方日程制作",
  "date": "2026-11-23",
  "time": "08:25",
  "firstHand": true,
  "image": "/summaries/statcan-payroll-gdp-nov2026-watch.svg",
  "points": [
    "11月26日：受薪就业及工资",
    "11月30日：Q3及9月GDP",
    "通常8:30 ET发布，非议息"
  ]
},
{
  "id": "toronto-tax-rent-reduction-dec2026-watch",
  "heat": 65,
  "tags": [
    "租务规则",
    "年末核查",
    "期限观察"
  ],
  "title": "年末租务核查：符合地税降幅条件的物业，留意12月15日租金减免通知",
  "summary": "多伦多市府现行指引说明，符合条件的出租物业若年度地税降幅超过2.49%，可触发RTA第131条下的自动减租；市府向租客发通知的年度期限为12月15日，减租通常12月31日生效。租金降幅并不等于地税降幅，须按物业税类乘15%或20%计算并核对适用条件。这是既有规则的年末观察，不是今日新政策，也不是所有出租屋统一减租。",
  "wendyNote": "租赁续约、出租物业买卖及收益估算，应核对合法租金有没有受税务通知影响。行动：请房东核对2025及2026地税单和市府通知，将适用变动交专业人士确认后更新租金记录。",
  "url": "https://www.toronto.ca/services-payments/property-taxes-utilities/property-tax/rent-reduction/",
  "source": "多伦多市府现行指引 · 12月15日及31日观察；示意图：本简报依据官方规则制作",
  "date": "2026-11-23",
  "time": "08:25",
  "firstHand": true,
  "image": "/summaries/toronto-tax-rent-reduction-dec2026-watch.svg",
  "points": [
    "有条件：地税降幅超过2.49%",
    "12月15日通知；12月31日生效",
    "租金降幅须按税类计算"
  ]
},
{
  "id": "cloudflare-pi16-agent-wait-nov20-2026",
  "heat": 53,
  "tags": [
    "AI工作流程",
    "近期工具更新"
  ],
  "title": "近期AI工具：Cloudflare助手可暂停等待人工答复，再恢复执行",
  "summary": "Cloudflare 11月20日发布Agents SDK v0.34.0对Pi 1.6的支持。工具可等待人工答复、信号或期限，等待期间不保持Durable Object调用运行；beforeTool可用于执行前人工确认。它是开发者能力，不会自动为现有网站增加审批功能。官方提示升级后Pi 1.5无法继续运行新版会话，需评估兼容性。",
  "wendyNote": "地产AI处理报价草稿、交接安排或待审核文案时，可让流程真正等待人工决定，而非持续运行。行动：只在测试环境用虚构资料验证“生成草稿—等待确认—恢复”的流程，评估成本和兼容性后再决定是否采用。",
  "url": "https://developers.cloudflare.com/changelog/post/2026-11-20-pi-harness-pi-1-6/",
  "source": "Cloudflare官方11月20日更新 · 开发者工具；示意图：本简报依据官方流程制作",
  "date": "2026-11-23",
  "time": "08:25",
  "firstHand": true,
  "image": "/summaries/cloudflare-pi16-agent-wait-nov20-2026.svg",
  "points": [
    "Pi 1.6工具可暂停等待信号",
    "可在执行前等待人工确认",
    "开发者配置；须评估兼容性"
  ]
},
{
  "id": "cloudflare-hosted-images-analytics-nov20-2026",
  "heat": 51,
  "tags": [
    "网站技术",
    "图片数据",
    "近期更新"
  ],
  "title": "网站技术：Cloudflare Images新增图片请求分析，能查错误和来源",
  "summary": "Cloudflare 11月20日推出Hosted Images Analytics，可查看最多30天的托管图片传输数据，按来源、国家、状态码等筛选，并查看最常请求的图片及变体。适用范围是存储在Cloudflare Images的资产；图片请求数不是独立访客数、阅读人数或客户线索，也不代表现有网站已接入该服务。",
  "wendyNote": "对于房源图库和社区页面，可帮助定位图片失效、异常请求与常用尺寸，但不能独立衡量获客成效。行动：先确认网站实际图片托管方式；若使用该服务，再结合页面访问与咨询转化数据评估。",
  "url": "https://developers.cloudflare.com/changelog/post/2026-11-20-hosted-image-delivery-analytics/",
  "source": "Cloudflare官方11月20日更新；示意图：本简报依据官方功能资料制作",
  "date": "2026-11-23",
  "time": "08:25",
  "firstHand": true,
  "image": "/summaries/cloudflare-hosted-images-analytics-nov20-2026.svg",
  "points": [
    "最多30天托管图片请求数据",
    "支持来源及状态码筛选",
    "请求数不是独立访客或线索"
  ]
},
{
  "id": "cosburn-agi-application-nov21-2026",
  "heat": 66,
  "source": "TorontoToday · 11月21日报道；LTB现行指引；示意图：本简报",
  "firstHand": false,
  "tags": [
    "416租赁",
    "AGI申请"
  ],
  "points": [
    "50 Cosburn申请额6.67%",
    "租客提出争议；非已批准",
    "资本支出申请受LTB审核"
  ],
  "image": "/summaries/cosburn-agi-nov21-2026.svg",
  "title": "50 Cosburn涨租争议：6.67%是AGI申请，不是已批准涨幅",
  "summary": "TorontoToday 11月21日报道，50 Cosburn Avenue房东提出6.67%的超指导线涨租（AGI）申请，以阳台及车库工程为依据，租客组织正提出争议。报道所述为申请，并无已批准裁决。LTB现行指引要求资本支出申请接受审核，并说明仅有申请或通知不等于额外涨幅已获批准；本案不代表安省出台新租金规则。",
  "wendyNote": "对出租物业估值及房东建议，应把当前合法租金与尚待审批的收入分开。行动：尽调时索取L5申请、租金通知及LTB命令，不把待批AGI计作确定收入。",
  "url": "https://www.torontotoday.ca/local/real-estate-housing/toronto-tenants-fourth-unjustified-above-guideline-rent-increase-less-than-10-years-13043824",
  "date": "2026-11-22",
  "time": "08:45"
},
{
  "id": "apps-script-gemini-ga-nov16-2026",
  "heat": 54,
  "source": "Google Workspace官方 · 11月16日近期更新；图：Google开发者文档",
  "firstHand": true,
  "tags": [
    "AI工具",
    "地产工作流程"
  ],
  "points": [
    "Apps Script内生成修改调试代码",
    "可逐项接受或拒绝建议",
    "需要合资格许可及设置"
  ],
  "image": "https://developers.google.com/static/apps-script/images/gemini-accept-reject.gif",
  "title": "近期AI工具：Apps Script的Gemini侧栏正式开放，支持逐项审阅代码",
  "summary": "Google 11月16日发布说明，Apps Script编辑器的Gemini侧栏已正式开放，可生成、修改与调试代码，并逐项接受或拒绝建议。官方文档列有合资格Google Workspace或Google AI许可及管理员设置要求，不是所有免费账户自动可用。这是近期功能补充，不是11月22日新发布。",
  "wendyNote": "可帮助整理看房反馈、表格及文档，但不是开箱即用的地产系统。行动：先用虚构看房反馈测试一个仅生成汇总文档、不发邮件的脚本，逐项检查代码和所需权限。",
  "url": "https://developers.google.com/apps-script/guides/gemini",
  "date": "2026-11-22",
  "time": "08:45"
},
{
  "id": "google-core-nov2026-rollout-watch",
  "heat": 52,
  "source": "Google Search官方状态及指引 · 11月22日核查；持续观察；示意图：本简报",
  "firstHand": true,
  "tags": [
    "网站获客",
    "SEO观察"
  ],
  "points": [
    "11月10日启动全球核心更新",
    "截至核查未见结束公告",
    "结束后至少一周再评估"
  ],
  "image": "/summaries/google-core-nov22-2026-watch.svg",
  "title": "网站获客观察：Google 11月核心更新仍未公布结束",
  "summary": "截至11月22日早间核查，Google官方状态页仍只显示11月10日启动的全球、全语言核心更新，原预计最多约两周，未显示结束公告；不应把约两周视为确定结束日。这是持续观察事项，不是今日新算法发布。Google建议完成后至少等待一整周，再比较Search Console数据。",
  "wendyNote": "Insights和社区页面的搜索表现需与更新窗口分开分析，不能仅凭短期波动判断改版效果。行动：记录更新前的曝光、点击和查询基线，待官方确认结束后一周再评估，避免因短期波动批量改写页面。",
  "url": "https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc",
  "date": "2026-11-22",
  "time": "08:45"
},
{
  "date": "2026-11-22",
  "firstHand": true,
  "heat": 70,
  "id": "ratehub-affordability-oct2026",
  "image": "/summaries/ratehub-oct2026-verified.svg",
  "points": [
    "13城负担能力全线恶化",
    "5年固定均值4.99% +43基点",
    "多伦多月供增约$200"
  ],
  "source": "Ratehub.ca原始报告 · 11月19日；11月20日媒体跟进；示意图：本简报依据报告数据制作",
  "summary": "Ratehub.ca 11月19日发布10月负担能力报告：13个研究城市的负担能力均恶化。研究采用的大行五年固定平均利率由9月4.56%升至10月4.99%；多伦多模型所需年收入增加$6,680，月供增加约$200。模型假设首付10%、25年摊销、年地税$4,000、月暖气$150；这不是今日最优惠利率或个人贷款报价。",
  "tags": [
    "负担能力",
    "固定利率",
    "10月数据"
  ],
  "time": "07:00",
  "title": "10月负担能力13城全线恶化：多伦多买房所需收入增$6,680",
  "url": "https://www.ratehub.ca/blog/home-affordability-canada-october-2026/",
  "wendyNote": "对416及GTA买卖，房价降低不保证月供同步下降；城市模型也不能代替具体房源预算。行动：按客户最新书面贷款报价、实际首付、地税与管理费重算购买上限，再安排出价。"
},
{
  "date": "2026-11-22",
  "firstHand": true,
  "heat": 68,
  "id": "td-variable-mortgages-35pct-nov2026",
  "image": "https://economics.td.com/domains/economics.td.com/images/reports/ms/can-consumers-2026/chart4.png",
  "points": [
    "浮动按揭占存量35%创新高",
    "TD预计1月再加息",
    "安省拖欠率0.34%逼近危机峰值"
  ],
  "source": "TD Economics原始研究 · 11月19日；11月20日媒体跟进；图表：TD Economics",
  "summary": "TD 11月19日研究称，浮动利率占加拿大存量按揭35%；安省8月按揭拖欠率0.34%，高于疫前0.12%，但仍低于金融危机峰值0.43%。浮动且付款额调整的借款人更快感受利率变动，固定付款额者主要先受利息占比影响。TD预计1月再加息、安省拖欠率于2027年中趋稳，均为预测，不是央行决定。",
  "tags": [
    "浮动按揭",
    "拖欠率",
    "利率展望"
  ],
  "time": "07:00",
  "title": "TD：浮动按揭占35%，安省8月按揭拖欠率升至0.34%",
  "url": "https://economics.td.com/can-consumers-2026",
  "wendyNote": "拖欠率上升值得做现金流核查，但不能据此推断GTA将出现大量急售。行动：与续贷或高杠杆客户分别测算当前报价及加息0.25个百分点的现金流，核实付款类型与备用资金。"
},
{
  "id": "boc-slos-q3-nov20-2026",
  "heat": 77,
  "source": "加拿大央行 · 11月20日发布安排及Q3调查表；图：加拿大央行",
  "tags": [
    "贷款调查",
    "房贷议价"
  ],
  "points": [
    "Q3房贷条件净值 -26.27",
    "价格条件 -52.55；非价格 0",
    "调查净值不是贷款利率"
  ],
  "image": "https://www.bankofcanada.ca/wp-content/uploads/2022/01/default-og-image.jpg",
  "title": "央行Q3贷款调查：房贷价格条件趋松，审批条件未同步放宽",
  "summary": "央行11月20日安排发布Senior Loan Officer Survey。当前Q3表格中，房贷总体条件意见净值为-26.27（Q2为0.64），价格条件-52.55，非价格条件0；负值表示净宽松，0表示净不变。它反映第三季度受访机构意见，并非房贷利率或降息幅度，也不是新的央行政策利率决定。",
  "wendyNote": "对安省买家和续贷客户，价格竞争与资格审批要分开理解；季度调查不能替代今天的书面报价。行动：请贷款经纪同时核实利率、费用、审批材料和报价有效期，再更新客户预算。",
  "url": "https://www.bankofcanada.ca/publications/slos/",
  "date": "2026-11-21",
  "time": "09:00",
  "firstHand": true
},
{
  "id": "king-west-construction-nov23-2026",
  "heat": 74,
  "source": "多伦多市府及TTC · 11月20日公告；示意图：本简报依据官方日程制作",
  "tags": [
    "416社区",
    "交通与带看"
  ],
  "points": [
    "Dufferin至Close：11月23日起",
    "King部分工程延续至2027年",
    "504/304将改道Queen"
  ],
  "image": "/summaries/king-west-nov23-2026.svg",
  "title": "下周一开始：King Street West多年工程影响通勤和带看",
  "summary": "市府11月20日公布King Street West供水管及街车轨道更新：Dufferin至Close段11月23日开始，预计至2027年秋；Spadina至Portland段最早12月开始。11月23日起504/304 King街车在Shaw至Roncesvalles之间改行Queen Street West；工程日程可能调整。",
  "wendyNote": "King West及Parkdale买卖、出租客户的通勤与搬家安排需按实际改道核实，不能继续套用旧路线用时。行动：为附近看房和交接预约重新规划路线，并把市府施工链接加入客户社区资料。",
  "url": "https://www.toronto.ca/news/city-of-toronto-and-ttc-begin-major-infrastructure-improvements-on-king-street-west/",
  "date": "2026-11-21",
  "time": "09:00",
  "firstHand": true
},
{
  "id": "parkdale-92-affordable-start-nov20-2026",
  "heat": 70,
  "source": "多伦多市府 · 11月20日；示意图：本简报依据官方数据制作",
  "tags": [
    "出租供应",
    "住房政策落实"
  ],
  "points": [
    "1337–1339 King St W",
    "92户含10户租赁替代单位",
    "已开工；未公布招租日期"
  ],
  "image": "/summaries/parkdale-92-nov20-2026.svg",
  "title": "Parkdale 92户可负担出租房开工：包含10户租赁替代单位",
  "summary": "市府与联邦政府11月20日宣布1337至1339 King St. W.的10层、92户可负担出租住房开始施工，项目由Parkdale United Church Foundation主导，面向低收入个人和家庭。92户包含10户租赁替代单位，不能全部称为净新增供应；公告没有公布入住或招租时间。市府资本支持超过$1,550万，另有$200万房产税豁免，联邦支持$2,900万。",
  "wendyNote": "这是既有住房支持计划落地的施工进展，并非新租金法规或即时可租房源，也不足以推断周边市场租金会下降。行动：在社区资料中标注为在建项目，只在正式公布后向租客提供申请条件与渠道。",
  "url": "https://www.toronto.ca/news/city-of-toronto-and-government-of-canada-begin-construction-on-92-affordable-rental-homes-in-parkdale/",
  "date": "2026-11-21",
  "time": "09:00",
  "firstHand": true
},
{
  "id": "microsoft-ai-ad-transparency-nov19-2026",
  "heat": 58,
  "source": "Microsoft Advertising官方 · 11月19日近期更新；图：Microsoft",
  "tags": [
    "数字营销",
    "AI图片"
  ],
  "points": [
    "AI图片与视频申报控件已普遍开放",
    "可见水印视格式支持",
    "广告主仍负责申报准确性"
  ],
  "image": "https://about.ads.microsoft.com/content/dam/sites/msa-about/global/common/content-lib/blogs/blog/2026/11/pub_NewHero_90713_844x315.png",
  "title": "近期营销更新：Microsoft广告开放AI图片与视频透明度控件",
  "summary": "Microsoft 11月19日宣布AI内容透明度控件已普遍开放，允许广告主申报AI生成图片及视频，并在支持的格式中选择可见水印。控件覆盖多种广告格式，实际功能因格式与工作流程而异；平台检测信号仅供参考，申报责任仍由广告主承担。这是平台功能，不代表安省新增了同名法规。",
  "wendyNote": "使用AI布置或生成房源宣传图时，应让客户清楚区分实拍与生成内容，并核实适用平台要求。行动：保留原图，为AI素材做清楚标注，在投放前检查广告资产申报设置。",
  "url": "https://about.ads.microsoft.com/en/blog/post/november-2026/put-ai-to-work-engaging-customers-in-more-places-whats-new-in-microsoft-advertising-this-november",
  "date": "2026-11-21",
  "time": "09:00",
  "firstHand": true
},
{
  "id": "google-semantic-governance-nov20-2026",
  "heat": 55,
  "source": "Google Developers官方 · 11月20日；开发者预览；图：Google",
  "tags": [
    "地产AI工具",
    "客户资料"
  ],
  "points": [
    "工具调用执行前检查",
    "对照用户意图与业务规则",
    "预览功能；先做dry run"
  ],
  "image": "https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/header_2.2e16d0ba.fill-1200x600.png",
  "title": "Google预览AI执行前规则检查：适用于有发信或文件权限的助手",
  "summary": "Google 11月20日推出Gemini platform Semantic governance policies预览，经Agent Gateway在工具调用执行前，检查用户意图与自然语言业务规则。判定和理由可记入Cloud Logging；纯文字回复不在检查范围，流式模型回复目前不评估。判定具有概率性，官方建议先dry run测试，与其他控制共同使用。",
  "wendyNote": "对地产AI助手，发送租客资料和修改客户文件比生成文案更需要明确操作边界；这不是现成的地产插件。行动：先用虚构资料测试“未获人工审核不得向外部发送客户文件”等规则，再考虑由开发者接入。",
  "url": "https://developers.googleblog.com/check-what-your-ai-agents-do-before-they-do-it-with-semantic-governance-policies/",
  "date": "2026-11-21",
  "time": "09:00",
  "firstHand": true
},
{
  "id": "reco-luxury-homes-suspension-nov2026",
  "heat": 80,
  "source": "RECO官方注册记录 · 决定日期11月17日；近期实质更新；示意图：本简报",
  "tags": [
    "监管进展",
    "定金安全"
  ],
  "points": [
    "11月17日即时暂停注册",
    "撤销注册仍为提案",
    "有权要求听证"
  ],
  "image": "/summaries/reco-suspension-nov17-2026-update.svg",
  "title": "RECO暂停Luxury Homes World注册，拟撤销注册仍待程序",
  "summary": "相较11月10日账户冻结，RECO记录新增实质进展：11月17日对Luxury Homes World Inc.及其Broker of Record Inthiran Swamy即时暂停注册，并提出撤销注册。提案涉及消费者定金处理及配合检查等指控；当事人有权要求听证，不能写作最终撤销或法院定罪。",
  "wendyNote": "对416和GTA买卖或租赁合作，注册状态与收款主体需及时核实。行动：若在办交易涉及该公司，立即与自己的Broker of Record及律师确认后续安排，并独立核验付款指示。",
  "url": "https://registrantsearch.reco.on.ca/RegistrarProposals",
  "date": "2026-11-20",
  "time": "08:10",
  "firstHand": true
},
{
  "id": "boc-macklem-nov24-2026-watch",
  "heat": 64,
  "source": "加拿大央行官方活动通知 · 11月24日观察事项；图：加拿大央行",
  "tags": [
    "央行观察",
    "房贷沟通"
  ],
  "points": [
    "11月24日多伦多讲话",
    "12:25公布稿件；12:40讲话",
    "不是议息决定"
  ],
  "image": "https://www.bankofcanada.ca/wp-content/uploads/2022/01/default-og-image.jpg",
  "title": "央行观察：Macklem 11月24日在多伦多谈经济与货币政策挑战",
  "summary": "央行已安排Macklem于11月24日12:40（多伦多时间）向Economic Club of Canada讲话，主题是加拿大经济展望与货币政策面临的挑战；稿件预计12:25公布。这是未来观察事项，不是新的利率决定，不能预先推断讲话结果或客户房贷报价变化。",
  "wendyNote": "年底续贷和交割客户可留意风险表述变化，但政策利率与贷款机构实际报价不同。行动：先取得书面贷款报价及有效期，讲话后只对实质信息更新预算。",
  "url": "https://www.bankofcanada.ca/2026/11/speech-tiff-macklem-governor-bank-canada-2026-11-24/",
  "date": "2026-11-20",
  "time": "08:10",
  "firstHand": true
},
{
  "id": "ellesmere-holding-nov27-2026-watch",
  "heat": 61,
  "source": "多伦多市府 · 11月13日通知；11月27日期限观察；示意图：本简报",
  "tags": [
    "Scarborough",
    "规划期限"
  ],
  "points": [
    "3307及3313 Ellesmere",
    "拟11层166户",
    "11月27日书面意见截止"
  ],
  "image": "/summaries/ellesmere-nov27-2026-watch.svg",
  "title": "Scarborough规划观察：Ellesmere拟建166户项目，11月27日意见截止",
  "summary": "市府11月13日通知，3307及3313 Ellesmere Road申请移除分区Holding Symbol，以允许11层、166个住宅单位及底层168平方米商业空间。书面意见须在11月27日前提交，决定不早于12月15日作出。本项为已公布程序期限，申请不等于已获施工许可。",
  "wendyNote": "对附近买家、卖家及出租客户，可用作社区未来建设的尽调线索，不能直接推断物业升值或近期新增可租房。行动：把该地址和申请编号26 216092 ESC 25 OZ加入附近房源的社区核查清单。",
  "url": "https://secure.toronto.ca/nm/api/individual/notice/8023.do",
  "date": "2026-11-20",
  "time": "08:10",
  "firstHand": true
},
{
  "id": "gemini-api-tool-retrieval-nov19-2026",
  "heat": 52,
  "source": "Google官方 · 11月19日；图：Google",
  "tags": [
    "AI工具",
    "开发者预览"
  ],
  "points": [
    "按需加载工具参数",
    "Interactions API预览",
    "不等于网站自动升级"
  ],
  "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Tool_retrieval_hero.width-1300.png",
  "title": "Gemini API新增工具检索预览，供复杂地产AI助手评估",
  "summary": "Google11月19日宣布Tool Retrieval进入Gemini Interactions API预览。工具较多时，可按任务需要加载参数定义，减少每次请求都传送完整工具说明的开销。它是开发者API能力，不是普通Gemini应用按钮，也不会自动改变现有网站。",
  "wendyNote": "如果未来AI问答同时连接社区查询、房源与预约工具，可以评估速度和成本收益。行动：先统计现有助手的工具数量、响应时间和输入用量，再决定是否值得测试，保留人工核对。",
  "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/",
  "date": "2026-11-20",
  "time": "08:10",
  "firstHand": true
},
{
  "id": "cloudflare-snapshot-formats-nov19-2026",
  "heat": 47,
  "source": "Cloudflare官方 · 11月19日；技术流程示意图：本简报",
  "tags": [
    "网站技术",
    "资料核验"
  ],
  "points": [
    "单次加载支持更多输出",
    "新增PDF、链接、元素和JSON",
    "JSON提取涉及Workers AI用量"
  ],
  "image": "/summaries/cloudflare-snapshot-nov19-2026.svg",
  "title": "Cloudflare快照新增PDF和结构化输出，可评估用于新闻来源留档",
  "summary": "Cloudflare11月19日更新Browser Run的/snapshot接口，新增PDF、链接、抓取元素及JSON格式，可在单次页面加载中获取多种输出；JSON提取涉及Workers AI用量。它是另行使用的开发能力，使用Cloudflare域名或DNS不会自动启用。",
  "wendyNote": "对Hot Radar和Insights，可评估同时保存来源页面和提取结果，方便核对日期与原文；技术提取仍可能有错。行动：先以一条官方公告测试PDF与链接核对，确认成本和准确性后再考虑接入。",
  "url": "https://developers.cloudflare.com/changelog/post/2026-11-19-snapshot-all-formats/",
  "date": "2026-11-20",
  "time": "08:10",
  "firstHand": true
},
{
  "id": "macklem-step-down-jun2027",
  "heat": 64,
  "source": "加拿大央行 · 11月16日宣布",
  "tags": [
    "央行行长",
    "利率前景",
    "换届"
  ],
  "points": [
    "任期2027年6月2日结束",
    "继任遴选明春完成",
    "12月议息仍由他主持"
  ],
  "image": "/summaries/macklem-step-down-jun2027.jpg",
  "title": "央行行长 Macklem 明年6月卸任，继任者明春揭晓",
  "summary": "加拿大央行11月16日宣布，行长 Tiff Macklem 不寻求连任，七年任期将于2027年6月2日结束；董事会已成立遴选委员会并委托 Egon Zehnder 寻访继任者，遴选预计2027年春季完成，新行长任期七年、自2027年6月3日起。换届期间 Macklem 继续履职，12月9日议息仍由他主持。",
  "wendyNote": "行长换人本身不改变12月议息：Macklem 仍主持12月9日决策，市场定价的约60%加息概率不受影响。真正的变量在明春——新行长的政策倾向要到人选揭晓才明朗，2027年续贷或长锁固定利率的客户，别把远期利率路径当成已定局。",
  "url": "https://www.bankofcanada.ca/2026/11/bank-of-canada-governor-tiff-macklem-to-step-down-in-june-2027/",
  "date": "2026-11-20",
  "time": "07:00",
  "firstHand": true
},
{
  "id": "movesmartly-oct2026-over-asking",
  "heat": 58,
  "source": "Move Smartly 10月月报",
  "tags": [
    "议价空间",
    "416独立屋",
    "10月成交"
  ],
  "points": [
    "416独立屋30%超挂牌成交",
    "郊区仅19% 库存3.4个月",
    "GTA独立屋销量低23%"
  ],
  "image": "/summaries/movesmartly-oct2026-over-asking.jpg",
  "title": "416独立屋30%超挂牌价成交，郊区仅19%",
  "summary": "Move Smartly 10月月报：多伦多市低层独立屋销量同比微增1%、均价仅跌1%，库存3.4个月、远低于郊区的4.3个月，10月有30%的市内独立屋以高于挂牌价成交，郊区仅19%。全GTA独立屋销量同比跌6%、较十年10月均值低23%，Condo销量跌10%、较十年均值低32%，两类库存均较去年收紧。",
  "wendyNote": "市内好房仍在抢：30%超挂牌成交说明定价准的416独立屋不缺买家，卖家别因大盘疲软就自降身价。郊区与Condo买家议价空间更大，但要盯紧库存——独立屋3.4个月已近平衡，拖久了选择只会更少。",
  "url": "https://insights.movesmartly.com/articles/higher-rates-keep-toronto-area-buyers-on-the-sidelines-in-october",
  "date": "2026-11-20",
  "time": "07:00",
  "firstHand": false
},
{
  "id": "enterhome-nov2026-midmonth-pulse",
  "heat": 56,
  "source": "EnterHome 月中快照 · 11月20日",
  "tags": [
    "11月成交",
    "月中快照",
    "成交价"
  ],
  "points": [
    "11月前20天售出3,132套",
    "中位价$865,500 同比-5%",
    "售期68天 比10月快8天"
  ],
  "image": "/summaries/enterhome-nov2026-midmonth-pulse.jpg",
  "title": "11月前20天GTA售出3,132套，中位价$865,500",
  "summary": "EnterHome 11月20日月中快照：GTA 11月前20天售出3,132套，较10月同期多616套、较去年同期少112套；中位成交价$865,500，较10月同期低1.1%、同比低5.0%；中位售期68天，较10月快8天、较去年快3天。注意：该统计为经纪机构索引样本、非全市场普查，仅作11月走势的月中参考。",
  "wendyNote": "11月成交节奏跑赢了10月、基本追平去年同期，售期还在缩短——市场没有在入冬后熄火。但中位价同比仍低5%，买家手里仍有议价空间；这组数字是抽样快照，TRREB 12月初的11月全月官方数才是定论。",
  "url": "https://www.enterhome.ca/research/gta",
  "date": "2026-11-20",
  "time": "07:00",
  "firstHand": false
},
{
  "id": "ltb-nov30-forms-2026-watch",
  "date": "2026-11-19",
  "time": "08:45",
  "firstHand": true,
  "heat": 62,
  "source": "Tribunals Ontario · 9月21日公告；期限观察；示意图：本简报绘制",
  "tags": [
    "租赁政策",
    "11月30日期限"
  ],
  "points": [
    "11月30日起旧版不再接受",
    "涉及N5/N6/N8/N12/N13等",
    "已生效安排，不是今日新法"
  ],
  "image": "/summaries/ltb-forms-nov30-2026-watch.svg",
  "title": "租务期限观察：11月30日起，指定旧版LTB表格不再接受",
  "summary": "LTB9月21日已更新多项表格，指定旧版自2026年11月30日起不再接受，包括N5、N6、N8、N12、N13、L1、L2、L9、L10和T5。这是已公布期限提醒，不能写成今天通过的新法规。",
  "wendyNote": "对出租管理与交易中的租务文件，版本错误可能影响程序。行动：清理电脑保存的旧模板，处理新事项时从LTB官方页面重新下载，并核对说明。",
  "url": "https://tribunalsontario.ca/2026/09/21/ltb-operational-update-legislative-changes-at-the-landlord-and-tenant-board-effective-september-21-2026/"
},
{
  "id": "microsoft-unified-plans-nov18-2026",
  "date": "2026-11-19",
  "time": "08:45",
  "firstHand": true,
  "heat": 51,
  "source": "Microsoft官方 · 11月18日；图：Microsoft",
  "tags": [
    "AI工作流",
    "任务管理"
  ],
  "points": [
    "统一任务与计划平台",
    "Copilot可结合计划处理任务",
    "To Do计划2027年6月30日退役"
  ],
  "image": "https://techcommunity.microsoft.com/t5/s/gxcuf89792/images/bS00NTczOTU4LWt6QjNIbA?revision=19",
  "title": "Microsoft统一任务与计划：Copilot工作流整合，To Do公布退役日期",
  "summary": "Microsoft11月18日介绍统一计划平台，将个人与团队任务整合到Planner及Copilot体验。部分功能已开放、部分逐步推出，付费功能仍取决于许可。To Do应用计划2027年6月30日退役，现有任务不会自动迁入新的私人计划。",
  "wendyNote": "四人团队可先试一个挂牌准备清单，明确负责人、日期与完成条件。行动：若使用Microsoft To Do，盘点个人与工作账户的清单及整合，先测试迁移，不急着更换全部工具。",
  "url": "https://techcommunity.microsoft.com/blog/plannerblog/introducing-unified-tasks-and-plans-for-copilot-and-microsoft-365/4573958"
},
{
  "id": "google-marketing-platform-nov18-2026",
  "date": "2026-11-19",
  "time": "08:45",
  "firstHand": true,
  "heat": 43,
  "source": "Google官方 · 11月18日；图：Google",
  "tags": [
    "数字营销",
    "广告渠道"
  ],
  "points": [
    "DV360新增Pinterest库存",
    "加拿大Loblaw媒体整合",
    "不等于普通Google Ads自动开放"
  ],
  "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ss_0108-GMP_Drop_November___Design_Frame01_.max-1440x810.png",
  "title": "Google营销平台新增Pinterest与加拿大Loblaw整合，小型地产业务先核对适用性",
  "summary": "Google11月18日公布Marketing Platform更新：Display & Video 360可访问Pinterest广告库存，并新增加拿大Loblaw Advance受众与销售衡量整合。Spotify相关Google受众功能则注明美国和印度；这些不是所有普通Google Ads账户都自动获得的功能。",
  "wendyNote": "大型零售媒体工具未必适合本地地产获客。行动：先核对广告平台与住房广告限制，把预算评估落到实际咨询和预约，不凭新功能或曝光量就增加支出。",
  "url": "https://blog.google/products/marketingplatform/360/google-marketing-platform-drop-november/"
},
{
  "id": "teranet-hpi-oct2026",
  "heat": 72,
  "source": "Teranet–National Bank官方 · 11月18日；示意图：本简报依官方数据绘制",
  "tags": [
    "房价指数",
    "转售市场",
    "多伦多"
  ],
  "points": [
    "多伦多季调环比+0.6%",
    "多伦多同比-5.2%",
    "综合季调+0.2%；未季调-0.6%"
  ],
  "image": "/summaries/teranet-oct2026-verified.svg",
  "title": "Teranet 10月：多伦多房价指数季调环比升0.6%，同比仍跌5.2%",
  "summary": "Teranet–National Bank11月18日发布10月指数：多伦多季调环比+0.6%，同比-5.2%；11个都会区综合指数季调环比+0.2%，未季调环比则为-0.6%，同比-3.5%。该指数采用土地登记资料的重复销售法，不等于TRREB当月平均成交价，也不是Toronto 416每个社区的表现。",
  "wendyNote": "单月回升不能作为某套房升值的依据。行动：为正在谈价的416房源，更新同楼或同街近期成交与直接竞争盘；向客户同时展示月度和年度口径。",
  "url": "https://housepriceindex.ca/2026/11/october2026/",
  "date": "2026-11-19",
  "time": "07:00",
  "firstHand": true
},
{
  "id": "gravelle-scenarios-dec-odds-nov2026",
  "heat": 66,
  "source": "加拿大央行讲话；市场定价补充：CMT / Bloomberg（11月18日）",
  "tags": [
    "央行",
    "加息预期",
    "12月议息"
  ],
  "points": [
    "高油价情景风险已部分实现",
    "政策利率2.50%并非房贷报价",
    "下次12月9日决定尚未发生"
  ],
  "image": "/summaries/gravelle-scenarios-dec-odds-nov2026.jpg",
  "title": "央行11月18日讲话强调情景分析：风险提示不等于确定利率路径",
  "summary": "Gravelle11月18日说明，4月高油价情景与随后实际情况较接近，该情景涉及通胀更持久和进一步加息。情景用于说明条件变化下的可能反应，并不承诺某次会议结果。CMT转载Bloomberg所引隔夜掉期约60%加息概率属于市场定价，不能直接与其他预测平台概率混用或视为央行承诺。",
  "wendyNote": "政策利率与贷款机构实际报价不同。行动：给年底续贷或交割客户比较当前方案与利率再上升0.25个百分点的月供，实际影响让贷款经纪按合同核实。",
  "url": "https://www.bankofcanada.ca/2026/11/setting-the-scenario-monetary-policy-communications-in-uncertain-times/",
  "date": "2026-11-19",
  "time": "07:00",
  "firstHand": false
},
{
  "id": "statcan-nhpi-oct2026",
  "heat": 64,
  "source": "加拿大统计局 · 11月18日发布",
  "tags": [
    "新房价格",
    "统计局",
    "多伦多"
  ],
  "points": [
    "全国环比-0.2%",
    "安省环比-0.1%",
    "仅新独立屋、半独立屋、联排"
  ],
  "image": "/summaries/statcan-nhpi-oct2026.jpg",
  "title": "统计局10月新住房指数：全国环比跌0.2%，安省跌0.1%",
  "summary": "统计局11月18日发布10月新住房价格指数：全国环比-0.2%，安省环比-0.1%。调查覆盖新建独立屋、半独立屋和联排屋，按开发商与买家签约价格、扣除增值税跟踪变化；不含二手转售，也不能直接当作高层公寓楼花价格指标。",
  "wendyNote": "新房市场走势可作背景，但具体项目要比较净价、优惠、交付风险及同类竞品。行动：不要把这份低层新房指数套用于高层Condo楼花。",
  "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/261118/dq261118d-eng.htm",
  "date": "2026-11-19",
  "time": "07:00",
  "firstHand": true
},
{
  "id": "urbanation-oct2026-entry-condo",
  "heat": 60,
  "source": "近期报告补充：Urbanation 10月报告经经纪博客解读；TRREB月报交叉核对",
  "tags": [
    "Condo市场",
    "首置买家",
    "入门价位"
  ],
  "points": [
    "Condo均价$621,400",
    "50万以下销量+28%",
    "在售8,100套 供应5.8个月"
  ],
  "image": "/summaries/urbanation-oct2026-entry-condo.jpg",
  "title": "10月Condo：50万以下销量大涨28%、占成交42%，低价盘带回买家",
  "summary": "近期Urbanation10月GTA报告的经纪解读指出，50万加元以下Condo成交占比42%，该价位成交同比+28%。TRREB10月月报列全部Condo成交1,385套、均价$621,400、在售8,100套。这里是10月统计与近期解读，并非11月19日新成交；数字不代表所有416大楼。",
  "wendyNote": "低总价不是唯一筛选条件。行动：对入门Condo比较同楼成交、管理费、储备基金及贷款预算，不根据某价位成交比例推断即将涨价。",
  "url": "https://www.antonymalfara.com/blog/gta-housing-market-october-2026-urbanation",
  "date": "2026-11-19",
  "time": "07:00",
  "firstHand": false
},
{
  "id": "foreign-buyer-legislation-nov2026-update",
  "heat": 76,
  "source": "加拿大财政部 · 11月16日立法进展；资料图：CTBUH / Terri Meyer Boake",
  "tags": [
    "立法提案",
    "购房资格"
  ],
  "points": [
    "拟延长既有住宅禁购至2029年",
    "新房豁免仍待监管程序",
    "不可按已生效招揽买家"
  ],
  "image": "https://images.skyscrapercenter.com/building/gibson-square-north_terri-meyer-boake9.jpg",
  "title": "联邦推进外国买家禁令延期立法，新房豁免仍待监管程序",
  "summary": "财政部11月16日表示，已推进预算中的立法提案，拟将外国买家购买既有住宅的禁令延长两年至2029年1月1日；新建住宅豁免另需启动监管程序。这是预算公布后的程序进展，不能视为新房豁免已生效。",
  "wendyNote": "对Toronto 416与GTA买卖业务，先核实买家身份及现行豁免，不能承诺新房现在已向所有外国买家开放。行动：更新买家咨询清单，交易前让律师核对资格。",
  "url": "https://www.canada.ca/en/department-finance/news/2026/11/government-of-canada-tables-plan-to-ease-grocery-costs-support-homeownership-and-encourage-new-home-construction.html",
  "date": "2026-11-18",
  "time": "08:05",
  "firstHand": true
},
{
  "id": "bank-posted-rates-nov18-2026-watch",
  "heat": 66,
  "source": "加拿大央行官方周表 · 截至11月11日；图：加拿大央行",
  "tags": [
    "观察事项",
    "房贷报价"
  ],
  "points": [
    "最新可见周表日期11月11日",
    "Prime 4.70%",
    "五年固定挂牌6.19%非实际报价"
  ],
  "image": "https://www.bankofcanada.ca/wp-content/uploads/2022/01/default-og-image.jpg",
  "title": "本周房贷报价观察：最新央行银行周表仍为11月11日",
  "summary": "11月18日晨核实，央行银行挂牌利率表最新可见一期为11月11日：Prime 4.70%、五年期传统按揭挂牌利率6.19%。这是银行挂牌统计，并非央行政策利率，也不是客户实际优惠报价；本项为本周数据更新观察，不是今日调息消息。",
  "wendyNote": "年底交割或续贷客户应按书面报价做预算。行动：向贷款经纪索取同一贷款金额、期限与摊销期的固定/浮动报价，并注明报价日期和锁息有效期。",
  "url": "https://www.bankofcanada.ca/rates/banking-and-financial-statistics/posted-interest-rates-offered-by-chartered-banks/",
  "date": "2026-11-18",
  "time": "08:05",
  "firstHand": true
},
{
  "id": "ontario-rent-guideline-2027-watch",
  "heat": 64,
  "source": "Ontario.ca · 已公布2027指引；示意图：本简报依官方数据绘制",
  "tags": [
    "观察事项",
    "出租管理"
  ],
  "points": [
    "2027年指引1.9%",
    "通常须相隔12个月",
    "至少90天正确通知"
  ],
  "image": "/summaries/ontario-rent-guideline-2027-watch.svg",
  "title": "2027租金计划观察：安省已公布1.9%指引，先核对通知期限",
  "summary": "这不是今日新政：安省已公布2027年1月1日至12月31日租金涨幅指引1.9%，适用于多数受租金管制的租约。通常还需距上次涨租或起租满12个月，并提前至少90天以正确表格通知；新租约及部分豁免单位规则不同。",
  "wendyNote": "对416和GTA房东，2027现金流不能简单套用今年比例。行动：逐套核对租控状态、上次调整日期和送达日期，避免把续租当成可以重新定市场租金。",
  "url": "https://www.ontario.ca/page/residential-rent-increases",
  "date": "2026-11-18",
  "time": "08:05",
  "firstHand": true
},
{
  "id": "gemini-tasks-canada-nov17-2026",
  "heat": 54,
  "source": "Google官方 · 11月17日；图：Google",
  "tags": [
    "AI工具",
    "逐步开放"
  ],
  "points": [
    "免费更新涵盖加拿大",
    "可连接Google应用处理任务",
    "高级功能先从美国开始"
  ],
  "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Hero_2784_x_1566_1.width-1300.png",
  "title": "Gemini任务功能免费扩展至加拿大，地产行政流程可小范围试用",
  "summary": "Google11月17日宣布，新版任务功能开始免费向包括加拿大在内的市场逐步开放，可利用已连接的Google应用处理日常任务；部分高级功能先从美国推出，不能假定所有演示功能都已在加拿大账户可用。",
  "wendyNote": "对常用Gmail和日历的地产工作，可先尝试整理公开活动或无客户资料的待办。行动：检查账户是否开放，以一项无敏感资料的测试核对结果，再决定是否用于日常行政。",
  "url": "https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/",
  "date": "2026-11-18",
  "time": "08:05",
  "firstHand": true
},
{
  "id": "edge-business-remix-nov17-2026",
  "heat": 48,
  "source": "Microsoft官方 · 11月17日；流程示意图：本简报绘制",
  "tags": [
    "网站技术",
    "已开放与预览"
  ],
  "points": [
    "Remix可调整个人网页视图",
    "本地保存不修改原网站",
    "录制技能预计年底前预览"
  ],
  "image": "/summaries/edge-remix-workflow-2026-11-18.svg",
  "title": "Edge新增网页工作功能：Remix已开放，流程录制仍待预览",
  "summary": "Microsoft11月17日公布Edge for Business更新：Remix可用自然语言调整个人浏览器里的网页外观并本地保存，已正式开放；跨标签互动简报和流程录制工具预计年底前进入预览，后两者还涉及Copilot许可与按使用量计费。",
  "wendyNote": "可用来改善自己查看后台页面的方式，但不会替你修改公开网站，也不是SEO更新。行动：选一项固定的网站内容核验流程做试用，比较是否省时，再考虑付费功能。",
  "url": "https://blogs.windows.com/msedgedev/2026/11/17/edge-for-business-ignite-2026-innovations/",
  "date": "2026-11-18",
  "time": "08:05",
  "firstHand": true
},
  {
    "id": "trreb-q3-2026-condo",
    "date": "2026-11-18",
    "time": "07:00",
    "source": "TRREB Q3 2026 Condo报告（11月16日发布）",
    "firstHand": true,
    "tags": [
      "Condo季报",
      "供应收紧"
    ],
    "heat": 68,
    "points": [
      "Q3成交4,205套 同比-3.5%",
      "新挂牌-15.4% 库存约6个月",
      "均价$620,662 同比-4.2%"
    ],
    "image": "/summaries/trreb-q3-2026-condo.jpg",
    "title": "TRREB Q3：Condo成交微跌3.5%，新挂牌大减15.4%收紧市场",
    "summary": "TRREB 11月16日发布Q3 Condo季报：成交4,205套，同比-3.5%；新挂牌12,301套，同比大减15.4%，季末在售8,226套，同比-9.6%；售挂比升至34%，库存约6个月，成交价为挂牌价97%、平均41天售出。均价$620,662，同比-4.2%，跌幅较Q2的-7.5%明显收窄。",
    "wendyNote": "Condo市场最值得看的不是成交跌了多少，而是卖家退场比买家更快：新挂牌少了15.4%，库存只剩6个月，价格跌幅已经从Q2的-7.5%收窄到-4.2%。TRREB自己预计跌幅会继续收窄、明年晚些时候重回上涨。自住买家现在仍有议价空间，但别指望价格再深跌；卖家也别恐慌抛售，急着降价等于把收窄的跌幅拱手让人。",
    "url": "http://TRREB.ca/market-data/condo-market-report/"
  },
  {
    "id": "trreb-q3-2026-rental",
    "date": "2026-11-18",
    "time": "07:00",
    "source": "TRREB Q3 2026 租赁报告（11月16日发布）",
    "firstHand": true,
    "tags": [
      "租赁市场",
      "Q3季报"
    ],
    "heat": 62,
    "points": [
      "Q3租约21,526宗 同比-4.2%",
      "一房$2,341 同比-0.6%",
      "挂牌-5.7% 市场收紧"
    ],
    "image": "/summaries/trreb-q3-2026-rental.jpg",
    "title": "TRREB Q3租赁：租约跌4.2%，一房租金$2,341跌幅收窄至0.6%",
    "summary": "TRREB 11月16日发布Q3租赁季报：Condo租约21,526宗，同比-4.2%（Q2为同比增长）；出租挂牌26,996套，同比-5.7%，降幅大于租约，租赁市场较去年收紧。一房平均租金$2,341，同比仅-0.6%，二房$3,069，同比-1%，跌幅均较Q2（-2.3%、-1.7%）明显收窄。",
    "wendyNote": "租金跌势正在见底：一房只跌0.6%、二房跌1%，比Q2收窄一大半，而且挂牌减少的速度比租约更快，说明房源在收紧。租客现在仍能谈到优惠和免租期，但别拖太久等租金反弹；房东也别急着降租抢客，空置压力正在减轻，合理定价、谈好租期更划算。",
    "url": "https://trreb.ca/market-data/rental-market-report/"
  },
  {
    "id": "ontario-hst-rebate-deadline-mar2027",
    "date": "2026-11-18",
    "time": "07:00",
    "source": "Starke Group × 安省政府/CRA（11月16日）",
    "firstHand": false,
    "tags": [
      "HST退税",
      "新房购买"
    ],
    "heat": 60,
    "points": [
      "最高省$13万 全额13%",
      "签约截止2027年3月31日",
      "部长称无意延期"
    ],
    "image": "/summaries/ontario-hst-rebate-deadline-mar2027.jpg",
    "title": "安省新房HST退税最高$13万：签约截止2027年3月31日，不延期",
    "summary": "安省新房HST减免实施半年：符合条件的买家最高可省$13万，即$100万以下新房全额13% HST，由省退税最高$8万（ENHR）与联邦部分最高$5万（ONHAP）组成，联邦部分预计2027年初开始发放。买卖协议须在2026年4月1日至2027年3月31日签署，2028年底前开工、2031年底前基本完工；财长3月已明言无意延期，过期不候。",
    "wendyNote": "这是今年新房买家最实在的一笔钱：$100万的新房直接省$13万，低层新房销量已经连续六个月跑赢十年均值。但注意三件事：签约日才是deadline，不是交房日；开工和完工都有硬性时间门槛，很多Condo楼花赶不上；转售房东也要留意——带退税的新房就是你挂牌房的直接竞争对手，定价要按扣完退税后的价来比。",
    "url": "https://caitlin.thestarkegroup.com/blog/ontarios-130000-new-home-hst-rebate-six-months-in-who-qualifies-and-the-march-31-2027-deadline"
  },
  {
    "id": "valery-condo-dual-listing-nov2026",
    "date": "2026-11-18",
    "time": "07:00",
    "source": "Valery Research（11月16日，TRREB MLS数据）",
    "firstHand": false,
    "tags": [
      "Condo投资",
      "租售两挂"
    ],
    "heat": 58,
    "points": [
      "18.3%待售Condo同时招租",
      "2019年仅3.8% 占比翻近五倍",
      "其中三分之二最终租出"
    ],
    "image": "/summaries/valery-condo-dual-listing-nov2026.jpg",
    "title": "五套待售Condo就有一套同时招租：2019年仅3.8%",
    "summary": "Valery 11月16日研究（TRREB MLS数据）：过去一年GTA待售Condo中有18.3%（6,615套）同时挂牌招租，2019年同期仅3.8%；一房最高达20.9%，多伦多市18.7%。其中66.5%最终租出、仅13.4%售出；占比已较上年19.3%的高点略有回落。",
    "wendyNote": "卖不掉就改租，是这两年Condo业主最真实的退路：五套里就有一套两边挂牌，最后三分之二租出去了、只有一成多卖掉。对买家这是议价信号——挂着租约的卖家心态更急，谈价空间更大；对投资者则是提醒：先算好出租回报再接手，别指望短期转手。好消息是占比已从去年高点回落，市场正在慢慢消化。",
    "url": "https://valery.ca/research/gta-condos-for-sale-and-rent/"
  },
  {
    "id": "cmhc-starts-oct2026-toronto-down10",
    "date": "2026-11-17",
    "time": "08:45",
    "source": "CMHC 10月开工数据（11月17日发布）",
    "firstHand": true,
    "tags": [
      "开工数据",
      "多伦多供应"
    ],
    "heat": 62,
    "points": [
      "全国SAAR 244,558 降2%",
      "多伦多趋势跌10%",
      "竣工21,621 环比+24%"
    ],
    "image": "/summaries/cmhc-starts-oct2026-toronto-down10.jpg",
    "title": "CMHC 10月开工：全国年化24.5万套，多伦多趋势跌10%",
    "summary": "CMHC 11月17日发布10月开工数据：全国季调年化开工244,558套，环比-2%；六个月趋势246,231套，环比-1.7%；实际开工21,059套，同比+6%，年初至今192,023套、同比-3%。多伦多趋势22,299套，环比-10%，独栋与多户齐跌；但当月实际开工1,900套，同比+31%。",
    "wendyNote": "多伦多开工趋势一个月跌10%，是今天最值得留意的供给信号：独栋和多户同时缩，说明开发商还在踩刹车，2028年以后的新房会更少。但当月实际开工同比+31%，在建量也还稳在37万套，短期不缺房。买家看远期：供应收紧会托住中长期价格；卖家别急着降价抢跑，库存消化需要时间。",
    "url": "https://www.cmhc-schl.gc.ca/media-newsroom/news-releases/2026/housing-starts-construction-data-october-2026"
  },
  {
    "id": "crea-oct2026-sales-steady",
    "date": "2026-11-17",
    "time": "07:00",
    "source": "CREA 10月官方月报（11月17日发布）",
    "firstHand": true,
    "tags": [
      "CREA月报",
      "成交企稳"
    ],
    "heat": 72,
    "points": [
      "全国成交环比+0.3%",
      "HPI环比+0.1% 两年最大",
      "均价$678,584 同比-1.6%"
    ],
    "image": "/summaries/crea-oct2026-sales-steady.jpg",
    "title": "CREA 10月：全国成交环比微升0.3%，房价指数两年最大月涨幅",
    "summary": "CREA 11月17日发布10月数据：全国MLS成交环比+0.3%，实际成交同比-10.6%；新挂牌环比+0.8%，售挂比48.7%仍低于54.7%的长期均值；MLS房价指数环比+0.1%（两年最大单月涨幅）、同比-3.1%；全国均价$678,584，同比-1.6%；在售约19.7万套，库存5个月，处均衡区间。",
    "wendyNote": "数字看着平淡，信号在环比里：成交和房价指数双双微升，指数还是两年最大单月涨幅，说明加息后的市场没有继续往下掉。但售挂比48.7%仍低于均衡线，买家议价权还在；卖家别把单月企稳当反转，定价仍要按今天的市场来。",
    "url": "https://www.globenewswire.com/news-release/2026/11/17/3404363/0/en/canadian-home-sales-and-prices-hold-steady-in-october.html"
  },
  {
    "id": "cpi-oct2026-31-dec-odds-ease",
    "date": "2026-11-17",
    "time": "07:00",
    "source": "加拿大统计局10月CPI（11月16日发布）",
    "firstHand": false,
    "tags": [
      "通胀",
      "12月议息"
    ],
    "heat": 68,
    "points": [
      "10月CPI同比3.1% 持平",
      "核心trim降至1.8%",
      "加息概率回落至约四成"
    ],
    "image": "/summaries/cpi-oct2026-31-dec-odds-ease.jpg",
    "title": "10月通胀持稳3.1%、核心降温：12月加息概率回落",
    "summary": "统计局11月16日发布：10月CPI同比3.1%，与9月持平、低於预期的3.2%，环比+0.2%；剔除能源后通胀降至2.0%，央行核心指标trim 1.8%、median 2.0%；汽油同比+30.9%仍是推高主因。数据公布后，预测市场对12月9日加息的定价回落至41–45%（11月17日，Polymarket/Kalshi）。",
    "wendyNote": "标题3.1%看着还烫，但全是汽油在撑：剔除能源只剩2.0%，核心指标也在往2%靠，市场立刻把12月加息的定价砍了下来。浮动利率的买家可以松半口气，但别当成降息信号——央行自己预计年底通胀冲3.5%，12月4日就业数据才是最后一锤。",
    "url": "https://www.morningstar.com/news/dow-jones/202611166754/canada-inflation-holds-steady-at-31-in-october-2nd-update"
  },
  {
    "id": "toronto-pbr-phase2-9667-nov2026",
    "date": "2026-11-17",
    "time": "07:00",
    "source": "多伦多市政府新闻稿（11月16日）",
    "firstHand": true,
    "tags": [
      "租赁供给",
      "市政政策"
    ],
    "heat": 66,
    "points": [
      "19个项目 9,667套出租房",
      "其中2,059套可负担限租",
      "两期激励共$8.94亿"
    ],
    "image": "/summaries/toronto-pbr-phase2-9667-nov2026.jpg",
    "title": "多伦多敲定近万套出租房：19个项目、2,059套可负担限租",
    "summary": "市政府11月16日公布目的性租赁激励第二期结果：58份申请（约2.7万套）中选出19个可快速开工项目，覆盖12个选区，提供9,667套出租房，其中2,059套可负担限租；两期合计约$8.94亿激励支持34个租赁项目，另有联邦与省$15亿开发费减免资金托底。",
    "wendyNote": "这是实打实的租赁供给，而且是能12个月内开工的项目：近万套出租房进场，市中心租客的选择面会继续变宽，租金上涨的空间被压住。房东别指望租金快速反弹；租客明年续租或换租时议价底气更足。注意：这是获批项目不是竣工房，真正入市还要等建设周期。",
    "url": "https://www.toronto.ca/news/toronto-moves-nearly-10000-new-rental-homes-closer-to-construction-including-more-than-2000-affordable-homes/"
  },
  {
    "id": "valery-condo-price-rent-nov2026",
    "date": "2026-11-17",
    "time": "07:00",
    "source": "Valery Research（11月6日，TRREB MLS数据）",
    "firstHand": false,
    "tags": [
      "Condo性价比",
      "租售比"
    ],
    "heat": 58,
    "points": [
      "一房售价=17.6年租金",
      "十年最低 低于2019年",
      "多伦多一房17.8年"
    ],
    "image": "/summaries/valery-condo-price-rent-nov2026.jpg",
    "title": "GTA一房Condo售价只值17.6年租金：十年最低",
    "summary": "Valery 11月6日研究：过去12个月GTA一房Condo中位售价$475,000、中位月租$2,250，售价相当于17.6年租金，为十年最低，低于2019年的19.0年与2021年峰值25.4年；全部Condo为18.4年，同样十年最低；多伦多一房17.8年，Brampton最低15.5年。",
    "wendyNote": "房价跌得比租金快，买房相对租房十年最划算——但这只是售价和租金的比值，不算按揭、管理费和地税，现金流还是负的。自住买家可以把这个当作议价参考：现在入手一房的相对成本是十年最低；投资客先算清月供缺口，别只看比值便宜就冲。",
    "url": "https://valery.ca/research/gta-condo-price-to-rent/"
  },
  {
    "id": "dec-hike-odds-64-nov2026",
    "date": "2026-11-16",
    "time": "07:00",
    "source": "True North Mortgage 利率展望（11月12日数据）",
    "firstHand": false,
    "tags": [
      "12月议息",
      "加息概率"
    ],
    "heat": 66,
    "points": [
      "12月加息概率64% 一周前39%",
      "5年期国债收益率升至3.5%",
      "大行多料2027年初再加至2.75%"
    ],
    "image": "/summaries/dec-hike-odds-64-nov2026.jpg",
    "title": "12月加息概率一周翻到64%：5年期国债收益率升至3.5%",
    "summary": "True North 11月12日更新：市场预计央行12月9日加息25基点的概率升至64%，11月6日仅为39%，不加息概率36%；5年期国债收益率已升至3.5%，固定利率承压。大行多预计政策利率2026年底维持2.50%、2027年初再加至2.75%，2027年底预测中位2.75%。",
    "wendyNote": "一周之内加息概率从39%跳到64%，市场对12月9日的定价已经翻了面：浮动利率的买家别再按“大概率不加”做预算，按Prime 4.70%再加一次留余地；固定利率的注意，5年期国债收益率已到3.5%，谈固定报价先锁hold期，别等12月9日当天。",
    "url": "https://www.truenorthmortgage.ca/blog/mortgage-rate-forecast"
  },
  {
    "id": "gta-rental-vacancy-133-nov2026",
    "date": "2026-11-16",
    "time": "07:00",
    "source": "Better Dwelling × Urbanation Q3报告（11月12日）",
    "firstHand": false,
    "tags": [
      "出租空置",
      "租赁供给"
    ],
    "heat": 64,
    "points": [
      "计入新盘空置率13.3%",
      "Q3竣工2,704套创纪录",
      "在建34,545套 占全加近半"
    ],
    "image": "/summaries/gta-rental-vacancy-133-nov2026.jpg",
    "title": "GTA出租房空置真相：计入新盘达13.3%，八套里有一套空着",
    "summary": "Urbanation Q3报告（Better Dwelling 11月12日）：已稳定出租楼空置率从5.4%降至3.0%，但计入仍在招租的新楼后，GTA目的性租赁空置率达13.3%（去年12.1%）。Q3竣工2,704套创纪录、超过新增入住1,911套；在建34,545套、占全加在建近半；扣优惠后租金仍同比-1.5%。",
    "wendyNote": "只看“稳定楼3%空置”会被骗：新楼招租期的空房才是租客真正的选择面，八套里有一套空着，租金谈判空间比 headline 大得多。租客谈两房以上的新楼可以大胆压价、要免租期；房东别再按去年的涨幅续租，新楼入市会分流租客，空置一个月比降租更贵。",
    "url": "https://betterdwelling.com/over-1-in-8-greater-toronto-rental-units-sit-vacant-as-completions-hit-a-record/"
  },
  {
    "id": "ontario-tax-arrears-nov2026",
    "date": "2026-11-16",
    "time": "07:00",
    "source": "Better Dwelling × 安省市政申报（11月13日）",
    "firstHand": false,
    "tags": [
      "欠缴地税",
      "业主压力"
    ],
    "heat": 62,
    "points": [
      "欠税率7.2% 涉$24.3亿",
      "Brampton 11.9% 全省最高",
      "多伦多6.6% 亦为25年高位"
    ],
    "image": "/summaries/ontario-tax-arrears-nov2026.jpg",
    "title": "安省欠缴地税创24年新高：Brampton 11.9%领跑，多伦多6.6%",
    "summary": "Better Dwelling 11月13日引安省市政申报：2025年全省欠缴地税率达7.2%、涉及$24.3亿（总征收$341亿），为2001年以来最高，较2024年升48基点、较2019年升246基点。Brampton 11.9%全省最高，Vaughan 9.9%、Kitchener 8.9%；多伦多6.6%，亦为该市25年高位。",
    "wendyNote": "欠税是最实在的业主压力表：利率、地税齐涨，现金流先扛不住的业主会先出现在欠税名单上，再出现在急售盘里。Brampton、Vaughan的买家可以多留意这类房源的议价空间；卖家则要算清持有成本，别让地税欠款拖成法拍前的被动局面。",
    "url": "https://betterdwelling.com/ontario-property-tax-arrears-hit-24-year-high-brampton-leads-at-11-9/"
  },
  {
    "id": "bmo-immigration-population-nov2026",
    "date": "2026-11-16",
    "time": "07:00",
    "source": "Better Dwelling × BMO（11月10日）",
    "firstHand": false,
    "tags": [
      "移民政策",
      "住房需求"
    ],
    "heat": 50,
    "points": [
      "2027年PR实际或达66万",
      "人口增速料近1% 翻倍",
      "留境内转身份 减少空置释放"
    ],
    "image": "/summaries/bmo-immigration-population-nov2026.jpg",
    "title": "BMO：移民实际规模或达66万，人口增速翻倍、住房需求预期上调",
    "summary": "BMO 11月10日分析：联邦2027–29年移民计划名义目标为每年38万永居，但2025、2026预算的特殊措施使2027年约28万境内临时居民转永居，实际总数接近66万。BMO据此将2027年人口增速预测从0.5%上调至近1%，接近翻倍；留境内转身份虽不直接新增需求，但减少离境等于减少空置房源释放。",
    "wendyNote": "数字看着是移民政策，落点是住房需求：人口增速从0.5%回到近1%，意味着租赁与首套需求的底比之前想的厚。别按“移民收紧、需求见顶”去判断租金拐点——在建租赁盘虽多，但需求端也在上调；买家看长期，人口回升会先托住租金、再托住房价。",
    "url": "https://betterdwelling.com/canadian-immigration-changes-to-double-population-growth-rate-bmo/"
  },
  {
    "id": "toronto-laneway-garden-suites-nov2026",
    "date": "2026-11-15",
    "time": "07:00",
    "source": "CBC Toronto（11月15日）",
    "firstHand": false,
    "tags": [
      "后院小屋",
      "住房供应"
    ],
    "heat": 52,
    "points": [
      "755套后院小屋在建中",
      "627张许可证已结案",
      "审批慢、融资难仍卡脖子"
    ],
    "image": "/summaries/toronto-laneway-garden-suites-nov2026.jpg",
    "title": "多伦多后院小屋破局难：755套在建，业主要求减审批、给补贴",
    "summary": "CBC多伦多11月15日报道：多伦多市称目前有755套后院小屋（laneway / garden suite）正在建设、627张许可证已结案；但业主与预制建筑商反映，审批流程与新型预制工艺不匹配、融资也难，呼吁市府简化流程并提供补贴。市府称已有免费预审设计图、可免开发费或缓缴，但省与联邦对是否设专项补贴均未正面回应。",
    "wendyNote": "后院小屋是多伦多“缺失中段”里最现实的一块增量：独立屋业主多一套可租单位，等于多一份租金收入、也多一个家庭安置方案。但别只看数字——755套在建相对全市需求仍是九牛一毛，审批周期与融资才是真门槛；想在自家后院加建的客户，先找贷款经纪算好额外借款额度，再拿市府免费预审图纸去报建，能省设计费和返工。",
    "url": "https://www.europesays.com/canada/293558/"
  },
  {
    "id": "toronto-sixplex-60-applications-nov2026",
    "date": "2026-11-15",
    "time": "07:00",
    "source": "多伦多星报（11月12日，Starke Group 梳理）",
    "firstHand": false,
    "tags": [
      "六拼屋",
      "多户住宅"
    ],
    "heat": 58,
    "points": [
      "六拼申请已超60宗",
      "仅9个选区可直接建",
      "2027年2月起可投保90%"
    ],
    "image": "/summaries/toronto-sixplex-60-applications-nov2026.jpg",
    "title": "多伦多六拼屋申请破60宗：仅9区可直接建，2027年2月起享新按揭保险",
    "summary": "多伦多星报11月12日引市府数据：自去年允许六拼屋以来，多伦多已收到逾60宗六拼屋申请，申请最多的三个选区为Toronto-Danforth（15宗）、Davenport（14宗）与Toronto-St. Paul's（12宗）。五拼、六拼仅在旧多伦多—东约克8个选区及士嘉堡北23选区的独立屋地块可直接获批；联邦针对5–50套“缺失中段”物业的新按揭保险将于2027年2月1日起受理，新建最高可贷90%、摊销最长50年。",
    "wendyNote": "六拼屋是多伦多低密度社区里最实在的密度增量：独立屋业主的地块价值逻辑变了，能改六套的地块会吸引更多投资者与开发商。但申请不等于建成，60宗里能走完审批、算得过账的才是真供给；买家看中这类地块要先确认分区与层高，卖家也别把“可改六拼”直接折进要价——市价仍由具体地块的审批可行性决定。",
    "url": "https://larisa.thestarkegroup.com/blog/toronto-sixplexes-pass-60-applications-where-six-unit-homes-are-allowed-and-what-it-means"
  },
  {
    "id": "boc-deliberations-nov2026",
    "date": "2026-11-14",
    "time": "07:00",
    "source": "加拿大央行议息纪要（11月10日）",
    "firstHand": true,
    "tags": [
      "央行纪要",
      "12月议息"
    ],
    "heat": 68,
    "points": [
      "加息本是险胜：维持与加息二选一",
      "通胀年底冲3.5%，2027大部超3%",
      "市场料3月利率升至2.75%"
    ],
    "image": "/summaries/boc-deliberations-nov2026.jpg",
    "title": "央行纪要：10月加息本是险胜，再加息的门没关上",
    "summary": "加拿大央行11月10日公布10月28日议息纪要：管委会曾在维持2.25%与加息至2.50%之间二选一，最终认定加息是险胜之举；成员一致认为「可能需要进一步加息」，但会逐会决策、谨慎行事。央行预计通胀年底升至3.5%、2027年大部仍在3%以上，2028年中才回落至2%；三季度市场参与者调查中位预期为12月2.50%、2027年3月2.75%。",
    "wendyNote": "纪要把12月9日写成了真正的悬念：加息派的理由是能源价格外溢，维持派的理由是经济已有闲置、核心通胀接近2%。浮动利率的买家别再按「很快降息」做预算，按Prime 4.70%再加一次留余地；谈固定利率的注意，5年期国债收益率已回升到3.46%，固定报价的松动窗口在收窄，锁利率先问hold期。",
    "url": "https://www.bankofcanada.ca/2026/11/summary-of-governing-council-deliberations-fixed-announcement-date-of-october-28-2026/"
  },
  {
    "id": "fpt-housing-ministers-nov2026",
    "date": "2026-11-14",
    "time": "07:00",
    "source": "联邦—省—地区住房部长论坛联合公报（11月13日）",
    "firstHand": true,
    "tags": [
      "住房政策",
      "联邦预算"
    ],
    "heat": 52,
    "points": [
      "预算447亿住房投入，补贴续签在谈",
      "双边住房协议2027–28年到期",
      "明春经济报告前谈妥新协议"
    ],
    "image": "/summaries/fpt-housing-ministers-nov2026.jpg",
    "title": "住房部长多伦多会商：447亿预算落地，双边住房协议明春前重谈",
    "summary": "联邦与各省、地区住房部长11月13日在多伦多会商并发布联合公报：落实2026年联邦预算447亿加元、11年住房投入，重点包括续签加拿大住房补贴（56亿/10年）与Reaching Home无家可归者计划（65亿/10年），以及50亿综合支持基金与100亿支持性住房投入。各方承诺在2027–28年双边住房协议到期前重谈新协议，谈判须在2027年春季经济报告前推进，部长们明春再会。",
    "wendyNote": "这份公报没有新钱、也没有新政，主要是把预算里的447亿落到执行时间表上：真正的节点是2027年春季经济报告前的双边协议谈判。对GTA买家最直接的仍是预算已定的150万保险上限与30年摊销，生效时间未定前别按已落地算；非市场住房投入加码，长期会缓解租赁供给压力，但短期内租金拐点主要还是看现有库存。",
    "url": "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/11/fpt-forum-on-housing-and-homelessness-2026-ministers-meeting--joint-communique.html"
  },
  {
    "id": "nbc-affordability-q3-2026",
    "date": "2026-11-13",
    "time": "07:00",
    "source": "加拿大国家银行《住房负担能力监测》Q3（11月10日）",
    "firstHand": true,
    "tags": [
      "负担能力",
      "房贷利率"
    ],
    "heat": 64,
    "points": [
      "多伦多月供占收入68.3%",
      "负担能力连升11季",
      "10月利率跳升38基点"
    ],
    "image": "/summaries/nbc-affordability-q3-2026.jpg",
    "title": "负担能力连升11季创新纪录，但10月利率跳升38基点、Q4恐逆转",
    "summary": "加拿大国家银行11月10日发布Q3负担能力监测：全国月供占收入比降0.7个百分点至50.9%，连续第11个季度改善、为有记录以来最长；多伦多中位房价$1,033,382、月供占收入68.3%，季度改善0.8个百分点。但10月房贷利率跳升38个基点、为四年来最大单月涨幅，按10月利率测算全国比率将回升至53.1%。",
    "wendyNote": "数字看着是变好了，但全是三季度的旧账：10月加息后利率已经跳升，Q4的负担能力大概率掉头。对买家来说，房价跌、收入涨的窗口还在，但别按今天的利率算月供——锁定利率前先留出上浮空间；对卖家来说，想等利率回落再挂牌的人会越来越多，年底是抢在供应回升前出手的时机。",
    "url": "https://www.nbc.ca/content/dam/bnc/taux-analyses/analyse-eco/logement/housing-affordability.pdf"
  },
  {
    "id": "statcan-permits-sep2026",
    "date": "2026-11-13",
    "time": "07:00",
    "source": "加拿大统计局9月建筑许可（11月12日，道琼斯）",
    "firstHand": false,
    "tags": [
      "建筑许可",
      "新房供应"
    ],
    "heat": 58,
    "points": [
      "9月许可总值$128.8亿",
      "住宅许可环比-5.8%",
      "多户住宅许可-9.4%"
    ],
    "image": "/summaries/statcan-permits-sep2026.jpg",
    "title": "9月建筑许可环比-4.1%：多户住宅意向大跌9.4%，新房供应管线再收紧",
    "summary": "加拿大统计局11月12日公布：9月建筑许可总值128.8亿加元，环比-4.1%、同比+5.7%；住宅许可77.9亿、环比-5.8%，其中多户住宅-9.4%、独栋+2%。住宅许可今年以来累计已跌5.2%，三季度许可总值388亿、环比-3.6%。",
    "wendyNote": "许可就是未来的开工：多户住宅许可大跌，意味着两三年后新房、尤其是Condo的供应还会更紧。手里有现房的卖家不用急着降价；买家要明白，楼花越往后越少，现在能谈的竣工盘和现房就是未来几年的主要选择。",
    "url": "https://www.morningstar.com/news/dow-jones/202611129798/canada-building-permits-weaken-in-september-with-41-drop"
  },
  {
    "id": "pwc-uli-equity-2027-nov2026",
    "date": "2026-11-12",
    "time": "07:00",
    "source": "STOREYS × PwC/ULI《2027房地产新兴趋势》（11月11日）",
    "firstHand": false,
    "tags": [
      "开发融资",
      "新房供应"
    ],
    "heat": 58,
    "points": [
      "63%受访者料开发股本短缺",
      "多伦多开工一年少31%",
      "Q2商业地产成交$162亿"
    ],
    "image": "/summaries/pwc-uli-equity-2027-nov2026.jpg",
    "title": "开发商缺的不是贷款，是股本：63%业内人士料2027开发资金短缺",
    "summary": "PwC与ULI《2027房地产新兴趋势》11月11日发布：63%的加拿大受访者预计2027年开发与再开发股本供应不足（债务为46%）；多伦多CMA新屋开工从2024年37,718套跌至2025年26,087套、少31%（CMHC数据）；加拿大商业地产二季度成交162亿加元，为2022年初以来最强季度。",
    "wendyNote": "贷款能谈下来不等于楼能盖起来——缺股本，项目照样搁置。多伦多开工一年少三成，意味着两三年后新房供应更紧；对买家来说，现房和接近完工的楼花会更抢手，开发商手里的现房库存可以大胆谈价。",
    "url": "https://storeys.com/developers-equity-canada-2026/"
  },
  {
    "id": "budget2026-toronto-foreign-buyer-nov2026",
    "date": "2026-11-12",
    "time": "07:00",
    "source": "The Starke Group 预算解读（11月11日）",
    "firstHand": false,
    "tags": [
      "联邦预算",
      "外国买家"
    ],
    "heat": 55,
    "points": [
      "禁令延至2029年1月1日",
      "新房豁免但25%省税照收",
      "多伦多另加10%市级投机税"
    ],
    "image": "/summaries/budget2026-toronto-foreign-buyer-nov2026.jpg",
    "title": "预算新房豁免≠多伦多便宜：外国买家仍要交25%省税+10%市税",
    "summary": "11月11日解读指出，联邦预算2026拟将外国买家禁令延至2029年1月1日、新房豁免，但多伦多外国买家仍须交安省25%非居民投机税和多伦多市10%市级投机税，合计约35%；150万房贷保险上限与30年摊还的生效时间预算未定，相关措施仍须立法。",
    "wendyNote": "新房豁免是真利好，但只免了联邦禁令这一层——多伦多35%的税还在，外国买家买楼花并不便宜。真正能动本地市场的是150万保险上限和30年摊还，可惜生效时间还没定；有海外客户问楼花，先把税算清再谈。",
    "url": "https://taylor.thestarkegroup.com/blog/budget-2026-and-toronto-real-estate-foreign-buyer-ban-extended-new-homes-exempted"
  },
  {
    "id": "nhii-housing-report-nov2026",
    "date": "2026-11-11",
    "time": "07:00",
    "source": "BILD × NHII 报告（11月10日发布）",
    "firstHand": false,
    "tags": [
      "住房政策",
      "新房供应"
    ],
    "heat": 62,
    "points": [
      "建筑业+大银行29条建议",
      "HST退税永久化 开发费改革",
      "外国买家禁令拟豁免新房"
    ],
    "image": "/summaries/nhii-housing-report-nov2026.jpg",
    "title": "建筑业联手大银行献策：29条建议促新房供应，HST退税拟永久化",
    "summary": "BILD与加拿大最大银行组成的国家住房与投资倡议（NHII）11月10日发布《可持续加拿大住房市场建议》报告，提出29条建议，5项优先：安省新房HST退税永久化、摆脱对开发费的依赖、出租楼资本利得递延、外国买家禁令豁免新建住房与待开发空地、推出自住Condo建设贷款计划。",
    "wendyNote": "这是行业和银行一起向联邦喊话，方向很明确：降开发成本、放开融资，新房才有量。HST退税永久化若落地，低层新房会继续跑赢高层；外国买家禁令豁免新建盘，楼花市场会多一条需求通道。但这只是建议书、不是政策，买房别按已落地算，先盯联邦怎么接招。",
    "url": "https://www.bildgta.ca/building-industry-and-major-canadian-banks-collaborate-on-new-sustainable-housing-market-report/"
  },
  {
    "id": "valery-neighbourhoods-nov2026",
    "date": "2026-11-11",
    "time": "07:00",
    "source": "Valery 多伦多社区榜（11月10日更新）",
    "firstHand": false,
    "tags": [
      "社区房价",
      "多伦多"
    ],
    "heat": 52,
    "points": [
      "143社区中位价$45.1万–$263万",
      "最贵Bridle Path $263万",
      "全市中位$82万 多数社区下跌"
    ],
    "image": "/summaries/valery-neighbourhoods-nov2026.jpg",
    "title": "多伦多143社区房价榜：最贵$263万，最便宜$45.1万",
    "summary": "Valery 11月10日更新的多伦多143个社区房价榜（过去12个月成交中位价）：最贵Bridle Path-Sunnybrook-York Mills $2,630,000，最便宜Flemingdon Park $451,000，全市中位$820,000；前五名中有Forest Hill North $2,310,000（同比+7.1%）、Bedford Park-Nortown $2,300,000，多数社区一年跌幅在5%–15%之间。",
    "wendyNote": "同一座城市、完全不同的市场：豪宅区还在涨，普通社区一年跌一成多。买家别只看全市均价，先锁定目标社区的榜单价和成交天数再出价；卖家更要看自己社区的跌幅，挂牌价脱离社区中位价就是陪跑。",
    "url": "https://staging.valery.ca/toronto-real-estate/neighbourhoods/"
  },
  {
    "id": "groundbreak-permits-nov2026",
    "date": "2026-11-11",
    "time": "07:00",
    "source": "Groundbreak 建筑许可统计（11月11日）",
    "firstHand": false,
    "tags": [
      "建筑许可",
      "新房供应"
    ],
    "heat": 46,
    "points": [
      "11月最大23张许可总值$2.01亿",
      "65 Raglan Ave $1亿建320套",
      "多户改建许可频现"
    ],
    "image": "/summaries/groundbreak-permits-nov2026.jpg",
    "title": "11月多伦多最大建筑许可：65 Raglan Ave $1亿建28层320套",
    "summary": "Groundbreak 11月11日统计：本月迄今多伦多发出的最大23张建筑许可申报总值$2.01亿，最大一张是65 Raglan Ave、$1亿新建28层住宅320套（11月3日发证）；另有多宗独栋改5–6户的多户改建许可，显示小型出租物业供给在增加。",
    "wendyNote": "大项目还在拿证，说明开发商没完全停手，但320套新盘从拿证到入市还要几年，短期供应压力不变。值得留意的是独栋改5–6户的小许可越来越多——小型出租房正在悄悄增加，投资客可以留意这类多户改建的房源和租金回报。",
    "url": "https://pro.groundbreak.city/toronto/stats/largest-permits-this-month"
  },
  {
    "id": "mortgage-rates-easing-nov2026",
    "date": "2026-11-10",
    "time": "07:00",
    "source": "Cashsembly 加拿大房贷利率周报（11月9日）",
    "firstHand": false,
    "tags": [
      "房贷利率",
      "固定利率"
    ],
    "heat": 64,
    "points": [
      "最优5年固定4.39% 浮动3.50%",
      "5年国债收益率回落至3.36%",
      "下次议息12月9日 CPI 9月3.1%"
    ],
    "image": "/summaries/mortgage-rates-easing-nov2026.jpg",
    "title": "加息后固定利率不升反降：最优5年固定4.39%，浮动3.50%",
    "summary": "Cashsembly 11月9日房贷利率周报：政策利率2.50%、prime 4.70%不变，但最优5年固定利率4.39%、5年浮动3.50%，5年期国债收益率已回落至3.36%（11月6日）；9月CPI 3.1%仍高于央行2%目标，下次议息12月9日。",
    "wendyNote": "加息加的是浮动利率的成本，固定利率看的是国债收益率——现在两条线在往不同方向走。浮动利率的买家要按4.70% prime重算月供；要锁定固定利率的，这波收益率回落就是谈价窗口，多比两家银行和broker，别等12月9日议息。",
    "url": "https://cashsembly.com/rate-report/2026-11-09"
  },
  {
    "id": "manga-king-rental-nov2026",
    "date": "2026-11-10",
    "time": "07:00",
    "source": "Connect CRE（11月9日）",
    "firstHand": false,
    "tags": [
      "目的性租赁",
      "市中心开发"
    ],
    "heat": 62,
    "points": [
      "689 King St W新增160套租赁",
      "30层混合用途 251间酒店套房",
      "租赁开工超Condo 1994年首见"
    ],
    "image": "/summaries/manga-king-rental-nov2026.jpg",
    "title": "市中心酒店改租赁：689 King St W新增160套出租公寓",
    "summary": "Manga Hotel Group 11月9日向市府提交修订方案：市中心689 King St W原批酒店-only方案改为30层混合用途大楼，1–13层保留251间酒店套房与餐厅，14–30层改160套目的性租赁公寓。背景是多伦多租赁开工上半年同比+82%，1994年以来首次超过Condo开工。",
    "wendyNote": "开发商都在往租赁转，信号很清楚：Condo卖不动、租赁才是现金流。市中心租赁供应上来，租客选择会变多、租金涨幅受压；手里有市中心Condo出租的房东要留意，新租赁盘入市会分流租客，续租定价别再按去年的涨幅算。",
    "url": "https://www.connectcre.ca/stories/manga-adds-160-rental-apartments-to-toronto-hotel-development/"
  },
  {
    "id": "bside-minto-westside-nov2026",
    "date": "2026-11-10",
    "time": "07:00",
    "source": "NewInHomes / Minto（11月14日VIP预览）",
    "firstHand": false,
    "tags": [
      "新盘预售",
      "King West"
    ],
    "heat": 54,
    "points": [
      "11月14日VIP预览 二期323套",
      "买带充电桩车位送Nissan LEAF",
      "两房以上交房返$15,000"
    ],
    "image": "/summaries/bside-minto-westside-nov2026.jpg",
    "title": "买Condo送车：Minto Bside二期11月14日预览，送Nissan LEAF",
    "summary": "Minto 11月14日（周六）举行 Bside at Minto Westside 二期VIP预览：King West 25 Bathurst，20层323套、501–950平方呎；买带电车充电桩车位送全新Nissan LEAF一辆（或选$25,000交房抵扣），两房及以上另有$15,000交房返现。一期今夏销售强劲，二期需求已排队。",
    "wendyNote": "开发商开始拿真金白银抢买家了——送车、返现、抵扣全上，说明新盘去化压力还在。送LEAF听着划算，但先算总价：车位加价多少、单价比周边二手贵多少，羊毛别算进房价里。真想住King West的可以去预览拿价单比价，投资客先看租金能不能覆盖月供。",
    "url": "https://www.newinhomes.com/blog/register-for-the-vip-preview-of-bside-at-minto-westside"
  },
  {
    "id": "durham-market-nov2026",
    "date": "2026-11-10",
    "time": "07:00",
    "source": "RE/MAX Impact John Owen 杜咸日报（11月9日）",
    "firstHand": false,
    "tags": [
      "杜咸区",
      "905市场"
    ],
    "heat": 52,
    "points": [
      "11月均价$778,080同比-7.2%",
      "成交量同比-23.9% 库存6.0个月",
      "售价/挂牌价97.0% 平均35.3天"
    ],
    "image": "/summaries/durham-market-nov2026.jpg",
    "title": "杜咸区11月：均价$778,080同比-7.2%，成交量跌23.9%",
    "summary": "RE/MAX Impact John Owen 11月9日杜咸日报：11月迄今全屋型均价$778,080，环比-2.0%、同比-7.2%，售价/挂牌价97.0%、平均35.3天成交；库存6.0个月，日均成交15.4宗、同比-23.9%。杜咸仍是GTA均价最低、售价/挂牌比最高的区域。",
    "wendyNote": "杜咸是GTA的价格洼地，$778,080的均价比多伦多低近$30万，但成交量也在跌——便宜不等于好卖。预算有限的买家可以往东看，同样预算在杜咸能买到独立屋；卖家注意，6个月库存意味着定价必须贴近市场，挂高了就是陪跑。",
    "url": "https://johnowen.realtor/blog.html/durham-region-real-estate-market-report-daily-5105338"
  },
  {
    "id": "remax-luxury-fall2026",
    "date": "2026-11-09",
    "time": "07:00",
    "source": "RE/MAX Canada 豪宅报告（11月9日发布）",
    "firstHand": false,
    "tags": [
      "豪宅市场",
      "超高端成交"
    ],
    "heat": 66,
    "points": [
      "GTA豪宅成交841套同比-9.4%",
      "$750万以上成交+17.6%",
      "多伦多15宗$1000万+十年最多"
    ],
    "image": "/summaries/remax-luxury-fall2026.jpg",
    "title": "GTA豪宅两极分化：$300万以上成交-9.4%，$750万以上反涨17.6%",
    "summary": "RE/MAX Canada 11月9日发布的2026秋冬豪宅报告：1–9月GTA $300万以上豪宅成交841套、同比-9.4%，但$750万以上成交反涨17.6%，多伦多市15宗超$1000万交易创十年最多，Forest Hill一栋新建豪宅逾$2300万成交。全国13个豪宅市场7个上涨，伯灵顿+26.3%、卡尔加里+20.6%领涨，大温-17%跌最深。",
    "wendyNote": "豪宅市场是K形的：普通豪宅在跌，顶端却在抢——$750万以上的买家不靠贷款、靠资产，价格对他们不是障碍。$300万–$750万区间的卖家别等豪宅整体回暖，盯着自己那一档的成交走；想换大房的倒是机会，上下价差收窄了，置换成本比高峰时低。",
    "url": "https://stockhouse.com/news/press-releases/2026/11/09/luxury-home-sales-rise-in-seven-of-13-canadian-markets-as-regional-strength"
  },
  {
    "id": "macklem-testimony-nov2026",
    "date": "2026-11-09",
    "time": "07:00",
    "source": "加拿大央行行长Macklem国会证词（11月3日众议院、11月5日参议院）",
    "firstHand": true,
    "tags": [
      "央行证词",
      "通胀路径"
    ],
    "heat": 66,
    "points": [
      "通胀年底料升至3.5%",
      "3%以上贯穿2027大部",
      "再加息可能但会谨慎行事"
    ],
    "image": "/summaries/macklem-testimony-nov2026.jpg",
    "title": "Macklem国会证词：通胀年底冲3.5%，2027年大部仍在3%以上",
    "summary": "央行行长Macklem 11月3日、5日先后在国会两院作证：CPI通胀自4月以来一直在3%附近，预计年底升至约3.5%，2027年大部仍在3%或以上，2028年中才回落至2%目标。加息是为防能源价格外溢成全面通胀，进一步加息仍有可能，但央行会谨慎、逐会决策；财政支出目前未被视为通胀推手。",
    "wendyNote": "行长亲口把通胀路径画出来了：3.5%不是猜测，是央行自己的预测——12月9日再加一次的门没关上。浮动利率的买家别再按“很快降息”做预算；固定利率的注意，5年期国债收益率已回落到3.3%附近，谈固定利率可以趁这波窗口多比几家，但别把松动当成趋势反转。",
    "url": "https://www.bankofcanada.ca/wp-content/uploads/2026/11/opening-statement-051126.pdf"
  },
  {
    "id": "c21-ipsos-buying-intent-nov2026",
    "date": "2026-11-09",
    "time": "07:00",
    "source": "CENTURY 21 Canada × Ipsos 置业调查（11月3日）",
    "firstHand": false,
    "tags": [
      "买家意向",
      "首套买家"
    ],
    "heat": 60,
    "points": [
      "23%加拿大人明年可能买房",
      "意向买家中55%是首套",
      "预期房价$655,725降$21,000"
    ],
    "image": "/summaries/c21-ipsos-buying-intent-nov2026.jpg",
    "title": "买家意向回升：23%加拿大人明年可能买房，55%是首套买家",
    "summary": "CENTURY 21 Canada委托Ipsos于10月2–12日调查2,295名加拿大人（11月3日发布）：79%认为拥有住房很重要，23%表示明年可能买房、高于春季的19%，近三分之一年轻人有此意向；意向买家中55%是首套买家，预期购价平均$655,725、比春季低$21,000，44%称近期房价下跌让他们更乐观，73%愿为置业妥协（小户型、近交通、需翻新房或合买）。",
    "wendyNote": "意向回升不等于成交回升——23%说可能买，但真下单要看利率和信心。首套买家占意向买家一半以上，说明复苏真来了会先从首套和$65万价位启动；多伦多买家注意，这个全国均价在GTA只够买Condo，盯着自己价位的房源和月供算，别被全国数字误导。",
    "url": "https://www.globenewswire.com/news-release/2026/11/03/3394066/0/en/the-great-housing-adaptation-canadians-are-adapting-not-abandoning-homeownership-goals.html"
  },
  {
    "id": "foxmarin-buyers-frozen-nov2026",
    "date": "2026-11-09",
    "time": "07:00",
    "source": "Fox Marin × Prime Properties TO 买家情绪对谈（11月3日）",
    "firstHand": false,
    "tags": [
      "买家情绪",
      "多伦多市内"
    ],
    "heat": 56,
    "points": [
      "9月成交同比-9% 情绪是主因",
      "价格较峰值跌20–25%仍难卖",
      "拎包入住低层房仍抢多套报价"
    ],
    "image": "/summaries/foxmarin-buyers-frozen-nov2026.jpg",
    "title": "多伦多买家为何“冻住”：不是买不起，是不敢买——好房仍抢手",
    "summary": "Fox Marin与Prime Properties TO两位经纪11月3日的对谈：多伦多9月成交同比-9%，价格较峰值跌20–25%，但高利率下月供几乎没降，买家是“情绪问题、不是负担问题”——有能力的买家也在等。分化明显：市中心与东区拎包入住的低层房、Loft仍抢多套报价（一栋东区房25次看房、6个报价），小Condo与需翻新房最难卖；两人预计市场横盘至少一两年。",
    "wendyNote": "这篇对谈说透了现在的多伦多：买家不是没钱，是没信心——$80万的Condo放60天没人写报价，同一时间好地段的房子6个报价抢。卖家别再赌“降价就有人买”，房子要么做到拎包入住、要么价格一步到位；买家要分清，你等的“再跌一点”可能只发生在小Condo和需翻新的房子上，好房子不会等你。",
    "url": "https://foxmarin.ca/toronto-buyers-sentiment-outlook/"
  },
  {
    "id": "valery-gta-detached-oct2026",
    "date": "2026-11-08",
    "time": "07:00",
    "source": "Valery 11月GTA独立屋报告（TRREB MLS数据，11月7日更新）",
    "firstHand": false,
    "tags": [
      "独立屋",
      "10月成交"
    ],
    "heat": 64,
    "points": [
      "GTA独立屋均价$1,310,627",
      "成交2,693套同比-6%",
      "要价中位比成交高23%"
    ],
    "image": "/summaries/valery-gta-detached-oct2026.jpg",
    "title": "GTA独立屋10月：均价$1,310,627同比-3%，要价比成交高23%",
    "summary": "Valery 11月7日更新的TRREB MLS数据：GTA 10月独立屋均价$1,310,627、同比-3%，中位$1,110,000、同比-5%，较2022年2月峰值低27%；成交2,693套、同比-6%，新挂牌6,687套、同比-12%，在售11,721套、同比-9%，平均29天售出、成交价为要价97%。在售房源要价中位$1.39M，比近三个月成交中位高23%，17%的房源已降价、中位降幅$70,000。",
    "wendyNote": "独立屋是10月最抗跌的房型，但别被均价只跌3%骗了：要价中位比实际成交高23%，说明卖家还在按去年的价挂、买家只按今天的价买。17%的房源已经降价，中位降了$70,000——买家盯着降价盘谈，卖家定价贴着$1.31M的成交均价走才卖得动。",
    "url": "https://valery.ca/market/gta/detached-homes/"
  },
  {
    "id": "truenorth-rate-odds-nov2026",
    "date": "2026-11-08",
    "time": "07:00",
    "source": "True North Mortgage 利率展望（11月6日更新）",
    "firstHand": false,
    "tags": [
      "利率展望",
      "12月议息"
    ],
    "heat": 62,
    "points": [
      "12月加息概率39% 不加61%",
      "5年期国债收益率约3.3%",
      "多数预测2027年底2.75%"
    ],
    "image": "/summaries/truenorth-rate-odds-nov2026.jpg",
    "title": "12月加息概率仅39%：5年期国债收益率回落至3.3%，固定利率略松",
    "summary": "True North 11月6日更新的利率展望：市场预计央行12月9日加息25基点的概率为39%、按兵不动61%；5年期加拿大国债收益率在美国中期选举与油价回落后降至约3.3%，固定利率略有松动。多数大行预测政策利率2026年底维持2.50%、2027年初再加，2027年底预测中位2.75%、区间2.25%–3.25%。",
    "wendyNote": "浮动和固定现在是两条线：12月加不加还是五五开，浮动利率的先别急着锁；但固定利率已经跟着国债收益率松了一点，正在谈固定利率的可以多比两家、趁这波窗口谈。True North老板自己还看至少再加两次到3.00%，所以固定利率的松动别当成趋势反转——锁利率先问hold期，谈房价先按Prime 4.70%留余地。",
    "url": "https://www.truenorthmortgage.ca/blog/mortgage-rate-forecast"
  },
  {
    "id": "toronto-fall-closings-micro-nov2026",
    "date": "2026-11-08",
    "time": "07:00",
    "source": "Urban Realty Toronto 秋季成交盘点（11月1日，MLS 8–10月数据）",
    "firstHand": false,
    "tags": [
      "秋季成交",
      "微观市场"
    ],
    "heat": 58,
    "points": [
      "秋季成交5,835套 Condo占52%",
      "半独立屋22天最快售出",
      "滨水C1区322套成交居首"
    ],
    "image": "/summaries/toronto-fall-closings-micro-nov2026.jpg",
    "title": "多伦多秋季成交盘点：5,835套成交Condo占一半，半独立屋22天最快",
    "summary": "Urban Realty Toronto 11月1日发布的MLS秋季盘点：8月1日至10月31日多伦多共成交5,835套，Condo类3,019套（52%）、均价$657,000、中位$561,000、平均39天售出；独立屋类2,816套、均价$1.46M、中位$1.16M、26天售出。半独立屋最快、平均22天；成交量最大的微观市场是滨水C1区Condo（322套、中位$608,000），中城区Yonge–Eglinton一带100套、31天售出最快。",
    "wendyNote": "秋季的钱流向了两个极端：Condo做量、半独立屋拼速度。$53万–$70万的Condo是成交最深的价格带，首套买家就盯这个区间；半独立屋22天就卖掉，说明好户型、好地段的自由产权房根本不愁卖，看到合适的别拖。C1区322套看着多，但平均40天才卖掉，市中心Condo卖家定价还是要贴着中位$608,000走。",
    "url": "https://urbanrealtytoronto.com/where-toronto-is-selling-sales-volume-2026/"
  },
  {
    "id": "rbc-oct2026-minimal-momentum",
    "date": "2026-11-07",
    "time": "07:00",
    "source": "RBC Economics 10月市场分析（11月6日）",
    "firstHand": true,
    "tags": [
      "10月复盘",
      "复苏乏力"
    ],
    "heat": 70,
    "points": [
      "多伦多成交环比+1.2%仍乏力",
      "Condo指数同比-7.3%领跌",
      "RBC仍看复苏终将到来"
    ],
    "image": "/summaries/rbc-oct2026-minimal-momentum.jpg",
    "title": "RBC：全加楼市秋季复苏乏力，多伦多Condo指数同比-7.3%领跌",
    "summary": "RBC Economics 11月6日分析：加拿大秋季楼市复苏步履蹒跚，多数城市10月成交与房价几无动能。多伦多季调成交环比+1.2%、房价指数环比+0.1%，但同比仍低7.9%与4.3%；Condo指数同比-7.3%，跌幅远超独立屋的-4.4%；在售库存同比-10%，RBC仍认为复苏终将到来。",
    "wendyNote": "环比回升别当反转：成交量只比9月多一点点，同比还差近8%，Condo跌得比独立屋深得多，说明买家只敢挑便宜的下手。卖家别因单月数据抬价，买家继续按今天的价格谈——RBC说复苏会来，但没说这个冬天会来。",
    "url": "https://www.rbc.com/en/economics/canadian-analysis/canadian-housing/local-real-estate-markets/canadas-housing-markets-carry-minimal-momentum-through-fall/"
  },
  {
    "id": "statcan-jobs-oct2026",
    "date": "2026-11-07",
    "time": "07:00",
    "source": "加拿大统计局10月劳动力调查（11月6日，加通社）",
    "firstHand": false,
    "tags": [
      "就业数据",
      "12月议息"
    ],
    "heat": 68,
    "points": [
      "失业率升至6.7%半年新高",
      "10月减4,700岗连跌三月",
      "私企减53,000青年失业13.7%"
    ],
    "image": "/summaries/statcan-jobs-oct2026.jpg",
    "title": "10月失业率升至6.7%半年新高：连减三月，12月加息悬念再起",
    "summary": "统计局11月6日公布10月劳动力调查：失业率从6.5%升至6.7%，为半年新高；就业减少4,700人，连续第三个月下滑，8–9月累计已减11万。私营部门减53,000人，为2月以来首降；青年失业率升至13.7%，时薪同比+2.2%。",
    "wendyNote": "就业连跌三月，央行12月9日再加息的底气变弱了：通胀还在3%以上，加息理由在；但私企在裁人，硬加息会伤就业。浮动利率的先别慌——12月加不加现在是真悬念；正在谈固定利率的，盯着5年期国债收益率，它已回落到3.3%附近，固定报价有松动的空间。",
    "url": "https://www.wingsmagazine.com/unemployment-rate-rose-to-6-7-in-october-statcan-says/"
  },
  {
    "id": "toronto-pbr-next-round-nov2026",
    "date": "2026-11-07",
    "time": "07:00",
    "source": "TorontoToday 11月4日报道 × 多伦多市政府文件",
    "firstHand": false,
    "tags": [
      "出租房激励",
      "市政政策"
    ],
    "heat": 60,
    "points": [
      "市长推下一轮1万套出租房",
      "含2,000套平价房+8,000套市价",
      "首轮32,000套申请仅批8,000套"
    ],
    "image": "/summaries/toronto-pbr-next-round-nov2026.jpg",
    "title": "多伦多拟推下一轮出租房激励：1万套目标，5个Condo项目已转出租",
    "summary": "TorontoToday 11月4日报道：市长Olivia Chow新任期伊始推动下一轮Purpose-Built Rental激励计划，目标再支持1万套出租房（至少2,000套平价房、至多8,000套市价房），仍须市议会进一步批准。首轮吸引超32,000套申请、约8,000套获批（17个项目），已有5个规划中的Condo项目转为专业出租楼。",
    "wendyNote": "这是出租供给的长期利好、不是明天就能租到的房：激励要先过市议会，项目从获批到入住还要几年，短期内租金拐点主要还是靠现有库存。对Condo卖家是提醒——开发商把楼花转出租，说明新盘卖不动；对租客则是好消息，未来几年专业出租楼会越来越多，谈租时多一个选择。",
    "url": "https://jason-wodlinger-mortgages.ca/toronto-rental-incentives-condo-market/"
  },
  {
    "id": "federal-budget-2026-housing",
    "date": "2026-11-06",
    "time": "07:00",
    "source": "Canadian Mortgage Trends 预算解析（11月5日）× 财政部官方预算文本",
    "firstHand": false,
    "tags": [
      "联邦预算",
      "房贷新政"
    ],
    "heat": 88,
    "points": [
      "保险房贷上限100万→150万",
      "30年摊销开放首套与新房",
      "外国买家禁令延至2029年"
    ],
    "image": "/summaries/federal-budget-2026-housing.jpg",
    "title": "2026联邦预算落地：保险房贷上限提至150万，30年摊销开放首套买家",
    "summary": "财政部11月5日公布2026年预算：拟将可选房贷保险房价上限从100万提至150万，首套买家或新房可享30年摊销；外国买家禁令延至2029年1月1日，但新房豁免；2027年2月1日起三、四户住宅可获最高90%保险建筑贷款，5–50户物业引入私人保险公司；Build Canada Homes追加130亿至450亿，住房总投入447亿。",
    "wendyNote": "对多伦多买家最直接的是150万上限加30年摊销：100–150万价位的房子月供能下来，首套买家选择面变宽，但措施多为提案、须立法落地，别按已生效算预算。外国买家禁令延两年但新房豁免，楼花市场反而多了一条需求通道；三、四户保险放开后，小型出租物业融资会变容易，留意2027年2月1日这个生效日。",
    "url": "https://www.canadianmortgagetrends.com/2026/11/budget-2026-explained-12-changes-for-housing-mortgages-and-banking/"
  },
  {
    "id": "rentals-ca-nov2026-rent-turn",
    "date": "2026-11-06",
    "time": "07:00",
    "source": "Rentals.ca × Urbanation 11月全国租金报告（11月5日发布）",
    "firstHand": false,
    "tags": [
      "租金拐点",
      "租赁市场"
    ],
    "heat": 80,
    "points": [
      "多伦多租金$2,590同比+1.6%",
      "终结连续32个月同比下跌",
      "两房租金同比+4.0%至$2,965"
    ],
    "image": "/summaries/rentals-ca-nov2026-rent-turn.jpg",
    "title": "多伦多租金32个月来首涨：10月均租$2,590同比+1.6%，两房涨4%",
    "summary": "Rentals.ca与Urbanation 11月5日发布的全国租金报告：多伦多10月公寓与Condo平均要价租金$2,590、同比+1.6%，终结连续32个月同比下跌，单月涨幅1.4%为六大市场最大；两房租金同比+4.0%至$2,965、三房+4.3%。全国平均租金$2,036、同比-3.2%，为连续25个月下跌中最小跌幅。",
    "wendyNote": "租金拐点先出现在大户型：两房、三房先涨，说明家庭租客回来了，Condo租金整体仍同比-5.5%，一房租客谈判空间还在。房东别急着普涨——涨的是大户型；租客看两房以上的要抓紧，好房源会先走；投资客算账时注意，租金止跌不等于马上大涨，按今天的租金重算回报。",
    "url": "https://rentals.ca/national-rent-report"
  },
  {
    "id": "meridian-presale-70pct-nov2026",
    "date": "2026-11-06",
    "time": "07:00",
    "source": "money.ca × Urbanation Q3数据（11月4日）",
    "firstHand": false,
    "tags": [
      "楼花融资",
      "Condo新盘"
    ],
    "heat": 72,
    "points": [
      "Q3新Condo仅售760套，楼花60套",
      "楼花销量同比-61%连跌12季",
      "竣工未售5,127套，仍高40%"
    ],
    "image": "/summaries/meridian-presale-70pct-nov2026.jpg",
    "title": "楼花融资卡死70%预售线：Q3楼花仅售60套，开发商拿不到建筑贷款",
    "summary": "money.ca 11月4日报道：Meridian信用社坚持开发商须预售70%才能获建筑贷款，而Urbanation Q3数据显示GTHA新Condo销量760套、同比翻倍，但85%来自竣工楼盘，楼花仅售60套、同比-61%，连续12个季度下跌；竣工未售库存5,127套、环比-7%但同比仍高40%，批量买家以低于原价40%的均价扫走339套。",
    "wendyNote": "数字分化要看清：新Condo销量翻倍是批量买家在抄底竣工盘，不是楼花回暖——楼花一个季度全区只卖60套，开发商拿不到贷款就开不了工，未来几年新盘只会更少。想买楼花的别等“新盘大降价”，好地段的新盘根本没开工；想捡竣工盘的，批量买家40%的折扣就是谈判参照。",
    "url": "https://money.ca/real-estate/ontario-condo-construction-lending-presale-threshold"
  },
  {
    "id": "gta-condo-oct2026-deep-dive",
    "date": "2026-11-05",
    "time": "07:00",
    "source": "Canadian Mortgage Professional × TRREB（11月4日）",
    "firstHand": false,
    "tags": [
      "Condo",
      "10月成交"
    ],
    "heat": 76,
    "points": [
      "GTA Condo均价$621,400同比-5.8%",
      "成交1,385套同比-10.4%",
      "基准价-7.3%至$521,600"
    ],
    "image": "/summaries/gta-condo-oct2026-deep-dive.jpg",
    "title": "10月Condo再探底：GTA成交1,385套同比-10.4%，905区均价跌8.8%",
    "summary": "TRREB 10月数据（Canadian Mortgage Professional 11月4日、HousingPortal整理）：GTA Condo成交1,385套、同比-10.4%，均价$621,400、同比-5.8%；市中心均价跌6%、905区跌8.8%，MLS基准价同比-7.3%至$521,600，为各房型跌幅最深。独立屋是唯一成交回升的房型，市中心+1.1%、905区+0.3%。",
    "wendyNote": "Condo仍是全场最弱的一环：价格跌得最深、成交还在缩，905区跌8.8%说明跌势已不限于市中心。买家现在挑Condo有得谈，尤其看2021–2022年高位买入的急售盘；卖家别等反弹——新落成项目还在往租赁和二手市场加供应，定价贴着今天的成交走才卖得动。",
    "url": "https://www.mpamag.com/ca/mortgage-industry/market-updates/buyers-still-arent-biting-in-torontos-slumping-housing-market/596209"
  },
  {
    "id": "mortgage-rates-post-hike-nov2026",
    "date": "2026-11-05",
    "time": "07:00",
    "source": "rates.ca 加拿大房贷利率报告（11月4日数据）",
    "firstHand": false,
    "tags": [
      "房贷利率",
      "加息之后"
    ],
    "heat": 72,
    "points": [
      "最优5年固定4.34% 浮动3.50%",
      "Prime 4.70% 加息一周已落地",
      "固定利率30天内涨约20基点"
    ],
    "image": "/summaries/mortgage-rates-post-hike-nov2026.jpg",
    "title": "加息一周后：最优5年固定4.34%、浮动3.50%，Prime已升至4.70%",
    "summary": "rates.ca 11月4日数据：央行10月28日加息至2.50%后，六大行Prime已升至4.70%，最优5年固定（有保险）4.34%、浮动3.50%，浮动仍比固定低约0.8个百分点。11月2日贷款利率调查显示最优5年固定30天内涨了20个基点，尽管5年期国债收益率同期回落；央行下次议息为12月9日，六大行均预计至少再加一次。",
    "wendyNote": "浮动仍比固定便宜，但便宜的逻辑变了：不再是等降息，而是赌12月不再加。续贷或新买的，先锁一个利率hold再慢慢挑房——固定利率30天涨了20个基点，等的成本看得见。算月供时按Prime 4.70%和可能再加一次来留余地，别按最低报价卡预算。",
    "url": "https://rates.ca/mortgage-report"
  },
  {
    "id": "valery-toronto-townhouse-nov2026",
    "date": "2026-11-05",
    "time": "07:00",
    "source": "Valery 11月多伦多镇屋报告（TRREB MLS数据，11月5日更新）",
    "firstHand": false,
    "tags": [
      "镇屋",
      "10月成交"
    ],
    "heat": 68,
    "points": [
      "10月镇屋中位$787,000同比+1%",
      "211套成交同比-10% 卖98.7%",
      "4.3个月库存 两房中位$713,000"
    ],
    "image": "/summaries/valery-toronto-townhouse-nov2026.jpg",
    "title": "多伦多镇屋10月：中位$787,000同比微涨1%，211套成交同比-10%",
    "summary": "Valery 11月5日更新的TRREB MLS数据：多伦多10月镇屋成交中位价$787,000、同比+1%，平均$942,000、同比+6%；当月成交211套、同比-10%，中位23天售出、成交价为要价98.7%。在售904套、中位要价$770,000，按10月 pace 需4.3个月消化；近12个月中位$795,000、同比-5%。",
    "wendyNote": "镇屋是10月少数价格没跌的房型，但别误读：中位只涨1%、成交量却少了一成，是卖得少、不是抢得凶。两房中位$713,000仍是Condo买家往上换房最现实的跳板，谈价时盯着98.7%这个成交比——好房源基本不打折，挂高价的19%已降价房源才是谈判空间。",
    "url": "https://staging.valery.ca/market/toronto/townhouses/"
  },
  {
    "id": "trreb-oct2026-gta-sales",
    "date": "2026-11-04",
    "time": "07:00",
    "source": "TRREB 10月 Market Watch 官方通稿（11月4日，GlobeNewswire）",
    "firstHand": true,
    "tags": [
      "10月成交",
      "GTA均价"
    ],
    "heat": 88,
    "points": [
      "10月成交5,603套同比-7.9%",
      "均价$1,024,108同比-2.7%",
      "季调成交环比+1.2%止跌"
    ],
    "image": "/summaries/trreb-oct2026-gta-sales.jpg",
    "title": "TRREB 10月月报：GTA成交5,603套同比-7.9%，均价$1,024,108同比-2.7%",
    "summary": "TRREB 11月4日发布10月 Market Watch：GTA成交5,603套、同比-7.9%，新挂牌14,173套、同比-11.9%，在售库存25,098套、同比-10%；均价$1,024,108、同比-2.7%，MLS房价指数同比-4.3%。季调后成交环比+1.2%至5,274套、房价指数环比+0.1%至$928,800，为三个月来首次环比回升，TRREB称通胀与借贷成本不确定性仍让许多买家观望。",
    "wendyNote": "同比仍跌、环比止跌，读法要分开：价格比去年便宜是事实，季调回升只是跌势放缓、不是反转信号。买家继续按今天的价格谈，重点看季调后连续两个月是否都回升；卖家别因单月环比就抬价——新挂牌少了11.9%，是卖家退场在托着库存，定价仍要贴着成交走。",
    "url": "https://www.globenewswire.com/news-release/2026/11/04/3395067/0/en/inflation-and-borrowing-costs-impacted-october-gta-real-estate-market.html"
  },
  {
    "id": "valery-905-precon-vs-resale-nov2026",
    "date": "2026-11-04",
    "time": "07:00",
    "source": "Valery 905楼花与二手对比研究（11月4日，TRREB MLS数据）",
    "firstHand": false,
    "tags": [
      "楼花",
      "905对比"
    ],
    "heat": 70,
    "points": [
      "905楼花独立屋每呎-3.9%",
      "同面积比二手反贵8.7%",
      "新Condo每呎贵63.7%"
    ],
    "image": "/summaries/valery-905-precon-vs-resale-nov2026.jpg",
    "title": "905楼花vs二手：独立屋每呎便宜3.9%是面积幻觉，新Condo贵63.7%",
    "summary": "Valery 11月4日对比905区在售楼花与5月1日–11月3日二手成交：楼花独立屋每呎比二手低3.9%、镇屋低1.9%，但主因是楼花更大（独立屋中位2,812呎对二手2,250呎），同面积比较反而贵8.7%、镇屋贵3.5%。新Condo是例外：每呎比二手成交贵63.7%、同面积仍贵55%，且52.6%楼花项目附赠品，实际价低于标价。",
    "wendyNote": "看楼花别只看每呎单价：独立屋、镇屋的“便宜”多半是你买了更大的房子，总价并不低；Condo楼花则是真贵，比二手贵六成以上，投资客按今天租金算不过账。近五年二手房最难卖（6.6个月库存），卖家要同时和隔壁售楼处比价，突出能马上入住、价格确定的优势。",
    "url": "https://staging.valery.ca/research/gta-905-preconstruction-vs-resale/"
  },
  {
    "id": "statcan-ncapi-q3-2026",
    "date": "2026-11-04",
    "time": "07:00",
    "source": "加拿大统计局新Condo价格指数（11月3日发布）",
    "firstHand": true,
    "tags": [
      "新Condo",
      "官方指数"
    ],
    "heat": 62,
    "points": [
      "全国新Condo指数环比-0.6%",
      "指数120.8（2017年=100）",
      "多伦多环比-0.8%领跌"
    ],
    "image": "/summaries/statcan-ncapi-q3-2026.jpg",
    "title": "统计局：Q3全国新Condo价格指数环比-0.6%，多伦多-0.8%",
    "summary": "加拿大统计局11月3日发布Q3新Condo公寓价格指数：全国综合指数环比-0.6%至120.8（2017年=100），追踪开发商对新建公寓的售价。九个大城市中多伦多环比-0.8%、维多利亚-1.8%、温哥华-1.0%，多伦多指数127.6；该指数未经季调、Q3数据在Q4发布时可修订。",
    "wendyNote": "官方指数给楼花市场又记了一笔：开发商售价还在往下走，和二手Condo跌势一致，楼花溢价更站不住脚。买新Condo的，拿这个指数去和开发商谈——售价在跌，赠品和价格都要谈；已经持有楼花的，别按开盘价估值，按今天的开发商售价重算。",
    "url": "https://haberpaper.com/en/news/statcan-new-condominium-apartment-price-index-q3-2026"
  },
  {
    "id": "ontario-youth-homeownership-nov2026",
    "date": "2026-11-04",
    "time": "07:00",
    "source": "Storeys × RESCON主席专栏（11月3日）",
    "firstHand": false,
    "tags": [
      "首套买家",
      "可负担性"
    ],
    "heat": 58,
    "points": [
      "18–38岁仅47%信能买房",
      "仅12%信5年内更可负担",
      "房价7倍于年收入"
    ],
    "image": "/summaries/ontario-youth-homeownership-nov2026.jpg",
    "title": "安省年轻人买房信心崩塌：18–38岁仅47%相信买得起房",
    "summary": "Storeys 11月3日刊登RESCON主席专栏引述的调查：安省18–38岁受访者中仅47%相信买房可实现，逾四分之一认为完全不可能；OREA展望显示仅12%安省人相信未来五年住房会更可负担，逾四分之一有志买房者认为永远买不起。自2005年以来房价涨逾一倍、通胀调整后工资仅涨16%，多伦多等地房价已超税前年收入7倍，75%受访者支持削减市政开发费。",
    "wendyNote": "信心数字比价格数字更值得首套买家看：市场现在是买方市场，但年轻人不敢进场，说明问题在首付、月供和信心，不在有没有房源。首套买家先把账算到月供层面——用今天的利率和首套退税重算，别被“永远买不起”的情绪带偏，也别因政策传闻提前透支预算。",
    "url": "https://storeys.com/homeownership-just-a-dream-ontario/"
  },
  {
    "id": "toronto-oct2026-city-sales",
    "date": "2026-11-03",
    "time": "07:00",
    "source": "TorontoLivings 10月多伦多市场更新（11月2日，MLS数据经Repliers）",
    "firstHand": false,
    "tags": [
      "10月成交",
      "Condo"
    ],
    "heat": 74,
    "points": [
      "10月成交1,967套同比-13.6%",
      "均价$1,090,449同比+1.3%",
      "Condo中位$545K同比-7.5%"
    ],
    "image": "/summaries/toronto-oct2026-city-sales.jpg",
    "title": "多伦多10月成交1,967套同比-13.6%，均价$1,090,449逆势+1.3%",
    "summary": "TorontoLivings 11月2日发布的10月多伦多市更新（MLS数据经Repliers，11月2日提取、属初步数据）：全市成交1,967套、同比-13.6%，新挂牌5,497套、同比-8.1%；均价$1,090,449、同比+1.3%，中位价$850,000、同比+0.1%。Condo公寓跌幅最深：成交836套、同比-20.5%，中位价$545,000、同比-7.5%；售出/新挂牌比35.8%，仍属买方市场。",
    "wendyNote": "量跌价稳，买家继续占上风：Condo是谈判空间最大的板块，中位价一年少了约$44,000，看到合适单位可以大胆谈价、别被挂牌价锚定。卖家则要按今天的市场定价——10月仅21%房源高于要价成交，设截标日反而可能吓跑买家；独立屋中位13–17天就走，好房源仍要果断。",
    "url": "https://www.torontolivings.com/toronto-real-estate-market-update-october-2026/"
  },
  {
    "id": "toronto-vht-declaration-2026",
    "date": "2026-11-03",
    "time": "07:00",
    "source": "多伦多市政府官方公告（11月2日）",
    "firstHand": true,
    "tags": [
      "空置税",
      "持有成本"
    ],
    "heat": 62,
    "points": [
      "2026年度申报已开放",
      "截止2027年4月30日",
      "空置税率为评估值3%"
    ],
    "image": "/summaries/toronto-vht-declaration-2026.jpg",
    "title": "多伦多2026年度空置税申报已开放：所有业主须申报，截止2027年4月30日",
    "summary": "多伦多市政府11月2日公告：2026年度空置税申报通道已开放，所有住宅业主都须为2026年1月1日至12月31日的居住情况申报，即使是自住房，截止2027年4月30日。空置满6个月且无豁免的住宅按市政评估值（CVA）3%征税；2025年度申报完成率逾99%。",
    "wendyNote": "这条是给所有多伦多业主的待办：自住房也要申报，别因漏报被按空置征税，3%的税额不是小数目。正在出租或空置的房源，申报前先核对租约与豁免条件；2027年4月30日截止，现在记下来、别拖到最后一周。",
    "url": "https://www.toronto.ca/news/city-of-toronto-opens-the-2026-vacant-home-tax-declaration-period/"
  },
  {
    "id": "downsview-arbo-phase2-rentals",
    "date": "2026-11-03",
    "time": "07:00",
    "source": "GTA Real Estate Today × UrbanToronto（11月1日）",
    "firstHand": false,
    "tags": [
      "租赁供应",
      "Downsview"
    ],
    "heat": 58,
    "points": [
      "二期约3,160套出租房",
      "17栋楼含316套平价房",
      "94%距车站800米内"
    ],
    "image": "/summaries/downsview-arbo-phase2-rentals.jpg",
    "title": "Downsview Arbo二期推进：约3,160套出租房，含316套平价房",
    "summary": "Canada Lands Company正在推进多伦多Downsview旧军事用地Arbo项目二期：在13.5公顷地块上建17栋楼、约3,160套出租房，其中市场价2,841套、平价房316套（占10%，低于该区20%目标）。项目含一所公立小学、托儿所与Keele街沿线零售，94%单位距Downsview Park车站800米内。",
    "wendyNote": "这是西北区租赁供给的大动作，但仍在方案推进阶段、没有入住时间表，别按“马上能租”做计划。对Downsview周边房东是提醒：未来几年该区出租竞争会加剧，续租定价要靠品质留人；对租客则是好消息——大型专业出租楼进场后，选择会变多。",
    "url": "https://www.realestategtatoday.ca/index.php/2026/11/01/3160-rental-units-coming-to-downsview-heres-what-it-means-for-toronto/"
  },
  {
    "id": "valery-toronto-rent-oct2026",
    "date": "2026-11-02",
    "time": "07:00",
    "source": "Valery 11月多伦多租金报告（TRREB MLS数据，11月2日更新）",
    "firstHand": false,
    "tags": [
      "租金",
      "租赁市场"
    ],
    "heat": 65,
    "points": [
      "10月成交中位租金$2,500",
      "10月租出4,332套同比-7%",
      "在租房源7,298套要价$2,600"
    ],
    "image": "/summaries/valery-toronto-rent-oct2026.jpg",
    "title": "多伦多10月租金：成交中位$2,500同比-2%，租出4,332套同比-7%",
    "summary": "Valery 11月2日更新的TRREB MLS数据：多伦多10月成交中位租金$2,500、平均$2,818，分别同比-2%与基本持平；当月租出4,332套、同比-7%。在租房源7,298套、中位要价$2,600，其中19%房源已降价、中位降幅$150，成交中位租期仅15天。",
    "wendyNote": "租客现在仍有谈判空间：近两成在租房源已经降价，看到合适房源可以谈条件、别按要价照单全收。房东则要按小区定价——成交中位15天就租出，定价贴近市场的好房源并不愁租，挂高价只会换来降价重挂。",
    "url": "https://valery.ca/market/toronto/rentals/"
  },
  {
    "id": "toronto-fall-closings-2026",
    "date": "2026-11-02",
    "time": "07:00",
    "source": "Urban Realty Toronto MLS成交快照（11月1日）",
    "firstHand": false,
    "tags": [
      "成交量",
      "Condo"
    ],
    "heat": 68,
    "points": [
      "8–10月成交5,835套",
      "Condo占52%中位$561K",
      "半独立屋22天最快售出"
    ],
    "image": "/summaries/toronto-fall-closings-2026.jpg",
    "title": "多伦多秋季成交5,835套：Condo占一半量，独立屋卖得更快",
    "summary": "Urban Realty 11月1日发布的MLS成交快照（8月1日–10月31日）：多伦多成交5,835套，Condo类3,019套占52%、中位$561K、平均39天；独立屋类2,816套、中位$1.16M、平均26天。Waterfront C1以322套居量首，半独立屋平均22天售出、为主要房型中最快。",
    "wendyNote": "量在Condo、速度在独立屋：Condo买家选择多、可以慢慢比价谈价，别被“成交量大”误读为抢手；独立屋好房源平均不到一个月就走，看到合适的要果断出价。Waterfront C1量大但平均40天，仍是定价市场而非卖方市场。",
    "url": "https://urbanrealtytoronto.com/where-toronto-is-selling-sales-volume-2026/"
  },
  {
    "id": "federal-budget-nov5-housing-watch",
    "date": "2026-11-02",
    "time": "07:00",
    "source": "加拿大财政部官方公告（10月20日）× KPMG/Money.ca前瞻",
    "firstHand": false,
    "tags": [
      "联邦预算",
      "住房政策"
    ],
    "heat": 58,
    "points": [
      "11月5日公布2026预算",
      "官方称将压低新房成本",
      "首套GST/HST退税已在实施"
    ],
    "image": "/summaries/federal-budget-nov5-housing-watch.jpg",
    "title": "11月5日联邦预算看点：住房与节能改造会不会有新招？",
    "summary": "财政部10月20日官方公告：财长将于11月5日公布2026年联邦预算，官方称预算将延续降低新房成本、帮助节能改造等行动。已在实施的首套房GST/HST退税最高可省$5万（$100万以下全额、$150万逐步归零）；节能改造细则与租客退税等仍属建议而非承诺，须等预算文本。",
    "wendyNote": "预算日之前别为传闻改预算：已确定的只有现行首套退税，算房款时按现行规则走；新措施要等11月5日文本落地再算。换暖气、做节能改造的屋主也先别赶工，等预算是否明确20亿热泵补贴的追溯规则再动手。",
    "url": "https://www.canada.ca/en/department-finance/news/2026/10/government-of-canada-to-release-budget-2026-on-november-5-2026.html"
  },
{
  "date": "2026-11-01",
  "time": "17:00",
  "firstHand": true,
  "id": "statcan-gdp-aug2026-oct30",
  "source": "加拿大统计局（2026年10月30日）",
  "tags": [
    "加拿大经济",
    "GDP"
  ],
  "heat": 62,
  "points": [
    "8月实际GDP环比持平",
    "9月初估下降0.1%",
    "正式数据11月30日发布"
  ],
  "title": "加拿大8月GDP再度持平，9月初估下降0.1%",
  "summary": "加拿大统计局10月30日公布，8月实际GDP连续第二个月基本不变，零售、制造及建筑业增长被其他行业下滑抵消。9月初步估计下降0.1%，仍有修订可能；9月及第三季度正式数据将于11月30日发布。",
  "wendyNote": "分析：经济活动疲软为观察购房需求及后续利率路径增加了新依据，但单次数据不能确定央行下一次决定。买家应按实际贷款报价和收入情况计算预算，不宜把加息或降息视为已确定。",
  "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/261030/dq261030a-eng.htm",
  "image": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22960%22%20height%3D%22352%22%3E%3Crect%20width%3D%22960%22%20height%3D%22352%22%20fill%3D%22%23101d30%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%2255%22%20fill%3D%22%23cbb079%22%20font-size%3D%2224%22%20font-family%3D%22sans-serif%22%3EWENDY'S%20HOT%20RADAR%20%C2%B7%202026-11-01%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22120%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E8%E6%9C%88%E5%AE%9E%E9%99%85GDP%E7%8E%AF%E6%AF%94%E6%8C%81%E5%B9%B3%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22190%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E9%E6%9C%88%E5%88%9D%E4%BC%B0%E4%B8%8B%E9%99%8D0.1%25%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22260%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E%E6%AD%A3%E5%BC%8F%E6%95%B0%E6%8D%AE11%E6%9C%8830%E6%97%A5%E5%8F%91%E5%B8%83%3C%2Ftext%3E%3C%2Fsvg%3E"
},
{
  "date": "2026-11-01",
  "time": "17:00",
  "firstHand": true,
  "id": "oeb-electricity-nov2026",
  "source": "安省能源局（10月16日公告，11月1日生效）",
  "tags": [
    "持有成本",
    "安省电费"
  ],
  "heat": 55,
  "points": [
    "11月1日起启用冬季时段",
    "分时电价9.1／14.6／18.9分",
    "电费补贴比例改为15.7%"
  ],
  "title": "11月1日起安省调整电价与冬季用电时段，业主租客需看总账单",
  "summary": "安省受监管电价计划11月1日起调整：TOU低峰、中峰、高峰分别为9.1、14.6、18.9加分/度。工作日高峰为早上7至11点、下午5至7点；低峰为晚7点至早7点及周末和假日全天。Ontario Electricity Rebate补贴比例同步改为15.7%，阶梯计费住宅冬季低价额度为每月1,000度。",
  "wendyNote": "分析：租客与业主可按自己的计费计划安排用电。每度电价下降不代表总账单一定减少，还要考虑补贴、用电量、输配电费用；出租物业预算应以实际账单为准。",
  "url": "https://oeb.ca/newsroom/2026/ontario-energy-board-announces-changes-electricity-prices-households-small-businesses",
  "image": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22960%22%20height%3D%22352%22%3E%3Crect%20width%3D%22960%22%20height%3D%22352%22%20fill%3D%22%23101d30%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%2255%22%20fill%3D%22%23cbb079%22%20font-size%3D%2224%22%20font-family%3D%22sans-serif%22%3EWENDY'S%20HOT%20RADAR%20%C2%B7%202026-11-01%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22120%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E11%E6%9C%881%E6%97%A5%E8%B5%B7%E5%90%AF%E7%94%A8%E5%86%AC%E5%AD%A3%E6%97%B6%E6%AE%B5%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22190%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E%E5%88%86%E6%97%B6%E7%94%B5%E4%BB%B79.1%EF%BC%8F14.6%EF%BC%8F18.9%E5%88%86%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22260%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E%E7%94%B5%E8%B4%B9%E8%A1%A5%E8%B4%B4%E6%AF%94%E4%BE%8B%E6%94%B9%E4%B8%BA15.7%25%3C%2Ftext%3E%3C%2Fsvg%3E"
},
{
  "date": "2026-11-01",
  "time": "17:00",
  "firstHand": true,
  "id": "cohere-canada-equity-oct2026",
  "source": "加拿大总理办公室（2026年10月29日）",
  "tags": [
    "加拿大AI",
    "数据管理"
  ],
  "heat": 42,
  "points": [
    "联邦拟股权投资最多16亿",
    "投资分阶段实施",
    "2030年前承诺新增千个岗位"
  ],
  "title": "加拿大拟向Cohere投资最多16亿加元，支持本地企业AI与数据自主",
  "summary": "联邦政府10月29日宣布，承诺向多伦多起家的Cohere进行最多16亿加元股权投资，分阶段实施并定期报告进展。公司承诺到2030年新增至少1,000个加拿大技术岗位，并投入至少17亿加元增加加拿大计算基础设施；这些属于未来承诺，尚非已完成成果。",
  "wendyNote": "分析：这是加拿大企业AI产业的新布局。地产团队选择处理客户资料的AI工具时，可持续关注数据存储地点、权限和保留规则；此次投资本身不代表现有地产工具已获得这些能力。",
  "url": "https://www.pm.gc.ca/en/news/news-releases/2026/10/29/canada-announces-landmark-investment-cohere-scale-secure-sovereign-ai",
  "image": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22960%22%20height%3D%22352%22%3E%3Crect%20width%3D%22960%22%20height%3D%22352%22%20fill%3D%22%23101d30%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%2255%22%20fill%3D%22%23cbb079%22%20font-size%3D%2224%22%20font-family%3D%22sans-serif%22%3EWENDY'S%20HOT%20RADAR%20%C2%B7%202026-11-01%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22120%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E%E8%81%94%E9%82%A6%E6%8B%9F%E8%82%A1%E6%9D%83%E6%8A%95%E8%B5%84%E6%9C%80%E5%A4%9A16%E4%BA%BF%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22190%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E%E6%8A%95%E8%B5%84%E5%88%86%E9%98%B6%E6%AE%B5%E5%AE%9E%E6%96%BD%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22260%22%20fill%3D%22%23f7f5f0%22%20font-size%3D%2234%22%20font-family%3D%22sans-serif%22%3E2030%E5%B9%B4%E5%89%8D%E6%89%BF%E8%AF%BA%E6%96%B0%E5%A2%9E%E5%8D%83%E4%B8%AA%E5%B2%97%E4%BD%8D%3C%2Ftext%3E%3C%2Fsvg%3E"
},
  {
    id: "dec-hike-odds-oct30-2026",
    date: "2026-11-01",
    time: "07:00",
    source: "True North Mortgage 利率预测（10 月 30 日更新）",
    firstHand: false,
    tags: ["12月议息", "利率前瞻"],
    heat: 62,
    points: [
      "12月9日再加息概率50%",
      "5年期国债收益率约3.5%",
      "多数机构料明年Q1升至2.75%",
    ],
    image: "/summaries/dec-hike-odds-oct30-2026.jpg",
    title: "12月议息五五开：市场押注再加息概率50%，多数机构料明年Q1升至2.75%",
    summary:
      "True North 10 月 30 日更新：按 mortgagelogic.news 定价，12 月 9 日再加 25 基点与按兵不动各占 50%；5 年期国债收益率已微降至 3.5%，固定利率或略有回落空间。各大行预测分歧：多数料政策利率年底守住 2.50%、2027 年 Q1 升至 2.75%，Scotiabank 与 RBC 则看高至 2027 年底 3.25%。",
    wendyNote:
      "12 月结果是真悬念，别提前押注方向：浮动利率持有者按“可能再加 25 基点”留好缓冲，固定利率买家则盯着 3.5% 的国债收益率——它回落时就是谈固定价的好时机。下次关键数据是 11 月 6 日就业与 11 月 16 日 CPI，出结果前别急着锁长约。",
    url: "https://www.truenorthmortgage.ca/blog/mortgage-rate-forecast",
  },
  {
    id: "bigger-condos-wahi-oct2026",
    date: "2026-11-01",
    time: "07:00",
    source: "Storeys × Wahi 分析（10 月 30 日）",
    firstHand: false,
    tags: ["Condo分化", "大户型"],
    heat: 66,
    points: [
      "一房中位价6年跌14%至48万",
      "三房涨13%至70万，四房+15%",
      "45%买家选择合并单位",
    ],
    image: "/summaries/bigger-condos-wahi-oct2026.jpg",
    title: "Condo越住越大才保值：一房6年跌14%，三房四房逆势涨13–15%",
    summary:
      "Storeys 10 月 30 日报道引述 Wahi 分析：2020 年 Q1 至 2026 年 Q1，GTA 一房 Condo 中位价跌 14% 至 48 万加元，两房涨 2% 至 63 万，三房涨 13% 至 70 万、四房以上涨 15% 至 71.5 万。中城新盘 One Ten Avenue Road 开盘半年没卖出一套 2,500 呎以下单位，约 45% 买家选择合并多个单位。",
    wendyNote:
      "这组数据把 Condo 分化说透了：小户型是给投资客准备的，投资客退潮它就跌；能住人的大户型才是自住需求在撑。买 Condo 自住，优先看两房以上、能真正住下的户型；手里有小户型想卖的，别等“市场回暖”，定价贴着今天的成交走。",
    url: "https://storeys.com/toronto-condos-more-livable-bigger/",
  },
  {
    id: "nov1-rate-snapshot-2026",
    date: "2026-11-01",
    time: "07:00",
    source: "Best Rates（11 月 1 日更新）",
    firstHand: false,
    tags: ["利率快照", "加息之后"],
    heat: 60,
    points: [
      "Prime 已升至4.70%",
      "5年固定最优4.59%",
      "5年浮动最优3.65%",
    ],
    image: "/summaries/nov1-rate-snapshot-2026.jpg",
    title: "11月首日利率快照：Prime 4.70%坐实，5年固定最优4.59%、浮动3.65%",
    summary:
      "加息后首个周末的利率比价（Best Rates 11 月 1 日更新）：六大行 prime 已坐实 4.70%，最优保险 5 年固定利率 4.59%、5 年浮动 3.65%。与 NerdWallet 同日更新的方向一致：浮动仍比固定便宜约 1 个百分点，但价差正在收窄。",
    wendyNote:
      "加息落地后的第一张完整价目表：浮动仍便宜，但别只看 3.65% 的起步价——12 月若再加一次，浮动立刻跟涨。选浮动是赌明年不加，选固定是买确定性；续约在 3 个月内的，现在就拿着这两档去找 broker 谈，别等 12 月 9 日。",
    url: "https://bestrates.ca/current-rates",
  },
  {
    id: "boc-hike-housing-blow-oct2026",
    date: "2026-10-31",
    time: "07:00",
    source: "Canadian Mortgage Trends × Bloomberg（10 月 29 日）",
    firstHand: false,
    tags: ["加息冲击", "楼市展望"],
    heat: 72,
    points: [
      "住宅对增长贡献近零至2028",
      "续约付款冲击或达50%",
      "央行称楼市前景低迷",
    ],
    image: "/summaries/boc-hike-housing-blow-oct2026.jpg",
    title: "加息重击已跌楼市：央行预计住宅对增长贡献近零至2028年",
    summary:
      "加拿大央行 10 月 28 日加息后，彭博 10 月 29 日分析指出央行最新预测显示住宅地产对经济增长几乎无贡献直至 2028 年，副行长 Carolyn Rogers 直言楼市前景低迷。Desjardins 研究警告，未提前还款或锁定利率、近期须续约的浮动利率持有者今年秋冬可能面临约 50% 的付款冲击；若按央行预测走，楼市低迷将满六年，堪比 1990 年代。能源价格推高建材与设备成本，央行预计住房服务通胀从今年底略高于 1% 升至 2027–2028 年的约 2%，但租金通胀明年有望缓解。",
    wendyNote:
      "这条是给续约人群的警钟：50% 付款冲击不是所有人，但没锁定、没提前还款、又赶上秋冬续约的人要立刻找 broker 算数，别等银行通知。买家则反向读：央行自己都说楼市低迷到 2028 年，议价窗口不会一夜关上，慢慢挑、按月供算准再出价。",
    url: "https://www.canadianmortgagetrends.com/2026/10/rate-hike-kicks-canadas-housing-market-when-its-down/",
  },
  {
    id: "yardi-rent-growth-q3-2026",
    date: "2026-10-31",
    time: "07:00",
    source: "Yardi 2026 秋季全国多户报告 × Connect CRE（10 月 30 日）",
    firstHand: false,
    tags: ["租金增速", "出租房"],
    heat: 68,
    points: [
      "全国租金增速仅1.7%",
      "新签租约租金跌0.2%",
      "多伦多新租约跌2.1%",
    ],
    image: "/summaries/yardi-rent-growth-q3-2026.jpg",
    title: "Yardi：全国出租房租金增速1.7%创2020年以来最低，多伦多新租约跌2.1%",
    summary:
      "Yardi 2026 秋季全国多户报告（10 月 30 日发布，覆盖 54.8 万套、6,200 个项目）显示，全国 purpose-built 出租房年租金增速放缓至 1.7%，为 2020 年有统计以来最低，全国平均月租 1,790 加元、环比仅涨 7 加元，空置率持平于 4.7%。新签租约租金连续第三个季度下跌（-0.2%），续租涨幅 2.1% 但已连续 10 个季度放缓；多伦多整体租金仍涨 1.7%，但新签租约租金较上一租约跌 2.1%，Yardi 归因于人口增长放缓。",
    wendyNote:
      "租客与房东要分开读：新签租金在跌，意味着新租客谈判空间大、看到合适房源可以谈条件；但续租涨幅仍有 2.1%，老租客别指望自动降租，续约前先拿周边新签价去谈。投资出租房的，租金增长引擎已经熄火，回报账必须按 1.7% 甚至更低算，别按疫情后高增长假设。",
    url: "https://www.connectcre.ca/stories/canadian-apartment-rent-growth-hits-lowest-level-since-2020/",
  },
  {
    id: "remax-gta-commercial-h1-2026",
    date: "2026-10-31",
    time: "07:00",
    source: "RE/MAX 2026 秋季商业地产报告（10 月 30 日）",
    firstHand: true,
    tags: ["商业地产", "多户投资"],
    heat: 60,
    points: [
      "上半年投资102亿涨41%",
      "多户投资暴涨逾240%",
      "工业空置率仅4.3%",
    ],
    image: "/summaries/remax-gta-commercial-h1-2026.jpg",
    title: "RE/MAX：GTA上半年商业地产投资102亿涨41%，多户投资暴涨逾240%",
    summary:
      "RE/MAX 2026 秋季商业地产报告（10 月 30 日发布）显示，GTA 上半年商业地产投资近 102 亿加元、同比涨 41%，其中多户住宅投资同比暴涨逾 240%，机构资金追逐有租金上涨空间的老混凝土出租楼，平均每户成交价逾 35.41 万加元。工业空置率 Q2 仅 4.3%、净租金 16–17 加元/呎；写字楼整体空置率降至 15.5%，金融区 AAA 级毛租金 90–105 加元/呎，C 级仅 39–45 加元/呎，分化明显。",
    wendyNote:
      "机构的钱在用脚投票：只买有现金流的出租楼和优质资产，开发用地与次级写字楼继续被冷落——这正是住宅市场的镜像。对普通买家/房东的启示是：老出租楼被机构扫货，说明长期持有优质租赁资产仍被看好；但别跟风去碰次级资产，流动性差的时候想卖都难。",
    url: "https://blog.remax.ca/toronto-commercial-real-estate-report/",
  },
  {
    id: "tuk-bayview-rental-oct2026",
    date: "2026-10-31",
    time: "07:00",
    source: "TUK Group（GlobeNewswire 官方通稿，10 月 29 日）",
    firstHand: true,
    tags: ["出租新盘", "Bridle Path"],
    heat: 55,
    points: [
      "Bayview约30套出租楼",
      "四项目总值约4000万",
      "该区仅12%家庭租房",
    ],
    image: "/summaries/tuk-bayview-rental-oct2026.jpg",
    title: "TUK 落子 Bridle Path：Bayview 约30套出租楼，四项目总值约4000万",
    summary:
      "TUK Group 10 月 29 日宣布已签下 Bayview Avenue 一处地块（近 Bridle Path），计划建约 30 套面向家庭与专业人士的 purpose-built 出租楼，户型为一房与三房，采用 ICF 建造并拟走 CMHC MLI Select 融资、部分单位平价出租。该项目加入 Lambton、Coxwell、McRoberts 后，TUK 多伦多四项目管线合计逾 60 套、完工总值约 4,000 万加元；该区 2021 年人口普查仅 12% 家庭租房、远低于全市近半数，出租选择极少。",
    wendyNote:
      "豪宅区出现 purpose-built 出租楼是稀缺信号：想住进 Bridle Path–Sunnybrook 学区又不想买的家庭，未来多了专业管理的新选择，但项目仍在规划审批阶段、没有入住时间表，别按“马上能租”做计划。房东则注意：高端出租供给在向这类地段渗透，续租定价要靠品质和服务留人，不是靠稀缺本身。",
    url: "https://www.globenewswire.com/news-release/2026/10/29/3391222/0/en/tuk-group-to-acquire-bayview-avenue-site-off-the-bridle-path-for-30-unit-rental-development-expanding-toronto-footprint.html",
  },
  {
    id: "valery-resale-losses-oct2026",
    date: "2026-10-30",
    time: "07:00",
    source: "Valery 研究 × Real Estate Magazine（10 月 29 日）",
    firstHand: false,
    tags: ["转售亏损", "Condo承压"],
    heat: 78,
    points: [
      "24.8% 转售低于上次买价",
      "多伦多 28%，Condo 38%",
      "2021–22 年买家 80% 亏本",
    ],
    image: "/summaries/valery-resale-losses-oct2026.jpg",
    title: "GTA 转售四分之一亏本，2021–22 年买家八成赔钱出局",
    summary:
      "Valery 对 TRREB MLS 数据的分析显示，过去一年 GTA 27,271 套转售中 24.8% 低于上次买价，中位亏损 11%，计入土地转让税与交易成本后亏本比例升至 32%。多伦多 10,133 套转售中 28% 亏本、计入成本后 38%，Condo 亏本率达 38%、独立屋 20%。2021–2022 年高位买入后转售的房源 80% 亏本、计入成本后 92%，其中 Condo 高达 87%；Valery 首席地产官 Daniel Foch 预计亏本转售还将持续约两年。",
    wendyNote:
      "如果你是 2021–22 年高位买入、现在想卖的业主，先算清账再挂牌：计入交易成本后九成以上同类卖家是亏本离场的，定价必须贴着今天的成交走，别按买入价加成本倒推。现在买房的人则要反向利用这个数据——亏本盘不等于捡漏，查清楚卖家是不是急售、房子有没有硬伤再出价，议价空间有，但底线是房子本身值。",
    url: "https://realestatemagazine.ca/gta-sellers-face-widespread-resale-losses-cmhc-warns-ontarios-mortgage-troubles-arent-over/",
  },
  {
    id: "prime-470-oct29-2026",
    date: "2026-10-30",
    time: "07:00",
    source: "Canadian Mortgage Professional（10 月 29 日）",
    firstHand: false,
    tags: ["Prime上调", "浮动利率"],
    heat: 74,
    points: [
      "六大行 prime 升至 4.70%",
      "TD 房贷 prime 达 4.85%",
      "最低浮动 3.70%，月供+82",
    ],
    image: "/summaries/prime-470-oct29-2026.jpg",
    title: "六大行 prime 今日生效 4.70%：浮动利率账单正式变贵",
    summary:
      "继央行 10 月 28 日加息后，加拿大六大行 10 月 29 日起将 prime 从 4.45% 上调至 4.70%，TD 的房贷 prime 更升至 4.85%。Ratehub 测算：66.65 万加元房产、10% 首付、25 年摊销，最低浮动利率从 3.45% 升至 3.70%，月供从 3,072 加元升至 3,154 加元、每月多付 82 加元。固定付款的浮动利率持有者月供不变但利息占比上升，可调付款者立即多付；Royal LePage 总裁 Phil Soper 称，买家为抢在加息前入市的提前行动并未出现，成交量走势依然持平。",
    wendyNote:
      "加息昨天是新闻，今天是账单：浮动利率和 HELOC 持有者从今天起就按 4.70% 的 prime 计息，可调付款的下个月账单就会变，固定付款的要盯着触发利率，别等银行来信才发现本金没怎么还。正在看房的，pre-approval 必须按 3.70% 的浮动起步重算；固定利率暂时不动，但 5 年期国债收益率还在 3.5% 以上，锁固定也要趁早谈。",
    url: "https://www.mpamag.com/ca/mortgage-industry/market-updates/prime-rate-hits-470-today-as-big-banks-act-on-boc-hike/595513",
  },
  {
    id: "ontario-fes-housing-starts-oct2026",
    date: "2026-10-30",
    time: "07:00",
    source: "安省 2026 秋季经济报告（10 月 29 日，加通社交叉核实）",
    firstHand: false,
    tags: ["安省开工", "住房供应"],
    heat: 70,
    points: [
      "2027 开工 65,100，下调 5,200",
      "2026 年 64,700，低于去年",
      "三年累计少 15,400 套",
    ],
    image: "/summaries/ontario-fes-housing-starts-oct2026.jpg",
    title: "安省秋季报告下调建房预期：2027 年开工仅 65,100 套",
    summary:
      "安省 10 月 29 日秋季经济报告将 2027 年新屋开工预测从 3 月预算的 70,300 套下调至 65,100 套（-5,200 套，-7.4%），2026 年为 64,700 套、低于 2025 年的 65,400 套，2028–2029 年分别回升至 71,700 与 75,400 套，三年累计比 3 月预期少 15,400 套。报告同时将 2026–27 财年赤字预期从 138 亿上调至 169 亿加元，平衡推迟至 2029–30 财年；并预测安省成屋均价 2026 年跌 2.4%、2027 年涨 1.4%，销量 2027 年增长 7.8%。",
    wendyNote:
      "官方自己都把开工预期砍下来了，等于承认未来几年新房供应还是紧——这对现在手里有房的人是中长期利好，对等新盘的买家却是提醒：2027 年开工只比今年多 400 套，想等新盘放量压价的人要失望了。好消息是报告同时预测 2027 年销量回升 7.8%、价格只涨 1.4%，量升价稳，换房、自住买家明年仍有窗口。",
    url: "https://www.hashtaginvesting.com/blog/fords-ontario-government-cuts-2027-housing-forecast-by-5200-homes-as-deficit-climbs-to-16-9-billion",
  },
  {
    id: "fraser-new-home-cost-gap-oct2026",
    date: "2026-10-30",
    time: "07:00",
    source: "Fraser Institute 研究（10 月 27 日发布）",
    firstHand: false,
    tags: ["新屋成本", "开发费"],
    heat: 62,
    points: [
      "多伦多新屋售价 2 倍成本",
      "开发费每套高达 18.03 万",
      "审批 25 个月，全国最慢档",
    ],
    image: "/summaries/fraser-new-home-cost-gap-oct2026.jpg",
    title: "Fraser 研究：多伦多新建独立屋售价近 2 倍于建造成本",
    summary:
      "Fraser Institute 10 月 27 日发布的研究对比了 2018–2025 年 33 个城市新建独立屋售价与建筑许可价值：多伦多新屋平均售价约 158 万加元、约为建造成本（约 82.6 万加元）的 2.0 倍，温哥华高达 4.7 倍。研究指出差价不全是开发商利润：多伦多低层住宅开发费每套约 18.03 万加元（温尼伯仅 9,900 加元），审批耗时 25 个月、远高于埃德蒙顿的 3.4 个月，土地、分区限制与审批成本共同推高了新屋价格。",
    wendyNote:
      "新屋贵，贵的不只是砖头水泥：18 万开发费加 25 个月审批，这些成本最后都摊进了房价里——所以买楼花、买新盘时，合同里的开发费调整条款一定要设上限，别让交房时的追加账单吃掉你的预算。反过来看，正因为新屋成本降不下来，位置好的二手房长期仍有支撑，买来自住不必等新盘降价。",
    url: "https://www.todocanada.ca/vancouver-home-prices-nearly-5-times-construction-costs-twice-in-toronto-why-do-new-homes-cost-so-much-more/",
  },
  {
    id: "boc-hike-to-250-oct28-2026",
    date: "2026-10-29",
    time: "07:00",
    source: "加拿大央行（10 月 28 日议息 + 货币政策报告，官方发布）",
    firstHand: true,
    tags: ["央行加息", "利率"],
    heat: 92,
    points: [
      "政策利率2.25%→2.50%",
      "7连hold后首加，三年多来首次",
      "通胀2027年均3%，2028年中回2%",
    ],
    image: "/summaries/boc-hike-to-250-oct28-2026.jpg",
    title: "央行靴子落地：加息25基点至2.50%，三年多来首次加息",
    summary:
      "加拿大央行 10 月 28 日上午 9:45 宣布加息 25 个基点，政策利率从 2.25% 升至 2.50%，Bank Rate 2.75%、存款利率 2.45%，为 7 次按兵不动后的首次行动、2023 年 7 月以来首次加息。同日发布的货币政策报告大幅上调通胀预期：CPI 年底约 3.5%、2027 年均 3%（较 7 月预测高 1 个百分点）、2028 年中回落至 2%；经济增长预测为 2026 年 1%、2027–2028 年各 2%，并称住房将保持相对疲软。央行称“可能需要进一步加息，但会谨慎行事”，下次议息为 12 月 9 日；prime 料随之上调至 4.70%，50 万贷款 25 年期每月约多付 66 加元。",
    wendyNote:
      "昨天的“押注”今天变成现实：浮动利率持有者这次是真的要多付钱了，50 万贷款每月约多 66 加元，固定月供的则是利息占比上升。固定利率持有者不受影响，但续约在即的要按“还可能再加”重算现金流。正在看房的，pre-approval 必须按加息后的 prime 重算额度，别拿旧额度去出价——央行同时说住房将保持相对疲软，买方议价窗口还在，加息是叫你把月供算准再出手，不是叫你停手。",
    url: "https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28/",
  },
  {
    id: "pwc-uli-emerging-trends-2027",
    date: "2026-10-29",
    time: "07:00",
    source: "PwC Canada × ULI《Emerging Trends 2027》官方通稿",
    firstHand: true,
    tags: ["投资信心", "Condo分化"],
    heat: 68,
    points: [
      "投资意愿15年来最强",
      "Q2商业投资162亿，4年多最高",
      "多伦多楼花Q2仅售50套，同比-80%",
    ],
    image: "/summaries/pwc-uli-emerging-trends-2027.jpg",
    title: "PwC×ULI 2027趋势：投资信心15年最强，但多伦多Condo仍在谷底",
    summary:
      "PwC Canada 与城市土地学会（ULI）10 月 28 日发布《Emerging Trends in Real Estate 2027》：加拿大投资者购房意愿达 15 年来最强，2026 年第二季度商业地产投资 162 亿加元，为 2022 年初以来最高，卡尔加里、多伦多、埃德蒙顿为 2027 年最值得关注市场。但多伦多分化极端：第二季度楼花仅售 50 套、同比 -80%，竣工未售开发商库存达创纪录的 5,001 套；与此同时市中心 AAA 级写字楼空置率仅 2.6%、工业空置率 2.2% 为全国最低。报告还指出多伦多住宅开工从 2024 年 37,718 套跌至 2025 年 26,087 套，2026 年预计进一步下滑。",
    wendyNote:
      "机构的钱在回流，但只流向有稳定现金流的资产——这正是住宅买家要反着读的信号：楼花继续别碰，5,001 套竣工未售压着，开发商还得降价清货；反过来，工业与优质写字楼的低空置说明 GTA 经济底盘没垮，长期持有优质地段不必恐慌。2027 年“最值得关注市场”有 Toronto，但“值得关注”不等于“现在就涨”，自住买家继续按买方市场慢慢挑。",
    url: "https://www.newswire.ca/news-releases/real-estate-investor-sentiment-reaches-15-year-high-but-recovery-remains-uneven-pwc-canada-and-uli-822355978.html",
  },
  {
    id: "pacific-rental-junction-oct2026",
    date: "2026-10-29",
    time: "07:00",
    source: "Clifton Blake（CNW 官方通稿）",
    firstHand: true,
    tags: ["租赁供应", "Junction新盘"],
    heat: 55,
    points: [
      "Junction 8层120套出租楼开租",
      "多房型空置率已低于2%",
      "新房开工萎缩，租赁房成主力",
    ],
    image: "/summaries/pacific-rental-junction-oct2026.jpg",
    title: "Junction新出租楼The Pacific开租：120套，多房型空置率已低于2%",
    summary:
      "Clifton Blake 10 月 29 日宣布，位于多伦多 Junction 区 Dundas Street West 的 8 层、120 套精品出租住宅 The Pacific 已开始招租。公司称 GTA 正面临新房开工萎缩与库存收紧的结构性失衡，多伦多市多房型出租单位空置率已低于 2%，并预计 2027 年进一步收紧；该项目是其 8 年前开始布局的租赁住宅战略的一部分。",
    wendyNote:
      "租客注意：多房型空置率低于 2% 意味着大户型好房源会越来越抢手，看到合适的可以早定、谈长租锁定租金。房东则要反向算账——新建的全是出租楼，未来 2–3 年市中心租赁竞争在增加，续租定价别贪，留住好租客比空置一个月划算。",
    url: "https://www.cantechletter.com/newswires/clifton-blake-launches-the-pacific-rental-residence-in-torontos-junction-neighborhood-capitalizing-on-macro-shifts-in-gta-housing-market/",
  },
  {
    id: "boc-decision-day-oct28-2026",
    date: "2026-10-28",
    time: "07:00",
    source: "Insight Finance（10 月 27 日更新）× HomiesAI 交叉验证",
    firstHand: false,
    tags: ["央行议息", "利率"],
    heat: 82,
    points: [
      "今日9:45揭晓，加息与否见分晓",
      "市场押注加息概率约74%",
      "5年固定最低4.34%，浮动3.43%",
    ],
    image: "/summaries/boc-decision-day-oct28-2026.jpg",
    title: "议息日今日9:45揭晓：市场押注加息概率约74%，路透19/34经济学家料加至2.50%",
    summary:
      "加拿大央行今日（10 月 28 日）上午 9:45 公布利率决定并同日发布货币政策报告，政策利率现为 2.25%。10 月 27 日上午市场定价加息概率 73.6%，Insight Finance 梳理 10 月 25–26 日为 75%–81%；路透调查 34 位经济学家中 19 人预计加息 25 个基点至 2.50%。Ratehub 10 月 27 日最低利率：5 年固定 4.34%、5 年浮动 3.43%，5 年期国债收益率 10 月 26 日报 3.58%，一年前仅 2.62%。",
    wendyNote:
      "今天 9:45 之后就不用再猜了——但记住，加息影响的是浮动利率和 prime，固定利率早就跟着债券涨完了。浮动利率持有者今天就该问 broker 锁定方案，别等账单变了才动手；正在看房的，pre-approval 按加息后重算一遍，议息结果出来后我会再解读一次。",
    url: "https://insightfinance.ca/bank-of-canada-rate-hike-odds-renewal/",
  },
  {
    id: "cmhc-arrears-oct2026",
    date: "2026-10-28",
    time: "07:00",
    source: "CMHC 住宅按揭行业报告（2026 秋季版）",
    firstHand: true,
    tags: ["按揭拖欠", "安省风险"],
    heat: 78,
    points: [
      "安省拖欠率0.32%，一年前0.21%",
      "拖欠将升至2027年中",
      "GTHA私人贷拖欠率11.1%",
    ],
    image: "/summaries/cmhc-arrears-oct2026.jpg",
    title: "CMHC：安省按揭拖欠率0.32%将升至2027年中，GTHA私人贷款拖欠率达11.1%",
    summary:
      "CMHC 10 月 27 日发布的 2026 年秋季住宅按揭行业报告：安省按揭拖欠率（逾期 90 天以上）2026 年第二季度达 0.32%，高于一年前的 0.21%，预计持续上升至 2027 年中，为全国最大、最持久的升幅，集中在大多伦多及汉密尔顿地区与安省西南部。压力最集中在私人按揭贷款机构：GTHA 地区私人贷款拖欠余额占比从 2023 年第三季度的 3.0% 升至 2026 年第一季度的 11.1%，其中只还息贷款占 GTHA 私人贷款余额 69.7%。CMHC 强调加拿大并未面临广泛的按揭危机，压力集中于特定地区与贷款类型。",
    wendyNote:
      "别被“拖欠上升”吓到，也别完全不当回事：0.32% 仍远低于历史峰值，真正的信号在结构里——GTHA 私人贷款只还息占比近七成、拖欠率 11.1%，说明高杠杆买家最先承压。对买家这是谈价的背景音不是抄底的号角；对续约在即的屋主，现在就该找 broker 重算现金流，别等到 2027 年中压力峰值。",
    url: "https://www.newswire.ca/news-releases/ontario-mortgage-arrears-expected-to-rise-through-mid-2027-cmhc-801394159.html",
  },
  {
    id: "gta-oct-partial-oct2026",
    date: "2026-10-28",
    time: "07:00",
    source: "HomiesAI 10 月加拿大住房市场报告",
    firstHand: false,
    tags: ["GTA成交", "10月上半月"],
    heat: 72,
    points: [
      "10月前26天成交3793套-3.2%",
      "多伦多Condo库存6.02个月最松",
      "约克-7.6%、皮尔-7.4%，哈顿逆涨",
    ],
    image: "/summaries/gta-oct-partial-oct2026.jpg",
    title: "GTA 10月前26天：成交3793套同比-3.2%，多伦多Condo库存6.02个月最宽松",
    summary:
      "HomiesAI 10 月 27 日更新的加拿大住房市场报告（多伦多 MLS 经 REALM 数据，10 月 1–26 日）：GTA 成交 3793 套同比 -3.2%，新增房源 10032 套同比 -7.0%，在售库存 26743 套同比 -9.3%，库存去化 4.96 个月（去年同期 5.53 个月）。分区域：多伦多 Condo 去化 6.02 个月为最宽松、独立屋 3.75 个月最紧；均价五个区域下跌，约克 -7.6%、皮尔 -7.4% 领跌，哈顿逆势 +3.5%；含法拍/按揭关键词的挂牌 365 套，占在售 1.36%。",
    wendyNote:
      "10 月还没走完，但方向和 9 月一致：量跌、价跌、库存同比反而少了——卖家退场比买家更快。分化才是操作指南：Condo 继续慢慢谈、独立屋好房源别拖太久；约克和皮尔跌幅最深，议价从那里开始谈，哈顿是例外别当成全市信号。",
    url: "https://www.homiesai.com/research/canada-housing-market-call-october-2026",
  },
  {
    id: "nesto-rates-oct26-2026",
    date: "2026-10-27",
    time: "07:00",
    source: "nesto 利率页（10 月 26 日）",
    firstHand: false,
    tags: ["固定利率", "议息前夜"],
    heat: 74,
    points: [
      "5年固定保险利率4.59%",
      "5年浮动保险利率3.41%",
      "3年固定保险利率4.54%",
    ],
    image: "/summaries/nesto-rates-oct26-2026.jpg",
    title: "议息前夜最新报价：5年固定保险利率4.59%，浮动3.41%",
    summary:
      "nesto 10 月 26 日（周一）更新的最低保险利率：5 年固定 4.59%、5 年浮动 3.41%、3 年固定 4.54%、2 年固定 5.09%。明日（10 月 28 日）上午 9:45 央行公布利率决定并同日发布货币政策报告，是年内倒数第二次议息。",
    wendyNote:
      "固定与浮动的价差仍有 1.18 个百分点，选固定是买确定性、选浮动是赌明年降息——没有标准答案，只有现金流答案。明天议息前，先把 pre-approval 的利率锁和有效期确认一遍，别等结果出来才发现锁过期了。",
    url: "https://www.nesto.ca/mortgage-rates/?g_acctid=725-158-0052&g_adgroupid=141849939768&g_adid=595901483003&g_adtype=search&g_campaign=2022_ON_EN_New_3331-SM-0005+LeadsVsCalls&g_campaignid=17122603409&g_keyword=canada+mortgage+rates&g_keywordid=kwd-109395170&g_network=g&gclid=Cj0KCQjwpcOTBhCZARIsAEAYLuXnoOPRU-tB6CXCJJhg0Cd0QfccTYTjLEKYgxpK2V0U3LVqeqRvYSEaAnMDEALw_wcB",
  },
  {
    id: "correction-38pct-real-oct2026",
    date: "2026-10-27",
    time: "07:00",
    source: "Gord Lemon（REI Institute）× Canadian Mortgage Trends",
    firstHand: false,
    tags: ["房价修正", "买方市场"],
    heat: 70,
    points: [
      "通胀调整后较峰值跌38%",
      "名义跌28%：峰值$1,279,800",
      "CMHC：建房慢于实际需求",
    ],
    image: "/summaries/correction-38pct-real-oct2026.jpg",
    title: "通胀调整后多伦多房价较峰值跌约38%，BMO称加拿大史上最重修正",
    summary:
      "Gord Lemon 10 月 26 日文章引述 BMO 首席经济学家：本轮是加拿大史上最显著的房价修正，通胀调整后多伦多较峰值跌约 38%。Canadian Mortgage Trends 的拆解可交叉验证：TRREB 9 月综合基准价 $917,600，较 2022 年 2 月峰值 $1,279,800 名义跌约 28%，同期 CPI 上涨近 16%，折算实际跌幅约 38%。",
    wendyNote:
      "名义跌 28% 已经够吓人，通胀调整后 38% 才是买家真正的议价底气——别被'只跌了两成多'的话术带偏。反过来也别只看跌幅：CMHC 首席经济学家在上周会议上警告建房速度已慢于真实需求，3–5 年的积压需求正在形成，现在挑房是买方窗口，追涨不是。",
    url: "https://www.linkedin.com/pulse/todays-buyers-market-tomorrows-shortage-gord-lemon-xu9zc",
  },
  {
    id: "cmhc-rental-shift-oct2026",
    date: "2026-10-27",
    time: "07:00",
    source: "Storeys × CMHC 秋季住房供应报告",
    firstHand: false,
    tags: ["新房开工", "租赁供应"],
    heat: 66,
    points: [
      "多伦多上半年仅开工156套",
      "十年均值约每年7000套",
      "租赁开工反超公寓32年来首次",
    ],
    image: "/summaries/cmhc-rental-shift-oct2026.jpg",
    title: "CMHC：多伦多上半年仅开工156套公寓，租赁开工32年来首次反超",
    summary:
      "CMHC 秋季住房供应报告（Storeys 梳理）：多伦多市 2026 年上半年仅开工 156 套公寓，对照十年均值约每年 7,000 套；租赁公寓开工上半年同比 +82%，自 1994 年以来首次超过公寓开工，租赁房已占重点市场公寓开工的三分之二。CMHC 称多伦多需把年开工 pace 提高至少 50%（每年多 2.1–2.6 万套）才能回到 2019 年可负担水平。",
    wendyNote:
      "新房的引擎已经换了：建给房东的在动工，建给买家的几乎停摆。这对今天的买家是两句话——现有二手 condo 继续谈价，别为楼花付溢价；对长线持有者则是提醒，2–3 年后新 condo 供应断档，今天的买方市场不会永远在。",
    url: "https://storeys.com/cmhc-fall-housing-report-2026/",
  },
  {
    id: "rentalsca-oct2026-rent",
    date: "2026-10-27",
    time: "07:00",
    source: "Rentals.ca × Urbanation 10 月全国租金报告",
    firstHand: true,
    tags: ["租金", "租赁市场"],
    heat: 62,
    points: [
      "全国平均租金$2,034",
      "同比-4.2%，连跌24个月",
      "多伦多$2,554，同比-1.4%",
    ],
    image: "/summaries/rentalsca-oct2026-rent.jpg",
    title: "Rentals.ca 10月租金报告：多伦多$2,554同比-1.4%，创5年来9月最低",
    summary:
      "Rentals.ca × Urbanation 10 月全国租金报告（10 月 7 日发布，9 月数据）：全国所有房型平均要价租金 $2,034，同比 -4.2%，为连续第 24 个月同比下跌，较 2024 年 5 月峰值 $2,202 回落 9.2%。多伦多 $2,554，环比 -0.6%、同比 -1.4%，为连续第 32 个月同比下跌；多伦多与温哥华均为 2021 年以来最低的 9 月均值，全国 condo 租金同比跌最深（-7.8% 至 $2,052）。",
    wendyNote:
      "租金连跌两年还没见底，但跌幅在收窄、9 月已是 5 年来最低——租客谈判空间仍在，房东续租别按 2024 年的价格锚定。Condo 租金跌 7.8% 最深，说明投资 condo 的租金回报账要按今天的租金重算，别按买入时的租金假设。",
    url: "https://press.rentals.ca/473717-canadian-rents-have-fallen-for-two-straight-years",
  },
  {
    id: "chow-reelected-oct2026",
    date: "2026-10-27",
    time: "07:00",
    source: "Election Tracker × 多伦多市非官方结果",
    firstHand: false,
    tags: ["市选结果", "住房政策"],
    heat: 50,
    points: [
      "Chow 54.2%对Bradford 41.1%",
      "投票率45.8%，较上届大增",
      "110万以下免MLTT提案落空",
    ],
    image: "/summaries/chow-reelected-oct2026.jpg",
    title: "市选结果出炉：Chow 54.2%连任，110万以下免市土地转让税提案落空",
    summary:
      "10 月 26 日多伦多市选结果：现任市长 Olivia Chow 以 54.2%（约 53.2 万票）击败 Brad Bradford 的 41.1%（约 40.4 万票），赢得首个完整四年任期；投票率 45.84%，高于上届。住房政策分叉点就此定案：Bradford 的 110 万以下首套免市土地转让税、地税冻结路线落空，Chow 的租金管制房与租客保护路线继续，12 月她已承诺推动下一轮租赁住房激励动议。",
    wendyNote:
      "选前押注'免 MLTT 省 1.8 万'的买家，现在可以把这笔账从预算里划掉了——按现行税制做决定，别等一个不会来的减免。租客与房东则要反向准备：租金管制房加速、租客保护收紧是未来四年的主线，续租与合规成本按这条线算。",
    url: "https://electiontracker.eu/canada/toronto-mayoral-election-2026",
  },
  {
    id: "election-day-tracker-oct2026",
    date: "2026-10-26",
    time: "07:00",
    source: "Election Tracker 预测市场 × CP24 / Nanos",
    firstHand: false,
    tags: ["市选", "投票日"],
    heat: 85,
    points: [
      "预测市场：Chow胜率84%",
      "民调胶着：49.8%对46.6%",
      "投票10点至20点，晚8点出结果",
    ],
    image: "/summaries/election-day-tracker-oct2026.jpg",
    title: "投票日当天：预测市场给Chow开出84%胜率，民调却仍是统计平手",
    summary:
      "多伦多市选今日（10 月 26 日周一）投票，投票站 10:00–20:00 开放，非正式结果约晚 8 点起公布。Election Tracker 今晨 08:45 UTC 更新：预测市场给 Chow 开出 84% 胜率（24 小时内 +22 点）、Bradford 14%（−24 点），较昨日 63% 对 38% 大幅拉开。但 CP24 / Nanos 10 月 25 日公布的最后民调（10 月 15–18 日调查 762 人）却是 Chow 49.8% 对 Bradford 46.6%，在 ±3.6 个点误差内属统计平手；提前投票已达 22.25 万人。",
    wendyNote:
      "预测市场与民调打架到投票日当天，恰恰说明今晚 8 点后的结果才是唯一算数的数字——别提前押注任何一方的政策红利。分叉点不变：Bradford 胜选利好交易端（110 万以下免 MLTT、冻地税），Chow 连任利好租客管控路线；结果出炉后我会第一时间解读，今天先别因市场数字改价。",
    url: "https://electiontracker.eu/canada/toronto-mayoral-election-2026",
  },
  {
    id: "election-eve-prediction-oct2026",
    date: "2026-10-25",
    time: "07:00",
    source: "Election Tracker 预测市场",
    firstHand: false,
    tags: ["市选", "投票日"],
    heat: 78,
    points: [
      "预测市场：Chow胜率63%",
      "Bradford 38%，仍有悬念",
      "明日10月26日正式投票",
    ],
    image: "/summaries/election-eve-prediction-oct2026.jpg",
    title: "投票前夜：预测市场给Chow开出63%胜率，Bradford 38%",
    summary:
      "多伦多市长选举明日（10 月 26 日周一）正式投票，预测市场 Election Tracker 10 月 25 日更新：Chow 胜率 63%、Bradford 38%（市场隐含概率，非民调）。民调端仍胶着：Pollara 10 月 23 日称 Chow 55% 对 44%，Liaison 10 月 21 日则称 Bradford 49% 对 47%。提前投票已达 22.25 万人，近两倍于 2022 年的 11.59 万人。",
    wendyNote:
      "民调打架、预测市场一边倒，这种组合恰恰说明结果要看最后动员——别提前押注任何一方的政策红利。110 万以下首套买家记住分叉点：Bradford 胜选利好交易端（免 MLTT、冻地税），Chow 连任利好租客管控路线。结果出炉当天我会第一时间解读，买卖节奏跟着结果调，别今天就改价。",
    url: "https://electiontracker.eu/canada/toronto-mayoral-election-2026",
  },
  {
    id: "fixed-rates-snapshot-oct23",
    date: "2026-10-25",
    time: "07:00",
    source: "nesto 利率追踪（10 月 23 日）",
    firstHand: false,
    tags: ["固定利率", "议息前瞻"],
    heat: 72,
    points: [
      "5年固定平均5.39%",
      "六大行折扣均值5.18%",
      "最低保险利率4.59%",
    ],
    image: "/summaries/fixed-rates-snapshot-oct23.jpg",
    title: "议息前最后利率快照：5年固定平均5.39%，六大行折扣均值5.18%",
    summary:
      "nesto 10 月 23 日利率追踪：加拿大 5 年固定传统按揭平均利率 5.39%，六大行折扣均值 5.18%，经纪渠道最低保险利率 4.59%；5 年国债收益率 3.52%。这是 10 月 28 日央行议息前的最后利率快照——固定利率锚定债券而非央行，过去五周六大行已累计上调 10–50 个基点（TD 5 年固定广告价达 5.39%）。",
    wendyNote:
      "数字说明一件事：等央行结果再谈贷款已经晚了半拍，固定利率早就跟着债券涨完了。正在看房的买家，今天就把 pre-approval 的利率锁和有效期确认一遍；明年要续约的，现在找 broker 谈锁定方案，别等到 10 月 28 日议息当天才动手。",
    url: "https://www.nesto.ca/mortgage-rates/fixed/5-year/?utm_source=forbesadvisor&utm_medium=partner&utm_campaign=advisor&partner=forbesadvisor",
  },
  {
    id: "livrent-oct2026-rent",
    date: "2026-10-25",
    time: "07:00",
    source: "liv.rent 10 月安省租金报告",
    firstHand: true,
    tags: ["租金", "租赁市场"],
    heat: 55,
    points: [
      "多伦多一房无家具$1,969",
      "同比-3.7%，20区14区下跌",
      "带家具一房$1,937反涨2%",
    ],
    image: "/summaries/livrent-oct2026-rent.jpg",
    title: "liv.rent 10月租金报告：多伦多一房$1,969同比-3.7%，北约克跌最深",
    summary:
      "liv.rent 10 月安省租金报告（10 月 2 日发布，基于当月在租挂牌）：多伦多市无家具一房平均 $1,969，环比 -0.22%、同比 -3.7%（去年同期 $2,044），20 个安省地区中 14 个同比下跌，北约克跌幅最大 -9.5% 至 $1,969，万锦逆势 +5.7% 至 $2,081。带家具一房反涨 2.05% 至 $1,937，与无家具价差收窄至仅 $32。安省 2027 年租金涨幅指引为 1.9%。",
    wendyNote:
      "租金仍在阴跌，但分化很清楚：北约克、Etobicoke 在跌，万锦在涨，市中心带家具房源反而走强——说明短租/灵活租住需求还在。Condo 房东续租定价要按小区走，别全市一个价；租客现在谈判空间大，看到合适房源可以谈一个月免租或包车位。2027 年涨幅指引 1.9%，受管制单位的续租预算按这个数算。",
    url: "https://liv.rent/blog/rent-reports/october-2026-ontario-rent-report/",
  },
  {
    id: "reuters-poll-oct28-hike",
    date: "2026-10-24",
    time: "07:00",
    source: "路透社民调（Kitco 转载）",
    firstHand: false,
    tags: ["央行加息", "利率"],
    heat: 90,
    points: [
      "34位经济学家中19人押注加息",
      "10月28日或加至2.50%",
      "明年3月底前再加一次",
    ],
    image: "/summaries/reuters-poll-oct28-hike.jpg",
    title: "路透民调逆转：56%经济学家押注10月28日加息至2.50%，一年来首次行动",
    summary:
      "路透社 10 月 21–23 日调查 34 位经济学家：19 人（56%）预计央行 10 月 28 日加息 25 个基点至 2.50%，为一年来首次行动，并预计明年 3 月底前再加一次。导火索是 9 月 CPI 3.1% 与央行商业前景调查显示的通胀预期急升，以及行长 Macklem 上周六的鹰派表态。利率期货对 10 月加息的定价已从 30% 升至约四分之三；一周前多数经济学家还押注按兵不动。",
    wendyNote:
      "经济学家阵营一周内集体转向，这是本周最值得重视的信号——10 月 28 日加息已从'市场一厢情愿'变成主流预期。浮动利率持有者别再等议息结果，提前找 broker 谈锁定；正在看房的买家，pre-approval 利率锁和预算按 +25 基点重算一遍，议息当天再动手就晚了。",
    url: "https://www.kitco.com/news/off-the-wire/2026-10-23/bank-canada-raise-rates-250-october-28-and-once-again-end-march",
  },
  {
    id: "mayoral-polls-oct23-final",
    date: "2026-10-24",
    time: "07:00",
    source: "Canada Pulse Insights × CityNews / Pollara",
    firstHand: false,
    tags: ["市选", "民调"],
    heat: 72,
    points: [
      "Chow 51%对Bradford 46%",
      "Pollara：Chow 55%对44%",
      "未决定选民降至8%",
    ],
    image: "/summaries/mayoral-polls-oct23-final.jpg",
    title: "选前最后民调：Chow 51%对46%重夺领先，未决定选民仅剩8%",
    summary:
      "10 月 23 日公布的两份新民调均显示 Chow 重夺领先：Canada Pulse（CityNews 委托，10 月 16–21 日在线调查 737 人）Chow 51%、Bradford 46%；Pollara（10 月 13–19 日混合调查 1,094 人，含已提前投票者）Chow 55%、Bradford 44%。与 Liaison 10 月 21 日'Bradford 49% 对 47%'的逆转民调形成对立，但共同点是未决定选民已从 9 月的 20% 降至 8%。正式投票 10 月 26 日周一举行，胜负看最后动员。",
    wendyNote:
      "民调打架恰恰说明选情已进入'动员决胜'阶段——8% 未决定选民加提前投票率才是关键。住房政策分叉点不变：Bradford 胜选利好交易端（免 MLTT、冻地税），Chow 连任利好租客管控路线。周一结果出炉当天我会第一时间解读对买卖节奏的影响，买卖双方先别因民调摇摆改价。",
    url: "https://worldbytenews.com/3-days-to-go-chow-leads-bradford-by-5-points-in-toronto-mayoral-race-latest-poll-finds/",
  },
  {
    id: "ontario-dcrp-oct2026",
    date: "2026-10-24",
    time: "07:00",
    source: "加拿大政府（Canada.ca 官方发布）",
    firstHand: true,
    tags: ["省政策", "开发费"],
    heat: 45,
    points: [
      "温莎开发费直降70%三年",
      "联邦省府投7760万建房",
      "Sudbury减免延至2029年3月",
    ],
    image: "/summaries/ontario-dcrp-oct2026.jpg",
    title: "联邦+安省联手降开发费：温莎直降70%、Sudbury减免延至2029年",
    summary:
      "联邦与安省 10 月 23 日宣布，通过开发费减免计划（DCRP）向温莎与 Tecumseh 投入 7,760 万加元，温莎开发费未来三年直降 70%，Tecumseh Hamlet 次级规划区可新增 700 多套住房；同日 Sudbury 的开发费减免扩大至全部房型并延至 2029 年 3 月。省府称此举旨在降低建房成本、加快供应，RESCON、OHBA 与 OREA 均公开支持。",
    wendyNote:
      "这波开发费减免目前集中在温莎、Essex、Sudbury，还没轮到 GTA，但风向很清楚——省府正在全省压建房成本。GTA 开发商若跟进类似减免，新房定价才有实质下调空间；现阶段对 GTA 买家更多是'供应远期利好'，别把它当成当下议价的筹码。",
    url: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/10/canada-and-ontario-making-homes-more-affordable-in-windsor-and-tecumseh.html",
  },
  {
    id: "bild-sep2026-new-home-sales",
    date: "2026-10-23",
    time: "07:00",
    source: "BILD × Altus Group（GlobeNewswire 官方通稿）",
    firstHand: true,
    tags: ["新房销售", "BILD"],
    heat: 80,
    points: [
      "高层9月仅售129套，创9月历史最低",
      "比十年均值低90%，低层却超均值17%",
      "高层库存49个月，低层11个月",
    ],
    image: "/summaries/bild-sep2026-new-home-sales.jpg",
    title: "BILD：9月高层新房仅售129套创历史最低，低层连续6个月跑赢均值",
    summary:
      "建筑业协会 BILD 10 月 22 日公布（Altus Group 数据）：GTA 9 月新建住宅共售出 949 套，同比大幅上升但仍比十年均值低 52%。高层（含低/中/高层公寓及叠式镇屋）仅售 129 套，同比 -40%、比均值低 90%，创 9 月历史最低；低层（独立/半独立/镇屋）售出 820 套，比十年均值高 17%，连续第 6 个月跑赢均值，主要受惠于 HST 退税计划。新低层基准价 $1,246,764（同比 -13.3%），高层 $1,031,574 持平；高层库存高达 49 个月，低层 11 个月。",
    wendyNote:
      "新房市场彻底分裂：想买独立屋/镇屋的，HST 退税加价格同比 -13.3% 是实打实的窗口，但注意退税有开工与完工时间门槛，不是所有楼盘都适用。Condo 楼花继续别碰——49 个月的库存压着，开发商短期没有任何涨价底气，谈价空间只会更大。现在是买方的天下，慢慢挑。",
    url: "https://www.globenewswire.com/news-release/2026/10/22/3386135/0/en/new-high-rise-sales-in-the-gta-hit-record-low-for-september-while-low-rise-new-home-sales-outperform.html",
  },
  {
    id: "nhpi-sep2026-toronto",
    date: "2026-10-23",
    time: "07:00",
    source: "StatsCan（Canadian Mortgage Trends 报道）",
    firstHand: false,
    tags: ["新房价格", "StatsCan"],
    heat: 58,
    points: [
      "多伦多/奥沙瓦并列27城年跌幅最大",
      "新建独立/半独立/镇屋同比-4.9%",
      "环比-0.9%，全国整体环比-0.2%",
    ],
    image: "/summaries/nhpi-sep2026-toronto.jpg",
    title: "StatsCan新房价格指数：多伦多9月同比-4.9%，全国27城跌幅最深",
    summary:
      "加拿大统计局 10 月 22 日发布 9 月新房价格指数：多伦多与奥沙瓦并列全国 27 个都会区年跌幅最大，新建独立/半独立/镇屋价格同比 -4.9%（汉密尔顿 -4.0% 紧随其后）；多伦多环比 -0.9%，全国整体环比 -0.2%。该指数不含公寓。相对地，魁北克三河市年涨 3.0% 居全国之首。",
    wendyNote:
      "转售和新房价格在确认同一个方向：GTA 买方市场还在深化。对买新房的客户，这是跟开发商谈折扣的硬数据——全国跌幅最大的就是多伦多，别被'市场要反弹了'的话术带走。对卖家：新房在降价会直接拉低周边转售可比价，定价必须往前看。",
    url: "https://www.canadianmortgagetrends.com/mortgage-wire/2026/10/22/new-home-prices-fall-as-toronto-area-markets-post-steepest-declines/",
  },
  {
    id: "rate-hike-showdown-oct2026",
    date: "2026-10-23",
    time: "07:00",
    source: "C.D. Howe 研究所（官方发布）× Oxford Economics",
    firstHand: true,
    tags: ["央行加息", "利率"],
    heat: 88,
    points: [
      "市场押注10月28日加息概率85-95%",
      "影子委员会6:1投票10月按兵不动",
      "Oxford：10月+12月连加两次至2.75%",
    ],
    image: "/summaries/rate-hike-showdown-oct2026.jpg",
    title: "决战10月28日：市场85%押注加息，六大行经济学家却6:1投票按兵不动",
    summary:
      "C.D. Howe 研究所'影子央行'货币政策委员会 10 月 22 日投票：7 名出席成员中 6 人主张 10 月 28 日维持 2.25% 不变（仅 1 人主张加至 2.5%）；12 月会议 5 人主张按兵不动。成员认为核心通胀仍在 2% 附近、缺乏全面传导证据。但 Oxford Economics 同日把预测大幅提前：预计 10 月 28 日和 12 月各加 25 基点至 2.75%（比 9 月预测提前约一年），并警告房价和销量将从今秋跌至 2027 年初。市场与经济学家出现罕见分歧。",
    wendyNote:
      "市场和经济学家罕见对立，说明 10 月 28 日结果是真·悬念。但对买家真正要紧的不是那 25 个基点——固定利率看的是债券，已经提前涨了。无论周三结果如何，现在就该把 pre-approval 的利率锁好；浮动利率持有者别赌，找 broker 谈锁定方案。",
    url: "https://cdhowe.org/publication/mpcoct2026/",
  },
  {
    id: "mayoral-final-polls-oct2026",
    date: "2026-10-23",
    time: "07:00",
    source: "Liaison Strategies（官方发布）× Pollara / Mainstreet / Nanos",
    firstHand: true,
    tags: ["市选", "民调"],
    heat: 72,
    points: [
      "选情逆转：Bradford 49%反超",
      "房主挺Bradford，租客挺Chow",
      "提前投票22.2万人，近两倍于2022年",
    ],
    image: "/summaries/mayoral-final-polls-oct2026.jpg",
    title: "市长选战最后民调：Bradford 49%对Chow 47%，四家民调两两对立",
    summary:
      "10 月 21 日 Liaison Strategies 最新民调（10 月 18–19 日调查 1,000 人）：决定选民中 Bradford 49%、Chow 47%，逆转了 Chow 此前 5 个点的领先；房主 54% 挺 Bradford、租客 54% 挺 Chow，14% 仍未决定。但四家民调两两对立：Pollara（10 月 20 日）称 Chow 领先 7 个点，Mainstreet 称 Bradford 领先 1.4 个点，Nanos 称 Chow 领先 3.2 个点（统计上打平）。多伦多市府数据显示提前投票 22.25 万人，近两倍于 2022 年的 11.59 万人；10 月 26 日（周一）正式投票。",
    wendyNote:
      "选情胶着到这种程度，说明住房议题真正撬动了选票——房主和租客的投票分野就是明证。110 万以下首套房买家注意：若 Bradford 胜选，免市土地转让税+首年冻地税+取消开发费的路线直接利好交易端；若 Chow 连任，则是租金管制+空置税路线。结果出来的那周市场情绪会先动，买卖决策节奏可以跟着调。",
    url: "https://press.liaisonstrategies.ca/toronto-bradford-49-chow-47-race-too-close-to-call-october-21/",
  },
  {
    id: "urbanation-q3-2026-condo",
    date: "2026-10-22",
    time: "07:00",
    source: "Urbanation（mpamag / REMI Network 综合报道）",
    firstHand: false,
    tags: ["新Condo销量", "批量交易"],
    heat: 65,
    points: [
      "GTHA新盘Q3售760套，同比翻倍",
      "批量交易339套，均价$763/呎",
      "竣工未售5127套，环比-7%",
    ],
    image: "/summaries/urbanation-q3-2026-condo.jpg",
    title: "新Condo销量Q3翻倍至760套：投资客40%折扣扫货竣工盘",
    summary:
      "Urbanation Q3-2026新盘调查：GTHA新建condo销量760套，同比翻倍、连续两个季度增长（近两个季度合计1531套，接近2025全年1578套），但仍比Q3十年均值低78%。投资机构批量买入339套（占45%），成交均价$763/呎、比同楼原售价低约40%；竣工盘录得创纪录的648套成交（占85%）。竣工未售库存环比-7%至5127套，四年来首次季度下降，但仍比去年高40%；楼花销量同比-61%至60套，连续12个季度同比下降。",
    wendyNote:
      "投资机构在底部扫货通常是转折的领先信号——但这次扫的全是竣工盘打折货，楼花继续躺平。自住买家现在谈判空间大，但要记住：你谈到的价格空间里，有40%已经是被机构挑剩的。楼花继续避开；现有condo房东注意Hildebrand的警告——供应管道正在干涸，十年末可能缺货，续租定价可以稳住，别急着降价。",
    url: "https://www.mpamag.com/ca/mortgage-industry/market-updates/condo-sales-double-in-the-gtha-as-investors-buy-at-40-discounts/594387",
  },
  {
    id: "desjardins-ontario-2027-forecast",
    date: "2026-10-22",
    time: "07:00",
    source: "Desjardins（mpamag / BNN Bloomberg / 加拿大通讯社综合报道）",
    firstHand: false,
    tags: ["安省预测", "新房开工"],
    heat: 62,
    points: [
      "2027年开工+6%至近6.5万套",
      "成屋销量+5%，均价+2.4%",
      "预计央行2027年加息2次",
    ],
    image: "/summaries/desjardins-ontario-2027-forecast.jpg",
    title: "Desjardins：安省2027年温和复苏，但两次加息会压住反弹",
    summary:
      "Desjardins高级经济学家Kari Norman最新报告：安省住房市场2027年预计温和改善——新开工+6%至近6.5万套（仍比2021–22年低30%以上，主力是租赁房），成屋销量+5%、均衡市场下平均房价+2.4%。多伦多市2026年前9个月仅开工525套condo，而过去十年年均约1.4万套。不过她预计央行2027年加息两次，利率环境依然有挑战，会抵消降价和收入增长带来的可负担性改善；加美贸易紧张和中东油价是主要风险。",
    wendyNote:
      "这份报告给2027年定调：量价都会温和向上，但别指望V型反转。两个对买卖有直接意义的数字——开工6.5万套仍处历史低位（供应长期偏紧），加息两次（持有成本不降）。准备明年上车的买家：今年Q4到明年Q1仍是议价窗口；卖家：熬到明春，市场可能比今年底好。",
    url: "https://www.mpamag.com/ca/mortgage-industry/industry-trends/ontario-housing-recovery-faces-a-rate-hike-test-in-2027/594464",
  },
  {
    id: "teranet-hpi-sep2026",
    date: "2026-10-22",
    time: "07:00",
    source: "Teranet–加拿大国家银行 HPI（官方发布）",
    firstHand: true,
    tags: ["房价指数", "转售价格"],
    heat: 55,
    points: [
      "综合指数环比+0.1%，三个月内第二次上涨",
      "6月以来总体企稳，此前连跌近半年",
      "警告：9月后按揭利率显著上升",
    ],
    image: "/summaries/teranet-hpi-sep2026.jpg",
    title: "Teranet房价指数：9月环比+0.1%，但警告利率上升将压制涨幅",
    summary:
      "Teranet–加拿大国家银行10月20日发布9月房价指数：全国综合指数环比+0.1%，为三个月内第二次小幅上涨；自6月以来房价总体企稳，此前从2025年12月起持续下跌。但报告明确警告：美国债收益率急升推高加拿大债券收益率，9月和10月初按揭利率显著上升、且预计继续上行，这将限制购房者的借款能力、压制房价增长；同时8–9月转售交易再次下滑，就业市场复苏动能减弱。",
    wendyNote:
      "重复销售指数（比MLS平均价更能反映同房涨跌）显示全国止跌企稳，但警示在前：固定利率还会涨，借款能力会被动压缩。买家：pre-approval的利率锁赶紧行动，别拖到10月28日议息之后；卖家：企稳不等于反弹，定价还是要贴着最近的成交走，别拿'市场稳了'当加价理由。",
    url: "https://housepriceindex.ca/category/pr/",
  },
  {
    id: "boc-hike-odds-oct28",
    date: "2026-10-21",
    time: "07:00",
    source: "路透社/LSEG（Trendonomist、FXStreet 等综合报道）",
    firstHand: false,
    tags: ["央行加息", "利率"],
    heat: 88,
    points: [
      "10月28日加息概率已升至85–95%",
      "大行转押10月28日加息25bp",
      "固定利率跟债券走：已先行上调",
    ],
    image: "/summaries/boc-hike-odds-oct28.jpg",
    title: "10月28日加息概率飙至85–95%：行长Macklem放鹰，市场几乎把加息写入定价",
    summary:
      "隔夜利率掉期市场显示，10月20–21日市场对央行10月28日加息25个基点（政策利率2.25%→2.50%）的押注，已从一周前的约30%飙升至85%–95%（BlueGamma最新显示95%）。BMO、RBC、Desjardins、Scotiabank均已转向预期加息；导火索是9月CPI 3.1%、央行周一公布的消费者长期通胀预期上升，以及行长Macklem上周六在曼谷表态“油价维持100美元附近，通胀将从3%缓慢上行”。不过多数受访经济学家仍押注按兵不动，市场定价与经济学家预测罕见分歧。",
    wendyNote:
      "对GTA买家的真实冲击不在央行那一下——固定利率锚定债券收益率，已经提前涨了。正在看房的，把pre-approval的利率有效期和利率类型（固定/浮动）一起纳入决策；明年有续约的，现在就该找mortgage broker谈锁定策略，别拿“等10月28日”当借口拖延。",
    url: "https://trendonomist.com/bank-of-canada-rate-hike-odds-hit-85-as-u-s-trade-tensions-and-inflation-weigh-on-canadian-households/",
  },
  {
    id: "federal-bull-tower-370rentals",
    date: "2026-10-21",
    time: "07:00",
    source: "加拿大政府（CNW 官方通稿）",
    firstHand: true,
    tags: ["联邦政策", "租赁供应"],
    heat: 55,
    points: [
      "1.65亿低息贷款建370套出租房",
      "多伦多娱乐区128 Peter St建楼",
      "ACLP已承诺320亿支持8.2万套",
    ],
    image: "/summaries/federal-bull-tower-370rentals.jpg",
    title: "联邦1.65亿低息贷款砸向市中心：370套新出租房落地128 Peter St",
    summary:
      "联邦政府10月16日通过CNW宣布，经公寓建设贷款计划（ACLP）向多伦多娱乐区128 Peter Street的“The Bull Tower”项目提供1.65亿加元低息贷款，用于建设370套新建出租房。ACLP总规模550亿加元，目标2031-32年建成13.1万套出租房；截至今年6月，CMHC已承诺320亿、支持8.19万套。",
    wendyNote:
      "新增的全是purpose-built出租房，短期缓解市中心租客“没得选”的困境，但对房价几乎没有直接影响。反倒是对downtown condo房东的提醒：未来2–3年竞争房源在增加，续租定价别太贪，租客现在选择多了。",
    url: "https://www.newswire.ca/news-releases/canada-announces-the-groundbreaking-of-new-homes-in-toronto-865475453.html",
  },
  {
    id: "cpi-sep31-oct2026",
    date: "2026-10-20",
    time: "08:00",
    source: "StatsCan（路透社/Wealth Professional 综合报道）",
    firstHand: false,
    tags: ["通胀", "利率"],
    heat: 78,
    points: [
      "9月CPI同比3.1%：略低于市场预期的3.2%",
      "去汽油后核心仅2.2%，油价+27.8%是推手",
      "租金+2.8%，房贷利息成本反降0.2%",
    ],
    image: "/summaries/cpi-sep31-oct2026.jpg",
    title: "9月通胀3.1%尘埃落定：油价推高但核心回落，10月28日议息前最后数据",
    summary:
      "加拿大统计局10月19日公布：9月CPI同比3.1%（8月为3.0%），略低于路透调查预期的3.2%，是三个月来再次站上央行容忍区间上限。汽油同比大涨27.8%（能源整体+19%）是主因；剔除汽油后通胀仅2.2%（8月2.4%），核心指标CPI-median 1.9%、CPI-trim 1.8%均回落。居住成本+1.8%（8月1.5%），租金+2.8%，但房贷利息成本-0.2%、屋主重置成本-1.9%。",
    wendyNote:
      "这是10月28日央行议息前的最后一份关键数据，决定了年底利率走向的叙事——市场押注10月按兵不动、12月加息25bp。买家注意：固定利率看的是债券收益率（已在涨），别拿'等央行'当借口拖延预批；浮动利率持有者现在是锁定的窗口期。租金+2.8%而房价承压，'买不如租'的现金流账正在悄悄翻转。",
    url: "https://www.wealthprofessional.ca/news/industry-news/canada-cpi-revealed/393806",
  },
  {
    id: "crea-sep2026-forecast",
    date: "2026-10-20",
    time: "08:00",
    source: "CREA（路透社/Andreu Realty 综合报道）",
    firstHand: false,
    tags: ["全国市场", "预测"],
    heat: 66,
    points: [
      "9月全国销量环比-2.3%，同比（未季调）-7.7%",
      "全国均价$666,538同比-1.6%，HPI同比-3.4%",
      "CREA年内三度下调预测：全年销量-5.2%，安省房价-3%",
    ],
    image: "/summaries/crea-sep2026-forecast.jpg",
    title: "CREA：9月全国销量环比再降2.3%，年内第三次下调全年预测",
    summary:
      "加拿大地产协会（CREA）10月16日发布9月全国数据：销量环比再降2.3%（8月-0.7%），未经季调的同比-7.7%；MLS房价指数环比-0.4%、同比-3.4%，全国均价$666,538同比-1.6%。CREA年内第三次下调2026全年预测：销量44.45万套（同比-5.2%，7月时只预测-1.4%），全年均价$681,681（+0.2%），其中安省房价-3%、BC省-0.8%；预计2027年销量反弹+4.4%、均价+1.2%。首席经济学家Shaun Cathcart直指固定利率跳涨是主因。",
    wendyNote:
      "全国口径在确认GTA的观察：成交比挂牌跌得更快不是只有多伦多在发生。安省全年房价-3%的预测基本把GTA的跌幅写进了官方剧本——卖家还在按去年价格定价的就是在跟预测对赌。对买家反而是好消息：议价空间在预测里还有余量，年底前出手别怕谈价。",
    url: "https://www.andreurealty.com/post/canada-home-sales-september-2026-crea-forecast",
  },
  {
    id: "poll-affordability-oct2026",
    date: "2026-10-19",
    time: "08:20",
    source: "CityNews × Canada Pulse Insights",
    firstHand: false,
    tags: ["民调", "可负担性"],
    heat: 70,
    points: [
      "买房可负担性评'差/很差'：67%，一年前是83%",
      "非屋主73%认为这辈子买不起自己社区的房",
      "租房可负担性评差：62%，去年78%",
    ],
    image: "/summaries/poll-affordability-oct2026.jpg",
    title: "CityNews民调：67%多伦多人认为买房可负担性差，但比一年前改善",
    summary:
      "Canada Pulse Insights 受 CityNews 委托，于 9 月 14–25 日调查 510 名多伦多居民（另含 825 名 GTA 居民）。67% 的多伦多居民认为在自己社区买得起房的可及性'差或很差'，较 2025 年 10 月的 83% 明显改善；租房可及性 62% 评差（去年 78%）。非屋主中 73% 认为这辈子都无法在自己社区买房；全市 23% 的人想买但买不起，集中在 35–54 岁有娃家庭。",
    wendyNote:
      "别只看'67% 悲观'，真正重要的是结构性分化——35–54 岁刚需家庭是买意最强却最被卡住的一群，他们正是'好房源出来就出手'的力量。把这份民调和 TRREB'卖家退场更快'一起读，就是年底成交机会窗口的底层逻辑。",
    url: "https://worldbytenews.com/access-to-affordable-homes-improving-but-two-thirds-of-torontonians-believe-its-bad-or-terrible-poll/",
  },
  {
    id: "poll-talent-outflow-oct2026",
    date: "2026-10-19",
    time: "08:20",
    source: "Toronto Region Board of Trade × Ipsos",
    firstHand: false,
    tags: ["民调", "人才外流"],
    heat: 58,
    points: [
      "76% 把生活成本列为城市最大经济挑战",
      "37% 居民五年内可能搬离多伦多，65% 因'太贵'",
      "55% 认为城市繁荣走错方向，仅22%认为在前进",
    ],
    image: "/summaries/poll-talent-outflow-oct2026.jpg",
    title: "商会×Ipsos民调：37%多伦多居民五年内可能因太贵搬走",
    summary:
      "Ipsos 受多伦多地区商会委托，于 7 月 20 日–8 月 4 日调查 801 名多伦多成年人。76% 的居民把生活成本列为城市面临的最大经济挑战；55% 认为多伦多的繁荣'走错了方向'，仅 22% 认为在前进。37% 的居民表示五年内可能因可负担性问题离开多伦多，其中 65% 的理由是'太贵'，年轻人（租房和首购主力）意愿最强。",
    wendyNote:
      "人口是长期房价的底盘——年轻人正在用脚投票。对房东是预警（租客池可能被稀释），对开发商是预警（长期需求假设要打折扣）；但对自住买家反而意味着竞争放缓的窗口。短线看跌情绪，中线看政策与人口回流。",
    url: "https://www.wealthprofessional.ca/news/industry-news/toronto-residents-fear-city-losing-ground-on-affordability-and-talent/393337",
  },
  {
    id: "mayoral-housing-platforms-oct2026",
    date: "2026-10-19",
    time: "08:20",
    source: "Buildups",
    firstHand: false,
    tags: ["政策", "市选"],
    heat: 52,
    points: [
      "10月26日投票，Chow vs Bradford 民调胶着",
      "Bradford：110万以下首套免市土地转让税+首年冻地税",
      "Chow：6.5万套租金管制房，空置税/豪宅加税",
    ],
    image: "/summaries/mayoral-housing-platforms-oct2026.jpg",
    title: "选前一周：Chow与Bradford住房政见正面交锋，10月26日投票",
    summary:
      "多伦多市长选举 10 月 26 日投票，现任市长 Olivia Chow 与市议员 Brad Bradford 民调胶着，住房/可负担性是选民最关心议题。Bradford 承诺：首套房 110 万以下免市土地转让税（MLTT）、首年冻结地税、推动取消开发费；Chow 主张：2030 年前交付 6.5 万套租金管制房、支持空置税与豪宅加税、精简开发审批。",
    wendyNote:
      "这是未来四年多伦多住房政策的'路口'——Bradford 路线直接利好交易端（省掉 MLTT、开发费下降传导到新房价格），Chow 路线利好持有端管控。110 万以下的 condo/镇屋买家尤其要盯这条：选举结果出来那周，市场情绪会先动。",
    url: "https://buildups.ca/news/toronto-mayoral-candidates-housing-solutions/",
  },
  {
    id: "trreb-sep-2026",
    date: "2026-10-18",
    time: "09:30",
    source: "TRREB Market Watch",
    firstHand: true,
    tags: ["市场数据", "GTA"],
    heat: 39,
    points: [
      "成交 5,040 套，同比 -9%",
      "新增房源同比 -14.4%：卖家退场比买家更快",
      "均价 $1,006,409（同比 -5.1%），平均 51 天售出",
    ],
    image: "/summaries/trreb-sep-2026.jpg",
    title: "TRREB 9月数据：成交5040套同比-9%，新房源下滑更快",
    summary:
      "GTA 9月通过MLS成交5040套，同比下降9%；新增房源16500套，同比下降14.4%，降幅大于成交。平均成交价$1,006,409，同比-5.1%；MLS房价指数同比-4.7%。平均售出周期51天。TRREB形容买家处于“holding pattern”（观望等待），经济、通胀与借贷成本的不确定性持续压制交易。",
    wendyNote:
      "关键信号不是成交跌9%，而是卖家退场比买家更快——新房源少了14.4%。议价空间还在，但真正的好房源选择在变少。Condo依然是买方市场，独立屋要具体到小区看，不能一概而论。现在是挑房的好时机，不是追涨的时机。",
    url: "https://trreb.ca/economic-uncertainty-kept-gta-homebuyers-on-the-sidelines-in-september/",
  },
  {
    id: "boc-oct28-preview",
    date: "2026-10-18",
    time: "08:15",
    source: "nesto / Mortgage Squad",
    firstHand: false,
    tags: ["利率", "贷款"],
    heat: 35,
    points: [
      "政策利率 2.25%，连续 7 次按兵不动",
      "10 月 28 日议息：市场押注加息概率约 1/3",
      "5 年固定最低 4.14%，反而高于浮动 3.44%",
    ],
    image: "/summaries/boc-oct28-preview.jpg",
    title: "10月28日央行议息前瞻：政策利率2.25%已连7次按兵不动",
    summary:
      "加拿大央行政策利率维持2.25%，商业银行最优惠利率（prime）4.45%。市场对10月28日加息的押注约三分之一，主流银行经济学家预计首次加息落在2027年。值得注意的是5年期固定利率最低约4.14%，反而高于5年浮动利率最低约3.44%——固定利率锚定国债收益率（3.53%），9月底曾触及3.73%的52周高点，lender已上调固定利率10-20个基点。",
    wendyNote:
      "别只盯着央行那一下：固定利率跟着债券走，已经在悄悄涨了。10月28日（还有货币政策报告）和12月9日是年内最后两个议息日。有renewal在明年到期的，现在就该找mortgage broker锁方案谈策略，而不是等到最后一刻。",
    url: "https://www.nesto.ca/mortgage-basics/mortgage-rates-forecast-canada/",
  },
  {
    id: "condo-buyers-market",
    date: "2026-10-18",
    time: "07:40",
    source: "Mortgage Sandbox / Urbanation",
    firstHand: false,
    tags: ["Condo", "买方市场"],
    heat: 32,
    points: [
      "库存去化 6.3 个月：明确的买方市场",
      "基准价 $527,200，同比 -6%",
      "Q1 零新盘开盘，已建成未售 4,295 套",
    ],
    image: "/summaries/condo-buyers-market.jpg",
    title: "Condo去化6.3个月：GTA唯一明确的买方市场",
    summary:
      "Condo公寓库存去化周期6.3个月，远超6个月的买方市场分界线。基准价跌至$527,200，三个月-2%、同比-6%。更极端的是新房端：2026年Q1整个GTHA零新盘开盘（至少30年首次），已建成未售新condo达4295套，按过去12个月销量算够卖92个月。未售新condo叫价$1,189/平方英尺，而近三年内建成的二手同类单位仅$859/平方英尺，价差38%创纪录。",
    wendyNote:
      "自住型condo买家现在是全场最有议价权的人：选择多、不着急、可以慢慢挑。但楼花（预售）要极度谨慎——新盘$1,189/尺 vs 二手$859/尺，买楼花等于为期房溢价38%买单。我的建议：除非是特别稀缺的地段和户型，否则二手现房是更聪明的选择。",
    url: "https://www.mortgagesandbox.com/news/metro-toronto-real-estate-market-update-september-2026",
  },
  {
    id: "rlp-q3-2026",
    date: "2026-10-17",
    time: "16:20",
    source: "Royal LePage House Price Survey",
    firstHand: true,
    tags: ["房价调查", "Q3"],
    heat: 24,
    points: [
      "GTA 独立屋中位 $1,364,400（同比 -2.8%）",
      "Condo 中位 $641,500（同比 -4.1%）",
      "预测 Q4 再跌 2%，明春或温和回升",
    ],
    image: "/summaries/rlp-q3-2026.jpg",
    title: "Royal LePage Q3：独立屋中位$1,364,400，预测Q4再跌2%",
    summary:
      "Q3 GTA独立屋价格中位数同比-2.8%至$1,364,400，condo中位-4.1%至$641,500。多伦多市内综合房价同比仅-0.5%至$1,071,500，但环比-4.4%。Royal LePage预测2026年Q4 GTA综合房价同比再跌2.0%，并预计随着库存收紧，销售会在年底至明春温和回升，但价格涨幅仍将温和且分化。",
    wendyNote:
      "注意这个分化：家庭型物业（独立屋系）需求坚挺，condo持续疲软。Q4再跌2%的预测意味着年底前买家仍有窗口，但“库存收紧→明春回升”的判断也提醒卖家：熬过冬天，春天可能更好。买卖时机从来不是一个答案，要看你的物业类型。",
    url: "https://www.newswire.ca/news-releases/conditions-support-a-housing-market-recovery-but-uncertainty-stalls-momentum-858225265.html",
  },
  {
    id: "to-municipal-election",
    date: "2026-10-17",
    time: "11:05",
    source: "TRREB",
    firstHand: true,
    tags: ["政策", "市选"],
    heat: 18,
    points: [
      "10 月多伦多市政选举临近",
      "住房是选民最关心议题之一",
      "未来四年住房政策走向看这次",
    ],
    image: "/summaries/to-municipal-election.jpg",
    title: "多伦多市选临近：住房政策成选民最关心议题之一",
    summary:
      "TRREB主席Daniel Steinfeld表示，住房是选民心中最重要议题之一，10月的市政选举将决定GTA及Simcoe地区未来四年的住房政策——可负担性、住房供应、购房相关成本都可能影响买家需求与信心。",
    wendyNote:
      "政策是影响房价的慢变量，但方向一旦确定影响深远。这次市选值得关注的：空置税、短租限制、开发审批速度。买房是长决策，把政策风向也放进你的checklist里，我会持续跟踪并解读。",
    url: "https://trreb.ca/economic-uncertainty-kept-gta-homebuyers-on-the-sidelines-in-september/",
  },
  {
    id: "416-detached-rebound",
    date: "2026-10-17",
    time: "09:50",
    source: "Toronto Livings / TRREB",
    firstHand: false,
    tags: ["独立屋", "416"],
    heat: 20,
    points: [
      "半独立屋销量环比 +32.7%",
      "镇屋均价环比 +15.6%",
      "唯独 condo 缺席反弹：销量环比 -0.1%",
    ],
    image: "/summaries/416-detached-rebound.jpg",
    title: "416区9月：半独立屋销量环比+32.7%，镇屋均价环比+15.6%",
    summary:
      "多伦多市（416）9月各房型环比出现分化回升：独立屋销量640套环比+16.4%、均价$1,562,966环比+2.4%；半独立屋销量环比+32.7%、均价$1,207,884环比+8.8%；镇屋均价$922,445环比+15.6%。唯独condo公寓销量884套环比-0.1%、均价$640,248环比-1.8%，是唯一没有9月反弹的房型。",
    wendyNote:
      "秋季行情在独立屋系（detached/semi/townhouse）身上出现了，但condo完全缺席。这印证了市场分化：刚需家庭型物业一有合适房源就出手，投资型condo继续观望。卖独立屋的屋主，定价贴近近期可比成交仍能走得动；卖condo的，要有更现实的价格预期。",
    url: "https://www.torontolivings.com/toronto-real-estate-in-september-2026-more-listings-more-choice-more-patience/",
  },
  {
    id: "fixed-rates-climb",
    date: "2026-10-16",
    time: "15:30",
    source: "nesto",
    firstHand: false,
    tags: ["利率", "固定利率"],
    heat: 22,
    points: [
      "固定利率跟国债收益率走，不跟央行走",
      "5 年期收益率 9 月底触及 3.73% 高点",
      "lender 已上调固定利率 10–20 个基点",
    ],
    image: "/summaries/fixed-rates-climb.jpg",
    title: "央行没动，固定利率却在涨：5年期国债收益率逼近3.73%",
    summary:
      "固定按揭利率跟着加拿大国债收益率走，而非央行政策利率。5年期国债收益率9月28日触及3.73%的52周高点（能源驱动的通胀担忧引发全球债市抛售），lender随之上调固定利率约10-20个基点。目前3年固定约4.54%、5年固定约4.59%（broker渠道价）。",
    wendyNote:
      "这是很多买家误解最深的一点：等央行降息再买，可能等来的是固定利率先涨。你的pre-approval利率有有效期，过期重做可能按更高利率批。正在看房的买家，把贷款预批的有效期和利率类型（固定/浮动）一起纳入决策，别只看房价。",
    url: "https://www.nesto.ca/mortgage-basics/mortgage-rates-forecast-canada/",
  },
  {
    id: "precon-gap-38pct",
    date: "2026-10-16",
    time: "10:15",
    source: "Urbanation via BigCityRealty",
    firstHand: false,
    tags: ["楼花", "新房"],
    heat: 26,
    points: [
      "未售新盘 $1,189/尺 vs 二手 $859/尺",
      "38% 价差创纪录",
      "开发商：不开新盘，取消的转长租",
    ],
    image: "/summaries/precon-gap-38pct.jpg",
    title: "楼花vs二手价差38%创纪录：开发商干脆不开了",
    summary:
      "Urbanation Q1 2026调查：GTHA新建condo销量246套创35年新低；零新盘开盘，至少30年首次；已建成未售4295套，按过去12个月销量够卖92个月；963个单位被取消，全部转为长租公寓。自2024年初以来，取消已从供应管道净移除7360个单位。",
    wendyNote:
      "供应端在自我出清：取消的转长租、不开新盘，意味着2-3年后新房供应会断档。现在买楼花是逆势接飞刀——除非开发商信誉极强、价格真有折扣。反过来想：等这批库存消化完，稀缺性会回来。长线投资者可以开始做功课，但动手前务必算清持有成本。",
    url: "https://bigcityrealty.ca/blog/not-a-single-new-condo-launched-in-toronto-in-q1/",
  },
  {
    id: "sa-september-weaker",
    date: "2026-10-16",
    time: "08:00",
    source: "HomiesAI / TRREB",
    firstHand: false,
    tags: ["市场数据", "解读"],
    heat: 21,
    points: [
      "季调销量环比 -5.2%，一年第二大跌幅",
      "销售/新房源比 40.0%，卡在分界线上",
      "headline 会骗人：季调后市场更弱",
    ],
    image: "/summaries/sa-september-weaker.jpg",
    title: "剔除季节因素后，9月其实更弱：季调销量环比-5.2%",
    summary:
      "9月历来是暑期后的上架潮，直接看环比会被日历骗。季调后：9月销量环比-5.2%至5174套，为过去一年第二大单月跌幅；新房源环比-3.8%；季调房价指数环比-0.5%至$924,600，回吐6-7月的小幅涨幅。季调销售/新房源比40.0%，恰好卡在买方市场分界线上。",
    wendyNote:
      "headline数字会骗人，季调后的才是真相：市场并没有迎来秋季反弹，而是在40%这条买方/卖方分界线上横盘。对买家这是好消息——时间站在你这边；对卖家则是提醒——定价必须基于最近90天的可比成交，而不是去年的高点，更不是2022年的峰值。",
    url: "https://www.homiesai.com/research/trreb-market-watch-september-2026",
  },
];

export const radarStats = [
  { label: "已入库情报", value: "128" },
  { label: "跟踪信源", value: "24" },
  { label: "覆盖城市", value: "GTA 全域" },
  { label: "更新频率", value: "每日" },
];

// 按日期分组，供首页渲染
export function groupByDate(items: RadarItem[]) {
  const map = new Map<string, RadarItem[]>();
  for (const item of items) {
    const list = map.get(item.date) ?? [];
    list.push(item);
    map.set(item.date, list);
  }
  return [...map.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));
}

export function formatDateCN(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][d.getDay()];
  const [y, m, day] = dateStr.split("-");
  return `${y}年${Number(m)}月${Number(day)}日 ${week}`;
}
