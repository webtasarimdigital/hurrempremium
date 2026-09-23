"use client";

import { useState } from "react";
import Link from "next/link";
import { services, Service } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";

const CATEGORIES = [
  { id: "all", label: "Tüm Terapiler" },
  { id: "popular", label: "En Popüler" },
  { id: "relax", label: "Derin Dinlenme" },
  { id: "vip", label: "VIP & Özel" },
];

export default function HomeServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = services.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "popular") {
      return ["klasik-masaj", "aroma-terapi-masaji", "mix-masaj"].includes(s.slug);
    }
    if (activeCategory === "relax") {
      return ["soft-masaj", "aroma-terapi-masaji", "tai-masaji"].includes(s.slug);
    }
    if (activeCategory === "vip") {
      return ["sultan-masaji", "hurrem-masaji", "badi-masaj"].includes(s.slug);
    }
    return true;
  });

  return (
    <section id="hizmetler" className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider text-xs uppercase mb-2">
              <span className="h-0.5 w-6 bg-primary" />
              ÖZEL SEANSLAR & TERAPİLER
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Masaj Hizmetlerimiz
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl">
              İhtiyacınıza uygun masaj türünü seçin, tek tıkla WhatsApp üzerinden anında bilgi ve randevu alın.
            </p>
          </div>

          {/* Quick Contact badge on desktop */}
          <div className="hidden md:flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-2xl p-3.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="text-xs">
              <span className="font-bold text-gray-900 block">Şu An Müsaitlik Var</span>
              <span className="text-gray-500">12:00 – 00:00 seansları açık</span>
            </div>
          </div>
        </div>

        {/* Category Pills (Mobile Friendly Horizontal Scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (App-like Mobile Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col bg-[#fcf8f9] rounded-2xl overflow-hidden border border-pink-100/80 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] sm:h-48 overflow-hidden bg-gray-900">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                  ⏱ {service.duration}
                </div>

                {/* Category or Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-[11px] font-bold text-pink-300 tracking-wide uppercase drop-shadow">
                    {service.shortName}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary/90 mt-0.5">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2.5 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Action Buttons - 1 Tap Conversion */}
                <div className="flex flex-col gap-2 pt-2 border-t border-pink-100">
                  {/* WhatsApp Direct Appointment */}
                  <a
                    href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).dataLayer) {
                        (window as any).dataLayer.push({
                          event: "service_whatsapp_click",
                          service: service.name,
                        });
                      }
                    }}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Randevu Al</span>
                  </a>

                  {/* Detail link */}
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="w-full py-2 text-center text-xs font-bold text-gray-500 hover:text-primary transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Detayları İncele</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-gray-300 text-gray-800 font-bold text-sm hover:border-primary hover:text-primary transition-all"
          >
            <span>Tüm Hizmetlerimizi Görüntüle</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
