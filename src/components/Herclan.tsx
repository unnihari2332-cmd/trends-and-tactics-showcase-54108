import React, { useState } from "react";

const members = [
  {
    name: "Nandhini",
    profession: "Fitness Instructor",
    image: "https://www.trendsandtactics.in/2.png",
  },
  {
    name: "Arthi",
    profession: "Fashion Designer",
    image: "https://www.trendsandtactics.in/3.png",
  },
  {
    name: "Dr Anitha",
    profession: "Kamakshi Hospital",
    image: "https://www.trendsandtactics.in/5.png",
  },
  {
    name: "Sarayu",
    profession: "Special Educator",
    image: "https://www.trendsandtactics.in/4.png",
  },
];

const HoverCardTeam = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white">

      {/* Title */}
      <div className="text-center mb-14 md:mb-20 relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          The Women Behind
        </h2>

        <span className="inline-block mt-4 px-6 py-2 md:px-7 md:py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-md text-sm md:text-base">
          HER Clan
        </span>
      </div>

      {/* Cards */}
      <div className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-5 md:gap-6">

          {members.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`
                  relative overflow-hidden rounded-3xl cursor-pointer
                  transition-all duration-500 ease-in-out
                  h-[380px] md:h-[420px]
                  shadow-xl
                  w-full
                  ${isActive ? "md:w-[360px]" : "md:w-[220px]"}
                `}
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Text Area */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 backdrop-blur-md bg-black/30">
                  <h2
                    className={`
                      font-bold text-white transition-all duration-300
                      ${isActive ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}
                    `}
                  >
                    {member.name}
                  </h2>

                  {isActive && (
                    <p className="mt-1 text-sm text-white/90">
                      {member.profession}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default HoverCardTeam;
