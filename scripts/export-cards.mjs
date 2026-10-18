// 导出总结图卡片数据为 JSON，供 scripts/render-cards.py 渲染
// Node 24 可直接 import TS 文件（仅含可擦除类型语法）
import { writeFileSync } from "node:fs";
import { radarItems } from "../data/radar.ts";
import { reports } from "../data/reports.ts";

const cards = [
  ...radarItems.map((i) => ({
    id: i.id,
    file: `${i.id}.png`,
    kicker: "每日精选",
    date: i.date,
    title: i.title,
    points: i.points,
    noteLabel: "WENDY 点评",
    note: i.wendyNote,
    source: i.source,
    heat: i.heat,
  })),
  ...reports.map((r) => ({
    id: `report-${r.slug}`,
    file: `report-${r.slug}.png`,
    kicker: "市场报告",
    date: r.date,
    title: r.title,
    points: r.points,
    noteLabel: "核心判断",
    note: r.excerpt,
    source: "TRREB / Bank of Canada / Royal LePage / Urbanation",
    heat: null,
  })),
];

writeFileSync("/tmp/cards.json", JSON.stringify(cards, null, 2));
console.log(`exported ${cards.length} cards`);
