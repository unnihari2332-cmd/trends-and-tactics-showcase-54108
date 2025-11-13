import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import Principles from "@/components/Principles";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Header overlays hero first, becomes sticky after sentinel */}
      <Header />
      <Hero />

      {/* 👇 This tiny element is what the header watches */}
      <div id="nav-sentinel" className="h-px"></div>

      {/* Sections (add IDs to match header anchors) */}
      <section id="about">
        <About />
      </section>

      <ClientLogosMarquee />

      <section id="services">
        <Services />
      </section>

      <Metrics />
      <Principles />

      <section id="blog">
        {/* Your blog list component if any */}
      </section>

      <section id="shortcodes">
        {/* optional section */}
      </section>

      <FAQ />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Index;
