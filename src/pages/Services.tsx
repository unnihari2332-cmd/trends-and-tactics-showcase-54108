import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/services-hero.jpg";

const SERVICES = [
  { no: "01", title: "Digital Marketing & Paid Ads", blurb: "Precision-targeted campaigns across Google & social.", href: "/services/digital-ads", img: "/DM.jpg", alt: "Analytics dashboard on a laptop" },
  { no: "02", title: "Video Production & Editing", blurb: "Concept → shoot → edit for reels, events & brand films.", href: "/services/video-production", img: "/VideoProduction.jpg", alt: "Cinematographer with camera rig" },
  { no: "03", title: "AI-Driven Branding & Content", blurb: "Smarter identity & messaging with AI workflows.", href: "/services/ai-content", img: "/AIdriven.jpg", alt: "Creative workspace with moodboard" },
  { no: "04", title: "AI Chatbots & Automation", blurb: "Instant, personalized support & lead-gen.", href: "/services/ai-chatbots-automation", img: "/Chatbot.jpg", alt: "Team collaborating in office" },
  { no: "05", title: "Website & App Development", blurb: "Fast, scalable products built for growth.", href: "/services/web-and-app", img: "/Webdev.jpg", alt: "Developer working at desk" },
  // SEO & Growth Strategy removed earlier
  { no: "07", title: "PR & Media Management", blurb: "Stories that build authority & credibility.", href: "/services/pr-media", img: "/PR.jpg", alt: "Microphones at a press event" },
  { no: "08", title: "Content Marketing", blurb: "Educate, engage, convert across channels.", href: "/services/content-marketing", img: "/Contentmarketing.jpg", alt: "Copywriter working with notebook" },
  { no: "09", title: "Logo Designing", blurb: "Modern, memorable, timeless identities.", href: "/services/logo-design", img: "/Logodesign.jpg", alt: "Designer sketching logo concepts" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="relative">
        {/* HERO */}
        <section
          className="relative pt-20 pb-16 px-6 min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: `url(${servicesHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-black/50 z-0" />
          <div className="container mx-auto max-w-5xl relative z-10 text-center">
            {/* FULLY WHITE HEADING */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Our <span className="text-white">Services</span>
            </h1>
            <p className="mt-4 text-white/90 text-lg max-w-3xl mx-auto">
              Move fast with stories, systems, and design that actually grow your business.
            </p>
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
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-all
                         bg-gradient-to-r from-[#E05D35] to-[#6BC2C4] text-white shadow-lg shadow-black/20
                         hover:shadow-xl hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Let’s plan your growth
            </Link>
            <p className="text-sm text-neutral-600 mt-3">
              Get a tailored plan for your goals, budget, and timeline.
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
    <article className="group relative overflow-hidden rounded-3xl bg-black/5 ring-1 ring-black/10 focus-within:ring-2 focus-within:ring-[#6BC2C4]">
      {/* Background image */}
      <div className="relative aspect-[16/12] w-full">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-[2px]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Service";
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/30" />
      </div>

      {/* Hover/Focus info card */}
      <div className="pointer-events-none absolute inset-x-6 bottom-6 translate-y-4 opacity-0 transition duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
        <div className="rounded-2xl bg-white text-black p-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-widest text-black/60">{no}</span>
            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{title}</h3>
            <div className="ml-auto grid place-items-center h-14 w-14 rounded-full bg-[#6BC2C4]">
              <span className="sr-only">Open {title}</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="-mr-0.5" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="#E05D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-[15px] text-black/70">{blurb}</p>
        </div>
      </div>

      {/* Full-card link (keyboard accessible) */}
      <Link
        to={href}
        className="absolute inset-0 focus:outline-none"
        aria-label={`Learn more: ${title}`}
      />
    </article>
  );
}
