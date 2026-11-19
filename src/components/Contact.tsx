"use client";

import { FormEvent, useState } from "react";
import { site, whatsappHref } from "@/data/site";

// Canlı sitede form PHP (ajax.php) ile veritabanına kaydediliyordu.
// Next.js sürümünde sunucu tarafı olmadığından mesaj WhatsApp'a hazır metin olarak aktarılır.
export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Ad Soyad: ${f.get("name")}`,
      f.get("phone") ? `Telefon: ${f.get("phone")}` : "",
      f.get("email") ? `E-posta: ${f.get("email")}` : "",
      f.get("subject") ? `Konu: ${f.get("subject")}` : "",
      "",
      String(f.get("message") ?? ""),
    ].filter((l, i, arr) => l !== "" || arr[i - 1] !== "");
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setStatus("Mesajınız WhatsApp'a aktarıldı. Göndermek için WhatsApp'ta gönder tuşuna basın.");
    e.currentTarget.reset();
    setTimeout(() => setStatus(null), 6000);
  }

  return (
    <section className="section" id="iletisim">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>İletişim Bilgilerimiz</h3>
            <ul className="contact-detail-list">
              <li className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Telefon Numaramız</h4>
                  <p>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="contact-icon" style={{ backgroundColor: "rgba(46, 196, 182, 0.08)", color: "var(--success)" }}>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="contact-text">
                  <h4>Hızlı WhatsApp Hattı</h4>
                  <p>
                    <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                      WhatsApp ile Yazışın
                    </a>
                  </p>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="contact-text">
                  <h4>Fiziksel Merkezimiz</h4>
                  <p>{site.address}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <h3>Mesaj Gönderin</h3>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="c_name">Adınız Soyadınız *</label>
                    <input type="text" id="c_name" name="name" className="form-control" placeholder="Adınız Soyadınız" required />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="c_phone">Telefon Numaranız</label>
                    <input type="tel" id="c_phone" name="phone" className="form-control" placeholder="05xx xxx xx xx" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c_email">E-Posta Adresiniz</label>
                <input type="email" id="c_email" name="email" className="form-control" placeholder="ornek@eposta.com" />
              </div>

              <div className="form-group">
                <label htmlFor="c_subject">Mesaj Konusu</label>
                <input type="text" id="c_subject" name="subject" className="form-control" placeholder="Örn: VIP Hizmet Fiyat Teklifi" />
              </div>

              <div className="form-group">
                <label htmlFor="c_message">Mesajınız *</label>
                <textarea id="c_message" name="message" className="form-control" rows={5} placeholder="Mesajınızı detaylı şekilde yazınız..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ borderRadius: 10, width: "100%" }}>
                Mesajımı İlet <i className="fa-brands fa-whatsapp" style={{ marginLeft: 5 }}></i>
              </button>

              {status && (
                <div className="form-status success" style={{ display: "block" }}>
                  <i className="fa-solid fa-circle-check"></i> {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
