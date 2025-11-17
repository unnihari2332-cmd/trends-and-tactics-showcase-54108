// src/pages/portfolio/AatralFoundation.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
  Globe,
  LineChart,
  Megaphone,
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";

/* ----------- Only HERO IMAGE updated ----------- */
const heroBg = "/aatral-main-banner.jpg"; // ← Put your new hero image here

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
        {/* ---------------------------------------------------------
           HERO — NO GRADIENT — ONLY HERO IMAGE UPDATED
        --------------------------------------------------------- */}
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

        {/* ---------------------------------------------------------
           RIGHT-SIDE CONTENT ONLY (NO LEFT IMAGE COLUMN)
        --------------------------------------------------------- */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl space-y-10">

            {/* Overview */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Overview</h2>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Aatral Foundation supports educational and community upliftment
                initiatives. We built a digital-first brand system that highlights
                their social impact, improves donor trust, and expands awareness
                across Tamil Nadu.
              </p>
            </div>

            {/* Challenges */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Challenges</h2>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Impact stories were largely offline. The foundation lacked a
                unified digital identity to communicate achievements, events,
                beneficiaries, and transparency to donors.
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
                    Narrative-driven branding focused on hope, trust, and social
                    change.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                    <div className="font-semibold">Storytelling Framework</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Stories of volunteers, children, and families made easily
                    consumable through templates and reels.
                  </p>
                </div>

                <div className="rounded-xl border p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div className="font-semibold">Social Media Revamp</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    A system of content buckets: events, success stories,
                    students, and community outreach.
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

              <p classname="text-sm text-gray-700 leading-relaxed">
                Aatral’s social presence transformed into a movement through
                consistent storytelling, structured branding, and trust-building
                communication.
              </p>
            </div>

            {/* Key Results */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    Strong and recognisable digital identity for an NGO
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    Increased donor and volunteer trust
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    High-performing storytelling system
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-gray-700">
                    Better engagement through structured content
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
