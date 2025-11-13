// src/pages/portfolio/NaalaiNamadhe.tsx
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
  LayoutGrid,
} from "lucide-react";

const heroBg = "/nntvbanners.jpg";       // 16:9 hero image in /public (replace as needed)
const sideImage = "/NNTV.jpg";    // Portrait/feature shot shown on the left
const websiteUrl = "https://www.naalai-namadhe.com/"; // ← put the real live URL

/* ------------ Small presentational helpers ------------ */
function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-gray-700">{desc}</p>
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
      <div className="mb-2 flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="text-sm text-gray-700">{desc}</p>
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
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
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
            className="fixed right-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-white/90 backdrop-blur-sm hover:bg-white/15 hover:text-white"
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
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
              className="block h-auto max-h-[92vh] w-auto max-w-[98vw] rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NaalaiNamadhe() {
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.title = "Naalai Namadhe — Official Website | Trends & Tactics";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== Hero Image Background ===== */}
      <section className="relative h-[50vh] overflow-hidden md:h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        </div>

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight text-white md:text-7xl"
          >
            Naalai Namadhe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-xl text-white/95 md:text-2xl"
          >
            Official Website — Designed & Developed by Trends & Tactics
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-3 max-w-xl text-lg text-white/90"
          >
            Mobile-first build • Clear information architecture • Performance & SEO
          </motion.p>
        </div>
      </section>

      {/* ===== Two Column Section: Image Left + All Content Right ===== */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-5">
            {/* Left: Side Image (2 columns) - Sticky */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:sticky md:top-24 md:col-span-2 md:h-fit"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={sideImage}
                  alt="Naalai Namadhe website preview"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {/* TOP-RIGHT VIEW BUTTON */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/85 px-3 py-2 shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  aria-label="View image larger"
                  title="View image"
                >
                  <ZoomIn className="h-4 w-4" />
                  <span className="text-sm font-medium">View</span>
                </button>
              </div>

              {/* CTA under the image */}
              <div className="mt-4">
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </a>
              </div>
            </motion.div>

            {/* Right: All Content (3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 md:col-span-3"
            >
              {/* Overview */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Overview</h2>
                </div>
                <p className="leading-relaxed text-gray-700">
                  We built the official website for <strong>Naalai Namadhe</strong> with a focus on
                  speed, clarity, and trust. The content structure highlights mission, initiatives,
                  updates, and calls-to-action, ensuring visitors can discover key information and act
                  quickly from any device.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Website</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Performance</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Accessibility</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">SEO</span>
                </div>
              </div>

              {/* Challenge */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Challenge</h2>
                </div>
                <p className="leading-relaxed text-gray-700">
                  Create a clean, credible digital presence that loads fast on budget networks,
                  communicates clearly in a few scrolls, and scales for future announcements and
                  media without complex upkeep.
                </p>
              </div>

              {/* Our Approach */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Megaphone className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Our Approach</h3>
                </div>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We combined a modular content system with performance-first engineering and
                  accessible components.
                </p>

                <div className="space-y-4">
                  <Service
                    icon={<LayoutGrid className="h-5 w-5" />}
                    title="Content Architecture"
                    desc="Mission, programs, news, and CTAs structured into reusable sections for faster publishing."
                  />
                  <Service
                    icon={<Globe className="h-5 w-5" />}
                    title="Website Development"
                    desc="Mobile-first layout, semantic HTML, robust focus states, and image responsiveness."
                  />
                  <Service
                    icon={<LineChart className="h-5 w-5" />}
                    title="Performance & SEO"
                    desc="Lazy loading, asset compression, metadata hygiene, and share-ready Open Graph."
                  />
                </div>
              </div>

              {/* Brand Positioning */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Brand Positioning</h3>
                <div className="space-y-4">
                  <Pillar
                    title="Clarity First"
                    desc="Plain-language sections and straight-line navigation reduce bounce and confusion."
                  />
                  <Pillar
                    title="Trust & Transparency"
                    desc="Consistent visual system and prominent contact/press info increase credibility."
                  />
                  <Pillar
                    title="Scale-Ready"
                    desc="Add pages and announcements without redesign—modules adapt as content grows."
                  />
                </div>
              </div>

              {/* Impact Created */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Impact Created</h3>

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <div className="text-3xl font-extrabold text-black">Green</div>
                    <div className="mt-2 text-center text-xs text-gray-600">Core Web Vitals</div>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <div className="text-3xl font-extrabold text-black">Sub-2s</div>
                    <div className="mt-2 text-center text-xs text-gray-600">
                      Time to Interactive (4G*)
                    </div>
                  </div>
                  <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <div className="text-3xl font-extrabold text-black">+80%</div>
                    <div className="mt-2 text-center text-xs text-gray-600">
                      Faster content discovery
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm leading-relaxed text-gray-700">
                    The site achieves rapid page loads and clear user flows, helping visitors reach
                    the right information (and CTAs) with minimal friction.
                  </p>
                </div>
              </div>

              {/* Tech Stack & Deliverables */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Tech Stack &amp; Deliverables</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">React</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">TypeScript</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Tailwind CSS</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Vercel/CDN</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Analytics</span>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
                  <li>Responsive website design & development</li>
                  <li>Information architecture & editorial blocks</li>
                  <li>On-page SEO & performance tuning</li>
                  <li>OG/Twitter cards & share assets</li>
                </ul>
              </div>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-6">
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  Visit Live Site <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50"
                >
                  Start a Similar Project
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        src={sideImage}
        alt="Naalai Namadhe website zoom"
        open={isLightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
