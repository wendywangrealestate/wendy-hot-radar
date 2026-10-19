import Link from "next/link";
import { marketSections, marketUpdatedAt } from "@/data/market";

function TrendBadge({ trend }: { trend?: "up" | "down" | "flat" }) {
  if (!trend || trend === "flat") return null;
  const isUp = trend === "up";
  return (
    <span
      className={`ml-2 inline-block rounded px-1.5 py-0.5 align-middle text-[11px] font-bold ${
        isUp ? "bg-heat/15 text-heat" : "bg-radar/15 text-radar"
      }`}
    >
      {isUp ? "▲" : "▼"}
    </span>
  );
}

export const metadata = {
  title: "市场数据 · Wendy's Hot Radar",
  description: "GTA 关键市场指标与利率追踪：成交、房价、库存、利率，一页看懂多伦多地产数据。",
};

export default function DataPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-bold tracking-[0.25em] text-heat">MARKET DATA</p>
      <h1 className="mt-2 text-3xl font-black text-ink">市场数据</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        GTA 关键指标与利率追踪，一页看懂。结构性数据按月/季刷新，页面底部标注每次更新时间。
      </p>
      <p className="mt-1 text-xs text-muted">本页更新于 {marketUpdatedAt}</p>

      <div className="mt-8 space-y-8">
        {marketSections.map((sec) => (
          <section key={sec.id} className="overflow-hidden rounded-2xl border border-line bg-panel">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line bg-panel2 px-5 py-4 sm:px-6">
              <h2 className="text-lg font-bold text-ink">{sec.title}</h2>
              <p className="text-xs text-muted">
                数据截至 {sec.asOf} · 来源 {sec.source}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
              {sec.metrics.map((m) => (
                <div key={m.label} className="bg-panel px-5 py-5">
                  <p className="text-[11px] tracking-wider text-muted">{m.label}</p>
                  <p className="mt-1.5 font-mono text-xl font-bold text-ink">
                    {m.value}
                    <TrendBadge trend={m.trend} />
                  </p>
                  {m.change && <p className="mt-1 text-xs text-muted">{m.change}</p>}
                  {m.note && <p className="mt-0.5 text-xs text-radar/90">{m.note}</p>}
                </div>
              ))}
            </div>

            {sec.wendyTake && (
              <div className="border-t border-line bg-panel2/60 px-5 py-4 sm:px-6">
                <p className="text-xs font-bold tracking-[0.2em] text-heat">WENDY 解读</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/90">{sec.wendyTake}</p>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-panel p-6 text-center sm:p-8">
        <h3 className="text-lg font-bold text-ink">数据每周五进你的邮箱</h3>
        <p className="mt-2 text-sm text-muted">
          《Wendy 每周市场速览》：一周关键数据 + 利率动向 + 一条本周最重要的判断。
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            href="/subscribe"
            className="rounded-xl bg-heat px-6 py-3 text-sm font-bold text-abyss transition-opacity hover:opacity-90"
          >
            免费订阅
          </Link>
          <Link
            href="/ask"
            className="rounded-xl border border-line px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-panel2"
          >
            问 Wendy AI
          </Link>
        </div>
      </div>
    </div>
  );
}
