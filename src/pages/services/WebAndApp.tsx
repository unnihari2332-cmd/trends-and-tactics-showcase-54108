// src/pages/WebAndApp.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import servicesHero from "@/assets/services-hero.jpg";
import {
  Plus,
  Minus,
  MonitorSmartphone,
  Code2,
  ShoppingCart,
  LayoutTemplate,
  Search,
  RefreshCw,
  AppWindow,
  BarChart3,
  Globe,
  ShieldCheck,
  MousePointerClick,
  Gauge,
  Award,
} from "lucide-react";

export default function WebAndApp() {
  const serviceItems = [
    { icon: MonitorSmartphone, label: "Custom Website Design" },
    { icon: Code2, label: "Responsive Web Design" },
    { icon: ShoppingCart, label: "E-commerce Development" },
    { icon: LayoutTemplate, label: "Content Management System" },
    { icon: Search, label: "SEO-Friendly Development" },
    { icon: RefreshCw, label: "Website Redesign & Revamp" },
    { icon: AppWindow, label: "Web Application Development" },
    { icon: BarChart3, label: "Analytics & ROI Tracking" },
  ];

  const benefitItems = [
    {
      icon: Globe,
      title: "Improved Online Presence",
      body:
        "A professionally designed site enhances discoverability and makes it easy for customers to explore your products and services.",
    },
    {
      icon: ShieldCheck,
      title: "Increased Credibility & Trust",
      body:
        "Clean design, fast performance, and strong UX signal reliability—building confidence and long-term relationships.",
    },
    {
      icon: MousePointerClick,
      title: "Higher Conversion Rates",
      body:
        "Pages and flows are optimized to drive action—purchases, demo requests, signups, and more.",
    },
    {
      icon: Gauge,
      title: "Better User Experience",
      body:
        "We focus on intuitive navigation, responsive UI, and performance so visitors stay engaged and find value quickly.",
    },
    {
      icon: Award,
      title: "Competitive Edge",
      body:
        "A modern, functional website sets you apart from competitors and positions your brand as a leader in your category.",
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
          className="relative pt-24 pb-20 px-6 min-h-[60vh] flex items-center"
          style={{
            backgroundImage: `url(${servicesHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Website &amp; App Development
            </motion.h1>
            <p className="mt-4 text-lg text-white/90 max-w-3xl">
              Build powerful websites and apps that are fast, scalable, and user-friendly.
              From design to deployment, we create digital experiences that engage customers
              and drive growth.
            </p>
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
                src="/website.jpg"
                alt="Website Design and Development"
                className="w-full rounded-2xl shadow-lg"
              />

              {/* Right: Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-bold text-center md:text-left leading-relaxed text-black"
              >
                In today’s fast-paced digital world, your website is the face of your brand.
                As Chennai’s trusted web design &amp; development partner, we build
                visually stunning, high-performance sites that strengthen credibility,
                spark engagement, and convert visitors into customers—whether you’re a
                startup or a large enterprise.
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

        {/* ===== BENEFITS ===== */}
        <section className="px-6 pb-12 md:pb-16 pt-6">
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
          heading="Ready to build your digital presence?"
          description="We'll design and develop powerful websites and apps that engage users, drive conversions, and grow your business."
        />
      </main>

      <Footer />
    </div>
  );
}
