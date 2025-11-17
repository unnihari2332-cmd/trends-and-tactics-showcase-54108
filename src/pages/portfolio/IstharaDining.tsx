// src/pages/portfolio/IstharaDining.tsx
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

const heroBg = "/mainbanners.jpg";              // 16:9 hero in /public
const sideImage = "/isthara sidebanner.png";    // ← Left side image
const websiteUrl = "#";                         // ← Put live Isthara URL here

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

/* ------------ Full-viewport image lightbox (same behaviour as INDSYS) ------------ */
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

export default function IstharaDining() {
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.title =
      "Isthara Multi Dining — Brand Revamp & Digital Experience | Trends & Tactics";
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
        {/* ===== HERO (same pattern as INDSYS: Swathi-style breadcrumb) ===== */}
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
              <span className="text-white">Isthara Multi Dining</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-normal text-white">
              Isthara Multi Dining — Brand Revamp &amp; Digital Experience
            </h1>
          </div>
        </section>

        {/* ===== Two Column: Left Image + Right Content (exactly like INDSYS) ===== */}
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
                    alt="Isthara Multi Dining Visual"
                    className="w-full h-full object-cover"
                  />

                  {/* View button (opens lightbox) */}
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
                    Isthara Multi Dining is a premium multi-cuisine destination
                    known for its warm ambience and curated dining experiences.
                    Despite strong on-ground reputation, digital presence and
                    brand recall were limited. We partnered to rebuild the
                    brand&apos;s digital identity across website, social media,
                    and search.
                  </p>
                </div>

                {/* Challenge */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Challenge</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The restaurant had an outdated website, low visibility on
                    search, and inconsistent visual identity across platforms.
                    Signature dishes, ambience and guest experiences were not
                    reflected in digital touchpoints, leading to missed
                    discovery and reservations.
                  </p>
                </div>

                {/* Our Approach */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Megaphone className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Our Approach</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We combined food storytelling, design, and performance
                    marketing to create a complete digital revamp.
                  </p>

                  <div className="space-y-4">
                    <Service
                      icon={<Globe className="h-5 w-5" />}
                      title="Website & Menu Experience"
                      desc="A mobile-first, menu-forward website with ambience visuals, chef specials and simple reservation prompts."
                    />
                    <Service
                      icon={<LineChart className="h-5 w-5" />}
                      title="SEO & Local Discovery"
                      desc="Structured content and local SEO around 'multi-cuisine dining', 'family restaurant', and high-intent local searches."
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
                      title="Experience-First"
                      desc="Hero visuals, ambience shots, and plating close-ups that immediately convey the dining experience."
                    />
                    <Pillar
                      title="Premium Yet Warm"
                      desc="Color palette, typography and layouts that balance luxury with approachability."
                    />
                    <Pillar
                      title="Content System"
                      desc="Repeatable templates for reels, chef specials, events, and reviews to keep content consistent and fast."
                    />
                  </div>
                </div>

                {/* Impact Created */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Impact Created</h3>

                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-4">
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                      <div className="text-3xl font-extrabold text-black">
                        200%
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">
                        Increase in website visits (first 3 months)
                      </div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                      <div className="text-3xl font-extrabold text-black">
                        150%
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">
                        Growth in social engagement
                      </div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-5">
                      <div className="text-3xl font-extrabold text-black">
                        70%
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">
                        Uplift in reservation enquiries
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      The brand now owns a recognisable digital identity:
                      consistent visuals, clearer menu storytelling, and a web
                      experience aligned with on-ground service.
                    </p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Stronger brand recall with a cohesive visual and content
                        system across web and social.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Better discovery through structured SEO and
                        location-focused content.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Easier decision-making for guests via clear menu,
                        ambience visuals, and reservation CTAs.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Content playbook for ongoing campaigns: festivals,
                        offers, chef specials, and events.
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

      {/* Lightbox (same as INDSYS) */}
      <ImageLightbox
        src={sideImage}
        alt="Isthara Multi Dining — Banner"
        open={isLightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
