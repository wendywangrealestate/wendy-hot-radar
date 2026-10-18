import Link from "next/link";
import { formatDateCN } from "@/data/radar";
import { reports as allReports } from "@/data/reports";

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-black text-ink">市场报告</h1>
      <p className="mt-2 text-sm text-muted">
        不止于资讯流——每月/每季度的深度解读，把数据连成判断。
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {allReports.map((r, i) => (
          <Link
            key={r.slug}
            href={`/reports/${r.slug}`}
            className="rise group rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-heat-dim"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="rounded-full bg-panel2 px-2.5 py-1 text-[11px] text-heat">{r.tag}</span>
              <span>{formatDateCN(r.date)}</span>
            </div>
            <h2 className="mt-3 text-xl font-bold leading-snug text-ink group-hover:text-heat">
              {r.title}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{r.excerpt}</p>
            <span className="mt-4 inline-block text-sm text-radar">阅读全文 →</span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-muted">
        数据来源：TRREB Market Watch、Bank of Canada、Royal LePage House Price Survey、
        Urbanation 等公开渠道。报告为市场信息分享，不构成投资建议。
      </p>
    </div>
  );
}
