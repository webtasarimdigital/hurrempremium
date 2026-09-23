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
    tagline: "Günün yorgunluğunu atmak için en kadim yöntem",
    shortDescription:
      "Tüm vücudu kapsayan, kas gevşemesini ve kan dolaşımını desteklemeye yönelik temel masaj uygulaması.",
    description:
      "Klasik masaj, yüzyıllardır uygulanan geleneksel tekniklerle kas ve doku gevşemesini hedefleyen kapsamlı bir masaj yöntemidir. Gün sonunda biriken gerginliği azaltmaya yardımcı olabilir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Klasik Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Kas gevşemesine yardımcı olabilir",
      "Kan dolaşımını destekleyebilir",
      "Günün yorgunluğunu azaltmaya katkı sağlayabilir",
      "Genel rahatlama odaklıdır",
      "Baş ve boyun bölgesindeki gerginliği hafifletmeye yardımcı olabilir",
    ],
    whoFor: [
      "Yoğun iş temposundan bunalmış bireyler",
      "Masa başında uzun süre çalışanlar",
      "Genel rahatlama arayanlar",
      "Masaja yeni başlayanlar",
      "Düzenli bakım isteyenler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Klasik Masaj | Hürrem Premium",
      description:
        "Denizli'de evde klasik masaj hizmeti. Kas gevşemesi ve rahatlama odaklı profesyonel uygulama. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Klasik Masaj",
    },
    content: {
      whatIsIt:
        "Klasik masaj, efloraj, petrisaj, friksyon ve tapotman gibi temel tekniklerin bir arada kullanıldığı geleneksel bir masaj yöntemidir. Bu teknikler sırayla uygulanarak kas dokusunun gevşemesine, kan dolaşımının canlanmasına ve genel rahatlama hissinin artmasına katkı sağlayabilir. Uzun ve akıcı hareketlerden oluşan bu uygulama, özellikle stresli iş hayatından ve günlük koşuşturmacadan yorgun düşmüş bireyler için tercih edilebilir bir seçenek olabilir.",
      sessionDetails:
        "Seans öncesinde kısaca konuşarak hangi bölgede yoğunlaşılacağı belirlenir. Uygulama boyun, sırt, bel, bacak ve kol bölgelerini kapsayabilir. Yoğunluk tercihinize göre ayarlanabilir. Masaj yağları kullanılır, cilt tipinize uygun tercih yapılabilir.",
      beforeSession:
        "Seans öncesinde ağır yemek yememek tercih edilir. Rahat ve gevşek kıyafetler giymeniz kolaylık sağlar. Herhangi bir sağlık durumunuz varsa önceden belirtmeniz önerilir.",
      denizliAdvantage:
        "Denizli'de evde klasik masaj hizmeti sunmamızın en büyük avantajı, masaj sonrası dinlenme sürecinizin doğrudan evinizde geçmesidir. Bir masaj salonuna gidip gelme stresi olmadan, kendi alanınızda tam anlamıyla rahatlayabilirsiniz.",
    },
  },
  {
    slug: "badi-masaj",
    name: "Badi Masaj",
    shortName: "Badi",
    tagline: "Derin doku çalışması ile yoğun rahatlama",
    shortDescription:
      "Daha derin kas katmanlarına yönelik, yoğun baskı teknikleriyle uygulanan masaj yöntemi.",
    description:
      "Badi masaj, kas dokusunun daha derin katmanlarını hedefleyen, belirli noktalara odaklanarak uygulanan bir masaj tekniğidir. Yoğunluk hissi arayanlar için tercih edilebilir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Badi Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Derin kas dokusuna yönelik çalışma",
      "Yoğun gerginlik hissini azaltmaya yardımcı olabilir",
      "Belirli bölgelere odaklanma imkânı",
      "Rahatlama ve dinginlik hissi sağlayabilir",
    ],
    whoFor: [
      "Yoğun fiziksel aktivite sonrası dinlenmek isteyenler",
      "Belirli bölgelerde yoğun gerginlik hisseden bireyler",
      "Daha derin bir masaj deneyimi arayanlar",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Badi Masaj | Hürrem Premium",
      description:
        "Denizli'de evde badi masaj hizmeti. Derin kas çalışması ile yoğun rahatlama. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Badi Masaj",
    },
    content: {
      whatIsIt:
        "Badi masaj, yüzeysel kas katmanlarının ötesine geçerek daha derin doku alanlarına yönelik çalışan bir masaj tekniğidir. Uygulayıcı, belirli bölgelerde odaklanmış baskı uygulayarak kas dokusundaki gerginliği gidermeye çalışır. Klasik masaja kıyasla daha yoğun bir his sunar ve bu yoğunluğu tercih eden bireyler için iyi bir seçenek olabilir.",
      sessionDetails:
        "Seans öncesinde hangi bölgelerde yoğunlaşılacağı belirlenir. Baskı yoğunluğu sizin tercihinize göre ayarlanabilir. Sırt, bel, boyun ve bacak bölgelerine odaklanılabilir.",
      beforeSession:
        "Bolca su içmeniz önerilir. Ağır egzersiz sonrasında kısa bir süre beklemek tercih edilebilir. Herhangi bir sağlık durumu veya hassasiyetinizi önceden belirtmeniz önerilir.",
      denizliAdvantage:
        "Denizli'de evde badi masaj hizmetimiz sayesinde, yoğun bir masaj seansının ardından doğrudan evinizin konforunda dinlenebilirsiniz. Dışarı çıkma zorunluluğu olmadan dinlenme sürecinizi tamamlayabilirsiniz.",
    },
  },
  {
    slug: "soft-masaj",
    name: "Soft Masaj",
    shortName: "Soft",
    tagline: "Nazik dokunuşlarla derin dinginlik",
    shortDescription:
      "Hafif ve nazik dokunuşlarla uygulanan, zihinsel ve bedensel rahatlama odaklı masaj yöntemi.",
    description:
      "Soft masaj, yüzeysel ve nazik dokunuşlarla gerçekleştirilen, beden üzerinde sakinleştirici bir etki bırakması hedeflenen masaj tekniğidir. Hassas cilt yapısına sahip bireyler için uygun olabilir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Soft Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Nazik ve sakinleştirici bir deneyim sunar",
      "Zihinsel rahatlama odaklıdır",
      "Hassas cilt yapısına uygun olabilir",
      "Uyku kalitesini olumlu etkileyebilir",
      "Stres azaltma odaklıdır",
    ],
    whoFor: [
      "Hassas veya duyarlı cilt yapısı olanlar",
      "Yoğun baskı istemeyenler",
      "Zihinsel rahatlama önceliği olanlar",
      "Masaj deneyimine yeni başlayanlar",
      "Gevşeme ve uyku kalitesi için masaj tercih edenler",
    ],
    duration: "45 – 75 dakika",
    seo: {
      title: "Denizli Soft Masaj | Hürrem Premium",
      description:
        "Denizli'de evde soft masaj hizmeti. Nazik dokunuşlarla zihinsel ve bedensel rahatlama. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Soft Masaj",
    },
    content: {
      whatIsIt:
        "Soft masaj, güçlü baskı yerine hafif, akıcı ve sakinleştirici dokunuşları ön planda tutan bir masaj yaklaşımıdır. Sinir sistemini sakinleştirmeye yardımcı olabilecek bu teknik, özellikle zihinsel yorgunluk veya stres hisseden bireyler için tercih edilebilir. Yoğun kas çalışması yerine genel bir rahatlama ve dinginlik hissi sunmayı amaçlar.",
      sessionDetails:
        "Hafif basınçlı, uzun ve akıcı hareketler uygulanır. Tüm vücut veya belirli bölgeler üzerinde çalışılabilir. Rahatsız edici bir his olmaksızın sakinleştirici bir deneyim sunulur.",
      beforeSession:
        "Rahat kıyafetler giymeniz tercih edilir. Seans öncesinde sakin bir ortam oluşturulabilir. Herhangi bir cilt hassasiyetiniz varsa önceden belirtmeniz önerilir.",
      denizliAdvantage:
        "Soft masaj sonrası hissedilen dinginliği evinizin kendi atmosferinde yaşamak deneyimi daha da anlamlı kılar. Denizli'de hizmet verdiğimiz için seans sonrasında doğrudan istirahat edebilirsiniz.",
    },
  },
  {
    slug: "aroma-terapi-masaji",
    name: "Aroma Terapi Masajı",
    shortName: "Aroma Terapi",
    tagline: "Doğal yağların eşliğinde bütünsel rahatlama",
    shortDescription:
      "Bitkisel esansiyel yağların nazikçe uygulanmasıyla gerçekleştirilen, koku ve dokunuşun bir araya geldiği masaj deneyimi.",
    description:
      "Aroma terapi masajı, esansiyel yağların taşıyıcı yağlarla birleştirilerek cilde uygulandığı, hem dokunuşun hem de aromaterapi kokuların bir arada sunulduğu özel bir masaj deneyimidir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Aroma Terapi Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Hem dokunuş hem de koku duyusuna hitap eder",
      "Zihinsel rahatlama odaklıdır",
      "Lavanta, bergamot gibi bitkisel yağlar kullanılabilir",
      "Sakinleştirici bir atmosfer oluşturabilir",
      "Cilt nemini destekleyebilir",
    ],
    whoFor: [
      "Bütünsel bir rahatlama deneyimi arayanlar",
      "Doğal yağlara ilgi duyanlar",
      "Stres ve zihinsel yorgunluk hisseden bireyler",
      "Aromaterapi ile tanışmak isteyenler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Aroma Terapi Masajı | Hürrem Premium",
      description:
        "Denizli'de evde aroma terapi masajı hizmeti. Esansiyel yağlar eşliğinde bütünsel rahatlama deneyimi. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Aroma Terapi Masajı",
    },
    content: {
      whatIsIt:
        "Aroma terapi masajı, bitkisel esansiyel yağların taşıyıcı yağlarla seyreltilerek cilde tatbik edildiği özel bir masaj deneyimidir. Lavanta, okaliptüs, bergamot ve gül gibi farklı aromalar farklı ruh halleri için tercih edilebilir. Koku ve dokunuşun birleşimi, daha derin bir rahatlama deneyimi sunabilir.",
      sessionDetails:
        "Tercihlerinize göre uygun esansiyel yağ seçimi yapılır. Nazik ve akıcı hareketlerle yağlar cilde işlenir. Koku seçiminde kişisel tercihleriniz ve herhangi bir alerjiniz göz önünde bulundurulur.",
      beforeSession:
        "Esansiyel yağlara karşı bilinen bir alerjiniz varsa önceden belirtmeniz önerilir. Seans sonrasında cilde sürülen yağları durulamak için tercih edebilirsiniz.",
      denizliAdvantage:
        "Aroma terapi masajının sunduğu sakin ve dingin atmosferi evinizde yaşamak deneyimi daha da kişisel kılar. Denizli'de evde aroma terapi masajı ile dışarı çıkmadan kendi huzurlu alanınızda dinlenebilirsiniz.",
    },
  },
  {
    slug: "sultan-masaji",
    name: "Sultan Masajı",
    shortName: "Sultan",
    tagline: "Kapsamlı ve özel bir masaj deneyimi",
    shortDescription:
      "Birden fazla tekniğin bir arada sunulduğu, uzun süreli ve kapsamlı masaj uygulaması.",
    description:
      "Sultan masajı, farklı masaj tekniklerini bir araya getirerek uzun ve kapsamlı bir seans sunar. Daha özel ve geniş kapsamlı bir deneyim arayanlar için tasarlanmıştır.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Sultan Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Kapsamlı ve uzun süreli bir deneyim",
      "Birden fazla teknik bir arada uygulanır",
      "Tüm vücut bütüncül olarak ele alınır",
      "Özel ve yoğun rahatlama odaklıdır",
    ],
    whoFor: [
      "Kapsamlı bir masaj deneyimi isteyenler",
      "Kendine uzun süreli zaman ayırmak isteyenler",
      "Farklı teknikleri bir arada denemek isteyenler",
      "Özel bir gün veya kaçamak arayan bireyler",
    ],
    duration: "90 – 120 dakika",
    seo: {
      title: "Denizli Sultan Masajı | Hürrem Premium",
      description:
        "Denizli'de evde sultan masajı hizmeti. Kapsamlı ve özel masaj deneyimi. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Sultan Masajı",
    },
    content: {
      whatIsIt:
        "Sultan masajı, tek bir tekniğe bağlı kalmadan farklı masaj yöntemlerini bir seans içinde harmanlayan, daha uzun süreli ve kapsamlı bir uygulamadır. Klasik teknikler, aromaterapi unsurları ve bölgesel odaklı çalışmalar bir arada sunulabilir. Kendine daha fazla zaman ayırmak ve bütünsel bir deneyim yaşamak isteyenler için tercih edilebilir.",
      sessionDetails:
        "Seans başında kısa bir değerlendirme yapılır. Tercihlerinize ve ihtiyaçlarınıza göre teknik kombinasyonu belirlenir. Uzun süreli ve akışkan bir deneyim sunulur.",
      beforeSession:
        "Uzun bir seans olduğu için rahat ve dinlendirici bir zaman seçmeniz önerilir. Seans öncesinde yeterince su içmeniz tercih edilir.",
      denizliAdvantage:
        "Uzun süreli sultan masajının ardından herhangi bir yere gitme ihtiyacı duymadan doğrudan evinizde dinlenebilmeniz bu hizmetin en büyük avantajıdır. Denizli'de hizmet verdiğimiz için tüm konfor evinizin kapısına kadar gelir.",
    },
  },
  {
    slug: "mix-masaj",
    name: "Mix Masaj",
    shortName: "Mix",
    tagline: "Farklı tekniklerin özel kombinasyonu",
    shortDescription:
      "Sizin tercihlerinize göre hazırlanan, farklı masaj tekniklerinin harmanlandığı kişiselleştirilmiş masaj.",
    description:
      "Mix masaj, ihtiyaçlarınıza ve tercihlerinize göre farklı masaj tekniklerinin bir araya getirildiği kişiselleştirilmiş bir seçenektir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Mix Masaj hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Tamamen kişiselleştirilmiş deneyim",
      "Farklı bölgelere farklı teknikler uygulanabilir",
      "Esneklik ve uyarlanabilirlik",
      "Birden fazla ihtiyacı tek seansta karşılayabilir",
    ],
    whoFor: [
      "Belirli bir tekniğe bağlı kalmak istemeyenler",
      "Farklı bölgeler için farklı yaklaşım arayanlar",
      "Daha önce masaj deneyimi olanlar",
      "Kişiselleştirilmiş bir hizmet tercih edenler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Mix Masaj | Hürrem Premium",
      description:
        "Denizli'de evde mix masaj hizmeti. Farklı masaj tekniklerinin özel kombinasyonu ile kişiselleştirilmiş deneyim. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Mix Masaj",
    },
    content: {
      whatIsIt:
        "Mix masaj, tek bir teknikle sınırlı kalmak yerine sizin tercih ve ihtiyaçlarınıza göre şekillendirilen esnek bir masaj seçeneğidir. Seans öncesinde kısa bir değerlendirme yapılarak hangi bölgelere hangi yoğunlukta çalışılacağı belirlenir. Bu sayede farklı beklentiler tek bir seans içinde karşılanabilir.",
      sessionDetails:
        "Seans başında ihtiyaçlarınız dinlenir ve uygun teknik kombinasyonu belirlenir. Seans boyunca geri bildirimlerinize göre uyarlamalar yapılabilir.",
      beforeSession:
        "Önceden düşündüğünüz veya dikkat çekilmesini istediğiniz bölgeleri belirtmeniz seanstan daha iyi yararlanmanızı sağlayabilir.",
      denizliAdvantage:
        "Denizli'de evde mix masaj hizmetimiz, salon ortamının katı kurallarından uzak, size özel ve esnek bir deneyim sunar. Kendi evinizde, kendi saatinizde hizmet almanın konforunu yaşarsınız.",
    },
  },
  {
    slug: "hurrem-masaji",
    name: "Hürrem Masajı",
    shortName: "Hürrem",
    tagline: "Markamızın özel imza masajı",
    shortDescription:
      "Hürrem Premium'un özel olarak geliştirdiği, birden fazla tekniği harmanlayan imza masaj deneyimi.",
    description:
      "Hürrem Masajı, markamızın kendi yaklaşımıyla geliştirdiği özel bir seans deneyimidir. Farklı tekniklerin ahenkli bir şekilde bir araya getirildiği bu masaj, Hürrem Premium'u tercih edenler için özel olarak sunulmaktadır.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Hürrem Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Hürrem Premium'a özel teknik kombinasyonu",
      "Bütüncül ve dengeli bir deneyim",
      "Hem rahatlama hem de dinginlik odaklı",
      "Özenli ve titiz uygulama",
    ],
    whoFor: [
      "Hürrem Premium deneyimini tam anlamıyla yaşamak isteyenler",
      "Markamıza özgü yaklaşımı merak edenler",
      "Kendine özel bir masaj seçeneği arayanlar",
    ],
    duration: "75 – 105 dakika",
    seo: {
      title: "Denizli Hürrem Masajı | Hürrem Premium",
      description:
        "Denizli'de evde Hürrem Masajı hizmeti. Hürrem Premium'un imza masaj deneyimi. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Hürrem Masajı",
    },
    content: {
      whatIsIt:
        "Hürrem Masajı, Hürrem Premium markasının kendi deneyimiyle şekillendirdiği, farklı masaj tekniklerini kendine has bir akışla bir araya getiren imza masaj seçeneğidir. Bu masajda kullanılan teknikler ve uygulama sırası markamıza özeldir. Rahatlama ve dinginliği bir arada sunan, başından sonuna kadar özenle yönetilen bir seans deneyimi yaşamanızı amaçlar.",
      sessionDetails:
        "Seans, kişisel tercihleriniz alınarak başlar. Markaya özel teknik sıralaması uygulanır. Hem fiziksel hem de zihinsel rahatlama odaklı bir akış izlenir.",
      beforeSession:
        "Rahat kıyafetler seçmeniz önerilir. Seans öncesinde kendinize küçük bir zaman dilimi ayırmanız deneyimden daha fazla yararlanmanızı sağlayabilir.",
      denizliAdvantage:
        "Denizli'de evde Hürrem Masajı, size özel bir deneyimi kendi evinizin atmosferinde yaşatır. Dışarı çıkma zorunluluğu olmadan markanın imza yaklaşımını deneyimleyebilirsiniz.",
    },
  },
  {
    slug: "tai-masaji",
    name: "Tai Masajı",
    shortName: "Tai",
    tagline: "Geleneksel Tayland yaklaşımından ilham alan teknik",
    shortDescription:
      "Tayland masaj geleneğinden ilham alan, esneme ve baskı tekniklerini birleştiren aktif masaj uygulaması.",
    description:
      "Tai masajı, geleneksel Tayland masajından ilham alan, vücut ağırlığı ve esneme hareketlerini içeren, geleneksel tekniklerden uyarlanmış bir masaj yöntemidir.",
    whatsappMessage:
      "Merhaba Hürrem Premium, Tai Masajı hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    benefits: [
      "Esnekliği artırmaya yardımcı olabilir",
      "Hem baskı hem esneme içerir",
      "Farklı ve aktif bir masaj deneyimi sunar",
      "Enerji akışını destekleyebileceği düşünülür",
    ],
    whoFor: [
      "Farklı ve aktif bir masaj deneyimi arayanlar",
      "Esnekliğini geliştirmek isteyenler",
      "Klasik yatay masajın dışında bir şey denemek isteyenler",
      "Aktif yaşam tarzı sürdüren bireyler",
    ],
    duration: "60 – 90 dakika",
    seo: {
      title: "Denizli Tai Masajı | Hürrem Premium",
      description:
        "Denizli'de evde tai masajı hizmeti. Geleneksel Tayland geleneğinden ilham alan esneme ve baskı teknikleri. WhatsApp'tan randevu alın.",
      h1: "Denizli'de Evde Tai Masajı",
    },
    content: {
      whatIsIt:
        "Tai masajı, geleneksel Tayland masaj geleneğinden ilham alınarak uygulanan, yalnızca yağ kullanmayan ve esneme hareketlerini de içeren aktif bir masaj yöntemidir. Uygulayıcı, hem baskı noktaları üzerinde çalışır hem de belirli esneme pozisyonlarına rehberlik eder. Bu teknik, vücudun daha bütüncül bir rahatlama hissi yaşamasına yardımcı olabilir.",
      sessionDetails:
        "Rahat ve esnek kıyafetlerle uygulanır. Seans zemin üzerinde veya masada gerçekleştirilebilir. Hem aktif hem pasif hareketler içerir.",
      beforeSession:
        "Rahat ve hareketli giysiler tercih edilir. Dar kıyafet ve kot pantolon uygun değildir. Herhangi bir eklem veya hareket kısıtlığınız varsa önceden belirtmeniz önerilir.",
      denizliAdvantage:
        "Denizli'de evde tai masajı hizmetimiz sayesinde geniş salon alanlarına gitme zahmetine girmeden kendi evinizin rahat ortamında bu deneyimi yaşayabilirsiniz.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}
