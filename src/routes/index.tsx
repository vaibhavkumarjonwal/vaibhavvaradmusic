import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Play, Music, Instagram, Youtube, Twitter, Headphones,
  ArrowRight, Download, Mail, MapPin, Calendar,
  Plus, Minus, ArrowUp, Sparkles, Radio, Mic2,
  Guitar, Volume2, ExternalLink, Send, Star,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/data/site";
import { Particles } from "@/components/Particles";
import { Countdown } from "@/components/Countdown";
import { CounterStat } from "@/components/CounterStat";
import { AudioPreview } from "@/components/AudioPreview";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroCountdown } from "@/components/CountdownBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.brand.name} — ${site.brand.tagline}` },
      { name: "description", content: site.brand.subtitle + " Official website — music, videos, tour dates and press." },
      { property: "og:title", content: `${site.brand.name} — ${site.brand.tagline}` },
      { property: "og:description", content: site.brand.subtitle },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: site.brand.name },
      { name: "twitter:description", content: site.brand.subtitle },
    ],
  }),
  component: Index,
});

function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-0 isolate min-h-screen text-foreground overflow-x-hidden">
      {!loaded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="font-display text-5xl font-black text-gradient animate-pulse-glow">
              {site.brand.logo}
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">Loading</div>
          </div>
        </div>
      )}

      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[51] h-[2px] origin-left"
      >
        <div className="h-full w-full bg-gradient-to-r from-[oklch(0.62_0.24_300)] to-[oklch(0.82_0.15_210)]" />
      </motion.div>

      <Nav />
      <Hero />
      <LatestRelease />
      <VideosSection />
      <AboutSection />
      <ArtistsSection />
      <StatsSection />
      <GallerySection />
      <SocialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

function Nav() {
  const links = [
    ["Home", "#top"],
    ["Videos", "#videos"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-2.5">
          <a href="#top" className="font-display text-sm font-black tracking-tight">
            <span className="text-gradient">{site.brand.logo}</span>
          </a>
          <div className="hidden gap-6 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition hover:text-foreground">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#latest" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition hover:opacity-90">
              <Play className="h-3 w-3 fill-background" /> Play
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={site.brand.heroImage} alt="" className="h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/28 to-background/45 dark:from-background/15 dark:via-background/35 dark:to-background/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.24_300/0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.82_0.15_210/0.1),transparent_60%)]" />
      </div>
      <Particles count={60} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[oklch(0.82_0.15_210)]" />
          {site.brand.tagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="font-display text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl"
        >
          <span className="block text-gradient">vaibhavvaradmusic</span>
        </motion.h1>

        <HeroCountdown />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          {site.brand.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#latest" className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-[1.03] glow-purple">
            <Play className="h-4 w-4 fill-background" /> Listen Now
          </a>
          <a href="#latest" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-foreground/10">
            <Music className="h-4 w-4" /> Latest Release
          </a>
         <a
  href="https://www.instagram.com/vaibhavvaradmusic"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="glass inline-flex items-center justify-center rounded-full px-4 py-3 transition hover:bg-foreground/10"
>
  <Instagram className="h-4 w-4" />
</a>

<a
  href="https://www.youtube.com/@VaibhavVaradMusic"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
  className="glass inline-flex items-center justify-center rounded-full px-4 py-3 transition hover:bg-foreground/10"
>
  <Youtube className="h-4 w-4" />
</a>

<a
  href="https://spotify.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Spotify"
  className="glass inline-flex items-center justify-center rounded-full px-4 py-3 transition hover:bg-foreground/10"
>
  <Headphones className="h-4 w-4" />
</a>  </motion.div>

      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[oklch(0.82_0.15_210)]">{eyebrow}</div>
          )}
          <h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function LatestRelease() {
  const r = site.latest;
  return (
    <Section id="latest" eyebrow="Out Now" title="Latest Release" subtitle={r.description}>
      <div className="glass grid gap-8 rounded-3xl p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square overflow-hidden rounded-2xl glow-purple"
        >
          <img src={r.cover} alt={r.title} className="h-full w-full object-cover" width={800} height={800} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <AudioPreview
            src={r.previewUrl}
            id={`latest-${r.title}`}
            className="absolute bottom-5 left-5"
          />
        </motion.div>
        <div className="flex flex-col justify-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.date}</div>
          <h3 className="mt-2 font-display text-4xl font-black md:text-5xl">{r.title}</h3>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {r.links.map((l) => (
              <a key={l.name} href={l.href} className="glass group inline-flex items-center justify-between rounded-xl px-4 py-3 text-sm transition hover:bg-foreground/10">
                <span>{l.name}</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition group-hover:text-foreground" />
              </a>
            ))}
          </div>
          <a href="#" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background glow-cyan transition hover:scale-[1.03]">
            <Play className="h-4 w-4 fill-background" /> Listen Now
          </a>
        </div>
      </div>
    </Section>
  );
}

function MusicSection() {
  return (
    <Section id="music" eyebrow="Discography" title="Music" subtitle="Every release, one place. Stream on your favorite platform.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.releases.map((r, i) => (
          <motion.article
            key={r.title + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass group relative overflow-hidden rounded-3xl p-4 transition hover:-translate-y-1"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img src={r.cover} alt={r.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-0 m-auto grid place-items-center opacity-100 transition md:opacity-0 md:group-hover:opacity-100 md:focus-within:opacity-100">
                <AudioPreview src={r.previewUrl} id={`release-${r.title}-${i}`} variant="overlay" />
              </div>
            </div>
            <div className="mt-4 min-w-0">
              <h3 className="truncate font-display text-lg font-bold">{r.title}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{r.genre} · {r.duration} · {r.date}</div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {["Spotify","Apple","YT"].map((s) => (
                <span key={s} className="rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">{s}</span>
              ))}
              <button className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground transition hover:text-foreground">Lyrics</button>
              <button className="text-[10px] uppercase tracking-widest text-muted-foreground transition hover:text-foreground">Credits</button>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function VideosSection() {
  return (
    <Section id="videos" eyebrow="Watch" title="Videos" subtitle="Music videos, live performances and behind the scenes.">
      <div className="grid gap-6 md:grid-cols-2">
        {site.videos.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass group overflow-hidden rounded-3xl p-3"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                loading="lazy"
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4">
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg font-bold">{v.title}</h3>
                <div className="text-xs text-muted-foreground">{v.type}</div>
              </div>
              <Youtube className="h-5 w-5 shrink-0 text-muted-foreground" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section id="about" eyebrow="Story" title="About Us" subtitle="Two voices, one signal.">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl glow-purple"
        >
          <img src={site.about.image} alt="Duo" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {site.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-2">
            {site.about.achievements.map((a, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <Sparkles className="h-4 w-4 text-[oklch(0.82_0.15_210)]" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ArtistsSection() {
  return (
    <Section eyebrow="The Duo" title="Meet the Artists">
      <div className="grid gap-8 md:grid-cols-2">
        {site.artists.map((a, i) => (
          <motion.article
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass group overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={a.photo}
                alt={a.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-widest text-[oklch(0.82_0.15_210)]">
                  {a.role}
                </div>

                <h3 className="mt-1 font-display text-3xl font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]">
                  {a.name}
                </h3>
              </div>
            </div>

            <div className="space-y-4 p-6">
              <p className="text-sm text-muted-foreground">
                {a.bio}
              </p>

              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Guitar className="h-4 w-4 shrink-0 text-[oklch(0.82_0.15_210)]" />
                  <span className="truncate">{a.instrument}</span>
                </div>

                {/* <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 shrink-0 text-[oklch(0.62_0.24_300)]" />
                  <span className="truncate">{a.fun}</span>
                </div> */}
              </div>

              <div className="flex gap-2">
                
                
                <a
                  href={a.artistinstagram}
                  aria-label="Instagram"
                  className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 transition hover:bg-foreground/10"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                {/* <a
                  href="#"
                  aria-label="Twitter"
                  className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 transition hover:bg-foreground/10"
                >
                  <Twitter className="h-4 w-4" />
                </a> */}
{/* 
                <a
                  href="#"
                  aria-label="YouTube"
                  className="grid h-9 w-9 place-items-center rounded-full border border-foreground/10 transition hover:bg-foreground/10"
                >
                  <Youtube className="h-4 w-4" />
                </a> */}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function EventsSection() {
  const next = site.events[0];
  return (
    <Section id="events" eyebrow="On Stage" title="Upcoming Events">
      {next && (
        <div className="glass mb-8 grid gap-6 rounded-3xl p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8 glow-purple">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-widest text-[oklch(0.82_0.15_210)]">Next Show — {next.type}</div>
            <h3 className="mt-1 font-display text-3xl font-black md:text-4xl">{next.title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{next.city}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(next.date).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </div>
          <Countdown target={next.date} />
        </div>
      )}
      <div className="grid gap-3">
        {site.events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-6 py-4 transition hover:bg-foreground/5"
          >
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{e.type}</div>
              <div className="truncate font-display text-lg font-bold">{e.title}</div>
              <div className="mt-0.5 truncate text-xs text-muted-foreground">{e.city} · {new Date(e.date).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</div>
            </div>
            <a href="#" className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/10 px-4 py-2 text-xs font-semibold transition hover:bg-foreground hover:text-background">
              RSVP <ArrowRight className="h-3 w-3" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function PressKitSection() {
  return (
    <Section id="press" eyebrow="For Media" title="Press Kit" subtitle="Everything you need to feature us.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {site.pressKit.map((p, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-foreground/5"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground/5">
              <Download className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="truncate font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.size}</div>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function StatsSection() {
  return (
    <Section eyebrow="By the Numbers" title="Statistics">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {site.stats.map((s) => (
          <div
            key={s.label}
            className="glass rounded-3xl p-6 text-center transition hover:scale-[1.02]"
          >
            <div className="font-display text-3xl font-black text-gradient">
              {s.value}
            </div>

            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TimelineSection() {
  return (
    <Section eyebrow="Journey" title="Timeline">
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[oklch(0.62_0.24_300)] via-[oklch(0.82_0.15_210)] to-transparent" />
        <div className="space-y-8">
          {site.timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-12"
            >
              <div className="absolute left-[10px] top-3 h-3 w-3 rounded-full bg-foreground shadow-[0_0_0_4px_color-mix(in_oklab,var(--glow-a)_35%,transparent)]" />
              <div className="glass inline-block rounded-2xl px-5 py-4">
                <div className="font-display text-xs uppercase tracking-widest text-[oklch(0.82_0.15_210)]">{t.year}</div>
                <div className="mt-1 font-display text-xl font-bold">{t.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.body}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function GallerySection() {
  return (
    <Section eyebrow="Frames" title="Gallery">
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {site.gallery.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
          >
            <img src={src} alt="" className="w-full transition duration-700 hover:scale-105" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function MediaSection() {
  return (
    <Section eyebrow="Press" title="Media & Features">
      <div className="grid gap-3 sm:grid-cols-2">
        {site.media.map((m, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-6 py-5 transition hover:bg-foreground/5"
          >
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-widest text-[oklch(0.82_0.15_210)]">{m.source} · {m.date}</div>
              <div className="mt-1 truncate font-display text-lg font-bold">{m.title}</div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function MerchSection() {
  return (
    <Section eyebrow="Coming Soon" title="Merch" subtitle="Limited drops. Designed with the same care as the music.">
      <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.62_0.24_300/0.25),transparent_60%)]" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.4em] text-[oklch(0.82_0.15_210)]">Drop 001</div>
          <h3 className="mt-2 font-display text-4xl font-black md:text-6xl">
            <span className="text-gradient">Coming Soon</span>
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {site.merch.map((m) => (
              <span key={m} className="glass rounded-full px-4 py-2 text-sm">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  return (
    <Section eyebrow="Stay In The Loop" title="Newsletter" subtitle="Early access to releases, tickets and drops.">
      <form
        onSubmit={(e) => { e.preventDefault(); setStatus("ok"); }}
        className="glass mx-auto flex max-w-2xl flex-col gap-3 rounded-3xl p-2 sm:flex-row sm:rounded-full"
      >
        <input
          type="email"
          required
          placeholder="you@youremail.com"
          className="flex-1 rounded-full bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-[1.03]"
        >
          <Send className="h-4 w-4" /> Subscribe
        </button>
      </form>
      {status === "ok" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-sm text-[oklch(0.82_0.15_210)]"
        >
          You're in. Welcome to the signal.
        </motion.div>
      )}
    </Section>
  );
}

function SocialsSection() {
  return (
    <Section eyebrow="Everywhere" title="Follow the Signal">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {site.socials.map((s) => (
          <a
            key={s}
            href="#"
            className="glass group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-2 text-center transition hover:-translate-y-1 hover:bg-foreground/10"
          >
            <Radio className="h-5 w-5 text-muted-foreground transition group-hover:text-foreground" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-foreground">{s}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact" eyebrow="Say Hello" title="Contact & Booking">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <a href={`mailto:${site.contact.business}`} className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:bg-foreground/5">
            <Mail className="h-5 w-5 shrink-0 text-[oklch(0.82_0.15_210)]" />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Business</div>
              <div className="truncate font-semibold">{site.contact.business}</div>
            </div>
          </a>
          {/* <a href={`mailto:${site.contact.management}`} className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:bg-foreground/5">
            <Mic2 className="h-5 w-5 shrink-0 text-[oklch(0.62_0.24_300)]" />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Management</div>
              <div className="truncate font-semibold">{site.contact.management}</div>
            </div>
          </a> */}
          <div className="glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
            <div className="mt-1 font-semibold">Kerala · Gujarat, India</div>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="glass grid gap-3 rounded-3xl p-6"
        >
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Booking / Collaboration</div>
          <input placeholder="Your name" className="rounded-xl border border-foreground/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground/30" />
          <input placeholder="Email" type="email" className="rounded-xl border border-foreground/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground/30" />
          <select className="rounded-xl border border-foreground/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-foreground/30">
            <option className="bg-background text-foreground">Booking</option>
            <option className="bg-background text-foreground">Collaboration</option>
            <option className="bg-background text-foreground">Press</option>
            <option className="bg-background text-foreground">Other</option>
          </select>
          <textarea rows={4} placeholder="Tell us about your project…" className="rounded-xl border border-foreground/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground/30" />
          <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-[1.02]">
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </Section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="Q&A" title="Frequently Asked">
      <div className="mx-auto max-w-3xl space-y-3">
        {site.faq.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="glass rounded-2xl">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg font-semibold">{f.q}</span>
                {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-foreground/5 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <div className="font-display text-3xl font-black text-gradient">{site.brand.logo}</div>
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
}