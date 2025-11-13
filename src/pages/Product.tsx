// src/pages/Product.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Product() {
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
        {/* ===== HERO ===== */}
        <section className="relative h-[70vh] min-h-[60svh] flex items-center justify-center text-center px-6">
          <img
            src="/smartaccess-hero.jpg"
            alt="Products"
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
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-white/90 text-lg md:text-xl"
            >
              Purpose-built solutions that blend hardware, software, and AI to
              streamline operations and drive growth.
            </motion.p>
          </div>
        </section>

        {/* ===== PRODUCT GRID ===== */}
        <section className="px-6 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 md:mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Explore Our Solutions</h2>
              <p className="text-base md:text-lg text-black/70 mt-2">
                Click a product to see full details, features, and demos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Smart Access Plus */}
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/10 shadow-xl overflow-hidden"
              >
                <Link to="/product/smartaccess" className="block focus:outline-none">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src="/smartaccess-hero.jpg"
                      alt="Smart Access Plus"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">Smart Access Plus</h3>
                    <p className="mt-2 text-black/70 text-base">
                      Fingerprint-based attendance & HR suite with real-time web
                      dashboard and payroll/leave integration.
                    </p>
                    <div className="mt-4 inline-flex items-center text-[#E05D35] font-semibold">
                      Read more →
                    </div>
                  </div>
                </Link>
              </motion.article>

              {/* AI Personalized Chatbot */}
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/10 shadow-xl overflow-hidden"
              >
                <Link to="/product/ai-chatbot" className="block focus:outline-none">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src="/aichat.jpg"
                      alt="AI Personalized Chatbot"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">AI Personalized Chatbot</h3>
                    <p className="mt-2 text-black/70 text-base">
                      Human-like conversational AI tailored to your brand. Engage customers,
                      automate support, and boost conversions.
                    </p>
                    <div className="mt-4 inline-flex items-center text-[#E05D35] font-semibold">
                      Read more →
                    </div>
                  </div>
                </Link>
              </motion.article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
