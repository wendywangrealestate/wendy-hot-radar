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
  image: string; // 总结图路径 /summaries/<id>.png
  title: string;
  summary: string;
  wendyNote: string; // Wendy 点评：这条情报对买卖/租赁决策意味着什么
  url: string;
}

export const radarItems: RadarItem[] = [
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
    image: "/summaries/trreb-sep-2026.png",
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
    image: "/summaries/boc-oct28-preview.png",
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
    image: "/summaries/condo-buyers-market.png",
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
    image: "/summaries/rlp-q3-2026.png",
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
    image: "/summaries/to-municipal-election.png",
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
    image: "/summaries/416-detached-rebound.png",
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
    image: "/summaries/fixed-rates-climb.png",
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
    image: "/summaries/precon-gap-38pct.png",
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
    image: "/summaries/sa-september-weaker.png",
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
