// src/pages/services/DigitalAds.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Megaphone, Target, BarChart3, Globe2, MousePointerClick } from "lucide-react";

const BENEFITS = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Laser-Focused Targeting",
    description:
      "Reach the right audience based on interests, intent, and behavior across Google, Meta, and other ad platforms.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance-Driven Campaigns",
    description:
      "Continuous optimization, A/B testing, and data-backed decisions to improve ROAS and reduce wasted ad spend.",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Omnichannel Presence",
    description:
      "Search, display, video, and social campaigns that keep your brand visible across the entire customer journey.",
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Full-Funnel Strategy",
    description:
      "From awareness to conversion and retention, we build funnels that turn clicks into customers.",
  },
];

const DigitalAds = () => {
  return (
    <>
      <Header />

      {/* ===== Background Image Applied Here ===== */}
      <main
        className="relative min-h-screen text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sidelogo.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          {/* ===== HERO SECTION ===== */}
          <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/10">
            <div className="container mx-auto px-6">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-5">
                    <Megaphone className="w-4 h-4" />
                    Digital Marketing • Paid Ads
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-4">
                    High-Performance Digital Ads
                    <span className="block text-emerald-300">
                      that turn clicks into customers.
                    </span>
                  </h1>

                  <p className="text-sm md:text-base text-gray-300 max-w-xl mb-8">
                    We design and manage paid campaigns across Google, Meta, YouTube, and more,
                    combining creative storytelling with data-driven optimisation to deliver measurable growth.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#cta"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg hover:bg-emerald-400 transition"
                    >
                      Book a Free Strategy Call
                    </a>
                    <a
                      href="#benefits"
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-white hover:border-emerald-300 hover:text-emerald-200 transition"
                    >
                      Explore Our Approach
                    </a>
                  </div>
                </motion.div>

                {/* RIGHT SIDE CARD */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-7 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-gray-300">
                        Live Campaign Overview
                      </span>
                      <span className="text-[10px] rounded-full bg-emerald-400/20 px-2 py-1 text-emerald-300">
                        Realtime
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                      <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                        <div className="text-gray-300 mb-1">Monthly Ad Spend</div>
                        <div className="text-lg font-semibold text-white">₹4.8L</div>
                        <div className="text-[10px] text-emerald-300 mt-1">+32% vs last month</div>
                      </div>

                      <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                        <div className="text-gray-300 mb-1">ROAS</div>
                        <div className="text-lg font-semibold text-white">5.3x</div>
                        <div className="text-[10px] text-emerald-300 mt-1">
                          Optimised campaigns
                        </div>
                      </div>
                    </div>

                    <div className="h-24 rounded-2xl bg-black/40 border border-white/10 flex items-end gap-1 p-3">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-full bg-gradient-to-t from-emerald-500/10 to-emerald-400/70"
                          style={{ height: `${20 + (i % 5) * 12}%` }}
                        />
                      ))}
                    </div>

                    <p className="mt-4 text-[11px] text-gray-300">
                      Smart bidding, creative testing, and audience segmentation combine to drive
                      sustainable growth.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ===== BENEFITS ===== */}
          <section id="benefits" className="py-16 md:py-20 border-b border-white/10">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  Why our digital ad campaigns work.
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  We combine sharp messaging, strong creatives, and structured experimentation to
                  continually improve your results.
                </p>
              </div>

              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {BENEFITS.map((item) => (
                  <li
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 hover:border-emerald-400/70 transition"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ===== CTA ===== */}
          <section id="cta" className="py-16 md:py-20">
            <div className="container mx-auto px-6 text-center max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Ready to scale your brand with high-converting ads?
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-8">
                Share your goals, budgets, and timelines. We’ll audit your current campaigns (if any)
                and suggest a practical roadmap for growth — no jargon, no fluff.
              </p>

              <a
                href="mailto:hello@trendsandtactics.in?subject=Digital%20Ads%20Enquiry"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black shadow-lg hover:bg-emerald-400 transition"
              >
                Talk to Our Ads Team
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DigitalAds;
