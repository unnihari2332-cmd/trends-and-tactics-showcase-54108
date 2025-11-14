// src/pages/portfolio/OECL.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
  Globe,
  LineChart,
  Megaphone,
  X,
  ZoomIn,
  ExternalLink,
} from "lucide-react";

const heroBg = "/oeclmain.jpg"; // 16:9 hero image in /public
const sideImage = "/OECL.jpg"; // Tall side image (left panel)
const websiteUrl = "https://www.oecl.sg/india/home";

/* ------------ Small presentational helpers ------------ */
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

/* ------------ Full-viewport image lightbox ------------ */
function ImageLightbox({
  src,
  alt,
  open,
  onClose,
}: {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={onClose}
            className="fixed top-4 right-4 inline-flex items-center gap-2 text-white/90 hover:text-white
                       rounded-md px-3 py-1.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
            Close
          </button>

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="pointer-events-auto"
          >
            <img
              src={src}
              alt={alt ?? "Preview"}
              className="block w-auto h-auto max-w-[98vw] max-h-[92vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function OECLPortfolio() {
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.title =
      "OECL India — Website Revamp & Digital Experience | Trends & Tactics";
  }, []);

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main>
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
              <span className="text-white">OECL India</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-normal text-white">
              OECL India — Global Shipping & Logistics Brand
            </h1>
          </div>
        </section>

        {/* ===== Two Column Section: Image Left + All Content Right ===== */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Left: Side Image (2 columns) - Sticky */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 md:sticky md:top-24 md:h-fit"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={sideImage}
                    alt="OECL Project"
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-3 right-3 z-10 inline-flex items-center gap-2 rounded-lg px-3 py-2
                               bg-white/85 hover:bg-white border border-gray-200 shadow-md
                               backdrop-blur-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    aria-label="View image larger"
                    title="View image"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm font-medium">View</span>
                  </button>
                </div>

                <div className="mt-4">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2
                               border border-gray-300 hover:border-gray-400 bg-white text-gray-900
                               transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Website
                  </a>
                </div>
              </motion.div>

              {/* Right: All Content (3 columns) */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-3 space-y-8"
              >
                {/* Overview */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Overview</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    OECL India’s new website showcases global logistics
                    capabilities with India-specific strengths. The revamp
                    focuses on clarity, speed, and high-intent conversions
                    across devices with an SEO-optimized, performance-first
                    build.
                  </p>
                </div>

                {/* Challenge */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Challenge</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The previous site lacked visual appeal, clear navigation,
                    and strong messaging around reliability and innovation. OECL
                    needed a modern, user-friendly digital experience to
                    communicate its global reach with local execution.
                  </p>
                </div>

                {/* Our Approach */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Megaphone className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Our Approach</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Strategic redevelopment centered on performance, brand
                    alignment, and conversion-focused UX.
                  </p>

                  <div className="space-y-4">
                    <Service
                      icon={<Globe className="h-5 w-5" />}
                      title="Responsive, Device-First UI"
                      desc="Accessible, fast interfaces across mobile, tablet, and desktop with clear user journeys."
                    />
                    <Service
                      icon={<LineChart className="h-5 w-5" />}
                      title="Performance & SEO"
                      desc="Optimized images, clean markup, schema, and Core Web Vitals improvements for discoverability."
                    />
                  </div>
                </div>

                {/* Brand Positioning */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    Brand Positioning
                  </h3>
                  <div className="space-y-4">
                    <Pillar
                      title="Clean, Global Design"
                      desc="Modern visuals reflecting OECL’s global pedigree with India-first messaging."
                    />
                    <Pillar
                      title="Conversion-Focused"
                      desc="Clear navigation and prominent CTAs to boost qualified inquiries."
                    />
                    <Pillar
                      title="Structured Content"
                      desc="Information architecture highlighting core services, industry solutions, and regional strengths."
                    />
                  </div>
                </div>

                {/* Impact Created */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Impact Created</h3>

                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-4">
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                      <div className="text-3xl font-extrabold text-black">
                        180%
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">
                        Increase in website traffic (3 months)
                      </div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                      <div className="text-3xl font-extrabold text-black">
                        2.5×
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">
                        Rise in qualified leads &amp; inquiries
                      </div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                      <div className="text-3xl font-extrabold text-black">
                        100%
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">
                        Improvement in mobile responsiveness &amp; load
                        performance
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Strengthened digital brand across global and regional
                      audiences by aligning design, information structure, and
                      performance — leading to better visibility and
                      conversions.
                    </p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Clean, professional design reflecting global logistics
                        expertise
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Improved navigation and CTAs to drive conversions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        SEO &amp; performance optimizations lifting visibility
                        and speed
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Structured content surfacing services, industry
                        solutions, and regional strengths
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ImageLightbox
        src={sideImage}
        alt="OECL Project Zoom"
        open={isLightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
