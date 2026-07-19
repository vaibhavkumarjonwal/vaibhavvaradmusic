import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Music2 } from "lucide-react";

import {
  Play, Music, Instagram, Youtube, Twitter, Headphones,
  ArrowRight, Download, Mail, MapPin, Calendar,
  Plus, Minus, ArrowUp, Sparkles, Radio, Mic2,
  Guitar, Volume2, ExternalLink, Send, Star,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroCountdown } from "@/components/CountdownBanner";
import Logo from "@/assets/Vector.svg?react";





import cover from "@/assets/TumAayeHoArtwork-1600px_Final2.png";

import ChordToolbar from "@/components/chords/ChordToolbar";
import SongRenderer from "@/components/chords/SongRenderer";

export const Route = createFileRoute("/chords")({
  component: ChordsPage,
});

function ChordsPage() {
    const toolbarRef = useRef<HTMLDivElement>(null);
    const [toolbarFixed, setToolbarFixed] = useState(false);
    const DEFAULT_TRANSPOSE = 1;
  const [transpose, setTranspose] = useState(0);
  const [fontSize, setFontSize] = useState(20);
  const [autoScroll, setAutoScroll] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(2);
  

  useEffect(() => {
  const onScroll = () => {
    if (!toolbarRef.current) return;

    const top = toolbarRef.current.getBoundingClientRect().top;

    setToolbarFixed(top <= 90); // 90px = navbar height
  };

  window.addEventListener("scroll", onScroll);
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);


useEffect(() => {
  if (!autoScroll) return;

  let rafId: number;
  let lastTime: number | null = null;
  let accumulated = 0;

  const step = (time: number) => {
    if (lastTime === null) lastTime = time;
    const delta = time - lastTime;
    lastTime = time;

    accumulated += (scrollSpeed * delta) / 16;

    if (accumulated >= 1) {
      const pixels = Math.floor(accumulated);
      accumulated -= pixels;

      const doc = document.documentElement;
      const nextY = window.scrollY + pixels;

      // behavior: "instant" overrides the global CSS scroll-behavior: smooth,
      // which is what was breaking rapid programmatic scrolling on iOS Safari
       window.scrollTo({ top: nextY, left: 0, behavior: "instant" } as ScrollToOptions);

      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        setAutoScroll(false);
        return;
      }
    }

    rafId = requestAnimationFrame(step);
  };

  rafId = requestAnimationFrame(step);
  return () => cancelAnimationFrame(rafId);
}, [autoScroll, scrollSpeed]);
return (
  <>
    <Nav />

    <main className="relative min-h-screen overflow-x-hidden bg-background pt-28 text-foreground">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[oklch(0.62_0.24_300/0.15)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.82_0.15_210/0.12)] blur-3xl" />
      </div>

     <div className="mx-auto max-w-7xl px-6 py-12">
  <Link
    to="/"
    className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm transition hover:bg-foreground/10"
  >
    <ArrowLeft className="h-4 w-4" />
    Back Home
  </Link>

  <div className="glass mt-10 grid gap-10 rounded-3xl p-6 md:grid-cols-[340px_1fr] md:p-8">
    <img
      src={cover}
      alt="Tum Aaye Ho Artwork"
      className="w-full rounded-2xl shadow-2xl"
    />

    <div className="flex flex-col justify-center">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/30 px-4 py-2 text-sm">
        <Music2 className="h-4 w-4" />
        Official Guitar Chords
      </div>

      <h1 className="mt-6 font-display text-6xl font-black">
        Tum Aaye Ho
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">
        by vaibhavvaradmusic
      </p>

     <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4 items-stretch">
  <Info title="Orignal Key" value="D# Major" />
  <Info title="Capo" value="1st Fret" />
  <Info title="Tuning" value="Standard" />
  <Info title="Difficulty" value="Intermediate" />
</div>
    </div>
  </div>

<div ref={toolbarRef} className="mt-6">
  {toolbarFixed && <div className="h-20" />}

  <div
    className={
      toolbarFixed
        ? "fixed top-24 left-0 right-0 z-50"
        : ""
    }
  >
    <div className="mx-auto max-w-7xl px-6">
      <ChordToolbar
        transpose={transpose}
        setTranspose={setTranspose}
        fontSize={fontSize}
        setFontSize={setFontSize}
        autoScroll={autoScroll}
        setAutoScroll={setAutoScroll}
        scrollSpeed={scrollSpeed}
        setScrollSpeed={setScrollSpeed}
      />
    </div>
  </div>
</div>

  <div className="glass mt-8 rounded-3xl p-8">
   <SongRenderer
  transpose={transpose + DEFAULT_TRANSPOSE}
  fontSize={fontSize}
/>
  </div>
</div>
    </main>

    <Footer />
    <BackToTop />
  </>
);
function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex h-full min-w-0 flex-col items-center justify-center rounded-2xl border border-foreground/10 p-4 text-center sm:p-5">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
        {title}
      </div>

      <div className="mt-2 w-full break-words text-base font-bold leading-tight sm:text-lg">
        {value}
      </div>
    </div>
  );
}
function Nav() {
 const links = [
  ["Home", "/"],
  ["Videos", "/#videos"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-2.5">
    <Link to="/" className="flex items-center">
  <Logo className="h-10 w-auto text-primary" />
</Link>
          <div className="hidden gap-6 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition hover:text-foreground">
                {label}
              </a>
            ))}
          </div>
         <div className="flex items-center gap-2">
  <ThemeToggle />
</div>
        </nav>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="relative border-t border-foreground/5 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <div className="font-display text-3xl font-black text-gradient"><Logo className="h-10 w-auto text-primary" /></div>
            <div className="mt-2 text-sm text-muted-foreground">{site.brand.name} · {site.brand.subtitle}</div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#videos" className="hover:text-foreground">Videos</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-foreground/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {site.brand.name}. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5"><Volume2 className="h-3 w-3" /> Made with Love for music.</div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`glass fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full transition ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}}
