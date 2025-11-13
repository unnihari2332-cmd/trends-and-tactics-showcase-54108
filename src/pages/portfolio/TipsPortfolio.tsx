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

const heroBg = "/0008.jpg"; // hero image from public

/** ================================
 *  YouTube Auto-Scroller (full 16:9, no cropping)
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

const TipsPortfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== Hero (title over image) ===== */}
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

      {/* ===== Short Case Overview ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                Education · Case Study
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Complete rebranding and digital presence transformation that modernized traditional
              learning environments, strengthened parent trust, and positioned the school as a
              leading choice in its region.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Challenge & Our Approach ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Challenge */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-semibold mb-4 text-black">Challenge</h2>
              <p className="text-gray-700 leading-relaxed">
                The Indian Public School faced declining enrollment and poor online visibility in a
                competitive educational landscape. Their outdated digital presence failed to
                communicate their academic excellence and modern teaching methodologies to
                prospective parents and students. The school needed a comprehensive digital
                transformation to rebuild trust and attract quality enrollments.
              </p>
            </div>

            {/* Our Approach */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-semibold mb-4 text-black">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implemented a comprehensive digital transformation strategy that included:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li>• Modern, conversion-focused website redesign with intuitive navigation</li>
                <li>• Comprehensive SEO strategy targeting local education keywords</li>
                <li>• Strategic social media campaigns showcasing student achievements</li>
                <li>• Targeted advertising campaigns reaching prospective parents</li>
                <li>• Brand guidelines ensuring consistent communication across all channels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Results & Metrics + Project Info ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: Results Achieved */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Results Achieved</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
                      <span className="text-gray-700">
                        250% increase in website traffic from organic and paid sources
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-700">
                        180% increase in enrollment inquiries during admission seasons
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
                      <span className="text-gray-700">
                        95% rise in social engagement across key platforms
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-700">
                        #1 ranking for key local school searches in the region
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The combined effect of brand consistency, improved UX, and performance-driven
                  campaigns translated into stronger recall, higher-quality leads, and a more
                  stable admissions pipeline.
                </p>
              </div>
            </div>

            {/* Right: Project Information */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-black">Project Information</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-4">
                      <TrendingUp className="h-6 w-6 mb-2 text-teal-600" />
                      <div className="text-lg font-bold text-black">250%</div>
                      <div className="text-xs text-gray-600 text-center">Engagement Increase</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-4">
                      <Users className="h-6 w-6 mb-2 text-orange-500" />
                      <div className="text-lg font-bold text-black">15K+</div>
                      <div className="text-xs text-gray-600 text-center">New Student Leads</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-4">
                      <Target className="h-6 w-6 mb-2 text-teal-600" />
                      <div className="text-lg font-bold text-black">90%</div>
                      <div className="text-xs text-gray-600 text-center">Parent Satisfaction</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-4">
                      <Award className="h-6 w-6 mb-2 text-orange-500" />
                      <div className="text-lg font-bold text-black">#1</div>
                      <div className="text-xs text-gray-600 text-center">Local School Ranking</div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      A full-funnel digital strategy connecting discovery (SEO + ads), engagement
                      (social content), and conversion (optimized website), built specifically for
                      education-sector decision journeys.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== Videos (auto-scrolling, like Swathi page) ===== */}
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
};

export default TipsPortfolio;
