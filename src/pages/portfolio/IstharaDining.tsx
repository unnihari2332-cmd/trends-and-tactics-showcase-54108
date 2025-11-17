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
const sideBanner = "/isthara sidebanner.png"; // ← LEFT FIXED IMAGE

/* ------------ Small helpers ------------ */
function CardShell({ title, icon, children }: any) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-primary">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Pill({ title, desc, icon }: any) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <div className="flex items-center gap-2 font-semibold">
        {icon}
        {title}
      </div>
      <p className="text-gray-700 text-sm mt-1">{desc}</p>
    </div>
  );
}

function Stat({ value, label }: any) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
      <div className="text-3xl md:text-4xl font-extrabold">{value}</div>
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
    <div className="relative min-h-screen text-foreground bg-white">
      {/* FIXED LEFT SIDE BANNER */}
      <div
        className="
          hidden lg:block
          fixed left-0 top-0 h-full w-[420px]
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: `url(${sideBanner})`,
        }}
      />

      {/* RIGHT SIDE CONTENT AREA */}
      <div className="lg:ml-[420px] min-h-screen">
        <Header />

        {/* ===== HERO ===== */}
        <section className="relative min-h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

          <div className="relative z-10 container mx-auto max-w-5xl px-6 py-16 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-3">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">›</span>
              <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
              <span className="opacity-60">›</span>
              <span className="text-white">Isthara Multi Dining</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-semibold text-white">
              Isthara Multi Dining — Brand Revamp & Digital Experience
            </h1>
          </div>
        </section>

        {/* ===== OVERVIEW ===== */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <CardShell
              title="Overview"
              icon={<Utensils className="h-5 w-5 text-primary" />}
            >
              <p className="text-gray-700 leading-relaxed">
                Isthara Multi Dining is a leading multi-cuisine restaurant.
                Despite its premium on-ground experience, the brand suffered from low
                recall and limited digital engagement. We rebuilt the experience
                end-to-end with a refreshed brand identity, mobile-first website,
                social media revamp, and SEO growth execution.
              </p>
            </CardShell>
          </div>
        </section>

        {/* ===== CHALLENGE & APPROACH ===== */}
        <section className="py-6">
          <div className="container mx-auto px-6 max-w-6xl">
            <CardShell
              title="Challenge & Our Approach"
              icon={<Sparkles className="h-6 w-6 text-primary" />}
            >
              {/* Challenge */}
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                <Megaphone className="h-5 w-5 text-primary" />
                Challenge
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Low brand recall across digital touchpoints.</li>
                <li>An outdated website lacking modern UI and engagement value.</li>
                <li>Weak social presence not highlighting ambience and cuisine.</li>
              </ul>

              <div className="h-px bg-gray-200 my-6" />

              {/* Approach */}
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                Our Approach
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                <Pill
                  title="Website Development"
                  desc="Mobile-first, menu-rich site with ambience showcases and reservation flow."
                  icon={<Globe className="h-4 w-4 text-primary" />}
                />
                <Pill
                  title="Instagram Strategy"
                  desc="Chef specials, ambience reels, food stories, and 3-grid layouts."
                  icon={<Camera className="h-4 w-4 text-primary" />}
                />
                <Pill
                  title="Brand Positioning"
                  desc="Luxury palette, modern typography, consistent visual identity."
                  icon={<Palette className="h-4 w-4 text-primary" />}
                />
                <Pill
                  title="Social Campaigns"
                  desc="Narrative-driven content, specials, festival promotions."
                  icon={<Clapperboard className="h-4 w-4 text-primary" />}
                />
                <Pill
                  title="SEO Optimization"
                  desc="Local SEO for high-intent searches like 'best dining near me'."
                  icon={<Search className="h-4 w-4 text-primary" />}
                />
              </div>
            </CardShell>
          </div>
        </section>

        {/* ===== VISUAL DIRECTIONS ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6 max-w-5xl">
            <CardShell
              title="Key Visual Directions"
              icon={<Palette className="h-5 w-5 text-primary" />}
            >
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Photography:</strong> Cinematic food close-ups, warm
                  ambience, natural lighting.
                </li>
                <li>
                  <strong>Videos:</strong> Slow-motion prep, plating, clinking
                  glasses.
                </li>
                <li>
                  <strong>Palette:</strong> Deep golds, charcoal blacks, warm
                  browns.
                </li>
              </ul>
            </CardShell>
          </div>
        </section>

        {/* ===== RESULTS ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6 max-w-6xl">
            <CardShell
              title="Results Achieved"
              icon={<BarChart3 className="h-5 w-5 text-primary" />}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Stat value="200%" label="Increase in website visits" />
                <Stat value="150%" label="Instagram engagement" />
                <Stat value="75%" label="Rise in reservations" />
                <Stat value="+" label="Brand consistency boost" />
              </div>
            </CardShell>
          </div>
        </section>

        {/* ===== PRACTICAL DETAILS ===== */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-6 max-w-6xl grid gap-6 md:grid-cols-2">
            <CardShell
              title="Experience Highlights"
              icon={<ChefHat className="h-5 w-5 text-primary" />}
            >
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chef specials calendar integrated into content plan.</li>
                <li>Reel templates for high-speed content output.</li>
                <li>Events/offers feature for peak dining seasons.</li>
              </ul>
            </CardShell>

            <CardShell
              title="Practical Details"
              icon={<Clock className="h-5 w-5 text-primary" />}
            >
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-primary" />
                  Local SEO uplift around dining clusters.
                </li>
                <li className="flex gap-2">
                  <Clock className="h-4 w-4 mt-1 text-primary" />
                  Launch plan aligned with festive & weekend peaks.
                </li>
              </ul>
            </CardShell>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
