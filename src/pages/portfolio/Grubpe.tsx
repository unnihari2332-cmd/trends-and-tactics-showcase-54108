// src/pages/portfolio/Grubpe.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Palette,
  Type,
  Package,
  Sparkles,
  BadgeCheck,
  Megaphone,
  LayoutGrid,
} from "lucide-react";

const heroBg = "/grubpe-hero.jpg"; // add a 16:9 hero image to /public

/* ------------ Small presentational helpers ------------ */
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

export default function Grubpe() {
  useEffect(() => {
    document.title = "Grubpe — Logo Design & Brand Identity | Trends & Tactics";
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
            Grubpe
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

      {/* ===== Intro / Overview ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Crafting a bold, memorable visual identity for Grubpe—built to stand out across
              apps, packaging, and marketing while communicating reliability, modernity, and ease.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Challenge & Positioning ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Challenge */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Challenge</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Grubpe needed a logo and identity that instantly conveys trust, speed, and dining
                convenience—scaling gracefully from digital touchpoints to physical applications.
              </p>
            </div>

            {/* Brand Positioning (pillars) */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <Megaphone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Brand Positioning</h3>
              </div>
              <div className="grid gap-4">
                <Pillar
                  title="Modern & Recognizable"
                  desc="An iconic mark that reads clearly at any size."
                />
                <Pillar
                  title="Warm & Accessible"
                  desc="A palette and tone that feel fresh, friendly, and appetizing."
                />
                <Pillar
                  title="Built for Everywhere"
                  desc="From app icons and social to delivery packaging and OOH."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Our Approach ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <LayoutGrid className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Our Approach</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We focused on a clean, scalable system that captures Grubpe’s dynamic energy,
              accessibility, and customer-first vision.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <Highlight
                icon={<Palette className="h-5 w-5" />}
                title="Logo Design"
                desc="A crisp, modern mark representing trust, speed, and dining convenience."
              />
              <Highlight
                icon={<Type className="h-5 w-5" />}
                title="Brand Identity System"
                desc="Cohesive colors & typography conveying freshness, warmth, and quality."
              />
              <Highlight
                icon={<Package className="h-5 w-5" />}
                title="Scalability"
                desc="Works seamlessly across app icons, packaging, ads, and online platforms."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Results Achieved ===== */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold mb-4">Results Achieved</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Strong, recognizable brand identity across all touchpoints</li>
              <li>• Increased brand recall and customer trust</li>
              <li>• Consistent, impactful presence across digital and offline channels</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
