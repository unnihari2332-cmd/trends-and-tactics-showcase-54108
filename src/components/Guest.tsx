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
    image: "https://www.trendsandtactics.in/sujatha.png",
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
    image: "https://www.trendsandtactics.in/kamakshi1.png",
    gradient: "from-purple-500 via-indigo-400 to-blue-400",
  },
];

const GuestOfHonourSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">

      {/* Optional soft glow (still works over video) */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 space-y-14 md:space-y-20 relative z-10">

        {guests.map((guest, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="flex justify-center">
                <div
                  className={`p-[3px] rounded-3xl bg-gradient-to-br ${guest.gradient} shadow-xl`}
                >
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-[260px] md:w-[300px] h-[340px] md:h-[380px] object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <div
                  className={`rounded-3xl bg-gradient-to-br ${guest.gradient} p-[2px]`}
                >
                  {/* Glass Effect Card (No White Background) */}
                  <div className="backdrop-blur-md bg-black/40 rounded-3xl p-6 md:p-8 shadow-xl">

                    <p className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                      {guest.title}
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                      {guest.name}
                    </h2>

                    <ul className="mt-5 space-y-2">
                      {guest.roles.map((role, rIndex) => (
                        <li
                          key={rIndex}
                          className="text-gray-200 text-sm md:text-base flex gap-3"
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
          );
        })}
      </div>
    </section>
  );
};

export default GuestOfHonourSection;
