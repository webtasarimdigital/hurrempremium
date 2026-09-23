import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import Breadcrumb from "@/components/Breadcrumb";
import { WhatsAppCTA } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Masaj Hizmetlerimiz | Hürrem Premium",
  description:
    "Hürrem Premium masaj terapileri: Klasik Masaj, Badi Masaj, Soft Masaj, Aroma Terapi, Sultan Masajı, Mix Masaj, Hürrem İmza Masajı ve Tai Masajı. Denizli masaj.",
  alternates: {
    canonical: `${siteConfig.url}/hizmetler`,
  },
  openGraph: {
    title: "Masaj Hizmetlerimiz | Hürrem Premium",
    description: "Denizli'de seçkin masaj ve spa hizmetlerimizi inceleyin. WhatsApp'tan randevu alın.",
    url: `${siteConfig.url}/hizmetler`,
  },
};

export default function HizmetlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1b0d12] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#bd0f49_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: "Hizmetler" }]} dark />
          <div className="mt-8 max-w-2xl">
            <span className="text-xs font-bold text-pink-300 tracking-widest uppercase">
              PROFESYONEL TERAPİLER
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mt-2 mb-4 leading-tight">
              Masaj Hizmetlerimiz
            </h1>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              Denizli&apos;de sunduğumuz 8 farklı masaj türünü keşfedin. Size ve vücudunuza en iyi gelecek seansı seçip WhatsApp üzerinden kolayca bilgi alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#fcf8f9]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group bg-white rounded-2xl border border-pink-100 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div
                  className="w-full h-56 bg-cover bg-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${service.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold text-white bg-[#1b0d12]/80 backdrop-blur-sm px-3 py-1 rounded-md">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {service.name}
                  </h2>
                  <p className="text-xs font-bold text-primary mb-3">{service.tagline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.shortDescription}
                  </p>

                  <ul className="flex flex-col gap-2 mb-6 border-t border-pink-50 pt-4">
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2.5 mt-auto">
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      className="block text-center text-xs font-bold py-3 rounded-xl border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      Detayları İncele →
                    </Link>
                    <WhatsAppCTA
                      message={service.whatsappMessage}
                      location="services_page"
                      variant="primary"
                      className="w-full py-3 text-xs font-bold rounded-xl"
                    >
                      WhatsApp&apos;tan Bilgi Al
                    </WhatsAppCTA>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1b0d12] text-white text-center">
        <div className="container-custom max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Hangi Masajın Size Uygun Olduğundan Emin Değil misiniz?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            WhatsApp üzerinden bize danışın. İhtiyacınıza en uygun seansı birlikte belirleyelim.
          </p>
          <WhatsAppCTA location="services_cta" variant="primary" className="h-14 px-8 text-base">
            WhatsApp ile Hemen Danışın
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
