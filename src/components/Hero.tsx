import React from "react";
import { ArrowRight, Target, Lightbulb, TrendingUp, Users, Briefcase, BarChart3, Quote } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full overflow-hidden bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between pt-12 md:pt-16"
    >
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-left & Top-right Dot Matrix Patterns */}
        <div className="absolute top-10 left-10 grid grid-cols-4 gap-2 opacity-25">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#185359]" />
          ))}
        </div>
        <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 opacity-25">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#185359]" />
          ))}
        </div>

        {/* Floating Accent Dots */}
        <span className="absolute top-44 right-16 w-3 h-3 rounded-full bg-[#EA5E28]" />
        <span className="absolute top-[60%] left-[38%] w-3 h-3 rounded-full bg-[#2F9E9D]/50" />

        {/* Abstract Background Waves (Bottom Left) */}
        <svg
          className="absolute -bottom-10 -left-10 w-[650px] max-w-full opacity-60 pointer-events-none"
          viewBox="0 0 600 300"
          fill="none"
        >
          <path
            d="M-50 250 C 120 180, 240 320, 420 220 C 500 170, 560 210, 600 240 L 600 300 L -50 300 Z"
            fill="#EA5E28"
            opacity="0.85"
          />
          <path
            d="M-80 180 C 100 240, 200 120, 380 200 C 480 250, 520 180, 600 220 L 600 300 L -80 300 Z"
            fill="#2F9E9D"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full my-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tagline */}
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#247B7B] uppercase mb-4">
              Strategic Branding &amp; Creative Studio
            </p>

            {/* Main Headline */}
            <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] uppercase">
              <span className="text-[#102A30] block">Your Growth,</span>
              <span className="text-[#EA5E28] block">Our Priority.</span>
            </h1>

            {/* Underline Bar */}
            <div className="w-16 h-1.5 bg-[#2F9E9D] rounded-full mt-4 mb-6" />

            {/* Subtitle */}
            <p className="max-w-md text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8">
              Your one-stop partner for marketing, branding, and digital success.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 rounded-full text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-[#2B8E8D] to-[#40B4B2] shadow-lg shadow-[#2F9E9D]/30 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span>BOOK A CALL</span>
              <div className="w-10 h-10 rounded-full bg-white text-[#2B8E8D] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </a>
          </div>

          {/* Right Column: 3D Visual & Feature Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px]">
            
            {/* Circular Orbit Line */}
            <div 
              className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-[#EA5E28]/60 pointer-events-none"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 75%)" }}
            />

            {/* Center Visual: Public Image */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src="/3.png"
                alt="Hashtag Logo"
                className="w-72 sm:w-96 md:w-[420px] max-w-full object-contain drop-shadow-2xl select-none"
              />
            </div>

            {/* Feature Card 1: Top Left */}
            <div className="absolute top-0 left-0 sm:-left-4 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 max-w-[210px] flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#E6F4F4] text-[#2F9E9D] shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  Result Driven
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Strategies that deliver measurable results.
                </p>
              </div>
            </div>

            {/* Feature Card 2: Bottom Left */}
            <div className="absolute bottom-6 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 max-w-[210px] flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#FDEEE8] text-[#EA5E28] shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  Creative Minds
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Ideas that inspire, designs that convert.
                </p>
              </div>
            </div>

            {/* Feature Card 3: Middle Right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 max-w-[210px] flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#E6F4F4] text-[#2F9E9D] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  Growth Focused
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Helping your brand scale new heights with impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Metric & Quote Banner */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-6">
        <div className="bg-[#0D3B43] text-white rounded-3xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 sm:border-r border-teal-900/50 sm:pr-4">
            <div className="p-3 rounded-2xl bg-[#144F59]/80 text-[#38B2AC]">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight block">100+</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Happy Clients
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 lg:border-r border-teal-900/50 lg:pr-4">
            <div className="p-3 rounded-2xl bg-[#144F59]/80 text-[#EA5E28]">
              <Briefcase className="w-7 h-7" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#EA5E28] block">250+</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Projects Completed
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 sm:border-r border-teal-900/50 sm:pr-4">
            <div className="p-3 rounded-2xl bg-[#144F59]/80 text-[#38B2AC]">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight block">98%</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Client Satisfaction
              </span>
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex items-center gap-3">
            <Quote className="w-8 h-8 text-[#EA5E28] shrink-0 rotate-180" />
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
              We don&apos;t just build brands, we build lasting impressions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
