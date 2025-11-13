// src/pages/TIPS.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TIPS() {
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
            src="/TIPS.png"
            alt="The Indian Public School"
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
               The Indian Public School <br />
            </motion.h1>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-10 px-6 md:py-12">
          <div className="container mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                src="/TIPS.png"
                alt="TIPS Campus"
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
                Client: <strong>The Indian Public School</strong> — Coimbatore, Chennai,
                Bengaluru &amp; Hyderabad
                <br />
                Scope: Web Maintenance, Social Media &amp; Branding Campaigns
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CHALLENGE & APPROACH ===== */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl bg-white/85 backdrop-blur-sm p-6 shadow-sm ring-1 ring-black/10"
            >
              <h2 className="text-2xl font-semibold mb-3">Challenge</h2>
              <p>
                TIPS needed a consistent digital presence across multiple metro
                campuses that truly reflected its infrastructure, early-age
                learning environment, and unique approach to education. Existing
                web pages and social media lacked regular updates, creative
                engagement, and emotional connection with parents.
              </p>
            </motion.article>

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
                  <strong className="text-[#E05D35]">Website Management:</strong> Full
                  maintenance and regular updates across all campuses.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Dedicated Social Media:</strong>{" "}
                  End-to-end management of Facebook, Instagram, YouTube, LinkedIn &
                  WhatsApp Channel.
                </li>
                <li>
                  <strong className="text-[#E05D35]">On-Campus Camera Teams:</strong>{" "}
                  Daily candid classroom moments, infrastructure storytelling, and
                  creative festival/important-day reels.
                </li>
                <li>
                  <strong className="text-[#E05D35]">Content Strategy:</strong> Shifted
                  focus from “showcasing facilities” to “children in action” for
                  authentic, relatable stories.
                </li>
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== RESULTS – single horizontal row ===== */}
        <section className="px-6 pb-10">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Results</h2>

              {/* Running text description */}
              <p className="text-base md:text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                Our integrated digital strategy produced measurable growth and deeper
                parent engagement across all campuses.
              </p>

              {/* Force badges into one centered row */}
              <div className="flex justify-center items-stretch gap-8 flex-nowrap">
                {[
                  { big: "1.5 Cr+", small: "Video Views / Year" },
                  { big: "2.5 Lakh+", small: "Parent Shares" },
                  { big: "18%+", small: "Increase in Admissions" },
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
            </div>
          </div>
        </section>

        {/* ===== OUTCOME ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
              <p className="text-lg leading-relaxed">
                The Indian Public School now enjoys a strong, consistent, and
                parent-centric digital brand presence across multiple cities,
                positioning it as one of the most visible schools online and
                contributing to measurable admission growth.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
