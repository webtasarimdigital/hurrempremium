export const siteConfig = {
  brandName: "Hürrem Premium",
  tagline: "Denizli'de Premium Masaj & Spa Deneyimi",
  description:
    "Denizli'de profesyonel masaj ve spa terapileri için Hürrem Premium ile iletişime geçin. Masaj seçenekleri, müsaitlik ve randevu için WhatsApp'tan bilgi alın.",
  url: "https://hurrempremium.com",

  phone: "0552 122 39 98",
  phoneInternational: "+905521223998",
  phoneTel: "tel:+905521223998",

  whatsapp: "0552 122 39 98",
  whatsappNumber: "905521223998",
  whatsappUrl: "https://wa.me/905521223998",
  whatsappDefaultMessage:
    "Merhaba Hürrem Premium, Denizli masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",

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
    defaultTitle: "Denizli Masaj & VIP Spa Terapileri | Hürrem Premium",
    defaultDescription:
      "Denizli'de seçkin masaj ve spa deneyimi için Hürrem Premium. Masaj seçenekleri, özel seanslar, müsaitlik ve randevu için WhatsApp'tan hemen bilgi alın.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
