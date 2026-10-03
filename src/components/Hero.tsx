"use client";

import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    adSoyad: "",
    telefon: "",
    nereden: "",
    nereye: "",
    tarih: "",
    mesaj: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Rezervasyon talebiniz alınmıştır. En kısa sürede size dönüş yapacağız.");
    setFormData({ adSoyad: "", telefon: "", nereden: "", nereye: "", tarih: "", mesaj: "" });
  };

  return (
    <section className="relative bg-[#0F172A] text-white overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-[#0F172A] to-slate-800" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F5B731] rounded-full blur-[100px] opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Vezirköprü'de <span className="text-[#F5B731]">Güvenilir</span> Taksi Hizmeti
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            7/24 hızlı, konforlu ve güvenilir ulaşım hizmeti. Şehir içi ve şehirler arası tüm ulaşım ihtiyaçlarınız için bir telefon kadar yakınız.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="tel:05439515101" className="bg-[#F5B731] text-[#0F172A] font-bold py-4 px-8 rounded-md text-lg hover:bg-yellow-500 transition-colors shadow-lg w-full sm:w-auto text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Hemen Ara
            </a>
            <a href="https://wa.me/905439515101" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-md text-lg hover:bg-white/20 transition-colors w-full sm:w-auto text-center border border-white/20 flex items-center justify-center gap-2">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="w-full max-w-md lg:w-[450px] shrink-0">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-slate-800 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#F5B731] rounded-t-xl"></div>
            <h3 className="font-outfit text-2xl font-bold mb-6 text-center text-[#0F172A]">Taksi Rezervasyonu</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input type="text" name="adSoyad" value={formData.adSoyad} onChange={handleChange} placeholder="Ad Soyad" required className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731]" />
              </div>
              <div>
                <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} placeholder="Telefon Numarası" required className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="text" name="nereden" value={formData.nereden} onChange={handleChange} placeholder="Nereden" required className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731]" />
                </div>
                <div>
                  <input type="text" name="nereye" value={formData.nereye} onChange={handleChange} placeholder="Nereye" required className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731]" />
                </div>
              </div>
              <div>
                <input type="datetime-local" name="tarih" value={formData.tarih} onChange={handleChange} required className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731] text-slate-600" />
              </div>
              <div>
                <textarea name="mesaj" value={formData.mesaj} onChange={handleChange} placeholder="Ek Notlar (İsteğe Bağlı)" rows={2} className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731] resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0F172A] text-white font-bold py-4 rounded-md hover:bg-slate-800 transition-colors shadow-md mt-2">
                Rezervasyon Yap
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
