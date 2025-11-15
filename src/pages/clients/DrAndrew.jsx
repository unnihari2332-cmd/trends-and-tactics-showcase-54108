// src/pages/clients/DrAndrew.jsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DrAndrew = () => {
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
        {/* MAIN WRAPPER – same style as TIPS / Isthara */}
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

            {/* MAIN GLASS CARD */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12">
              {/* HEADER */}
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-[#E05D35] to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Case Study · Healthcare
                </div>

                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#E05D35] to-amber-500 bg-clip-text text-transparent">
                  Dr. Andrew Stephen
                </h1>

                <p className="font-body text-base md:text-lg lg:text-xl text-foreground/70 font-semibold">
                  Pediatrician · Pudukkottai, Tamil Nadu
                </p>

                <p className="mt-3 text-sm md:text-base text-foreground/70">
                  Building a trusted pediatric brand through consistent, parent-focused content.
                </p>
              </div>

              {/* INTRO / OVERVIEW */}
              <div className="grid gap-8 md:grid-cols-2 items-center mb-10">
                {/* Image */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/andrew.png"
                    alt="Dr. Andrew Clinic Branding"
                    className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl object-cover object-center"
                  />
                </div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-foreground/85 mb-4 text-center md:text-left">
                    <strong>Client:</strong> Dr. Andrew Stephen, Pudukkottai
                    <br />
                    <strong>Scope:</strong> Personal Branding, Social Media
                    Management &amp; Video Content Strategy
                  </p>

                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-foreground/80">
                    Dr. Andrew wanted to reach parents beyond his local circle and
                    build a recognizable, trustworthy pediatric brand across Tamil
                    Nadu. Our goal was to convert his expertise into consistent,
                    relatable content that connects with parents online and builds
                    long-term trust.
                  </p>
                </motion.div>
              </div>

              {/* CHALLENGE & APPROACH – two cards */}
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
                    Although Dr. Andrew was well known in Pudukkottai, his online
                    presence was minimal. Parents from other cities had limited
                    access to his guidance, and there was no structured content
                    strategy to position him as a trusted pediatric voice across
                    Tamil Nadu.
                  </p>
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
                      <strong className="text-[#E05D35]">Profile Creation:</strong>{" "}
                      Set up and optimized presence across key social media platforms.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">Content Strategy:</strong>{" "}
                      Created 4–5 video scripts per month focused on real questions
                      and concerns from parents.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">Clinic Setup:</strong>{" "}
                      Designed a dedicated, well-lit shooting environment inside the clinic.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">Engagement Content:</strong>{" "}
                      Published childcare tips, FAQs, reels and testimonials to build engagement.
                    </li>
                  </ul>
                </motion.article>
              </div>

              {/* RESULTS – horizontal stats row */}
              <div className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">
                  Results
                </h2>

                <p className="text-sm md:text-base text-foreground/80 mb-6 max-w-3xl mx-auto text-center">
                  Consistent, high-quality content transformed a local pediatrician
                  into a recognizable personal brand across Tamil Nadu.
                </p>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                  {[
                    { big: "250+", small: "Videos Produced" },
                    { big: "12,000+", small: "Followers (FB & IG)" },
                    { big: "TN-Wide", small: "Reach & Recognition" },
                    { big: "New Clinic", small: "Brand-Led Growth" },
                  ].map((r) => (
                    <div
                      key={r.small}
                      className="flex-1 min-w-[150px] max-w-[190px] rounded-2xl border border-slate-200 bg-white px-6 py-6 text-center shadow-sm"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold">
                        {r.big}
                      </div>
                      <div className="text-xs md:text-sm text-foreground/70 mt-2">
                        {r.small}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* OUTCOME – gradient card */}
              <div className="rounded-2xl bg-gradient-to-r from-[#E05D35]/15 to-amber-400/15 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3">Outcome</h2>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-foreground/85">
                  Today, Dr. Andrew is not just a local pediatrician but a trusted
                  voice for parents across Tamil Nadu. His content is widely shared,
                  his advice is valued, and his new clinic has benefited from
                  strong brand-led recognition and trust built through consistent,
                  meaningful social media presence.
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

export default DrAndrew;
