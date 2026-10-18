import Link from "next/link";

// 首页 hero：雷达扫描视觉 + 定位语
export default function RadarHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="relative mt-[-260px] h-[520px] w-[520px] opacity-40 sm:mt-[-300px] sm:h-[600px] sm:w-[600px]">
          <div className="absolute inset-0 rounded-full border border-radar/30" />
          <div className="absolute inset-[16%] rounded-full border border-radar/25" />
          <div className="absolute inset-[32%] rounded-full border border-radar/20" />
          <div className="radar-sweep absolute inset-0 rounded-full" />
          <div className="radar-blip absolute left-[30%] top-[38%] h-2 w-2 rounded-full bg-heat" />
          <div
            className="radar-blip absolute left-[62%] top-[55%] h-2 w-2 rounded-full bg-heat"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="radar-blip absolute left-[48%] top-[30%] h-1.5 w-1.5 rounded-full bg-radar"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="text-xs font-semibold tracking-[0.35em] text-radar">TORONTO · GTA · 每日更新</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-ink sm:text-5xl">
          每天值得看的
          <span className="text-heat">多伦多地产动态</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          市场数据、利率追踪、政策解读——由 Wendy Wang 每日精选，
          每条情报都附上“这对你的买卖决策意味着什么”的点评。
          不追热点，只给能用的判断。
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#feed"
            className="rounded-xl bg-heat px-6 py-3 text-sm font-bold text-abyss transition-opacity hover:opacity-90"
          >
            查看今日精选
          </Link>
          <Link
            href="/ask"
            className="rounded-xl border border-line bg-panel px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-radar"
          >
            问 Wendy AI
          </Link>
        </div>
      </div>
    </section>
  );
}
