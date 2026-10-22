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
