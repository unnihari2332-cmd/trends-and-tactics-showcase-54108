// src/pages/portfolio/SwathiKondePR.tsx
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
  Palette,
  Hash,
} from "lucide-react";

const heroBg = "/Swathi001.png"; // hero image

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
      const sec = Math.max(0, Number(start) || 0);
      return `https://www.youtube.com/embed/${id}?start=${sec}&rel=0&modestbranding=1&playsinline=1`;
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
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    start();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    return () => {
      stop();
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
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
                  title={`YouTube ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

/* small helper components */
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
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-16 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="opacity-60">›</span>
            <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
            <span className="opacity-60">›</span>
            <span className="text-white">Swathi Konde — PR & Media Kit</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-normal text-white">
            Swathi Konde — Actor & Public Figure
          </h1>
        </div>
      </section>

      {/* ===== Short Bio ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Short Bio</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              A dynamic performer with a natural screen presence, Swathi Konde
              is quickly becoming one of the most exciting new voices in Indian
              cinema. Known for her expressive acting and effortless charm, she
              brings depth and authenticity to every character.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Extended Profile ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <NotebookPen className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Extended Profile</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              From early stage appearances to acclaimed performances in films
              and TV, Swathi's artistic growth reflects her commitment to craft.
            </p>

            <ul className="mt-4 space-y-3 text-gray-700 text-sm">
              <li>
                <strong>Training:</strong> Formal acting & dance background.
              </li>
              <li>
                <strong>Notable Work:</strong> (Add film/TV credits)
              </li>
              <li>
                <strong>Languages:</strong> Fluent in multiple Indian languages.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <Star className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Brand Positioning</h3>
            </div>

            <div className="grid gap-4">
              <Pillar
                title="Versatile Talent"
                desc="Effortlessly shifts between commercial and deep character-driven roles."
              />
              <Pillar
                title="Authentic Connection"
                desc="Relatable and grounded personality, both on screen and online."
              />
              <Pillar
                title="Modern Icon"
                desc="Symbol of the confident, independent new-gen cinema culture."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PR Strategy ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <Megaphone className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">PR & Media Strategy</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clapperboard className="h-4 w-4 text-primary" />
                  Public Relations Focus
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Press releases aligned with project updates.</li>
                  <li>Feature interviews & talk show presence.</li>
                  <li>Media tie-ups across entertainment platforms.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Hash className="h-4 w-4 text-primary" />
                  Digital & Social Presence
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Consistent reels, BTS clips & look tests.</li>
                  <li>Hashtag-driven content bursts.</li>
                  <li>Fashion, lifestyle & brand collaborations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Video / Editing Services ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
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
                desc="High-impact short edits focusing on emotion & expressions."
              />
              <Service
                icon={<Camera className="h-5 w-5" />}
                title="BTS Stories"
                desc="Quick-turnaround mobile edits from on-set footage."
              />
              <Service
                icon={<Megaphone className="h-5 w-5" />}
                title="Interview Packages"
                desc="Clean, polished media-ready interview cuts."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Key Visual Directions ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Key Visual Directions</h3>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <strong>Photography:</strong> Clean portraits with soft lighting.
              </li>
              <li>
                <strong>Video Mood:</strong> Fast-paced edits, expressive shots.
              </li>
              <li>
                <strong>Palette:</strong> Warm golds + deep blues.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Videos ===== */}
      <section className="py-6 pb-16">
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
