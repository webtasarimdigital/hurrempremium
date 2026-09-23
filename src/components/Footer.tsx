import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b0d12] text-white/70 border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo variant="light" />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mt-2">
              Denizli&apos;de seçkin masaj ve terapi seansları. Profesyonel dokunuşlar, kusursuz hijyen ve huzurlu bir atmosfer ile günün yorgunluğunu atın.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Hızlı Menü</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hizmetler", label: "Tüm Hizmetler" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/sss", label: "Sık Sorulan Sorular" },
                { href: "/iletisim", label: "İletişim & Randevu" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-pink-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Masaj Türleri</h3>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-sm text-white/70 hover:text-pink-300 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">İletişim & Konum</h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <span className="block text-xs font-bold text-pink-300 uppercase tracking-wider">Telefon</span>
                <a href={siteConfig.phoneTel} className="text-white/80 hover:text-white font-semibold">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold text-pink-300 uppercase tracking-wider">WhatsApp</span>
                <a
                  href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white font-semibold"
                >
                  {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold text-pink-300 uppercase tracking-wider">Çalışma Saatleri</span>
                <span className="text-white/70">{siteConfig.workingHours.full}</span>
              </li>
              <li>
                <span className="block text-xs font-bold text-pink-300 uppercase tracking-wider">Bölge</span>
                <span className="text-white/70">{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} {siteConfig.brandName}. Tüm hakları saklıdır.</p>
          <div className="flex gap-5">
            <Link href="/gizlilik-politikasi" className="hover:text-white/70">Gizlilik Politikası</Link>
            <Link href="/kvkk" className="hover:text-white/70">KVKK</Link>
            <Link href="/cerez-politikasi" className="hover:text-white/70">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
