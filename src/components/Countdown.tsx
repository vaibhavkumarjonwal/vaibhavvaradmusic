import { useEffect, useState } from "react";

export function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());

    update(); // set immediately after mount

    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Don't render until mounted
  if (now === null) {
    return (
      <div className="flex gap-3">
        {["Days", "Hours", "Min", "Sec"].map((label) => (
          <div
            key={label}
            className="glass rounded-2xl px-4 py-3 text-center min-w-[70px]"
          >
            <div className="font-display text-2xl font-bold tabular-nums">
              --
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const diff = Math.max(0, new Date(target).getTime() - now);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const mins = Math.floor((diff / 60000) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const items = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Min", value: mins },
    { label: "Sec", value: secs },
  ];

  return (
    <div className="flex gap-3">
      {items.map((i) => (
        <div
          key={i.label}
          className="glass rounded-2xl px-4 py-3 text-center min-w-[70px]"
        >
          <div className="font-display text-2xl font-bold tabular-nums">
            {String(i.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );
}