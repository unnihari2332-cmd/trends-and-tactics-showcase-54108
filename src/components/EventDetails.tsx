import React from "react";

const EventDetailsSection = () => {
  return (
    <section className="relative z-20 w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Event Details
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
              <p>📅 08 March 2026</p>
              <p>🗓 Sunday</p>
              <p>⏰ 05:00 PM onwards</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p>Vivira Mall, Hotfut Turf, Navalur</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Participation</h3>
              <p>Open for Women & Kids</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Message</h3>
              <p className="italic">
                Let’s come together to celebrate women who rise together.
                When women support women, powerful things happen.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Presented By</h3>
              <p className="font-medium">HER Clan</p>
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

          {/* RIGHT GOOGLE MAP */}
          <div className="w-full">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[350px] md:h-[450px]">
              <iframe
                title="Vivira Mall Location"
                src="https://www.google.com/maps?q=Vivira+Mall+Navalur&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
