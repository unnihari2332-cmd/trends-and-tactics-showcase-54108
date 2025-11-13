// src/components/Header.tsx
import { useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const SERVICES = [
  { title: "Digital Marketing & Paid Ads", slug: "digital-ads" },
  { title: "Video Production & Editing", slug: "video-production" },
  { title: "AI-Driven Branding & Content", slug: "ai-content" },
  { title: "AI Chatbots & Automation", slug: "ai-chatbots-automation" },
  { title: "Website & App Development", slug: "web-and-app" },
  { title: "PR & Media Management", slug: "pr-media" },
  { title: "Content Marketing", slug: "content-marketing" },
  { title: "Logo Designing", slug: "logo-design" },
  { title: "Seo Service", slug: "seo" },
] as const;

type NavLink = { href: string; label: string };

// include Portfolio and Case Study
const centerLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-study", label: "Case Study" },
  { href: "/services", label: "Services" },
  { href: "/product", label: "Product" }, // no dropdown now (per your ask)
];

export default function Header() {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  const [svcDesktopOpen, setSvcDesktopOpen] = useState(false);

  const closeTimer = useRef<number | null>(null);

  const openDesktopMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSvcDesktopOpen(true);
  };
  const scheduleCloseDesktopMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setSvcDesktopOpen(false);
      closeTimer.current = null;
    }, 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkBase =
    "relative px-3 py-2 text-[15px] font-semibold text-black/90 hover:text-black transition-colors";
  const activeUnderline =
    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#E05D35]";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" aria-label="Go to home">
              <img src="/logo.png" alt="logo" className="h-7 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {centerLinks.map((l) => {
                if (l.label === "Services") {
                  return (
                    <div
                      key={l.href}
                      className="relative"
                      onMouseEnter={openDesktopMenu}
                      onMouseLeave={scheduleCloseDesktopMenu}
                      onFocusCapture={openDesktopMenu}
                      onBlurCapture={scheduleCloseDesktopMenu}
                    >
                      <Link
                        to={l.href}
                        aria-haspopup="menu"
                        aria-expanded={svcDesktopOpen}
                        className={`${navLinkBase} inline-flex items-center gap-1 ${
                          isActive(l.href) ? `text-[#E05D35] ${activeUnderline}` : ""
                        }`}
                      >
                        Services <ChevronDown size={16} />
                      </Link>
                      {svcDesktopOpen && (
                        <div
                          role="menu"
                          className="absolute left-0 top-full mt-2 w-[320px] rounded-xl bg-white ring-1 ring-black/10 shadow-xl p-2"
                        >
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-black/90 hover:bg-black/5"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <div className="mt-2 border-t border-black/10 pt-2 px-2">
                            <Link
                              to="/services"
                              className="block text-sm font-semibold text-[#E05D35] hover:underline"
                            >
                              View all services →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Regular items (About, Portfolio, Case Study, Product, Home)
                return (
                  <Link
                    key={l.href}
                    to={l.href}
                    className={`${navLinkBase} ${
                      isActive(l.href) ? `text-[#E05D35] ${activeUnderline}` : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white
                  bg-gradient-to-r from-[#E05D35] to-[#f77b4f] shadow-[0_8px_24px_-10px_rgba(224,93,53,0.7)]
                  hover:shadow-[0_10px_28px_-10px_rgba(224,93,53,0.9)] transition-shadow"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-black"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white border-b border-black/10">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1.5">
            {/* Home, About, Portfolio, Case Study */}
            {["/", "/about", "/portfolio", "/case-study"].map((href) => (
              <Link
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-[15px] font-semibold rounded-md ${
                  isActive(href) ? "text-[#E05D35]" : "text-black/90"
                }`}
              >
                {href === "/"
                  ? "Home"
                  : href === "/about"
                  ? "About"
                  : href === "/portfolio"
                  ? "Portfolio"
                  : "Case Study"}
              </Link>
            ))}

            {/* Services accordion */}
            <div className="rounded-lg border border-black/10 overflow-hidden">
              <div className="flex items-stretch">
                <Link
                  to="/services"
                  className={`flex-1 px-3 py-2 text-[15px] font-semibold ${
                    isActive("/services") ? "text-[#E05D35]" : "text-black/90"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Services
                </Link>
                <button
                  className="px-3 py-2 text-black"
                  onClick={() => setSvcOpen((v) => !v)}
                  aria-expanded={svcOpen}
                  aria-label="Toggle services list"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${svcOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {svcOpen && (
                <div className="px-2 pb-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-black/90 hover:bg-black/5"
                      onClick={() => setOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-[#E05D35]"
                    onClick={() => setOpen(false)}
                  >
                    View all services →
                  </Link>
                </div>
              )}
            </div>

            {/* Product (no dropdown) */}
            <Link
              to="/product"
              onClick={() => setOpen(false)}
              className={`px-3 py-2 text-[15px] font-semibold rounded-md ${
                isActive("/product") ? "text-[#E05D35]" : "text-black/90"
              }`}
            >
              Product
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white
                bg-gradient-to-r from-[#E05D35] to-[#f77b4f] shadow-[0_8px_24px_-10px_rgba(224,93,53,0.7)]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
