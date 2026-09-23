import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Hürrem Premium",
  description: "Hürrem Premium KVKK (Kişisel Verilerin Korunması Kanunu) aydınlatma metni.",
  alternates: { canonical: `${siteConfig.url}/kvkk` },
};

export default function KVKKPage() {
  return (
    <>
      <section className="bg-brand-dark pt-28 pb-12">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "KVKK Aydınlatma Metni" }]} dark />
          <h1 className="font-serif text-4xl text-brand-cream-light font-light mt-8">
            KVKK Aydınlatma Metni
          </h1>
        </div>
      </section>

      <section className="section-padding bg-brand-cream-light">
        <div className="container-custom max-w-3xl">
          <div className="prose text-brand-text-secondary leading-relaxed space-y-8">
            <p className="text-sm text-brand-text-secondary">Son güncelleme: Eylül 2026</p>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">1. Veri Sorumlusu</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket eden {siteConfig.brandName} olarak, kişisel verilerinizin güvenliğine ve gizliliğine büyük önem veriyoruz.
              </p>
              <div className="mt-3 text-sm space-y-1 bg-brand-cream p-4">
                <p><strong>İşletme Adı:</strong> {siteConfig.brandName}</p>
                <p><strong>Adres:</strong> {siteConfig.address.full}</p>
                <p><strong>E-posta:</strong> {siteConfig.email}</p>
                <p><strong>Telefon:</strong> {siteConfig.phone}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">2. İşlenen Kişisel Veriler</h2>
              <p>Sunduğumuz hizmetler kapsamında aşağıdaki kişisel veriler işlenebilmektedir:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>Ad ve soyad</li>
                <li>Telefon numarası</li>
                <li>Adres bilgisi (hizmet sağlanabilmesi için)</li>
                <li>İletişim kayıtları (WhatsApp mesajları)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>Randevu taleplerinin karşılanması ve hizmet sunulması</li>
                <li>Müşteri iletişiminin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">4. Kişisel Verilerin Aktarılması</h2>
              <p>
                Kişisel verileriniz, açık rızanız olmaksızın yurt içinde veya yurt dışında üçüncü taraflara aktarılmamaktadır. Yasal zorunluluk halleri bu kuralın istisnasını oluşturabilir.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
              <p>
                Kişisel verileriniz; web sitesi iletişim formu, WhatsApp mesajları ve telefon görüşmeleri aracılığıyla toplanmaktadır. Hukuki dayanak olarak sözleşmenin kurulması ve ifası, meşru menfaat ve yasal yükümlülükler esas alınmaktadır.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">6. Haklarınız</h2>
              <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>İşleme itiraz etme</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brand-text mb-4">7. İletişim</h2>
              <p>
                KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
              </p>
              <div className="mt-3 text-sm space-y-1">
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
