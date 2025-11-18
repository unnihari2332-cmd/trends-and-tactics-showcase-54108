// src/pages/portfolio/DhiravyamActor.tsx
import { useEffect, useRef, useState } from "react";
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

const heroBg = "/DD.png";

/* ================================
   YOUTUBE AUTOSCROLLER
================================ */
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
      return `https://www.youtube.com/embed/${id}?start=${s}&rel=0&modestbranding=1&playsinline=1`;
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
        className="overflow-x-hidden snap-x snap-mandatory rounded-xl border border-gray-200 bg-white"
      >
        <div className="flex w-full">
          {urls.map((u, idx) => (
            <div key={idx} className="min-w-full snap-start">
              <div className="w-full aspect-video">
                <iframe
                  src={toEmbedUrl(u)}
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  title={`YouTube ${idx + 1}`}
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

/* ================================
   SMALL COMPONENTS
================================ */
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

/* ================================
   PAGE
================================ */
export default function DhiravyamActor() {
  useEffect(() => {
    document.title = "Dhiravyam — Actor | Trends & Tactics";
  }, []);

  const YOUTUBE_VIDEOS = [
    "https://www.youtube.com/watch?v=cioaHpfnL7s",
    "https://www.youtube.com/watch?v=fv-12c3JMv0",
    "https://www.youtube.com/watch?v=t9Ans2lncRk",
    "https://www.youtube.com/watch?v=J5R0HsVtmbY",
  ];

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "left center",
      }}
    >
      <Header />

      <main>
        {/* HERO — text slightly moved left */}
        <section className="relative min-h-[40vh] flex items-center justify-start">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: "center 30%",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

          <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-32 pb-16 text-left">
            <h1 className="text-3xl md:text-5xl font-normal text-white ml-10">
              Dhiravyam — Actor & Media Personality
            </h1>
          </div>
        </section>

        {/* SHORT BIO */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
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

        {/* PROFILE + BRAND */}
        <section className="py-8">
          <div className="container mx-auto px-6 grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <NotebookPen className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Extended Profile</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                From theatre beginnings to notable film and OTT roles, Dhiravyam
                blends discipline, intuition, and expressive acting to deliver
                nuanced performances.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Brand Narrative</h3>
              </div>

              <div className="grid gap-4">
                <Pillar
                  title="Versatility"
                  desc="Balances commercial appeal and deep character-driven roles."
                />
                <Pillar
                  title="Authenticity"
                  desc="Natural emotional delivery that connects with audiences."
                />
                <Pillar
                  title="Emerging Talent"
                  desc="Fast-growing presence in the new-gen cinema ecosystem."
                />
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO SERVICES */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <VideoIcon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">
                  Video & Editing Services
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Service
                  icon={<Film className="h-5 w-5" />}
                  title="Cinematic Reels"
                  desc="High-impact edits that showcase depth and emotion."
                />
                <Service
                  icon={<Camera className="h-5 w-5" />}
                  title="Behind-the-Scenes Clips"
                  desc="Real raw moments transformed into engaging stories."
                />
                <Service
                  icon={<Megaphone className="h-5 w-5" />}
                  title="Press Interview Packages"
                  desc="Clean and polished edits ready for media rollout."
                />
              </div>
            </div>
          </div>
        </section>

        {/* SAMPLE COPY */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Quote className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Sample Social Copy</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Instagram Bio</h4>
                  <ul className="text-sm space-y-1 text-gray-800">
                    <li>🎬 Actor | Storyteller</li>
                    <li>✨ Frames with emotion & honesty</li>
                    <li>📩 PR & collabs: [email]</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Launch Caption</h4>
                  <p className="text-sm text-gray-800">
                    “Every role is a new lesson. Honored to grow, create, and
                    inspire. Here’s to the journey ahead.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL STYLE */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Visual Style</h3>
              </div>

              <ul className="text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Photography:</span> Clean,
                  cinematic, emotionally expressive.
                </li>
                <li>
                  <span className="font-semibold">Video Mood:</span> Sharp
                  transitions, dramatic lighting, expressive movement.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
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
