// src/pages/ContentMarketing.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  Minus,
  Target,
  FileText,
  Share2,
  Video,
  Mail,
  Image as ImageIcon,
  Megaphone,
  Eye,
  Users,
  Sparkles,
  Search,
  Smile,
  TrendingUp,
  Trophy,
  PiggyBank,
} from "lucide-react";

export default function ContentMarketing() {
  const serviceItems = [
    { icon: Target, label: "Content Strategy Development" },
    { icon: FileText, label: "Blog Writing & Management" },
    { icon: Share2, label: "Social Media Content Creation" },
    { icon: Video, label: "Video Marketing" },
    { icon: Mail, label: "Email Marketing Campaigns" },
    { icon: ImageIcon, label: "Infographics & Visual Content" },
    { icon: Megaphone, label: "Content Distribution & Amplification" },
  ];

  const benefitItems = [
    { icon: Eye, title: "Increased Brand Awareness", body: "By creating valuable, relevant content, we help boost your brand’s visibility and reach." },
    { icon: Users, title: "Higher Audience Engagement", body: "Our strategies connect with your audience on a deeper level, encouraging interaction and loyalty." },
    { icon: Sparkles, title: "Improved Lead Generation", body: "Educational, helpful content nurtures interest and drives qualified leads to your business." },
    { icon: Search, title: "Better SEO Performance", body: "High-quality content improves rankings and grows sustainable organic traffic." },
    { icon: Smile, title: "Enhanced User Experience", body: "We deliver content that meets user needs, improving satisfaction and stickiness." },
    { icon: TrendingUp, title: "Long-Term Value", body: "Content marketing compounds over time, providing durable growth and ROI." },
    { icon: Trophy, title: "Competitive Edge", body: "Tailored content helps you stand out from competitors and win mindshare." },
    { icon: PiggyBank, title: "Cost-Effective", body: "High ROI by attracting new customers and nurturing existing ones without heavy ad spend." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) =>
    setOpenIndex((cur) => (cur === idx ? null : idx));

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/slidelogo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative h-[70vh] min-h-[60svh] flex flex-col items-center justify-center text-center px-6">
          <img
            src="/content.jpg"
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
              Content Marketing
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
                src="/Content Marketing.jpg"
                alt="Content Marketing Services"
                className="w-full rounded-2xl shadow-lg"
              />

              {/* Right: Paragraph */}
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-bold text-center md:text-left leading-relaxed text-black"
              >
                In today’s fast-paced digital environment, content is king. At{" "}
                <strong>Trends and Tactics</strong>, we deliver powerful content marketing
                services in Chennai that build awareness, engage audiences, and drive
                growth. From blogs and social posts to eBooks and video content, we create,
                optimize, and distribute high-quality content that earns trust and converts
                visitors into loyal customers.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ===== WE DELIVER THE BEST CONTENT SOLUTIONS ===== */}
        <section className="px-6 pb-6 md:pb-10">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                We Deliver the Best Content Solutions
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

        {/* ===== BENEFITS (Accordion) ===== */}
        <section className="px-6 pb-12 md:pb-16 pt-6">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefits of Our Content Marketing Services
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
          heading="Ready to amplify your content strategy?"
          description="We'll craft compelling content that attracts, engages, and converts your target audience across all channels."
        />
      </main>

      <Footer />
    </div>
  );
}
