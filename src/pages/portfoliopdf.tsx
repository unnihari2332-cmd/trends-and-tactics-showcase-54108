import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <iframe
          src="/"
          title="Portfolio PDF"
          className="w-full h-[calc(100vh-80px)] border-0"
        />
      </main>

      <Footer />
    </div>
  );
}
