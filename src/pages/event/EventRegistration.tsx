import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Herclan from "@/components/Herclan";
import Guest from "@/components/Guest";
import Activities from "@/components/Activities";
import EventDetails from "@/components/EventDetails";
import Collabration from "@/components/Collabration";

const EventComingSoon = () => {
  useEffect(() => {
    document.title = "HerFest-2026";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ✅ GLOBAL BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/bluegradient8k.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      {/* Page Content */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-white">
          
          <img
            src="/text copy.png"
            alt="Event Logo"
            className="w-28 md:w-40 mb-6"
          />

          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
            OMR’s Biggest Women’s Day Celebration Presented by
          </h1>

          <img
            src="/Her clan.png"
            alt="Company Logo"
            className="w-24 md:w-32 mt-8"
          />

          <div className="mt-10">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90 text-white rounded-xl shadow-lg"
            >
              Register Now
            </Button>
             
          </div>

        </main>

        {/* OTHER SECTIONS */}
         <Guest />
        <Activities />
        <Herclan />
        <EventDetails />
        <Collabration />

      </div>
    </div>
  );
};

export default EventComingSoon;
