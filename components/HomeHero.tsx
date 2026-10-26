import { radarItems } from "@/data/radar";
import BriefingPlayer from "@/components/BriefingPlayer";

// 首页深色刊头：品牌大标题 + 一行元信息 + 语音播报
// 元信息全部由现有情报数据现算，不写假数
function fmtDay(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

function fmtDayWithWeek(dateStr: string) {
  const dt = new Date(dateStr + "T12:00:00");
  const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][dt.getDay()];
  return `${fmtDay(dateStr)} · ${week}`;
}

export default function HomeHero() {
  const latestDate = radarItems.reduce((max, i) => (i.date > max ? i.date : max), radarItems[0].date);
  const sourceCount = new Set(radarItems.map((i) => i.source)).size;

  return (
    <section className="relative overflow-hidden bg-abyss">
      {/* 背景：本站原有的雷达扫描视觉，压暗后只作氛围 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-panel2/60 via-transparent to-abyss" />
      <div className="pointer-events-none absolute -right-40 -top-64 hidden opacity-25 sm:block">
        <div className="relative h-[560px] w-[560px]">
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

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-radar">
          WENDY WANG REAL ESTATE · TORONTO / GTA
        </p>
        <h1 className="mt-4 font-serif text-5xl font-black leading-none tracking-tight text-white sm:text-7xl">
          WENDY&rsquo;S HOT RADAR<span className="text-heat">.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/85 sm:text-lg">
          多伦多地产热点雷达 —— GTA 市场数据看板与每日地产情报，全部标注来源。
        </p>

        <BriefingPlayer />

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-xs text-muted sm:text-sm">
          <span>
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-heat align-middle" aria-hidden="true" />
            <span className="font-mono text-ink">{fmtDayWithWeek(latestDate)}</span>
          </span>
          <span>
            市场数据：<span className="font-mono text-ink">TRREB 2026 年 9 月月报</span>
          </span>
          <span>
            本站情报：<span className="font-mono text-ink">{radarItems.length} 条</span>
          </span>
          <span>
            信源 <span className="font-mono text-ink">{sourceCount} 家</span>
          </span>
          <span>
            最近更新：<span className="font-mono text-ink">{fmtDay(latestDate)}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
