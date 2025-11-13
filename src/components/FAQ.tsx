// src/components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do your campaigns really deliver results?",
    answer:
      "Absolutely! We track every metric that matters and provide transparent reporting. Our average clients see a 150% increase in qualified leads within the first 3 months, with some achieving even higher growth rates.",
  },
  {
    question: "Can small businesses work with you?",
    answer:
      "Yes! We work with businesses of all sizes, from startups to enterprises. Our strategies are scalable and customized to fit your budget and growth stage.",
  },
  {
    question: "How quickly can we see results?",
    answer:
      "Timeline varies by service, but most clients see initial improvements within 30–60 days. SEO typically takes 3–6 months, while paid advertising can show results within days of launch.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "We combine creative storytelling with data-driven strategies, offer transparent reporting, and adopt the latest AI-powered tools to keep you ahead.",
  },
  {
    question: "Do you provide detailed reporting?",
    answer:
      "Yes. You’ll receive comprehensive monthly reports with clear metrics, insights, and next steps.",
  },
  {
    question: "Can you work alongside our existing marketing team?",
    answer:
      "Absolutely! We can act as an extension of your team—providing expertise, training, or owning specific workstreams.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 bg-neutral-950 text-white"
    >
      {/* subtle top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-white/10 to-transparent"
      />

      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
          {/* LEFT: Heading + Image (badge removed) */}
          <div>
            <h2 className="text-[40px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
              Frequently
              <br />
              Asked Questions
            </h2>

            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
                alt="Team reviewing work"
                className="h-[340px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Accordion list */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] data-[state=open]:ring-white/20"
                >
                  {/* Custom trigger with + / – icon; hide default chevron */}
                  <AccordionTrigger className="group px-6 py-5 md:py-6 text-left [&>svg]:hidden">
                    <div className="flex items-center justify-between gap-6 w-full">
                      <span className="text-xl md:text-2xl font-extrabold">
                        {faq.question}
                      </span>

                      {/* icon pill changes with state */}
                      <span
                        className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition-colors group-data-[state=open]:bg-white/15"
                        aria-hidden="true"
                      >
                        <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6 pt-0 text-white/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
