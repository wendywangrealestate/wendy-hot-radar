import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wendy's Hot Radar · 多伦多地产热点雷达",
  description:
    "Wendy Wang 每日精选的多伦多 GTA 地产动态：市场数据、利率追踪、政策解读，附 Wendy 点评；AI 问答 + 每周市场速览订阅。",
  keywords: ["多伦多地产", "GTA房市", "Toronto real estate", "Wendy Wang", "房价", "利率"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-abyss text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
