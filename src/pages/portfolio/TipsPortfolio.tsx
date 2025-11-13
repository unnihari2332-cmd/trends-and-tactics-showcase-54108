// src/pages/portfolio/TipsPortfolio.tsx
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Target,
  Award,
  Video as VideoIcon,
} from "lucide-react";

const heroBg = "/0008.jpg"; // Public folder hero image

/** ================================
 *  YouTube Auto-Scroller
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

  // Slide movement
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  // Auto-scroll
  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % urls.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

const YOUTUBE_VIDEOS = [
  "https://www.youtube.com/watch?v=4aVucTlOvTk",
  "https://www.youtube.com/watch?v=EpgV148eb2w",
  "https://www.youtube.com/watch?v=U-1w44nKid8",
  "https://www.youtube.com/watch?v=9OjBH9dyoZs",
  "https://www.youtube.com/watch?v=BDhNqhXdb6w",
];

export default function TipsPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ======================================================
          HERO SECTION (Correct Height - matches your screenshot)
         ====================================================== */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
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
            The Indian Public School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-white/90"
          >
            Transforming education through digital innovation and modern marketing strategies.
          </motion.p>
        </div>
      </section>

      {/* ======================================================
          SHORT CASE OVERVIEW
         ====================================================== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              Education · Case Study
            </span>
            <p className="text-gray-700 leading-relaxed mt-3">
              Complete rebranding and digital presence transformation that modernized traditional
              learning environments, strengthened parent trust, and positioned the school as a
              leading choice in its region.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          CHALLENGE + OUR APPROACH
         ====================================================== */}
      <section className="py-8">
        <div className="container mx-auto px-6 grid gap-6 md:grid-cols-2">
          {/* Challenge */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
            <p className="text-gray-700 leading-relaxed">
              The Indian Public School faced declining enrollment and poor online visibility in a
              competitive educational landscape. Their outdated digital presence failed to
              communicate their academic excellence and modern teaching methodologies to
              prospective parents and students.
            </p>
          </div>

          {/* Approach */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
              <li>• Modern, conversion-focused website redesign</li>
              <li>• Comprehensive SEO targeting local education keywords</li>
              <li>• Social media campaigns showcasing achievements</li>
              <li>• Targeted ads for prospective parents</li>
              <li>• Consistent brand guidelines across channels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ======================================================
          RESULTS + PROJECT INFO
         ====================================================== */}
      <section className="py-8">
        <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-12">
          {/* Results */}
          <div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Results Achieved</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  250% increase in website traffic
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  180% increase in enrollment enquiries
                </p>
              </div>

              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  95% rise in social engagement
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  #1 ranking for school searches
                </p>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Project Information</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <TrendingUp className="h-6 w-6 text-teal-600 mb-2" />
                  <div className="text-lg font-bold">250%</div>
                  <div className="text-xs text-gray-600">Engagement</div>
                </div>

                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 text-orange-500 mb-2" />
                  <div className="text-lg font-bold">15K+</div>
                  <div className="text-xs text-gray-600">New Students</div>
                </div>

                <div className="flex flex-col items-center">
                  <Target className="h-6 w-6 text-teal-600 mb-2" />
                  <div className="text-lg font-bold">90%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>

                <div className="flex flex-col items-center">
                  <Award className="h-6 w-6 text-orange-500 mb-2" />
                  <div className="text-lg font-bold">#1</div>
                  <div className="text-xs text-gray-600">School Rank</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ======================================================
          VIDEO SECTION — AUTO SCROLL
         ====================================================== */}
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
