// src/pages/PRMedia.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function PRMedia() {
  // === Keep content the same; only structure/UI updated ===
  const intro =
    "Build trust and authority with strategic PR. We craft stories, manage reputation, and secure the visibility your brand deserves.";

  const strategyTitle = "Build Trust. Shape Perception. Amplify Your Voice.";
  const strategyBody =
    "Your brand story matters — we make sure it’s heard. Strategic PR strengthens credibility and boosts visibility.";

  const tailoredTitle = "Tailored PR Strategies";
  const tailoredBody =
    "From launches to reputation management, we design campaigns that align with your goals.";
  const tailoredList = [
    "Press releases, newsroom, and media outreach",
    "Influencer partnerships & celebrity tie-ups",
    "Crisis communications with precise narrative control",
  ];

  const bestWorkItems = [
    "Media Strategy & Planning",
    "Press Release Creation & Distribution",
    "Crisis Communication Management",
    "Social Media & Online PR",
    "Media Monitoring & Reporting",
  ];

  const benefitItems = [
    {
      title: "Media Strategy & Planning",
      body:
        "Crafting comprehensive PR strategies to strengthen brand visibility and reach the right audience.",
    },
    {
      title: "Press Release Creation & Distribution",
      body:
        "Professional press releases written and distributed to maximize media coverage and engagement.",
    },
    {
      title: "Crisis Communication Management",
      body:
        "Handling sensitive situations with timely and effective communication to protect your brand reputation.",
    },
    {
      title: "Social Media & Online PR",
      body:
        "Managing online presence, influencer collaborations, and digital campaigns to amplify your brand message.",
    },
    {
      title: "Media Monitoring & Reporting",
      body:
        "Tracking media mentions, sentiment analysis, and reporting insights to optimize PR strategies.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) =>
    setOpenIndex((cur) => (cur === idx ? null : idx));

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')", // match DigitalAds background vibe
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main>
        {/* ===== HERO (unchanged content) ===== */}
        <section className="relative h-[70vh] min-h-[60svh] flex flex-col items-center justify-center text-center px-6">
          <img
            src="/media.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Public Relations &amp; Media Management
            </motion.h1>
          </div>
        </section>

        {/* ===== INTRO WITH IMAGE ON LEFT (UI like DigitalAds, same text) ===== */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl mt-10 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Left (re-use hero image for consistency; swap if you have a different side image) */}
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src="/media.jpg"
                alt="PR & Media"
                className="w-full rounded-2xl shadow-lg"
              />

              {/* Paragraph Right (unchanged content) */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-bold text-center md:text-left text-black leading-relaxed"
              >
                {intro}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ===== PR Strategy (kept content, wrapped in modern card UI) ===== */}
        <section className="pb-10 px-6">
          <div className="container mx-auto max-w-6xl grid gap-10">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <div className="stat text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-2">{strategyTitle}</h2>
                <p className="text-muted-foreground">{strategyBody}</p>
              </div>

              <div className="stat text-center md:text-left mt-8">
                <h2 className="text-2xl font-semibold mb-2">{tailoredTitle}</h2>
                <p className="text-muted-foreground mb-4">{tailoredBody}</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-left">
                  {tailoredList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== We Serve The Best Work (same items, grid like DigitalAds) ===== */}
        <section className="px-6 pb-6 md:pb-10">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                We Serve The Best Work
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bestWorkItems.map((label) => (
                  <li
                    key={label}
                    className="group flex items-start gap-3 rounded-xl bg-black/5 p-4 transition-colors hover:bg-black/10"
                  >
                    {/* small colored dot to mirror DigitalAds chip */}
                    <span className="mt-0.5 inline-grid place-items-center size-6 rounded-full bg-[#2ecec8] text-white text-sm shrink-0 transition-colors group-hover:bg-[#E05D35]">
                      •
                    </span>
                    <span className="font-medium text-black">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Benefits With Our Service (accordion UI like DigitalAds) ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefits With Our Service
              </h2>

              <ul className="divide-y divide-gray-200">
                {benefitItems.map(({ title, body }, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <li key={title} className="py-4">
                      <button
                        onClick={() => toggle(idx)}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-grid place-items-center size-8 rounded-full bg-[#2ecec8] text-white text-base">
                            {idx + 1}
                          </span>
                          <span className="text-lg font-semibold text-black">
                            {title}
                          </span>
                        </div>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-gray-700" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-700" />
                        )}
                      </button>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-3 text-gray-800 leading-relaxed"
                        >
                          {body}
                        </motion.p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <CTASection
          heading="Ready to shape your brand narrative?"
          description="We'll build strategic PR campaigns that strengthen your reputation, amplify your voice, and secure media visibility."
        />
      </main>

      <Footer />
    </div>
  );
}
