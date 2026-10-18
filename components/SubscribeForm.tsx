"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setMsg(data.error || "订阅失败，请稍后再试。");
      }
    } catch {
      setStatus("error");
      setMsg("网络出了点问题，请稍后再试。");
    }
  }

  if (status === "done") {
    return (
      <div className="pop rounded-2xl border border-radar/40 bg-panel p-8 text-center">
        <p className="text-3xl">🎉</p>
        <p className="mt-3 text-lg font-bold text-ink">订阅成功！</p>
        <p className="mt-2 text-sm text-muted">
          每周五早上，《Wendy 每周市场速览》会准时出现在你的收件箱。
          <br />
          第一封将在下周五发出，敬请期待。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <div className="grid gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold tracking-wider text-muted">
            称呼（可选）
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="怎么称呼你？"
            className="w-full rounded-xl border border-line bg-abyss px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-heat focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold tracking-wider text-muted">
            邮箱地址
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            required
            className="w-full rounded-xl border border-line bg-abyss px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-heat focus:outline-none"
          />
        </div>
        {status === "error" && <p className="text-sm text-red-400">{msg}</p>}
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-heat px-6 py-3.5 text-sm font-bold text-abyss transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "订阅中…" : "免费订阅每周速览"}
        </button>
        <p className="text-[11px] leading-relaxed text-muted">
          订阅即表示同意接收市场资讯邮件，可随时退订。你的邮箱仅用于发送速览，不会分享给第三方。
        </p>
      </div>
    </form>
  );
}
