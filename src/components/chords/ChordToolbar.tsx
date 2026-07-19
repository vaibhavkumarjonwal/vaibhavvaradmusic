import { Minus, Plus, Type, ScrollText, Gauge } from "lucide-react";

type Props = {
  transpose: number;
  setTranspose: (v: number) => void;

  fontSize: number;
  setFontSize: (v: number) => void;

  autoScroll: boolean;
  setAutoScroll: (v: boolean) => void;

  scrollSpeed: number;
  setScrollSpeed: (v: number) => void;
};

export default function ChordToolbar({
  transpose,
  setTranspose,
  fontSize,
  setFontSize,
  autoScroll,
  setAutoScroll,
  scrollSpeed,
  setScrollSpeed,
}: Props) {
  return (
   <div className="rounded-3xl border border-foreground/10 bg-background/90 p-5 shadow-xl backdrop-blur-xl">
      <div className="rounded-3xl border border-foreground/10 bg-background/90 p-5 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Transpose */}
          {/* Transpose */}
<div className="flex items-center gap-3">
  <span className="text-sm font-semibold">Transpose</span>

  <button
    onClick={() => setTranspose(Math.max(-12, transpose - 1))}
    disabled={transpose <= -12}
    className="rounded-full border border-foreground/10 p-2 transition hover:bg-foreground/10 disabled:cursor-not-allowed disabled:opacity-40"
  >
    <Minus size={16} />
  </button>

  <div className="w-10 text-center font-bold">
    {transpose > 0 ? "+" : ""}
    {transpose}
  </div>

  <button
    onClick={() => setTranspose(Math.min(12, transpose + 1))}
    disabled={transpose >= 12}
    className="rounded-full border border-foreground/10 p-2 transition hover:bg-foreground/10 disabled:cursor-not-allowed disabled:opacity-40"
  >
    <Plus size={16} />
  </button>
</div>
          {/* Font Size */}
          <div className="flex items-center gap-3">
            <Type size={18} />

            <input
              type="range"
              min={14}
              max={32}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-36"
            />

            <span className="w-10 text-sm">{fontSize}px</span>
          </div>

          {/* Scroll Speed */}
          <div className="flex items-center gap-3">
            <Gauge size={18} />

            <input
              type="range"
              min={1}
              max={8}
              value={scrollSpeed}
              onChange={(e) => setScrollSpeed(Number(e.target.value))}
              className="w-28"
            />

            <span className="w-6 text-sm">{scrollSpeed}</span>
          </div>

          {/* Auto Scroll */}
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium transition ${
              autoScroll
                ? "bg-red-500 text-white hover:bg-red-600"
                : "border border-foreground/10 hover:bg-foreground/10"
            }`}
          >
            <ScrollText size={18} />
            {autoScroll ? "Stop Scroll" : "Auto Scroll"}
          </button>
        </div>
      </div>
    </div>
  );
}