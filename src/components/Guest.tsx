import React from "react";

const guests = [
  {
    name: "Sujatha Babu",
    title: "Guest of Honour",
    roles: [
      "News Reader – Sun TV",
      "Actress",
      "YouTuber",
      "Influencer",
    ],
    images: [
      "https://www.trendsandtactics.in/kamakshi.png",

    ],
    gradient: "from-pink-500 via-rose-400 to-orange-400",
  },
  {
    name: "Dr. T. G. Sivaranjani",
    title: "Guest of Honour",
    roles: [
      "Chief Consultant (Obstetrics & Gynecology)",
      "Infertility Specialist",
      "Director – Operations & Finance",
      "Dr. Kamakshi Memorial Hospital",
    ],
    images: [
      "https://www.trendsandtactics.in/sujatha.png",
      
    ],
    gradient: "from-purple-500 via-indigo-400 to-blue-400",
  },
];

const GuestOfHonourSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        
        {guests.map((guest, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            
            {/* LEFT SIDE – 2x2 IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">
              {guest.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${guest.gradient} p-[3px]`}
                >
                  <img
                    src={img}
                    alt={guest.name}
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* RIGHT SIDE – CONTENT */}
            <div className="relative">
              
              {/* Gradient Border Card */}
              <div
                className={`rounded-3xl bg-gradient-to-br ${guest.gradient} p-[2px]`}
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                  
                  <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                    {guest.title}
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    {guest.name}
                  </h2>

                  <ul className="mt-6 space-y-2">
                    {guest.roles.map((role, rIndex) => (
                      <li
                        key={rIndex}
                        className="text-gray-600 text-lg flex items-start gap-2"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></span>
                        {role}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default GuestOfHonourSection;
