// src/pages/VideoProduction.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  Minus,
  Briefcase,
  Camera,
  Video,
  Film,
  PlaySquare,
  Youtube,
  GraduationCap,
  Megaphone,
  Sparkles,
  Package,
  MessageCircle,
  Clapperboard,
  Heart,
  Music,
  Home,
  Eye,
  PenTool,
  Users,
  Star,
  Layout,
  Target
} from "lucide-react";

export default function VideoProduction() {
  const serviceItems = [
    { icon: Briefcase, label: "Corporate Video Editing" },
    { icon: Camera, label: "Social Media Video Content" },
    { icon: Video, label: "Commercials and Ad Editing" },
    { icon: Film, label: "Event Video Editing" },
    { icon: PlaySquare, label: "Explainer Videos" },
    { icon: Youtube, label: "YouTube Video Editing" },
    { icon: GraduationCap, label: "Training Videos" },
    { icon: Megaphone, label: "Promotional Videos" },
    { icon: Sparkles, label: "Animation and Motion Graphics" },
    { icon: Package, label: "Product Demo Videos" },
    { icon: MessageCircle, label: "Testimonial Videos" },
    { icon: Clapperboard, label: "Short Films and Documentaries" },
    { icon: Heart, label: "Wedding Video Editing" },
    { icon: Music, label: "Music Video Editing" },
    { icon: Home, label: "Real Estate Video Editing" },
  ];

  const investItems = [
    { icon: Eye, title: "Improved Brand Visibility", body: "Our video edits are designed to make your brand stand out, creating a lasting impression on viewers." },
    { icon: PenTool, title: "Effective Storytelling", body: "We transform raw footage into compelling narratives that communicate your brand’s message with clarity and emotion." },
    { icon: Users, title: "Increased Engagement", body: "Dynamic, platform-ready edits capture attention quickly and encourage interaction across channels." },
    { icon: Layout, title: "Optimized User Experience", body: "Thoughtful pacing, clean audio, color, and captions keep viewers watching — and remembering." },
    { icon: Target, title: "Higher Conversions", body: "Clear calls-to-action and purpose-built edits nudge viewers toward the next step and improve ROI." },
    { icon: Star, title: "Long-Lasting Impact", body: "Professional polish ensures your content stays top-of-mind long after the video ends." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) =>
    setOpenIndex((current) => (current === idx ? null : idx));

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
          aria-label="Video production hero"
        >
          <img
            src="/editing.jpg"
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
              Professional Video Production &amp; Editing
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
                src="/VideoProduction.jpg"
                alt="Video Production"
                className="w-full rounded-2xl shadow-lg"
              />

              {/* Right: Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-bold text-center md:text-left leading-relaxed text-black"
              >
                Make your brand unforgettable with our expert video editing services in
                Chennai. Our talented team specializes in crafting dynamic and engaging
                video content that captivates audiences and helps businesses achieve their
                marketing goals.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ===== THE ART OF VIDEO EDITING ===== */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                The Art of Video Editing
              </h2>
              <p className="text-muted-foreground">
                You can produce captivating visual stories that connect with your target
                audience by using our video editing services. Whether it’s for social
                media, corporate videos, or commercials, we ensure that every project is
                adapted to your brand’s message and identity.
              </p>
            </div>
          </div>
        </section>

        {/* ===== WE SERVE THE BEST WORK ===== */}
        <section className="px-6 pb-6 md:pb-10 pt-6">
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

        {/* ===== WHY INVEST (Accordion) ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Invest in Our Video Editing Services?
              </h2>
              <ul className="divide-y divide-gray-200">
                {investItems.map(({ icon: Icon, title, body }, idx) => {
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
          heading="Ready to bring your story to life?"
          description="We'll create stunning video content that captivates your audience and delivers your message with maximum impact."
        />
      </main>

      <Footer />
    </div>
  );
}
