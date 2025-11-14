
// src/pages/DigitalAds.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import digitalAdsHero from "@/assets/digital-ads-hero.jpg";

export default function DigitalAds() {
  const serviceItems = [
    { label: "Facebook Marketing", icon: "📘" },
    { label: "Instagram Marketing", icon: "📸" },
    { label: "Twitter (X) Marketing", icon: "🐦" },
    { label: "YouTube Marketing", icon: "📺" },
    { label: "LinkedIn Marketing", icon: "💼" },
    { label: "Pinterest Marketing", icon: "📌" },
    { label: "Pay-Per-Click (PPC) Advertising", icon: "💰" },
    { label: "Google Ads Management", icon: "🎯" },
    { label: "Display Advertising", icon: "🖼️" },
    { label: "Remarketing Campaigns", icon: "🔄" },
    { label: "Shopping Ads", icon: "🛍️" },
    { label: "YouTube Ads", icon: "🎬" },
  ];

  const benefitItems = [
    {
      title: "Instant Traffic",
      body:
        "Unlike organic SEO, SEM brings immediate results by driving traffic to your site as soon as your campaign goes live.",
      icon: "⚡",
    },
    {
      title: "Targeted Reach",
      body:
        "We target specific keywords and demographics, ensuring your ads reach the right audience when they’re most likely to convert.",
      icon: "🎯",
    },
    {
      title: "Increased Brand Awareness",
      body:
        "Our SEM campaigns increase your brand’s visibility across multiple platforms, boosting awareness and credibility.",
      icon: "🚀",
    },
    {
      title: "Improved Conversions",
      body:
        "By reaching potential customers who are actively searching for your products or services, our SEM strategies deliver higher conversion rates.",
      icon: "📈",
    },
    {
      title: "Measurable Results",
      body:
        "We provide comprehensive reports that track key metrics like click-through rates (CTR), conversions, and cost-per-click (CPC).",
      icon: "📊",
    },
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
        <PageHeader 
          title="Social Media & Paid Ads Marketing" 
          breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
          bgImage={digitalAdsHero}
        />

        {/* ===== INTRO WITH IMAGE ON LEFT ===== */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl mt-10 mb-12">
            {/* Reverse order on md+ so image comes first */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Left */}
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src="/socialmedia.jpg"
                alt="Social Media Marketing"
                className="w-full rounded-2xl shadow-lg"
              />

              {/* Paragraph Right */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-bold text-center md:text-left text-black leading-relaxed"
              >
                Social media platforms have become essential for businesses to connect
                with their target audience, build brand awareness, and drive customer
                engagement. <strong>Trends and Tactics</strong>, a leading social media
                marketing agency in Chennai, offers comprehensive services to help you
                leverage the power of social media to achieve your marketing goals.
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
                {serviceItems.map(({ label, icon }) => (
                  <li
                    key={label}
                    className="group flex items-start gap-3 rounded-xl bg-black/5 p-4 transition-colors hover:bg-black/10"
                  >
                    <span className="mt-0.5 inline-grid place-items-center size-6 rounded-full bg-[#2ecec8] text-white text-sm shrink-0 transition-colors group-hover:bg-[#E05D35]">
                      {icon}
                    </span>
                    <span className="font-medium text-black">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

              <ul className="divide-y divide-gray-200">
                {benefitItems.map(({ title, body, icon }, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <li key={idx} className="py-4">
                      <button
                        onClick={() => toggle(idx)}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-grid place-items-center size-8 rounded-full bg-[#2ecec8] text-white text-base">
                            {icon}
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
          heading="Ready to maximize your ad ROI?"
          description="We'll create targeted social media and paid ad campaigns that reach the right audience and drive measurable results."
        />
      </main>

      <Footer />
    </div>
  );
}
