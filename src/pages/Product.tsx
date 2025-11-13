import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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
        <PageHeader 
          title="Our Products" 
          breadcrumbs={[{ label: "Home", path: "/" }]}
          bgImage="/smartaccess-hero.jpg"
        />

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
