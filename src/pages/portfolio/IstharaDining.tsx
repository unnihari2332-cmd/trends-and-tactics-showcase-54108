// src/pages/portfolio/IstharaDining.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Megaphone,
  Globe,
  ChefHat,
  Utensils,
  Clapperboard,
  Camera,
  Search,
  Sparkles,
  BarChart3,
  Palette,
  MapPin,
  Clock,
} from "lucide-react";

const heroBg = "/main banners.jpg";

function CardShell({ title, icon, children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-primary">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Pill({ title, desc, icon }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <div className="flex items-center gap-2 font-semibold">
        {icon ? <span className="text-primary">{icon}</span> : null}
        {title}
      </div>
      <p className="text-gray-700 text-sm mt-1">{desc}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

export default function IstharaDining() {
  useEffect(() => {
    document.title =
      "Isthara Multi Dining – Brand Revamp | Trends & Tactics";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative py-32 md:py-[18rem] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.15]"
          style={{ backgroundImage: `url('${heroBg}')` }}
        >
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Isthara Multi Dining — Brand Revamp & Digital Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-white/90"
          >
            Complete transformation across website, social, and brand systems —
            crafted for a modern food-loving audience.
          </motion.p>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Utensils className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Isthara Multi Dining is a leading multi-cuisine restaurant.
              Despite its premium on-ground experience, the brand suffered from
              low recall and limited digital engagement. We rebuilt the
              experience end-to-end…
            </p>
          </div>
        </div>
      </section>

      {/* ===== MERGED BOX: CHALLENGE + OUR APPROACH ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Challenge & Our Approach</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* Left Column — Challenge */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                  <Megaphone className="h-5 w-5 text-primary" />
                  Challenge
                </h3>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Low brand recall across digital touchpoints.</li>
                  <li>
                    Outdated website lacking menu highlights and reservation
                    flow.
                  </li>
                  <li>
                    Inconsistent social presence that didn’t reflect the
                    ambience or culinary craft.
                  </li>
                </ul>
              </div>

              {/* Right Column — Approach */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Our Approach
                </h3>

                <div className="grid gap-3">
                  <Pill
                    title="Website Development"
                    desc="Mobile-first site with menu highlights and improved reservation journey."
                    icon={<Globe className="h-4 w-4" />}
                  />
                  <Pill
                    title="Instagram Strategy"
                    desc="Cuisine spotlights, chef specials, and reels."
                    icon={<Camera className="h-4 w-4" />}
                  />
                  <Pill
                    title="Brand Positioning"
                    desc="Warm luxury palette, refined modern type."
                    icon={<Palette className="h-4 w-4" />}
                  />
                  <Pill
                    title="Social Campaigns"
                    desc="Narrative-driven posts and community stories."
                    icon={<Clapperboard className="h-4 w-4" />}
                  />
                  <Pill
                    title="SEO Optimization"
                    desc='Targeting “multi-cuisine restaurants near me”.'
                    icon={<Search className="h-4 w-4" />}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== OTHER SECTIONS REMAIN SAME ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <CardShell title="Key Visual Directions" icon={<Palette className="h-5 w-5" />}>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Photography:</strong> Cinematic food close-ups.</li>
              <li><strong>Video:</strong> Slow-motion plating & ambience.</li>
              <li><strong>Palette:</strong> Deep golds, charcoal, modern sans-serif.</li>
            </ul>
          </CardShell>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <CardShell title="Results Achieved" icon={<BarChart3 className="h-5 w-5" />}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat value="200%" label="Increase in website visits" />
              <Stat value="150%" label="Growth in engagement" />
              <Stat value="75%" label="Boost in reservations" />
              <Stat value="+" label="Brand consistency" />
            </div>
          </CardShell>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <CardShell title="Experience Highlights" icon={<ChefHat className="h-5 w-5" />}>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Seasonal menus integrated with marketing.</li>
                <li>Fast reel templates for teams.</li>
                <li>Event & offer amplification.</li>
              </ul>
            </CardShell>

            <CardShell title="Practical Details" icon={<Clock className="h-5 w-5" />}>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-primary" /> Local SEO improved discovery.
                </li>
                <li className="flex gap-2">
                  <Clock className="h-4 w-4 mt-1 text-primary" /> Launch timed for peak seasons.
                </li>
              </ul>
            </CardShell>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
