"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isServicesActive = pathname?.startsWith("/hizmetler");
  const isContactActive = pathname?.startsWith("/iletisim");

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[200] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-5px_25px_rgba(0,0,0,0.08)] safe-bottom">
      <div className="flex items-center justify-between h-16 px-1">
        {/* 1. SOL 1: Ana Sayfa */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className={`flex-1 h-full flex flex-col items-center justify-center transition-all gap-1 ${
            isHomeActive
              ? "text-primary font-black"
              : "text-gray-500 hover:text-gray-900 active:scale-95"
          }`}
          aria-label="Ana Sayfa"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHomeActive ? 2.5 : 2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight leading-none">Ana Sayfa</span>
        </Link>

        {/* 2. SOL 2: Hizmetler */}
        <Link
          href="/hizmetler"
          className={`flex-1 h-full flex flex-col items-center justify-center transition-all gap-1 ${
            isServicesActive
              ? "text-primary font-black"
              : "text-gray-500 hover:text-gray-900 active:scale-95"
          }`}
          aria-label="Masaj Hizmetleri"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isServicesActive ? 2.5 : 2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight leading-none">Hizmetler</span>
        </Link>

        {/* 3. ORTA: WHATSAPP (Elevated Priority Action Button) */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-4">
          <a
            href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 text-white shadow-lg shadow-[#25D366]/40 border-4 border-white flex items-center justify-center transition-all duration-200"
            aria-label="WhatsApp Randevu"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).dataLayer) {
                (window as any).dataLayer.push({ event: "whatsapp_click", location: "mobile_bottom_bar" });
              }
            }}
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <span className="text-[10px] font-black text-[#25D366] mt-0.5 tracking-tight leading-none">WhatsApp</span>
        </div>

        {/* 4. SAĞ 1: Hemen Ara */}
        <a
          href={siteConfig.phoneTel}
          className="flex-1 h-full flex flex-col items-center justify-center text-gray-500 hover:text-gray-900 active:scale-95 transition-all gap-1"
          aria-label="Hemen Ara"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).dataLayer) {
              (window as any).dataLayer.push({ event: "phone_click", location: "mobile_bottom_bar" });
            }
          }}
        >
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight leading-none">Hemen Ara</span>
        </a>

        {/* 5. SAĞ 2: İletişim */}
        <Link
          href="/iletisim"
          className={`flex-1 h-full flex flex-col items-center justify-center transition-all gap-1 ${
            isContactActive
              ? "text-primary font-black"
              : "text-gray-500 hover:text-gray-900 active:scale-95"
          }`}
          aria-label="İletişim & Konum"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isContactActive ? 2.5 : 2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isContactActive ? 2.5 : 2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight leading-none">İletişim</span>
        </Link>
      </div>
    </div>
  );
}
