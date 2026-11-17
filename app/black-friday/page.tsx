import type { Metadata } from "next";
export const metadata: Metadata = { title: "Black Friday 2026 | Wendy's Hot Radar", description: "加拿大黑五商场与品牌官方优惠入口，持续核验折扣信息。" };
const groups = [
 {zh:"商场",en:"Shopping malls",items:[["CF Toronto Eaton Centre","https://shops.cadillacfairview.com/property/cf-toronto-eaton-centre"],["Yorkdale","https://yorkdale.com/"],["CF Markville","https://shops.cadillacfairview.com/property/cf-markville"],["Scarborough Town Centre","https://scarboroughtowncentre.com/"],["Vaughan Mills","https://www.vaughanmills.com/"]]},
 {zh:"服装鞋包",en:"Fashion",items:[["Nike Canada","https://www.nike.com/ca/"],["lululemon","https://shop.lululemon.com/en-ca/"],["Coach Outlet","https://ca.coachoutlet.com/"]]},
 {zh:"电子产品",en:"Electronics",items:[["Best Buy Canada","https://www.bestbuy.ca/"],["Apple Canada","https://www.apple.com/ca/"],["Samsung Canada","https://www.samsung.com/ca/"]]},
 {zh:"家居家电",en:"Home & appliances",items:[["Dyson Canada","https://www.dysoncanada.ca/"],["Canadian Tire","https://www.canadiantire.ca/"],["Walmart Canada","https://www.walmart.ca/"]]},
 {zh:"美妆护肤",en:"Beauty",items:[["Sephora Canada","https://www.sephora.com/ca/en/"],["Shoppers Drug Mart","https://www.shoppersdrugmart.ca/"]]},
 {zh:"Costco",en:"Costco",items:[["Costco Canada","https://www.costco.ca/"]]}
] as const;
export default function BlackFridayPage() {
 return <main className="mx-auto max-w-6xl px-5 py-12">
  <a href="/" className="text-sm underline underline-offset-4">← Wendy's Hot Radar</a>
  <div className="mt-10 rounded-3xl border border-amber-500/30 bg-amber-500/10 p-7">
   <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">Black Friday · Canada · 2026</p>
   <h1 className="mt-3 text-4xl font-bold">黑五折扣雷达 <span className="block text-2xl mt-2">Black Friday Deal Radar</span></h1>
   <p className="mt-4 max-w-2xl text-sm leading-7">追踪 GTA 商场、服装鞋包、电子产品、家居家电、美妆护肤和 Costco。2026 年 Black Friday：11 月 27 日；Cyber Monday：11 月 30 日。</p>
   <p className="mt-3 text-sm font-medium">目前为官方入口预览版，尚未接入自动价格核验；下列链接不代表已有黑五折扣。 / Official store directory preview. Live price verification is not enabled yet.</p>
  </div>
  <div className="mt-10 grid gap-6 md:grid-cols-2">
   {groups.map(g=><section key={g.zh} className="rounded-2xl border border-white/15 p-6">
    <h2 className="text-xl font-semibold">{g.zh} <span className="text-sm font-normal opacity-70">{g.en}</span></h2>
    <ul className="mt-4 space-y-3">{g.items.map(([name,url])=><li key={name} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
     <span>{name}</span><a className="shrink-0 text-amber-500 underline underline-offset-4" href={url} target="_blank" rel="noopener noreferrer">官方网站 ↗</a>
    </li>)}</ul>
   </section>)}
  </div>
  <p className="mt-10 text-xs opacity-70">优惠价格、库存和适用条件以商家官方页面为准。所有商品价格以 CAD 计价（如有展示）。</p>
 </main>;
}
