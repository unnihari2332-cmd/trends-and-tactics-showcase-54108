// src/pages/AIContent.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  Minus,
  Brain,
  PenTool,
  FileText,
  Share2,
  Search,
  LineChart,
  Palette,
  Target,
  Languages,
} from "lucide-react";

export default function AIContent() {
  // Services grid
  const serviceItems = [
    { icon: Brain, label: "AI Brand Strategy" },
    { icon: PenTool, label: "AI Logo & Design Creation" },
    { icon: FileText, label: "AI Content Writing" },
    { icon: Share2, label: "AI Social Media Content" },
    { icon: Search, label: "AI SEO Content" },
  ];

  // Benefits accordion
  const benefitItems = [
    {
      icon: LineChart,
      title: "AI-Powered Brand Strategy & Research",
      body:
        "Market analysis, competitor insights, and AI-driven positioning to build a strong brand foundation.",
    },
    {
      icon: Palette,
      title: "Smart Logo & Visual Identity Design",
      body:
        "AI tools create unique logos, colour palettes, and typography that match your brand personality.",
    },
    {
      icon: Search,
      title: "AI-Optimized Content Creation & SEO",
      body:
        "High-quality blogs, web copy, and keyword-optimized content generated with AI precision.",
    },
    {
      icon: Target,
      title: "Social Media & Personalized Marketing",
      body:
        "AI-powered posts, captions, and targeted campaigns tailored to different customer groups.",
    },
    {
      icon: Languages,
      title: "Creative Design & Multilingual Content Solutions",
      body:
        "Infographics, ad banners, and global-ready content with AI translation and repurposing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) =>
    setOpenIndex((cur) => (cur === idx ? null : idx));

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

      <main>
        {/* ===== HERO ===== */}
        <section
          className="relative h-[70vh] min-h-[60svh] flex items-center justify-center text-center px-6"
          aria-label="AI-driven branding hero"
        >
          <img
            src="/AI-Driven.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              AI-Driven Branding &amp; Content
            </motion.h1>
          </div>
        </section>

        {/* ===== INTRO WITH IMAGE ON LEFT ===== */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl mt-10 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Image */}
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src="/AIDrivenBranding.jpg"
                alt="AI Driven Branding"
                className="w-full rounded-2xl shadow-lg"
              />

              {/* Right: Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-bold text-center md:text-left leading-relaxed text-black"
              >
                Build smarter brands with AI-powered creativity and strategy. We blend
                data-driven insights with engaging design and content that connects,
                converts, and inspires trust.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ===== WE SERVE THE BEST WORK ===== */}
        <section className="px-6 pb-6 md:pb-10">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                We Serve The Best Work
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceItems.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="group flex items-start gap-3 rounded-xl bg-black/5 p-4"
                  >
                    <span className="mt-0.5 inline-grid place-items-center size-6 rounded-full bg-[#2ecec8] text-white shrink-0 transition-colors duration-300 group-hover:bg-[#E05D35]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-medium text-black">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== BENEFITS WITH OUR SERVICE ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefits With Our Service
              </h2>
              <ul className="divide-y divide-gray-200">
                {benefitItems.map(({ icon: Icon, title, body }, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <li key={idx} className="py-4 group">
                      <button
                        onClick={() => toggle(idx)}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-grid place-items-center size-8 rounded-full bg-[#2ecec8] text-white transition-colors duration-300 group-hover:bg-[#E05D35]">
                            <Icon className="w-5 h-5" />
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
          heading="Ready to elevate your brand with AI?"
          description="We'll create intelligent, data-driven branding and content strategies that resonate with your audience and drive results."
        />
      </main>

      <Footer />
    </div>
  );
}
