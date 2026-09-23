import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function NotFound() {
  const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <section className="min-h-[100dvh] bg-brand-dark flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        <p className="font-serif text-8xl sm:text-[120px] text-brand-gold/30 font-light leading-none mb-6">
          404
        </p>
        <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-cream-light font-light mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-brand-cream/60 leading-relaxed mb-10">
          Aradığınız sayfa mevcut değil ya da taşınmış olabilir. Randevu ve bilgi almak için bize ulaşabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-medium px-7 py-4 text-sm hover:bg-brand-gold-light transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-brand-cream/30 text-brand-cream font-medium px-7 py-4 text-sm hover:bg-brand-cream/10 transition-colors"
          >
            WhatsApp&apos;tan Ulaş
          </a>
        </div>
      </div>
    </section>
  );
}
