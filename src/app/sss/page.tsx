import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { WhatsAppCTA } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Hürrem Premium",
  description:
    "Hürrem Premium masaj seansları hakkında merak edilenler. Randevu, çalışma saatleri, masaj türleri ve seans detayları.",
  alternates: {
    canonical: `${siteConfig.url}/sss`,
  },
  openGraph: {
    title: "Sık Sorulan Sorular | Hürrem Premium",
    description: "Denizli masaj hizmetlerimiz hakkında merak edilenler.",
    url: `${siteConfig.url}/sss`,
  },
};

const faqItems = [
  {
    question: "Hürrem Premium hangi şehirde hizmet veriyor?",
    answer: "Hizmetimiz yalnızca Denizli bölgesinde sunulmaktadır.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: "Her gün 12:00 ile 00:00 saatleri arasında kesintisiz hizmet vermekteyiz. Akşam ve gece randevuları için önceden iletişime geçmeniz önerilir.",
  },
  {
    question: "Nasıl randevu alabilirim?",
    answer: "WhatsApp butonuna tıklayarak veya doğrudan telefon numaramızı arayarak dilediğiniz gün ve saat için randevu oluşturabilirsiniz.",
  },
  {
    question: "Aynı gün randevu alabilir miyim?",
    answer: "Müsaitlik durumuna göre aynı gün randevu mümkündür. Yoğunluk olabileceği için birkaç saat öncesinden yazmanız tavsiye edilir.",
  },
  {
    question: "Hangi masaj türleri bulunmaktadır?",
    answer: "Klasik Masaj, Badi Masaj, Soft Masaj, Aroma Terapi, Sultan Masajı, Mix Masaj, Hürrem İmza Masajı ve Tai Masajı seçeneklerimiz mevcuttur.",
  },
  {
    question: "Fiyat bilgisini nasıl alabilirim?",
    answer: "Seans süresi ve masaj türüne göre güncel fiyat bilgisi için WhatsApp üzerinden hızlıca bilgi alabilirsiniz.",
  },
  {
    question: "Randevu öncesinde nelere dikkat etmeliyim?",
    answer: "Seans öncesi ağır yemeklerden kaçınmanız, bol su tüketmeniz ve seans saatinden birkaç dakika önce hazır olmanız tavsiye edilir.",
  },
  {
    question: "Randevumu iptal edebilir veya saatini değiştirebilir miyim?",
    answer: "Evet, herhangi bir program değişikliğinde bize WhatsApp üzerinden bilgi vermeniz yeterlidir.",
  },
];

export default function SSSPage() {
  return (
    <>
      <section className="bg-[#1b0d12] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: "Sık Sorulan Sorular" }]} dark />
          <div className="mt-8 max-w-2xl">
            <span className="text-xs font-bold text-pink-300 tracking-widest uppercase">
              YARDIM VE BİLGİ
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mt-2 mb-4 leading-tight">
              Sık Sorulan Sorular
            </h1>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              Hürrem Premium masaj seansları, randevu süreci ve merak edilen tüm soruların cevapları.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fcf8f9]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <FAQAccordion items={faqItems} />
            </div>

            <div>
              <div className="sticky top-28 bg-[#1b0d12] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-pink-300">Sorunuzu Bulamadınız mı?</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Temsilcimize WhatsApp üzerinden anında yazabilir, seans detayları ve müsaitlik hakkında bilgi alabilirsiniz.
                </p>
                <WhatsAppCTA location="faq_sidebar" variant="primary" className="w-full py-4 text-sm font-bold rounded-xl">
                  WhatsApp ile Sorun
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
