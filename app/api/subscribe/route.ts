import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let email = "";
  let name = "";
  try {
    const body = await req.json();
    email = String(body.email || "").trim().toLowerCase();
    name = String(body.name || "").trim().slice(0, 80);
  } catch {
    return NextResponse.json({ ok: false, error: "请求格式错误。" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "邮箱格式不正确，请检查后重试。" }, { status: 400 });
  }

  const supabase = await getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "订阅系统正在接入中，请稍后再试，或直接发邮件到 wendywang.realestate@gmail.com。" },
      { status: 503 }
    );
  }

  const { error } = await supabase
    .from("subscribers")
    .upsert({ email, name: name || null }, { onConflict: "email" });

  if (error) {
    console.error("subscribe error:", error);
    return NextResponse.json({ ok: false, error: "订阅失败，请稍后再试。" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
