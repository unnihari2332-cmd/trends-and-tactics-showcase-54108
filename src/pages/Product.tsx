// src/pages/Product.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroBg = "/smartaccess-hero.jpg";

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

      <main className="pb-12">
        {/* ===== HERO WITH BREADCRUMB ===== */}
        <section className="relative min-h-[38vh] flex items-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: "center 45%",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 container mx-auto px-4 md:px-6 pt-28 pb-16 text-center">

            {/* ===== BREADCRUMB WHITE COLOR ===== */}
            <nav className="flex items-center justify-center gap-4 text-[17px] font-normal mb-4">
              <Link to="/" className="text-white hover:text-white transition">
                Home
              </Link>
              <span className="text-white/70">›</span>
              <span className="text-white">Products</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">
              Our Products
            </h1>
          </div>
        </section>

        {/* ===== PRODUCT GRID ===== */}
        <section className="px-6 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 md:mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Explore Our Solutions
              </h2>
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
                      src="/biometricbanner01.jpg"
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

              {/* AI Chatbot */}
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
