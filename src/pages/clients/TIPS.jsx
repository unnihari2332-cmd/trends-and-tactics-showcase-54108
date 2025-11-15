// src/pages/TIPS.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { FloatingObjects } from "@/components/sections/FloatingObjects";
import { Button } from "@/components/ui/button";

export default function TIPS() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollElement =
        document.scrollingElement || document.documentElement;
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <Header scrollProgress={scrollProgress} />

      <main className="pt-16 lg:pt-20">
        <section
          className="relative w-full min-h-screen flex items-center justify-center p-6 lg:p-16 overflow-hidden"
          style={{
            backgroundImage: "url('/0008.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          {/* Floating objects like LittleSeeds */}
          <FloatingObjects />

          <div className="relative z-10 max-w-6xl w-full">
            {/* Back button */}
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="mb-8 bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>

            {/* Main glass card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-[#E05D35] to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Case Study · Education
                </div>
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#E05D35] to-amber-500 bg-clip-text text-transparent">
                  The Indian Public School
                </h1>
                <p className="font-body text-base md:text-lg lg:text-xl text-foreground/70 font-semibold">
                  Coimbatore · Chennai · Bengaluru · Hyderabad
                </p>
              </div>

              {/* Intro + Image */}
              <div className="grid gap-8 md:grid-cols-2 items-center mb-10">
                <div className="flex justify-center">
                  <img
                    src="/TIPS.png"
                    alt="The Indian Public School Campus"
                    className="w-full max-w-xl rounded-2xl shadow-2xl object-cover object-center"
                  />
                </div>

                <div className="w-full">
                  <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-foreground/80 text-center md:text-left">
                    <span className="block mb-2">
                      Client:{" "}
                      <strong>The Indian Public School (TIPS)</strong>
                    </span>
                    <span className="block">
                      Scope: Web Maintenance, Social Media Management &amp;
                      Integrated Branding Campaigns across multiple metro
                      campuses.
                    </span>
                  </p>

                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#E05D35]/10 to-amber-400/10 p-4 md:p-5">
                    <p className="font-body text-sm md:text-base lg:text-lg leading-relaxed text-foreground/80">
                      TIPS wanted a strong, emotionally resonant digital
                      presence that showcased not just infrastructure, but the
                      real learning experiences of children across all its
                      campuses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge & Approach */}
              <div className="grid gap-6 md:grid-cols-2 mb-10">
                <article className="rounded-2xl bg-white/90 border border-black/5 p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">
                    Challenge
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                    TIPS needed a consistent digital identity across
                    multi-city campuses. Their existing web and social media
                    presence lacked:
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm md:text-base text-foreground/80">
                    <li>Regular, high-quality content updates</li>
                    <li>Emotionally engaging stories for parents</li>
                    <li>Clear representation of the early learning environment</li>
                    <li>Strong visual consistency across locations</li>
                  </ul>
                </article>

                <article className="rounded-2xl bg-white/90 border border-black/5 p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">
                    Our Approach
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-foreground/80">
                    <li>
                      <strong className="text-[#E05D35]">
                        Website Management:
                      </strong>{" "}
                      Full maintenance and content updates for all campuses.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">
                        Social Media Operations:
                      </strong>{" "}
                      Daily management of Facebook, Instagram, YouTube,
                      LinkedIn and WhatsApp channel.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">
                        On-Campus Camera Teams:
                      </strong>{" "}
                      Capturing candid classroom moments, celebrations and
                      infrastructure stories.
                    </li>
                    <li>
                      <strong className="text-[#E05D35]">
                        Content Strategy:
                      </strong>{" "}
                      Shifted the narrative from “facilities” to “children in
                      action” for authentic parent connect.
                    </li>
                  </ul>
                </article>
              </div>

              {/* Results row in one horizontal line */}
              <div className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">
                  Results
                </h2>
                <p className="text-sm md:text-base text-foreground/80 mb-6 max-w-2xl mx-auto text-center">
                  The integrated digital strategy delivered measurable growth
                  and deeper parent engagement across metro campuses.
                </p>

                <div className="flex justify-center items-stretch gap-6 flex-wrap md:flex-nowrap">
                  {[
                    { big: "1.5 Cr+", small: "Video Views / Year" },
                    { big: "2.5 Lakh+", small: "Parent Shares" },
                    { big: "18%+", small: "Increase in Admissions" },
                  ].map((r) => (
                    <div
                      key={r.small}
                      className="w-full md:w-64 rounded-2xl border border-black/10 bg-white px-6 py-5 text-center shadow-sm"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold">
                        {r.big}
                      </div>
                      <div className="text-xs md:text-sm text-foreground/70 mt-1">
                        {r.small}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="rounded-2xl bg-gradient-to-r from-[#E05D35]/15 to-amber-400/15 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  Outcome
                </h2>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-foreground/85">
                  The Indian Public School now enjoys a strong, parent-centric
                  digital brand presence across multiple cities. With consistent
                  storytelling, video-first content and always-on social media,
                  TIPS has become one of the most visible schools online in its
                  category, directly supporting admission growth and brand
                  recall.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
