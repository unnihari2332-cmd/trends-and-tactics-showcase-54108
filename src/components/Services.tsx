// src/components/Services.tsx
import { useNavigate } from "react-router-dom";

type Block = {
  title: string;
  desc: string;
  href: string;
  icon: string;
};

const items: Block[] = [
  { 
    title: "Digital Marketing & Paid Ads", 
    desc: "Trend-driven strategy and high-performance ad campaigns across Google, Meta, LinkedIn, and YouTube to reach, convert, and scale.", 
    href: "/services/digital-ads",
    icon: "📊"
  },
  { 
    title: "Professional Video Production & Editing", 
    desc: "Concept to final cut—reels, brand films, product videos, and event highlights crafted to engage and impress.", 
    href: "/services/video-production",
    icon: "🎬"
  },
  { 
    title: "AI-Driven Branding & Content", 
    desc: "Data-backed brand strategy, scalable content, and on-brand messaging that connects and converts.", 
    href: "/services/ai-content",
    icon: "🤖"
  },
  { 
    title: "AI Chatbots & Automation", 
    desc: "Instant, personalized support and smarter workflows with chatbots, assistants, and automation pipelines.", 
    href: "/services/ai-chatbots-automation",
    icon: "⚡"
  },
  { 
    title: "Website & App Development", 
    desc: "Fast, scalable, and beautiful web & mobile experiences—from UX to deployment, built for performance.", 
    href: "/services/web-and-app",
    icon: "💻"
  },
  { 
    title: "Public Relations & Media Management", 
    desc: "Narrative building, press, influencers, and reputation management to amplify trust and authority.", 
    href: "/services/pr-media",
    icon: "📢"
  },
  { 
    title: "Content Marketing", 
    desc: "Blogs, emails, social, and campaigns—planned, produced, and measured to educate, engage, and convert.", 
    href: "/services/content-marketing",
    icon: "📝"
  },
  { 
    title: "Logo Designing", 
    desc: "Modern, memorable identities that scale across platforms and build instant recognition.", 
    href: "/services/logo-design",
    icon: "🎨"
  },
  { 
    title: "SEO Services ", 
    desc: "Boost Your Business with Proven SEO Strategies.", 
    href: "/services/seo",
    icon: "📈"
  },
];

export default function Services() {
  const navigate = useNavigate();

  const renderCard = (block: Block, idx: number) => {
    return (
      <div
        key={block.title}
        className="group bg-gray-100 rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:shadow-lg min-h-[300px] flex flex-col"
        onClick={() => navigate(block.href)}
      >
        {/* Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white text-xl font-bold">
            {block.icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-black mb-4 leading-tight">
          {block.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow mb-6">
          {block.desc}
        </p>
        
        {/* Read More Button */}
        <div className="flex items-center text-black font-bold text-sm group-hover:gap-2 transition-all duration-300">
          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
          <span>READ MORE</span>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="px-4 md:px-6 py-12 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to elevate your brand and accelerate your growth
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((block, idx) => renderCard(block, idx))}
        </div>
      </div>
    </section>
  );
}
