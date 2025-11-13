// src/pages/portfolio/DhiravyamActor.tsx
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  User,
  Star,
  Megaphone,
  Hash,
  Film,
  Video as VideoIcon,
  Camera,
  NotebookPen,
  Quote,
  Palette,
  Clapperboard,
  Sparkles,
} from "lucide-react";

const heroBg = "/0004.jpg"; // hero image from public

/** Optional YouTube auto-scroll component */
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
      if (urls.length > 1)
        timerRef.current = window.setInterval(
          () => setIndex((i) => (i + 1) % urls.length),
          intervalMs
        );
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

  const YOUTUBE_VIDEOS: string[] = [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== HERO SECTION (image shifted slightly down) ===== */}
      <section className="relative h-[420px] md:h-[460px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${heroBg}')`,
            // move visible area a bit DOWN (shows slightly lower part of image)
            backgroundPosition: "center 60%",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Dhiravyam — Actor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-white/90"
          >
            Magnetic presence. Versatile performances. Authentic storytelling.
          </motion.p>
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
              A dynamic new talent in Indian cinema, Dhiravyam is known for his
              magnetic screen presence, versatile performances, and authentic
              storytelling.
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
              <h3 className="text-xl font-semibold">Video & Editing Services</h3>
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
                  <li>📩 PR & collabs: [email]</li>
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

      {/* ===== VIDEO SCROLLER (IF ADDED) ===== */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          {YOUTUBE_VIDEOS.length ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <VideoIcon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Videos</h3>
              </div>
              <YouTubeAutoScroller urls={YOUTUBE_VIDEOS} intervalMs={5000} />
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Reels Coming Soon</h3>
              </div>
              <p className="text-sm text-gray-700">
                Add YouTube links anytime to automatically display a full-width
                scroller.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
