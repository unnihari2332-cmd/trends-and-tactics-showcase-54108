// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import Preloader from "@/components/Preloader";

/* ---------- Core pages ---------- */
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Product from "./pages/Product";

/* ---------- Product detail pages ---------- */
import SmartAccess from "./pages/product/SmartAccess";
import AIChatbot from "./pages/product/AIChatbot";

/* ---------- Client-specific pages ---------- */
import TIPS from "./pages/clients/TIPS";
import DrAndrew from "./pages/clients/DrAndrew";
import IstharaDiner from "./pages/clients/IstharaDiner";

/* ---------- Portfolio detail pages ---------- */
import TipsPortfolio from "./pages/portfolio/TipsPortfolio";
import LuxeJewelry from "./pages/portfolio/LuxeJewelry";
import UrbanFood from "./pages/portfolio/UrbanFood";
import TechStart from "./pages/portfolio/TechStart";
import HealthPlus from "./pages/portfolio/HealthPlus";
import Entertainment from "./pages/portfolio/Entertainment";
import AatralFoundation from "./pages/portfolio/AatralFoundation";
import SwathiKondePR from "./pages/portfolio/SwathiKondePR";
import DrAndrewPediatric from "./pages/portfolio/DrAndrewPediatric";
import NaalaiNamadhe from "@/pages/portfolio/NaalaiNamadhe";
import Dhiravyam from "@/pages/portfolio/DhiravyamActor";

/* ✅ NEW portfolio pages */
import IstharaDining from "./pages/portfolio/IstharaDining";
import TipsExcellence from "./pages/portfolio/TipsExcellence";
import NiyasKhanActor from "./pages/portfolio/NiyasKhanActor";
import TrillionMinds from "./pages/portfolio/TrillionMinds";
import INDSYS from "./pages/portfolio/INDSYS";
import Grubpe from "./pages/portfolio/Grubpe";
import QuickRack from "./pages/portfolio/QuickRack";
import OECLPortfolio from "./pages/portfolio/OECL";

/* ---------- Service pages ---------- */
import DigitalAds from "./pages/services/DigitalAds";
import VideoProduction from "./pages/services/VideoProduction";
import AIContent from "./pages/services/AIContent";
import AIChatbotsAutomation from "./pages/services/AIChatbotsAutomation";
import WebAndApp from "./pages/services/WebAndApp";
import SEO from "./pages/services/SEO";
import PRMedia from "./pages/services/PRMedia";
import ContentMarketing from "./pages/services/ContentMarketing";
import LogoDesign from "./pages/services/LogoDesign";
import GrowthConsulting from "./pages/services/GrowthConsulting";

/* ---------- 404 ---------- */
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#E05D35]">404 – Page Not Found</h1>
      <p className="text-lg text-black/70 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white
                   bg-gradient-to-r from-[#E05D35] to-[#f77b4f] shadow hover:shadow-lg transition"
      >
        Go back home
      </a>
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Preloader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Scroll to top on route change */}
        <ScrollToTopOnRouteChange />
        {/* Scroll to top button (appears when scrolling down) */}
        <ScrollToTop />
        <Routes>
          {/* Main */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Products */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/smartaccess" element={<SmartAccess />} />
          <Route path="/product/ai-chatbot" element={<AIChatbot />} />

          {/* Services detail */}
          <Route path="/services/digital-ads" element={<DigitalAds />} />
          <Route path="/services/video-production" element={<VideoProduction />} />
          <Route path="/services/ai-content" element={<AIContent />} />
          <Route path="/services/ai-chatbots-automation" element={<AIChatbotsAutomation />} />
          <Route path="/services/web-and-app" element={<WebAndApp />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/pr-media" element={<PRMedia />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/growth-consulting" element={<GrowthConsulting />} />

          {/* ✅ Correct path for Aatral Foundation + legacy redirect */}
          <Route path="/portfolio/aatral-foundation" element={<AatralFoundation />} />
          <Route
            path="/portfolio/aatral.-foundation"
            element={<Navigate to="/portfolio/aatral-foundation" replace />}
          />

          {/* Portfolio detail */}
          <Route path="/portfolio/the-indian-public-school" element={<TipsPortfolio />} />
          <Route path="/portfolio/luxe-jewelry-collection" element={<LuxeJewelry />} />
          <Route path="/portfolio/urban-food-co" element={<UrbanFood />} />
          <Route path="/portfolio/techstart-solutions" element={<TechStart />} />
          <Route path="/portfolio/healthplus-clinic" element={<HealthPlus />} />
          <Route path="/portfolio/global-entertainment-hub" element={<Entertainment />} />
          <Route path="/portfolio/swathi-konde-actress" element={<SwathiKondePR />} />
          <Route path="/portfolio/andrew" element={<DrAndrewPediatric />} />
          <Route path="/portfolio/naalai-namadhe" element={<NaalaiNamadhe />} />
          <Route path="/portfolio/dhiravyam-actor" element={<Dhiravyam />} />

          {/* ✅ NEW: Isthara, TIPS Excellence, Niyas Khan, Trillion Minds, INDSYS, Grubpe, Quick Rack, OECL */}
          <Route path="/portfolio/isthara-multi-dining" element={<IstharaDining />} />
          <Route path="/portfolio/tips-excellence" element={<TipsExcellence />} />
          <Route path="/portfolio/niyas-khan-actor" element={<NiyasKhanActor />} />
          <Route path="/portfolio/trillion-minds" element={<TrillionMinds />} />
          <Route path="/portfolio/indsys" element={<INDSYS />} />
          <Route path="/portfolio/grubpe" element={<Grubpe />} />
          <Route path="/portfolio/quick-rack" element={<QuickRack />} />
          <Route path="/portfolio/oecl" element={<OECLPortfolio />} />

          {/* Optional legacy slug redirect */}
          <Route
            path="/portfolio/isthara-dining"
            element={<Navigate to="/portfolio/isthara-multi-dining" replace />}
          />

          {/* Client pages */}
          <Route path="/clients/TIPS" element={<TIPS />} />
          <Route path="/clients/DrAndrew" element={<DrAndrew />} />
          <Route path="/clients/IstharaDiner" element={<IstharaDiner />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
