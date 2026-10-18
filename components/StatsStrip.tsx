import { radarStats } from "@/data/radar";

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {radarStats.map((s) => (
        <div key={s.label} className="rounded-xl border border-line bg-panel px-4 py-3.5 text-center">
          <p className="font-mono text-xl font-bold text-heat">{s.value}</p>
          <p className="mt-1 text-[11px] tracking-wider text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
