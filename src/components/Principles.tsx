import { Check } from "lucide-react";
import { motion, useAnimation, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const principles = [
  {
    title: "Client First",
    description:
      "Your success is our priority. Every strategy is tailored to your unique business needs.",
  },
  {
    title: "Integrity",
    description:
      "Transparent reporting and honest communication in all our partnerships.",
  },
  {
    title: "Innovation",
    description:
      "Staying ahead of digital trends with cutting-edge tools and strategies.",
  },
  {
    title: "Collaboration",
    description: "Working as an extension of your team to achieve shared goals.",
  },
  {
    title: "Accountability",
    description:
      "Taking ownership of results and continuously optimizing performance.",
  },
  {
    title: "Excellence",
    description: "Delivering exceptional quality in every campaign and project.",
  },
];

const PrincipleCard = ({ principle, index }: { principle: typeof principles[0], index: number }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [hasFallen, setHasFallen] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Motion values for physics-based dragging
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  useEffect(() => {
    // Initial falling animation
    const timer = setTimeout(() => {
      setHasFallen(true);
    }, 100 + index * 150);
    
    return () => clearTimeout(timer);
  }, [index]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    const threshold = 150;
    const velocity = Math.sqrt(info.velocity.x ** 2 + info.velocity.y ** 2);
    
    if (velocity > threshold) {
      // Throw physics - animate based on velocity
      const throwX = info.velocity.x * 0.3;
      const throwY = info.velocity.y * 0.3;
      
      controls.start({
        x: throwX,
        y: throwY,
        rotate: info.velocity.x * 0.05,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1
        }
      }).then(() => {
        // Settle back to original position with bounce
        controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.8
          }
        });
      });
    } else {
      // Normal return to position
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 30
        }
      });
    }
    
    // Reset motion values
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={constraintsRef}
      initial={{ 
        opacity: 0, 
        y: -window.innerHeight - 200,
        rotate: Math.random() * 40 - 20,
        scale: 0.8
      }}
      animate={hasFallen ? { 
        opacity: 1, 
        y: 0, 
        rotate: 0,
        scale: 1,
        transition: { 
          type: "spring",
          stiffness: 60,
          damping: 12,
          mass: 1,
          delay: 0
        }
      } : {}}
      drag
      dragMomentum={true}
      dragElastic={0.2}
      whileDrag={{ 
        scale: 1.1,
        zIndex: 50,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        cursor: "grabbing"
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
      className={`bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 group cursor-grab transition-all relative ${
        isDragging ? 'shadow-2xl' : ''
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <motion.div 
            className="w-8 h-8 bg-teal rounded-full flex items-center justify-center group-hover:bg-orange transition-colors duration-300"
            whileHover={{ rotate: 360, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Check className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {principle.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {principle.description}
          </p>
        </div>
      </div>
      
      {/* Physics indicator */}
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 bg-orange rounded-full opacity-0"
        animate={isDragging ? { opacity: 1, scale: [1, 1.5, 1] } : { opacity: 0 }}
        transition={{ duration: 0.3, repeat: isDragging ? Infinity : 0 }}
      />
    </motion.div>
  );
};

const Principles = () => {
  return (
    <section
      id="principles"
      className="relative flex items-center py-20 text-black bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4 text-gray-900">Our Core Principles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-orange rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The values that drive everything we do and guide our commitment to
            your success. <span className="text-sm text-gray-500">(Watch them fall, then drag and throw like a game!)</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ minHeight: "400px" }}>
          {principles.map((principle, index) => (
            <PrincipleCard 
              key={index} 
              principle={principle} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
