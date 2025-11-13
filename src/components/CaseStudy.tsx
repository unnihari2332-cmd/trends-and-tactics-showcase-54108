import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AVATARS = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1603415526960-f0b8bfa7eaa2?w=200&h=200&fit=crop",
];

const CaseStudy = () => {
  return (
    <section
      id="case-study"
      className="relative isolate overflow-hidden my-20 min-h-[70vh] md:min-h-[80vh] w-full"
    >
      {/* Full-bleed background image — replace if needed */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Title + subtext */}
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow">
            Success Story
          </h2>
          <p className="text-lg md:text-xl text-white/90 drop-shadow">
            How we helped The Indian Public School achieve exceptional growth
          </p>
        </motion.div>
      </div>

      {/* Right-aligned box with new color */}
      <div className="mx-auto max-w-7xl px-6 h-full flex">
        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            bg-[#E05D35] text-black    /* 🔸 updated color */
            rounded-[36px]
            shadow-2xl ring-1 ring-black/10
            w-full sm:w-[480px] lg:w-[580px]
            ml-auto my-6
            p-6 md:p-10
          "
        >
          <div className="grid grid-cols-[auto_1fr] gap-8 items-center">
            {/* White pill with vertical label + 200+ */}
            <div className="relative bg-white rounded-[28px] px-8 py-10 shadow-md flex items-center justify-center">
              <span
                className="absolute left-2 top-1/2 -translate-y-1/2 text-sm font-medium tracking-wide text-black/80"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                Satisfied Customers
              </span>

              <div className="flex flex-col items-center justify-center pl-6">
                <div className="text-4xl md:text-5xl font-extrabold mb-4">200+</div>
                <div className="flex -space-x-3">
                  {AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Customer ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex flex-col justify-center">
              <Metric number="250%" label="Engagement Increase" />
              <Divider />
              <Metric number="15K+" label="New Followers" />
              <Divider />
              <Metric number="90%" label="Parent Satisfaction" />
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8"
          >
            <Button size="lg" className="rounded-xl bg-black text-white hover:bg-black/90">
              View Full Case Study
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Metric = ({ number, label }: { number: string; label: string }) => (
  <div className="text-left">
    <div className="text-4xl md:text-5xl font-extrabold leading-none">{number}</div>
    <div className="mt-2 text-lg md:text-xl leading-snug">{label}</div>
  </div>
);

const Divider = () => <div className="my-5 h-px w-48 md:w-64 bg-black/20" />;

export default CaseStudy;
