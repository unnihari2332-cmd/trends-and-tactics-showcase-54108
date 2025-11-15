// src/pages/clients/IstharaDiner.jsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const IstharaDiner = () => {
  const navigate = useNavigate();

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

      <main className="pt-16 lg:pt-20">
        <section className="relative w-full min-h-screen flex items-center justify-center p-6 lg:p-16 overflow-hidden">
          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

          <div className="relative z-10 max-w-6xl w-full">
            {/* Back button */}
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="mb-8 bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>

            {/* Main glass card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12">
              {/* HEADER */}
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-[#E05D35] to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Case Study · Hospitality
                </div>

                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#E05D35] to-amber-500 bg-clip-text text-transparent">
                  Isthara Multi Brand Diner
                </h1>

                <p className="font-body text-base md:text-lg lg:text-xl text-foreground/70 font-semibold">
                  Hyderabad-based · Pan-India Presence
                </p>
              </div>

              {/* INTRO SECTION */}
              <div className="grid gap-8 md:grid-cols-2 items-center mb-10">
                {/* Hero / ambience image */}
                <div className="flex justify-center">
                  <img
                    src="/04(1).png"
                    alt="Isthara Multi Brand Diner"
                    className="w-full max-w-xl rounded-2xl shadow-2xl object-cover object-center"
                  />
                </div>

                {/* Text */}
                <div className="w-full">
                  <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-foreground/80 text-center md:text-left">
                    <span className="block mb-2">
                      Client: <strong>Isthara Multi Brand Diner</strong>
                    </span>

                    <span className="block">
                      Scope: Website Development, Branding &amp; On-Ground Design
                      for metro food courts across India.
                    </span>
                  </p>

                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#E05D35]/10 to-amber-400/10 p-4 md:p-5">
                    <p className="font-body text-sm md:text-base lg:text-lg leading-relaxed text-foreground/80">
                      Isthara is a fast-growing multi-brand diner and food court
                      destination. They needed a unified digital presence and
                      consistent physical branding that matched the energy and scale
                      of their locations across metro hubs.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECONDARY IMAGE ROW (optional, using 01(1).png) */}
              <div className="mb-10">
                <div className="flex justify-center">
                  <img
                    src="/01(1).png"
                    alt="Isthara Food Court Design"
                    className="w-full max-w-3xl rounded-2xl shadow-xl object-cover object-center"
                  />
                </div>
              </div>

              {/* CHALLENGE + APPROACH */}
              <div className="grid gap-6 md:grid-cols-2 mb-10">
                {/* Challenge */}
                <motion.article
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-2xl bg-white/90 border border-black/5 p-6 shadow-sm"
                >
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">
                    Challenge
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                    Isthara operates multi-brand food courts in prime metro
                    locations. They needed:
                  </p>

                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm md:text-base text-foreground/80">
                    <li>A strong, modern digital identity</li>
                    <li>
                      Consistent physical branding across different outlet sizes
                      and layouts
                    </li>
                    <li>
                      A visual language that connects website, interiors, and
                      on-ground promotion
                    </li>
                    <li>
                      A vibrant but cohesive ambience that enhances the dining
                      experience
                    </li>
                  </ul>
                </motion.article>

                {/* Our Approach */}
                <motion.article
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.05 }}
                  className="rounded-2xl bg-white/90 border border-black/5 p-6 shadow-sm"
                >
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">
                    Our Approach
                  </h2>

                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-foreground/80">
                    <li>
                      <strong className="text-[#E05D35]">
                        Website Development:
                      </strong>{" "}
                      Designed and launched a clean, modern homepage with a
                      focus on food court experience and brand partners.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">
                        Physical Branding:
                      </strong>{" "}
                      Custom design concepts mapped to each floor plan and
                      available wall space.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">
                        Aesthetic Consistency:
                      </strong>{" "}
                      Vibrant palettes, signage and interior graphics that
                      reflect Isthara&apos;s lively food culture.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">
                        Promotional Collateral:
                      </strong>{" "}
                      Flyers, banners and floor stickers to drive discovery,
                      offers and engagement inside the food courts.
                    </li>
                  </ul>
                </motion.article>
              </div>

              {/* RESULTS – SINGLE ROW */}
              <div className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">
                  Results
                </h2>

                <p className="text-sm md:text-base text-foreground/80 mb-6 max-w-2xl mx-auto text-center">
                  A seamless brand identity that connects digital presence with
                  on-ground experience—strengthening recall and in-store
                  engagement across metro locations.
                </p>

                <div className="flex justify-center items-stretch gap-6 flex-wrap md:flex-nowrap">
                  {[
                    { big: "Seamless", small: "Digital ↔ Offline Identity" },
                    { big: "Enhanced", small: "Food Court Ambience" },
                    { big: "Higher", small: "Customer Engagement" },
                  ].map((r) => (
                    <div
                      key={r.small}
                      className="w-full md:w-64 rounded-2xl border border-black/10 bg-white px-6 py-5 text-center shadow-sm"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold">
                        {r.big}
                      </div>
                      <div className="text-xs md:text-sm text-foreground/70 mt-1">
                        {r.small}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* OUTCOME */}
              <div className="rounded-2xl bg-gradient-to-r from-[#E05D35]/15 to-amber-400/15 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  Outcome
                </h2>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-foreground/85">
                  Isthara now enjoys a stronger, more consistent brand presence
                  across both web and physical spaces. Customers experience a
                  cohesive, high-energy dining environment—from the first
                  website visit to the actual food court—helping build loyalty
                  and repeat footfall.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IstharaDiner;
