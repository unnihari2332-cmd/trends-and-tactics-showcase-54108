// src/pages/clients/DrAndrew.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const DrAndrew = () => {
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

      <main className="overflow-hidden">
        {/* ===== HERO ===== */}
        <section className="relative h-[85vh] w-full flex items-center justify-center text-center px-6">
          <img
            src="/0006.jpg"
            alt="Dr. Andrew Stephen"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 container mx-auto max-w-6xl pt-24">
            <nav className="flex items-center justify-center gap-2 text-sm text-white/80 mb-3">
              <a href="/" className="hover:text-white">
                Home
              </a>
              <span>›</span>
              <a href="/portfolio" className="hover:text-white">
                Portfolio
              </a>
              <span>›</span>
              <span className="text-white">Dr. Andrew Stephen</span>
            </nav>

            <p className="uppercase tracking-wider text-[#E05D35] font-semibold text-base mb-1">
              DR ANDREW STEPHEN
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              Dr. Andrew Stephen — Pediatrician
            </motion.h1>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-10 px-6">
          <div className="container mx-auto max-w-6xl grid gap-6 md:grid-cols-2 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="/andrew.png"
                alt="Clinic"
                className="w-[30rem] md:w-[35rem] rounded-2xl shadow-lg object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg md:text-xl font-medium leading-relaxed text-black">
                <strong>Client:</strong> Dr. Andrew Stephen, Pudukkottai
                <br />
                <strong>Scope:</strong> Personal Branding, Social Media Management & Video Content Strategy
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CHALLENGE & APPROACH ===== */}
        <section className="py-10 px-6">
          <div className="container mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-black/10"
            >
              <h2 className="text-2xl font-semibold mb-3">Challenge</h2>
              <p>
                Dr. Andrew wanted a strong personal brand that extends beyond Pudukkottai...
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-black/10"
            >
              <h2 className="text-2xl font-semibold mb-3">Our Approach</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#E05D35]">Profile Creation:</strong> Setup and managed all platforms.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Content Strategy:</strong> Delivered 4–5 scripts per month.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Training:</strong> Setup clinic shooting environment.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Engagement Content:</strong> Childcare tips, testimonials, etc.
                </li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== RESULTS (TIGHT, LIKE SCREENSHOT) ===== */}
        <section className="px-4 md:px-6 pb-8 md:pb-10">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[26px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-black/5 px-6 md:px-10 py-7 md:py-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Results</h2>

              <p className="text-base md:text-lg text-black/80 mb-6 max-w-3xl mx-auto">
                Consistent content transformed a local doctor into a statewide personal brand.
              </p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  { big: "250+", small: "Videos Produced" },
                  { big: "12,000+", small: "Followers (FB & IG)" },
                  { big: "TN-Wide", small: "Reach & Recognition" },
                  { big: "New Clinic", small: "Brand-led Growth" },
                ].map((r) => (
                  <div
                    key={r.small}
                    className="flex-1 min-w-[150px] max-w-[190px] rounded-[22px] border border-slate-200 bg-white px-6 py-5 text-center shadow-sm"
                  >
                    <div className="text-2xl md:text-3xl font-extrabold">{r.big}</div>
                    <div className="text-xs md:text-sm text-black/70 mt-1">{r.small}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUTCOME ===== */}
        <section className="px-6 pb-10">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Outcome</h2>
              <p className="text-lg leading-relaxed">
                Dr. Andrew now enjoys statewide reach, credibility, and a strong personal brand.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DrAndrew;
