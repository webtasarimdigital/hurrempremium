import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Hürrem Premium",
  description: "Hürrem Premium gizlilik politikası. Kişisel verilerinizin nasıl işlendiğine dair bilgiler.",
  alternates: { canonical: `${siteConfig.url}/gizlilik-politikasi` },
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <section className="bg-brand-dark pt-28 pb-12">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Gizlilik Politikası" }]} dark />
          <h1 className="font-serif text-4xl text-brand-cream-light font-light mt-8">Gizlilik Politikası</h1>
        </div>
      </section>

      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg text-brand-text-secondary leading-relaxed space-y-8">
            <div>
              <p className="text-sm text-brand-text-secondary mb-8">
                Son güncelleme: Eylül 2026
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">1. Genel Bilgiler</h2>
              <p>
                {siteConfig.brandName} olarak, web sitemizi ziyaret eden ve hizmetlerimizden faydalanan kullanıcıların gizliliğine önem veriyoruz. Bu politika, hangi verilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">2. Toplanan Bilgiler</h2>
              <p>Web sitemiz aracılığıyla aşağıdaki bilgiler toplanabilir:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>İletişim formundan gönderilen isim ve telefon bilgileri</li>
                <li>WhatsApp üzerinden paylaşılan iletişim bilgileri</li>
                <li>Ziyaret istatistikleri (anonim çerez verileri)</li>
                <li>Cihaz ve tarayıcı bilgileri</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">3. Bilgilerin Kullanımı</h2>
              <p>Toplanan bilgiler yalnızca aşağıdaki amaçlarla kullanılmaktadır:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>Randevu taleplerinin karşılanması</li>
                <li>Hizmet bilgilendirmesi yapılması</li>
                <li>Web sitesi performansının iyileştirilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">4. Bilgilerin Paylaşımı</h2>
              <p>
                Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflarla paylaşılmaz. Yasal zorunluluk halleri ve mevzuattan doğan yükümlülükler bu kuralın istisnasını oluşturur.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">5. Çerezler</h2>
              <p>
                Web sitemiz ziyaret istatistiklerini takip etmek amacıyla çerez kullanabilir. Çerezler hakkında daha fazla bilgi için Çerez Politikamızı inceleyebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">6. Güvenlik</h2>
              <p>
                Kişisel verilerinizin güvenliği için gerekli teknik ve idari önlemler alınmaktadır. Ancak internet üzerinden yapılan iletişimlerin yüzde yüz güvenli olduğu garanti edilemez.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">7. İletişim</h2>
              <p>
                Gizlilik politikası hakkında sorularınız için bize ulaşabilirsiniz:
              </p>
              <div className="mt-3 text-sm space-y-1">
                <p><strong>İşletme:</strong> {siteConfig.brandName}</p>
                <p><strong>E-posta:</strong> <a href={siteConfig.emailHref} className="text-brand-gold hover:underline">{siteConfig.email}</a></p>
                <p><strong>Telefon:</strong> <a href={siteConfig.phoneTel} className="text-brand-gold hover:underline">{siteConfig.phone}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
