// src/pages/CaseStudies.tsx
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { slidesData } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

/* Map client titles to routes (must match slidesData titles exactly) */
const clientRoutes: Record<string, string> = {
  "The Indian Public School (TIPS)": "/clients/TIPS",
  "Dr. Andrew Stephen – Pediatrician": "/clients/DrAndrew",
  "Isthara Multi Brand Diner": "/clients/IstharaDiner",
};

/* Map client titles to PUBLIC images (place files in /public) */
const clientImages: Record<string, string> = {
  "The Indian Public School (TIPS)": "/TIPS.jpg?v=1",
  "Dr. Andrew Stephen – Pediatrician": "/doctor.jpeg?v=1",
  "Isthara Multi Brand Diner": "/isthara.avif?v=1",
};

type Slide = (typeof slidesData)[number];

function FullPageSlide({
  item,
  to,
  isActive,
}: {
  item: Slide;
  to: string;
  isActive: boolean;
}) {
  // Priority: mapped image ➜ slide.image ➜ placeholder
  const src =
    clientImages[item.title] ||
    (item as any).image ||
    "https://via.placeholder.com/1600x900.png?text=Case+Study";

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={src}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://via.placeholder.com/1600x900.png?text=Image+Not+Found";
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {item.title}
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {(item as any).description ||
            "Discover how we transformed their business with innovative strategies and measurable results."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to={to}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full 
                       font-bold text-lg hover:bg-black hover:text-white transition-all duration-300
                       shadow-2xl hover:scale-105 transform"
          >
            Read Case Study
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Only slides with defined routes
  const validSlides = slidesData.filter((slide) => clientRoutes[slide.title]);

  const nextSlide = () => setCurrentIndex((p) => (p + 1) % validSlides.length);
  const prevSlide = () => setCurrentIndex((p) => (p - 1 + validSlides.length) % validSlides.length);
  const goToSlide = (i: number) => setCurrentIndex(i);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 50) nextSlide();
    if (dist < -50) prevSlide();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Auto-play
  useEffect(() => {
    const id = setInterval(nextSlide, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md">
        <Header />
      </div>

      {/* Slider */}
      <div
        className="relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <FullPageSlide
              item={validSlides[currentIndex]}
              to={clientRoutes[validSlides[currentIndex].title]}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm
                     rounded-full flex items-center justify-center text-white hover:bg-white/30
                     transition-all duration-300 pointer-events-auto group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm
                     rounded-full flex items-center justify-center text-white hover:bg-white/30
                     transition-all duration-300 pointer-events-auto group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-auto">
          {validSlides.map((_, i) => (
            <button key={i} onClick={() => goToSlide(i)} className="group p-2">
              <Circle
                className={`w-3 h-3 transition-all duration-300 group-hover:scale-125 ${
                  i === currentIndex ? "fill-white text-white" : "text-white/50 hover:text-white/80"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-24 right-6 bg-black/20 backdrop-blur-sm rounded-full
                        px-4 py-2 text-white font-medium pointer-events-auto">
          {currentIndex + 1} / {validSlides.length}
        </div>
      </div>

      {/* Swipe instruction */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-30 bg-black/30 backdrop-blur-sm
                   rounded-full px-6 py-3 text-white text-sm pointer-events-none"
      >
        Swipe or use arrow keys to navigate
      </motion.div>
    </div>
  );
};

export default CaseStudies;
