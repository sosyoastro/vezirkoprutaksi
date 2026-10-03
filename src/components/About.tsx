export default function About() {
  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image/Visual Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 relative">
                {/* Fallback pattern since we don't have actual images */}
                <div className="absolute inset-0 bg-[#0F172A] opacity-90 flex items-center justify-center p-8 text-center">
                  <div className="border-4 border-[#F5B731] rounded-xl p-8 max-w-sm">
                    <svg className="w-24 h-24 text-[#F5B731] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    <h3 className="text-3xl font-outfit font-bold text-white mb-2">Vezirköprü'nün</h3>
                    <p className="text-xl text-slate-300">En Hızlı & Güvenli Taksi Hizmeti</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5B731] rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-slate-200 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 font-semibold text-sm mb-6 border border-yellow-200">
              <span className="w-2 h-2 rounded-full bg-[#F5B731]"></span>
              Hakkımızda
            </div>
            <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Güvenilir, Konforlu ve <br/>
              <span className="text-[#F5B731]">Profesyonel</span> Yolculuk
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Yılların verdiği tecrübe ile Vezirköprü'de ulaşım ihtiyaçlarınıza profesyonel çözümler üretiyoruz. Güler yüzlü, deneyimli ve yollara hakim sürücülerimizle güvenle seyahat etmenizi sağlıyoruz. 7 gün 24 saat kesintisiz hizmet anlayışıyla, çağrınıza anında yanıt veriyor, dilediğiniz yere konforlu bir şekilde ulaştırıyoruz.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10 border-t border-slate-100 pt-10">
              <div className="flex flex-col">
                <span className="font-outfit text-4xl font-bold text-[#0F172A] mb-2 flex items-baseline">10<span className="text-[#F5B731] text-2xl ml-1">+</span></span>
                <span className="text-slate-500 font-medium text-sm md:text-base">Yıllık Deneyim</span>
              </div>
              <div className="flex flex-col">
                <span className="font-outfit text-4xl font-bold text-[#0F172A] mb-2 flex items-baseline">50K<span className="text-[#F5B731] text-2xl ml-1">+</span></span>
                <span className="text-slate-500 font-medium text-sm md:text-base">Mutlu Müşteri</span>
              </div>
              <div className="flex flex-col">
                <span className="font-outfit text-4xl font-bold text-[#0F172A] mb-2 flex items-baseline">7/24</span>
                <span className="text-slate-500 font-medium text-sm md:text-base">Kesintisiz Hizmet</span>
              </div>
              <div className="flex flex-col">
                <span className="font-outfit text-4xl font-bold text-[#0F172A] mb-2 flex items-baseline">20<span className="text-[#F5B731] text-2xl ml-1">+</span></span>
                <span className="text-slate-500 font-medium text-sm md:text-base">Konforlu Araç</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
