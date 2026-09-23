"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  dark?: boolean;
}

export default function FAQAccordion({ items, dark = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "faq_open", question: items[index].question });
    }
  };

  const borderColor = dark ? "border-brand-cream/10" : "border-brand-text/10";
  const questionColor = dark ? "text-brand-cream/90" : "text-brand-text";
  const answerColor = dark ? "text-brand-cream/60" : "text-brand-text-secondary";
  const iconColor = dark ? "text-brand-gold" : "text-brand-gold";

  return (
    <div className="divide-y" style={{ borderColor: dark ? "rgba(195,163,107,0.15)" : "rgba(32,28,26,0.1)" }}>
      {items.map((item, index) => (
        <div key={index} className="group">
          <button
            className="w-full flex items-start justify-between gap-4 py-5 text-left"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className={`text-base font-sans font-medium ${questionColor} leading-snug`}>
              {item.question}
            </span>
            <span className={`flex-shrink-0 mt-0.5 ${iconColor} transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className={`text-base leading-relaxed ${answerColor}`}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
