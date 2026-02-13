import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, CalendarHeart } from "lucide-react";
import Herclan from "@/components/Herclan";

const EventComingSoon = () => {

  // SEO Meta Title
  useEffect(() => {
    document.title = "HerFest-2026";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      
    

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl w-full text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            A Special Event for <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Women & Kids
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We are preparing something inspiring, joyful, and empowering.
            Stay tuned for an unforgettable experience designed especially
            for women and children.
          </p>

          {/* Event Image */}
          <div className="mt-12 flex justify-center">
            <img
              src="/text copy.png"
              alt="Women and Kids Event"
              className="rounded-3xl shadow-2xl max-h-[400px] object-cover"
            />
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white rounded-xl shadow-lg"
            >
              <CalendarHeart className="mr-2 w-5 h-5" />
              Launching Soon
            </Button>
          </div>

        </div>
      </main>
      <div>
    </Herclan>
      </div>
    
    </div>
  );
};

export default EventComingSoon;
