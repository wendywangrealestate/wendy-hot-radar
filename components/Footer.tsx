import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-abyss">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-ink">Wendy&apos;s Hot Radar</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              多伦多地产热点雷达 · 每天值得看的 GTA 地产动态
              <br />
              情报由 Wendy Wang 每日精选，附点评。
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-ink">快速导航</p>
            <div className="mt-2 flex flex-col gap-1.5 text-xs text-muted">
              <Link href="/" className="hover:text-heat">精选雷达</Link>
              <Link href="/reports" className="hover:text-heat">市场报告</Link>
              <Link href="/ask" className="hover:text-heat">问 Wendy AI</Link>
              <Link href="/subscribe" className="hover:text-heat">订阅每周速览</Link>
              <Link href="/about" className="hover:text-heat">关于 Wendy</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-ink">Wendy Wang</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Bay Street Group · 多伦多地产经纪
              <br />
              买卖 · 租赁 · 全程亲力亲为
              <br />
              <a
                href="https://www.youtube.com/@WendyWangRealEstate"
                target="_blank"
                rel="noreferrer"
                className="text-heat hover:underline"
              >
                YouTube: Wendy Wang Real Estate
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-5 text-[11px] leading-relaxed text-muted">
          <p>
            本站市场数据来自 TRREB、Bank of Canada、Royal LePage、Urbanation
            等公开来源，仅供信息参考，不构成财务、法律或税务建议。具体交易请咨询持牌专业人士。
          </p>
          <p className="mt-1">© 2026 Wendy Wang Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
