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
    <div className="min-h-screen w-full bg-[#eaf4f4] text-slate-800 font-sans flex flex-col justify-between overflow-hidden relative">
      
      {/* ----------------- TOP NAVBAR ----------------- */}
      <header className="relative z-30 max-w-7xl w-full mx-auto px-6 pt-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Custom 3D-styled Hashtag Logo Icon */}
            <span className="absolute w-2 h-8 bg-[#f15a24] rounded-full transform -rotate-12 -translate-x-1.5" />
            <span className="absolute w-2 h-8 bg-[#2d9cdb] rounded-full transform -rotate-12 translate-x-1.5" />
            <span className="absolute h-2 w-8 bg-[#1f2937] rounded-full transform -rotate-12 -translate-y-1.5" />
            <span className="absolute h-2 w-8 bg-[#1f2937] rounded-full transform -rotate-12 translate-y-1.5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-[#1e293b]">trends</span>
            <span className="text-xl font-extrabold tracking-tight text-[#1e293b]">&amp; tactics</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
          <a href="#home" className="text-[#f15a24] relative pb-1">
            HOME
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f15a24] rounded-full" />
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">ABOUT US</a>
          <a href="#services" className="hover:text-slate-900 transition-colors">SERVICES</a>
          <a href="#portfolio" className="hover:text-slate-900 transition-colors">PORTFOLIO</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">CONTACT</a>
        </nav>

        {/* Top CTA Button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#f15a24] text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-orange-500/20 hover:bg-[#d94e1f] transition-all"
        >
          <span>BOOK A CALL</span>
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-white" />
          </span>
        </a>
      </header>

      {/* ----------------- BACKGROUND DECORATIVE ELEMENTS ----------------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top-left Dot Grid */}
        <div className="absolute top-28 left-8 grid grid-cols-4 gap-2 opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#2a7b7c]" />
          ))}
        </div>

        {/* Top-right Dot Grid */}
        <div className="absolute top-20 right-8 grid grid-cols-4 gap-2 opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#2a7b7c]" />
          ))}
        </div>

        {/* Curved Arch Line Framing Right Side */}
        <svg
          className="absolute right-[-5%] top-[5%] w-[650px] h-[650px] opacity-70 hidden lg:block"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M 120 500 A 230 230 0 1 1 550 400"
            stroke="#2a7b7c"
            strokeWidth="1.5"
          />
          <path
            d="M 550 400 A 230 230 0 0 1 200 550"
            stroke="#f15a24"
            strokeWidth="1.5"
          />
        </svg>

        {/* Decorative Solid Circles */}
        <span className="absolute top-1/2 left-2/5 w-3 h-3 rounded-full bg-teal-400 opacity-60" />
        <span className="absolute top-1/3 right-10 w-2.5 h-2.5 rounded-full bg-orange-400 opacity-80" />

        {/* Bottom Wavy Waves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg
            className="relative block w-full h-[180px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,40 L1200,120 L0,120 Z"
              fill="#20b2aa"
              fillOpacity="0.35"
            />
            <path
              d="M0,30 C200,100 450,10 600,80 C750,150 1000,20 1200,60 L1200,120 L0,120 Z"
              fill="#f15a24"
              fillOpacity="0.45"
            />
          </svg>
        </div>
      </div>

      {/* ----------------- MAIN HERO CONTENT ----------------- */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Strapline */}
            <div className="inline-block">
              <span className="text-xs font-extrabold tracking-widest text-[#2a7b7c] uppercase">
                Strategic Branding &amp; Creative Studio
              </span>
              <div className="h-0.5 w-10 bg-[#2a7b7c] rounded-full mt-2" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1f2937] leading-[1.05]">
              YOUR GROWTH, <br />
              <span className="text-[#f15a24]">OUR PRIORITY.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-medium">
              Your one-stop partner for marketing, branding, and digital success.
            </p>

            {/* Main CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2a7b7c] to-[#38a3a5] text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-teal-700/20 hover:opacity-95 transition-all group"
              >
                <span>BOOK A CALL</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D PEDESTAL & VISUAL AREA */}
          <div className="lg:col-span-7 relative flex justify-center items-center min-h-[420px]">
            
            {/* Center Visual / 3D Hashtag Pedestal Structure */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {heroImageUrl ? (
                <img
                  src={heroImageUrl}
                  alt="Trends & Tactics Visual"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* 3D Tiered Cylindrical Pedestal */}
                  <div className="absolute bottom-6 w-80 h-16 bg-[#185e5f] rounded-[100%] shadow-xl" />
                  <div className="absolute bottom-10 w-72 h-14 bg-gradient-to-b from-[#eaf4f4] to-[#d8ecec] rounded-[100%] shadow-md border-b-2 border-slate-300" />
                  <div className="absolute bottom-14 w-60 h-10 bg-white rounded-[100%] shadow-sm" />

                  {/* 3D Hashtag Structure */}
                  <div className="relative z-10 w-60 h-60 flex items-center justify-center -translate-y-6">
                    {/* Dark Horizontal Bar Back */}
                    <div className="absolute h-10 w-52 bg-[#1f2937] rounded-2xl transform -rotate-6 -translate-y-6 shadow-2xl border-b-4 border-black/30" />
                    {/* Orange Vertical Bar */}
                    <div className="absolute w-11 h-52 bg-gradient-to-b from-[#ff6b35-[#f15a24]] bg-[#f15a24] rounded-2xl transform -rotate-6 -translate-x-8 shadow-2xl border-r-2 border-orange-700/20" />
                    {/* Teal Vertical Bar */}
                    <div className="absolute w-11 h-52 bg-[#2a7b7c] rounded-2xl transform -rotate-6 translate-x-8 shadow-2xl border-r-2 border-teal-900/20" />
                    {/* Dark Horizontal Bar Front */}
                    <div className="absolute h-10 w-52 bg-[#1f2937] rounded-2xl transform -rotate-6 translate-y-6 shadow-2xl border-b-4 border-black/40" />
                  </div>
                </div>
              )}

              {/* FLOATING CARD 1: Top Left (Result Driven) */}
              <div className="absolute top-4 left-0 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/60 max-w-[190px] text-left flex gap-3 items-start z-20">
                <div className="p-2 rounded-xl bg-teal-50 text-[#2a7b7c] shrink-0 border border-teal-100">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wide">
                    RESULT DRIVEN
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-tight mt-1">
                    Strategies that deliver measurable results.
                  </p>
                </div>
              </div>

              {/* Dotted Arrow Connector 1 */}
              <svg className="absolute top-20 left-36 w-16 h-12 pointer-events-none z-10 hidden sm:block" viewBox="0 0 60 40">
                <path d="M 5 5 Q 30 35 55 25" stroke="#2a7b7c" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              </svg>

              {/* FLOATING CARD 2: Bottom Left (Creative Minds) */}
              <div className="absolute bottom-16 left-2 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/60 max-w-[190px] text-left flex gap-3 items-start z-20">
                <div className="p-2 rounded-xl bg-orange-50 text-[#f15a24] shrink-0 border border-orange-100">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wide">
                    CREATIVE MINDS
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-tight mt-1">
                    Ideas that inspire, designs that convert.
                  </p>
                </div>
              </div>

              {/* Dotted Arrow Connector 2 */}
              <svg className="absolute bottom-20 left-44 w-16 h-10 pointer-events-none z-10 hidden sm:block" viewBox="0 0 60 30">
                <path d="M 5 15 Q 30 25 55 10" stroke="#f15a24" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              </svg>

              {/* FLOATING CARD 3: Right Center (Growth Focused) */}
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/60 max-w-[190px] text-left flex gap-3 items-start z-20">
                <div className="p-2 rounded-xl bg-teal-50 text-[#2a7b7c] shrink-0 border border-teal-100">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wide">
                    GROWTH FOCUSED
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-tight mt-1">
                    Helping your brand scale new heights with impact.
                  </p>
                </div>
              </div>

              {/* Dotted Arrow Connector 3 */}
              <svg className="absolute top-1/2 right-40 w-16 h-10 pointer-events-none z-10 hidden sm:block" viewBox="0 0 60 30">
                <path d="M 55 20 Q 30 5 5 15" stroke="#2a7b7c" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              </svg>

            </div>
          </div>

        </div>
      </main>

      {/* ----------------- BOTTOM METRICS BANNER ----------------- */}
      <footer className="relative z-20 max-w-7xl mx-auto w-full px-6 pb-6">
        <div className="bg-[#0e3a3b] text-white rounded-3xl p-6 shadow-2xl border border-teal-900/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y sm:divide-y-0 md:divide-x divide-teal-800/60">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-2 sm:pt-0 md:pr-4">
              <div className="p-2.5 rounded-2xl bg-teal-900/40 text-teal-300 border border-teal-700/30">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  100+
                </div>
                <div className="text-[10px] font-bold text-teal-200/80 uppercase tracking-wider">
                  HAPPY CLIENTS
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 md:px-6">
              <div className="p-2.5 rounded-2xl bg-teal-900/40 text-[#f15a24] border border-teal-700/30">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#f15a24]">
                  250+
                </div>
                <div className="text-[10px] font-bold text-teal-200/80 uppercase tracking-wider">
                  PROJECTS COMPLETED
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 md:px-6">
              <div className="p-2.5 rounded-2xl bg-teal-900/40 text-teal-300 border border-teal-700/30">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  98%
                </div>
                <div className="text-[10px] font-bold text-teal-200/80 uppercase tracking-wider">
                  CLIENT SATISFACTION
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="flex items-start gap-3 pt-4 sm:pt-0 md:pl-6">
              <Quote className="w-6 h-6 text-[#f15a24] shrink-0 fill-current" />
              <p className="text-xs font-medium text-teal-100/90 leading-tight">
                We don&apos;t just build brands, <br />
                we build lasting impressions.
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default Hero;
