import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export function HeroCountdown() {
  const cfg = site.releaseCountdown;

  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(0);

  useEffect(() => {
    if (!cfg.enabled) return;

    setMounted(true);

    const update = () => setNow(Date.now());

    update();

    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, [cfg.enabled]);

  if (!cfg.enabled) return null;

  // Prevent SSR hydration mismatch
  if (!mounted) {
    return (
      <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.62_0.24_300)]" />
          {cfg.label} · <span className="text-foreground/90">{cfg.title}</span>
        </div>

        <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 sm:gap-3 sm:px-4">
          <Unit v="--" label="Days" />
          <Colon />
          <Unit v="--" label="Hours" />
          <Colon />
          <Unit v="--" label="Min" />
          <Colon />
          <Unit v="--" label="Sec" />
        </div>
      </div>
    );
  }

  const target = new Date(cfg.date).getTime();
  const diff = target - now;
  const isLive = diff <= 0;

  const days = Math.max(0, Math.floor(diff / 86400000));
  const hours = Math.max(0, Math.floor((diff / 3600000) % 24));
  const mins = Math.max(0, Math.floor((diff / 60000) % 60));
  const secs = Math.max(0, Math.floor((diff / 1000) % 60));

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3">
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
        <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[oklch(0.62_0.24_300)]" />
        {cfg.label} · <span className="text-foreground/90">{cfg.title}</span>
      </div>

      {isLive ? (
        <a
          href={cfg.cta.href}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs font-bold uppercase tracking-widest text-background transition hover:scale-105"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.65_0.22_20)]" />
          {cfg.liveLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 sm:gap-3 sm:px-4">
          <Unit v={pad(days)} label="Days" />
          <Colon />
          <Unit v={pad(hours)} label="Hours" />
          <Colon />
          <Unit v={pad(mins)} label="Min" />
          <Colon />
          <Unit v={pad(secs)} label="Sec" />
        </div>
      )}
    </div>
  );
}

function Unit({ v, label }: { v: string; label: string }) {
  return (
    <div className="min-w-[44px] text-center sm:min-w-[56px]">
      <div className="font-display text-2xl font-black leading-none tabular-nums sm:text-3xl">
        {v}
      </div>
      <div className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Colon() {
  return (
    <span className="font-display text-xl text-muted-foreground/40 sm:text-2xl">
      :
    </span>
  );
}