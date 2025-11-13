import React, { useEffect, useRef } from "react";

/**
 * Rotating "SCROLL DOWN" ring that spins based on page scroll.
 * Center (orange) stays fixed; only the ring rotates.
 */
const ScrollCue: React.FC<{ size?: number }> = ({ size = 96 }) => {
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ringRef.current) return;
      const angle = window.scrollY * 0.25; // tweak speed here
      // use rAF for smoothness
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        ringRef.current!.style.transform = `rotate(${angle}deg)`;
      });
    };
    onScroll(); // set initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="relative select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Rotating ring */}
      <div
        ref={ringRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "rotate(0deg)" }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {/* subtle outer ring */}
          <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          {/* path for circular text */}
          <defs>
            <path id="scrollTextPath" d="
              M 50,50
              m -38,0
              a 38,38 0 1,1 76,0
              a 38,38 0 1,1 -76,0
            " />
          </defs>
          {/* circular text (use href for modern browsers) */}
          <text fill="rgba(255,255,255,0.6)" fontSize="8" letterSpacing="4">
            <textPath href="#scrollTextPath" startOffset="0%">
              SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
            </textPath>
          </text>
        </svg>
      </div>

      {/* fixed center */}
      <div className="absolute inset-3 rounded-full bg-amber-500 flex items-center justify-center shadow-[0_0_0_6px_rgba(0,0,0,0.35)_inset]">
        {/* arrow */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="currentColor">
          <path d="M12 16l-5-6h10l-5 6z" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollCue;
