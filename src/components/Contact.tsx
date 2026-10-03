"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    adSoyad: "",
    email: "",
    telefon: "",
    mesaj: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.");
    setFormData({ adSoyad: "", email: "", telefon: "", mesaj: "" });
  };

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 font-semibold text-sm mb-4 border border-yellow-200">
            <span className="w-2 h-2 rounded-full bg-[#F5B731]"></span>
            İletişim
          </div>
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Bizimle <span className="text-[#F5B731]">İletişime</span> Geçin
          </h2>
          <p className="text-slate-600 text-lg">
            Soru, öneri ve talepleriniz için 7/24 bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-[#0F172A] text-white p-10 md:p-12 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5B731] rounded-full blur-[80px] opacity-20 -mr-10 -mt-10"></div>
            
            <div className="relative z-10">
              <h3 className="font-outfit text-2xl font-bold mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center shrink-0 text-[#F5B731]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Telefon</h4>
                    <a href="tel:05439515101" className="text-lg font-medium hover:text-[#F5B731] transition-colors">0543 951 51 01</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center shrink-0 text-[#F5B731]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Adres</h4>
                    <p className="text-lg font-medium leading-relaxed">Çanaklı mahallesi 1612.sokak No:0<br/>Vezirköprü/Samsun</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center shrink-0 text-[#F5B731]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Çalışma Saatleri</h4>
                    <p className="text-lg font-medium">7 Gün 24 Saat<br/><span className="text-sm text-slate-400">Kesintisiz Hizmet</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Icons Placeholder */}
            <div className="relative z-10 mt-12 pt-8 border-t border-slate-700 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#F5B731] hover:text-[#0F172A] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#F5B731] hover:text-[#0F172A] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-10 md:p-12">
            <h3 className="font-outfit text-2xl font-bold mb-6 text-[#0F172A]">Mesaj Gönderin</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="adSoyad" className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                  <input type="text" id="adSoyad" name="adSoyad" value={formData.adSoyad} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731] transition-shadow" />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-slate-700 mb-2">Telefon Numarası</label>
                  <input type="tel" id="telefon" name="telefon" value={formData.telefon} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731] transition-shadow" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-posta Adresi (İsteğe Bağlı)</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731] transition-shadow" />
              </div>
              <div>
                <label htmlFor="mesaj" className="block text-sm font-medium text-slate-700 mb-2">Mesajınız</label>
                <textarea id="mesaj" name="mesaj" value={formData.mesaj} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F5B731] transition-shadow resize-none"></textarea>
              </div>
              <button type="submit" className="bg-[#0F172A] text-white font-bold py-4 px-8 rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                Mesajı Gönder
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-sm border border-slate-100 h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191285.96105825313!2d35.31294863281249!3d41.144414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40879e955d9d7fd3%3A0x89dc8c60cb7aeb8c!2sVezirk%C3%B6pr%C3%BC%2C%20Samsun!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vezirköprü Taksi Harita Konumu"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
