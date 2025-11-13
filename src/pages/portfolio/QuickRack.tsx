// src/pages/portfolio/QuickRack.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Zap,
  BadgeCheck,
  Megaphone,
  LayoutGrid,
  Palette,
  Type,
  Package,
} from "lucide-react";

const heroBg = "/quickrack-hero.jpg"; // add a 16:9 image to /public

/* ------------ Small presentational helpers (light style) ------------ */
function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <div className="font-semibold">{title}</div>
      <p className="text-gray-700 text-sm mt-1">{desc}</p>
    </div>
  );
}

function Highlight({
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

export default function QuickRack() {
  useEffect(() => {
    document.title = "Quick Rack — Logo Design & Brand Identity | Trends & Tactics";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== Hero ===== */}
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
            Quick Rack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-white/90"
          >
            Logo Design &amp; Brand Identity
          </motion.p>
        </div>
      </section>

      {/* ===== Challenge & Positioning ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Challenge */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Challenge</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The brand’s visual identity was inconsistent and didn’t communicate its promise of
                fast and reliable service. We needed a bold, memorable logo that instantly resonates
                with clients and scales across all digital and offline touchpoints.
              </p>
            </div>

            {/* Brand Positioning (pillars) */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Megaphone className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Brand Positioning</h2>
              </div>
              <div className="grid gap-4">
                <Pillar
                  title="Swift & Reliable"
                  desc="Visual cues that communicate speed, precision, and trust."
                />
                <Pillar
                  title="Modern & Professional"
                  desc="A clean aesthetic that reflects quality and confidence."
                />
                <Pillar
                  title="Everywhere-Ready"
                  desc="Optimized to perform across apps, packaging, and print."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Our Approach & Highlights ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <LayoutGrid className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Our Approach</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We developed a logo system that embodies Quick Rack’s energy, professionalism, and
              customer-first mindset—balancing visual impact with everyday usability.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <Highlight
                icon={<Palette className="h-5 w-5" />}
                title="Logo Design"
                desc="A sleek, modern symbol representing trust, efficiency, and brand strength."
              />
              <Highlight
                icon={<Type className="h-5 w-5" />}
                title="Brand Identity System"
                desc="Harmonized palette & typography for quality, clarity, and consistency."
              />
              <Highlight
                icon={<Package className="h-5 w-5" />}
                title="Versatility"
                desc="Designed to scale across app icons, packaging, marketing, and web."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Results Achieved ===== */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Results Achieved</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Distinctive and consistent brand identity across all touchpoints</li>
              <li>• Enhanced brand recognition and audience trust</li>
              <li>• Strong visual presence online and offline</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
