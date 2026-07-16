import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const PREVIEW_SECONDS = 30;

// Simple global registry so only one preview plays at a time.
const listeners = new Set<(id: string | null) => void>();
let activeId: string | null = null;
function setActive(id: string | null) {
  activeId = id;
  listeners.forEach((l) => l(id));
}

type Props = {
  src: string;
  id: string;
  variant?: "pill" | "overlay";
  className?: string;
};

export function AudioPreview({ src, id, variant = "pill", className = "" }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const listener = (activeIdNow: string | null) => {
      if (activeIdNow !== id && audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [id]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (activeId === id) setActive(null);
    };
  }, [id]);

  const toggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.preload = "none";
      audioRef.current.addEventListener("timeupdate", () => {
        const a = audioRef.current!;
        setProgress(Math.min(1, a.currentTime / PREVIEW_SECONDS));
        if (a.currentTime >= PREVIEW_SECONDS) {
          a.pause();
          a.currentTime = 0;
          setPlaying(false);
          setProgress(0);
          if (activeId === id) setActive(null);
        }
      });
      audioRef.current.addEventListener("pause", () => setPlaying(false));
      audioRef.current.addEventListener("play", () => setPlaying(true));
      audioRef.current.addEventListener("ended", () => {
        setPlaying(false);
        setProgress(0);
      });
    }
    if (audioRef.current.paused) {
      setActive(id);
      try {
        await audioRef.current.play();
      } catch {
        /* autoplay blocked, ignore */
      }
    } else {
      audioRef.current.pause();
    }
  };

  if (variant === "overlay") {
    return (
      <div className={`relative flex h-full w-full items-center justify-center ${className}`}>
        <button
          onClick={toggle}
          aria-label={playing ? "Pause preview" : "Play 30 second preview"}
          className="grid h-14 w-14 place-items-center rounded-full bg-foreground text-background transition glow-purple hover:scale-105"
        >
          {playing ? <Pause className="h-5 w-5 fill-black" /> : <Play className="h-5 w-5 fill-black" />}
        </button>
        <div className="glass absolute bottom-3 left-1/2 flex h-6 -translate-x-1/2 items-center rounded-full px-3">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/80 tabular-nums">
            {playing
              ? `${Math.max(0, Math.ceil(PREVIEW_SECONDS - progress * PREVIEW_SECONDS))}s`
              : "30s Preview"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause preview" : "Play a preview"}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background transition hover:scale-105 ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 bg-[color-mix(in_oklab,var(--glow-b)_45%,transparent)] transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
      <span className="relative inline-flex items-center gap-2">
        {playing ? <Pause className="h-3 w-3 fill-black" /> : <Play className="h-3 w-3 fill-black" />}
        {playing ? "Playing" : "Preview"}
      </span>
    </button>
  );
}