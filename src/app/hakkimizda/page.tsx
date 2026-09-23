import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Hakkımızda | Hürrem Premium",
  description:
    "Hürrem Premium hakkında bilgi edinin. Denizli'de evde masaj hizmeti sunan markamızın yaklaşımı, değerleri ve hizmet anlayışı.",
  alternates: {
    canonical: `${siteConfig.url}/hakkimizda`,
  },
  openGraph: {
    title: "Hakkımızda | Hürrem Premium",
    description: "Denizli'de evde masaj hizmeti sunan Hürrem Premium hakkında bilgi edinin.",
    url: `${siteConfig.url}/hakkimizda`,
  },
};

const values = [
  {
    title: "Denizli'ye Odaklı",
    desc: "Hizmetimiz yalnızca Denizli'de sunulmaktadır. Yerel olmak bize odaklanma ve daha iyi hizmet verme fırsatı tanıyor.",
  },
  {
    title: "Evinizde Hizmet",
    desc: "Masaj salonuna gitme zahmetine girmeden kendi ortamınızda hizmet alabilirsiniz. Seans sonrasında doğrudan dinlenebilirsiniz.",
  },
  {
    title: "Hijyen Önceliği",
    desc: "Her seans öncesinde ekipman ve malzemelerin hijyeni kontrol edilir. Temizlik ve özen her zaman önceliktir.",
  },
  {
    title: "Kolay İletişim",
    desc: "WhatsApp üzerinden tek bir mesajla randevu oluşturabilir, müsaitlik ve fiyat bilgisi alabilirsiniz.",
  },
  {
    title: "Geniş Çalışma Saatleri",
    desc: "Her gün 12:00'den 00:00'a kadar çalışıyoruz. Akşam ve gece randevuları da mümkündür.",
  },
  {
    title: "Farklı Masaj Seçenekleri",
    desc: "8 farklı masaj türü arasından size uygun olanı seçebilirsiniz. Hangisinin uygun olduğundan emin değilseniz bize danışabilirsiniz.",
  },
];

export default function HakkimizdaPage() {
  const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Hakkımızda" }]} dark />
          <div className="mt-8 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-cream-light font-light mb-5">
              Hakkımızda
            </h1>
            <p className="text-brand-cream/60 leading-relaxed text-lg">
              Denizli'de evde masaj hizmeti sunan Hürrem Premium, pratik ve kaliteli bir seçenek olarak yolculuğuna devam ediyor.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative h-80 lg:h-[450px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=75&auto=format&fit=crop"
                  alt="Hürrem Premium - Denizli evde masaj hizmeti"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={450}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-brand-gold/30 hidden lg:block" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Hikâyemiz</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-light mb-6 leading-tight">
                Denizli&apos;de Evde Masajı<br />
                <em className="not-italic text-brand-gold">Kolaylaştırmak İstedik</em>
              </h2>
              <div className="space-y-4 text-brand-text-secondary leading-relaxed">
                <p>
                  Hürrem Premium, Denizli'de evde masaj hizmeti almak isteyenlerin yaşadığı pratik soruna basit bir çözüm getirmek amacıyla kuruldu.
                </p>
                <p>
                  Kaliteli bir masaj deneyimi yaşamak için salon ortamına gitme zorunluluğu olmamalı. İstediğiniz saatte, kendi evinizde, rahat bir ortamda bu hizmetin alınabilmesi gerekiyor.
                </p>
                <p>
                  Bu anlayışla Denizli'de evde masaj hizmeti sunmaya başladık. Kolay WhatsApp randevusu, geniş çalışma saatleri ve farklı masaj seçenekleri ile hizmetinize sunulduk.
                </p>
                <p>
                  Hizmetimiz yalnızca Denizli ile sınırlıdır. Bu tercih bilinçli bir karardır: yerel kalmak, odaklanmak ve işimizi daha iyi yapmak için.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Değerlerimiz</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream-light font-light">
              Bizi Tanımlayan Değerler
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 border border-brand-gold/15 hover:border-brand-gold/30 transition-colors">
                <div className="w-8 h-px bg-brand-gold mb-5" />
                <h3 className="font-serif text-xl text-brand-cream/90 mb-3">{v.title}</h3>
                <p className="text-sm text-brand-cream/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs text-brand-gold tracking-[0.25em] uppercase">Hizmet Anlayışımız</span>
              </div>
              <h2 className="font-serif text-3xl text-brand-text font-light mb-6">
                Nasıl Çalışıyoruz?
              </h2>
              <div className="space-y-4 text-brand-text-secondary leading-relaxed">
                <p>
                  Randevu sürecimiz mümkün olduğunca basit tutulmaya çalışılmıştır. WhatsApp üzerinden bir mesaj yeterlidir. Tercih ettiğiniz masaj türünü ve uygun saatinizi belirtin, müsaitlik durumuna göre size dönüş yaparız.
                </p>
                <p>
                  Seans gününde belirlenen saatte adresinize geliriz. Masaj öncesinde kısa bir değerlendirme yapılır. Tercihleriniz, hassas noktalar ve genel beklentileriniz dinlenir.
                </p>
                <p>
                  Masaj sonrasında herhangi bir ek ulaşım ya da bekleme gerekmez. Kendi ortamınızda doğrudan dinlenme sürecinize geçebilirsiniz.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-brand-text font-light mb-6">
                İletişim Bilgilerimiz
              </h2>
              <div className="space-y-5">
                {[
                  { label: "İşletme Adı", value: siteConfig.brandName },
                  { label: "Adres", value: siteConfig.address.full },
                  { label: "Telefon", value: siteConfig.phone, href: siteConfig.phoneTel },
                  { label: "E-posta", value: siteConfig.email, href: siteConfig.emailHref },
                  { label: "Çalışma Saatleri", value: siteConfig.workingHours.full },
                  { label: "Hizmet Bölgesi", value: siteConfig.address.serviceArea },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 py-3 border-b border-brand-text/8">
                    <span className="text-xs text-brand-gold uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-brand-text-secondary hover:text-brand-text transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-brand-text-secondary text-sm">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-center">
        <div className="container-custom max-w-xl">
          <h2 className="font-serif text-3xl text-brand-cream-light font-light mb-4">
            Tanışalım
          </h2>
          <p className="text-brand-cream/60 mb-8 leading-relaxed">
            Hizmetlerimiz ve randevu hakkında WhatsApp üzerinden bilgi alabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-medium px-8 py-4 text-sm hover:bg-brand-gold-light transition-colors"
            >
              WhatsApp&apos;tan Yaz
            </a>
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center gap-2 border border-brand-cream/30 text-brand-cream font-medium px-8 py-4 text-sm hover:bg-brand-cream/10 transition-colors"
            >
              Hizmetlerimizi İncele
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
