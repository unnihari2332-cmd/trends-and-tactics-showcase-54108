import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Gradient background with glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E05D35] to-[#ff7043] rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Main button */}
            <div className="relative w-12 h-12 bg-gradient-to-r from-[#E05D35] to-[#ff7043] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
              <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;