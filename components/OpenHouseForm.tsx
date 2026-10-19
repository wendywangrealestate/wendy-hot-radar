"use client";

import { useState } from "react";

const INTERESTED = ["感兴趣 Interested", "只是看看 Just looking", "不感兴趣 Not interested"];
const REALTOR = ["有 Yes", "没有 No"];

const inputCls =
  "w-full rounded-xl border border-line bg-abyss px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 focus:border-heat focus:outline-none";
const labelCls = "mb-1.5 block text-xs font-semibold tracking-wider text-muted";

export default function OpenHouseForm({
  address,
  date,
}: {
  address: string;
  date: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interested, setInterested] = useState(INTERESTED[0]);
  const [realtor, setRealtor] = useState(REALTOR[1]);
  const [comments, setComments] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setMsg("请勾选同意联系条款。");
      return;
    }
    setStatus("sending");
    setMsg("");
    try {
      const res = await fetch("/api/open-house", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, interested, realtor, comments, consent, address, date }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("done");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
        setMsg(data.error || "提交失败，请稍后再试。");
      }
    } catch {
      setStatus("error");
      setMsg("网络出了点问题，请稍后再试。");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-radar/40 bg-panel p-8 text-center">
        <p className="text-4xl">🏡</p>
        <p className="mt-4 text-xl font-black text-ink">登记成功！</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          感谢您的参观{name ? `，${name}` : ""}！{email ? "一封感谢邮件已发送到您的邮箱。" : ""}
          <br />
          Thank you for visiting! {email ? "A thank-you email is on its way to your inbox." : ""}
        </p>
        <p className="mt-4 text-xs text-muted">
          Wendy Wang · Bay Street Group Inc. · 416-520-9736
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <div className="grid gap-5">
        <div>
          <label className={labelCls}>姓名 Name *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="您的姓名" required maxLength={80} className={inputCls} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelCls}>电话 Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="416-000-0000" type="tel" maxLength={40} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>电子邮箱 Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" maxLength={120} className={inputCls} />
          </div>
        </div>

        <div>
          <span className={labelCls}>您对这套房源感兴趣吗？ Interested in this property?</span>
          <div className="flex flex-wrap gap-2">
            {INTERESTED.map((o) => (
              <button key={o} type="button" onClick={() => setInterested(o)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${interested === o ? "border-heat bg-heat/15 text-heat" : "border-line text-muted hover:border-muted"}`}>
                {o}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className={labelCls}>您是否已有合作的地产经纪？ Working with a realtor?</span>
          <div className="flex flex-wrap gap-2">
            {REALTOR.map((o) => (
              <button key={o} type="button" onClick={() => setRealtor(o)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${realtor === o ? "border-heat bg-heat/15 text-heat" : "border-line text-muted hover:border-muted"}`}>
                {o}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelCls}>留言 Comments</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} placeholder="有什么想问的都可以写在这里…" rows={3} maxLength={500} className={inputCls} />
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-abyss/60 p-4">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#f5a524]" />
          <span className="text-xs leading-relaxed text-muted">
            我同意 Wendy Wang Real Estate 通过电子邮件联系我，发送新房源和市场资讯，我可随时撤回此同意。
            <span className="text-muted/70"> I consent to Wendy Wang Real Estate contacting me by email about new listings and market updates; I can withdraw this consent at any time.</span>
          </span>
        </label>

        {status === "error" && <p className="text-sm text-red-400">{msg}</p>}

        <button type="submit" disabled={status === "sending"}
          className="rounded-xl bg-heat px-6 py-4 text-base font-bold text-abyss transition-opacity hover:opacity-90 disabled:opacity-50">
          {status === "sending" ? "提交中…" : "提交登记 Submit"}
        </button>
      </div>
    </form>
  );
}
