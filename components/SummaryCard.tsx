// 总结图卡片：精确 1080 x 1350，供 headless Chromium 截图用
// 数据来自 data/radar.ts 与 data/reports.ts（单一数据源）

export interface SummaryCardData {
  kicker: string; // 每日精选 / 市场报告
  date: string; // YYYY-MM-DD
  title: string;
  points: string[];
  noteLabel: string; // WENDY 点评 / 核心判断
  note: string;
  source: string;
  heat?: number;
}

function formatDateShort(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}.${m}.${d}`;
}

export default function SummaryCard({ data }: { data: SummaryCardData }) {
  return (
    <div
      className="relative flex flex-col overflow-hidden bg-abyss text-ink"
      style={{ width: 1080, height: 1350 }}
    >
      {/* 背景雷达纹 */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] opacity-25">
        <div className="absolute inset-0 rounded-full border border-radar" />
        <div className="absolute inset-[18%] rounded-full border border-radar" />
        <div className="absolute inset-[36%] rounded-full border border-radar" />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(52,211,153,0.5) 0deg, rgba(52,211,153,0.08) 70deg, transparent 100deg)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -bottom-52 -left-52 h-[480px] w-[480px] rounded-full border border-line opacity-40" />

      <div className="relative flex flex-1 flex-col px-[72px] pb-[56px] pt-[64px]">
        {/* 顶栏 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 36 36" style={{ width: 56, height: 56 }}>
              <circle cx="18" cy="18" r="16" fill="none" stroke="#34d399" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="10.5" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.55" />
              <circle cx="18" cy="18" r="5" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.35" />
              <line x1="18" y1="18" x2="18" y2="2" stroke="#f5a524" strokeWidth="1.6" />
              <circle cx="24" cy="12" r="2.6" fill="#f5a524" />
              <circle cx="18" cy="18" r="1.8" fill="#34d399" />
            </svg>
            <div>
              <p className="text-[26px] font-bold leading-none">Wendy&apos;s Hot Radar</p>
              <p className="mt-2 text-[20px] tracking-[0.3em] text-muted">多伦多地产热点雷达</p>
            </div>
          </div>
          <p className="font-mono text-[24px] text-muted">{formatDateShort(data.date)}</p>
        </div>

        {/* 标签行 */}
        <div className="mt-10 flex items-center gap-4">
          <span className="rounded-full bg-heat px-5 py-2 text-[22px] font-bold text-abyss">
            {data.kicker}
          </span>
          {typeof data.heat === "number" && (
            <span className="font-mono text-[24px] font-bold text-heat">{data.heat} 热度</span>
          )}
        </div>

        {/* 标题 */}
        <h1 className="mt-8 text-[58px] font-black leading-[1.25]">{data.title}</h1>

        {/* 关键点 */}
        <div className="mt-10 space-y-5">
          {data.points.map((p, i) => (
            <div key={i} className="flex items-start gap-5">
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 border-heat font-mono text-[26px] font-bold text-heat">
                {i + 1}
              </span>
              <p className="pt-1 text-[34px] font-semibold leading-snug">{p}</p>
            </div>
          ))}
        </div>

        {/* 点评 */}
        <div className="mt-10 rounded-2xl border-l-[6px] border-heat bg-panel2 p-7">
          <p className="text-[20px] font-bold tracking-[0.25em] text-heat">{data.noteLabel}</p>
          <p className="mt-3 line-clamp-4 text-[29px] leading-[1.6] text-ink/90">{data.note}</p>
        </div>

        <div className="flex-1" />

        {/* 底栏 */}
        <div className="border-t border-line pt-6">
          <div className="flex items-center justify-between">
            <p className="text-[22px] text-muted">信源：{data.source}</p>
            <p className="text-[22px] font-semibold text-radar">每周五 · Wendy 每周市场速览</p>
          </div>
        </div>
      </div>
    </div>
  );
}
