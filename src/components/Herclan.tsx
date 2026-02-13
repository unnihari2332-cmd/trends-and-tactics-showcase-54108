import React, { useState } from "react";

const members = [
  {
    name: "Nandhini",
    profession: "Fitness Instructor",
    image:
      "https://www.trendsandtactics.in/2.png",
  },
  {
    name: "Arthi",
    profession: "Fashion Designer",
    image:
      "https://www.trendsandtactics.in/3.png",
  },
  {
    name: "Dr Anitha",
    profession: "Kamakshi Hospital",
    image:
      "https://www.trendsandtactics.in/5.png",
  },
  {
    name: "Sarayu",
    profession: "Special Educator",
    image:
      "https://www.trendsandtactics.in/4.png",
  },
];

const HoverCardTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-20 bg-gray-100 overflow-hidden">
      
      {/* Decorative Background Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          The Women Behind
        </h2>
        <span className="inline-block mt-3 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg">
          HER Clan
        </span>
      </div>

      {/* Cards */}
      <div className="w-full flex justify-center">
        <div className="flex gap-6">
          {members.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive ? "w-[360px]" : "w-[220px]"
                } h-[420px] shadow-lg`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2
                    className={`font-bold transition-all duration-300 ${
                      isActive ? "text-3xl" : "text-xl"
                    }`}
                  >
                    {member.name}
                  </h2>

                  {isActive && (
                    <p className="mt-2 text-sm opacity-90">
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
