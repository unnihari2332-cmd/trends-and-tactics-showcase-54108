// src/components/ui/HoverZoomImage.tsx
import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** aspect ratio preset; or pass a custom height via `height` */
  ratio?: "video" | "4/3" | "square";
  /** optional height override (e.g. "h-48", "h-64"); when set, it wins over ratio */
  height?: string;
  /** extra wrapper classes */
  wrapClassName?: string;
};

export default function HoverZoomImage({
  ratio = "4/3",
  height,
  className = "",
  wrapClassName = "",
  ...img
}: Props) {
  const aspect =
    height ??
    (ratio === "video" ? "aspect-video" : ratio === "square" ? "aspect-square" : "aspect-[4/3]");

  return (
    <div className={`relative overflow-hidden rounded-t-2xl ${aspect} ${wrapClassName}`}>
      <img
        {...img}
        loading={img.loading ?? "lazy"}
        className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${className}`}
      />
      {/* optional bottom fade for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
