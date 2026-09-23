export const siteConfig = {
  brandName: "Hürrem Premium",
  tagline: "Denizli'de Premium Evde Masaj Deneyimi",
  description:
    "Denizli'de evde masaj hizmeti için Hürrem Premium ile iletişime geçin. Masaj seçenekleri, müsaitlik ve randevu için WhatsApp'tan bilgi alın.",
  url: "https://hurrempremium.com",

  phone: "0552 122 39 98",
  phoneInternational: "+905521223998",
  phoneTel: "tel:+905521223998",

  whatsapp: "0552 122 39 98",
  whatsappNumber: "905521223998",
  whatsappUrl: "https://wa.me/905521223998",
  whatsappDefaultMessage:
    "Merhaba Hürrem Premium, Denizli evde masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",

  email: "premiumhurrem@gmail.com",
  emailHref: "mailto:premiumhurrem@gmail.com",

  address: {
    street: "Asmalıevler Mahallesi",
    city: "Denizli",
    full: "Asmalıevler Mahallesi, Denizli",
    serviceArea: "Denizli",
  },

  workingHours: {
    days: "Her gün",
    hours: "12:00 – 00:00",
    full: "Her gün 12:00 – 00:00",
  },

  social: {
    whatsapp: "https://wa.me/905521223998",
  },

  seo: {
    titleTemplate: "%s | Hürrem Premium",
    defaultTitle: "Denizli Evde Masaj | Hürrem Premium",
    defaultDescription:
      "Denizli'de evde masaj hizmeti için Hürrem Premium ile iletişime geçin. Masaj seçenekleri, müsaitlik ve randevu için WhatsApp'tan bilgi alın.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
