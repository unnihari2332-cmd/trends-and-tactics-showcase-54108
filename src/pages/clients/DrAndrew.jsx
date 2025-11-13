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

      <main>
        {/* ===== HERO ===== */}
        <section className="relative h-[70vh] min-h-[60svh] flex items-center justify-center text-center px-6">
          <img
            src="/doctor.jpeg"
            alt="Dr. Andrew Stephen"
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
              Dr. Andrew Stephen — Pediatrician
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-white/90 text-lg md:text-xl"
            >
              Building a trusted personal brand that engages parents and the wider
              community across Tamil Nadu.
            </motion.p>
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
              className="w-full"
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
                Dr. Andrew wanted to expand his professional reach beyond Pudukkottai
                and position himself as a trusted voice in child healthcare. With no
                structured online presence, he needed a strong personal brand across
                platforms that could engage parents, patients, and the wider community.
              </p>
            </motion.article>

            {/* Approach */}
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
                  <strong className="text-[#E05D35]">Profile Creation &amp; Management:</strong>{" "}
                  Built and managed accounts on Facebook, Instagram, LinkedIn, and YouTube.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Content Strategy:</strong>{" "}
                  Delivered 4–5 scripts per month tailored to his expertise.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Shooting &amp; Training Support:</strong>{" "}
                  Set up a professional shooting area at the clinic, trained on camera,
                  lighting and delivery, and enabled weekend self-shoots while our team
                  handled editing.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Engagement Content:</strong>{" "}
                  Viral trending news opinions, childcare tips for mothers, patient
                  testimonials, and festive greetings.
                </li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== RESULTS – centered, single horizontal row ===== */}
        <section className="px-6 pb-10">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Results</h2>

              <p className="text-base md:text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                Consistent content and platform presence transformed a local practice
                into a recognizable personal brand with statewide reach.
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
                    className="w-60 rounded-2xl border border-black/10 bg-white px-8 py-6 text-center shadow-sm"
                  >
                    <div className="text-3xl font-extrabold">{r.big}</div>
                    <div className="text-sm text-black/70 mt-1">{r.small}</div>
                  </div>
                ))}
              </div>

              {/* SR-only semantic list */}
              <ul className="sr-only list-disc ml-6 mt-4 space-y-1">
                <li>Produced 250+ video contents</li>
                <li>12,000+ followers across Facebook & Instagram</li>
                <li>Expanded reach across Tamil Nadu</li>
                <li>Strengthened reputation leading to a successful new clinic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== OUTCOME ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
              <p className="text-lg leading-relaxed">
                From a local practitioner to a recognizable personal brand, Dr. Andrew
                Stephen now enjoys higher visibility, credibility, and patient trust
                across Tamil Nadu—culminating in the successful launch of his new clinic
                and stronger neighborhood recognition.
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
