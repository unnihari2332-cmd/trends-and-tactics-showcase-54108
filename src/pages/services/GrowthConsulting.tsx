import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

export default function GrowthConsulting() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Growth Consulting" 
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
      />
      <section className="pt-0 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            Growth Consulting
          </motion.h1>
          <p className="text-muted-foreground text-lg mb-8">
            Data-driven advisory to unlock sustainable growth through experimentation, GTM alignment, and analytics.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-semibold mb-2">Focus Areas</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Funnel audits & experiment roadmaps</li>
                <li>Pricing/packaging & onboarding optimization</li>
                <li>Attribution, dashboards, and BI setup</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
              <p className="text-muted-foreground">
                Clear prioritization, faster learning cycles, and compounding growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <CTASection
        heading="Ready to unlock sustainable growth?"
        description="We'll provide data-driven consulting to optimize your funnel, experiments, and analytics for compounding success."
      />

      <Footer />
    </div>
  );
}
