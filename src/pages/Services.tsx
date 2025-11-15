// src/pages/ServicesPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/services-hero.jpg";

const SERVICES = [
  { no: "01", title: "Digital Marketing & Paid Ads", blurb: "Precision-targeted campaigns across Google & social.", href: "/services/digital-ads", img: "/DM.jpg", alt: "Analytics dashboard" },
  { no: "02", title: "Video Production & Editing", blurb: "Concept → shoot → edit for reels & brand films.", href: "/services/video-production", img: "/VideoProduction.jpg", alt: "Cinematographer" },
  { no: "03", title: "AI-Driven Branding & Content", blurb: "Smarter identity & messaging with AI workflows.", href: "/services/ai-content", img: "/AIdriven.jpg", alt: "Moodboard" },
  { no: "04", title: "AI Chatbots & Automation", blurb: "Instant, personalized support & lead-gen.", href: "/services/ai-chatbots-automation", img: "/Chatbot.jpg", alt: "Team working" },
  { no: "05", title: "Website & App Development", blurb: "Fast, scalable products built for growth.", href: "/services/web-and-app", img: "/Webdev.jpg", alt: "Developer desk" },
  { no: "07", title: "PR & Media Management", blurb: "Stories that build authority & credibility.", href: "/services/pr-media", img: "/PR.jpg", alt: "Press microphones" },
  { no: "08", title: "Content Marketing", blurb: "Educate, engage, convert across channels.", href: "/services/content-marketing", img: "/Contentmarketing.jpg", alt: "Copywriter" },
  { no: "09", title: "Logo Designing", blurb: "Modern, memorable, timeless identities.", href: "/services/logo-design", img: "/Logodesign.jpg", alt: "Sketching" },
];

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen text-black"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main className="relative">

        {/* HERO */}
        <section className="relative flex items-center justify-center text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${servicesHero})`,
              backgroundPosition: "center 50%",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">

            {/* ---- BREADCRUMB UPDATED ---- */}
            <nav className="flex items-center justify-center gap-4 text-[17px] font-normal text-white/85 mb-4">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <span className="opacity-70">›</span>
              <span className="text-white">Services</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">
              Our Services
            </h1>
          </div>
        </section>

        {/* SERVICES GRID */}
        <div className="bg-white relative z-10">
          <section className="pt-12 md:pt-16 pb-16 md:pb-20 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((s) => (
                  <ServiceImageCard key={s.no} {...s} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="pb-20 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold
                         bg-gradient-to-r from-[#E05D35] to-[#6BC2C4] text-white shadow-lg shadow-black/20
                         hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
            >
              Let’s plan your growth
            </Link>
            <p className="text-sm text-neutral-600 mt-3">
              Get a tailored plan for your goals, budget and timeline.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ================= Card Component ================= */

type CardProps = {
  no: string;
  title: string;
  blurb: string;
  href: string;
  img: string;
  alt: string;
};

function ServiceImageCard({ no, title, blurb, href, img, alt }: CardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-black/5 ring-1 ring-black/10">

      <div className="relative aspect-[16/12] w-full">
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/30" />
      </div>

      <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="rounded-2xl bg-white text-black p-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-widest text-black/60">{no}</span>
            <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
            <div className="ml-auto grid place-items-center h-14 w-14 rounded-full bg-[#6BC2C4]">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="#E05D35" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-[15px] text-black/70">{blurb}</p>
        </div>
      </div>

      <Link to={href} className="absolute inset-0" aria-label={`Learn more: ${title}`} />
    </article>
  );
}
