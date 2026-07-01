import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-10">
        <div className="container mx-auto max-w-7xl px-4">
          <iframe
            src="/portfolio.pdf"
            title="Portfolio PDF"
            className="w-full h-[90vh] rounded-lg border border-gray-300"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
