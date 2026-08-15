import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

type HeroProps = {
  /** Optional override for background image (absolute URL or /public path) */
  bgUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ bgUrl }) => {
  const defaultBg = "/BG04.jpg";
  const src = `${bgUrl ?? defaultBg}?v=2`; // cache-busting

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full overflow-hidden text-primary-foreground"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="min-h-[100svh] flex flex-col items-center justify-center text-center">
            {/* Strapline */}
            <div className="w-full max-w-3xl mb-6">
              <div className="flex items-center justify-center gap-4">
                <span className="hidden sm:block h-px flex-1 bg-primary-foreground/60" />
                <span className="text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap">
                  Let&apos;s go now
                </span>
                <span className="hidden sm:block h-px flex-1 bg-primary-foreground/60" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif uppercase font-black tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)] max-w-5xl">
              “Your Growth, Our Priority.”
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Your one-stop partner for marketing, branding, and digital success.
            </p>

            {/* Social Media Buttons */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href="https://www.facebook.com/trendsntactics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-105 transition-transform shadow-lg"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/trendsntactics/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-105 transition-transform shadow-lg"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/trends-tactics/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-105 transition-transform shadow-lg"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
