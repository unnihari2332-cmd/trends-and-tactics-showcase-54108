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
    <section className="w-full py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            In Collaboration With
          </h2>
        </div>

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden">

          <div className="flex gap-12 animate-scroll whitespace-nowrap">

            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] opacity-80 hover:opacity-100 transition"
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
