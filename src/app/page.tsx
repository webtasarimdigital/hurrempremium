import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { WhatsAppCTA, PhoneCTA } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Denizli Evde Masaj | Hürrem Premium",
  description:
    "Denizli'de evde masaj hizmeti için Hürrem Premium ile iletişime geçin. Masaj seçenekleri, müsaitlik ve randevu için WhatsApp'tan bilgi alın.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Denizli Evde Masaj | Hürrem Premium",
    description:
      "Denizli'de evde masaj hizmeti için Hürrem Premium ile iletişime geçin. Masaj seçenekleri, müsaitlik ve randevu için WhatsApp'tan bilgi alın.",
    url: siteConfig.url,
  },
};

// Placeholder testimonials - REPLACE WITH REAL CUSTOMER REVIEWS
const testimonials = [
  {
    name: "Ayşe K.",
    location: "Denizli",
    rating: 5,
    text: "Evde masaj hizmeti almak bu kadar kolay ve rahat olabilir demezdim. Seans sonrası kendi yatağımda dinlenebildim.", // PLACEHOLDER REVIEW – REPLACE WITH REAL CUSTOMER REVIEW
  },
  {
    name: "Mehmet T.",
    location: "Denizli",
    rating: 5,
    text: "WhatsApp üzerinden randevu almak çok pratikti. Masaj kalitesinden memnun kaldım.", // PLACEHOLDER REVIEW – REPLACE WITH REAL CUSTOMER REVIEW
  },
  {
    name: "Fatma S.",
    location: "Pamukkale, Denizli",
    rating: 5,
    text: "Aroma terapi masajını evde deneyimlemek farklı bir his. Kesinlikle tekrar alacağım.", // PLACEHOLDER REVIEW – REPLACE WITH REAL CUSTOMER REVIEW
  },
  {
    name: "Ali R.",
    location: "Denizli",
    rating: 5,
    text: "Tai masajı hakkında çok bilgim yoktu ama denemekten memnun oldum. Tecrübeli bir uygulama.", // PLACEHOLDER REVIEW – REPLACE WITH REAL CUSTOMER REVIEW
  },
];

const whyUsItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Denizli'ye Özel Hizmet",
    desc: "Hizmetimiz yalnızca Denizli'de sunulmaktadır. Yerel ve odaklı bir yaklaşımla çalışıyoruz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
    title: "Evinizin Konforunda",
    desc: "Bir yere gitme zorunluluğu yok. Masaj, randevunuzda adresinize geliriz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Her Gün 12:00 – 00:00",
    desc: "Geniş çalışma saatleri sayesinde size uygun zamanı kolayca bulabilirsiniz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "Kolay WhatsApp Randevusu",
    desc: "Tek bir mesajla randevunuzu oluşturabilir, müsaitlik ve fiyat bilgisi alabilirsiniz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Farklı Masaj Seçenekleri",
    desc: "8 farklı masaj türünden size en uygun olanı seçebilirsiniz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hijyen ve Özen",
    desc: "Her seansta hijyen standartlarına dikkat edilir. Kullanılan malzemeler özenle seçilir.",
  },
];

const steps = [
  { number: "01", title: "Masaj Türünü Seçin", desc: "8 farklı masaj seçeneği arasından size uygun olanı belirleyin." },
  { number: "02", title: "WhatsApp'tan Ulaşın", desc: "Seçtiğiniz masaj türü ve tercih ettiğiniz saat için bize mesaj gönderin." },
  { number: "03", title: "Saatinizi Belirleyin", desc: "Müsaitlik durumuna göre size en uygun randevu saatini birlikte buluruz." },
  { number: "04", title: "Hizmetinizi Alın", desc: "Belirlenen saatte adresinize geliriz. Evinizin konforunda masajınızı alırsınız." },
];

const homeFAQ = [
  {
    question: "Hürrem Premium hangi bölgelerde hizmet veriyor?",
    answer: "Hizmetimiz yalnızca Denizli ile sınırlıdır. Denizli merkez ve çevre mahallelerine hizmet vermekteyiz. Hizmet bölgeniz hakkında WhatsApp üzerinden bilgi alabilirsiniz.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: "Her gün 12:00 – 00:00 saatleri arasında hizmet veriyoruz. Randevu almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Nasıl randevu alabilirim?",
    answer: "Randevu almak için WhatsApp üzerinden bize ulaşmanız yeterlidir. Müsaitlik durumunu kontrol edip size en uygun saati birlikte belirleriz. Ayrıca telefon ile de ulaşabilirsiniz.",
  },
  {
    question: "Fiyat bilgisini nasıl öğrenebilirim?",
    answer: "Fiyatlar masaj türüne ve seans süresine göre farklılık gösterebilir. Güncel fiyat bilgisi için WhatsApp üzerinden bizimle iletişime geçmenizi öneririz.",
  },
  {
    question: "Aynı gün randevu mümkün mü?",
    answer: "Müsaitlik durumuna bağlı olarak aynı gün randevu mümkün olabilir. Bunun için WhatsApp üzerinden hızlıca bize ulaşmanızı öneririz.",
  },
];

const WaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=80&auto=format&fit=crop')" }}
          role="img"
          aria-label="Premium masaj ortamı"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container-custom pt-24 pb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-xs text-brand-gold tracking-[0.25em] uppercase font-sans">
                Denizli • Evde Masaj Hizmeti
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-cream-light font-light leading-tight mb-6">
              Denizli&apos;de Premium{" "}
              <em className="not-italic text-brand-gold-light">Evde Masaj</em>{" "}
              Deneyimi
            </h1>

            <p className="text-base sm:text-lg text-brand-cream/70 leading-relaxed mb-10 max-w-xl">
              Evinizin konforunda profesyonel masaj hizmeti. Size uygun masaj türünü seçin, WhatsApp üzerinden hızlıca bilgi alın ve randevunuzu oluşturun.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppCTA location="hero" className="px-7 py-4">
                <WaIcon />
                WhatsApp&apos;tan Randevu Al
              </WhatsAppCTA>
              <PhoneCTA location="hero" variant="outline-light" className="px-7 py-4">
                <PhoneIcon />
                Hemen Ara
              </PhoneCTA>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-10 border-t border-brand-gold/20 bg-brand-dark/60 backdrop-blur-sm">
          <div className="container-custom py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "📍", text: "Denizli İçi Hizmet" },
                { icon: "🕐", text: "12:00 – 00:00" },
                { icon: "💬", text: "WhatsApp Randevu" },
                { icon: "🏠", text: "Adresinize Gidiyoruz" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs text-brand-cream/60 tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-padding bg-brand-cream-light" id="hizmetler">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Masaj Hizmetleri</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-light">Hizmetlerimiz</h2>
            <p className="mt-4 text-brand-text-secondary max-w-xl mx-auto text-base leading-relaxed">
              Size uygun masaj türünü seçin. Fiyat ve müsaitlik bilgisi için WhatsApp&apos;tan bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group bg-white border border-brand-text/8 hover:border-brand-gold/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-44 bg-brand-brown overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=70&auto=format&fit=crop"
                    alt={`${service.name} - Denizli evde masaj`}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={176}
                  />
                  <div className="absolute inset-0 bg-brand-dark/30" />
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl text-brand-text font-medium mb-2">{service.name}</h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-5 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      className="block text-center text-sm border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-colors duration-200 py-2.5 font-medium"
                    >
                      Detayları İncele
                    </Link>
                    <WhatsAppCTA
                      message={service.whatsappMessage}
                      location="service_card"
                      className="py-2.5 justify-center w-full"
                    >
                      WhatsApp&apos;tan Bilgi Al
                    </WhatsAppCTA>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-brand-gold border-b border-brand-gold/40 hover:border-brand-gold pb-0.5 text-sm tracking-wide transition-colors"
            >
              Tüm Hizmetleri Gör
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Neden Biz</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream-light font-light leading-tight mb-6">
                Neden Hürrem Premium?
              </h2>
              <p className="text-brand-cream/60 leading-relaxed mb-8">
                Denizli'de evde masaj konusunda doğru adresi arıyorsanız, size uygun saati ve masaj türünü birlikte bulabiliriz. Salonlara gitme zahmetine girmeden, kendi alanınızda rahat hissederek hizmet alabilirsiniz.
              </p>
              <WhatsAppCTA location="why_us" className="px-6 py-3">
                WhatsApp&apos;tan Bilgi Al
              </WhatsAppCTA>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUsItems.map((item, i) => (
                <div key={i} className="p-5 border border-brand-gold/15 hover:border-brand-gold/35 transition-colors duration-300">
                  <div className="text-brand-gold mb-3">{item.icon}</div>
                  <h3 className="font-serif text-lg text-brand-cream/90 mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-cream/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Süreç</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-light">Nasıl Çalışır?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center border border-brand-gold/40 mb-5">
                  <span className="font-serif text-xl text-brand-gold">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl text-brand-text mb-3">{step.title}</h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <WhatsAppCTA location="how_it_works" className="px-8 py-4">
              Hemen Başlayın
            </WhatsAppCTA>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-padding bg-brand-dark overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative h-80 lg:h-[480px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=75&auto=format&fit=crop"
                  alt="Hürrem Premium - Denizli evde masaj"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={480}
                />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-brand-gold/30 hidden lg:block" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Hakkımızda</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream-light font-light leading-tight mb-6">
                Sadece Bir Masaj Değil,<br />
                <em className="not-italic text-brand-gold-light">Kendinize Ayırdığınız Zaman</em>
              </h2>
              <div className="space-y-4 text-brand-cream/60 leading-relaxed">
                <p>Hürrem Premium olarak Denizli'de sunduğumuz evde masaj hizmeti, günlük koşuşturmacadan bir mola vermek isteyenler için pratik ve kaliteli bir seçenek olmayı hedefliyor.</p>
                <p>Bir masaj salonuna gidip gelme zahmetine girmek zorunda değilsiniz. Seans sonrasında doğrudan kendi evinizde dinlenebilir, bu dinginliği kendinize göre tamamlayabilirsiniz.</p>
                <p>8 farklı masaj seçeneğimizden size uygun olanı belirleyin. Müsaitlik ve fiyat bilgisi için WhatsApp üzerinden bize kolayca ulaşabilirsiniz.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center justify-center gap-2 border border-brand-gold/40 text-brand-gold font-medium px-6 py-3 text-sm hover:bg-brand-gold/10 transition-colors"
                >
                  Daha Fazlası
                </Link>
                <WhatsAppCTA location="about_section" className="px-6 py-3">
                  İletişime Geç
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL SEO ── */}
      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Denizli Evde Masaj</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-light mb-8">
              Denizli&apos;de Evde Masaj Hizmeti
            </h2>
            <div className="space-y-5 text-brand-text-secondary leading-relaxed">
              <p>Denizli evde masaj hizmeti arayanlar için Hürrem Premium, adresinize gelen profesyonel bir seçenek sunuyor. Günün herhangi bir saatinde (12:00 ile 00:00 arasında) randevu oluşturabilir, kendinize zaman ayırabilirsiniz.</p>
              <p>Denizli masaj konusunda en sık duyduğumuz ihtiyaç şu: insanlar kaliteli bir masaj deneyimi yaşamak istiyor ama salon ortamına gitmek istemiyorlar. Uzun yolculuk, park sorunu, yabancı ortam derken masajın kendisinden önce yorulabiliyorsunuz. Evde masaj tam da bu noktada devreye giriyor.</p>
              <p>Hürrem Premium olarak Denizli&apos;nin farklı mahallelerine hizmet veriyoruz. Asmalıevler, Pamukkale, Merkezefendi ve diğer merkez bölgeler dahil olmak üzere Denizli içindeki hizmet noktalarına gelinebilmektedir. Hizmet alanınız hakkında WhatsApp üzerinden bilgi alabilirsiniz.</p>
              <p>Klasik masajdan aroma terapi masajına, soft masajdan tai masajına kadar farklı seçenekler arasından tercih yapabilirsiniz. Hangi masaj türünün size uygun olduğundan emin değilseniz, bize mesaj atmanız yeterlidir.</p>
              <p>Denizli masaj randevusu almak için WhatsApp'tan bize ulaşabilir, tercih ettiğiniz masaj türünü ve saat aralığını belirtebilirsiniz. Müsaitlik durumuna göre en kısa sürede dönüş yaparız.</p>
              <p>Denizli profesyonel masaj hizmetleri arasında öne çıkan en önemli özelliğimiz, hizmetin tamamen evinizde sunulmasıdır. Masaj sonrası dinlenme sürecinizi kendi ortamınızda geçirebilirsiniz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="section-padding bg-brand-brown">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Hizmet Bölgesi</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream-light font-light mb-6">
                Denizli&apos;de Evinizin<br />Konforundayız
              </h2>
              <p className="text-brand-cream/60 leading-relaxed mb-6">
                Hizmetimiz yalnızca Denizli ile sınırlıdır. Denizli merkez ve mahallelerine düzenli olarak gidiyoruz.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Asmalıevler", "Pamukkale", "Merkezefendi", "Denizli Merkez"].map((area) => (
                  <div key={area} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                    <span className="text-sm text-brand-cream/70">{area}</span>
                  </div>
                ))}
              </div>
              <div className="border border-brand-gold/20 p-4">
                <p className="text-sm text-brand-cream/60">
                  <span className="text-brand-gold font-medium">Not:</span> Hizmet alanımız Denizli ile sınırlıdır. Bölgenizin hizmet kapsamında olup olmadığını WhatsApp üzerinden öğrenebilirsiniz.
                </p>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block p-10 border border-brand-gold/20">
                <div className="text-brand-gold mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p className="font-serif text-2xl text-brand-cream-light mb-2">Denizli</p>
                <p className="text-sm text-brand-cream/50">Hizmet Bölgesi</p>
                <div className="mt-6">
                  <WhatsAppCTA location="service_area" className="px-6 py-3">
                    Randevu Al
                  </WhatsAppCTA>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Müşteri Yorumları</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-light">Müşterilerimiz Ne Diyor?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 border border-brand-text/8">
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} yıldız`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-brand-text-secondary leading-relaxed mb-4 italic">&quot;{t.text}&quot;</p>
                <div>
                  <p className="font-medium text-brand-text text-sm">{t.name}</p>
                  <p className="text-xs text-brand-text-secondary">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">SSS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-light mb-4">
                Sık Sorulan Sorular
              </h2>
              <p className="text-brand-text-secondary leading-relaxed">
                Aklınızdaki soruyu bulamadıysanız WhatsApp üzerinden bize ulaşabilirsiniz.
              </p>
              <div className="mt-6">
                <Link href="/sss" className="text-brand-gold text-sm border-b border-brand-gold/40 hover:border-brand-gold transition-colors pb-0.5">
                  Tüm sorular →
                </Link>
              </div>
            </div>
            <div>
              <FAQAccordion items={homeFAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Randevu</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-brand-cream-light font-light mb-5">
              Randevunuzu Şimdi Oluşturun
            </h2>
            <p className="text-brand-cream/60 mb-10 leading-relaxed">
              Size uygun masaj türü, müsaitlik ve fiyat bilgisi için WhatsApp üzerinden bize ulaşabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppCTA location="final_cta" className="px-8 py-4">
                <WaIcon />
                WhatsApp&apos;tan Randevu Al
              </WhatsAppCTA>
              <PhoneCTA location="final_cta" variant="outline-light" className="px-8 py-4">
                <PhoneIcon />
                Hemen Ara
              </PhoneCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
