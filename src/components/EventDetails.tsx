import React from "react";

const EventDetailsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Event Details
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Date & Time */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Date & Time
              </h3>
              <p className="text-gray-600">📅 08 March 2026</p>
              <p className="text-gray-600">🗓 Sunday</p>
              <p className="text-gray-600">⏰ 05:00 PM onwards</p>
            </div>

            {/* Venue */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Venue
              </h3>
              <p className="text-gray-600">
                Vivira Mall, Hotfut Turf, Navalur
              </p>
            </div>

            {/* Participation */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Participation
              </h3>
              <p className="text-gray-600">
                Open for Women & Kids
              </p>
            </div>

            {/* Tagline */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Message
              </h3>
              <p className="italic leading-relaxed">
                “Let’s come together to celebrate women who rise together.
                When women support women, powerful things happen.”
              </p>
            </div>

            {/* Organizer */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Presented By
              </h3>
              <p className="text-gray-600 font-medium">HER Clan</p>
              <a
                href="https://instagram.com/her_clan_chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                @her_clan_chennai
              </a>
            </div>

          </div>

          {/* RIGHT MAP */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[350px] md:h-full">
            <iframe
              title="Event Location"
              src="https://www.google.com/maps?q=Vivira+Mall+Navalur&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
