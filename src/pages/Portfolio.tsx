// src/pages/Portfolio.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* -------------------- Data -------------------- */
type Item = {
  title: string;
  image: string;
  path?: string;
};

const portfolioItems: Item[] = [
  {
    title: "The Indian Public School",
    image: "/TIPS.png",
    path: "/portfolio/the-indian-public-school",
  },
  {
    title: "Swathi Konde — Actress",
    image: "/Swathi02.png",
    path: "/portfolio/swathi-konde-actress",
  },
  {
    title: "Isthara Multi Dining",
    image: "/03(1).png",
    path: "/portfolio/istahara-multi-dining",
  },
  {
    title: "Dr Andrew Stephen",
    image: "/andrew.png",
    path: "/portfolio/andrew",
  },
  {
    title: "Aatral Foundation",
    image: "/Aatral.png",
    path: "/portfolio/aatral-foundation",
  },
  {
    title: "Dhiravyam — Actor",
    image: "/Dhiravyam.png",
    path: "/portfolio/dhiravyam-actor",
  },
  {
    title: "Niyas Khan — Actor",
    image: "/niyaz.jpg",
    path: "/portfolio/niyas-khan-actor",
  },
  {
    title: "INDSYS",
    image: "/indsysbanner.jpg",
    path: "/portfolio/indsys",
  },
  {
    title: "OECL India — Website Revamp",
    image: "/OECLbanner.jpg",
    path: "/portfolio/oecl",
  },
  {
    title: "Naalai Namadhe — Official Website",
    image: "/nntvbanners.jpg",
    path: "/portfolio/naalai-namadhe",
  },
  {
    title: "Trillion Minds",
    image: "/Trillion.png",
    path: "/portfolio/trillion-minds",
  },
];

/* -------------------- Util -------------------- */
function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

/* -------------------- Card -------------------- */
function PosterCard({ item, idx }: { item: Item; idx: number }) {
  const to = item.path ?? `/portfolio/${slugify(item.title)}`;

  return (
    <div
      className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white shadow-sm
                 transition-shadow hover:shadow-md focus-within:shadow-md"
    >
      {/* Image */}
      <Link
        to={to}
        className="w-full outline-none"
        aria-label={`Open portfolio: ${item.title}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: idx * 0.05 }}
          className="relative h-[260px] overflow-hidden rounded-t-2xl border-b border-gray-200 sm:h-[300px] lg:h-[340px]"
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </motion.div>
      </Link>

      {/* Title + Read More */}
      <div className="flex w-full items-center justify-between px-4 py-4">
        <h3 className="text-base md:text-lg font-extrabold tracking-wide text-black">
          {item.title}
        </h3>
        <Link
          to={to}
          className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold text-black
                     transition-colors hover:bg-black hover:text-white"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

/* -------------------- Page -------------------- */
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Top section like your screenshot */}
      <section className="bg-white">
        <div className="container mx-auto max-w-4xl px-6 pt-24 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Our Portfolio
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            A showcase of our featured projects.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, idx) => (
              <PosterCard key={`${item.title}-${idx}`} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
