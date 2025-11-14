// src/pages/portfolio/INDSYS.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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

const heroBg = "/indsysmain.jpg"; // 16:9 image in /public
const sideImage = "/INDSYS.jpg";   // Side image shown on the left
const websiteUrl = "https://www.indsystech.com/"; // ← update if needed

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

/* ------------ Full-viewport image lightbox (edge-to-edge) ------------ */
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
  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Prevent body scroll when open
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
          {/* Close button fixed to viewport corner */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 inline-flex items-center gap-2 text-white/90 hover:text-white
                       rounded-md px-3 py-1.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
            Close
          </button>

          {/* Stop propagation so clicks on the image don't close */}
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

export default function INDSYS() {
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.title =
      "INDSYS — Creative Design & Digital Transformation | Trends & Tactics";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <PageHeader 
        title="INDSYS — Advanced Water Treatment Systems"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Portfolio", path: "/portfolio" },
          { label: "INDSYS", path: "/portfolio/indsys" }
        ]}
        bgImage={heroBg}
      />

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
              {/* Image wrapper is relative so the button can sit top-right */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={sideImage}
                  alt="INDSYS Project"
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
                  Client-focused advisory for brand and digital transformation—designed to educate,
                  simplify decisions, and grow results efficiently across web and social.
                </p>
              </div>

              {/* Challenge */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Challenge</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Brands today face declining online visibility and inconsistent digital identities.
                  Outdated websites and weak branding limit engagement and growth. INDSYS helps
                  businesses overcome these challenges with creative design and smart digital strategy.
                </p>
              </div>

              {/* Our Approach */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Megaphone className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Our Approach</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We blend creativity, technology, and strategy to deliver complete digital transformation.
                </p>

                <div className="space-y-4">
                  {/* (Removed the Logo & Brand Identity item per your request) */}
                  <Service
                    icon={<Globe className="h-5 w-5" />}
                    title="Website Development"
                    desc="Sleek, responsive, SEO-friendly sites built for performance and conversions."
                  />
                  <Service
                    icon={<LineChart className="h-5 w-5" />}
                    title="SEO & Digital Optimization"
                    desc="Data-driven strategies to enhance visibility, traffic, and reach."
                  />
                </div>
              </div>

              {/* Brand Positioning */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Brand Positioning</h3>
                <div className="space-y-4">
                  <Pillar
                    title="Creative + Strategic"
                    desc="Designs with purpose—every visual supports brand messaging and business goals."
                  />
                  <Pillar
                    title="Conversion-Focused"
                    desc="UX that guides users to act: clearer journeys, faster pages, stronger CTAs."
                  />
                  <Pillar
                    title="Performance-Led"
                    desc="Continuous optimization across SEO, content, and analytics."
                  />
                </div>
              </div>

              {/* Impact Created */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Impact Created</h3>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-4">
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <div className="text-3xl font-extrabold text-black">200%</div>
                    <div className="text-xs text-gray-600 mt-2 text-center">Increase in website visits (3 months)</div>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <div className="text-3xl font-extrabold text-black">150%</div>
                    <div className="text-xs text-gray-600 mt-2 text-center">Growth in social engagement</div>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <div className="text-3xl font-extrabold text-black">75%</div>
                    <div className="text-xs text-gray-600 mt-2 text-center">Boost in online table reservations</div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Strengthened brand identity and recall through consistent visual language, clearer
                    messaging, and performance-first web execution.
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
                      Enhanced brand recognition with cohesive visual identity system
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Improved user experience through intuitive navigation and mobile-responsive design
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Increased organic search rankings with strategic SEO implementation and content optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Streamlined digital presence across all platforms with unified messaging and brand voice
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
        alt="INDSYS Project Zoom"
        open={isLightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
