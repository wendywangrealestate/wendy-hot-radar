"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "精选雷达" },
  { href: "/reports", label: "市场报告" },
  { href: "/ask", label: "问 Wendy AI" },
  { href: "/about", label: "关于 Wendy" },
];

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 36 36" className="h-9 w-9">
          <circle cx="18" cy="18" r="16" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.9" />
          <circle cx="18" cy="18" r="10.5" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.55" />
          <circle cx="18" cy="18" r="5" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.35" />
          <line x1="18" y1="18" x2="18" y2="2" stroke="#f5a524" strokeWidth="1.6" />
          <circle cx="24" cy="12" r="2.6" fill="#f5a524" />
          <circle cx="18" cy="18" r="1.8" fill="#34d399" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-wide text-ink">
          Wendy&apos;s Hot Radar
        </span>
        <span className="block text-[11px] tracking-[0.2em] text-muted">多伦多地产热点雷达</span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-abyss/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="首页">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  active ? "bg-panel2 text-heat" : "text-muted hover:bg-panel hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/subscribe"
            className="ml-2 rounded-lg bg-heat px-4 py-2 text-sm font-semibold text-abyss transition-opacity hover:opacity-90"
          >
            订阅周报
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-muted hover:bg-panel md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-abyss px-4 py-3 md:hidden">
          {[...nav, { href: "/subscribe", label: "订阅周报" }].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm ${
                pathname === n.href ? "bg-panel2 text-heat" : "text-muted hover:bg-panel"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
