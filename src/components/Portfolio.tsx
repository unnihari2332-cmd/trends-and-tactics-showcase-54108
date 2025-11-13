// src/pages/Portfolio.tsx
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

type Item = {
  title: string;
  industry: string;
  description: string;
  image: string;
  metrics: string;
};

const portfolioItems: Item[] = [
  {
    title: "The Indian Public School",
    industry: "Education",
    description:
      "Complete rebranding and digital presence transformation that modernized traditional learning environments. We created comprehensive brand guidelines, developed an intuitive digital platform, and established a strong online community that increased student engagement and parent satisfaction significantly.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    metrics: "250% engagement increase",
  },
  {
    title: "Luxe Jewelry Collection",
    industry: "Retail",
    description:
      "Festive campaign driving exceptional sales through strategic social media marketing and influencer partnerships. Our comprehensive approach included luxury brand positioning, premium visual content creation, and targeted advertising campaigns that resonated with high-end consumers during peak shopping seasons.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    metrics: "300% sales growth",
  },
  {
    title: "Urban Food Co.",
    industry: "Food & Beverage",
    description:
      "Social media strategy and influencer partnerships that transformed brand presence in the competitive food industry. We developed mouth-watering visual content, established strategic partnerships with food influencers, and created viral marketing campaigns that significantly boosted brand awareness.",
    image:
      "https://images.unsplash.com/photo-1555939594-58e22c3dcc7d?w=600&h=400&fit=crop",
    metrics: "180% follower growth",
  },
  {
    title: "TechStart Solutions",
    industry: "Technology",
    description:
      "B2B lead generation and content marketing strategy that positioned a startup as an industry leader. Our comprehensive digital marketing approach included thought leadership content, strategic SEO optimization, and targeted lead generation campaigns that accelerated business growth.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    metrics: "400% lead conversion",
  },
  {
    title: "HealthPlus Clinic",
    industry: "Healthcare",
    description:
      "Patient acquisition through targeted digital channels and community engagement programs. We developed trust-building marketing strategies, created educational content campaigns, and implemented patient-centric digital experiences that improved healthcare accessibility and patient satisfaction.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    metrics: "200% patient growth",
  },
  {
    title: "Global Entertainment Hub",
    industry: "Entertainment",
    description:
      "Multi-platform campaign for event promotion with immersive brand experiences and innovative marketing strategies. Our creative approach included experiential marketing, social media activations, and integrated promotional campaigns that created buzz and drove massive ticket sales.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    metrics: "500% ticket sales",
  },
];

/** Parent: simple stagger with no initial delay */
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0 },
  },
};

/** Child: tween (no spring) for a continuous glide */
const cardVariants = (colOffset: number) => ({
  hidden: {
    opacity: 0,
    y: 48,
    x: colOffset,
    rotateX: -10,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
});

export default function Portfolio() {
  const [filter] = useState("All");
  const [query] = useState("");

  const filtered = portfolioItems.filter((item) => {
    const matchesFilter = filter === "All" || item.industry === filter;
    const q = query.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.industry.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 bg-muted/30" id="portfolio">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects across various industries
          </p>
        </motion.div>

        {/* Perspective enhances the subtle rotateX without stutter */}
        <div style={{ perspective: 1100 }}>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }} // trigger a bit earlier; no waiting
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {filtered.slice(0, 6).map((item, idx) => {
              const colOffset = [-70, 0, 70][idx % 3];

              const routePath = `/portfolio/${item.title
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "")}`;

              return (
                <Link key={item.title} to={routePath} className="block">
                  <motion.article
                    variants={cardVariants(colOffset)}
                    style={{ willChange: "transform, opacity" }}
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                      transition: { duration: 0.25, ease: "easeOut" },
                      boxShadow:
                        "0 12px 30px -12px rgba(0,0,0,0.35), 0 6px 16px -8px rgba(0,0,0,0.25)",
                    }}
                    className="glass-card p-6 rounded-2xl group cursor-pointer transition-transform"
                  >
                    {/* Image */}
                    <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        style={{ willChange: "transform" }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
                    </div>

                    {/* Body */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <div className="text-sm font-semibold text-teal mb-3 uppercase tracking-wide">
                      {item.industry}
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-orange">
                        {item.metrics}
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
