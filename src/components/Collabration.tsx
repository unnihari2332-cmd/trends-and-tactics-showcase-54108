import React from "react";

const partners = [
  { name: "Company 1", logo: "https://via.placeholder.com/140x70" },
  { name: "Company 2", logo: "https://via.placeholder.com/140x70" },
  { name: "Company 3", logo: "https://via.placeholder.com/140x70" },
  { name: "Company 4", logo: "https://via.placeholder.com/140x70" },
  { name: "Company 5", logo: "https://via.placeholder.com/140x70" },
  { name: "Company 6", logo: "https://via.placeholder.com/140x70" },
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

            {/* Duplicate logos for infinite scroll */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[140px] opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation Style */}
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
