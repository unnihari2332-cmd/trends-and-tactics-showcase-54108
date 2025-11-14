// src/pages/portfolio/IstharaDining.tsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const heroBg = "/mainbanners.jpg";

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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

/* ------------ Page ------------ */
export default function IstharaDining() {
  useEffect(() => {
    document.title = "Isthara Multi Dining – Brand Revamp | Trends & Tactics";
  }, []);

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      {/* ===========================
           HERO + BREADCRUMB STYLE
         =========================== */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center 30%", // move hero image down
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-16 text-center">
          {/* breadcrumb same as DigitalAds / Swathi PR */}
          <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-60">›</span>
            <Link to="/portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <span className="opacity-60">›</span>
            <span className="text-white">Isthara Multi Dining</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-normal text-white">
            Isthara Multi Dining — Brand Revamp & Digital Experience
          </h1>
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
              experience end-to-end: a mobile-first site, cohesive Instagram
              strategy, refreshed brand system, and SEO to drive discovery and
              reservations.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CHALLENGE + APPROACH ===== */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">
                Challenge &amp; Our Approach
              </h2>
            </div>

            {/* Challenge */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                <Megaphone className="h-5 w-5 text-primary" />
                Challenge
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Low brand recall across digital touchpoints.</li>
                <li>
                  Outdated website lacking menu highlights and reservation flow.
                </li>
                <li>
                  Inconsistent social presence failing to reflect ambience &
                  cuisine quality.
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-gray-200 mb-6" />

            {/* Approach */}
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                Our Approach
              </h3>

              <div className="grid gap-3 md:grid-cols-2">
                <Pill
                  title="Website Development"
                  desc="Mobile-first, menu-rich site with ambience showcases and a streamlined reservation UX."
                  icon={<Globe className="h-4 w-4" />}
                />
                <Pill
                  title="Instagram Design Strategy"
                  desc="Chef specials, cuisine highlights, ambience reels, and 3-grid aesthetic layouts."
                  icon={<Camera className="h-4 w-4" />}
                />
                <Pill
                  title="Brand Positioning"
                  desc="Refined luxury palette, modern typefaces, and consistent visual identity."
                  icon={<Palette className="h-4 w-4" />}
                />
                <Pill
                  title="Social Campaigns"
                  desc="Narrative-based engagements, food storytelling, and user prompts."
                  icon={<Clapperboard className="h-4 w-4" />}
                />
                <Pill
                  title="SEO Optimization"
                  desc='Strong local SEO for queries like “best dining experience“ and “multi-cuisine restaurants near me.”'
                  icon={<Search className="h-4 w-4" />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISUAL DIRECTIONS ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <CardShell
            title="Key Visual Directions"
            icon={<Palette className="h-5 w-5" />}
          >
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Photography:</strong> Cinematic food close-ups, warm
                ambience, natural light accents.
              </li>
              <li>
                <strong>Video Mood:</strong> Slow-motion prep, plating, clinking
                glasses; tasteful transitions.
              </li>
              <li>
                <strong>Palette:</strong> Deep golds, charcoal, warm neutrals,
                modern sans-serif fonts.
              </li>
            </ul>
          </CardShell>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <CardShell title="Results Achieved" icon={<BarChart3 className="h-5 w-5" />}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat value="200%" label="Increase in website visits" />
              <Stat value="150%" label="Growth in Instagram engagement" />
              <Stat value="75%" label="Rise in table reservations" />
              <Stat value="+" label="Boost in brand consistency" />
            </div>
          </CardShell>
        </div>
      </section>

      {/* ===== PRACTICAL DETAILS ===== */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <CardShell title="Experience Highlights" icon={<ChefHat className="h-5 w-5" />}>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chef specials calendar synced to content plan.</li>
                <li>Reel templates for faster content output.</li>
                <li>Event/offers module for high-reservation periods.</li>
              </ul>
            </CardShell>

            <CardShell title="Practical Details" icon={<Clock className="h-5 w-5" />}>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-primary" />
                  Local SEO boost for nearby dining-density corridors.
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-1 text-primary" />
                  Launch schedule aligned with festive and weekend peaks.
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
