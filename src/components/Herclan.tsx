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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#f472b6,transparent_40%),radial-gradient(circle_at_80%_70%,#818cf8,transparent_40%)]" />

      {/* Floating Blur Shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-40 -right-24 w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-30" />

      {/* Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          The Women Behind
        </h2>

        <span className="inline-block mt-4 px-7 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-md">
          HER Clan
        </span>
      </div>

      {/* Cards */}
      <div className="w-full flex justify-center relative z-10">
        <div className="flex gap-6">
          {members.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive ? "w-[360px]" : "w-[220px]"
                } h-[420px] shadow-xl`}
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Text Area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-black/30">
                  <h2
                    className={`font-bold text-white transition-all duration-300 ${
                      isActive ? "text-3xl" : "text-xl"
                    }`}
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
