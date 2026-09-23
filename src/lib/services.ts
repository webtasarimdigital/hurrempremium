export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  shortDescription: string;
  description: string;
  whatsappMessage: string;
  benefits: string[];
  whoFor: string[];
  duration: string;
  image: string;
  seo: {
    title: string;
    description: string;
    h1: string;
  };
  content: {
    whatIsIt: string;
    sessionDetails: string;
    beforeSession: string;
    denizliAdvantage: string;
  };
}

export const services: Service[] = [
  {
    slug: "klasik-masaj",
    name: "Klasik Masaj",
    shortName: "Klasik",
    image: "/images/klasik-masaj.webp",
    tagline: "Günün yorgunluğunu atmak için en kadim yöntem",
    shortDescription:
      "Tüm vücudu kapsayan, kas gevşemesini ve kan dolaşımını desteklemeye yönelik profesyonel masaj uygulaması.",
    description:
      "Klasik masaj, yüzyıllardır uygulanan geleneksel tekniklerle kas ve doku gevşemesini hedefleyen kapsamlı bir masaj yöntemidir. Gün sonunda biriken gerginliği azaltmaya yardımcı olur.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Klasik Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Kas gevşemesine ve rahatlamaya yardımcı olur",
      "Kan dolaşımını desteklemeye katkı sağlar",
      "Günün yorgunluğunu hafifletir",
      "Bütünsel rahatlama ve dinginlik sunar",
      "Boyun ve sırt bölgesindeki gerginliği azaltır",
    ],
    whoFor: [
      "Yoğun tempodan bunalmış bireyler",
      "Masa başında uzun süre çalışanlar",
      "Genel rahatlama ve dinlenme arayanlar",
      "Masaja yeni başlayanlar",
      "Düzenli kişisel bakımına özen gösterenler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Klasik Masaj | Hürrem Premium",
      description:
        "Denizli'de profesyonel klasik masaj seansları. Kas gevşemesi ve derin rahatlama için WhatsApp'tan hemen randevu alın.",
      h1: "Denizli Klasik Masaj Terapisi",
    },
    content: {
      whatIsIt:
        "Klasik masaj, efloraj, petrisaj, friksyon ve tapotman gibi temel tekniklerin harmanlandığı köklü bir masaj yöntemidir. Kas dokusunun gevşemesine, kan dolaşımının hızlanmasına ve genel huzur hissinin artmasına katkıda bulunur. Uzun ve akıcı hareketlerden oluşan bu uygulama, günlük stres ve yorgunluktan arınmak isteyenler için mükemmel bir tercihtir.",
      sessionDetails:
        "Seans öncesinde terapistiniz ile kısa bir ön görüşme yapılarak özellikle hangi kas gruplarına yoğunlaşılacağı belirlenir. Sırt, omuz, boyun, bacak ve kol bölgeleri özenle çalışılır. Baskı seviyesi tamamen sizin konforunuza göre ayarlanır.",
      beforeSession:
        "Seans öncesinde hafif beslenmeniz ve bol su tüketmeniz önerilir. Seans sonrasında kendinize kısa bir dinlenme süresi ayırmak masajın etkisini artıracaktır.",
      denizliAdvantage:
        "Denizli'de Hürrem Premium kalitesiyle sunulan klasik masaj hizmeti; sakin, hijyenik ve özel bir atmosferde sunulmaktadır.",
    },
  },
  {
    slug: "badi-masaj",
    name: "Badi Masaj",
    shortName: "Badi",
    image: "/images/medikal-masaj.webp",
    tagline: "Derin doku odaklı yoğun ve rahatlatıcı çalışma",
    shortDescription:
      "Daha derin kas katmanlarına yönelik, özel tekniklerle uygulanan etkili masaj yöntemi.",
    description:
      "Badi masaj, kas dokusunun derin katmanlarını hedefleyen, belirli baskı noktalarına odaklanarak uygulanan profesyonel bir tekniktir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Badi Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Derin kas liflerine yönelik çalışma",
      "Yoğun gerginlik ve tutulmaları hafifletir",
      "Bölgesel odaklanma ve rahatlama imkânı",
      "Uzun süreli bedensel hafiflik hissi",
    ],
    whoFor: [
      "Yoğun fiziksel aktivite veya spor yapanlar",
      "Kronik kas tutulması yaşayanlar",
      "Daha güçlü ve derin baskı arayanlar",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Badi Masaj | Hürrem Premium",
      description:
        "Denizli'de derin doku ve badi masaj hizmeti. Yoğun rahatlama ve profesyonel seans için WhatsApp'tan bilgi alın.",
      h1: "Denizli Badi Masaj Deneyimi",
    },
    content: {
      whatIsIt:
        "Badi masaj, yüzeysel dokunuşların ötesine geçerek kasların derinine nüfuz eden baskı tekniklerini içerir. Kas düğümlerinin açılmasına, dokuların gevşemesine ve hareket kabiliyetinin artmasına yardımcı olur.",
      sessionDetails:
        "Baskı yoğunluğu kişiye özel ayarlanır. Sırt, bel, omuz ve bacak bölgelerine yoğunlaşılır. İhtiyacınıza uygun aromatik ve doğal masaj yağları eşliğinde uygulanır.",
      beforeSession:
        "Seans öncesi bol su tüketilmesi ve ağır yemeklerden kaçınılması önerilir.",
      denizliAdvantage:
        "Denizli'de uzman eller tarafından uygulanan bu masajla bedeninizi yeniden enerjiyle doldurabilirsiniz.",
    },
  },
  {
    slug: "soft-masaj",
    name: "Soft Masaj",
    shortName: "Soft",
    image: "/images/soft-masaj.webp",
    tagline: "Nazik dokunuşlarla derin dinginlik",
    shortDescription:
      "Hafif ve dinlendirici dokunuşlarla uygulanan, zihinsel ve bedensel rahatlama odaklı masaj.",
    description:
      "Soft masaj, yumuşak ve akıcı hareketlerle gerçekleştirilen, sinir sistemini sakinleştirmeyi ve bedeni tamamen dinlendirmeyi amaçlayan özel bir tekniktir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Soft Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Nazik ve huzur veren dinlendirici atmosfer",
      "Zihinsel dinginlik ve stresin hafifletilmesi",
      "Hassas cilt yapısına tam uyum",
      "Kaliteli ve kesintisiz uykuya destek",
    ],
    whoFor: [
      "Ağır baskıdan hoşlanmayanlar",
      "Zihinsel yorgunluk ve stres yaşayanlar",
      "Hafif ve dinlendirici bir dokunuş arayanlar",
    ],
    duration: "45 – 75 dakika",
    seo: {
      title: "Denizli Soft Masaj | Hürrem Premium",
      description:
        "Denizli'de yumuşak ve dinlendirici soft masaj terapisi. Stresten arınmak ve huzur bulmak için WhatsApp'tan randevu alın.",
      h1: "Denizli Soft Masaj & Dinginlik Terapisi",
    },
    content: {
      whatIsIt:
        "Soft masaj, sert müdahalelerden uzak, ritmik ve hafif dokunuşlarla bedenin enerji dengesini destekleyen, tam anlamıyla gevşeme odaklı bir masaj türüdür.",
      sessionDetails:
        "Yumuşak ritimlerle tüm bedene hafif basınç uygulanır. Rahatlatıcı müzik ve hafif aromatik kokular eşliğinde sunulur.",
      beforeSession:
        "Seansa zihninizi boşaltarak gelmeniz ve kendinizi müziğin ritmine bırakmanız tavsiye edilir.",
      denizliAdvantage:
        "Günün yoğun temposundan sıyrılıp kendinize ayıracağınız en dingin zaman dilimi için Denizli'de Hürrem Premium yanınızda.",
    },
  },
  {
    slug: "aroma-terapi-masaji",
    name: "Aroma Terapi Masajı",
    shortName: "Aroma Terapi",
    image: "/images/aroma-terapi.webp",
    tagline: "Doğal bitki özleri eşliğinde duyusal yenilenme",
    shortDescription:
      "Özel bitkisel esansiyel yağların rahatlatıcı kokusu ve yumuşak masaj tekniklerinin muazzam uyumu.",
    description:
      "Aroma terapi masajı, doğal bitki özlerinden elde edilen esansiyel yağlarla uygulanan, hem bedensel hem de ruhsal denge sağlayan bütüncül bir spa deneyimidir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Aroma Terapi Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Doğal esansiyel yağların dinlendirici etkisi",
      "Cildi derinlemesine nemlendirir ve besler",
      "Duyusal rahatlama ve ferahlık sağlar",
      "Zihinsel odaklanmayı ve sakinliği artırır",
    ],
    whoFor: [
      "Aromatik kokuları ve doğal yağları sevenler",
      "Ruhsal ve bedensel bütünlük arayanlar",
      "Cildine ipeksi bir dokunuş kazandırmak isteyenler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Aroma Terapi Masajı | Hürrem Premium",
      description:
        "Denizli'de doğal esansiyel yağlarla aroma terapi masajı. Ruhunuzu dinlendirecek özel seans için WhatsApp'tan iletişime geçin.",
      h1: "Denizli Aroma Terapi Masajı",
    },
    content: {
      whatIsIt:
        "Lavanta, portakal çiçeği, okaliptüs gibi saf bitki yağlarının harmanlandığı bu masaj, kokuların duyular üzerindeki etkisiyle kasların gevşemesini bir araya getirir.",
      sessionDetails:
        "Seans öncesi koku tercihiniz belirlenir ve yağlar vücut sıcaklığına getirilerek özel masaj hareketleriyle cilde yedirilir.",
      beforeSession:
        "Alerjik hassasiyetiniz varsa seans başında terapistinize belirtmeniz rica olunur.",
      denizliAdvantage:
        "Denizli'de en kaliteli doğal yağlarla hazırlanan seanslarımız, kendinizi özel hissetmenizi sağlar.",
    },
  },
  {
    slug: "sultan-masaji",
    name: "Sultan Masajı",
    shortName: "Sultan",
    image: "/images/sultan-masaj.webp",
    tagline: "Kapsamlı ve saraylara layık VIP masaj",
    shortDescription:
      "Birden fazla masaj tekniğinin harmanlandığı, uzun süreli ve ayrıcalıklı masaj seansı.",
    description:
      "Sultan masajı, geleneksel tekniklerin modern rahatlama ritüelleriyle birleştirildiği lüks ve kapsamlı bir terapidir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Sultan Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "En kapsamlı ve uzun süreli terapi deneyimi",
      "Çoklu tekniklerin mükemmel uyumu",
      "Ayrıcalıklı ve yüksek konforlu seans",
      "Tamamen yenilenmiş ve canlanmış hissetme",
    ],
    whoFor: [
      "Kendine en lüks masaj deneyimini hediye etmek isteyenler",
      "Uzun ve kesintisiz bakım arayanlar",
      "Özel günlerde ayrıcalıklı bir seans tercih edenler",
    ],
    duration: "90 – 120 dakika",
    seo: {
      title: "Denizli Sultan Masajı | Hürrem Premium",
      description:
        "Denizli'de VIP sultan masajı deneyimi. Kapsamlı ve ayrıcalıklı seanslar için WhatsApp'tan randevu alın.",
      h1: "Denizli Sultan Masajı & VIP Terapi",
    },
    content: {
      whatIsIt:
        "Sultan Masajı, birden çok tekniği tek bir akışta birleştiren, tepeden tırnağa tüm bedeni şımartan özel bir masaj ritüelidir.",
      sessionDetails:
        "Uzun süreli bu seansta vücudun her noktası titizlikle işlenir, özel yağlar ve teknik geçişler uygulanır.",
      beforeSession:
        "Seans uzun süreceği için kendinize acele etmeyeceğiniz geniş bir vakit ayırmanız önerilir.",
      denizliAdvantage:
        "Denizli'de sultanlara yakışır konfor ve ihtimam Hürrem Premium'da sizi bekliyor.",
    },
  },
  {
    slug: "mix-masaj",
    name: "Mix Masaj",
    shortName: "Mix",
    image: "/images/mix-masaj.webp",
    tagline: "İhtiyacınıza göre kişiselleştirilmiş teknik kombinasyonu",
    shortDescription:
      "Klasik, aroma, derin doku gibi farklı yöntemlerin vücudunuzun ihtiyacına göre harmanlandığı seans.",
    description:
      "Mix masaj, tek bir ekole bağlı kalmadan sizin o anki yorgunluk ve ihtiyaçlarınıza göre tasarlanan hibrit bir masaj seansıdır.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Mix Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Tamamen size özel kurgulanan seans planı",
      "Farklı bölgelere özel teknik uygulama",
      "Yüksek memnuniyet ve odaklanmış rahatlama",
    ],
    whoFor: [
      "Birden fazla masaj türünün faydasını tek seansta isteyenler",
      "Belirli bölgelerinde farklı yoğunluk talep edenler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Mix Masaj | Hürrem Premium",
      description:
        "Denizli'de kişiye özel mix masaj seansı. Farklı tekniklerin harmanlandığı eşsiz rahatlama için hemen yazın.",
      h1: "Denizli Kişiye Özel Mix Masaj",
    },
    content: {
      whatIsIt:
        "Mix masaj, uzman terapistin değerlendirmesi ve sizin talepleriniz doğrultusunda en verimli tekniklerin bir araya getirilmesidir.",
      sessionDetails:
        "Sırt bölgesine daha yoğun, omuz ve baş bölgesine daha sakin teknikler gibi kişiye özel kombinasyonlar uygulanabilir.",
      beforeSession:
        "Hangi bölgelerinizin daha çok rahatlamaya ihtiyacı olduğunu seans öncesinde belirtmeniz yeterlidir.",
      denizliAdvantage:
        "Denizli'de ezber kalıplardan uzak, tam size hitap eden bir masaj için en popüler tercihtir.",
    },
  },
  {
    slug: "hurrem-masaji",
    name: "Hürrem Masajı",
    shortName: "Hürrem İmza",
    image: "/images/vip-section-bg.webp",
    tagline: "Markamızın imza masaj ritüeli",
    shortDescription:
      "Hürrem Premium'un özel dokunuşları ve ayrıcalıklı konseptiyle hazırlanan imza masaj seansı.",
    description:
      "Hürrem Masajı, markamızın vizyonunu yansıtan, hem bedeni hem ruhu tazeleyen en özel ve seçkin masaj uygulamamızdır.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Hürrem Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Hürrem Premium'a özel imza akış ve teknikler",
      "Özel aromatik yağ esansları",
      "Üst düzey konfor ve kusursuz rahatlama",
    ],
    whoFor: [
      "Fark yaratan bir deneyim arayanlar",
      "Hürrem Premium kalitesini tam anlamıyla yaşamak isteyenler",
    ],
    duration: "75 – 105 dakika",
    seo: {
      title: "Denizli Hürrem Masajı | Hürrem Premium",
      description:
        "Denizli'de Hürrem Premium'un imza masajı. Ayrıcalıklı seans ve VIP konsept için WhatsApp'tan bilgi alın.",
      h1: "Denizli Hürrem İmza Masajı",
    },
    content: {
      whatIsIt:
        "Hürrem Masajı, özel seçilmiş yağlar ve terapistimizin akıcı ritimleri eşliğinde günün tüm yükünü geride bırakmanızı sağlayan imza terapimizdir.",
      sessionDetails:
        "Baştan ayağa özel enerji akışıyla kurgulanmış seansımızda kendinizi adeta yeniden doğmuş hissedeceksiniz.",
      beforeSession:
        "Randevu saatinizden birkaç dakika önce sakinleşip seansa hazırlanmanız önerilir.",
      denizliAdvantage:
        "Denizli'de başka hiçbir yerde bulamayacağınız bu özel imza masajı deneyimlemek için bize ulaşın.",
    },
  },
  {
    slug: "tai-masaji",
    name: "Tai Masajı",
    shortName: "Tai",
    image: "/images/spa-relax-green.webp",
    tagline: "Geleneksel Tayland esneme ve basınç tekniği",
    shortDescription:
      "Vücuttaki enerji hatlarını açmayı ve esnekliği artırmayı hedefleyen aktif ve ritmik masaj.",
    description:
      "Tai masajı, pasif esneme hareketleri ve noktasal baskılarla uygulanan, bedeni canlandıran geleneksel bir Uzak Doğu masajıdır.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Tai Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Eklem hareketliliğini ve esnekliği artırır",
      "Enerji kanallarını açarak canlılık verir",
      "Duruş bozukluklarını ve kas gerginliklerini rahatlatır",
    ],
    whoFor: [
      "Aktif, esnetici ve canlandırıcı masaj isteyenler",
      "Vücudunu esnetmek ve hafiflemek isteyenler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Tai Masajı | Hürrem Premium",
      description:
        "Denizli'de geleneksel Tai masajı deneyimi. Esneklik ve canlılık kazandıran profesyonel seans için hemen ulaşın.",
      h1: "Denizli Geleneksel Tai Masajı",
    },
    content: {
      whatIsIt:
        "Tai masajı, ritmik baskı ve yoga benzeri pasif esneme hareketlerini birleştiren, yağsız ve rahat kıyafetlerle de uygulanabilen dinamik bir masaj türüdür.",
      sessionDetails:
        "Terapist beden ağırlığını kullanarak belirli enerji meridyenleri boyunca baskı ve germe uygular.",
      beforeSession:
        "Rahat ve esnek kıyafetler tercih etmeniz tavsiye edilir.",
      denizliAdvantage:
        "Denizli'de uzman ellerde Tai masajının getirdiği eşsiz canlılığı hissedin.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}
