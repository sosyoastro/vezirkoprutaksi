// Sitenin tüm içeriği burada. Metinleri / telefonu / yazıları buradan değiştirebilirsiniz.

export const site = {
  name: "Vezirköprü 7/24 Acil Taksi",
  url: "https://vezirkoprutaksi.com",
  title: "Vezirköprü Taksi: 7/24 Güvenilir, Hızlı ve Konforlu Ulaşım",
  description:
    "Vezirköprü'de 7/24 güvenilir, konforlu ve hızlı taksi hizmeti. Şehir içi ve şehirler arası ulaşım ihtiyaçlarınız için hemen Vezirköprü Taksi'yi arayın!",
  keywords:
    "Vezirköprü taksi, Taksi Vezirköprü, Vezirköprü taksi durağı, Vezirköprü taksi numarası, Vezirköprü taksi telefon, Vezirköprü en yakın taksi, Vezirköprü nöbetçi taksi, 7/24 taksi Vezirköprü, Vezirköprü acil taksi, acil taksi Vezirköprü, Vezirköprü gece taksi",
  phone: "0543 951 51 01",
  phoneHref: "tel:05439515101",
  // Uluslararası formatta (wa.me linki için başında ülke kodu olmalı)
  whatsappNumber: "905439515101",
  address: "Çanaklı mahallesi 1612.sokak No:0 Vezirköprü/Samsun",
  logo: "/uploads/logo_1779823889.png",
  footerLogo: "/uploads/footer_logo_1779823905.png",
  favicon: "/uploads/favicon_1779820446.png",
  ogImage: "/uploads/og_1779820446.png",
  googleAdsId: "AW-16588127673",
  googleAdsConversion: "AW-16588127673/x5PGCNeajrYZELn76uU9",
};

export const whatsappHref = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navItems = [
  { label: "Ana Sayfa", href: "/#anasayfa" },
  { label: "Rezervasyon", href: "/#rezervasyon" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "İletişim", href: "/#iletisim" },
  { label: "Şeffaf Ücret Politikası", href: "/seffaf-ucret-politikasi" },
  { label: "Blog", href: "/blog" },
];

export const pricingPolicy = {
  slug: "seffaf-ucret-politikasi",
  title: "Şeffaf Ücret Politikası",
  description:
    "Vezirköprü Taksi'de ücretler resmî taksimetre tarifesiyle hesaplanır; uzun yolculuklarda fiyat yola çıkmadan önce bildirilir. Gizli ücret ve sürpriz ek maliyet yoktur.",
  paragraphs: [
    "Vezirköprü Taksi olarak yolculuklarınızda sürprizle karşılaşmamanız için şeffaf bir fiyatlandırma uyguluyoruz. Şehir içi yolculuklarda ücret, resmî taksimetre tarifesi üzerinden gidilen mesafeye göre hesaplanır. Taksimetre yolculuğun başında açılır ve yol boyunca ekranını her an görebileceğiniz şekilde durur. Yolculuk sonunda ödeyeceğiniz tutar, taksimetrede gördüğünüz tutardır; ücretin nasıl hesaplandığını şoförümüze dilediğiniz zaman sorabilirsiniz.",
    "Köylere, Şahinkaya Kanyonu'na, Samsun veya Merzifon havalimanlarına ya da şehirler arası yapılacak uzun yolculuklarda ücreti yola çıkmadan önce sizinle netleştiriyoruz. Bizi aradığınızda gideceğiniz yeri söylemeniz yeterli; yaklaşık ücreti önceden bildiririz ve anlaştığımız fiyatın dışında bir ödeme talep etmeyiz.",
    "Gizli ücret, sürpriz ek maliyet veya aşım ücreti yoktur. Kanyon gezisi gibi beklemeli yolculuklarda bekleme koşullarını da önceden konuşuruz. Böylece ne ödeyeceğinizi en baştan bilir, yolculuğunuzun tadını çıkarırsınız. Adil ve açık fiyatı, yolcularımızla kurduğumuz uzun soluklu güven ilişkisinin temeli olarak görüyoruz.",
    "Fiyat bilgisi almak için günün her saati 0543 951 51 01 numarasından bize ulaşabilirsiniz.",
  ],
};

export const slides = [
  {
    title: "7/24 Konforlu VIP Transfer",
    subtitle: "Şehir içi ve şehirler arası seyahatlerinizde güvenle tercih edin.",
    image: "/uploads/slider_1779822310.jpeg",
  },
  {
    title: "Hızlı ve Güvenli Ulaşım",
    subtitle: "Gideceğiniz yere tam zamanında, stressiz şekilde ulaşın.",
    image: "/uploads/slider_1779822331.jpeg",
  },
];

export const tickerItems = ["VEZİRKÖPRÜ", "CEZAEVİ", "KANYON", "7/24", "ACİL TAKSİ", "HASTANE"];

export const about = {
  image: "/uploads/about_1779819898.jpg",
  experience: "15+",
  tag: "Bizi Tanıyın",
  title: "Vezirköprü'nün Güvenilir Taksi Durağı",
  text: `Vezirköprü Taksi olarak, Samsun Vezirköprü ve çevresinde yılların getirdiği tecrübe, profesyonellik ve müşteri memnuniyeti odaklı hizmet anlayışımızla taşımacılık sektöründe fark yaratıyoruz. Amacımız; yalnızca bir noktadan diğerine gitmenizi sağlamak değil, bu yolculuğu sizin için güvenli, konforlu ve stressiz bir deneyime dönüştürmektir.

Bölgenin en çok tercih edilen Vezirköprü taksi durağı olma vizyonuyla, yenilikçi ve çözüm odaklı bir ulaşım ağı sunuyoruz. Gecenin ilerleyen saatlerinde duyduğunuz acil ulaşım ihtiyacından, planlı seyahatlerinize kadar her anınızda Vezirköprü 7/24 taksi hizmetimizle bir telefon kadar yakınınızdayız.`,
  features: [
    { icon: "fa-shield-halved", title: "Güvenli Seyahat", text: "Sizin güvenliğiniz bizim için en öncelikli konudur." },
    { icon: "fa-clock", title: "Zamanında Karşılama", text: "Gecikme olmadan tam saatinde kapınızda." },
    { icon: "fa-hand-holding-dollar", title: "Sabit Fiyat Garantisi", text: "Sürpriz ek maliyetler veya aşım ücreti yok." },
    { icon: "fa-user-tie", title: "Lisanslı Şoförler", text: "Profesyonel ve şehir rehberliğinde uzman sürücüler." },
  ],
};

export const whyChoose = {
  tag: "NEDEN BİZİ SEÇMELİSİNİZ?",
  title: "VEZİRKÖPRÜ'DE ULAŞIMIN EN GÜVENİLİR, HIZLI VE YENİLİKÇİ ADRESİYİZ.",
  cards: [
    {
      icon: "fa-tags",
      title: "7/24 Acil Taksi",
      text: "Tek bir tıkla veya telefonla anında aracınızı çağırın. Vezirköprü'nün neresinde olursanız olun, size en yakın taksi aracımızı hızla yönlendiriyor ve bekleme sürenizi en aza indiriyoruz.",
    },
    {
      icon: "fa-shield-halved",
      title: "Güvenli ve Konforlu Seyahat",
      text: "Düzenli bakımları yapılan temiz araçlarımız ve bölge trafiğine hakim, tecrübeli şoförlerimizle yolculuklarınız her zaman güvence altında. Gözünüz arkada kalmadan seyahat edin.",
    },
    {
      icon: "fa-user",
      title: "%100 Müşteri Memnuniyeti",
      text: "Güler yüzlü hizmet, 7/24 ulaşılabilirlik ve cep yakmayan uygun taksi fiyat politikamızla yolcularımızın memnuniyeti her zaman ilk önceliğimizdir. Bizimle yolculuk bir ayrıcalıktır.",
    },
  ],
};

export const facts = {
  tag: "Vezirköprü Taksi",
  title: "VEZİRKÖPRÜ'DE YILLARIN TECRÜBESİYLE GÜVENLİ ULAŞIM",
  text: "Vezirköprü halkına ve değerli misafirlerimize yıllardır 7/24 kesintisiz hizmet sunmanın gururunu yaşıyoruz. Her gün büyüyen müşteri ailemiz ve artan tecrübemizle yollardayız.",
  bgImage: "/uploads/fact1_1779821740.webp",
  fgImage: "/uploads/fact2_1779821650.png",
  stats: [
    { icon: "fa-car", number: "KONFORLU ARAÇ", label: "Araç Filosu", variant: "yellow-card" },
    { icon: "fa-gauge-high", number: "+15 YIL", label: "Deneyimli Şoför", variant: "dark-card" },
    { icon: "fa-tags", number: "Şeffaf Taksimetre", label: "Uygun Fiyat Garantisi", variant: "dark-card" },
    { icon: "fa-location-dot", number: "7/24", label: "Vezirköprü Taksi", variant: "yellow-card" },
  ],
};

export const cta = {
  subtitle: "7/24 Hizmet",
  title: "Rezervasyon İçin Hemen Arayın",
  phoneLabel: "Acil İletişim",
};

export const services = [
  {
    icon: "fa-plane-departure",
    title: "Havalimanı ve Otogar Ulaşımları",
    text: "Otobüs seferleriniz için Vezirköprü Otogarı'na, uçuşlarınız için ise Samsun veya Merzifon havalimanlarına tam vaktinde, bagaj derdi olmadan konforlu transfer sağlıyoruz.",
  },
  {
    icon: "fa-hospital",
    title: "Hastane ve Acil Ulaşım",
    text: "Vezirköprü Devlet Hastanesi randevularınızda veya acil sağlık ihtiyaçlarınızda, zaman kaybetmeden en hızlı ve güvenli şekilde ulaşımınızı gerçekleştiriyoruz.",
  },
  {
    icon: "fa-taxi",
    title: "7/24 Hızlı Şehir İçi Taksi",
    text: "Vezirköprü merkezinde günün her saati kesintisiz hizmet! Bulunduğunuz yere en yakın nöbetçi taksi aracımızı anında yönlendiriyor, bekletmiyoruz.",
  },
  {
    icon: "fa-road",
    title: "Şahinkaya Kanyonu Transferi",
    text: "Vezirköprü'nün turizm incisi Şahinkaya Kanyonu'na yapacağınız gezi ve turlarda konforlu, güvenli ve size özel taksi ulaşımı sağlıyoruz.",
  },
];

export const faq = {
  tag: "SSS",
  title: "SIKÇA SORULAN SORULAR",
  image: "/uploads/faq_1779821286.jpeg",
  badgeNum: "7/24",
  badgeLabel: "Taksi",
  defaultOpen: 2,
  items: [
    {
      q: "Taksi ücretleriniz nasıl hesaplanıyor?",
      a: "Müşterilerimize her zaman şeffaf ve adil bir fiyatlandırma sunuyoruz. Ücretlerimiz standart taksimetre tarifesi üzerinden, gideceğiniz mesafeye göre hesaplanmaktadır. Vezirköprü uygun taksi ve güvenilir ulaşım arayışınızda cebinizi yormayan, kaliteli bir hizmet garantisi veriyoruz. Uzun mesafe veya köy yolculukları öncesinde durağımızı arayarak ortalama fiyat bilgisi de alabilirsiniz.",
    },
    {
      q: "Köylere veya Şahinkaya Kanyonu'na ulaşım sağlıyor musunuz?",
      a: "Hizmet ağımız sadece ilçe merkeziyle sınırlı değildir. Vezirköprü köyleri taksi hizmetimizle tüm mahallere ve çevre ilçelere güvenle seyahat edebilirsiniz. Ayrıca ilçemizin turistik değeri olan kanyon gezileriniz için konforlu araçlarımızla Şahinkaya kanyonu taksi transferleri de gerçekleştirmekteyiz.",
    },
    {
      q: "Vezirköprü Otogarı ve Devlet Hastanesi'ne taksi hizmetiniz var mı?",
      a: "Kesinlikle. Otobüs sefer saatlerinize tam uyum sağlayarak Vezirköprü otogar taksi hizmetimizle eşyalarınızla birlikte sizi terminale / evinize sorunsuz ulaştırıyoruz. Aynı şekilde sağlık ihtiyaçlarınız için Vezirköprü devlet hastanesi taksi taleplerinizde poliklinik veya acil servis girişinde dakikalar içinde yanınızda oluyoruz.",
    },
    {
      q: "Gece geç saatlerde veya acil durumlarda taksi bulabilir miyim?",
      a: "Evet, durağımız 7 gün 24 saat kesintisiz hizmet vermektedir. Gecenin ilerleyen saatlerinde, hastane veya otogar gibi acil ihtiyaçlarınızda Vezirköprü nöbetçi taksi ve Vezirköprü acil taksi olarak her zaman görevinin başındayız. Bizi günün her saati güvenle arayabilirsiniz.",
    },
    {
      q: "Vezirköprü taksi numarasına nasıl ulaşabilirim?",
      a: "Vezirköprü taksi hizmetimizden faydalanmak için web sitemizin üst kısmında yer alan \"Hemen Ara\" butonuna tıklayabilir veya 0543 951 51 01 üzerinden Vezirköprü taksi numarası ile bize direkt ulaşabilirsiniz. Çağrınızı aldığımız anda Vezirköprü en yakın taksi aracımız bulunduğunuz konuma hızla yönlendirilecektir.",
    },
  ],
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string; // ISO
  image: string;
  content: string[]; // paragraflar
};

export const blogPosts: BlogPost[] = [
  {
    slug: "vezirkopru-sahinkaya-kanyonu-ulasim-rehberi",
    title: "Turizm ve Gezi Odaklı",
    summary: "Vezirköprü Şahinkaya Kanyonu'na Nasıl Gidilir? Ulaşım Rehberi",
    description:
      "Vezirköprü Şahinkaya Kanyonu'na nasıl gidilir? Kanyona güvenli ve konforlu taksi ulaşımı için rehberimizi okuyun. Vezirköprü taksi hizmetinizde.",
    date: "2026-05-26T19:51:21+03:00",
    image: "/uploads/blog_1779825070.jpeg",
    content: [
      "Türkiye'nin en büyük ikinci kanyonu olan ve Samsun turizminin göz bebeği sayılan Şahinkaya Kanyonu, her yıl binlerce yerli ve yabancı turisti ağırlamaktadır. Vezirköprü ilçe merkezine yaklaşık 17 kilometre uzaklıkta bulunan bu doğa harikasına ulaşım, toplu taşımayla her zaman kolay olmayabilir. Özellikle ailenizle veya arkadaş grubunuzla rahat bir gezi planlıyorsanız, taksi ile ulaşım en konforlu seçenektir. Vezirköprü Taksi olarak, dilediğiniz saatte sizi bulunduğunuz konumdan alıyor, eşsiz kanyon manzarasına kadar güvenle taşıyoruz. Tekne turunuz veya doğa yürüyüşünüz bitene kadar sizi bekleyebilir veya anlaştığımız saatte tekrar gelip alabiliriz. Şahinkaya Kanyonu gezinizi ulaşım stresi olmadan, keyifle tamamlamak için durağımızla iletişime geçebilirsiniz.",
    ],
  },
];

export const formatDateTR = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" });
