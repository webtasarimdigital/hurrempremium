import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Çerez Politikası | Hürrem Premium",
  description: "Hürrem Premium çerez politikası. Web sitemizde kullanılan çerezler ve tercihinizi yönetme.",
  alternates: { canonical: `${siteConfig.url}/cerez-politikasi` },
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <section className="bg-brand-dark pt-28 pb-12">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Çerez Politikası" }]} dark />
          <h1 className="font-serif text-4xl text-brand-cream-light font-light mt-8">Çerez Politikası</h1>
        </div>
      </section>

      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom max-w-3xl">
          <div className="prose text-brand-text-secondary leading-relaxed space-y-8">
            <p className="text-sm">Son güncelleme: Eylül 2026</p>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">Çerez Nedir?</h2>
              <p>
                Çerezler, web siteleri tarafından tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Web sitesinin daha iyi çalışmasını sağlamak ve ziyaretçi deneyimini iyileştirmek için kullanılırlar.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">Kullandığımız Çerez Türleri</h2>

              <h3 className="font-serif text-xl text-brand-text mb-3">Zorunlu Çerezler</h3>
              <p>
                Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler devre dışı bırakılamaz.
              </p>

              <h3 className="font-serif text-xl text-brand-text mt-5 mb-3">Analitik Çerezler</h3>
              <p>
                Ziyaretçilerin web sitemizle nasıl etkileşim kurduğunu anlamak için kullanılır. Bu veriler anonim olarak toplanır ve site performansını iyileştirmemize yardımcı olur. Google Analytics gibi üçüncü taraf araçlar bu amaçla kullanılabilir.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">Çerez Tercihlerinizi Yönetme</h2>
              <p>
                Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz. Çerezleri devre dışı bırakmak bazı site özelliklerinin çalışmamasına neden olabilir. Tarayıcınızın yardım bölümünden çerez yönetimi hakkında bilgi alabilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">Üçüncü Taraf Çerezleri</h2>
              <p>
                Web sitemiz Google Analytics ve benzeri üçüncü taraf hizmetler kullanabilir. Bu hizmetlerin kendi çerez politikaları bulunmaktadır.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">İletişim</h2>
              <p>Çerez politikası hakkında sorularınız için:</p>
              <div className="mt-3 text-sm space-y-1">
                <p><strong>E-posta:</strong> <a href={siteConfig.emailHref} className="text-brand-gold hover:underline">{siteConfig.email}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
