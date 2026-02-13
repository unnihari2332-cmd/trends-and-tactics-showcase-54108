import React from "react";

const partners = [
  { name: "Hotfut", logo: "/hotfut.png" },
  { name: "JFX Productions", logo: "/JFX Productions.png" },
  { name: "JOIS", logo: "/JOIS.png" },
  { name: "Trends & Tactics", logo: "/Trends & Tactics.png" },
  { name: "Vibee Academy", logo: "/vibeeacademy.png" },
  { name: "Vivira Mall", logo: "/vivaramall.png" },
];

const CollaborationScroll = () => {
  return (
    <section className="relative w-full py-14 md:py-20 bg-black overflow-hidden z-10">
      
      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-10 md:mb-14">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          In Collaboration With
        </h2>
      </div>

      {/* Logos Scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-14 animate-scroll whitespace-nowrap items-center">

          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 md:h-16 object-contain"
              />
            </div>
          ))}

        </div>
      </div>

      {/* Footer Credit */}
      <div className="text-center mt-12">
        <p className="text-gray-300 text-sm">
          Designed by{" "}
          <a
            href="https://www.trendsandtactics.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:underline"
          >
            Trends & Tactics
          </a>
        </p>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default CollaborationScroll;
