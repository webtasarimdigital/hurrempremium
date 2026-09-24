import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { WhatsAppCTA, PhoneCTA } from "@/components/CTAButtons";
import HomeServicesSection from "@/components/HomeServicesSection";

export const metadata: Metadata = {
  title: "Denizli Masaj & VIP Terapi | Hürrem Premium",
  description:
    "Denizli'de seçkin masaj ve spa deneyimi. Klasik, Medikal, Aromaterapi ve VIP seans seçenekleri ile günün stresini atın. WhatsApp'tan hemen bilgi alın.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Denizli Masaj & VIP Terapi | Hürrem Premium",
    description:
      "Denizli'de seçkin masaj ve spa deneyimi. Profesyonel terapiler ve özel seanslar için hemen WhatsApp'tan bilgi alın.",
    url: siteConfig.url,
  },
};

// Placeholder testimonials - REPLACE WITH REAL CUSTOMER REVIEWS
const testimonials = [
  {
    name: "Murat K.",
    location: "Merkezefendi, Denizli",
    rating: 5,
    text: "Yoğun iş temposundan sonra aldığım klasik masaj seansı gerçekten çok iyi geldi. İletişim hızlı ve çok profesyoneldi.",
  },
  {
    name: "Deniz S.",
    location: "Pamukkale, Denizli",
    rating: 5,
    text: "Aroma terapi masajı inanılmaz rahatlatıcıydı. Temizlik, ilgi ve özen birinci sınıftı. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Emre T.",
    location: "Denizli Merkez",
    rating: 5,
    text: "WhatsApp üzerinden randevu oluşturmak çok kolay oldu. Seans tam saatinde ve son derece özenliydi.",
  },
  {
    name: "Serkan Y.",
    location: "Asmalıevler, Denizli",
    rating: 5,
    text: "Mix masaj seansını denedim, sırt tutulmalarım için nokta atışı bir seans oldu. Emeğinize sağlık.",
  },
];

const whyUsItems = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Her Gün 12:00 – 00:00",
    desc: "Geniş çalışma saatlerimizle günün dilediğiniz saatinde randevu oluşturabilirsiniz.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Yüksek Hijyen & Özen",
    desc: "Her seansta maksimum hijyen standartları ve kaliteli aromatik malzemeler kullanılır.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "Hızlı WhatsApp İletişimi",
    desc: "Tek tıkla randevu, saat ve seans detayları hakkında anında bilgi alabilirsiniz.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "8 Farklı Terapi Türü",
    desc: "Klasikten aromaterapiye, derin dokudan özel imza masajlarımıza geniş seçenek.",
  },
];

const steps = [
  { number: "01", title: "Masaj Türünü Belirleyin", desc: "Size en uygun masaj türünü hizmet listemizden inceleyin." },
  { number: "02", title: "WhatsApp'tan Yazın", desc: "Müsaitlik durumu ve saat detayları için bize hızlıca mesaj atın." },
  { number: "03", title: "Randevunuzu Netleştirin", desc: "Size en uygun saat aralığını birlikte belirleyelim." },
  { number: "04", title: "Huzurlu Seansın Keyfini Çıkarın", desc: "Tüm yorgunluğunuzu geride bırakıp yenilenmiş hissedin." },
];

const homeFAQ = [
  {
    question: "Hürrem Premium nerede hizmet veriyor?",
    answer: "Hizmetimiz Denizli merkezlidir. Hizmet ve randevu detayları hakkında WhatsApp üzerinden hemen bilgi alabilirsiniz.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: "Her gün 12:00 – 00:00 saatleri arasında kesintisiz hizmet vermekteyiz. Akşam ve gece randevuları için önceden yazabilirsiniz.",
  },
  {
    question: "Nasıl randevu alabilirim?",
    answer: "WhatsApp butonuna tıklayarak doğrudan bize ulaşabilirsiniz. Temsilcimiz size en uygun saati ve masaj türünü hemen organize eder.",
  },
  {
    question: "Hangi masaj türleri bulunuyor?",
    answer: "Klasik Masaj, Badi Masaj, Soft Masaj, Aroma Terapi, Sultan Masajı, Mix Masaj, Hürrem İmza Masajı ve Tai Masajı olmak üzere 8 zengin seçeneğimiz mevcuttur.",
  },
  {
    question: "Fiyat bilgisini nasıl öğrenebilirim?",
    answer: "Masaj türü ve seans süresine göre güncel fiyat bilgisi için WhatsApp üzerinden hızlıca bilgi alabilirsiniz.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. MODERN HERO SECTION (Perfect Mobile Fit & Spaced Out Layout) ── */}
      <section className="relative min-h-[calc(100dvh-64px)] md:min-h-[640px] flex flex-col justify-between bg-[#0c0c0e] overflow-hidden pt-20 pb-4 md:py-24">
        {/* Vibrant Background Image - Relaxing Spa Therapy with warm candles */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: "url('/images/masaj-dilek-sever.webp')",
          }}
          role="img"
          aria-label="Hürrem Premium Masaj & Spa"
        />
        {/* Warm Ambient Vignette & Color Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/50 to-[#0c0c0e]/75" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-primary/25 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-16 right-10 w-60 h-60 bg-amber-500/20 rounded-full blur-[90px] pointer-events-none" />

        {/* Top & Middle Content - Spaced Out Gracefully */}
        <div className="relative z-10 container-custom text-center max-w-3xl mx-auto px-4 flex-1 flex flex-col justify-around py-4 sm:py-8">
          {/* Top Title Group */}
          <div className="flex flex-col items-center">
            {/* Eyebrow badge - Prominent Location */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-black/75 backdrop-blur-md border border-pink-500/40 mb-4 sm:mb-6 shadow-xl shadow-pink-950/30">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-white">
                📍 <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 font-black text-base sm:text-lg md:text-xl">Asmalıevler</span> Masaj Hizmeti
              </span>
            </div>

            {/* Large Bold Hero Title */}
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight drop-shadow-md mb-3 sm:mb-5">
              Denizli&apos;de Eşsiz <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 drop-shadow">
                Masajı
              </span>{" "}
              Deneyimleyin
            </h1>

            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-lg mx-auto drop-shadow-sm">
              Günün stresinden ve yorgunluğundan arının. Uzman dokunuşlar ile bedeninize hak ettiği huzuru kazandırın.
            </p>
          </div>

          {/* Action Buttons Group */}
          <div className="my-5 sm:my-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xl mx-auto">
            <WhatsAppCTA location="hero" variant="primary" className="h-14 px-8 text-sm sm:text-base w-full sm:w-auto shadow-xl shadow-primary/40 bg-gradient-to-r from-[#d9265b] to-[#bd0f49] hover:from-[#bd0f49] hover:to-[#941238] whitespace-nowrap">
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp&apos;tan Randevu Al</span>
            </WhatsAppCTA>

            <PhoneCTA location="hero" variant="outline-light" className="h-14 px-6 text-sm sm:text-base w-full sm:w-auto bg-black/50 hover:bg-white/15 border-white/25 backdrop-blur-md whitespace-nowrap">
              <svg className="w-4 h-4 text-pink-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hemen Ara</span>
            </PhoneCTA>
          </div>
        </div>

        {/* Hero Bottom: Sleek Trust Chips + Scroll Cue */}
        <div className="relative z-10 container-custom text-center px-4 pt-2 pb-2">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-white/90 mb-3">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <span className="text-pink-300">📍</span> Asmalıevler, Denizli
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <span className="text-amber-400">🕐</span> 12:00 – 00:00 Her Gün
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <span className="text-green-400">✨</span> VIP &amp; Hijyenik Seanslar
            </span>
          </div>

          <a
            href="#hizmetler"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-pink-200/90 hover:text-white transition-colors animate-bounce mt-1"
          >
            <span>Masaj Seçeneklerini Gör</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── 2. SERVICES SECTION (DIRECTLY UNDER HERO AS REQUESTED!) ── */}
      <HomeServicesSection />

      {/* ── 3. WELCOME / ABOUT SECTION (2. Görseldeki Yapı) ── */}
      <section className="py-16 md:py-24 px-4 md:px-10 max-w-7xl mx-auto bg-[#fcf8f9]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left: Man Massage Photo */}
          <div
            className="w-full lg:w-1/2 aspect-[4/3] lg:h-[430px] rounded-2xl bg-cover bg-center shadow-2xl relative overflow-hidden"
            style={{ backgroundImage: "url('/images/man-massage-therapy.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase rounded-md tracking-wider">
                Özenli Terapi
              </span>
              <p className="mt-2 text-sm font-medium text-white/90">
                Uzman terapistler ile yorgunluk ve kas tutulmalarına son verin.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-xs uppercase">
                <span className="h-0.5 w-7 bg-primary" />
                HOŞ GELDİNİZ
              </div>
              <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Huzur Dolu Sığınağınıza <br />
                <span className="text-primary">Hoş Geldiniz</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-1">
                Hürrem Premium olarak, kusursuz hijyen, profesyonel terapi ve şehrin karmaşasından sakin bir kaçış sunmaya kendimizi adadık. Alanında deneyimli terapistlerimiz, kişiselleştirilmiş bakımlarla bedeninizi ve zihninizi canlandırmak için her seansı özenle kurgular.
              </p>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-6 mt-1">
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-primary">12-00</h4>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">Geniş Saatler</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-primary">8+</h4>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">Masaj Türü</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-primary">100%</h4>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">Memnuniyet</p>
              </div>
            </div>

            {/* Links / Action */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <WhatsAppCTA location="welcome_section" variant="primary" className="h-12 px-6">
                WhatsApp ile Hemen Bilgi Al
              </WhatsAppCTA>
              <Link
                href="/hakkimizda"
                className="text-primary font-bold flex items-center gap-1.5 hover:gap-2.5 transition-all text-sm"
              >
                Hakkımızda Daha Fazla Bilgi
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ── */}
      <section className="py-16 md:py-20 bg-[#0c0c0e] text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 text-pink-300 font-bold tracking-wider text-xs uppercase mb-3">
                <span className="h-0.5 w-6 bg-pink-300" />
                AYRICALIKLARIMIZ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
                Neden Hürrem Premium?
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                Denizli&apos;de kaliteli ve güvenilir bir masaj deneyimi arıyorsanız doğru yerdesiniz. Birebir ilgi, hijyenik ve sakin bir atmosfer ile günün yorgunluğunu üzerinizden atmanız için her aşamada yanınızdayız.
              </p>
              <WhatsAppCTA location="why_us" variant="primary" className="h-14 px-8 text-base">
                WhatsApp ile Hemen Ulaşın
              </WhatsAppCTA>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUsItems.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#26131a] border border-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">KOLAY VE HIZLI</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">Nasıl Çalışır?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#fcf8f9] p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section className="py-16 md:py-20 bg-[#fcf8f9]">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">MÜŞTERİ DENEYİMLERİ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Misafirlerimiz Ne Diyor?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-primary font-medium">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ACCORDION ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">MERAK EDİLENLER</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Sık Sorulan Sorular
            </h2>
          </div>
          <div className="bg-[#fcf8f9] p-6 sm:p-8 rounded-2xl border border-pink-100">
            <FAQAccordion items={homeFAQ} />
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA SECTION ── */}
      <section className="py-20 bg-gradient-to-br from-[#0c0c0e] via-[#1a0c12] to-[#0c0c0e] text-white text-center">
        <div className="container-custom max-w-2xl mx-auto px-4">
          <span className="px-4 py-1.5 rounded-full bg-primary/20 text-pink-300 text-xs font-bold tracking-widest uppercase inline-block mb-4">
            REZERVASYON VE BİLGİ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Kendinize Bugün Bir İyilik Yapın
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
            Size uygun masaj türü, güncel seans müsaitliği ve tüm sorularınız için WhatsApp&apos;tan dilediğiniz an yazabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppCTA location="final_cta" variant="primary" className="h-14 px-8 text-base">
              WhatsApp&apos;tan Randevu Al
            </WhatsAppCTA>
            <PhoneCTA location="final_cta" variant="outline-light" className="h-14 px-6 text-sm">
              Hemen Ara: {siteConfig.phone}
            </PhoneCTA>
          </div>
        </div>
      </section>
    </>
  );
}
