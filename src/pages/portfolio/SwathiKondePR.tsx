// src/pages/portfolio/SwathiKondePR.tsx
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
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

// UPDATED HERO IMAGE
const heroBg = "/0003.jpg";

/** ================================
 *  YouTube Auto-Scroller (full 16:9)
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

export default function SwathiKondePR() {
  useEffect(() => {
    document.title = "Swathi Konde – PR & Media Kit | Trends & Tactics";
  }, []);

  const YOUTUBE_VIDEOS = [
    "https://www.youtube.com/watch?v=eGZt5w_FfGI",
    "https://www.youtube.com/watch?v=6egzV7XSqC8&t=35s",
    "https://www.youtube.com/watch?v=6rhsbmW-aVA",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroBg}')` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Swathi Konde — Actor · Performer · Creator
          </motion.h1>
        </div>
      </section>

      {/* ===== Bio ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Short Bio (Press / Website Intro)</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A dynamic performer with a natural screen presence, Swathi Konde is quickly
              becoming one of the most exciting new voices in Indian cinema. Known for her
              expressive acting and effortless charm, she brings depth and authenticity to every character.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Extended Profile & Brand Positioning ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <NotebookPen className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Extended Profile</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                From early stage appearances to acclaimed screen performances, Swathi’s journey reflects dedication to craft.
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li><strong>Training:</strong> Formal acting & dance background.</li>
                <li><strong>Notable Work:</strong> (Add credits)</li>
                <li><strong>Languages:</strong> Multiple Indian languages.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Brand Positioning</h3>
              </div>
              <div className="grid gap-4">
                <Pillar title="Versatile Talent" desc="From commercial roles to intense character arcs." />
                <Pillar title="Authentic Connection" desc="Relatable, expressive, emotionally real." />
                <Pillar title="Modern Icon" desc="A confident and rising face in new-age cinema." />
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
              <h3 className="text-xl font-semibold">PR & Media Strategy</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clapperboard className="h-4 w-4 text-primary" /> Public Relations
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Press releases with film launch timing.</li>
                  <li>Media outreach to major publications.</li>
                  <li>Interview schedules & talk show visibility.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Hash className="h-4 w-4 text-primary" /> Digital Strategy
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Reels & Shorts strategy.</li>
                  <li>Hashtag-led campaign pushes.</li>
                  <li>Fashion/beauty collabs and brand tie-ups.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Our Services ===== */}
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
                desc="High-impact 15–30s edits showing expression & style."
              />
              <Service
                icon={<Camera className="h-5 w-5" />}
                title="BTS Stories"
                desc="Quick edits from behind-the-scenes moments."
              />
              <Service
                icon={<Megaphone className="h-5 w-5" />}
                title="Interview Packages"
                desc="Press-ready professional edits."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Social Copy ===== */}
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
                  <li>🎬 Actor | Dreamer</li>
                  <li>✨ Living stories on screen</li>
                  <li>📩 For collabs & PR: [email]</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
                <h4 className="font-semibold mb-2">Launch Post Caption</h4>
                <p className="text-sm text-gray-800">
                  “Every role is a new journey. Excited to share the next chapter! 💫 #SwathiKonde #NewRelease”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Key Visual ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Key Visual Directions</h3>
            </div>

            <ul className="space-y-2 text-gray-700">
              <li><strong>Photography:</strong> Cinematic portraits + natural light.</li>
              <li><strong>Video:</strong> Energetic cuts, subtle graphics.</li>
              <li><strong>Palette:</strong> Golds, deep blues, clean modern fonts.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Auto Scrolling Videos ===== */}
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

      <Footer />
    </div>
  );
}
