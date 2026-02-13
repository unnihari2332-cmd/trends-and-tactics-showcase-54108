import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Herclan from "@/components/Herclan";

const rainbowColors = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-500",
  "text-green-500",
  "text-blue-500",
  "text-indigo-500",
  "text-purple-500",
];

const AnimatedRainbowText = ({ text }) => {
  return (
    <h1 className="text-3xl md:text-6xl font-extrabold flex flex-wrap justify-center gap-1">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`${rainbowColors[index % rainbowColors.length]} animate-bounce inline-block`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

const EventComingSoon = () => {
  useEffect(() => {
    document.title = "HerFest-2026";
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
    

      {/* Desktop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute w-full h-full object-cover"
      >
        <source src="/web.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden absolute w-full h-full object-cover"
      >
        <source src="/mobile.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center text-white">
        
        {/* Event Logo */}
        <img
          src="/text copy.png"
          alt="Event Logo"
          className="w-28 md:w-40 mb-6"
        />

        {/* Animated Rainbow Text */}
        <AnimatedRainbowText text="HerFest 2026" />

        {/* Company Logo */}
        <img
          src="/Her clan.png"
          alt="Company Logo"
          className="w-24 md:w-32 mt-8"
        />

        {/* Registration Button */}
        <div className="mt-10">
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white rounded-xl shadow-lg"
          >
            Register Now
          </Button>
        </div>
      </main>

      <Herclan />
      
    </div>
  );
};

export default EventComingSoon;
