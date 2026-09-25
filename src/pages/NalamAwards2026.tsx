import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, ExternalLink, Loader2, Sparkles } from "lucide-react";

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSch8HrjLmF_iH6DoxPSVnF1rmSFShdhYcUBKjgj4SF53YNVpg/viewform?embedded=true";

const FORM_DIRECT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSch8HrjLmF_iH6DoxPSVnF1rmSFShdhYcUBKjgj4SF53YNVpg/viewform?usp=sharing&ouid=108944177307595900189";

const NalamAwards2026 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title =
      "நலம் விருதுகள் 2026 – Healthcare Excellence Awards | Registration Form";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50/40 via-white to-gray-50 text-foreground">
      <Header />

      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header Banner */}
          <div className="text-center mb-10 space-y-5">

            {/* Full Nalam Image */}
            <div className="flex justify-center w-full">
              <img
                src="/nalam.png"
                alt="நலம் விருதுகள் 2026"
                className="w-full max-w-[650px] h-auto object-contain"
              />
            </div>

            {/* Award Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 text-[#E05D35] text-sm font-semibold tracking-wide shadow-sm">
              <Award className="w-4 h-4 text-[#E05D35]" />

              <span>Healthcare Excellence Awards 2026</span>

              <Sparkles className="w-3.5 h-3.5 text-[#E05D35]" />
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              நலம் விருதுகள் 2026
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Healthcare Excellence Awards — Nomination &amp; Registration Form.
              Fill out the details below to submit nominations directly.
            </p>

            {/* Google Form Direct Link */}
            <div className="pt-2 flex justify-center">
              <a
                href={FORM_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-[#E05D35] transition-colors underline-offset-4 hover:underline"
              >
                <span>
                  Having trouble viewing the embedded form? Open directly in
                  Google Forms
                </span>

                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Google Form Card */}
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">

            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm min-h-[500px]">
                <Loader2 className="w-10 h-10 text-[#E05D35] animate-spin mb-4" />

                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  Loading Registration Form...
                </p>
              </div>
            )}

            {/* YOUR GOOGLE FORM */}
            <iframe
              src={FORM_EMBED_URL}
              title="நலம் விருதுகள் 2026 – Healthcare Excellence Awards Registration Form"
              width="100%"
              height="1600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full min-h-[900px] md:min-h-[1400px] h-[1600px] border-0 block"
              onLoad={() => setIsLoading(false)}
            >
              Loading form…
            </iframe>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-xs text-gray-400">
            Secure submission handled directly via Google Forms.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NalamAwards2026;
