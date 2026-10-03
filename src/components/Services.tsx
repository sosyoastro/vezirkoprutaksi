const services = [
  {
    title: "Şehir İçi Transfer",
    description: "Vezirköprü sınırları içerisinde dilediğiniz noktaya en kısa ve güvenli yoldan ulaşımınızı sağlıyoruz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    title: "Şehirler Arası Transfer",
    description: "Samsun merkez, çevre ilçeler ve diğer şehirlere konforlu ve güvenilir uzun mesafe yolculuk imkanı.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
    )
  },
  {
    title: "Havalimanı Transfer",
    description: "Samsun Çarşamba Havalimanı veya çevre havalimanlarına uçuş saatlerinize uygun, zamanında transfer.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "VIP Transfer",
    description: "Özel misafirleriniz veya kendiniz için daha lüks, geniş ve ekstra konforlu VIP araç seçenekleri.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    )
  },
  {
    title: "Kurumsal Transfer",
    description: "Şirket personelleri, özel davetler ve kurumsal etkinlikler için düzenli ve faturalı ulaşım hizmeti.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: "Acil Taksi Hizmeti",
    description: "Gecenin veya günün herhangi bir saatinde, hastane, otogar gibi acil ulaşım ihtiyaçlarınıza anında çözüm.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  }
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 font-semibold text-sm mb-4 border border-yellow-200">
            <span className="w-2 h-2 rounded-full bg-[#F5B731]"></span>
            Hizmetlerimiz
          </div>
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Size Özel <span className="text-[#F5B731]">Ulaşım</span> Çözümleri
          </h2>
          <p className="text-slate-600 text-lg">
            Her türlü ulaşım ihtiyacınıza uygun, güvenli, konforlu ve bütçe dostu hizmet seçeneklerimizle 7/24 hizmetinizdeyiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-[#0F172A] flex items-center justify-center mb-6 group-hover:bg-[#F5B731] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-outfit text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#F5B731] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
