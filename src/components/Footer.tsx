// src/components/Footer.tsx
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#232A3A] text-white">
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Top grid */}
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Brand + logo */}
            <div className="lg:col-span-4">
              <a href="/" aria-label="Trends & Tactics Home" className="inline-block">
                <img
                  src="/Assetwhite.png"
                  alt="Trends & Tactics Logo"
                  className="h-12 w-auto mb-5"
                />
              </a>

              <p className="text-white/80 max-w-md leading-relaxed">
                Your one-stop partner for marketing, branding, and digital success.
                We craft winning campaigns that turn ideas into results.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/trendsntactics" },
                  { Icon: Instagram, href: "https://www.instagram.com/trendsntactics/" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/trends-tactics/" },
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                    aria-label={href}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-[15px] leading-relaxed">
                {[
                  ["About Us", "/about"],
                  ["Services", "/services"],
                  ["Portfolio", "/portfolio"],
                  ["Case Study", "/case-study"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services – all 9 in a 2x2 responsive grid */}
            <div className="lg:col-span-5">
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              {/* Mobile: single column; lg+: two columns, auto rows */}
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-relaxed">
                {[
                  ["Digital Marketing & Paid Ads", "/services/digital-ads"],
                  ["Video Production & Editing", "/services/video-production"],
                  ["AI-Driven Branding & Content", "/services/ai-content"],
                  ["AI Chatbots & Automation", "/services/ai-chatbots-automation"],
                  ["Website & App Development", "/services/web-and-app"],
                  ["SEO & Growth Strategy", "/services/seo"],
                  ["PR & Media Management", "/services/pr-media"],
                  ["Content Marketing", "/services/content-marketing"],
                  ["Logo Designing", "/services/logo-design"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block whitespace-nowrap text-white/80 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider + bottom bar */}
          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="text-white/60 text-sm text-center">
              © {new Date().getFullYear()} Trends & Tactics. All rights reserved.
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
