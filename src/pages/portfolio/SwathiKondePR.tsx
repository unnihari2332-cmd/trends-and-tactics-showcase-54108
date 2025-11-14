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

const heroBg = "/0001.jpg"; // hero image from public

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

/* ------------ Small helpers ------------ */
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

      {/* ===== HERO WITH DIGITAL ADS-STYLE BREADCRUMB ===== */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-16 text-center">
          {/* breadcrumb (same style as DigitalAds / TipsPortfolio) */}
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
            <span className="text-white">Swathi Konde — PR &amp; Media Kit</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-normal text-white">
            Swathi Konde — Actor &amp; Public Figure
          </h1>
        </div>
      </section>

      {/* ===== Short Bio ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">
                Short Bio (Press / Website Intro)
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A dynamic performer with a natural screen presence, Swathi Konde
              is quickly becoming one of the most exciting new voices in Indian
              cinema. Known for her expressive acting and effortless charm, she
              brings depth and authenticity to every character—whether it’s a
              heartfelt dramatic role or a breezy, relatable modern heroine.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Extended Profile & Brand Positioning ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <NotebookPen className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Extended Profile</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                From early stage appearances to acclaimed performances on
                television and in independent films, Swathi’s journey reflects a
                commitment to craft and constant evolution as an artist.
              </p>
              <ul className="mt-4 space-y-3 text-gray-700 text-sm">
                <li>
                  <span className="font-semibold">Training &amp; Background:</span>{" "}
                  Formal training in acting and dance, enabling strong emotional
                  performance and physicality.
                </li>
                <li>
                  <span className="font-semibold">Notable Work:</span>{" "}
                  <em>(Add specific film/TV/web credits here.)</em>
                </li>
                <li>
                  <span className="font-semibold">Languages:</span> Fluent in
                  multiple Indian languages, opening doors across regional
                  industries.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">
                  Brand Positioning &amp; PR Narrative
                </h3>
              </div>
              <div className="grid gap-4">
                <Pillar
                  title="Versatile Talent"
                  desc="Shifts easily between mainstream commercial roles and intense, character-driven projects."
                />
                <Pillar
                  title="Authentic Connection"
                  desc="Comes across as grounded and approachable, both on screen and on social feeds."
                />
                <Pillar
                  title="Modern Icon"
                  desc="Represents the confident, independent spirit of the new generation of Indian cinema."
                />
              </div>
              <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                PR and campaign messaging can consistently anchor on{" "}
                <span className="font-semibold">Talent</span>,{" "}
                <span className="font-semibold">Authenticity</span>, and{" "}
                <span className="font-semibold">Modern Icon</span> to build a
                clear, memorable narrative.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PR & Media Strategy ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <Megaphone className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">PR &amp; Media Strategy</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clapperboard className="h-4 w-4 text-primary" /> Public
                  Relations Focus
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>
                    Press releases timed with project announcements and trailer
                    drops.
                  </li>
                  <li>
                    Proactive outreach to entertainment, OTT, and lifestyle
                    media.
                  </li>
                  <li>
                    Interview features, talk shows, and panel appearances.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Hash className="h-4 w-4 text-primary" /> Digital &amp; Social
                  Presence
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>
                    Consistent Reels/Shorts with BTS, character look tests, and
                    fun moments.
                  </li>
                  <li>
                    Hashtag-led campaign bursts during launches and
                    collaborations.
                  </li>
                  <li>
                    Strategic tie-ups with fashion, beauty, and lifestyle
                    brands.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Video & Editing Services (Our Role) ===== */}
      <section className="py-6">
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
                desc="High-impact 15–30s edits focused on expressions, motion, and hero moments."
              />
              <Service
                icon={<Camera className="h-5 w-5" />}
                title="BTS Stories"
                desc="Quick-turnaround edits from on-set and rehearsal clips to keep fans engaged."
              />
              <Service
                icon={<Megaphone className="h-5 w-5" />}
                title="Interview Packages"
                desc="Polished cuts of press interviews, ready for media and digital distribution."
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
                <span className="font-semibold">Photography Style:</span> Clean,
                cinematic portraits with natural or soft studio light and
                expressive poses.
              </li>
              <li>
                <span className="font-semibold">Video Mood:</span> Energetic
                pacing, subtle motion graphics, and close-ups that highlight
                eyes, expressions, and movement.
              </li>
              <li>
                <span className="font-semibold">Palette &amp; Fonts:</span> Warm
                golds and deep blues paired with modern sans-serif typography
                for a bold yet approachable feel.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Videos (auto-scrolling) ===== */}
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
