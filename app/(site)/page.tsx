import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import SignalBoard from "@/components/SignalBoard";
import StatsStrip from "@/components/StatsStrip";
import RadarCard from "@/components/RadarCard";
import { groupByDate, formatDateCN, radarItems } from "@/data/radar";

export default function Home() {
  const groups = groupByDate(radarItems);

  // 信号榜选条：先按日期倒序（时效优先）、同日按热度倒序，去重后取前 6
  const seen = new Set<string>();
  const topSignals = [...radarItems]
    .sort((a, b) => (a.date === b.date ? b.heat - a.heat : a.date < b.date ? 1 : -1))
    .filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .slice(0, 6);

  return (
    <>
      {/* 第 1 层：深色刊头（品牌 + 元信息 + 语音播报） */}
      <HomeHero />

      {/* 第 2 层：市场信号榜 */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SignalBoard items={topSignals} />
        </div>
      </section>

      {/* 第 3 层：关键数据带 */}
      <section className="bg-panel2">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6">
          <StatsStrip />
          <Link
            href="/data"
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-panel px-5 py-4 transition-colors hover:border-heat/50 sm:px-6"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
              <span className="font-bold text-heat">GTA 关键数据</span>
              <span className="text-muted">
                均价 <span className="font-mono font-bold text-ink">$1,006,409</span>
                <span className="text-xs">（同比 -5.1%）</span>
              </span>
              <span className="text-muted">
                政策利率 <span className="font-mono font-bold text-ink">2.25%</span>
              </span>
              <span className="text-muted">
                Condo 去化 <span className="font-mono font-bold text-ink">6.3 个月</span>
              </span>
            </div>
            <span className="text-sm font-bold text-radar">查看市场数据 →</span>
          </Link>
        </div>
      </section>

      {/* 第 4 层：精选雷达全量信息流 */}
      <section id="feed" className="scroll-mt-20 border-y border-line bg-abyss">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-[3px] border-ink pb-3">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-ink">精选雷达</h2>
              <p className="mt-1 text-sm text-muted">持续更新的 GTA 地产情报 · 每条附 Wendy 点评</p>
            </div>
            <Link href="/reports" className="pb-1 text-sm font-semibold text-radar hover:underline">
              深度市场报告 →
            </Link>
          </div>

          <div className="space-y-10">
            {groups.map(([date, items]) => (
              <div key={date}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-line" />
                  <h3 className="text-sm font-bold tracking-wider text-heat">
                    {formatDateCN(date)} · {items.length} 条
                  </h3>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <div className="grid gap-4">
                  {items.map((item, i) => (
                    <RadarCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 第 5 层：订阅（深色收尾带） */}
      <section className="bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="rounded-2xl border border-line bg-abyss p-6 text-center sm:p-8">
            <h3 className="text-lg font-bold text-ink">不想每天来翻？每周五收一封就够了</h3>
            <p className="mt-2 text-sm text-muted">
              《Wendy 每周市场速览》：一周关键数据 + 利率动向 + 一条本周最重要的判断。
            </p>
            <Link
              href="/subscribe"
              className="mt-5 inline-block rounded-xl bg-heat px-6 py-3 text-sm font-bold text-abyss transition-opacity hover:opacity-90"
            >
              免费订阅
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
