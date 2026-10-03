const features = [
  {
    title: "Güvenilir Sürücüler",
    description: "Tüm sürücülerimiz sabıka kaydı temiz, tecrübeli ve profesyonel kişilerden oluşur.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  {
    title: "7/24 Kesintisiz Hizmet",
    description: "Gündüz veya gece fark etmeksizin, ihtiyacınız olan her an bir telefon kadar yakınız.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "Uygun Fiyat Garantisi",
    description: "Kaliteli hizmeti, bütçenizi sarsmayacak en uygun ve şeffaf fiyatlarla sunuyoruz.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "Konforlu Araçlar",
    description: "Düzenli bakımları yapılan, temiz, klimalı ve konforlu yeni model araçlarla seyahat edin.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    )
  },
  {
    title: "Zamanında Varış",
    description: "Zamanınızın değerli olduğunu biliyor, sizi tam vaktinde alıp tam vaktinde ulaştırıyoruz.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "Profesyonel Hizmet",
    description: "Müşteri memnuniyetini her zaman ön planda tutan, saygılı ve güler yüzlü hizmet anlayışı.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1E293B] skew-x-12 translate-x-32 opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Neden Bizi <span className="text-[#F5B731]">Seçmelisiniz?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Vezirköprü ve çevresinde sunduğumuz ayrıcalıklı taksi hizmetiyle fark yaratıyoruz. Seyahatinizin her anında kendinizi güvende ve özel hissetmeniz için çalışıyoruz.
            </p>
            <a href="tel:05439515101" className="inline-flex items-center gap-2 bg-[#F5B731] text-[#0F172A] font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Hemen Çağır
            </a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center text-[#F5B731] border border-slate-700">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-outfit text-xl font-bold mb-2 text-white">{feature.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
