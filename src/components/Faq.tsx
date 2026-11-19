"use client";

import { useState } from "react";
import { faq } from "@/data/site";
import { BrandTag } from "./CarIcon";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(faq.defaultOpen);

  return (
    <section
      className="section faq-section"
      id="sss"
      style={{ backgroundColor: "var(--bg-dark)", borderBottom: "1px solid var(--border-color)", overflow: "hidden", padding: "6rem 0" }}
    >
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left">
            <BrandTag text={faq.tag} />
            <h2
              className="section-title"
              style={{ fontSize: "2.3rem", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.15, color: "#fff", marginBottom: "2.5rem", letterSpacing: -1, maxWidth: 500 }}
            >
              {faq.title}
            </h2>
            <div className="faq-image-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={faq.image} alt="Vezirköprü taksi şoförü" className="faq-main-img" />
              <div className="faq-experience-badge">
                <span className="faq-exp-num">{faq.badgeNum}</span>
                <span className="faq-exp-lbl">{faq.badgeLabel}</span>
              </div>
            </div>
          </div>

          <div className="faq-right">
            <div className="accordion-container">
              {faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div className={`accordion-item${isOpen ? " active" : ""}`} key={item.q}>
                    <button className="accordion-header" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                      <span className="accordion-title-text">{item.q}</span>
                      <span className="accordion-icon-circle">
                        <i className="fa-solid fa-chevron-right"></i>
                      </span>
                    </button>
                    <div
                      className="accordion-content"
                      style={isOpen ? { maxHeight: 400, opacity: 1, marginTop: "1rem", overflow: "visible" } : { maxHeight: 0, opacity: 0, overflow: "hidden" }}
                    >
                      <div className="accordion-content-inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
