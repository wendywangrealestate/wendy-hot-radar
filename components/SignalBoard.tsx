import type { RadarItem } from "@/data/radar";

// 市场信号榜：编辑式编号榜单 —— 大号序号 + 标题 + 摘要 + 点评，虚线分隔
export default function SignalBoard({ items }: { items: RadarItem[] }) {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-[3px] border-ink pb-3">
        <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">市场信号榜</h2>
        <p className="pb-1 text-sm text-muted">按热度分与时效综合排序</p>
      </div>

      <div>
        {items.map((item, i) => {
          const external = /^https?:\/\//.test(item.url ?? "");
          const href = external ? item.url : "#feed";
          return (
            <a
              key={item.id}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group flex gap-4 border-b border-dashed border-line py-6 last:border-b-0 sm:gap-6"
            >
              <span className="w-10 shrink-0 font-serif text-4xl font-black leading-none text-heat sm:w-12 sm:text-5xl">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-lg font-bold leading-snug text-ink transition-colors group-hover:text-heat sm:text-xl">
                  {item.title}
                </span>
                <span className="mt-2 line-clamp-3 block text-sm leading-relaxed text-muted">
                  {item.summary}
                </span>
                <span className="mt-2.5 line-clamp-2 block text-sm leading-relaxed text-ink/75">
                  <span className="font-semibold text-radar">Wendy 点评：</span>
                  {item.wendyNote}
                </span>
                <span className="mt-2.5 block font-mono text-xs text-muted">
                  {item.source} · {item.date}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
