// src/pages/portfolio/DrAndrewPediatric.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

const heroBg = "/0006.jpg"; // hero image from /public

/** ================================
 *  YouTube Auto-Scroller
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

  // Scroll to active slide whenever index changes
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
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % urls.length);
    }, intervalMs);
  };

  // Start / cleanup interval
  useEffect(() => {
    start();
    return () => {
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const YOUTUBE_VIDEOS = [
    "https://www.youtube.com/watch?v=d5ivdvtdffo",
    "https://www.youtube.com/watch?v=dVF54X_8uNo",
    "https://www.youtube.com/shorts/przcWI85zzw",
    "https://www.youtube.com/shorts/J6DfwHIFdgc",
  ];

  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      {/* LEFT SIDE LOGO STRIP (like Swathi page) */}
      <div
        className="fixed left-0 top-0 h-full w-[180px] z-0 hidden lg:block"
        style={{
          backgroundImage: "url('/sidelogo.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "left center",
        }}
      />

      {/* MAIN CONTENT SHIFTED RIGHT ON DESKTOP */}
      <div className="min-h-screen bg-background/90 lg:pl-[180px] relative z-10">
        <Header />

        {/* ===== HERO WITH BREADCRUMB (MATCH SWATHI KONDE STYLE) ===== */}
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
            {/* breadcrumb same style as Swathi / Isthara / DigitalAds */}
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
              <span className="text-white">
                Dr. Andrew Stephen – Pediatric
              </span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-normal text-white">
              Dr. Andrew Stephen — Pediatric Personal Branding
            </h1>
          </div>
        </section>

        {/* ===== Intro (one-liner + badges) ===== */}
        <section className="py-10">
          <div className="container mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-6 bg-white/90 rounded-2xl px-6 py-4 shadow-sm"
            >
              Parent-first digital identity and full-funnel content engine for a
              multi-campus pediatric practice—built to educate caregivers, earn
              trust, and grow admissions without adding to a busy clinical
              schedule.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-6 text-gray-700 bg-white/80 rounded-2xl px-6 py-4 shadow-sm max-w-4xl mx-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Stethoscope className="h-5 w-5" /> Pediatrics
              </span>
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-5 w-5" /> 4 Campuses
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Web • Social • Branding •
                Community
              </span>
            </motion.div>
          </div>
        </section>

        {/* ===== Two-column content sections ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Extended overview */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-3">
                  Pediatric Care • Parent Education
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Families were discovering the clinics mostly through
                  word-of-mouth, leading to uneven growth across campuses. We
                  built a consistent, parent-focused digital identity that
                  educates caregivers and showcases Dr. Stephen’s child-first
                  philosophy—without adding to his clinical workload.
                </p>
              </div>

              {/* Brand Positioning / Pillars */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Brand Positioning
                </h3>
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

        {/* ===== Our Approach ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Our Approach
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <HeartHandshake className="h-5 w-5 mt-1 text-teal-600" />
                  <p>
                    <span className="font-medium">Unified Brand Story:</span>{" "}
                    Warm, approachable identity—colors, fonts, and messaging—
                    parents associate with expert, compassionate care.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CalendarCheck className="h-5 w-5 mt-1 text-teal-600" />
                  <p>
                    <span className="font-medium">Website Overhaul:</span>{" "}
                    Mobile-first site with easy appointment booking, parent
                    resources, and interactive campus maps.
                  </p>
                </li>
                <li className="flex gap-3">
                  <PlayCircle className="h-5 w-5 mt-1 text-teal-600" />
                  <p>
                    <span className="font-medium">
                      Full-Service Social Management:
                    </span>{" "}
                    Calendar of pediatric tips, seasonal advisories, and
                    behind-the-scenes staff moments, supported by professional
                    photo/video shoots.
                  </p>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-teal-600" />
                  <p>
                    <span className="font-medium">
                      On-Campus Content Enablement:
                    </span>{" "}
                    Trained staff to capture authentic moments—vaccination
                    drives, wellness camps, and parent workshops—so every campus
                    contributes to the story.
                  </p>
                </li>
                <li className="flex gap-3">
                  <BookOpen className="h-5 w-5 mt-1 text-teal-600" />
                  <p>
                    <span className="font-medium">Storytelling Campaigns:</span>{" "}
                    <em>"Healthy Starts Here"</em> series highlighting real
                    parent concerns, child milestones, and preventive care
                    advice.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Results ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Results
              </h2>
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
                Community engagement increased significantly, with local schools
                and childcare centers now partnering with the clinics for health
                workshops and awareness programs.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Videos ===== */}
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
    </div>
  );
}
