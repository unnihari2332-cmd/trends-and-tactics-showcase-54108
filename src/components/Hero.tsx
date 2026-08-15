import React from "react";
import { ArrowRight, Target, Lightbulb, TrendingUp, Users, Briefcase, BarChart3, Quote } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full min-h-screen bg-[#F8FAFB] text-slate-900 flex flex-col justify-between overflow-hidden pt-8 md:pt-12 select-none"
    >
      {/* ================= BACKGROUND GRAPHICS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Left Dot Matrix */}
        <div className="absolute top-8 left-8 grid grid-cols-6 gap-2 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#2F9E9D]" />
          ))}
        </div>

        {/* Top-Right Dot Matrix */}
        <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#2F9E9D]" />
          ))}
        </div>

        {/* Floating Ambient Dots */}
        <span className="absolute top-[28%] right-8 w-3 h-3 rounded-full bg-[#EA5E28]" />
        <span className="absolute top-[58%] left-[36%] w-3 h-3 rounded-full bg-[#2F9E9D]/50" />

        {/* Bottom Left Wavy Layers */}
        <svg
          className="absolute -bottom-8 -left-12 w-[650px] max-w-[85vw] pointer-events-none"
          viewBox="0 0 600 320"
          fill="none"
        >
          {/* Orange Wave */}
          <path
            d="M-40 280 C 100 170, 220 310, 420 230 C 490 200, 540 240, 580 270 L 580 320 L -40 320 Z"
            fill="#EA5E28"
            opacity="0.88"
          />
          {/* Teal Overlay Wave */}
          <path
            d="M-60 210 C 80 260, 180 140, 360 220 C 440 260, 490 210, 560 240 L 560 320 L -60 320 Z"
            fill="#3AB5B2"
            opacity="0.65"
          />
          {/* Subtle Contour Lines */}
          <path
            d="M-50 200 C 90 250, 190 130, 370 210 C 450 250, 500 200, 570 230"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Call To Action */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#247B7B] uppercase mb-3">
              Strategic Branding &amp; Creative Studio
            </p>

            <h1 className="font-black tracking-tight text-4xl sm:text-5xl lg:text-[3.9rem] leading-[1.06] uppercase">
              <span className="text-[#0E2E36] block">Your Growth,</span>
              <span className="text-[#EA5E28] block">Our Priority.</span>
            </h1>

            <div className="w-14 h-1.5 bg-[#2F9E9D] rounded-full mt-4 mb-5" />

            <p className="max-w-sm text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-7">
              Your one-stop partner for marketing, branding, and digital success.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full text-white font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#2B8E8D] to-[#42B7B5] shadow-lg shadow-[#2F9E9D]/35 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span>Book A Call</span>
              <div className="w-9 h-9 rounded-full bg-white text-[#2B8E8D] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </div>
            </a>
          </div>

          {/* Right Column: Visual Stage & Feature Badges */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]">
            
            {/* Background Circular Orbit Track */}
            <div
              className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-full border border-dashed border-[#EA5E28]/70 pointer-events-none -top-4 sm:-top-2 right-4 sm:right-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 85%)" }}
            />

            {/* Central 3D Podium & Graphic */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src="/3.png"
                alt="Brand Identity Symbol"
                className="w-80 sm:w-[420px] lg:w-[480px] max-w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Card 1: Result Driven (Top Left) */}
            <div className="absolute top-2 left-2 sm:-left-2 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100/80 max-w-[190px] sm:max-w-[210px] flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-[#E6F5F5] text-[#2F9E9D] shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold tracking-wider text-[#0E2E36] uppercase">
                  Result Driven
                </h4>
                <p className="text-[10.5px] text-slate-500 mt-1 leading-snug font-medium">
                  Strategies that deliver measurable results.
                </p>
              </div>
            </div>

            {/* Top Curved Pointer to 3D Shape */}
            <svg
              className="absolute top-16 left-[28%] w-16 h-12 pointer-events-none hidden sm:block z-20 opacity-70"
              viewBox="0 0 60 40"
              fill="none"
            >
              <path
                d="M 5 10 Q 30 35 55 25"
                stroke="#2F9E9D"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              />
            </svg>

            {/* Card 2: Creative Minds (Bottom Center-Left) */}
            <div className="absolute -bottom-4 left-4 sm:left-12 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100/80 max-w-[190px] sm:max-w-[205px] flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-[#FEECE5] text-[#EA5E28] shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold tracking-wider text-[#0E2E36] uppercase">
                  Creative Minds
                </h4>
                <p className="text-[10.5px] text-slate-500 mt-1 leading-snug font-medium">
                  Ideas that inspire, designs that convert.
                </p>
              </div>
            </div>

            {/* Bottom Curved Pointer Arrow */}
            <svg
              className="absolute bottom-6 left-[46%] w-14 h-10 pointer-events-none hidden sm:block z-20 opacity-80"
              viewBox="0 0 60 40"
              fill="none"
            >
              <path
                d="M 5 15 Q 30 35 50 18"
                stroke="#EA5E28"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              />
              <polygon points="50,14 55,20 47,21" fill="#EA5E28" />
            </svg>

            {/* Card 3: Growth Focused (Middle Right) */}
            <div className="absolute top-[48%] -right-2 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100/80 max-w-[190px] sm:max-w-[210px] flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-[#E6F5F5] text-[#2F9E9D] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold tracking-wider text-[#0E2E36] uppercase">
                  Growth Focused
                </h4>
                <p className="text-[10.5px] text-slate-500 mt-1 leading-snug font-medium">
                  Helping your brand scale new heights with impact.
                </p>
              </div>
            </div>

            {/* Right Curved Pointer to 3D Shape */}
            <svg
              className="absolute bottom-[28%] right-[32%] w-14 h-10 pointer-events-none hidden sm:block z-20 opacity-70"
              viewBox="0 0 50 30"
              fill="none"
            >
              <path
                d="M 45 10 Q 20 25 5 12"
                stroke="#2F9E9D"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              />
            </svg>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM STATS BANNER ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-6 pt-2">
        <div className="bg-[#0C353D] text-white rounded-3xl px-8 py-6 shadow-2xl shadow-[#0C353D]/25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 sm:border-r border-teal-900/60 sm:pr-4">
            <div className="p-3 rounded-2xl bg-[#144A53] text-[#38B2AC] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight block leading-tight">100+</span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Happy Clients
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 lg:border-r border-teal-900/60 lg:pr-4">
            <div className="p-3 rounded-2xl bg-[#144A53] text-[#EA5E28] shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#EA5E28] block leading-tight">250+</span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Projects Completed
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 sm:border-r border-teal-900/60 sm:pr-4">
            <div className="p-3 rounded-2xl bg-[#144A53] text-[#38B2AC] shrink-0">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight block leading-tight">98%</span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Client Satisfaction
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="flex items-center gap-3">
            <Quote className="w-7 h-7 text-[#EA5E28] shrink-0 rotate-180" />
            <p className="text-xs text-slate-200 font-medium leading-snug">
              We don&apos;t just build brands, we build lasting impressions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
