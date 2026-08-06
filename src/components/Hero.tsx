import React from "react";
import {
  ArrowRight,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Briefcase,
  BarChart3,
  Quote,
} from "lucide-react";

type HeroProps = {
  /** Optional override for right-side visual image */
  heroImageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ heroImageUrl }) => {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen w-full bg-[#f4f8f8] text-slate-800 overflow-hidden pt-6 pb-12 px-4 sm:px-8 lg:px-12 flex flex-col justify-between"
    >
      {/* Background Decorative Waves & Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Background Gradients & Curves */}
        <div className="absolute -bottom-24 -left-20 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-3xl transform -rotate-12" />
        <div className="absolute -bottom-10 left-32 w-[500px] h-[250px] bg-orange-500/15 rounded-full blur-3xl" />
        
        {/* Dot Grids Decorative */}
        <div className="absolute top-16 left-10 grid grid-cols-5 gap-2 opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-teal-600" />
          ))}
        </div>
        <div className="absolute top-20 right-10 grid grid-cols-5 gap-2 opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-teal-600" />
          ))}
        </div>

        {/* Curved Accent Line */}
        <svg
          className="absolute right-10 top-10 w-[550px] h-[550px] opacity-40 hidden lg:block"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M 100 250 A 180 180 0 1 1 450 320"
            stroke="#0d9488"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Strapline */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-600 uppercase">
                Strategic Branding &amp; Creative Studio
              </span>
              <div className="h-1 w-12 bg-teal-500 rounded-full mt-1.5" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              YOUR GROWTH, <br />
              <span className="text-[#f15a24]">OUR PRIORITY.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              Your one-stop partner for marketing, branding, and digital success.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-400 text-white font-medium text-base shadow-lg shadow-teal-500/30 hover:scale-105 transition-all duration-300 group"
              >
                <span>BOOK A CALL</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Visual & Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Main Visual/Pedestal Area */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
              {heroImageUrl ? (
                <img
                  src={heroImageUrl}
                  alt="Trends &amp; Tactics Visual"
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Fallback Graphic (3D Hashtag representation) */
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute bottom-6 w-80 h-20 bg-teal-800/20 rounded-[100%] blur-md transform rotate-[-5deg]" />
                  <div className="absolute bottom-10 w-72 h-14 bg-gradient-to-r from-teal-700 to-teal-500 rounded-full shadow-2xl border-b-4 border-teal-900/30" />
                  
                  {/* 3D Hashtag Shape */}
                  <div className="relative z-10 w-56 h-56 flex items-center justify-center">
                    <div className="absolute w-12 h-52 bg-[#f15a24] rounded-2xl transform -rotate-12 translate-x-[-24px] shadow-xl" />
                    <div className="absolute w-12 h-52 bg-teal-500 rounded-2xl transform -rotate-12 translate-x-[24px] shadow-xl" />
                    <div className="absolute h-12 w-52 bg-slate-800 rounded-2xl transform -rotate-12 translate-y-[-24px] shadow-xl" />
                    <div className="absolute h-12 w-52 bg-slate-800 rounded-2xl transform -rotate-12 translate-y-[24px] shadow-xl" />
                  </div>
                </div>
              )}

              {/* Floating Feature Card 1: Top Left */}
              <div className="absolute -top-2 left-0 sm:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] text-left flex gap-3 items-start z-20">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Result Driven
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-1">
                    Strategies that deliver measurable results.
                  </p>
                </div>
              </div>

              {/* Floating Feature Card 2: Center Bottom Left */}
              <div className="absolute bottom-12 left-0 sm:-left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] text-left flex gap-3 items-start z-20">
                <div className="p-2.5 rounded-xl bg-orange-50 text-[#f15a24] shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Creative Minds
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-1">
                    Ideas that inspire, designs that convert.
                  </p>
                </div>
              </div>

              {/* Floating Feature Card 3: Right Center */}
              <div className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] text-left flex gap-3 items-start z-20">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Growth Focused
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-1">
                    Helping your brand scale new heights with impact.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Metrics Banner */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-6">
        <div className="bg-[#0b3c3d] text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-teal-800/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-teal-800/80">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-2 md:pt-0 md:pr-4">
              <div className="p-3 rounded-2xl bg-teal-900/60 text-teal-300">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  100+
                </div>
                <div className="text-xs font-medium text-teal-200/80 uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="p-3 rounded-2xl bg-teal-900/60 text-orange-400">
                <Briefcase className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  250+
                </div>
                <div className="text-xs font-medium text-teal-200/80 uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="p-3 rounded-2xl bg-teal-900/60 text-teal-300">
                <BarChart3 className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  98%
                </div>
                <div className="text-xs font-medium text-teal-200/80 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-6">
              <Quote className="w-8 h-8 text-[#f15a24] shrink-0 rotate-180" />
              <p className="text-xs sm:text-sm font-medium text-teal-100 italic leading-snug">
                We don&apos;t just build brands, <br />
                we build lasting impressions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
