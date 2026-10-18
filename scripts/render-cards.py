#!/usr/bin/env python3
# 渲染总结图：1080x1350 PNG，深色雷达品牌风，中文用 Noto Sans CJK 精确排版
import json, os
from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1350
ABYSS = (7, 11, 20)
PANEL = (17, 27, 49)
LINE = (30, 42, 68)
HEAT = (245, 165, 36)
RADAR = (52, 211, 153)
INK = (232, 237, 247)
MUTED = (147, 160, 184)

BOLD = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"
REG = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"

def font(path, size):
    return ImageFont.truetype(path, size, index=2)  # SC

def wrap(draw, text, fnt, max_w):
    lines, cur = [], ""
    for ch in text:
        if draw.textlength(cur + ch, font=fnt) <= max_w:
            cur += ch
        else:
            lines.append(cur)
            cur = ch
    if cur:
        lines.append(cur)
    return lines

def tracked(draw, xy, text, fnt, fill, spacing=8):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + spacing
    return x

def render(card, out):
    img = Image.new("RGB", (W, H), ABYSS)
    d = ImageDraw.Draw(img, "RGBA")

    # 背景雷达纹（右上）
    cx, cy = W + 120, -120
    for r in (220, 340, 460):
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(52, 211, 153, 26), width=2)
    d.ellipse([cx - 340 - 7, cy + 120 - 7, cx - 340 + 7, cy + 120 + 7], fill=(245, 165, 36, 200))
    d.ellipse([cx - 220 - 5, cy - 200 - 5, cx - 220 + 5, cy - 200 + 5], fill=(52, 211, 153, 160))
    # 左下淡圈
    d.ellipse([-260, H - 260, 220, H + 220], outline=(30, 42, 68, 120), width=2)

    x0, x1 = 72, W - 72
    y = 64

    # 顶栏
    d.text((x0, y), "Wendy's Hot Radar", font=font(BOLD, 46), fill=INK)
    y += 62
    tracked(d, (x0, y), "多伦多地产热点雷达", font(REG, 28), MUTED, spacing=10)
    ds = card["date"].replace("-", ".")
    f_date = font(REG, 26)
    d.text((x1 - d.textlength(ds, font=f_date), 70), ds, font=f_date, fill=MUTED)
    y += 56

    # 标签行
    y += 34
    f_kick = font(BOLD, 30)
    kw = d.textlength(card["kicker"], font=f_kick)
    d.rounded_rectangle([x0, y, x0 + kw + 44, y + 58], radius=29, fill=HEAT)
    d.text((x0 + 22, y + 9), card["kicker"], font=f_kick, fill=ABYSS)
    if card.get("heat") is not None:
        f_heat = font(BOLD, 28)
        ht = f'{card["heat"]} 热度'
        d.text((x1 - d.textlength(ht, font=f_heat), y + 12), ht, font=f_heat, fill=HEAT)
    y += 58

    # 标题
    y += 36
    f_title = font(BOLD, 60)
    for line in wrap(d, card["title"], f_title, x1 - x0)[:3]:
        d.text((x0, y), line, font=f_title, fill=INK)
        y += 78

    # 关键点
    y += 34
    f_pt, f_num = font(BOLD, 34), font(BOLD, 26)
    for i, p in enumerate(card["points"][:4]):
        cy0 = y + 26
        d.ellipse([x0, cy0 - 26, x0 + 52, cy0 + 26], outline=HEAT, width=3)
        num = str(i + 1)
        d.text((x0 + 26 - d.textlength(num, font=f_num) / 2, cy0 - 19), num, font=f_num, fill=HEAT)
        tx = x0 + 76
        lines = wrap(d, p, f_pt, x1 - tx)[:2]
        for ln in lines:
            d.text((tx, y), ln, font=f_pt, fill=INK)
            y += 48
        y += 18

    # 点评框
    y += 26
    box_h = 300
    d.rounded_rectangle([x0, y, x1, y + box_h], radius=18, fill=PANEL)
    d.rectangle([x0, y + 14, x0 + 6, y + box_h - 14], fill=HEAT)
    tracked(d, (x0 + 34, y + 26), card["noteLabel"], font(BOLD, 24), HEAT, spacing=8)
    f_note = font(REG, 30)
    ny = y + 68
    for line in wrap(d, card["note"], f_note, x1 - x0 - 68)[:4]:
        d.text((x0 + 34, ny), line, font=f_note, fill=(232, 237, 247, 235))
        ny += 50

    # 底栏
    fy = H - 96
    d.line([x0, fy, x1, fy], fill=LINE, width=2)
    f_f = font(REG, 24)
    d.text((x0, fy + 22), f'信源：{card["source"]}', font=f_f, fill=MUTED)
    rt = "每周五 · Wendy 每周市场速览"
    d.text((x1 - d.textlength(rt, font=f_f), fy + 22), rt, font=f_f, fill=RADAR)

    img.save(out)
    print("rendered", out)

def main():
    cards = json.load(open("/tmp/cards.json"))
    os.makedirs(os.path.expanduser("~/workspace/wendy-hot-radar/public/summaries"), exist_ok=True)
    for c in cards:
        render(c, os.path.expanduser(f"~/workspace/wendy-hot-radar/public/summaries/{c['file']}"))

if __name__ == "__main__":
    main()
