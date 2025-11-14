// src/pages/portfolio/DrAndrewPediatric.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  Users,
  Share2,
  TrendingUp,
  HeartHandshake,
  BookOpen,
  CalendarCheck,
  MapPin,
  PlayCircle,
  Video as VideoIcon,
  Building2,
} from "lucide-react";

const heroBg = "/0006.jpg";

/* ================================
   YouTube Auto-Scroller
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

      if (u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/")[2];
        return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
      }

      const id = u.searchParams.get("v") ?? "";
      let start = u.searchParams.get("t") || "";
      if (start.endsWith("s")) start = start.slice(0, -1);
      const s = Math.max(0, Number(start) || 0);

      const params = new URLSearchParams({
        rel: "0",
        modestbranding: "1",
        playsinline: "1",
        ...(s ? { start: String(s) } : {}),
      });

      return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    } catch {
      return raw;
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  const stop = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    if (timerRef.current !== null) return;
    if (urls.length <= 1) return;
    timerRef.current = window.setInterval(
      () => setIndex((i) => (i + 1) % urls.length),
      intervalMs
    );
  };

  useEffect(() => {
    start();
    return () => stop();
  }, [urls.length, intervalMs]);

  if (!urls.length) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onMouseEnter={stop}
        onMouseLeave={start}
        className="overflow-x-hidden snap-x snap-mandatory scroll-smooth rounded-xl border border-gray-200 bg-white"
      >
        <div className="flex w-full">
          {urls.map((u, idx) => (
            <div key={idx} className="min-w-full snap-start">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={toEmbedUrl(u)}
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

/* ------------------- Helpers ------------------- */
function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <div className="font-semibold">{title}</div>
      <p className="text-gray-700 text-sm mt-1">{desc}</p>
    </div>
  );
}

function Metric({
  icon: Icon,
  value,
  label,
  sub,
}: {
  icon: any;
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
      <Icon className="h-6 w-6 mx-auto mb-2 text-teal-600" />
      <div className="text-lg font-bold text-black">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
      {sub ? <div className="text-[11px] text-gray-500 mt-1">{sub}</div> : null}
    </div>
  );
}

/* ------------------- PAGE ------------------- */
export default function DrAndrewPediatric() {
  useEffect(() => {
    document.title = "Dr. Andrew Stephen – Pediatrician | Case Study";
  }, []);

  const YOUTUBE_VIDEOS = [
    "https://www.youtube.com/watch?v=d5ivdvtdffo",
    "https://www.youtube.com/watch?v=dVF54X_8uNo",
    "https://www.youtube.com/shorts/przcWI85zzw",
    "https://www.youtube.com/shorts/J6DfwHIFdgc",
  ];

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      {/* ================================
           SWATHI KONDE STYLE HERO
         ================================ */}
      <section className="relative min-h-[45vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-60">›</span>

            <Link to="/portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <span className="opacity-60">›</span>

            <span className="text-white">Dr. Andrew — Pediatric</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-normal text-white">
            Dr. Andrew Stephen — Pediatric Personal Branding
          </h1>
        </div>
      </section>

      {/* ================================
           CONTENT SECTIONS
         ================================ */}

      {/* Intro */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-6">
            Parent-first digital identity and full-funnel content engine for a multi-campus pediatric
            practice—built to educate caregivers, earn trust, and grow admissions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700">
            <span className="inline-flex items-center gap-2">
              <Stethoscope className="h-5 w-5" /> Pediatrics
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-5 w-5" /> 4 Campuses
            </span>
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Web • Social • Branding • Community
            </span>
          </div>
        </div>
      </section>

      {/* Overview + Pillars */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Overview */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-3">
                Pediatric Care • Parent Education
              </div>
              <p className="text-gray-700 leading-relaxed">
                Families were discovering the clinics mostly through word-of-mouth, leading to uneven
                growth across campuses. We built a consistent digital identity that educates caregivers
                and showcases Dr. Stephen’s child-first philosophy.
              </p>
            </div>

            {/* Brand Positioning */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-semibold mb-3">Brand Positioning</h3>
              <div className="grid gap-4">
                <Pillar
                  title="Trusted Pediatric Expertise"
                  desc="Clear, parent-friendly language and resources that simplify healthcare decisions."
                />
                <Pillar
                  title="Warm, Approachable Tone"
                  desc="Visual identity and messaging that feel caring, calm, and child-first."
                />
                <Pillar
                  title="Community at the Core"
                  desc="Stories from vaccination drives, wellness camps, and parent workshops."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">Our Approach</h2>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <HeartHandshake className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <strong>Unified Brand Story:</strong> A warm, approachable identity parents trust.
                </p>
              </li>

              <li className="flex gap-3">
                <CalendarCheck className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <strong>Website Overhaul:</strong> Mobile-first site with easy booking and parent
                  resources.
                </p>
              </li>

              <li className="flex gap-3">
                <PlayCircle className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <strong>Full-Service Social Management:</strong> Pediatric tips, advisories, BTS
                  clips, and staff moments.
                </p>
              </li>

              <li className="flex gap-3">
                <MapPin className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <strong>On-Campus Content Teams:</strong> Authentic health-camp & vaccination moments.
                </p>
              </li>

              <li className="flex gap-3">
                <BookOpen className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <strong>Storytelling Campaigns:</strong>  
                  “Healthy Starts Here” – short videos on preventive care journeys.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">Results</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Metric
                icon={Users}
                value="1.5 Cr+"
                label="Total video views"
                sub="Instagram, YouTube & Facebook"
              />
              <Metric
                icon={Share2}
                value="2.5 Lakh+"
                label="Organic shares"
                sub="Vaccination-day & nutrition reels"
              />
              <Metric
                icon={TrendingUp}
                value="18% ↑"
                label="Admissions & inquiries"
                sub="In one academic year"
              />
            </div>

            <p className="text-gray-700 text-sm mt-4">
              Community outreach increased substantially—schools and childcare centers now partner
              with the clinics for wellness camps.
            </p>
          </div>
        </div>
      </section>

      {/* Videos */}
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
