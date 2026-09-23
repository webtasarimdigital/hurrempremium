import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "İletişim | Hürrem Premium",
  description:
    "Hürrem Premium ile iletişime geçin. Denizli evde masaj randevusu için WhatsApp veya telefon ile bize ulaşabilirsiniz.",
  alternates: {
    canonical: `${siteConfig.url}/iletisim`,
  },
  openGraph: {
    title: "İletişim | Hürrem Premium",
    description: "Denizli evde masaj randevusu için WhatsApp veya telefon ile bize ulaşın.",
    url: `${siteConfig.url}/iletisim`,
  },
};
