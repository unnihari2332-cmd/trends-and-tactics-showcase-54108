// src/pages/portfolio/AatralFoundation.tsx
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
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";

/* ----------- Images ----------- */
const heroBg = "/0011.jpg";
const sideImage = "/Aatral.png";

/* ----------- Mini Components (same structure as INDSYS) ----------- */
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

/* ----------- Lightbox ----------- */
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
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
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
        >
          <button
            onClick={onClose}
            className="fixed top-4 right-4 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md flex items-center gap-2"
          >
            <X className="w-5 h-5" /> Close
          </button>

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <img
              src={src}
              alt={alt}
              className="max-w-[98vw] max-h-[92vh] rounded-lg shadow-2xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----------- MAIN PAGE ----------- */
export default function AatralFoundation() {
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.title = "Aatral Foundation — Case Study | Trends & Tactics";
  }, []);

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main>
        {/* ----------- HERO (NO GRADIENT) ----------- */}
        <section className="relative min-h-[40vh] flex items-center justify-center">
          <img
            src={heroBg}
            alt="Aatral"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white drop-shadow-lg mb-3">
              <Link to="/" className="hover:opacity-80">
                Home
              </Link>
              <span>›</span>
              <Link to="/portfolio" className="hover:opacity-80">
                Portfolio
              </Link>
              <span>›</span>
              <span className="font-semibold">Aatral Foundation</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-semibold text-white drop-shadow-xl">
              Aatral Foundation — Growth & Social Impact
            </h1>
          </div>
        </section>

        {/* ----------- TWO COLUMN LAYOUT ----------- */}
        <section className="py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-5 gap-8">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2 md:sticky md:top-24 md:h-fit"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src={sideImage}
                  alt="Aatral Foundation"
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute top-3 right-3 bg-white/85 hover:bg-white px-3 py-2 rounded-lg border shadow flex items-center gap-2"
                >
                  <ZoomIn className="w-4 h-4" />
                  View
                </button>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-3 space-y-8"
            >
              {/* Overview */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Overview</h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Aatral Foundation supports educational, social, and community
                  initiatives across Tamil Nadu. We built a digital-first communication
                  system that highlights impact, enables donor trust, and expands reach
                  across target communities.
                </p>
              </div>

              {/* Challenge */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Challenges</h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Awareness was low, and much of their impact storytelling remained
                  offline. No central digital identity existed to highlight the work,
                  events, beneficiaries, or progress.
                </p>
              </div>

              {/* Approach */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Megaphone className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Our Approach</h3>
                </div>

                <div className="space-y-4">
                  <Service
                    icon={<Target className="h-5 w-5" />}
                    title="Impact-Focused Branding"
                    desc="Created a narrative-driven identity that reflects trust, community and empowerment."
                  />
                  <Service
                    icon={<HeartHandshake className="h-5 w-5" />}
                    title="Storytelling Framework"
                    desc="Designed stories around volunteers, beneficiaries, and real community transformation."
                  />
                  <Service
                    icon={<Users className="h-5 w-5" />}
                    title="Social Presence"
                    desc="Built Instagram & FB ecosystem with templates, reels, success stories & events."
                  />
                </div>
              </div>

              {/* Brand Positioning */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Brand Positioning
                </h3>

                <div className="space-y-4">
                  <Pillar
                    title="Human-Centered"
                    desc="Stories of children, families, and communities take center stage."
                  />
                  <Pillar
                    title="Transparent & Trustworthy"
                    desc="Clear communication of donations, events, and outcomes."
                  />
                  <Pillar
                    title="Community-Driven Identity"
                    desc="Consistent color palette, iconography, and layout for social & web."
                  />
                </div>
              </div>

              {/* Impact */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Impact Created
                </h3>

                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-5 rounded-xl text-center border">
                    <div className="text-3xl font-extrabold">900%</div>
                    <p className="text-xs mt-2 text-gray-600">
                      Audience Growth
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-xl text-center border">
                    <div className="text-3xl font-extrabold">30K+</div>
                    <p className="text-xs mt-2 text-gray-600">
                      Followers
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-xl text-center border">
                    <div className="text-3xl font-extrabold">7×</div>
                    <p className="text-xs mt-2 text-gray-600">
                      Engagement Rate
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 border p-4">
                  <p className="text-sm text-gray-700">
                    Aatral's online brand transformed into a powerful community
                    movement through consistent design, storytelling, and optimized
                    reach.
                  </p>
                </div>
              </div>

              {/* Key Results */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Key Results</h3>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-gray-700">
                      Strong NGO digital identity & recognition
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-gray-700">
                      Transparent reporting through social content
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-gray-700">
                      Improved donor & volunteer trust
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-gray-700">
                      Engaging storytelling system that scales
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        src={sideImage}
        alt="Aatral Foundation"
        open={isLightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
