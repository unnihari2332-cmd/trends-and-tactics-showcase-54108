// src/pages/About.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Bot,
  Palette,
  Code2,
  Users2,
  ShieldCheck,
  TrendingUp,
  Building2,
  HeartHandshake,
  Lightbulb,
  Target,
  Binoculars,
} from "lucide-react";

const About = () => {
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
          title="About Us"
          breadcrumbs={[{ label: "Home", path: "/" }]}
          bgImage="/about02.jpg"
        />

        {/* ===== INTRO + VISION & MISSION (pill style) ===== */}
        <section className="pt-4 pb-10 px-6 md:pt-6 md:pb-12">
          <div className="container mx-auto max-w-7xl grid gap-8 md:grid-cols-2 items-center">
            
            {/* Image (Moved Up) */}
            <div className="flex justify-center -mt-6">
              <img
                src="/Untitled.jpg"
                alt="Team at work"
                className="w-[36rem] md:w-[42rem] rounded-2xl shadow-2xl object-cover object-center"
              />
            </div>

            {/* Vision + Mission Pills */}
            <div className="w-full space-y-6">
              
              {/* Vision */}
              <div className="relative rounded-[2.5rem] bg-white/90 ring-1 ring-black/10 shadow-xl p-6 md:p-8 flex gap-5 md:gap-7 items-start">
                <div className="shrink-0 inline-grid place-items-center size-16 md:size-20 rounded-full bg-[#2ecec8]/20 text-[#2ecec8]">
                  <Target className="size-8 md:size-10" />
                </div>
                <div className="flex-1">
                  <div className="relative inline-block">
                    <span className="relative z-10 text-2xl md:text-4xl font-extrabold text-black">
                      Vision
                    </span>
                    <span className="absolute left-0 bottom-1 h-3 md:h-4 w-24 md:w-40 bg-[#2ecec8] rounded -z-0" />
                  </div>
                  <p className="mt-3 md:mt-4 text-black/80 text-base md:text-xl leading-relaxed md:leading-8">
                    To become a trusted growth partner for{" "}
                    <b>500+ clients worldwide by 2030</b>, using the power of
                    digital innovation, AI, and strategic storytelling.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="relative rounded-[2.5rem] bg-white/90 ring-1 ring-black/10 shadow-xl p-6 md:p-8 flex gap-5 md:gap-7 items-start">
                <div className="shrink-0 inline-grid place-items-center size-16 md:size-20 rounded-full bg-[#2ecec8]/20 text-[#2ecec8]">
                  <Binoculars className="size-8 md:size-10" />
                </div>
                <div className="flex-1">
                  <div className="relative inline-block">
                    <span className="relative z-10 text-2xl md:text-4xl font-extrabold text-black">
                      Mission
                    </span>
                    <span className="absolute left-0 bottom-1 h-3 md:h-4 w-28 md:w-44 bg-[#2ecec8] rounded -z-0" />
                  </div>
                  <p className="mt-3 md:mt-4 text-black/80 text-base md:text-xl leading-relaxed md:leading-8">
                    To create meaningful digital experiences that connect brands
                    with their ideal audience and turn strategy into measurable
                    growth.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== STRATEGY CARDS ===== */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl">

            {/* What We Do */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid place-content-center size-12 rounded-full bg-[#2ecec8] text-black">
                  <Sparkles className="size-6" />
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-black">
                  What We Do
                </h2>
              </div>

              <p className="text-black/80 mb-3">
                Full-funnel growth across brand, product, and performance.  
                We mix craft and data to move metrics that matter.
              </p>

              <ul className="space-y-2 text-black/80">
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  <Palette className="size-4 mt-0.5 shrink-0" /> Creative Design & Branding
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  <Code2 className="size-4 mt-0.5 shrink-0" /> Web & App Development
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  <Bot className="size-4 mt-0.5 shrink-0" /> AI & Automation
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[#2ecec8]" />
                  <TrendingUp className="size-4 mt-0.5 shrink-0" /> SEO, Paid Media & Growth
                </li>
              </ul>
            </motion.article>

            {/* Why Choose Us */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 }}
              className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid place-content-center size-12 rounded-full bg-[#2ecec8] text-black">
                  <ShieldCheck className="size-6" />
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-black">
                  Why Choose Us
                </h2>
              </div>

              <p className="text-black/80 mb-4">
                Proven playbooks, transparent reporting, and senior hands
                on your business.
              </p>

              <ul className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: "500+", icon: Building2 },
                  { label: "Satisfaction", value: "98%", icon: HeartHandshake },
                  { label: "Experience", value: "5+ yrs", icon: Users2 },
                  { label: "Support", value: "24/7", icon: Lightbulb },
                ].map(({ label, value, icon: Icon }) => (
                  <li
                    key={label}
                    className="rounded-xl bg-white/70 ring-1 ring-black/10 p-4 text-center"
                  >
                    <div className="mx-auto mb-1 inline-grid place-items-center size-9 rounded-full bg-[#2ecec8] text-white">
                      <Icon className="size-4" />
                    </div>
                    <div className="text-xl font-bold text-black">{value}</div>
                    <div className="text-sm text-black/70">{label}</div>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        {/* ===== OUR VALUES ===== */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">

            <div className="rounded-2xl bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-black/5 p-6 md:p-10">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8 md:mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Our Values
                </h2>
                <p className="text-base md:text-lg text-black/80">
                  The principles that guide every project we take on.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Innovation",
                    desc: "We explore new tech and creative approaches to keep you ahead.",
                    icon: Rocket,
                  },
                  {
                    title: "Integrity",
                    desc: "Clear communication and transparent reporting at every step.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Excellence",
                    desc: "We sweat the details to deliver quality—no matter the size.",
                    icon: Sparkles,
                  },
                ].map(({ title, desc, icon: Icon }, i) => (
                  <motion.article
                    key={title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-2xl bg-white/90 ring-1 ring-black/10 p-6"
                  >
                    <div className="mb-3 inline-grid place-items-center size-10 rounded-full bg-[#2ecec8] text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      {title}
                    </h3>
                    <p className="text-black/80 leading-relaxed">{desc}</p>
                  </motion.article>
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
