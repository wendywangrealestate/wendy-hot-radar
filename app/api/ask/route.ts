import { NextRequest, NextResponse } from "next/server";
import { systemPrompt, fallbackAnswer } from "@/data/knowledge";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export async function POST(req: NextRequest) {
  let question = "";
  try {
    const body = await req.json();
    question = String(body.question || "").slice(0, 1000);
  } catch {
    return NextResponse.json({ answer: "请先输入你的问题。" }, { status: 400 });
  }
  if (!question.trim()) {
    return NextResponse.json({ answer: "请先输入你的问题。" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // 未配置 key：用内置知识库关键词兜底，保证页面始终可用
    return NextResponse.json({ answer: fallbackAnswer(question), mode: "local-kb" });
  }

  try {
    const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: question }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 800 },
      }),
      signal: AbortSignal.timeout(25000),
    });
    if (!res.ok) throw new Error(`Gemini API ${res.status}`);
    const data = await res.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("") ||
      "";
    if (!text.trim()) throw new Error("empty response");
    return NextResponse.json({ answer: text.trim(), mode: "gemini" });
  } catch (e) {
    console.error("ask api error:", e);
    return NextResponse.json({ answer: fallbackAnswer(question), mode: "local-kb-fallback" });
  }
}
