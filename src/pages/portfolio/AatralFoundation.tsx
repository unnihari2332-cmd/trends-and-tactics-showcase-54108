// src/pages/portfolio/AatralFoundation.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

const heroBg = "/aatral-hero.jpg"; // updated hero image from public

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
}: {
  ids: string[];
  intervalMs?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, [index]);

  const stop = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    if (timerRef.current || ids.length <= 1) return;
    timerRef.current = window.setInterval(
      () => setIndex((i) => (i + 1) % ids.length),
      intervalMs
    );
  };

  useEffect(() => {
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
    <div className="relative w-full">
      <div
        ref={trackRef}
        className="
          overflow-x-hidden
          snap-x snap-mandatory scroll-smooth
          rounded-xl border border-gray-200 bg-white
          w-full max-w-[360px] md:max-w-[380px]
          mx-auto md:mx-0
        "
      >
        <div className="flex w-full">
          {ids.map((id) => (
            <div key={id} className="min-w-full snap-start">
              <div className="w-full aspect-[9/16]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.instagram.com/reel/${id}/embed`}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  frameBorder={0}
                  loading="lazy"
                />
              </div>
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

  const REELS = [
    "DN135CVwoPW",
    "DNR0uYqNRkk",
    // "DL9u2Bbvug7",
    "DGkp2d0Ph--",
    "DGVOLnFB79u",
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')", // side logo like Swathi page
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main className="pb-12">
        {/* ===== HERO (Swathi-style breadcrumb + hero) ===== */}
        <section className="relative min-h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

          <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
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
              <span className="text-white">Aatral Foundation</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-normal text-white">
              Aatral Foundation — Social Media Growth Case Study
            </h1>
          </div>
        </section>

        {/* ===== COMPACT CASE STUDY LAYOUT ===== */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div
              className="
                grid gap-6 lg:gap-8
                lg:grid-cols-[minmax(0,2fr)_minmax(0,1.15fr)]
                items-start
              "
            >
              {/* LEFT COLUMN */}
              <div className="space-y-4 md:space-y-5">
                {/* Overview */}
                <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-wide text-teal-600 mb-3">
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
                      Founder:{" "}
                      <span className="font-semibold">Aatral Ashok Kumar</span>
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Complete social-media transformation that amplified a local
                    NGO’s voice, engagement, and community reach. Starting from{" "}
                    <strong>3,000 followers</strong>, we implemented a story-led
                    content strategy and community-first design that scaled the
                    audience to <strong>30,000+ followers</strong> while
                    strengthening volunteer and donor pipelines.
                  </p>
                </div>

                {/* Challenge + Approach */}
                <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                  {/* Challenge */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
                    <h2 className="text-lg md:text-xl font-semibold mb-3 text-black">
                      Challenge
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Despite impactful on-ground initiatives, Aatral Foundation
                      had a limited online footprint with just{" "}
                      <strong>3,000 followers</strong>. Their impact stories
                      weren’t reaching potential donors, volunteers, and
                      partners. They needed a cohesive digital identity and
                      growth framework to scale visibility, trust, and
                      engagement.
                    </p>
                  </div>

                  {/* Our Approach */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
                    <h2 className="text-lg md:text-xl font-semibold mb-3 text-black">
                      Our Approach
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      We implemented a focused social-media growth strategy that
                      included:
                    </p>
                    <ul className="space-y-1.5 text-gray-700 text-sm md:text-[15px] leading-relaxed">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Visual &amp; Content Rebrand:
                        </span>{" "}
                        cohesive identity, color system, and templates aligned
                        to the mission.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          High-Impact Content Calendar:
                        </span>{" "}
                        weekly reels, impact stories, volunteer spotlights, and
                        BTS content.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Community Engagement:
                        </span>{" "}
                        polls, Q&amp;As, and cause-led campaigns to drive
                        shares and comments.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Targeted Local Outreach:
                        </span>{" "}
                        geo-targeted boosts and collaborations with local
                        influencers and NGOs.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Analytics &amp; Optimization:
                        </span>{" "}
                        monthly reviews to refine topics, formats, and posting
                        windows.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
                  <h2 className="text-lg md:text-xl font-semibold mb-3 text-black">
                    Results Achieved
                  </h2>
                  <ul className="space-y-2 text-gray-700 text-sm md:text-[15px] leading-relaxed">
                    <li>
                      <span className="font-semibold text-black">
                        900% audience growth
                      </span>{" "}
                      – followers scaled from <strong>3,000</strong> to{" "}
                      <strong>30,000+</strong>.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        7× engagement
                      </span>{" "}
                      – significant lift in likes, shares, comments, and video
                      views.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Community mobilisation
                      </span>{" "}
                      – more volunteer sign-ups and donor inquiries through
                      impact-led campaigns.
                    </li>
                    <li>
                      <span className="font-semibold text-black">
                        Recognised local voice
                      </span>{" "}
                      – one of the most visible NGOs in the Erode region.
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-4 md:space-y-5">
                {/* Metrics grid */}
                <div className="rounded-2xl bg-white border border-gray-200 p-4 md:p-5 shadow-sm">
                  <h3 className="text-base md:text-lg font-bold mb-4 text-black">
                    Growth Snapshot
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {METRICS.map(({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-3"
                      >
                        <Icon className="h-5 w-5 mb-1.5 text-teal-600" />
                        <div className="text-base md:text-lg font-bold text-black">
                          {value}
                        </div>
                        <div className="text-[11px] md:text-xs text-gray-600 text-center">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="rounded-2xl bg-white border border-gray-200 p-4 md:p-5 shadow-sm">
                  <h3 className="text-base md:text-lg font-bold mb-3 text-black">
                    Project Information
                  </h3>
                  <ul className="text-sm md:text-[15px] text-gray-700 space-y-1.5 mb-3">
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
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    A comprehensive social-media transformation aligning brand,
                    content, community, and analytics—designed to drive
                    measurable, mission-aligned growth.
                  </p>
                </div>

                {/* Video (Reels) */}
                <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-black">
                    Key Reels
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-3 leading-relaxed">
                    Short-form videos featuring{" "}
                    <strong>real beneficiaries, volunteers</strong>, and{" "}
                    <strong>on-ground work</strong> drove maximum reach and
                    shares in the local community.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <ReelsAutoScroller ids={REELS} intervalMs={5000} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
