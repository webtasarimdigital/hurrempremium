import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-cream/70">
      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="font-serif text-2xl font-medium tracking-widest text-brand-gold-light block leading-none">
                HÜRREM
              </span>
              <span className="text-[9px] tracking-[0.35em] text-brand-gold/60 font-sans uppercase block mt-0.5">
                PREMIUM
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-brand-cream/50 max-w-xs">
              Denizli'de evinizin konforunda profesyonel masaj hizmeti. Farklı masaj seçenekleri, kolay WhatsApp randevusu.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-brand-gold/30 text-brand-gold/60 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-base text-brand-cream/80 mb-5 tracking-wide">Sayfalar</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hizmetler", label: "Hizmetler" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/sss", label: "Sık Sorulan Sorular" },
                { href: "/iletisim", label: "İletişim" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-cream/50 hover:text-brand-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base text-brand-cream/80 mb-5 tracking-wide">Masaj Hizmetleri</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-sm text-brand-cream/50 hover:text-brand-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base text-brand-cream/80 mb-5 tracking-wide">İletişim</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-xs text-brand-gold/60 tracking-widest uppercase mb-1">Telefon</p>
                <a
                  href={siteConfig.phoneTel}
                  className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <p className="text-xs text-brand-gold/60 tracking-widest uppercase mb-1">WhatsApp</p>
                <a
                  href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
                >
                  {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <p className="text-xs text-brand-gold/60 tracking-widest uppercase mb-1">E-posta</p>
                <a
                  href={siteConfig.emailHref}
                  className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="text-xs text-brand-gold/60 tracking-widest uppercase mb-1">Adres</p>
                <p className="text-sm text-brand-cream/60">{siteConfig.address.full}</p>
              </li>
              <li>
                <p className="text-xs text-brand-gold/60 tracking-widest uppercase mb-1">Çalışma Saatleri</p>
                <p className="text-sm text-brand-cream/60">{siteConfig.workingHours.full}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="border-t border-brand-gold/15" />

      {/* Bottom bar */}
      <div className="container-custom py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-cream/30 text-center sm:text-left">
            © {currentYear} {siteConfig.brandName}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-5">
            {[
              { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
              { href: "/kvkk", label: "KVKK" },
              { href: "/cerez-politikasi", label: "Çerez Politikası" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-brand-cream/30 hover:text-brand-gold/60 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
