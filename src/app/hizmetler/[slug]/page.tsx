import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";

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
  const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`;

  const serviceFAQ = [
    {
      question: `${service.name} ne kadar sürer?`,
      answer: `${service.name} seansı genellikle ${service.duration} arasında sürer. Tercihlerinize göre seans süresi ayarlanabilir.`,
    },
    {
      question: `${service.name} için nasıl randevu alabilirim?`,
      answer: "WhatsApp üzerinden bize ulaşabilirsiniz. Tercih ettiğiniz saat ve masaj türünü belirtin, müsaitlik durumuna göre hızlıca dönüş yaparız.",
    },
    {
      question: `${service.name} fiyatı nedir?`,
      answer: "Güncel fiyat bilgisi için WhatsApp üzerinden bize ulaşmanızı öneririz. Masaj türü ve seans süresine göre bilgi verebiliriz.",
    },
    {
      question: "Hizmet hangi bölgelerde veriliyor?",
      answer: "Hizmetimiz yalnızca Denizli ile sınırlıdır. Adresinizin hizmet bölgemizde olup olmadığını WhatsApp üzerinden öğrenebilirsiniz.",
    },
    {
      question: "Seans öncesinde hazırlık yapmalı mıyım?",
      answer: service.content.beforeSession,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.brandName,
      url: siteConfig.url,
      telephone: siteConfig.phoneInternational,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressCountry: "TR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Denizli",
    },
    url: `${siteConfig.url}/hizmetler/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${siteConfig.url}/hizmetler` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${siteConfig.url}/hizmetler/${service.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFAQ.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=60&auto=format&fit=crop')" }}
        />
        <div className="relative z-10 container-custom pb-16">
          <Breadcrumb
            items={[
              { label: "Hizmetler", href: "/hizmetler" },
              { label: service.name },
            ]}
            dark
          />

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-brand-gold text-sm tracking-widest uppercase mb-3">{service.duration}</p>
              <h1 className="font-serif text-4xl sm:text-5xl text-brand-cream-light font-light leading-tight mb-4">
                {service.seo.h1}
              </h1>
              <p className="text-brand-cream/70 leading-relaxed text-lg mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-medium px-7 py-4 text-sm hover:bg-brand-gold-light transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp&apos;tan Randevu Al
                </a>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center justify-center gap-2 border border-brand-cream/30 text-brand-cream font-medium px-7 py-4 text-sm hover:bg-brand-cream/10 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>
            </div>

            <div className="relative h-72 lg:h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=700&q=75&auto=format&fit=crop"
                alt={`${service.name} - Denizli evde masaj`}
                className="w-full h-full object-cover"
                width={700}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* What is it */}
              <div>
                <h2 className="font-serif text-2xl text-brand-text mb-4">{service.name} Nedir?</h2>
                <p className="text-brand-text-secondary leading-relaxed">{service.content.whatIsIt}</p>
              </div>

              {/* Session details */}
              <div>
                <h2 className="font-serif text-2xl text-brand-text mb-4">Seans Nasıl İlerler?</h2>
                <p className="text-brand-text-secondary leading-relaxed">{service.content.sessionDetails}</p>
              </div>

              {/* Before session */}
              <div className="bg-brand-cream p-6 border-l-2 border-brand-gold">
                <h2 className="font-serif text-xl text-brand-text mb-3">Seans Öncesinde Bilinmesi Gerekenler</h2>
                <p className="text-brand-text-secondary leading-relaxed">{service.content.beforeSession}</p>
              </div>

              {/* Denizli advantage */}
              <div>
                <h2 className="font-serif text-2xl text-brand-text mb-4">Denizli&apos;de Evde Masaj Avantajı</h2>
                <p className="text-brand-text-secondary leading-relaxed">{service.content.denizliAdvantage}</p>
              </div>

              {/* Why Hurrem */}
              <div>
                <h2 className="font-serif text-2xl text-brand-text mb-5">Neden Hürrem Premium?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-brand-text-secondary text-sm leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Who is it for */}
              <div className="bg-brand-dark p-6">
                <h3 className="font-serif text-lg text-brand-cream-light mb-4">Kimler Tercih Edebilir?</h3>
                <ul className="space-y-2.5">
                  {service.whoFor.map((w, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-brand-cream/60">
                      <span className="text-brand-gold mt-0.5 flex-shrink-0">·</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price info */}
              <div className="border border-brand-gold/30 p-6">
                <h3 className="font-serif text-lg text-brand-text mb-3">Fiyat Bilgisi</h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                  Fiyat ve müsaitlik bilgisi için WhatsApp üzerinden bize ulaşın.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-brand-gold text-brand-dark text-sm font-medium py-3 hover:bg-brand-gold-light transition-colors"
                >
                  Fiyat Al
                </a>
              </div>

              {/* Contact info */}
              <div className="bg-brand-cream p-6">
                <h3 className="font-serif text-lg text-brand-text mb-4">İletişim</h3>
                <div className="space-y-3">
                  <p className="text-sm text-brand-text-secondary">
                    <span className="block text-xs text-brand-gold uppercase tracking-wider mb-1">Telefon</span>
                    <a href={siteConfig.phoneTel} className="hover:text-brand-text transition-colors">{siteConfig.phone}</a>
                  </p>
                  <p className="text-sm text-brand-text-secondary">
                    <span className="block text-xs text-brand-gold uppercase tracking-wider mb-1">Çalışma Saatleri</span>
                    {siteConfig.workingHours.full}
                  </p>
                  <p className="text-sm text-brand-text-secondary">
                    <span className="block text-xs text-brand-gold uppercase tracking-wider mb-1">Hizmet Bölgesi</span>
                    {siteConfig.address.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="container-custom max-w-3xl">
          <h2 className="font-serif text-3xl text-brand-text font-light mb-8">
            {service.name} Hakkında Sık Sorulanlar
          </h2>
          <FAQAccordion items={serviceFAQ} />
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <h2 className="font-serif text-2xl text-brand-text font-light mb-8">
            Diğer Masaj Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group block bg-white border border-brand-text/8 hover:border-brand-gold/40 p-5 transition-all duration-300"
              >
                <h3 className="font-serif text-lg text-brand-text group-hover:text-brand-gold transition-colors mb-2">
                  {s.name}
                </h3>
                <p className="text-sm text-brand-text-secondary line-clamp-2">{s.shortDescription}</p>
                <p className="text-xs text-brand-gold mt-3">Detayları İncele →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-dark text-center">
        <div className="container-custom max-w-xl">
          <h2 className="font-serif text-3xl text-brand-cream-light font-light mb-4">
            {service.name} Randevusu Almak İster misiniz?
          </h2>
          <p className="text-brand-cream/60 mb-8">
            Müsaitlik ve fiyat bilgisi için WhatsApp üzerinden bize ulaşın.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-medium px-8 py-4 text-sm hover:bg-brand-gold-light transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp&apos;tan Randevu Al
          </a>
        </div>
      </section>
    </>
  );
}
