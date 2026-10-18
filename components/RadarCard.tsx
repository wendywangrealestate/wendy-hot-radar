import type { RadarItem } from "@/data/radar";

function heatColor(heat: number) {
  if (heat >= 35) return "text-heat";
  if (heat >= 25) return "text-amber-200";
  return "text-muted";
}

export default function RadarCard({ item, index }: { item: RadarItem; index: number }) {
  return (
    <article
      className="rise rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-heat-dim sm:p-6"
      style={{ animationDelay: `${Math.min(index * 70, 420)}ms` }}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="mb-4 h-44 w-full rounded-xl border border-line object-cover object-top"
      />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted">
        <span className="font-mono text-radar">{item.time}</span>
        <span>{item.source}</span>
        {item.firstHand && (
          <span className="rounded-full border border-radar/40 px-2 py-0.5 text-[10px] text-radar">
            一手来源
          </span>
        )}
        {item.tags.map((t) => (
          <span key={t} className="rounded-full bg-panel2 px-2 py-0.5 text-[10px] text-muted">
            {t}
          </span>
        ))}
        <span className={`ml-auto font-mono font-bold ${heatColor(item.heat)}`}>
          {item.heat} 热度
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold leading-snug text-ink">
        <a href={item.url} target="_blank" rel="noreferrer" className="hover:text-heat">
          {item.title}
        </a>
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.summary}</p>

      <div className="mt-4 rounded-xl border-l-2 border-heat bg-panel2/70 p-3.5">
        <p className="text-[11px] font-semibold tracking-widest text-heat">WENDY 点评</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/90">{item.wendyNote}</p>
      </div>

      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-xs text-radar hover:underline"
      >
        查看原文 →
      </a>
    </article>
  );
}
