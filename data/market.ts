// 市场数据看板：GTA 关键指标与利率追踪
// 数据为 2026-10-18 搜集的研究快照，页面上会明确标注"数据截至"时间；
// 日常更新走每日情报 cron，结构性数据按月/季刷新。

export interface MarketMetric {
  label: string;
  value: string;
  change?: string; // 同比 / 环比
  trend?: "up" | "down" | "flat";
  note?: string;
}

export interface MarketSection {
  id: string;
  title: string;
  asOf: string; // 数据截至
  source: string;
  metrics: MarketMetric[];
  wendyTake?: string; // Wendy 解读
}

export const marketSections: MarketSection[] = [
  {
    id: "gta-overview",
    title: "GTA 整体市场",
    asOf: "2026 年 9 月",
    source: "TRREB Market Watch",
    metrics: [
      { label: "成交套数", value: "5,040", change: "同比 -9%", trend: "down" },
      { label: "新增房源", value: "16,500", change: "同比 -14.4%", trend: "down", note: "卖家退场比买家更快" },
      { label: "平均成交价", value: "$1,006,409", change: "同比 -5.1%", trend: "down" },
      { label: "MLS 房价指数", value: "-4.7%", change: "同比", trend: "down" },
      { label: "平均售出周期", value: "51 天", note: "买家持续观望" },
    ],
    wendyTake:
      "看 GTA 不要只看成交跌 9%——新房源少了 14.4%，卖家退场更快，议价空间还在，但好房源的选择在变少。现在是挑房的时机，不是追涨的时机。",
  },
  {
    id: "housing-types",
    title: "各房型价格",
    asOf: "2026 年 Q3",
    source: "Royal LePage / TRREB",
    metrics: [
      { label: "独立屋中位价", value: "$1,364,400", change: "Q3", trend: "flat", note: "Royal LePage" },
      { label: "Condo 中位价", value: "$641,500", change: "Q3", trend: "flat", note: "Royal LePage" },
      { label: "Condo 基准价", value: "$527,200", change: "同比 -6%", trend: "down" },
      { label: "Q4 房价预测", value: "-2%", change: "Royal LePage 预测", trend: "down" },
    ],
    wendyTake:
      "Condo 是明确的买方市场，独立屋要具体到小区看，不能一概而论。Q4 预测再跌 2%，年底可能是议价窗口。",
  },
  {
    id: "rates",
    title: "利率追踪",
    asOf: "2026 年 10 月中旬",
    source: "Bank of Canada / 市场报价",
    metrics: [
      { label: "政策利率", value: "2.25%", change: "连续 7 次按兵不动", trend: "flat" },
      { label: "最优惠利率 Prime", value: "4.45%", trend: "flat" },
      { label: "5 年固定最低", value: "~4.14%", change: "反而高于浮动", trend: "up", note: "锚定国债收益率" },
      { label: "5 年浮动最低", value: "~3.44%", trend: "flat" },
      { label: "5 年国债收益率", value: "3.53%", change: "9 月底曾到 3.73%（52 周高点）", trend: "up" },
      { label: "下次议息", value: "10 月 28 日", note: "同日发布货币政策报告" },
    ],
    wendyTake:
      "别只盯着央行那一下：固定利率跟着债券走，已经在悄悄涨了。有 renewal 在明年到期的，现在就该找 mortgage broker 锁方案谈策略。",
  },
  {
    id: "condo-market",
    title: "Condo 市场深读",
    asOf: "2026 年 Q3（Urbanation 新盘调查）",
    source: "Urbanation / TRREB",
    metrics: [
      { label: "新盘 Q3 销量", value: "760 套", change: "同比翻倍，连续 2 季度增长", trend: "up", note: "但仍比 Q3 十年均值低 78%" },
      { label: "批量交易", value: "$763 /呎", change: "低于原售价约 40%", trend: "down", note: "339 套占 Q3 销量 45%" },
      { label: "竣工未售", value: "5,127 套", change: "环比 -7%，四年首次下降", trend: "down" },
      { label: "楼花销量", value: "60 套", change: "同比 -61%，连续 12 季度下降", trend: "down" },
    ],
    wendyTake:
      "新盘的去化引擎彻底切换：卖出去的几乎全是竣工盘打折货，楼花继续躺平。5127 套竣工未售仍是压顶石，但库存首次下降、投资机构开始扫货，是底部正在构筑的信号。自住买家慢慢挑，不用抢；楼花继续避开。",
  },
  {
    id: "ontario-2027",
    title: "安省 2027 年展望",
    asOf: "2026 年 10 月",
    source: "Desjardins 预测",
    metrics: [
      { label: "新开工", value: "近 6.5 万套", change: "同比 +6%", trend: "up", note: "仍比 2021–22 年低 30% 以上" },
      { label: "成屋销量", value: "+5%", change: "2027 年预测", trend: "up" },
      { label: "平均房价", value: "+2.4%", change: "2027 年预测", trend: "up", note: "均衡市场假设下" },
      { label: "加息预期", value: "2 次", change: "2027 年", trend: "up", note: "利率环境依然有挑战" },
    ],
    wendyTake:
      "Desjardins 给 2027 年定调：量价温和向上，但别指望 V 型反转。开工仍处历史低位（供应长期偏紧）+ 加息两次（持有成本不降）——今年 Q4 到明年 Q1 仍是买家议价窗口，卖家可以熬到明春。",
  },
];

export const marketUpdatedAt = "2026-10-22";
