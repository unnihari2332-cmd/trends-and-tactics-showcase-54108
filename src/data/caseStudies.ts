// src/data/caseStudies.ts
import { GraduationCap, Stethoscope, UtensilsCrossed } from "lucide-react";

export type CaseSlide = {
  icon: React.ComponentType<any>;
  title: string;
  scope: string;
  challenge: string;
  approach: string;
  results: string[];
  accentFrom?: string;
  accentTo?: string;
};

export const slidesData: CaseSlide[] = [
  {
    icon: GraduationCap,
    title: "The Indian Public School (TIPS)",
    scope: "Website Redesign, SEO, Social Media Campaigns, Targeted Ads",
    challenge:
      "The Indian Public School faced declining enrollment and poor online visibility...",
    approach:
      "We implemented a comprehensive digital transformation including a modern, conversion-focused website...",
    results: [
      "250% increase in website traffic",
      "180% increase in enrollment inquiries",
      "95% rise in social engagement",
      "#1 ranking for key local school searches",
    ],
    accentFrom: "from-teal-500",
    accentTo: "to-orange-500",
  },
  {
    icon: Stethoscope,
    title: "Dr. Andrew Stephen – Pediatrician",
    scope: "Web, Social Media & Branding (4 campuses)",
    challenge:
      "Needed a consistent, parent-focused digital presence across four campuses...",
    approach:
      "Delivered website updates for clarity and speed, full social media management with weekly themes...",
    results: ["1.5 Cr+ video views", "2.5 Lakh+ parent shares", "18% rise in admissions"],
    accentFrom: "from-sky-500",
    accentTo: "to-indigo-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Isthara Multi Brand Diner",
    scope: "Website Development, Branding & On-Ground Design",
    challenge: "Needed a strong digital identity and consistent branding...",
    approach:
      "Built a modern, scalable website with menu & outlet highlights, designed a unified brand system...",
    results: [
      "Unified brand presence across metro outlets",
      "Higher engagement from promos",
      "Improved discovery and footfall",
    ],
    accentFrom: "from-rose-500",
    accentTo: "to-orange-500",
  },
];
