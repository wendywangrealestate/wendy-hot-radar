import { NextRequest, NextResponse } from "next/server";
import { OPEN_HOUSE_WEBAPP_URL } from "@/lib/openhouse";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let d: Record<string, unknown> = {};
  try {
    d = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "请求格式错误。" }, { status: 400 });
  }

  const name = String(d.name || "").trim().slice(0, 80);
  const phone = String(d.phone || "").trim().slice(0, 40);
  const email = String(d.email || "").trim().toLowerCase().slice(0, 120);
  const interested = String(d.interested || "").trim().slice(0, 60);
  const realtor = String(d.realtor || "").trim().slice(0, 20);
  const comments = String(d.comments || "").trim().slice(0, 500);
  const consent = d.consent === true;
  const address = String(d.address || "").trim().slice(0, 160);
  const date = String(d.date || "").trim().slice(0, 40);

  if (!name) {
    return NextResponse.json({ ok: false, error: "请填写姓名。" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "请勾选同意联系条款。" }, { status: 400 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "邮箱格式不正确，请检查后重试。" }, { status: 400 });
  }
  if (!OPEN_HOUSE_WEBAPP_URL) {
    return NextResponse.json(
      { ok: false, error: "登记系统正在接入中，请稍后再试，或直接联系 Wendy：416-520-9736。" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(OPEN_HOUSE_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, phone, email, interested, realtor, comments,
        consent, address, date, source: "website",
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.ok === false) {
      throw new Error(data.error || `upstream ${res.status}`);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("open-house forward error:", err);
    return NextResponse.json(
      { ok: false, error: "提交失败，请稍后再试，或直接联系 Wendy：416-520-9736。" },
      { status: 502 }
    );
  }
}
