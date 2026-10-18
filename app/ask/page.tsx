import Chat from "@/components/Chat";

export default function AskPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-black text-ink">问 Wendy AI</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        一个读过本站全部市场情报的 AI 助手：房市数据、利率走势、买卖流程都可以问。
        回答基于公开市场数据并注明来源时间；涉及个人决策时，它会提醒你咨询持牌专业人士。
      </p>
      <div className="mt-6">
        <Chat />
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        提示：AI 回答仅供信息参考，不构成财务、法律或税务建议。复杂个案请直接邮件联系 Wendy：
        wendywang.realestate@gmail.com
      </p>
    </div>
  );
}
