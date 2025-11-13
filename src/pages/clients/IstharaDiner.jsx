// src/pages/clients/IstharaDiner.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const IstharaDiner = () => {
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
        {/* ===== HERO (matches TIPS) ===== */}
        <section className="relative h-[70vh] min-h-[60svh] flex items-center justify-center text-center px-6">
          <img
            src="/04(1).png"
            alt="Isthara Multi Brand Diner"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "right center" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto max-w-4xl pt-24">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Isthara Multi Brand Diner
            </motion.h1>
          </div>
        </section>

        {/* ===== INTRO (matches TIPS) ===== */}
        <section className="py-10 px-6 md:py-12">
          <div className="container mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                src="/01(1).png"
                alt="Isthara Food Court"
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
                Client: <strong>Isthara Multi Brand Diner</strong> — Hyderabad-based, Pan-India Presence
                <br />
                Scope: Website Development, Branding &amp; On-Ground Design
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CHALLENGE & APPROACH (matches TIPS card sizes) ===== */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl">
            {/* Challenge */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl bg-white/85 backdrop-blur-sm p-6 shadow-sm ring-1 ring-black/10"
            >
              <h2 className="text-2xl font-semibold mb-3">Challenge</h2>
              <p>
                Isthara, a fast-growing multi-brand diner chain with food courts in prime
                metro locations, needed a strong digital identity and a consistent physical
                branding experience across outlets. The goal was a unified look and feel—
                online and offline—that matched the scale and energy of their food destinations.
              </p>
            </motion.article>

            {/* Our Approach */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl bg-white/85 backdrop-blur-sm p-6 shadow-sm ring-1 ring-black/10"
            >
              <h2 className="text-2xl font-semibold mb-3">Our Approach</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#E05D35]">Website Development:</strong> Designed and launched an official homepage with a clean, modern, engaging interface (<em>e.g.</em> <span className="whitespace-nowrap">www.isthara.food</span>).
                </li>
                <li>
                  <strong className="text-[#E05D35]">Physical Branding at Food Courts:</strong> Custom design concepts tailored to each floor plan and space size.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Aesthetic Consistency:</strong> Vibrant palettes and interior elements reflecting Isthara’s lively food culture.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Promotional Collateral:</strong> Flyers, banners, and engaging floor stickers to drive discovery and interaction.
                </li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== RESULTS – single horizontal row (matches TIPS structure/sizes) ===== */}
        <section className="px-6 pb-10">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Results</h2>

              {/* Running text description */}
              <p className="text-base md:text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                A seamless brand identity that connects digital presence with on-ground
                experience—driving recognition and engagement across metro food courts.
              </p>

              {/* One centered row (scrolls on tiny screens) */}
              <div className="flex justify-center items-stretch gap-8 flex-nowrap">
                {[
                  { big: "Seamless", small: "Digital ↔ Offline Identity" },
                  { big: "Enhanced", small: "Food Court Ambience" },
                  { big: "Higher", small: "Customer Engagement" },
                ].map((r) => (
                  <div
                    key={r.small}
                    className="w-64 rounded-2xl border border-black/10 bg-white px-8 py-6 text-center shadow-sm"
                  >
                    <div className="text-3xl font-extrabold">{r.big}</div>
                    <div className="text-sm text-black/70 mt-1">{r.small}</div>
                  </div>
                ))}
              </div>

              {/* SR-only list for accessibility/SEO */}
              <ul className="sr-only list-disc ml-6 mt-4 space-y-1">
                <li>Seamless brand identity connecting digital and offline experience</li>
                <li>Enhanced visual appeal and ambience across metro cities</li>
                <li>Improved engagement via interactive, attractive designs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== OUTCOME (matches TIPS) ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
              <p className="text-lg leading-relaxed">
                Isthara now enjoys a stronger, more consistent brand presence both online
                and offline—offering customers not just food, but a complete dining
                experience across India’s metro hubs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IstharaDiner;
