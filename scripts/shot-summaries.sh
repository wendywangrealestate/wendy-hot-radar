#!/bin/bash
# 生成全部总结图：启动生产服务器，用 headless Chromium 逐页截图
# 用法：bash scripts/shot-summaries.sh
set -e
cd "$(dirname "$0")/.."

IDS="trreb-sep-2026 boc-oct28-preview condo-buyers-market rlp-q3-2026 to-municipal-election 416-detached-rebound fixed-rates-climb precon-gap-38pct sa-september-weaker report-gta-september-2026 report-boc-october-2026-preview report-condo-q3-2026"

PORT=3100
(npm run start -- -p $PORT >/tmp/radar-shot.log 2>&1 &)
for i in $(seq 1 30); do
  curl -sf -o /dev/null http://localhost:$PORT/ && break
  sleep 1
done

CHROME=/opt/meta-chromium/chrome
for id in $IDS; do
  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --window-size=1080,1350 --force-device-scale-factor=1 \
    --screenshot="public/summaries/${id}.png" \
    "http://localhost:$PORT/summaries/${id}" >/dev/null 2>&1
  echo "shot: ${id}.png"
done

pkill -f "next-server" 2>/dev/null || true
ls -la public/summaries/
