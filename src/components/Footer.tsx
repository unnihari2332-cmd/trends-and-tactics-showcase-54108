// src/components/Footer.tsx

import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const officeData = [
  {
    title: "Chennai Office",
    address:
      "Flat No. 4, A Wing, 5th Floor, Gemini Square, 442, Anna Salai, Chennai – 600006.",
  },
  {
    title: "Coimbatore Office",
    address:
      "1st Floor, Vaishnavi Complex, Ranga Konar St, Kattoor Main, Kattoor, Ram Nagar, Coimbatore – 641009.",
  },
];

const Footer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % officeData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

            {/* Offices with Auto Scroll */}
            <div className="lg:col-span-5">
              <h4 className="text-lg font-semibold mb-4">Our Offices</h4>

              <div className="space-y-5 text-[15px] leading-relaxed">

                {/* AUTO SCROLL BLOCK */}
                <div
                  key={index}
                  className="flex gap-3 transition-opacity duration-700 ease-in-out"
                >
                  <MapPin className="h-5 w-5 text-teal shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold">{officeData[index].title}</h5>
                    <p className="text-white/80 inline-block">{officeData[index].address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-orange shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold">Call Us</h5>
                    <p className="text-white/80 inline-block">+91 9944601656</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-teal shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold">Email Us</h5>
                    <p className="text-white/80 inline-block">trendsntactics@gmail.com</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Divider + Bottom */}
          <div className="mt-12 border-t border-white/15 pt-8">
            <p className="text-white/60 text-sm text-center">
              © {new Date().getFullYear()} Trends & Tactics. All rights reserved.
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
