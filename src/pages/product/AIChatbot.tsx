// src/pages/product/AIChatbot.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AIChatbot() {
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
        {/* ===== HERO (same vibe as SmartAccess) ===== */}
        <section className="relative h-[70vh] min-h-[60svh] flex items-center justify-center text-center px-6">
          <img
            src="/aichat.jpg"
            alt="AI-Powered Personalized Chatbot"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto max-w-4xl pt-24">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              AI-Powered Personalized Chatbot
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-white/90 text-lg md:text-xl"
            >
              Human-like conversations that learn and adapt across web, apps, WhatsApp, and social.
            </motion.p>
          </div>
        </section>

        {/* ===== INTRO (image + paragraph) ===== */}
        <section className="py-10 px-6 md:py-12">
          <div className="container mx-auto max-w-7xl grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                src="/aichat.jpg"
                alt="AI Chatbot Illustration"
                className="w-[36rem] md:w-[42rem] rounded-2xl shadow-2xl object-cover object-center"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="w-full"
            >
              <p className="text-base md:text-2xl font-medium leading-relaxed text-black text-center md:text-left">
                Experience the future of communication. Unlike scripted bots, our AI learns from every
                interaction to deliver context-aware, personal, and meaningful conversations—at scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== STRATEGY (two cards like SmartAccess) ===== */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid place-content-center size-12 rounded-full bg-[#2ecec8] text-black text-2xl">
                  🤖
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-black">
                  Personalized Conversations. Real Results.
                </h2>
              </div>
              <p className="text-black/80">
                Understands intent, remembers context, and adapts tone. From guided flows to proactive
                suggestions, every reply feels bespoke—boosting satisfaction and conversion.
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
                <span className="grid place-content-center size-12 rounded-full bg-[#2ecec8] text-black text-2xl">
                  ⚡
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-black">
                  Omnichannel &amp; Always-On
                </h2>
              </div>
              <p className="text-black/80 mb-3">
                Deploy on web, mobile apps, WhatsApp, and social with instant responses and smart
                handoff to human agents when needed.
              </p>
              <ul className="space-y-2 text-black/80">
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  Context memory and preference retention
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  Bookings, reminders, and follow-ups automated
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  Analytics on topics, CSAT, and resolution rates
                </li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== WE SERVE THE BEST WORK (frosted + checklist) ===== */}
        <section className="px-6 pb-6 md:pb-10">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                We Serve The Best Work
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Personalized Conversations",
                  "24/7 Instant Support",
                  "Smart Learning & Improvement",
                  "Omnichannel Deployment",
                  "Knowledge Base Ingestion",
                  "Live-Agent Handoff",
                ].map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 rounded-xl bg-black/5 p-4 transition-colors hover:bg-black/10 focus-within:bg-black/10"
                  >
                    <span className="mt-0.5 inline-grid place-items-center size-6 rounded-full bg-[#2ecec8] text-white text-sm shrink-0 transition-colors group-hover:bg-[#E05D35] group-focus-within:bg-[#E05D35]">
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== BENEFITS (frosted + ordered list) ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefits With Our Service
              </h2>
              <ol className="space-y-5">
                {[
                  {
                    title: "Engaging & Human-Like",
                    body:
                      "Conversations feel natural and interactive, increasing user satisfaction and trust.",
                  },
                  {
                    title: "Scalable & Reliable",
                    body:
                      "Handles high volumes with low latency across all supported channels.",
                  },
                  {
                    title: "Seamless Integration",
                    body:
                      "Works with your site, apps, WhatsApp, social, and back-office systems.",
                  },
                  {
                    title: "Adaptive & Smart",
                    body:
                      "Continuously improves via fine-tuning and feedback loops for better accuracy.",
                  },
                  {
                    title: "Multi-Industry Ready",
                    body:
                      "Education, Healthcare, HR, E-commerce—prebuilt flows accelerate time-to-value.",
                  },
                ].map(({ title, body }, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="mt-1 inline-grid place-items-center size-8 rounded-full bg-[#2ecec8] text-white text-base">
                      🤖
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

        {/* ===== CTA STRIP (same pattern) ===== */}
        <section className="relative">
          <div className="container mx-auto px-6 pb-10">
            <div className="relative overflow-hidden rounded-2xl bg-foreground/20 backdrop-blur-sm ring-1 ring-foreground/10">
              <div
                className="absolute inset-y-0 right-0 w-1/2 md:w-2/5 bg-[#2ecec8]"
                style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}
                aria-hidden="true"
              />
              <div className="relative grid gap-6 p-8 md:p-10 text-black">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to launch your AI assistant?
                </h3>
                <p className="text-black/80 max-w-2xl">
                  We’ll tailor flows, knowledge, and integrations for your team and customers.
                </p>
                <div>
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white
                      bg-gradient-to-r from-[#E05D35] to-[#f77b4f] shadow-[0_8px_24px_-10px_rgba(224,93,53,0.7)]
                      hover:shadow-[0_10px_28px_-10px_rgba(224,93,53,0.9)] transition-shadow"
                  >
                    Talk to us
                  </a>
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
