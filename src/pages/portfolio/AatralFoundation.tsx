// src/pages/portfolio/AatralFoundation.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  TrendingUp,
  Share2,
  LineChart,
  Target,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const heroBg = "/aatral-hero.jpg";

const METRICS = [
  { label: "Audience Growth", value: "900%", icon: TrendingUp },
  { label: "Followers", value: "30K+", icon: Users },
  { label: "Engagement Rate", value: "7×", icon: LineChart },
  { label: "Local Awareness", value: "Top Local", icon: Target },
];

// === Auto-scrolling Instagram reels ===
function ReelsAutoScroller({
  ids,
  intervalMs = 5000,
  height = 540,
}: {
  ids: string[];
  intervalMs?: number;
  height?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  useEffect(() => {
    const start = () => {
      stop();
      timerRef.current = window.setInterval(
        () => setIndex((i) => (i + 1) % ids.length),
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
  }, [ids.length, intervalMs]);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="overflow-x-hidden snap-x snap-mandatory scroll-smooth rounded-xl border border-gray-200 bg-white"
        style={{ height }}
      >
        <div className="flex w-full h-full">
          {ids.map((id) => (
            <div key={id} className="min-w-full snap-start h-full">
              <iframe
                className="w-full h-full"
                src={`https://www.instagram.com/reel/${id}/embed`}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                frameBorder={0}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {ids.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
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

export default function AatralFoundation() {
  useEffect(() => {
    document.title = "Aatral Foundation – Case Study | Trends & Tactics";
  }, []);

  // All sections kept; just remove the 3rd reel ID
  const REELS = [
    "DN135CVwoPW",
    "DNR0uYqNRkk",
    // "DL9u2Bbvug7",  // <-- removed only this video
    "DGkp2d0Ph--",
    "DGVOLnFB79u",
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* ===== Hero (title only) ===== */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroBg}')` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Aatral Foundation – Social Media Rebrand & 10× Growth
          </motion.h1>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-6"
          >
            Complete social-media transformation that amplified a local NGO’s
            voice, engagement, and community reach in Erode, Tamil Nadu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-gray-700"
          >
            <span className="inline-flex items-center gap-2">
              <HeartHandshake className="h-5 w-5" /> Non-Profit / Community Impact
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-5 w-5" /> Erode, Tamil Nadu
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-5 w-5" /> Founder:
              <span className="font-semibold">Aatral Ashok Kumar</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ===== Body ===== */}
      <section className="relative pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT column */}
            <div className="lg:col-span-8 space-y-8">
              {/* All descriptive blocks remain unchanged */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-4">
                  Non-Profit / Community Impact
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We aligned brand identity, content strategy, and targeted outreach
                  to transform Aatral Foundation’s digital presence. Starting from{" "}
                  <strong>3,000 followers</strong>, we executed a consistent,
                  story-led content plan and community engagement that scaled the
                  audience to <strong>30,000 followers</strong>, strengthened
                  volunteer pipelines, and improved donor visibility.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Challenge</h2>
                <p className="text-gray-700 leading-relaxed">
                  Despite impactful on-ground initiatives, Aatral Foundation had a
                  limited online footprint with just <strong>3,000 followers</strong>.
                  The story of their work wasn’t reaching potential donors,
                  volunteers, and community allies. They needed a cohesive digital
                  identity and growth plan to scale visibility and engagement.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Our Approach</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implemented a focused social-media growth strategy that included:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Visual & Content Rebrand – Cohesive identity, color system, and reusable storytelling templates aligned to the mission.</li>
                  <li>• High-Impact Content Calendar – Weekly reels, impact stories, volunteer spotlights, and behind-the-scenes features.</li>
                  <li>• Community Engagement – Interactive polls, Q&As, and cause-based campaigns to spark shares and comments.</li>
                  <li>• Targeted Local Outreach – Geo-targeted boosts and collaborations with local influencers and partner NGOs across Erode & nearby districts.</li>
                  <li>• Analytics & Optimization – Monthly reviews to refine topics, formats, and posting windows.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Results Achieved</h2>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-medium text-black">900% growth</span> – Followers scaled from <strong>3,000</strong> to <strong>30,000</strong>.</li>
                  <li><span className="font-medium text-black">7× engagement</span> – Significant lift in likes, shares, comments, and video views.</li>
                  <li><span className="font-medium text-black">Community Mobilization</span> – Increased volunteer sign-ups and donor inquiries through impact-led campaigns.</li>
                  <li><span className="font-medium text-black">Recognized Local Voice</span> – Among the most visible NGOs in the Erode region.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT column */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-black">Project Information</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {METRICS.map(({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4"
                      >
                        <Icon className="h-6 w-6 mb-2 text-teal-600" />
                        <div className="text-lg font-bold text-black">{value}</div>
                        <div className="text-xs text-gray-600">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-white border border-gray-200 p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      A comprehensive social-media transformation aligning brand,
                      content, community, and analytics—designed to drive measurable,
                      mission-aligned growth.
                    </p>
                  </div>

                  <div className="mt-6 rounded-lg bg-white border border-gray-200 p-4">
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>Client:</strong> Aatral Foundation</li>
                      <li><strong>Founder:</strong> Aatral Ashok Kumar</li>
                      <li><strong>Location:</strong> Erode, Tamil Nadu</li>
                      <li className="inline-flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        Cross-platform presence with local-first storytelling
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Videos (3rd reel removed only) */}
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 shadow-xl">
                  <h3 className="text-xl font-bold mb-4 text-black">Videos</h3>
                  <ReelsAutoScroller ids={REELS} intervalMs={5000} height={540} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
