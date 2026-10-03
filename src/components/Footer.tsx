export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-outfit font-bold text-3xl text-white">Vezirköprü <span className="text-[#F5B731]">Taksi</span></span>
              <span className="text-xs text-slate-400 font-medium tracking-wider mt-1">7/24 ACİL HİZMET</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Vezirköprü ve çevresinde güvenilir, konforlu ve 7/24 kesintisiz taksi hizmeti sunuyoruz. Şehir içi ve şehirler arası yolculuklarınızda her zaman yanınızdayız.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="font-outfit font-semibold text-xl mb-6 relative inline-block">
              Hızlı Linkler
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#F5B731] rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-[#F5B731] transition-colors flex items-center gap-2"><span className="text-[#F5B731] text-xs">►</span> Ana Sayfa</a></li>
              <li><a href="#hakkimizda" className="hover:text-[#F5B731] transition-colors flex items-center gap-2"><span className="text-[#F5B731] text-xs">►</span> Hakkımızda</a></li>
              <li><a href="#hizmetler" className="hover:text-[#F5B731] transition-colors flex items-center gap-2"><span className="text-[#F5B731] text-xs">►</span> Hizmetlerimiz</a></li>
              <li><a href="#iletisim" className="hover:text-[#F5B731] transition-colors flex items-center gap-2"><span className="text-[#F5B731] text-xs">►</span> İletişim</a></li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-outfit font-semibold text-xl mb-6 relative inline-block">
              Hizmetlerimiz
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#F5B731] rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#hizmetler" className="hover:text-[#F5B731] transition-colors">Şehir İçi Transfer</a></li>
              <li><a href="#hizmetler" className="hover:text-[#F5B731] transition-colors">Şehirler Arası Transfer</a></li>
              <li><a href="#hizmetler" className="hover:text-[#F5B731] transition-colors">Havalimanı Transferi</a></li>
              <li><a href="#hizmetler" className="hover:text-[#F5B731] transition-colors">7/24 Acil Taksi</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-outfit font-semibold text-xl mb-6 relative inline-block">
              İletişim
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#F5B731] rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F5B731] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Çanaklı mahallesi 1612.sokak No:0 Vezirköprü/Samsun</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#F5B731] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:05439515101" className="hover:text-[#F5B731] transition-colors">0543 951 51 01</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#F5B731] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>7/24 Hizmetinizdeyiz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Vezirköprü Taksi. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F5B731] hover:text-[#0F172A] transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F5B731] hover:text-[#0F172A] transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
