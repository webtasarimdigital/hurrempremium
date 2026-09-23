import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Hürrem Premium",
  description:
    "Hürrem Premium evde masaj hizmeti hakkında merak edilenler. Randevu, hizmet bölgesi, masaj türleri ve fiyat bilgisi için SSS sayfamızı inceleyin.",
  alternates: {
    canonical: `${siteConfig.url}/sss`,
  },
  openGraph: {
    title: "Sık Sorulan Sorular | Hürrem Premium",
    description: "Denizli evde masaj hakkında merak edilenler.",
    url: `${siteConfig.url}/sss`,
  },
};

const faqItems = [
  {
    question: "Hürrem Premium hangi bölgelerde hizmet veriyor?",
    answer:
      "Hizmetimiz yalnızca Denizli ile sınırlıdır. Denizli merkez ve çevre mahallelerine hizmet vermekteyiz. Adresinizin hizmet kapsamında olup olmadığını WhatsApp üzerinden öğrenebilirsiniz.",
  },
  {
    question: "Hizmet yalnızca Denizli'de mi?",
    answer:
      "Evet. Şu aşamada hizmetimiz yalnızca Denizli ile sınırlıdır. Bu tercih bilinçli bir karardır: yerel kalmak ve işimize odaklanmak istiyoruz.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer:
      "Her gün 12:00 ile 00:00 arasında hizmet veriyoruz. Hafta sonu ve resmi tatillerde de çalışıyoruz. Müsaitlik durumu için WhatsApp üzerinden bize ulaşabilirsiniz.",
  },
  {
    question: "Nasıl randevu alabilirim?",
    answer:
      "WhatsApp üzerinden bize mesaj göndermeniz yeterlidir. Tercih ettiğiniz masaj türünü ve saat aralığını belirtin; müsaitlik durumuna göre size en kısa sürede dönüş yaparız. Ayrıca telefonla da ulaşabilirsiniz.",
  },
  {
    question: "Aynı gün randevu mümkün mü?",
    answer:
      "Müsaitlik durumuna göre aynı gün randevu sağlanabilir. Bunun için WhatsApp üzerinden hızlıca bize ulaşmanızı öneririz.",
  },
  {
    question: "Hangi masaj türleri bulunuyor?",
    answer:
      "Klasik Masaj, Badi Masaj, Soft Masaj, Aroma Terapi Masajı, Sultan Masajı, Mix Masaj, Hürrem Masajı ve Tai Masajı seçeneklerimiz mevcuttur. Hangi masaj türünün size uygun olduğundan emin değilseniz bize danışabilirsiniz.",
  },
  {
    question: "Fiyat bilgisini nasıl alabilirim?",
    answer:
      "Güncel fiyat bilgisi için WhatsApp üzerinden bize ulaşmanızı öneririz. Masaj türü ve seans süresine göre bilgi verebiliriz.",
  },
  {
    question: "Masaj hizmeti eve mi geliyor?",
    answer:
      "Evet. Hizmetimiz tamamen evinizde sunulmaktadır. Belirlenen randevu saatinde adresinize geliyoruz.",
  },
  {
    question: "Randevu öncesinde bilgi alabilir miyim?",
    answer:
      "Tabii ki. Randevu öncesinde masaj türleri, süreç ve seans hakkında WhatsApp üzerinden bilgi alabilirsiniz. Sorularınızı bize iletmekten çekinmeyin.",
  },
  {
    question: "Hangi masaj türü bana uygun?",
    answer:
      "Bu soruyu kişisel beklentilerinize ve tercihlerinize göre birlikte değerlendirebiliriz. WhatsApp üzerinden bize ulaşın, size uygun seçeneği bulmak için yardımcı olalım.",
  },
  {
    question: "Ödeme seçenekleri nelerdir?",
    answer:
      "Ödeme seçenekleri hakkında bilgi almak için WhatsApp üzerinden bize ulaşabilirsiniz.",
  },
  {
    question: "Randevuyu değiştirebilir miyim?",
    answer:
      "Evet. Randevunuzu değiştirmek veya iptal etmek için WhatsApp üzerinden bize bildirmeniz yeterlidir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function SSSPage() {
  const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-dark pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Sık Sorulan Sorular" }]} dark />
          <div className="mt-8 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-cream-light font-light mb-5">
              Sık Sorulan Sorular
            </h1>
            <p className="text-brand-cream/60 leading-relaxed text-lg">
              Hürrem Premium hakkında merak ettiğiniz soruların yanıtlarını burada bulabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2">
              <FAQAccordion items={faqItems} />
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-brand-dark p-6">
                  <h2 className="font-serif text-xl text-brand-cream-light mb-3">
                    Sorunuzu Bulamadınız mı?
                  </h2>
                  <p className="text-sm text-brand-cream/60 mb-5 leading-relaxed">
                    WhatsApp üzerinden bize ulaşabilir, sorularınızı iletebilirsiniz.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-gold text-brand-dark text-sm font-medium px-5 py-3 hover:bg-brand-gold-light transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp&apos;tan Sor
                  </a>
                </div>

                <div className="border border-brand-gold/30 p-6">
                  <h3 className="font-serif text-lg text-brand-text mb-3">İletişim</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-brand-gold uppercase tracking-wider mb-1">Telefon</p>
                      <a href={siteConfig.phoneTel} className="text-sm text-brand-text-secondary hover:text-brand-text transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-brand-gold uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                      <p className="text-sm text-brand-text-secondary">{siteConfig.workingHours.full}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
