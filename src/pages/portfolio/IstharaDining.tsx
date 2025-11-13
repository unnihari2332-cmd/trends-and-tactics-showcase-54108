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

/** ========= Assets ========= */
const heroBg = "/isthara-hero.jpg"; // replace with your hero image (16:9 works great)
const ambienceImg = "/isthara-ambience.jpg"; // optional supporting image

/* ------------ Small presentational helpers (same vibe as Swathi page) ------------ */
function CardShell({
  title,
  icon,
  children,
  className = "",
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-primary">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Pill({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}) {
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

/** ========= Page ========= */
export default function IstharaDining() {
  useEffect(() => {
    document.title = "Isthara Multi Dining – Brand Revamp | Trends & Tactics";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== Hero (title over image) ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroBg}')` }}
          aria-hidden
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
            Complete transformation across website, social, and brand systems — crafted for a modern food-loving audience.
          </motion.p>
        </div>
      </section>

      {/* ===== Intro / Overview ===== */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Utensils className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Isthara Multi Dining is a leading multi-cuisine restaurant. Despite its premium on-ground experience,
              the brand suffered from low recall and limited digital engagement. We rebuilt the experience end-to-end:
              a mobile-first site, cohesive Instagram strategy, refreshed brand system, and SEO to drive discovery and reservations.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Challenge & What We Did ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <CardShell title="Challenge" icon={<Megaphone className="h-5 w-5" />}>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Low brand recall across digital touchpoints.</li>
                <li>Outdated website lacking menu highlights and reservation flow.</li>
                <li>Inconsistent social presence that didn’t reflect the ambience or culinary craft.</li>
              </ul>
            </CardShell>

            <CardShell title="Our Approach" icon={<Sparkles className="h-5 w-5" />}>
              <div className="grid gap-3">
                <Pill
                  title="Website Development"
                  desc="Sleek, mobile-first site with rich menu sections, ambience showcases, and a streamlined reservation journey."
                  icon={<Globe className="h-4 w-4" />}
                />
                <Pill
                  title="Instagram Design Strategy"
                  desc="Cohesive grid with cuisine spotlights, chef specials, and motion-led reels for ongoing engagement."
                  icon={<Camera className="h-4 w-4" />}
                />
                <Pill
                  title="Brand Positioning"
                  desc="Refined visual identity — warm luxury palette, modern type, consistent tone of voice."
                  icon={<Palette className="h-4 w-4" />}
                />
                <Pill
                  title="Social Campaigns"
                  desc="Narrative-driven posts and UGC prompts to build a loyal foodie community."
                  icon={<Clapperboard className="h-4 w-4" />}
                />
                <Pill
                  title="SEO Optimization"
                  desc='Local SEO for queries like “best dining experience” and “multi-cuisine restaurants near me.”'
                  icon={<Search className="h-4 w-4" />}
                />
              </div>
            </CardShell>
          </div>
        </div>
      </section>

      {/* ===== Visual Directions (kept like Swathi’s “Key Visual Directions”) ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <CardShell title="Key Visual Directions" icon={<Palette className="h-5 w-5" />}>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Photography Style:</span> Clean, cinematic food close-ups; warm,
                inviting ambience shots with natural light accents.
              </li>
              <li>
                <span className="font-semibold">Video Mood:</span> Tasteful slow-motion prep, plating sequences,
                clinking glasses, and crowd energy; subtle lower-thirds.
              </li>
              <li>
                <span className="font-semibold">Palette &amp; Fonts:</span> Luxury warmth (deep golds, clay, charcoal)
                paired with modern sans-serifs for approachability.
              </li>
            </ul>
            {ambienceImg ? (
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <img
                  src={ambienceImg}
                  alt="Isthara ambience"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}
          </CardShell>
        </div>
      </section>

      {/* ===== Results ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <CardShell title="Results Achieved" icon={<BarChart3 className="h-5 w-5" />}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat value="200%" label="Increase in website visits (3 months)" />
              <Stat value="150%" label="Growth in Instagram engagement" />
              <Stat value="75%" label="Boost in online table reservations" />
              <Stat value="+" label="Enhanced brand perception & consistency" />
            </div>
          </CardShell>
        </div>
      </section>

      {/* ===== Experience Highlights / Practical Info (optional, keeps the page rich like Swathi) ===== */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <CardShell title="Experience Highlights" icon={<ChefHat className="h-5 w-5" />}>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chef specials calendar and seasonal menus integrated to marketing cadence.</li>
                <li>Reel templates for quick content turnaround by in-house teams.</li>
                <li>Event & offers module to amplify reservations during peak periods.</li>
              </ul>
            </CardShell>

            <CardShell title="Practical Details" icon={<Clock className="h-5 w-5" />}>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-primary" />
                  <span>Local SEO coverage for nearby neighborhoods & high-intent dining corridors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-1 text-primary" />
                  <span>Launch timeline optimized for festive seasons and weekend traffic spikes.</span>
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
