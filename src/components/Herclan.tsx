import React, { useState } from "react";

const members = [
  {
    name: "Nandhini",
    profession: "Fitness Instructor",
    image:
      "https://images.unsplash.com/photo-1594737625785-c241c5a0d8b9?q=80&w=600",
  },
  {
    name: "Arthi",
    profession: "Fashion Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600",
  },
  {
    name: "Dr Anitha",
    profession: "Kamakshi Hospital",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600",
  },
  {
    name: "Sarayu",
    profession: "Special Educator",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
  },
];

const HoverCardTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex justify-center py-20 bg-gray-100">
      <div className="flex gap-6">
        {members.map((member, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ease-in-out ${
                isActive ? "w-[320px]" : "w-[180px]"
              } h-[420px] shadow-lg`}
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
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
  );
};

export default HoverCardTeam;
