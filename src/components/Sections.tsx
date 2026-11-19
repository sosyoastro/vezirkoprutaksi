import { about, cta, facts, services, site, tickerItems, whyChoose } from "@/data/site";
import CarIcon, { BrandTag } from "./CarIcon";

export function Ticker() {
  const group = (hidden: boolean, key: number) => (
    <div className="ticker-group" aria-hidden={hidden || undefined} key={key}>
      {tickerItems.map((t) => (
        <span key={t} style={{ display: "contents" }}>
          <div className="ticker-item">{t}</div>
          <div className="ticker-icon">
            <CarIcon />
          </div>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker-move">{[0, 1, 2, 3].map((i) => group(i > 0, i))}</div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="section" id="hakkimizda">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.image} alt="Hakkımızda" className="about-img" />
            <div className="about-experience-badge">
              {about.experience}
              <span>Yıllık Deneyim</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">{about.tag}</span>
            <h2 className="section-title">{about.title}</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
              {about.text}
            </p>

            <div className="about-features">
              {about.features.map((f) => (
                <div className="feature-item" key={f.title}>
                  <i className={`fa-solid ${f.icon}`}></i>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section why-choose-section" style={{ backgroundColor: "var(--bg-dark)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <BrandTag text={whyChoose.tag} mb="0.5rem" />
          <h2
            className="section-title why-main-title"
            style={{ maxWidth: 800, textTransform: "uppercase", fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.2, textAlign: "center", color: "#fff" }}
          >
            {whyChoose.title}
          </h2>
        </div>

        <div className="why-cards-grid">
          {whyChoose.cards.map((c) => (
            <div className="why-card" key={c.title}>
              <div className="why-card-icon-badge">
                <i className={`fa-solid ${c.icon}`}></i>
              </div>
              <h3 className="why-card-title">{c.title}</h3>
              <p className="why-card-desc">{c.text}</p>
              <div className="why-card-btn-wrap">
                <a href="#rezervasyon" className="btn btn-primary why-card-btn">
                  Rezervasyon <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facts() {
  return (
    <section className="section facts-section" style={{ backgroundColor: "#0b0b0d", borderBottom: "1px solid var(--border-color)", overflow: "hidden" }}>
      <div className="container">
        <div className="facts-grid">
          <div className="facts-left">
            <BrandTag text={facts.tag} />
            <h2
              className="section-title"
              style={{ fontSize: "2.3rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.15, color: "#fff", marginBottom: "1.5rem", letterSpacing: -1 }}
            >
              {facts.title}
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "3rem", maxWidth: 540 }}>{facts.text}</p>

            <div className="facts-stats-grid">
              {facts.stats.map((s) => (
                <div className={`stat-card ${s.variant}`} key={s.number}>
                  <div className="stat-icon">
                    <i className={`fa-solid ${s.icon}`}></i>
                  </div>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="facts-right">
            <div className="dotted-pattern top-right"></div>
            <div className="collage-bg-img-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={facts.bgImage} alt="Vezirköprü taksi aracı" className="collage-bg-img" />
            </div>
            <div className="dotted-pattern bottom-left"></div>
            <div className="collage-fg-img-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={facts.fgImage} alt="Vezirköprü taksi" className="collage-fg-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="section cta-banner-section" id="rezervasyon" style={{ padding: "3rem 0", backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
        <div className="cta-banner">
          <div className="cta-left">
            <span className="cta-subtitle">{cta.subtitle}</span>
            <h3 className="cta-title">{cta.title}</h3>
          </div>

          <a href={site.phoneHref} className="cta-phone-circle" aria-label="Telefon et">
            <i className="fa-solid fa-phone"></i>
          </a>

          <div className="cta-right">
            <div className="cta-phone-box">
              <span className="cta-phone-label">{cta.phoneLabel}</span>
              <a href={site.phoneHref} className="cta-phone-number">
                {site.phone}
              </a>
            </div>
            <a href={site.phoneHref} className="btn btn-primary cta-btn">
              Hemen Ara <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="hizmetler" style={{ backgroundColor: "#0b0b0e" }}>
      <div className="container">
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
