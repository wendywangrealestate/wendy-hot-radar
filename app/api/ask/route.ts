import { NextRequest, NextResponse } from "next/server";
import { systemPrompt, fallbackAnswer } from "@/data/knowledge";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// Groq 使用 OpenAI 兼容接口，速度快且有免费额度
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

async function askGroq(apiKey: string, question: string): Promise<string> {
  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
      temperature: 0.4,
      max_tokens: 800,
    }),
    signal: AbortSignal.timeout(25000),
  });
  if (!res.ok) throw new Error(`Groq API ${res.status}`);
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content || "";
  if (!text.trim()) throw new Error("empty response");
  return text.trim();
}

async function askGemini(apiKey: string, question: string): Promise<string> {
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
  return text.trim();
}

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

  // 优先级：Groq > Gemini > 内置知识库兜底
  const groqKey = process.env.GROQ_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  if (groqKey) {
    try {
      const answer = await askGroq(groqKey, question);
      return NextResponse.json({ answer, mode: "groq" });
    } catch (e) {
      console.error("groq error, trying gemini:", e);
    }
  }

  if (geminiKey) {
    try {
      const answer = await askGemini(geminiKey, question);
      return NextResponse.json({ answer, mode: "gemini" });
    } catch (e) {
      console.error("ask api error:", e);
    }
  }

  // 未配置 key 或上游都失败：用内置知识库关键词兜底，保证页面始终可用
  const mode = groqKey || geminiKey ? "local-kb-fallback" : "local-kb";
  return NextResponse.json({ answer: fallbackAnswer(question), mode });
}
