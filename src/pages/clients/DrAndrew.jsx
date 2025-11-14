// src/pages/clients/DrAndrew.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

      <main>

        {/* ===== HERO (Portfolio style — EXACT same size as TIPS) ===== */}
        <section className="relative h-[62vh] min-h-[500px] flex items-center justify-center text-center px-6">
          <img
            src="/doctor.jpeg"
            alt="Dr. Andrew Stephen"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/55" />

          {/* content */}
          <div className="relative z-10 container mx-auto max-w-6xl">
            {/* breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="opacity-60">›</span>

              <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
              <span className="opacity-60">›</span>

              <span className="text-white">Dr. Andrew Stephen</span>
            </nav>

            {/* top small title (same style as TIPS) */}
            <p className="uppercase tracking-wider text-[#E05D35] font-semibold text-sm md:text-base mb-1">
              DR ANDREW STEPHEN
            </p>

            {/* main title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Dr. Andrew Stephen — Pediatrician
            </motion.h1>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-10 px-6 md:py-12">
          <div className="container mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                src="/andrew.png"
                alt="Clinic setup"
                className="w-[36rem] md:w-[42rem] rounded-2xl shadow-2xl object-cover object-center"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <p className="text-base md:text-2xl font-medium leading-relaxed text-black text-center md:text-left">
                <strong>Client:</strong> Dr. Andrew Stephen, Pudukkottai
                <br />
                <strong>Scope:</strong> Personal Branding, Social Media Management &amp; Video Content Strategy
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CHALLENGE & APPROACH ===== */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/85 backdrop-blur-sm p-6 shadow-sm ring-1 ring-black/10"
            >
              <h2 className="text-2xl font-semibold mb-3">Challenge</h2>
              <p>
                Dr. Andrew wanted to expand his professional reach beyond Pudukkottai…
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl bg-white/85 backdrop-blur-sm p-6 shadow-sm ring-1 ring-black/10"
            >
              <h2 className="text-2xl font-semibold mb-3">Our Approach</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Profile creation & management…</li>
                <li>Content strategy…</li>
                <li>Shooting & training…</li>
                <li>Engagement content…</li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== RESULTS ===== */}
        <section className="px-6 pb-10">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Results</h2>

              <p className="text-base md:text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                Consistent content transformed a local practice…
              </p>

              <div className="flex justify-center items-stretch gap-8 flex-nowrap">
                {[
                  { big: "250+", small: "Videos Produced" },
                  { big: "12,000+", small: "Followers (FB & IG)" },
                  { big: "TN-Wide", small: "Reach & Recognition" },
                  { big: "New Clinic", small: "Brand-led Growth" },
                ].map((r) => (
                  <div
                    key={r.small}
                    className="w-60 rounded-2xl border border-black/10 bg-white px-8 py-6 shadow-sm"
                  >
                    <div className="text-3xl font-extrabold">{r.big}</div>
                    <div className="text-sm text-black/70 mt-1">{r.small}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUTCOME ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 p-6 md:p-8 shadow-xl ring-1 ring-black/5">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
              <p className="text-lg leading-relaxed">
                From a local practitioner to a recognizable brand…
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
