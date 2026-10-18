import Link from "next/link";
import RadarHero from "@/components/RadarHero";
import StatsStrip from "@/components/StatsStrip";
import RadarCard from "@/components/RadarCard";
import { groupByDate, formatDateCN, radarItems } from "@/data/radar";

export default function Home() {
  const groups = groupByDate(radarItems);

  return (
    <>
      <RadarHero />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <StatsStrip />
      </div>

      <section id="feed" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black text-ink">精选雷达</h2>
            <p className="mt-1 text-sm text-muted">持续更新的 GTA 地产情报 · 每条附 Wendy 点评</p>
          </div>
          <Link href="/reports" className="text-sm text-radar hover:underline">
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

        <div className="mt-12 rounded-2xl border border-line bg-panel p-6 text-center sm:p-8">
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
      </section>
    </>
  );
}
