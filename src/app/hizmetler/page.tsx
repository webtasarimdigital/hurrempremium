import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Hizmetler | Hürrem Premium",
  description:
    "Hürrem Premium'un sunduğu masaj hizmetleri: Klasik Masaj, Badi Masaj, Soft Masaj, Aroma Terapi, Sultan Masajı, Mix Masaj, Hürrem Masajı ve Tai Masajı. Denizli evde masaj.",
  alternates: {
    canonical: `${siteConfig.url}/hizmetler`,
  },
  openGraph: {
    title: "Hizmetler | Hürrem Premium",
    description: "Denizli'de evde masaj hizmetlerimizi inceleyin. WhatsApp'tan randevu alın.",
    url: `${siteConfig.url}/hizmetler`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hürrem Premium Masaj Hizmetleri",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `${siteConfig.url}/hizmetler/${s.slug}`,
  })),
};

export default function HizmetlerPage() {
  const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-dark pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Hizmetler" }]} dark />
          <div className="mt-8 max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-cream-light font-light mb-5">
              Masaj Hizmetlerimiz
            </h1>
            <p className="text-brand-cream/60 leading-relaxed text-lg">
              Denizli'de evde sunduğumuz 8 farklı masaj türünü inceleyin. Size uygun olanı seçin, müsaitlik ve fiyat için WhatsApp üzerinden bize ulaşın.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group bg-white border border-brand-text/8 hover:border-brand-gold/40 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 bg-brand-brown overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=70&auto=format&fit=crop`}
                    alt={`${service.name} - Denizli evde masaj hizmeti`}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={208}
                  />
                  <div className="absolute inset-0 bg-brand-dark/25" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-xs text-brand-gold bg-brand-dark/70 px-2.5 py-1 tracking-wider uppercase">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-serif text-2xl text-brand-text font-medium mb-2">
                    {service.name}
                  </h2>
                  <p className="text-sm text-brand-gold mb-3 font-sans">{service.tagline}</p>
                  <p className="text-sm text-brand-text-secondary leading-relaxed mb-6 flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Benefits preview */}
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                        <span className="text-brand-gold mt-0.5 flex-shrink-0">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2.5 mt-auto">
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      className="block text-center text-sm border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-colors py-3 font-medium"
                    >
                      Detayları İncele
                    </Link>
                    <a
                      href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm bg-brand-gold text-brand-dark hover:bg-brand-gold-light transition-colors py-3 font-medium"
                    >
                      WhatsApp&apos;tan Bilgi Al
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-center">
        <div className="container-custom max-w-xl">
          <h2 className="font-serif text-3xl text-brand-cream-light font-light mb-4">
            Hangi Masaj Size Uygun?
          </h2>
          <p className="text-brand-cream/60 mb-8 leading-relaxed">
            Emin değilseniz bize mesaj atın. Size en uygun seçeneği birlikte belirleriz.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-medium px-8 py-4 text-sm hover:bg-brand-gold-light transition-colors"
          >
            WhatsApp&apos;tan Bilgi Al
          </a>
        </div>
      </section>
    </>
  );
}
