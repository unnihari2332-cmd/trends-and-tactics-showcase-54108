// src/pages/portfolio/NiyasKhanActor.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clapperboard,
  Star,
  User,
  Megaphone,
  Film,
  Video as VideoIcon,
  Camera,
  NotebookPen,
  Quote,
  Palette,
  Hash,
} from "lucide-react";

const heroBg = "/niyaz.jpg"; // 16:9 hero image placed in /public

/** ================================
 *  YouTube Auto-Scroller (full 16:9, no cropping)
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

      {/* Dots */}
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

/* ------------ Small presentational helpers ------------ */
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

/* ===================== Page ===================== */
export default function NiyasKhanActor() {
  useEffect(() => {
    document.title = "Niyas Khan — Actor | Trends & Tactics";
  }, []);

  const YOUTUBE_VIDEOS: string[] = [
    // add URLs here when ready
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
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
              <span className="text-white">Niyas Khan — Actor</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-normal text-white">
              Niyas Khan — Actor &amp; Public Figure
            </h1>
          </div>
        </section>

        {/* ===== Intro (press/website short bio) ===== */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <User className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">
                  Short Bio (Press / Website Intro)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A rising face in Indian cinema, Niyas Khan is known for his
                intense screen presence, versatile performances, and authentic
                storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Extended Profile + Brand Positioning (SINGLE COLUMN) ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm">
              <div className="space-y-6 md:space-y-7">
                {/* Extended profile */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <NotebookPen className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Extended Profile</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    From theatre to impactful screen roles, Niyas combines
                    training and passion to deliver layered, emotionally rich
                    portrayals.
                  </p>
                </div>

                {/* Brand positioning */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">
                      Brand Positioning &amp; PR Narrative
                    </h3>
                  </div>
                  <div className="grid gap-4">
                    <Pillar
                      title="Versatility"
                      desc="Balances commercial hits with nuanced, character-driven roles."
                    />
                    <Pillar
                      title="Authentic Connection"
                      desc="Connects through honesty and realism."
                    />
                    <Pillar
                      title="Emerging Star"
                      desc="Confident, passionate, and committed to the craft."
                    />
                  </div>
                  <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                    Anchor your PR on these pillars —{" "}
                    <span className="font-semibold">Versatility</span>,{" "}
                    <span className="font-semibold">Authenticity</span>,{" "}
                    <span className="font-semibold">Emerging Star</span> — across
                    releases, interviews, and social campaigns.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PR & Media Strategy ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <Megaphone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">
                  PR &amp; Media Strategy
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clapperboard className="h-4 w-4 text-primary" /> Public
                    Relations Focus
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Press releases, interviews, and podcast features.</li>
                    <li>Panel discussions and festival Q&amp;As.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Hash className="h-4 w-4 text-primary" /> Digital &amp;
                    Social Presence
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Instagram Reels &amp; YouTube Shorts, fan engagement
                      campaigns.
                    </li>
                    <li>
                      Collaborations with fashion, lifestyle, and grooming
                      brands.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Video & Editing Services ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <VideoIcon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">
                  Video &amp; Editing Services (Our Contribution)
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Service
                  icon={<Film className="h-5 w-5" />}
                  title="Cinematic Reels"
                  desc="High-impact 15–30s reels that capture intensity and range."
                />
                <Service
                  icon={<Camera className="h-5 w-5" />}
                  title="BTS Stories"
                  desc="Quick-turnaround clips to keep audiences engaged."
                />
                <Service
                  icon={<Megaphone className="h-5 w-5" />}
                  title="Interview &amp; Press Packages"
                  desc="Media-ready edits crafted for entertainment portals."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Sample Social Copy ===== */}
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
                    <li>✨ Living every frame with passion</li>
                    <li>📩 For PR &amp; collaborations: [email]</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                  <h4 className="font-semibold mb-2">Launch Post Caption</h4>
                  <p className="text-sm text-gray-800">
                    “Every story deserves truth — I’m here to live it on screen.
                    Stay tuned! <span className="whitespace-nowrap">#NiyasKhan</span>{" "}
                    <span className="whitespace-nowrap">#ActorLife</span>”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Key Visual Directions ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">
                  Key Visual Directions
                </h3>
              </div>

              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Photography:</span> Clean,
                  cinematic portraits; natural light with vibrant grading.
                </li>
                <li>
                  <span className="font-semibold">Video:</span> Energetic edits,
                  subtle motion graphics, expressive highlights.
                </li>
                <li>
                  <span className="font-semibold">
                    Palette &amp; Fonts:
                  </span>{" "}
                  Warm neutrals with deep blues; modern sans-serif for a fresh,
                  approachable feel.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Videos (auto-scrolling) ===== */}
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
