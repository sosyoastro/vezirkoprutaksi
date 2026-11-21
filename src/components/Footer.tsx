import Link from "next/link";
import { site, whatsappHref } from "@/data/site";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={site.footerLogo} alt={site.title} style={{ maxHeight: 44, width: "auto", display: "block" }} />
              </div>
              <p className="footer-desc">{site.description}</p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                <i className="fa-solid fa-circle-check text-warning" style={{ marginRight: 5 }}></i> Lisanslı VIP Karşılama Hizmeti
              </p>
            </div>

            <div>
              <h3 className="footer-title">Hızlı Linkler</h3>
              <ul className="footer-links">
                <li><Link href="/#anasayfa">Ana Sayfa</Link></li>
                <li><Link href="/#hakkimizda">Hakkımızda</Link></li>
                <li><Link href="/#hizmetler">Hizmetlerimiz</Link></li>
                <li><Link href="/seffaf-ucret-politikasi">Şeffaf Ücret Politikası</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/#iletisim">İletişim</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-title">Hızlı İletişim</h3>
              <ul className="footer-info-list">
                <li className="footer-info-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{site.address}</span>
                </li>
                <li className="footer-info-item">
                  <i className="fa-solid fa-phone"></i>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()}. Tüm Hakları Saklıdır.</p>
            <p>
              A project of{" "}
              <a href="https://e-vizyon.com" target="_blank" rel="noopener noreferrer">
                e-vizyon.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a href={site.phoneHref} className="phone-float" aria-label="Hemen Arayın">
        <i className="fa-solid fa-phone"></i>
      </a>
      <a href={whatsappHref()} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
