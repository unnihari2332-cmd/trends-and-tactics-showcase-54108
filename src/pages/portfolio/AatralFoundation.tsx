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

const heroBg = "/aatral-hero.jpg"; // ← YOUR NEW HERO IMAGE

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
        {/* ========================================================
            HERO SECTION (ONLY UPDATE DONE HERE)
        ========================================================= */}
        <section className="relative min-h-[40vh] flex items-center justify-center">
          <img
            src={heroBg}
            alt="Aatral Foundation"
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

        {/* ========================================================
            MAIN CONTENT (UNCHANGED)
        ========================================================= */}
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
                educational, social, and humanitarian programs. We created a strong
                digital presence to communicate their mission and inspire people
                to join their movement.
              </p>
            </div>

            {/* Challenges */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Challenges</h2>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Their achievements and impact were not visible online. There was
                no central platform to showcase stories, highlight progress, or
                communicate transparency to donors.
              </p>
            </div>

            {/* Our Approach */}
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
                    A narrative-driven identity that puts people and community
                    transformation at the center.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                    <div className="font-semibold">Storytelling System</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Structured storytelling formats for success stories, events,
                    volunteer diaries, and student achievements.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div className="font-semibold">Social Media Framework</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Templates and content buckets designed for scalable,
                    consistent posting across platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Impact Created</h3>

              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 p-5 rounded-xl text-center border">
                  <div className="text-3xl font-extrabold">900%</div>
                  <p className="text-xs mt-2 text-gray-600">Audience Growth</p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl text-center border">
                  <div className="text-3xl font-extrabold">30K+</div>
                  <p className="text-xs mt-2 text-gray-600">Followers</p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl text-center border">
                  <div className="text-3xl font-extrabold">7×</div>
                  <p className="text-xs mt-2 text-gray-600">Engagement Rate</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Aatral’s digital efforts elevated their visibility and community
                engagement, inspiring more people to participate and support their
                mission.
              </p>
            </div>

            {/* Key Results */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    Strong NGO identity across digital platforms
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    Higher volunteer and donor trust
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    Scalable storytelling content formats
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    Better engagement across all social channels
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
