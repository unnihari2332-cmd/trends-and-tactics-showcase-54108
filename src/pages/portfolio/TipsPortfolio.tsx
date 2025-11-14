// src/pages/portfolio/TipsPortfolio.tsx
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const heroBg = "/0008.jpg"; // image in public folder

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

  // Scroll to active slide
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  // Auto-advance
  useEffect(() => {
    if (!urls.length) return;
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

      {/* ===== HERO WITH DIGITAL ADS-STYLE BREADCRUMB ===== */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-16 text-center">
          {/* breadcrumb (same style as DigitalAds) */}
          <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-60">›</span>
            <Link to="/portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <span className="opacity-60">›</span>
            <span className="text-white">The Indian Public School</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-normal text-white">
            The Indian Public School
          </h1>
        </div>
      </section>

      {/* SHORT OVERVIEW */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              Education · Case Study
            </span>
            <p className="text-gray-700 leading-relaxed mt-3">
              Complete rebranding and digital presence transformation that
              modernized traditional learning environments, strengthened parent
              trust, and positioned the school as a leading choice in its
              region.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE + APPROACH */}
      <section className="py-8">
        <div className="container mx-auto px-6 grid gap-6 md:grid-cols-2">
          {/* Challenge */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
            <p className="text-gray-700 leading-relaxed">
              The Indian Public School faced declining enrollment and poor
              online visibility in a competitive educational landscape. Their
              outdated digital presence failed to communicate their academic
              excellence and modern teaching methodologies to prospective
              parents and students. The school needed a comprehensive digital
              transformation to rebuild trust and attract quality enrollments.
            </p>
          </div>

          {/* Our Approach */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implemented a comprehensive digital transformation strategy
              that included:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
              <li>• Modern, conversion-focused website redesign with intuitive navigation</li>
              <li>• Comprehensive SEO strategy targeting local education keywords</li>
              <li>• Strategic social media campaigns showcasing student achievements</li>
              <li>• Targeted advertising campaigns reaching prospective parents</li>
              <li>• Brand guidelines ensuring consistent communication across all channels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTS + PROJECT INFO (single row, two columns) */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Results Achieved */}
            <div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-semibold mb-4">Results Achieved</h2>

              <div className="grid md:grid-cols-2 gap-4">
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

            {/* Project Information */}
            <div className="lg:col-span-4 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Project Information</h3>

              <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>
      </section>

      {/* VIDEOS */}
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
