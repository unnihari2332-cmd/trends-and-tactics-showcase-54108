import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  heading,
  description,
  buttonText = "Talk to us",
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-xl"
        >
          {/* Diagonal Teal Accent */}
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#2ecec8]"
            style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-12 py-10 md:py-14 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {heading}
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              {description}
            </p>
            <Link
              to={buttonLink}
              className="inline-block px-8 py-3 bg-[#E05D35] hover:bg-[#c54d28] text-white font-semibold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {buttonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
