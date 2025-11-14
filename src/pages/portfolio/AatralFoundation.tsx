
// src/pages/portfolio/AatralFoundation.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  Users,
  TrendingUp,
  Share2,
  LineChart,
  Target,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const heroBg = "/0011.jpg"; // hero image in public

const METRICS = [
  { label: "Audience Growth", value: "900%", icon: TrendingUp },
  { label: "Followers", value: "30K+", icon: Users },
  { label: "Engagement Rate", value: "7×", icon: LineChart },
  { label: "Local Awareness", value: "Top Local", icon: Target },
];

/** ================================
 *  Auto-scrolling Instagram Reels
 *  ================================ */
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

  // scroll to active slide
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  // auto-advance, pause on hover
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

      {/* dots */}
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

  // 3rd reel removed as you requested earlier
  const REELS = [
    "DN135CVwoPW",
    "DNR0uYqNRkk",
    // "DL9u2Bbvug7",
    "DGkp2d0Ph--",
    "DGVOLnFB79u",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <PageHeader 
        title="Aatral Foundation" 
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Portfolio", path: "/portfolio" }]}
        bgImage={heroBg}
      />

      {/* ===== Overview card (like Swathi short bio card) ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-teal-600 mb-3">
              <span className="inline-flex items-center gap-2">
                <HeartHandshake className="h-4 w-4" />
                Non-Profit · Community Impact
              </span>
              <span className="inline-flex items-center gap-2 text-gray-600 normal-case">
                <MapPin className="h-4 w-4" />
                Erode, Tamil Nadu
              </span>
              <span className="inline-flex items-center gap-2 text-gray-600 normal-case">
                <Users className="h-4 w-4" />
                Founder: <span className="font-semibold">Aatral Ashok Kumar</span>
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Complete social-media transformation that amplified a local NGO’s voice, engagement,
              and community reach. Starting from <strong>3,000 followers</strong>, we implemented a
              story-led content strategy and community-first design that scaled the audience to{" "}
              <strong>30,000+ followers</strong> while strengthening volunteer and donor pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Challenge & Our Approach (two cards like Swathi) ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6 grid gap-6 md:grid-cols-2">
          {/* Challenge */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">Challenge</h2>
            <p className="text-gray-700 leading-relaxed">
              Despite impactful on-ground initiatives, Aatral Foundation had a limited online
              footprint with just <strong>3,000 followers</strong>. Their impact stories were not
              reaching potential donors, volunteers, and partners. They needed a cohesive digital
              identity and growth framework to scale visibility, trust, and engagement.
            </p>
          </div>

          {/* Our Approach */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implemented a focused social-media growth strategy that included:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
              <li>
                • <span className="font-semibold">Visual & Content Rebrand:</span> cohesive identity,
                color system, and templates aligned to the mission.
              </li>
              <li>
                • <span className="font-semibold">High-Impact Content Calendar:</span> weekly reels,
                impact stories, volunteer spotlights, and BTS content.
              </li>
              <li>
                • <span className="font-semibold">Community Engagement:</span> polls, Q&As, and
                cause-led campaigns to drive shares and comments.
              </li>
              <li>
                • <span className="font-semibold">Targeted Local Outreach:</span> geo-targeted boosts
                and collaborations with local influencers and NGOs.
              </li>
              <li>
                • <span className="font-semibold">Analytics & Optimization:</span> monthly reviews to
                refine topics, formats, and posting windows.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Results + Project Information (one row, like Tips/Swathi) ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Results */}
            <div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-2xl font-semibold mb-4 text-black">Results Achieved</h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold text-black">900% audience growth</span> – followers
                  scaled from <strong>3,000</strong> to <strong>30,000+</strong>.
                </li>
                <li>
                  <span className="font-semibold text-black">7× engagement</span> – significant lift
                  in likes, shares, comments, and video views.
                </li>
                <li>
                  <span className="font-semibold text-black">Community mobilisation</span> – more
                  volunteer sign-ups and donor inquiries through impact-led campaigns.
                </li>
                <li>
                  <span className="font-semibold text-black">Recognised local voice</span> – one of
                  the most visible NGOs in the Erode region.
                </li>
              </ul>
            </div>

            {/* Project Info */}
            <div className="lg:col-span-4 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-black">Project Information</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {METRICS.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-4"
                  >
                    <Icon className="h-6 w-6 mb-2 text-teal-600" />
                    <div className="text-lg font-bold text-black">{value}</div>
                    <div className="text-xs text-gray-600 text-center">{label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  A comprehensive social-media transformation aligning brand, content, community,
                  and analytics—designed to drive measurable, mission-aligned growth.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>
                    <strong>Client:</strong> Aatral Foundation
                  </li>
                  <li>
                    <strong>Founder:</strong> Aatral Ashok Kumar
                  </li>
                  <li>
                    <strong>Location:</strong> Erode, Tamil Nadu
                  </li>
                  <li className="inline-flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    Cross-platform presence with local-first storytelling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Videos section (full-width, like Swathi/Tips) ===== */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-black">Videos</h3>
            <ReelsAutoScroller ids={REELS} intervalMs={5000} height={540} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
