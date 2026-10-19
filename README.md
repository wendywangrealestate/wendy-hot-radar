# Wendy's Hot Radar · 多伦多地产热点雷达

Wendy Wang 的个人品牌站：每日精选的 GTA 地产动态信息流（附热度与 Wendy 点评）、
深度市场报告、AI 问答助手、每周市场速览订阅。

设计灵感来自中文开源项目 [AI Hot Radar](https://github.com/linruibang19-home/ai-hot-radar)
（每日精选 + 热度 + 推荐理由的信息流体验）；本站为**完全原创实现**，
未使用该项目的任何代码（该项目未声明开源许可证，默认保留所有权利）。

## 页面

| 路由 | 说明 |
|---|---|
| `/` | 首页：雷达 hero + 数据条 + 按日期分组的精选信息流 |
| `/reports` | 市场报告列表（月度/利率/板块深读） |
| `/reports/[slug]` | 报告全文，含关键数据卡片 |
| `/ask` | 问 Wendy AI：聊天式问答 |
| `/subscribe` | 订阅《每周市场速览》 |
| `/about` | 关于 Wendy：简介、服务、联系方式 |

## 本地运行

```bash
npm install
cp .env.example .env   # 按需填入下面的 key
npm run dev            # http://localhost:3000
```

## 环境变量（`.env`）

| 变量 | 用途 | 不填会怎样 |
|---|---|---|
| `GROQ_API_KEY` | 问 AI 功能（Groq 免费创建，优先使用） | 两个都不填则用内置知识库关键词兜底作答，页面照常可用 |
| `GEMINI_API_KEY` | 问 AI 功能（Google AI Studio 免费创建，备用） | 同上 |
| `NEXT_PUBLIC_SUPABASE_URL` | 订阅功能 | 订阅页提示"系统接入中" |
| `SUPABASE_ANON_KEY` | 订阅功能 | 同上 |

## 部署到 Vercel（推荐）

1. 把本仓库 push 到 GitHub（如 `wendywangrealestate/wendy-hot-radar`）。
2. Vercel → Add New Project → Import 该仓库，一路默认即可。
3. 在 Vercel Project → Settings → Environment Variables 填入上面的环境变量。
4. Supabase：建项目后在 SQL Editor 执行 `supabase/migrations/001_subscribers.sql`，
   再把 Project URL / anon key 填进 Vercel 环境变量。
5. 问 AI 的 API Key（二选一，Groq 优先）：Groq 控制台（https://console.groq.com）创建 API Key
   填入 `GROQ_API_KEY`；或 Google AI Studio（https://aistudio.google.com）创建后填入 `GEMINI_API_KEY`。

## 内容更新

- 每日情报：编辑 `data/radar.ts`（按 `RadarItem` 格式追加，首页自动按日期分组）。
- 市场报告：编辑 `data/reports.ts`。
- AI 知识库：编辑 `data/knowledge.ts`（`marketFacts` 会同时用于 Gemini grounding 与无 key 兜底）。

## 技术栈

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Supabase（订阅）· Google Gemini（问答，可选）
