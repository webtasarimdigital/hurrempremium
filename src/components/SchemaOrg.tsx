import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";

export function SchemaOrg() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": siteConfig.url,
    name: siteConfig.brandName,
    url: siteConfig.url,
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: "Denizli",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "00:00",
      },
    ],
    priceRange: "$$",
    description: siteConfig.seo.defaultDescription,
    serviceType: "Evde Masaj Hizmeti",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Masaj Hizmetleri",
      itemListElement: services.map((s, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: s.name,
        url: `${siteConfig.url}/hizmetler/${s.slug}`,
      })),
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
