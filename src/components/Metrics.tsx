// src/components/Metrics.tsx
import { useEffect, useMemo, useRef, useState } from "react";

type Metric = { number: string; label: string };

const metrics: Metric[] = [
  { number: "100K+", label: "Keywords Ranked" },
  { number: "400K+", label: "Leads Generated" },
  { number: "300+",  label: "Clients Served" },
  { number: "4.7+",  label: "Average Rating" },
];

// ---------- helpers ----------
function parseMetricString(s: string) {
  const hasPlus = s.trim().endsWith("+");
  const core = hasPlus ? s.trim().slice(0, -1) : s.trim();

  let suffix: "K" | "M" | "" = "";
  let numStr = core;

  if (/[KM]$/i.test(core)) {
    suffix = core.slice(-1).toUpperCase() as "K" | "M";
    numStr = core.slice(0, -1);
  }

  const base = parseFloat(numStr);
  const target =
    suffix === "K" ? base * 1_000 : suffix === "M" ? base * 1_000_000 : base;

  return {
    target,
    hasPlus,
    suffix,
    decimals: numStr.includes(".") ? 1 : 0,
  };
}

function formatDisplay(value: number, spec: ReturnType<typeof parseMetricString>) {
  const { hasPlus, suffix, decimals } = spec;

  if (suffix === "K") {
    const k = Math.round(value / 1_000);
    return `${k}K${hasPlus ? "+" : ""}`;
  }
  if (suffix === "M") {
    const m = Math.round(value / 1_000_000);
    return `${m}M${hasPlus ? "+" : ""}`;
  }
  const v = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return `${v}${hasPlus ? "+" : ""}`;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// ---------- component ----------
const Metrics = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const specs = useMemo(() => metrics.map((m) => parseMetricString(m.number)), []);
  const targets = useMemo(() => specs.map((s) => s.target), [specs]);

  const [values, setValues] = useState<number[]>(targets.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.35, rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      setValues(targets.map((target) => target * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValues(targets);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, targets]);

  const defaultBg = "/2.jpg"; // ensure this image exists in /public

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: `url('${defaultBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        // ❌ removed minHeight: "100vh" to let content dictate height
      }}
      className="relative overflow-hidden text-black py-12 md:py-16" // tighter vertical padding
    >
      <div className="relative container mx-auto px-6">
        {/* Headline */}
        <div className="text-center">
          <h2 className="font-semibold leading-tight tracking-[0.01em] text-[6vw] sm:text-[4.8vw] lg:text-[2.6vw] mb-3">
            Build a Powerful <span className="inline-block">Digital</span> Identity
          </h2>

          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 text-black/80">
            At Trends &amp; Tactics, we craft strategies that drive measurable growth.
            As a results-driven digital marketing agency, our passion, expertise,
            and innovation have helped brands grow stronger, scale faster, and stand out.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="text-center rounded-2xl bg-white/75 backdrop-blur-sm p-5 shadow-md border border-black/10"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-1.5">
                {formatDisplay(values[i], specs[i])}
              </div>
              <div className="text-sm md:text-base text-black/80">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
