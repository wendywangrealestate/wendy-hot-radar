"use client";

import { useEffect, useRef, useState } from "react";

// 首页语音播报：打开页面先尝试自动播放（浏览器策略允许时）；
// 被拦截时改为访客第一次点击/按键时自动开始，并始终提供手动播放按钮。
export default function BriefingPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let kick: (() => void) | null = null;
    const armFallback = () => {
      kick = () => {
        audio.play().catch(() => {});
      };
      window.addEventListener("pointerdown", kick, { once: true });
      window.addEventListener("keydown", kick, { once: true });
    };

    const attempt = audio.play();
    if (attempt) {
      attempt.catch(armFallback);
    } else {
      armFallback();
    }

    return () => {
      if (kick) {
        window.removeEventListener("pointerdown", kick);
        window.removeEventListener("keydown", kick);
      }
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <div className="mt-8 max-w-xl">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        className="inline-flex items-center gap-2 rounded-full border border-heat/60 bg-panel/80 px-5 py-2.5 text-sm font-bold text-heat shadow-lg shadow-black/30 transition-colors hover:border-heat hover:bg-panel"
      >
        <span aria-hidden="true">{playing ? "⏸" : "▶"}</span>
        {playing ? "暂停播报" : "语音播报 · 听 Wendy 念 9 月速报（约 23 秒）"}
      </button>
      <audio
        ref={audioRef}
        src="/briefing-2026-09.mp3"
        preload="metadata"
        controls
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="mt-3 w-full max-w-md"
      />
      <p className="mt-2 text-xs text-muted">
        声音：Wendy Wang 本人克隆声{started ? "" : " · 打开页面若未自动出声，点任意处即可播放"}
      </p>
    </div>
  );
}
