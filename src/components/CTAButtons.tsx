"use client";

import { siteConfig } from "@/lib/siteConfig";

interface WhatsAppCTAProps {
  message?: string;
  location?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "gold" | "outline";
}

export function WhatsAppCTA({
  message,
  location = "unknown",
  className,
  children,
  variant = "gold",
}: WhatsAppCTAProps) {
  const msg = message || siteConfig.whatsappDefaultMessage;
  const href = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(msg)}`;

  const baseClass =
    variant === "gold"
      ? "inline-flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-medium text-sm tracking-wide hover:bg-brand-gold-light transition-colors duration-200"
      : "inline-flex items-center justify-center gap-2.5 border border-brand-cream/30 text-brand-cream font-medium text-sm tracking-wide hover:bg-brand-cream/10 transition-colors duration-200";

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
  variant?: "outline-dark" | "outline-light" | "gold";
}

export function PhoneCTA({
  location = "unknown",
  className,
  children,
  variant = "outline-light",
}: PhoneCTAProps) {
  const variantClass =
    variant === "gold"
      ? "inline-flex items-center justify-center gap-2.5 border border-brand-gold/40 text-brand-gold font-medium text-sm tracking-wide hover:bg-brand-gold/10 transition-colors duration-200"
      : variant === "outline-dark"
      ? "inline-flex items-center justify-center gap-2.5 border border-brand-text/20 text-brand-text font-medium text-sm tracking-wide hover:bg-brand-text/5 transition-colors duration-200"
      : "inline-flex items-center justify-center gap-2.5 border border-brand-cream/30 text-brand-cream font-medium text-sm tracking-wide hover:bg-brand-cream/10 transition-colors duration-200";

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
