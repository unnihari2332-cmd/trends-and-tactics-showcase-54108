import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <embed
          src="/Portfoliopdf.pdf"
          type="application/pdf"
          className="w-full h-screen"
        />
      </main>

      <Footer />
    </div>
  );
}
