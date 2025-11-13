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
const heroBg = "/main banners.jpg"; // hero image in /public
const ambienceImg = "/isthara-ambience.jpg";

/* ------------ Small presentational helpers ------------ */
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
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-primary">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
        {value}
      </div>
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
    <div className="rounded-lg border border-gray-200 p-3 bg-white">
      <div className="flex items-center gap-2 font-semibold">
        {icon ? <span className="text-primary">{icon}</span> : null}
        {title}
      </div>
      <p className="text-gray-700 text-sm mt-1">{desc}</p>
    </div>
  );
}

/** ========= PAGE ========= */
export default function IstharaDining() {
  useEffect(() => {
    document.title = "Isthara Multi Dining – Brand Revamp | Trends & Tactics";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ===== HERO (medium height, no extra space) ===== */}
      <section className="relative h-[360px] md:h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroBg}')` }}
        >
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Isthara Multi Dining — Brand Revamp & Digital Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-white/90"
          >
            Complete transformation across website, social, and brand systems — crafted
            for a modern food-loving audience.
          </motion.p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Utensils className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Isthara Multi Dining is a leading multi-cuisine restaurant. Despite its
              premium on-ground experience, the brand suffered from low recall and
              limited digital engagement. We rebuilt the experience end-to-end: a
              mobile-first site, cohesive Instagram strategy, refreshed brand system, and
              SEO to drive discovery and reservations.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CHALLENGE + APPROACH ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="grid gap-5 md:grid-cols-2">
            <CardShell title="Challenge" icon={<Megaphone className="h-5 w-5" />}>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
                <li>Low brand recall across digital touchpoints.</li>
                <li>Outdated website lacking menu highlights and reservation flow.</li>
                <li>
                  Inconsistent social presence that didn’t reflect the ambience or
                  culinary craft.
                </li>
              </ul>
            </CardShell>

            <CardShell title="Our Approach" icon={<Sparkles className="h-5 w-5" />}>
              <div className="grid gap-2">
                <Pill
                  title="Website Development"
                  desc="Sleek, mobile-first site with rich menu sections, ambience showcases, and a streamlined reservation journey."
                  icon={<Globe className="h-4 w-4" />}
                />
                <Pill
                  title="Instagram Strategy"
                  desc="Cohesive grid with cuisine spotlights, chef specials, and reels."
                  icon={<Camera className="h-4 w-4" />}
                />
                <Pill
                  title="Brand Positioning"
                  desc="Refined visuals, warm luxury palette, modern type, consistent tone."
                  icon={<Palette className="h-4 w-4" />}
                />
                <Pill
                  title="Social Campaigns"
                  desc="Narrative-driven posts & UGC prompts to build a loyal foodie audience."
                  icon={<Clapperboard className="h-4 w-4" />}
                />
                <Pill
                  title="SEO Optimization"
                  desc='Focused on “best dining experience” & “multi-cuisine restaurants near me”.'
                  icon={<Search className="h-4 w-4" />}
                />
              </div>
            </CardShell>
          </div>
        </div>
      </section>

      {/* ===== VISUAL DIRECTIONS ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <CardShell
            title="Key Visual Directions"
            icon={<Palette className="h-5 w-5" />}
          >
            <ul className="space-y-1 text-gray-700 text-sm md:text-base">
              <li>
                <span className="font-semibold">Photography:</span> Clean food
                close-ups & warm ambience shots.
              </li>
              <li>
                <span className="font-semibold">Video Mood:</span> Slow-motion prep,
                plating visuals, crowd energy.
              </li>
              <li>
                <span className="font-semibold">Palette:</span> Luxury warmth (gold,
                clay, charcoal).
              </li>
            </ul>
            {ambienceImg ? (
              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
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

      {/* ===== RESULTS ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <CardShell
            title="Results Achieved"
            icon={<BarChart3 className="h-5 w-5" />}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Stat value="200%" label="Increase in website visits" />
              <Stat value="150%" label="Growth in Instagram engagement" />
              <Stat value="75%" label="Boost in online reservations" />
              <Stat value="+" label="Improved brand consistency" />
            </div>
          </CardShell>
        </div>
      </section>

      {/* ===== EXPERIENCE HIGHLIGHTS ===== */}
      <section className="py-6 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid gap-5 md:grid-cols-2">
            <CardShell
              title="Experience Highlights"
              icon={<ChefHat className="h-5 w-5" />}
            >
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
                <li>Seasonal menu campaigns integrated into social strategy.</li>
                <li>Reel templates for fast content creation.</li>
                <li>Offers & events module to support peak-time traffic.</li>
              </ul>
            </CardShell>

            <CardShell
              title="Practical Details"
              icon={<Clock className="h-5 w-5" />}
            >
              <ul className="space-y-1 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-[3px] text-primary" />
                  <span>Local SEO coverage for nearby neighborhoods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-[3px] text-primary" />
                  <span>
                    Launch schedule optimized for festive seasons & weekend spikes.
                  </span>
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
