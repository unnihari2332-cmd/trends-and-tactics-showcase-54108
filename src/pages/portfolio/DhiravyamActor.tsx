// src/pages/portfolio/DhiravyamActor.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  User,
  Star,
  Megaphone,
  Film,
  Video as VideoIcon,
  Camera,
  NotebookPen,
  Quote,
  Palette,
} from "lucide-react";

const heroBg = "/DD.png"; // hero image from public

/** ================================
 *  YouTube Auto-Scroller (Swathi style)
 *  ================================ */
function YouTubeAutoScroller({
  urls,
  intervalMs = 5000,
}: {
  urls: string[];
  intervalMs?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const toEmbedUrl = (raw: string) => {
    try {
      const u = new URL(raw);
      const id = u.searchParams.get("v") ?? "";
      let start = u.searchParams.get("t") || "";
      if (start.endsWith("s")) start = start.slice(0, -1);
      const s = Math.max(0, Number(start) || 0);
      const base = `https://www.youtube.com/embed/${id}`;
      const params = new URLSearchParams({
        start: String(s),
        rel: "0",
        modestbranding: "1",
        playsinline: "1",
      });
      return `${base}?${params.toString()}`;
    } catch {
      return raw;
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  useEffect(() => {
    const start = () => {
      stop();
      if (urls.length > 1) {
        timerRef.current = window.setInterval(
          () => setIndex((i) => (i + 1) % urls.length),
          intervalMs
        );
      }
    };
    const stop = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    start();
    const el = trackRef.current;
    if (!el) return () => stop();

    const onEnter = () => stop();
    const onLeave = () => start();

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      stop();
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [urls.length, intervalMs]);

  if (!urls.length) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="overflow-x-hidden snap-x snap-mandatory scroll-smooth rounded-xl border border-gray-200 bg-white"
      >
        <div className="flex w-full">
          {urls.map((u, idx) => (
            <div key={idx} className="min-w-full snap-start">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={toEmbedUrl(u)}
                  title={`YouTube video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {urls.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to video ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------ Helpers ------------ */
function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <div className="font-semibold">{title}</div>
      <p className="text-gray-700 text-sm mt-1">{desc}</p>
    </div>
  );
}

function Service({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-primary">{icon}</span>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}

export default function DhiravyamActor() {
  useEffect(() => {
    document.title = "Dhiravyam — Actor | Trends & Tactics";
  }, []);

  const YOUTUBE_VIDEOS: string[] = [
    "https://www.youtube.com/watch?v=cioaHpfnL7s",
    "https://www.youtube.com/watch?v=fv-12c3JMv0",
    "https://www.youtube.com/watch?v=t9Ans2lncRk",
    "https://www.youtube.com/watch?v=J5R0HsVtmbY",
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')", // side logo like Swathi page
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main>
        {/* ===== HERO WITH BREADCRUMB (SWATHI STYLE) ===== */}
        <section className="relative min-h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

          <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
            {/* breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="opacity-60">›</span>
              <Link
                to="/portfolio"
                className="hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <span className="opacity-60">›</span>
              <span className="text-white">Dhiravyam — Actor</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-normal text-white">
              Dhiravyam — Actor &amp; Media Personality
            </h1>
          </div>
        </section>

        {/* ===== SHORT BIO ===== */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <User className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Short Bio</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A dynamic new talent in Indian cinema, Dhiravyam is known for
                his magnetic screen presence, versatile performances, and
                authentic storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* ===== PROFILE & BRAND ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <NotebookPen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Extended Profile</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  From theatre beginnings to notable on-screen roles, Dhiravyam
                  combines training and passion to deliver layered, emotionally
                  compelling portrayals.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Brand Narrative</h3>
                </div>

                <div className="grid gap-4">
                  <Pillar
                    title="Versatility"
                    desc="Excels in both commercial and character-driven roles."
                  />
                  <Pillar
                    title="Authentic Connection"
                    desc="Deep emotional realism that resonates with audiences."
                  />
                  <Pillar
                    title="Emerging Star"
                    desc="Driven by passion, discipline, and continuous craft improvement."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VIDEO SERVICES ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <VideoIcon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">
                  Video &amp; Editing Services
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Service
                  icon={<Film className="h-5 w-5" />}
                  title="Cinematic Reels"
                  desc="30s–60s edits highlighting depth, energy, and emotion."
                />
                <Service
                  icon={<Camera className="h-5 w-5" />}
                  title="BTS Stories"
                  desc="Raw behind-the-scenes moments crafted into engaging clips."
                />
                <Service
                  icon={<Megaphone className="h-5 w-5" />}
                  title="Press & Interview Packages"
                  desc="Fully edited media-ready content tailored for PR rollout."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOCIAL COPY ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <Quote className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Sample Social Copy</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                  <h4 className="font-semibold mb-2">Instagram Bio Idea</h4>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>🎬 Actor | Storyteller</li>
                    <li>✨ Every frame with honesty</li>
                    <li>📩 PR &amp; collabs: [email]</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                  <h4 className="font-semibold mb-2">Launch Caption</h4>
                  <p className="text-sm text-gray-800">
                    “Every character teaches me something new. Excited for the
                    journey ahead. Stay tuned! #Dhiravyam #ActorLife”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISUAL STYLE ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Key Visual Directions</h3>
              </div>

              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Photography:</span> Cinematic,
                  natural light, expressive portraits.
                </li>
                <li>
                  <span className="font-semibold">Video Mood:</span> High-energy
                  cuts with emotional depth and clean motion graphics.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== VIDEOS (LIKE SWATHI PAGE) ===== */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <VideoIcon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Videos</h3>
              </div>
              <YouTubeAutoScroller urls={YOUTUBE_VIDEOS} intervalMs={5000} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
