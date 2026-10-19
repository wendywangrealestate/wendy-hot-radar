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
    asOf: "2026 年 Q3",
    source: "Urbanation / TRREB",
    metrics: [
      { label: "库存去化周期", value: "6.3 个月", change: "明确买方市场", trend: "up" },
      { label: "新盘均价", value: "$1,189 /呎", note: "2026 年 Q1 零新盘推出" },
      { label: "转售均价", value: "$859 /呎", change: "价差 38%", trend: "down" },
      { label: "竣工未售", value: "4,295 套", trend: "up" },
    ],
    wendyTake:
      "新盘比转售贵 38%，Q1 甚至零新盘——开发商也在等。4,295 套竣工未售压在那里，自住买家慢慢挑，不用抢；投资者先算好租售比再下手。",
  },
];

export const marketUpdatedAt = "2026-10-19";
