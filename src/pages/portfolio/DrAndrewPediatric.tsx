// src/pages/portfolio/DrAndrewPediatric.tsx
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
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

const heroBg = "/dr-andrew-hero.jpg"; // ensure this exists in /public

/** ================================
 *  YouTube Auto-Scroller (Swathi style)
 *  - full 16:9 via aspect-video
 *  - auto-advance, pause on hover
 *  - centered dots
 * ================================ */
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
      // Support Shorts
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
            className={`h-2 w-2 rounded-full transition ${i === index ? "bg-black" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------ Small presentational helpers (match Swathi style) ------------ */
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

export default function DrAndrewPediatric() {
  useEffect(() => {
    document.title = "Dr. Andrew Stephen – Pediatrician | Case Study";
  }, []);

  // Videos (same list you shared earlier)
  const YOUTUBE_VIDEOS = [
    "https://www.youtube.com/watch?v=d5ivdvtdffo",
    "https://www.youtube.com/watch?v=dVF54X_8uNo",
    "https://www.youtube.com/shorts/przcWI85zzw",
    "https://www.youtube.com/shorts/J6DfwHIFdgc",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== Hero (title only over image) — like Swathi ===== */}
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
            Dr. Andrew Stephen — Pediatrician
          </motion.h1>
        </div>
      </section>

      {/* ===== Intro (one-liner + badges) ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-6"
          >
            Parent-first digital identity and full-funnel content engine for a multi-campus pediatric
            practice—built to educate caregivers, earn trust, and grow admissions without adding to a
            busy clinical schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-gray-700"
          >
            <span className="inline-flex items-center gap-2">
              <Stethoscope className="h-5 w-5" /> Pediatrics
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-5 w-5" /> 4 Campuses
            </span>
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Web • Social • Branding • Community
            </span>
          </motion.div>
        </div>
      </section>

      {/* ===== Two-column content sections (no sidebar, Swathi-like cards) ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Extended overview */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-3">
                Pediatric Care • Parent Education
              </div>
              <p className="text-gray-700 leading-relaxed">
                Families were discovering the clinics mostly through word-of-mouth, leading to uneven
                growth across campuses. We built a consistent, parent-focused digital identity that
                educates caregivers and showcases Dr. Stephen’s child-first philosophy—without adding
                to his clinical workload.
              </p>
            </div>

            {/* Brand Positioning / Pillars */}
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

      {/* ===== Approach (bulleted list) ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">Our Approach</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <HeartHandshake className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <span className="font-medium">Unified Brand Story:</span> Warm, approachable
                  identity—colors, fonts, and messaging—parents associate with expert, compassionate care.
                </p>
              </li>
              <li className="flex gap-3">
                <CalendarCheck className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <span className="font-medium">Website Overhaul:</span> Mobile-first site with easy
                  appointment booking, parent resources, and interactive campus maps.
                </p>
              </li>
              <li className="flex gap-3">
                <PlayCircle className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <span className="font-medium">Full-Service Social Management:</span> Calendar of
                  pediatric tips, seasonal advisories, and behind-the-scenes staff moments, supported by
                  professional photo/video shoots.
                </p>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <span className="font-medium">On-Campus Content Teams:</span> Trained staff to capture
                  authentic moments—vaccination drives, wellness camps, and parent workshops—so every
                  campus contributes to the story.
                </p>
              </li>
              <li className="flex gap-3">
                <BookOpen className="h-5 w-5 mt-1 text-teal-600" />
                <p>
                  <span className="font-medium">Storytelling Campaigns:</span> Launched
                  <em> “ Healthy Starts Here ”</em>, short videos spotlighting real patient journeys and
                  preventive care.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Results (metrics grid like Swathi services cards) ===== */}
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
                sub="Within one academic year"
              />
            </div>
            <p className="text-gray-700 text-sm mt-4">
              Noticeable uptick in community engagement—local schools and childcare centers now partner
              with the clinics for health workshops.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Videos (single, full-width card at the bottom like Swathi) ===== */}
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
