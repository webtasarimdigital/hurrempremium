import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  height?: number;
}

export default function Logo({ className = "", variant = "light", height = 44 }: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={isLight ? "/images/logo.svg" : "/images/logo-dark.svg"}
        alt="Hürrem Premium Spa & Masaj"
        style={{ height: `${height}px`, width: "auto" }}
        className="block object-contain transition-transform duration-200 group-hover:scale-[1.02]"
      />
    </div>
  );
}
