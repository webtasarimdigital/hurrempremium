import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import { WhatsAppCTA } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Hakkımızda | Hürrem Premium",
  description:
    "Hürrem Premium hakkında bilgi edinin. Denizli'de seçkin masaj ve spa terapileri sunan markamızın yaklaşımı, değerleri ve hizmet anlayışı.",
  alternates: {
    canonical: `${siteConfig.url}/hakkimizda`,
  },
  openGraph: {
    title: "Hakkımızda | Hürrem Premium",
    description: "Denizli'de seçkin masaj hizmeti sunan Hürrem Premium hakkında bilgi edinin.",
    url: `${siteConfig.url}/hakkimizda`,
  },
};

const values = [
  {
    title: "Denizli Odaklı Hizmet",
    desc: "Hizmetimiz yalnızca Denizli'de sunulmaktadır. Yerel olmak bize odaklanma ve yüksek kaliteli seanslar sunma imkânı tanıyor.",
  },
  {
    title: "Kişiye Özel İlgi",
    desc: "Her misafirimizin ihtiyacı farklıdır. Seanslarımız sizin yorgunluk ve kas tutulması durumunuza göre şekillendirilir.",
  },
  {
    title: "Kusursuz Hijyen",
    desc: "Her seans öncesinde ekipman, ortam ve havluların hijyeni titizlikle sağlanır. Temizlik ve özen en temel önceliğimizdir.",
  },
  {
    title: "Hızlı & Kolay Randevu",
    desc: "WhatsApp üzerinden tek tıkla mesaj atabilir, güncel müsaitlik durumunu ve fiyat detaylarını anında öğrenebilirsiniz.",
  },
  {
    title: "12:00 – 00:00 Çalışma Saatleri",
    desc: "Günün yorgunluğunu dilediğiniz saatte geride bırakabilmeniz için gece saatlerine kadar kesintisiz hizmet veriyoruz.",
  },
  {
    title: "8 Farklı Masaj Seçeneği",
    desc: "Klasikten aromaterapiye, derin dokudan özel imza masajlarımıza kadar zengin bir seans yelpazesine sahibiz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1b0d12] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: "Hakkımızda" }]} dark />
          <div className="mt-8 max-w-2xl">
            <span className="text-xs font-bold text-pink-300 tracking-widest uppercase">
              VİZYONUMUZ VE DEĞERLERİMİZ
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mt-2 mb-4 leading-tight">
              Hakkımızda
            </h1>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg">
              Denizli&apos;de profesyonel masaj ve spa terapileri sunan Hürrem Premium, bedensel ve ruhsal dinlenme arayanlar için ayrıcalıklı bir adrestir.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#fcf8f9]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div
                className="w-full aspect-[4/3] rounded-2xl bg-cover bg-center shadow-xl overflow-hidden"
                style={{ backgroundImage: "url('/images/man-massage-therapy.jpg')" }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-xs uppercase mb-3">
                <span className="h-0.5 w-6 bg-primary" />
                HİKÂYEMİZ
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Denizli&apos;de Masajı <br />
                <span className="text-primary">Ayrıcalıklı Kılmak İstedik</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  Hürrem Premium, Denizli&apos;de kaliteli, hijyenik ve profesyonel bir masaj seansı arayan misafirlerimize en üst düzeyde rahatlama sağlamak amacıyla kuruldu.
                </p>
                <p>
                  Günün yorucu temposu, iş stresi ve hareketsiz yaşam kaslarda ciddi gerginliklere sebep olur. Doğru uygulanan profesyonel bir masaj seansı ise bedeni yeniler, kan dolaşımını rahatlatır ve zihinsel sakinlik kazandırır.
                </p>
                <p>
                  Hürrem Premium olarak her seansımızda müşteri memnuniyetini, titiz hijyeni ve samimi ilgiyi merkezimize alıyoruz.
                </p>
              </div>

              <div className="mt-8">
                <WhatsAppCTA location="about_page" variant="primary" className="h-14 px-8 text-base">
                  WhatsApp&apos;tan Bize Ulaşın
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1b0d12] text-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-bold text-pink-300 tracking-widest uppercase">STANDARTLARIMIZ</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Bizi Tanımlayan Değerler</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#26131a] border border-white/10 hover:border-primary/50 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
