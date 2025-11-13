// src/pages/SEO.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import {
  Search,
  Settings,
  Link as LinkIcon,
  MapPin,
  BarChart3,
  ShoppingCart,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Users,
  Trophy,
  FileText,
  Smartphone,
  GaugeCircle,
  Mic,
} from "lucide-react";

export default function SEO() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative h-[70vh] min-h-[60svh] flex flex-col items-center justify-center text-center px-6">
          <img
            src="/chatbot.jpg"
            alt="SEO & Growth Strategy"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              SEO &amp; Growth Strategy
            </motion.h1>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="bg-background px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 mb-12 text-lg md:text-xl font-bold text-center text-foreground leading-relaxed"
            >
              Boost visibility and drive consistent growth with smart SEO and
              data-driven strategies. We optimize your brand to rank higher,
              reach wider, and convert better.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 text-base md:text-lg text-center text-foreground/80 leading-relaxed"
            >
              In today’s digital world, staying visible online is key. At Trends &amp; Tactics,
              we use the latest SEO strategies—from AI-driven techniques to mobile-first
              optimization—to ensure your website ranks where it matters most. With voice
              search, local SEO, and Core Web Vitals, we help customers find you quickly
              and easily. Through engaging content, improved user experience, and targeted
              campaigns, we put your brand right in front of potential customers.
            </motion.p>
          </div>
        </section>

        {/* ===== STRATEGY CARDS (AI-style two-up) ===== */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid place-content-center size-12 rounded-full bg-[#2ecec8] text-black">
                  <GaugeCircle className="size-6" />
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-black">
                  Be Visible. Be Trusted. Be Chosen.
                </h2>
              </div>
              <p className="text-black/80">
                Your audience is searching—let’s help them find you first. Smart strategy,
                optimized content, and consistent execution attract the right traffic that converts.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 }}
              className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid place-content-center size-12 rounded-full bg-[#2ecec8] text-black">
                  <BarChart3 className="size-6" />
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-black">
                  SEO Tailored to Your Business
                </h2>
              </div>
              <p className="text-black/80 mb-3">
                No two businesses are the same. We customize on-page, technical, and
                off-page SEO for your industry, audience, and goals.
              </p>
              <ul className="space-y-2 text-black/80">
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  On-page optimization, keyword research, information architecture
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  Technical SEO: Core Web Vitals, schema, sitemaps, internal linking
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  Authority building, competitive gap analysis, performance tracking
                </li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== WE SERVE THE BEST WORK (Capabilities grid) ===== */}
        <section className="px-6 pb-6 md:pb-10">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                We Serve The Best Work
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "On-Page SEO Optimization", icon: Search },
                  { title: "Technical SEO", icon: Settings },
                  { title: "Off-Page SEO & Link Building", icon: LinkIcon },
                  { title: "Local SEO", icon: MapPin },
                  { title: "SEO Analytics & Reporting", icon: BarChart3 },
                  { title: "E-Commerce SEO", icon: ShoppingCart },
                  // Bonus capabilities from your copy:
                  { title: "Content Strategy & Blogs", icon: FileText },
                  { title: "Mobile-First Optimization", icon: Smartphone },
                  { title: "Voice Search Readiness", icon: Mic },
                ].map(({ title, icon: Icon }) => (
                  <li
                    key={title}
                    className="group flex items-start gap-3 rounded-xl bg-black/5 p-4 transition-colors hover:bg-black/10 focus-within:bg-black/10"
                  >
                    <span className="mt-0.5 inline-grid place-items-center size-8 rounded-full bg-[#2ecec8] text-white shrink-0 transition-colors group-hover:bg-[#E05D35] group-focus-within:bg-[#E05D35]">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-medium">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== BENEFITS WITH OUR SERVICE ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefits With Our Service
              </h2>
              <ol className="space-y-5">
                {[
                  {
                    icon: Globe2,
                    title: "Improved Online Presence",
                    body:
                      "Rank higher for the terms that matter and make it easier for customers to discover your brand.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Increased Credibility and Trust",
                    body:
                      "A strong search footprint and high-quality content build authority and confidence with your audience.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Higher Conversion Rates",
                    body:
                      "SEO pages and funnels are optimized to turn visitors into leads, calls, and sales.",
                  },
                  {
                    icon: Users,
                    title: "Better User Experience",
                    body:
                      "Faster load times, intuitive navigation, and mobile-first design keep users engaged.",
                  },
                  {
                    icon: Trophy,
                    title: "Competitive Edge",
                    body:
                      "Beat competitors with a future-proof strategy across AI search, local intent, and Core Web Vitals.",
                  },
                ].map(({ icon: Icon, title, body }, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="mt-1 inline-grid place-items-center size-8 rounded-full bg-[#2ecec8] text-white">
                      <Icon className="size-4" />
                    </span>
                    <p className="text-base md:text-lg leading-relaxed">
                      <strong>{title}</strong> – {body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <CTASection
          heading="Ready to dominate search rankings?"
          description="We'll optimize your digital presence with proven SEO strategies that drive organic traffic and sustainable growth."
        />
      </main>

      <Footer />
    </div>
  );
}
