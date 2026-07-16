import hero from "@/assets/herodp.png";
import cover1 from "@/assets/TumAayeHoArtwork-1600px_Final2.png";
import artist1 from "@/assets/virus.jpg";
import artist2 from "@/assets/varad.jpeg";
import mp3 from "@/assets/Sample.mp3";
export const site = {
  brand: {
    name: "vaibhavvaradmusic",
    tagline: "Independent Music Duo",
    subtitle: "Creating Indie Music.",
    heroImage: hero,
    logo: "VV",
  },
  releaseCountdown: {
    enabled: true,
    title: "Tum Aaye Ho",
    label: "New Single",
    // ISO 8601 with timezone — 20 July 2026, 00:00 IST
    date: "2026-07-20T00:00:00+05:30",
    cta: { label: "Pre-save", href: "#latest" },
    liveLabel: "Coming Soon",
  },
  hero: {
    ctas: [
      { label: "Listen Now", href: "#latest", icon: "play", variant: "primary" as const },
      { label: "Latest Release", href: "#latest", icon: "music", variant: "ghost" as const },
      { label: "Instagram", href: "https://www.instagram.com/vaibhavvaradmusic", icon: "instagram", variant: "ghost" as const },
      { label: "YouTube", href: "https://www.youtube.com/@VaibhavVaradMusic", icon: "youtube", variant: "ghost" as const },
      { label: "Spotify", href: "https://spotify.com", icon: "spotify", variant: "ghost" as const },
    ],
  },
  latest: {
    title: "Tum Aaye Ho",
    date: "2026 · Single",
    cover: cover1,
    description: "The lead single from our upcoming EP — a cinematic blend of Indian pop and electronic textures.",
    previewUrl: mp3,
    links: [
      { name: "Spotify", href: "#" },
      { name: "Apple Music", href: "#" },
      { name: "YouTube Music", href: "#" },
      { name: "Amazon Music", href: "#" },
      { name: "JioSaavn", href: "#" },
      { name: "Gaana", href: "#" },
      { name: "Wynk", href: "#" },
      { name: "SoundCloud", href: "#" },
      { name: "Bandcamp", href: "#" },
    ],
  },
  releases: [
    { title: "Neon Monsoon", cover: cover1, genre: "Indian Pop", duration: "3:42", date: "2026", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
   // { title: "Midnight Signal", cover: cover2, genre: "Electronic", duration: "4:11", date: "2025", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    //{ title: "Skyline Dreams", cover: cover3, genre: "Cinematic Pop", duration: "3:28", date: "2025", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    //{ title: "Velvet Hours", cover: cover1, genre: "Alt Pop", duration: "3:55", date: "2024", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    //{ title: "Paper Planes", cover: cover2, genre: "Indie", duration: "4:02", date: "2024", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    //{ title: "Static Bloom", cover: cover3, genre: "Electronic", duration: "3:37", date: "2023", previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  ],
  videos: [
    { title: "Glimpse of Tum Aaye Ho", type: "Youtube Short", id: "3RsscziFC0E" },
    //{ title: "Midnight Signal — Lyric Video", type: "Lyric Video", id: "dQw4w9WgXcQ" },
    //{ title: "Live at Mumbai Arena", type: "Live", id: "dQw4w9WgXcQ" },
    //{ title: "Studio Sessions", type: "BTS", id: "dQw4w9WgXcQ" },
  ],
  about: {
    image: hero,
    paragraphs: [
      "vaibhavvaradmusic is an independent Indian music duo weaving cinematic pop with classical touch and roots-inspired melodies.",
      "Formed in 2026, the duo has been quietly building a distinct voice — one that feels equally at home in a headphone.",
      "Influenced by The Amit Trivedi, Kaavish, Prateek Kuhad and A.R. Rahman, they craft songs designed for the modern listener while carrying the emotional weight of a film score.",
    ],
    achievements: [
      //"3M+ streams across platforms",
      //"Editorial features on Spotify India & Apple Music",
      //"Sold-out debut show in Mumbai",
      //"Featured artists — NH7 Weekender",
    ],
  },
  artists: [
    {
      name: "Vaibhav Jonwal",
      role: "Composer · Songwriter",
      photo: artist1,
      bio: "Lyricist and topline writer, composer and producer.",
      instrument: "Guitar, Keyboard",
      //fun: "Collects vintage synthesizers.",
      artistinstagram: "https://www.instagram.com/vaibhav_vkj",
      socials: ["instagram"
        //,"twitter", "youtube"
      ],
    },
    {
      name: "Varad Vyavhare",
      role: "Vocals · Songwriter · Composer ",
      photo: artist2,
      bio: ". Draws from Hindi cinema, poetry and late-night city drives.",
      instrument: "Flute, Guitar",
      //fun: "Can quote every Guru Dutt film verbatim.",
      artistinstagram: "https://www.instagram.com/varadvyavharee",
      socials: ["instagram", "twitter", "youtube"],
    },
  ],
  events: [
    { title: "Neon Monsoon Launch", city: "Mumbai · Antisocial", date: "2026-04-18T20:00:00", type: "Launch" },
    { title: "NH7 Weekender", city: "Pune · Laxmi Lawns", date: "2026-05-24T19:30:00", type: "Festival" },
    { title: "IIT Bombay Mood Indigo", city: "Mumbai", date: "2026-12-20T21:00:00", type: "College" },
    { title: "Private Session", city: "Bangalore", date: "2026-06-08T20:00:00", type: "Private" },
  ],
  pressKit: [
    { name: "Artist Bio (PDF)", size: "1.2 MB" },
    { name: "Hi-Res Photos", size: "42 MB" },
    { name: "Logo Pack", size: "8 MB" },
    { name: "Press Images", size: "24 MB" },
    { name: "Technical Rider", size: "0.8 MB" },
    { name: "Stage Plot", size: "1.4 MB" },
  ],
  contact: {
    business: "varadvaibhavmusic@gmail.com",
   // management: "enquiry@varadvaibhavmusic.in",
  },
  socials: [
    "Spotify","Apple Music","YouTube","Instagram","Facebook","Threads","TikTok",
    "Twitter","Amazon Music","JioSaavn","Gaana","Wynk","SoundCloud","Bandcamp",
    "Discord","WhatsApp","Telegram","Website","Linktree",
  ],
  merch: ["Hoodies","Caps","T-Shirts","Posters","Vinyl","CDs"],
  gallery: [cover1],
  media: [
    { source: "Rolling Stone India", title: "The new sound of Indian pop", date: "Mar 2026" },
    { source: "Homegrown", title: "AURORA//SIGNAL are quietly redefining the scene", date: "Feb 2026" },
    { source: "Radio One", title: "Interview: On songwriting & cinema", date: "Jan 2026" },
    { source: "Wild City", title: "10 Indian artists to watch", date: "Dec 2025" },
  ],
  stats: [
    { label: "Monthly Listeners", value: "Coming Soon" },
    { label: "Total Streams", value: "Coming Soon" },
    { label: "Followers", value: "Coming Soon" },
    { label: "Songs Released", value: "Coming Soon" },
    { label: "Countries Reached", value: "Coming Soon" },
  ],
  timeline: [
    { year: "2022", title: "Formation", body: "Kabir & Aarav meet at a Mumbai session." },
    { year: "2023", title: "First Single", body: "'Static Bloom' releases independently." },
    { year: "2024", title: "EP Announcement", body: "Signed a distribution deal with a global partner." },
    { year: "2025", title: "First Sold-Out Show", body: "Headline debut at Antisocial, Mumbai." },
    { year: "2026", title: "Neon Monsoon", body: "Lead single of the upcoming full-length EP." },
  ],
  faq: [
    { q: "How can we book you for a show?", a: "Reach out via the booking form or email varadvaibhavmusic@gmail.com with dates, venue and expected audience size." },
    { q: "Do you take collaboration requests?", a: "Yes — send us a note through the collaboration form with links to your work." },
    { q: "Where can I stream your music?", a: "Everywhere — Spotify, Apple Music, YouTube Music, JioSaavn, Gaana, Amazon Music and more." },
    { q: "When is the next song releasing?", a: "The new song will be releasing later this year." },
    //{ q: "Do you offer merch?", a: "Merch is coming soon — join the newsletter to hear about the drop first." },
  ],
};

export type SiteConfig = typeof site;