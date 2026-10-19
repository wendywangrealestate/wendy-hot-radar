import type { Metadata } from "next";
import OpenHouseForm from "@/components/OpenHouseForm";

export const metadata: Metadata = {
  title: "开放日登记 · Open House Register | Wendy Wang Real Estate",
  description:
    "Wendy Wang 开放日访客登记：留下联系方式，获取房源跟进与市场资讯。Open house visitor sign-in.",
};

export default async function OpenHousePage({
  searchParams,
}: {
  searchParams: Promise<{ address?: string; date?: string }>;
}) {
  const { address = "", date = "" } = await searchParams;
  const a = address.trim().slice(0, 160);
  const d = date.trim().slice(0, 40);

  return (
    <div className="min-h-screen bg-abyss text-ink">
      <div className="mx-auto w-full max-w-xl px-4 py-10 sm:py-14">
        {/* 品牌头 */}
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-radar">
            WENDY WANG REAL ESTATE
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-wide">OPEN HOUSE</h1>
          <p className="mt-1 text-sm tracking-[0.25em] text-muted">开放日访客登记</p>
        </div>

        {/* 房源卡 */}
        <div className="mt-6 rounded-2xl border border-line bg-panel p-5 text-center">
          {a ? (
            <>
              <p className="text-base font-bold text-ink">{a}</p>
              {d && <p className="mt-1 text-sm text-heat">{d}</p>}
            </>
          ) : (
            <p className="text-sm text-muted">
              感谢您的参观！请留下联系方式，方便我们后续跟进。
              <br />
              Thank you for visiting! Please sign in below.
            </p>
          )}
          {!a && d && <p className="mt-1 text-sm text-heat">{d}</p>}
        </div>

        {/* 表单 */}
        <div className="mt-6">
          <OpenHouseForm address={a} date={d} />
        </div>

        {/* 页脚 */}
        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          Wendy Wang · Bay Street Group Inc.
          <br />
          416-520-9736 · wendywang.realestate@gmail.com
        </p>
      </div>
    </div>
  );
}
