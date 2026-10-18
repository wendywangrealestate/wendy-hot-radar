import SubscribeForm from "@/components/SubscribeForm";

const preview = [
  {
    title: "一周关键数据",
    desc: "TRREB 最新成交、房价、库存去化，一张表看懂本周市场水温。",
  },
  {
    title: "利率动向",
    desc: "央行议息日历、债券收益率变化、固定/浮动利率怎么选，一句话点透。",
  },
  {
    title: "Wendy 本周判断",
    desc: "只讲一条：本周最重要的一个市场信号，以及它对买家/卖家的意义。",
  },
];

export default function SubscribePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.35em] text-radar">每周五早上 · 免费</p>
      <h1 className="mt-3 text-3xl font-black leading-tight text-ink">
        《Wendy 每周市场速览》
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        不用每天刷新闻。每周五早上，一封邮件把 GTA 楼市一周的变化讲清楚：
        数据发生了什么、利率在往哪走、本周最值得注意的一个判断。
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {preview.map((p) => (
          <div key={p.title} className="rounded-xl border border-line bg-panel p-4">
            <p className="text-sm font-bold text-heat">{p.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <SubscribeForm />
      </div>
    </div>
  );
}
