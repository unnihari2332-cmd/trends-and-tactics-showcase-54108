// src/pages/portfolio/AatralFoundation.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  BadgeCheck,
  HeartHandshake,
  Target,
  Users,
  Megaphone,
} from "lucide-react";

/* ========= Set your hero image here ========= */
const heroBg = "/aatral01.jpg"; 
// Upload this in /public as "aatral-hero.jpg"

export default function AatralFoundation() {
  useEffect(() => {
    document.title = "Aatral Foundation — Case Study | Trends & Tactics";
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
        {/* =======================================================
            HERO SECTION (Same style as TIPS screenshot)
        ======================================================== */}
        <section className="relative h-[55vh] w-full flex items-center justify-center">
          {/* Full Width Hero Image */}
          <img
            src={heroBg}
            alt="Aatral Foundation"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Hero Text */}
          <div className="relative z-10 text-center px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-3">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
              <span>›</span>
              <span className="text-white font-semibold">Aatral Foundation</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-semibold text-white drop-shadow-xl">
              Aatral Foundation
            </h1>
          </div>
        </section>

        {/* =======================================================
            MAIN CONTENT (unchanged)
        ======================================================== */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl space-y-10">
            {/* Overview */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Aatral Foundation uplifts communities across Tamil Nadu through
                social, educational, and humanitarian programs. We built a strong
                digital identity to showcase their service and inspire more people
                to join their cause.
              </p>
            </div>

            {/* Challenges */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Challenges</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Their real-world impact wasn’t visible online. Stories,
                achievements, and outreach programs were not structured for social
                media or web, limiting awareness and donor trust.
              </p>
            </div>

            {/* Approach */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Megaphone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Our Approach</h3>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <div className="font-semibold">Impact Branding</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    A narrative-driven identity highlighting community
                    transformation and real life change.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                    <div className="font-semibold">Storytelling Framework</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Stories of students, families, and volunteers that build trust
                    and inspire participation.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div className="font-semibold">Social Media Ecosystem</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Content buckets for events, success stories, outreach, and
                    educational campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Impact Created</h3>

              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-5 border bg-gray-50 rounded-xl">
                  <div className="text-3xl font-extrabold">900%</div>
                  <p className="text-xs mt-2 text-gray-600">Audience Growth</p>
                </div>
                <div className="text-center p-5 border bg-gray-50 rounded-xl">
                  <div className="text-3xl font-extrabold">30K+</div>
                  <p className="text-xs mt-2 text-gray-600">Followers</p>
                </div>
                <div className="text-center p-5 border bg-gray-50 rounded-xl">
                  <div className="text-3xl font-extrabold">7×</div>
                  <p className="text-xs mt-2 text-gray-600">Engagement Rate</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                The foundation’s online presence transformed into a movement,
                inspiring more people to donate, volunteer, and participate.
              </p>
            </div>

            {/* Key Results */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm text-gray-700">
                    Strong and recognisable NGO digital identity
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm text-gray-700">
                    Boosted donor/volunteer trust & participation
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm text-gray-700">
                    Scalable storytelling content formats
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm text-gray-700">
                    Better social media engagement for all campaigns
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
