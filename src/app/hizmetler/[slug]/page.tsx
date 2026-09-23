import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { WhatsAppCTA, PhoneCTA } from "@/components/CTAButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Sayfa Bulunamadı | Hürrem Premium" };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: {
      canonical: `${siteConfig.url}/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `${siteConfig.url}/hizmetler/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(slug, 3);

  const serviceFAQ = [
    {
      question: `${service.name} seansı ne kadar sürer?`,
      answer: `${service.name} seansımız genellikle ${service.duration} aralığındadır. Talebinize göre uygun süre belirlenebilir.`,
    },
    {
      question: `${service.name} için nasıl randevu alabilirim?`,
      answer: "WhatsApp butonuna tıklayarak veya bizi arayarak hemen müsaitlik durumunu sorgulayabilir ve randevunuzu oluşturabilirsiniz.",
    },
    {
      question: `${service.name} ücreti ve detayları nedir?`,
      answer: "Güncel seans detayları ve fiyat bilgisi için WhatsApp üzerinden hızlıca bilgi alabilirsiniz.",
    },
    {
      question: "Seans öncesinde nelere dikkat edilmelidir?",
      answer: service.content.beforeSession,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1b0d12] pt-32 pb-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b0d12] via-[#1b0d12]/80 to-[#1b0d12]/90" />

        <div className="relative z-10 container-custom">
          <Breadcrumb
            items={[
              { label: "Hizmetler", href: "/hizmetler" },
              { label: service.name },
            ]}
            dark
          />

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="px-3.5 py-1 bg-primary text-white text-xs font-bold uppercase rounded-md tracking-wider">
                {service.duration} Seans
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-4 leading-tight">
                {service.seo.h1}
              </h1>
              <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <WhatsAppCTA
                  message={service.whatsappMessage}
                  location="service_detail_hero"
                  variant="primary"
                  className="h-14 px-8 text-base"
                >
                  WhatsApp&apos;tan Randevu Al
                </WhatsAppCTA>
                <PhoneCTA location="service_detail_hero" variant="outline-light" className="h-14 px-6 text-sm">
                  Hemen Ara
                </PhoneCTA>
              </div>
            </div>

            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 bg-[#fcf8f9]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-4">{service.name} Nedir?</h2>
                <p className="text-gray-600 leading-relaxed text-base">{service.content.whatIsIt}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-4">Seans Nasıl İlerler?</h2>
                <p className="text-gray-600 leading-relaxed text-base">{service.content.sessionDetails}</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-white p-8 rounded-2xl border-l-4 border-primary shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Seans Öncesi Önemli Bilgiler</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{service.content.beforeSession}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-5">Neden Hürrem Premium?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm font-medium leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1b0d12] text-white p-7 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-pink-300">Kimler Tercih Etmeli?</h3>
                <ul className="space-y-3">
                  {service.whoFor.map((w, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="text-primary font-bold">✓</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-pink-100 shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Randevu & Bilgi</h3>
                <p className="text-xs text-gray-500 mb-6">
                  Seans müsaitliği ve tüm merak ettikleriniz için bize hemen yazın.
                </p>
                <WhatsAppCTA
                  message={service.whatsappMessage}
                  location="service_sidebar"
                  variant="primary"
                  className="w-full py-3.5 text-sm font-bold rounded-xl"
                >
                  WhatsApp ile Yazın
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-8">
            {service.name} Hakkında Sık Sorulanlar
          </h2>
          <div className="bg-[#fcf8f9] p-6 sm:p-8 rounded-2xl border border-pink-100">
            <FAQAccordion items={serviceFAQ} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#fcf8f9]">
        <div className="container-custom">
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            İlginizi Çekebilecek Diğer Masajlar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-1.5">
                  {s.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
                  {s.shortDescription}
                </p>
                <span className="text-xs font-bold text-primary flex items-center gap-1">
                  Detayları İncele →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
