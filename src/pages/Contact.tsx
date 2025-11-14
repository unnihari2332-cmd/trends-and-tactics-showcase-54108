// src/pages/ContactPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import contactHero from "@/assets/contact-hero.jpg";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// ---- Contact component (equal height form & cards) ----
const Contact = () => (
  <section id="contact" className="bg-white/95 py-10 md:py-12">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Form */}
        <div className="h-full rounded-2xl border border-black/5 bg-white p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Send us a message
          </h2>
          <form className="mt-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-gray-300 px-3.5 py-3 focus:border-[#E05D35] focus:ring-[#E05D35] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-md border border-gray-300 px-3.5 py-3 focus:border-[#E05D35] focus:ring-[#E05D35] outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-md border border-gray-300 px-3.5 py-3 focus:border-[#E05D35] focus:ring-[#E05D35] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-md border border-gray-300 px-3.5 py-3 focus:border-[#E05D35] focus:ring-[#E05D35] outline-none resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#62C3C1] px-6 py-3 font-semibold text-white hover:opacity-95 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-auto" />
        </div>

        {/* Right: Info cards */}
        <div className="h-full flex flex-col gap-6">
          {[
            {
              icon: MapPin,
              color: "#62C3C1",
              title: "Chennai Office",
              text:
                "Flat No. 4, A Wing, 5th Floor, Gemini Square,\n442, Anna Salai, Chennai – 600006.",
            },
            {
              icon: MapPin,
              color: "#62C3C1",
              title: "Coimbatore Office",
              text:
                "S-2, Thuthiksha Magizhvagam, GKS Nagar,\nSaravanampatti, Coimbatore – 641035.",
            },
            {
              icon: Phone,
              color: "#E05D35",
              title: "Call Us",
              text: "+91 9944601656",
            },
            {
              icon: Mail,
              color: "#62C3C1",
              title: "Email Us",
              text: "trendsntactics@gmail.com",
            },
          ].map(({ icon: Icon, color, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" style={{ color }} />
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-gray-600 whitespace-pre-line">{text}</p>
            </div>
          ))}
          <div className="flex-1" />
        </div>
      </div>
    </div>
  </section>
);

// ---- Page wrapper (Swathi-style breadcrumb + side logo) ----
const ContactPage = () => (
  <div
    className="min-h-screen flex flex-col text-foreground"
    style={{
      backgroundImage: "url('/sidelogo.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "left center",
      backgroundAttachment: "fixed",
    }}
  >
    <Header />

    <main className="flex-grow">
      {/* Swathi-style hero with breadcrumb */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        {/* Hero background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${contactHero})`,
            backgroundPosition: "center 30%",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center justify-center gap-2 text-xs md:text-sm text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-60">›</span>
            <span className="text-white">Contact Us</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-normal text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Intro text */}
      <section className="container mx-auto max-w-4xl px-6 text-center mt-10 md:mt-14">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          Go beyond ordinary with{" "}
          <span className="font-semibold">Trends &amp; Tactics</span>, the{" "}
          <span className="font-semibold">
            best digital marketing agency in Chennai and Coimbatore
          </span>
          . You're not just choosing a campaign—you're partnering with a team
          that understands your brand and crafts genuine, meaningful, and
          result-driven stories.
        </p>
      </section>

      {/* Contact section */}
      <section className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <Contact />
      </section>

      {/* FAQ section */}
      <section className="py-16 md:py-20">
        <FAQ />
      </section>
    </main>

    <Footer />
  </div>
);

export default ContactPage;
