"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "@/data/site";

const DURATION = 6000; // 6 saniye slayt süresi

// İkinci kelimeyi sarı yapar (canlı sitedeki formatTitle ile aynı)
function FormattedTitle({ text }: { text: string }) {
  const words = text.split(" ");
  if (words.length < 2) return <span>{text}</span>;
  return (
    <>
      {words[0]} <span>{words[1]}</span>
      {words.length > 2 ? " " + words.slice(2).join(" ") : ""}
    </>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [shown, setShown] = useState(0); // metinler, yumuşak geçiş için gecikmeli değişir
  const textVisible = current === shown;
  const spinnerRef = useRef<SVGCircleElement>(null);
  const count = slides.length;

  const goTo = useCallback(
    (index: number) => setCurrent((prev) => {
      const next = (index + count) % count;
      return next === prev ? prev : next;
    }),
    [count],
  );

  // Metin geçişi
  useEffect(() => {
    if (current === shown) return;
    const t = setTimeout(() => setShown(current), 300);
    return () => clearTimeout(t);
  }, [current, shown]);

  // Otomatik oynatma + daire göstergesi
  useEffect(() => {
    if (count < 2) return;
    let start: number | null = null;
    let raf = 0;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / DURATION, 1);
      if (spinnerRef.current) spinnerRef.current.style.strokeDashoffset = String(100 - progress * 100);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else goTo(current + 1);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current, count, goTo]);

  const slide = slides[shown];

  return (
    <section className="hero-section">
      <div className="autoplay-spinner">
        <svg className="spinner-svg" viewBox="0 0 36 36">
          <circle className="spinner-bg" cx="18" cy="18" r="16"></circle>
          <circle className="spinner-bar" ref={spinnerRef} cx="18" cy="18" r="16"></circle>
        </svg>
      </div>

      <button className="slider-arrow prev" aria-label="Önceki Slayt" onClick={() => goTo(current - 1)}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="slider-arrow next" aria-label="Sonraki Slayt" onClick={() => goTo(current + 1)}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      <div className="slider-dots-container">
        <div className="slider-dots-line"></div>
        <div className="slider-dots-wrapper">
          {slides.map((_, i) => (
            <div key={i} className={`hero-dot${i === current ? " active" : ""}`} onClick={() => goTo(i)}></div>
          ))}
        </div>
      </div>

      <div className="hero-slider-bg">
        {slides.map((s, i) => (
          <div key={s.image} className={`slide-bg${i === current ? " active" : ""}`} style={{ backgroundImage: `url('${s.image}')` }}></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-main-title" style={{ opacity: textVisible ? 1 : 0 }}>
            <FormattedTitle text={slide.title} />
          </h1>
          <p id="hero-desc" className="hero-description" style={{ opacity: textVisible ? 1 : 0 }}>
            {slide.subtitle}
          </p>
          <div className="hero-cta">
            <a href="#iletisim" className="btn btn-primary hero-btn">
              İletişim <i className="fa-solid fa-arrow-right" style={{ marginLeft: 5 }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
