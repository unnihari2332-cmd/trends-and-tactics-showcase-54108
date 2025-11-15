// src/pages/portfolio/TrillionMinds.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Building2,
  BadgeCheck,
  Megaphone,
  Map,
  Globe,
  FileText,
  PlayCircle,
  BarChart3,
} from "lucide-react";

const heroBg = "/0007.jpg"; // hero image from public

/* ------------ Small helpers ------------ */
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

export default function TrillionMinds() {
  useEffect(() => {
    document.title =
      "Trillion Minds — Data-Driven Property Advisory | Trends & Tactics";
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

      <main className="pb-12">
        {/* ===== HERO WITH BIG BREADCRUMB (LIKE TIPS PAGE) ===== */}
        <section className="relative min-h-[38vh] flex items-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: "center 45%",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 container mx-auto px-4 md:px-6 pt-28 pb-16 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-4 text-[17px] font-normal text-white/85 mb-4">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <span className="opacity-70">›</span>
              <Link
                to="/portfolio"
                className="hover:text-white transition"
              >
                Portfolio
              </Link>
              <span className="opacity-70">›</span>
              <span className="text-white">Trillion Minds</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">
              Trillion Minds — Data-Driven Property Advisory
            </h1>
          </div>
        </section>

        {/* ===== Overview ===== */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Client-focused advisory for residential and commercial
                properties, designed to educate investors, simplify decisions,
                and grow investments efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Brand Positioning & Results ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Brand Positioning */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Brand Positioning</h3>
                </div>
                <div className="grid gap-4">
                  <Pillar
                    title="Trusted Expertise"
                    desc="Clear, client-friendly property insights backed by data."
                  />
                  <Pillar
                    title="Approachable & Professional"
                    desc="Knowledgeable messaging with a client-first tone."
                  />
                  <Pillar
                    title="Community Focused"
                    desc="Success stories, market tips, and educational content."
                  />
                </div>
              </div>

              {/* Results */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Results</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increased engagement and qualified inquiries</li>
                  <li>• Strengthened investor trust</li>
                  <li>• Partnerships with developers and local networks</li>
                </ul>
                <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                  Outcomes driven by clarity, consistency, and measurable value
                  for buyers &amp; investors.
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
                <Megaphone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Our Approach</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" /> Unified Brand
                    Identity
                  </h4>
                  <p className="text-gray-700">
                    Consistent visuals and messaging that convey trust and
                    clarity across every touchpoint.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Map className="h-4 w-4 text-primary" /> Website &amp;
                    Digital Presence
                  </h4>
                  <p className="text-gray-700">
                    Mobile-first listings, interactive maps, and investor
                    resources that streamline discovery.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" /> Social &amp;
                    Content Management
                  </h4>
                  <p className="text-gray-700">
                    Market updates, property tours, and client success stories
                    that build authority and trust.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <PlayCircle className="h-4 w-4 text-primary" /> Storytelling
                    Campaigns
                  </h4>
                  <p className="text-gray-700">
                    <em>“Smart Investments Start Here”</em> — short videos
                    highlighting real client journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Services We Delivered ===== */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-semibold mb-4">
                Services We Delivered
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Service
                  icon={<Globe className="h-5 w-5" />}
                  title="Brand System"
                  desc="Logo, palette, and messaging guidelines for a consistent identity."
                />
                <Service
                  icon={<Map className="h-5 w-5" />}
                  title="Interactive Listings"
                  desc="Filterable properties with maps, amenities, and ROI snapshots."
                />
                <Service
                  icon={<FileText className="h-5 w-5" />}
                  title="Content Engine"
                  desc="Market explainers, newsletters, and investor resources."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">
                Looking to grow your property portfolio?
              </h4>
              <p className="text-gray-700">
                Let’s design a data-driven acquisition and content strategy that
                earns trust and converts.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
