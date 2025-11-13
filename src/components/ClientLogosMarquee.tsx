// src/components/ClientLogosMarquee.tsx
import React from "react";

// === All 19 logo files ===
const clientLogos = [
  { src: "/Clientlogo01.png", alt: "Client Logo-01" },
  { src: "/Clientlogo02.png", alt: "Client Logo-02" },
  { src: "/Clientlogo03.png", alt: "Client Logo-03" },
  { src: "/Clientlogo04.png", alt: "Client Logo-04" },
  { src: "/Clientlogo05.png", alt: "Client Logo-05" },
  { src: "/Clientlogo06.png", alt: "Client Logo-06" },
  { src: "/Clientlogo07.png", alt: "Client Logo-07" },
  { src: "/Clientlogo08.png", alt: "Client Logo-08" },
  { src: "/Clientlogo09.png", alt: "Client Logo-09" },
  { src: "/Clientlogo10.png", alt: "Client Logo-10" },
  { src: "/Clientlogo11.png", alt: "Client Logo-11" },
  { src: "/Clientlogo12.png", alt: "Client Logo-12" },
  { src: "/Clientlogo13.png", alt: "Client Logo-13" },
  { src: "/Clientlogo14.png", alt: "Client Logo-14" },
  { src: "/Clientlogo15.png", alt: "Client Logo-15" },
  { src: "/Clientlogo16.png", alt: "Client Logo-16" },
  { src: "/Clientlogo17.png", alt: "Client Logo-17" },
  { src: "/Clientlogo18.png", alt: "Client Logo-18" },
  { src: "/Clientlogo19.png", alt: "Client Logo-19" },
];

const LogoRow = ({
  logos,
  direction,
}: {
  logos: typeof clientLogos;
  direction: "left" | "right";
}) => {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex gap-8 lg:gap-12 ${animationClass} motion-reduce:animate-none hover:[animation-play-state:paused]`}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 lg:h-16 w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
        {/* duplicate set once for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`dup-${index}`}
            className="flex-shrink-0 flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 lg:h-16 w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientLogosMarquee = () => {
  const midpoint = Math.ceil(clientLogos.length / 2);
  const topRow = clientLogos.slice(0, midpoint);
  const bottomRow = clientLogos.slice(midpoint);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful companies who have transformed their digital
            presence with our expertise.
          </p>
        </div>

        <div className="space-y-8">
          <LogoRow logos={topRow} direction="right" />
          <LogoRow logos={bottomRow} direction="left" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
