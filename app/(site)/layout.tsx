import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 站内页面：带导航与页脚
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
