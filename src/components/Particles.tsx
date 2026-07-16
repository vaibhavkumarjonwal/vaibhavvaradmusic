import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 10,
        purple: Math.random() > 0.5,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: d.purple ? "oklch(0.62 0.24 300)" : "oklch(0.82 0.15 210)",
            boxShadow: `0 0 ${d.size * 6}px ${d.purple ? "oklch(0.62 0.24 300)" : "oklch(0.82 0.15 210)"}`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}