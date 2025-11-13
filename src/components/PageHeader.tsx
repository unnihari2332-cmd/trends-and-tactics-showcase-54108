import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; path: string }[];
  bgImage?: string;
}

export default function PageHeader({ title, breadcrumbs, bgImage }: PageHeaderProps) {
  return (
    <section
      className="relative pt-32 pb-16 px-6 min-h-[40vh] flex items-center justify-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 mb-4">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-4 h-4 text-white/60" />}
                <Link
                  to={crumb.path}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-sm text-white">{title}</span>
          </nav>
        )}

        {/* Label */}
        <div className="inline-block mb-3">
          <span className="text-[#E05D35] font-semibold text-base tracking-wider uppercase">
            {title}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
