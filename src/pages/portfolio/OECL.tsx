// src/pages/portfolio/OECL.tsx
import React, { useEffect, useState } from "react";
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

const heroBg = "/oecl-hero.jpg";   // 16:9 hero image in /public
const sideImage = "/oecl-side.jpg"; // Tall side image (left panel)
const websiteUrl = "https://www.oecl.sg/india/home"; // ← update if needed

/* ------------ Small presentational helpers (same as INDSYS) ------------ */
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

/* ------------ Full-viewport image lightbox (same as INDSYS) ------------ */
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== Hero Image Background (identical pattern to INDSYS) ===== */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            OECL India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl md:text-2xl text-white/95 max-w-2xl"
          >
            Global Logistics Expertise · India-First Digital Experience
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-3 text-lg text-white/90 max-w-xl"
          >
            Website Revamp • Performance & SEO • Conversion-Focused UX
          </motion.p>
        </div>
      </section>

      {/* ===== Two Column Section: Image Left + All Content Right (same grid) ===== */}
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
                  src="/OECL.jpg"
                  alt="OECL Project"
                  className="w-full h-full object-cover"
                />

                {/* TOP-RIGHT VIEW BUTTON */}
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

              {/* CTA under the image */}
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
                  OECL India’s new website showcases global logistics capabilities with
                  India-specific strengths. The revamp focuses on clarity, speed, and high-intent
                  conversions across devices with an SEO-optimized, performance-first build.
                </p>
              </div>

              {/* Challenge */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Challenge</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The previous site lacked visual appeal, clear navigation, and strong messaging
                  around reliability and innovation. OECL needed a modern, user-friendly digital
                  experience to communicate its global reach with local execution.
                </p>
              </div>

              {/* Our Approach */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Megaphone className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Our Approach</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Strategic redevelopment centered on performance, brand alignment, and
                  conversion-focused UX.
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
                <h3 className="text-xl font-semibold mb-4">Brand Positioning</h3>
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

              {/* Impact Created (uses OECL metrics) */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Impact Created</h3>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-4">
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <div className="text-3xl font-extrabold text-black">180%</div>
                    <div className="text-xs text-gray-600 mt-2 text-center">
                      Increase in website traffic (3 months)
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <div className="text-3xl font-extrabold text-black">2.5×</div>
                    <div className="text-xs text-gray-600 mt-2 text-center">
                      Rise in qualified leads & inquiries
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <div className="text-3xl font-extrabold text-black">100%</div>
                    <div className="text-xs text-gray-600 mt-2 text-center">
                      Improvement in mobile responsiveness & load performance
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Strengthened digital brand across global and regional audiences by aligning
                    design, information structure, and performance — leading to better visibility and
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
                      Clean, professional design reflecting global logistics expertise
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
                      SEO & performance optimizations lifting visibility and speed
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Structured content surfacing services, industry solutions, and regional strengths
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        src={sideImage}
        alt="OECL Project Zoom"
        open={isLightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
