// src/pages/LogoDesign.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LogoDesign() {
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

        {/* ===== HERO WITH BREADCRUMB (Unified Style) ===== */}
        <section className="relative min-h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/logo.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

          <div className="relative z-10 container mx-auto max-w-6xl px-6 py-16 text-center">

            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="opacity-60">›</span>

              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="opacity-60">›</span>

              <span className="text-white">Logo Designing</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-normal text-white">
              Logo Designing
            </h1>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-10 px-6 md:py-12">
          <div className="container mx-auto max-w-7xl grid gap-8 md:grid-cols-2 items-center">

            <div className="flex justify-center">
              <img
                src="/Logodesign.jpg"
                alt="Logo Design Illustration"
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
                Create a logo that’s modern, memorable, and timeless. We design identities
                that capture your brand’s essence and stand out in any market.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ===== CORE SECTIONS ===== */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl">

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Make Your Brand Instantly Recognizable
              </h2>
              <p className="text-black-100">
                A logo is more than a symbol — it’s the face of your brand. We craft marks
                that reflect your personality, values, and vision.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 }}
              className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
                Designs That Speak for Your Brand
              </h2>
              <p className="text-black-100 mb-3">
                From start-ups to refreshes, we deliver versatile, scalable identities that
                look great everywhere.
              </p>
              <ul className="space-y-2 text-black-100 list-disc pl-6">
                <li>Discovery, moodboards, and concept exploration</li>
                <li>Refinement, typography &amp; color systems</li>
                <li>Final artwork, guidelines, and export kits</li>
              </ul>
            </motion.article>

          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="px-6 pb-6 md:pb-10">
          <div className="container mx-auto max-w-6xl">

            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our Logo Design Services Include
              </h2>

              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-black-100">
                {[
                  "Custom Logo Design",
                  "Corporate Logos",
                  "Brand Identity Design",
                  "Rebranding Logos",
                  "Typography-Based Logos",
                  "Iconic and Symbolic Logos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 p-2">
                    <span className="mt-1 inline-grid place-items-center size-6 rounded-full bg-[#2ecec8] text-white text-sm">
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">

            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefits With Our Service
              </h2>

              <ol className="space-y-5">
                {[
                  {
                    title: "Expert Designers",
                    body:
                      "Our team of skilled designers has years of experience in logo creation, ensuring that your design is in good hands.",
                  },
                  {
                    title: "Personalized Solutions",
                    body:
                      "Every logo is custom-made to suit your specific needs and preferences.",
                  },
                  {
                    title: "Quick Turnaround",
                    body:
                      "We respect your deadlines and work efficiently to deliver a professional logo on time.",
                  },
                  {
                    title: "Client Collaboration",
                    body:
                      "We work closely with you throughout the design process, ensuring the final product perfectly aligns with your vision.",
                  },
                  {
                    title: "Affordable Pricing",
                    body:
                      "High-quality logo designs at competitive rates without compromising creativity or detail.",
                  },
                ].map(({ title, body }, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="mt-1 inline-grid place-items-center size-8 rounded-full bg-[#2ecec8] text-white text-base">
                      🎨
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
          heading="Ready to create your iconic brand identity?"
          description="We'll design a memorable, timeless logo that captures your brand's essence and makes a lasting impression."
        />

      </main>

      <Footer />
    </div>
  );
}
