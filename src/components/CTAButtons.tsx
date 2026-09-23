"use client";

import { siteConfig } from "@/lib/siteConfig";

interface WhatsAppCTAProps {
  message?: string;
  location?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
}

export function WhatsAppCTA({
  message,
  location = "unknown",
  className,
  children,
  variant = "primary",
}: WhatsAppCTAProps) {
  const msg = message || siteConfig.whatsappDefaultMessage;
  const href = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(msg)}`;

  const baseClass =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2.5 bg-primary text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark hover:scale-102 transition-all duration-200 whitespace-nowrap"
      : variant === "white"
      ? "inline-flex items-center justify-center gap-2.5 bg-white text-primary font-bold text-sm tracking-wide rounded-xl shadow-lg hover:bg-gray-50 hover:scale-102 transition-all duration-200 whitespace-nowrap"
      : "inline-flex items-center justify-center gap-2.5 border border-white/30 text-white font-bold text-sm tracking-wide rounded-xl hover:bg-white/10 transition-all duration-200 whitespace-nowrap";

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "whatsapp_click", location });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

interface PhoneCTAProps {
  location?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "outline-dark" | "outline-light" | "primary";
}

export function PhoneCTA({
  location = "unknown",
  className,
  children,
  variant = "outline-light",
}: PhoneCTAProps) {
  const variantClass =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2.5 bg-primary text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all duration-200 whitespace-nowrap"
      : variant === "outline-dark"
      ? "inline-flex items-center justify-center gap-2.5 border border-gray-300 text-gray-800 font-bold text-sm tracking-wide rounded-xl hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
      : "inline-flex items-center justify-center gap-2.5 border border-white/30 text-white font-bold text-sm tracking-wide rounded-xl hover:bg-white/15 backdrop-blur-sm transition-all duration-200 whitespace-nowrap";

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "phone_click", location });
    }
  };

  return (
    <a
      href={siteConfig.phoneTel}
      className={`${variantClass} ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
