"use client";

import { useState, useRef, useEffect } from "react";

interface Msg {
  role: "user" | "ai";
  text: string;
}

const suggestions = [
  "现在适合买 condo 吗？",
  "10月28日央行会加息吗？",
  "卖房现在定价要注意什么？",
  "多伦多买房有哪些税费？",
];

export default function Chat() {
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "ai",
      text: "你好，我是 Wendy 的 AI 助手。我读过本站所有的市场情报和报告，可以回答关于多伦多 GTA 房市、利率、买卖流程的问题。试试问我：“现在适合买 condo 吗？”",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    setInput("");
    const next = [...msgs, { role: "user" as const, text: q }];
    setMsgs(next);
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      setMsgs([...next, { role: "ai", text: data.answer || "抱歉，我暂时无法回答，请稍后再试。" }]);
    } catch {
      setMsgs([...next, { role: "ai", text: "网络似乎出了点问题，请稍后再试，或发邮件到 wendywang.realestate@gmail.com 直接联系 Wendy。" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-[62vh] min-h-[480px] flex-col overflow-hidden rounded-2xl border border-line bg-panel">
      <div className="border-b border-line px-5 py-3.5">
        <p className="text-sm font-bold text-ink">问 Wendy AI</p>
        <p className="text-[11px] text-muted">基于本站市场情报与知识库作答 · 数据注明来源与时间</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {msgs.map((m, i) => (
          <div key={i} className={`pop flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-heat text-abyss"
                  : "border border-line bg-panel2 text-ink/90"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="pop flex justify-start">
            <div className="flex gap-1.5 rounded-2xl border border-line bg-panel2 px-4 py-3.5">
              <span className="typing-dot h-2 w-2 rounded-full bg-muted" />
              <span className="typing-dot h-2 w-2 rounded-full bg-muted" />
              <span className="typing-dot h-2 w-2 rounded-full bg-muted" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-line px-4 py-3">
        <div className="mb-2.5 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              disabled={loading}
              className="rounded-full border border-line bg-abyss px-3 py-1.5 text-xs text-muted transition-colors hover:border-heat hover:text-heat disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入你的问题…"
            className="flex-1 rounded-xl border border-line bg-abyss px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-heat focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-xl bg-heat px-5 py-3 text-sm font-bold text-abyss transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            发送
          </button>
        </form>
      </div>
    </div>
  );
}
