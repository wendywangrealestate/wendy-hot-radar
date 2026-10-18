import Link from "next/link";
import { notFound } from "next/navigation";
import { reports } from "@/data/reports";
import { formatDateCN } from "@/data/radar";

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export default async function ReportDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/reports" className="text-sm text-radar hover:underline">
        ← 返回市场报告
      </Link>

      <div className="mt-6 flex items-center gap-2 text-xs text-muted">
        <span className="rounded-full bg-panel2 px-2.5 py-1 text-[11px] text-heat">{report.tag}</span>
        <span>{formatDateCN(report.date)}</span>
      </div>

      <h1 className="mt-4 text-3xl font-black leading-tight text-ink">{report.title}</h1>
      <p className="mt-3 border-l-2 border-heat pl-4 text-sm leading-relaxed text-muted">
        {report.excerpt}
      </p>

      {report.bullets && (
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {report.bullets.map((b) => (
            <div key={b.label} className="rounded-xl border border-line bg-panel px-4 py-3">
              <p className="text-[11px] tracking-wider text-muted">{b.label}</p>
              <p className="mt-1 font-mono text-sm font-bold text-heat">{b.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 space-y-5">
        {report.body.map((p, i) => (
          <p key={i} className="text-[15px] leading-loose text-ink/90">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-panel p-6">
        <p className="text-sm font-bold text-ink">有具体的买卖问题？直接问 AI，或约 Wendy 聊聊</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/ask"
            className="rounded-xl bg-heat px-5 py-2.5 text-sm font-bold text-abyss hover:opacity-90"
          >
            问 Wendy AI
          </Link>
          <Link
            href="/subscribe"
            className="rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-radar"
          >
            订阅每周速览
          </Link>
        </div>
      </div>
    </div>
  );
}
