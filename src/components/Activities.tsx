import React from "react";
import { Music, PartyPopper, Gamepad2, Award, Disc3, Gift } from "lucide-react";

const activities = [
  {
    title: "Zumba with Parai",
    icon: Music,
    gradient: "from-pink-500 to-orange-400",
  },
  {
    title: "Sing Along Session",
    icon: PartyPopper,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Fun & Crazy Games",
    icon: Gamepad2,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "Homepreneur Awards",
    icon: Award,
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    title: "DJ Night",
    icon: Disc3,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Goodies & Surprise Moments",
    icon: Gift,
    gradient: "from-rose-500 to-pink-500",
  },
];

const ActivitiesHighlights = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Activities / Highlights
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Exciting experiences planned for the event
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl p-[2px] bg-gradient-to-br transition-all duration-300 hover:scale-[1.03]"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-100 transition duration-300 blur-xl`}
                />

                <div className="relative bg-white rounded-3xl p-8 shadow-md h-full flex flex-col items-center text-center">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${activity.gradient} text-white mb-5`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {activity.title}
                  </h3>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ActivitiesHighlights;
