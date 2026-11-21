"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";

export default function Header({ active = "home" }: { active?: "home" | "blog" | "ucret" }) {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const isSub = active !== "home";

  return (
    <>
      <header
        className={`header-wrapper${isSub ? " header-wrapper--subpage" : ""}${sticky ? " sticky" : ""}`}
        id={isSub ? undefined : "anasayfa"}
      >
        <div className="header-top-bar">
          <div className="header-top-container">
            <div className="header-top-left">
              <div className="top-info-item">
                <a href={site.phoneHref}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "0.78rem" }}></i> {site.phone}
                </a>
              </div>
              <div className="top-info-item address-item">
                <i className="fa-solid fa-location-dot" style={{ fontSize: "0.78rem" }}></i> {site.address}
              </div>
            </div>
          </div>
        </div>

        <div className="header-main-bar">
          <div className="navbar-container">
            <Link href="/#anasayfa" className="logo-link" id="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.logo} alt={site.title} style={{ maxHeight: 44, width: "auto", display: "block" }} />
            </Link>

            <ul className={`nav-menu${menuOpen ? " active" : ""}`}>
              <li className="mobile-menu-header">
                <Link href="/#anasayfa" className="mobile-menu-logo-link" onClick={close}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={site.logo} alt={site.title} className="mobile-menu-logo-img" />
                </Link>
                <button className="mobile-menu-close" aria-label="Menü Kapat" onClick={close}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </li>

              {navItems.map((item, i) => {
                const activeHref = { home: navItems[0].href, blog: "/blog", ucret: "/seffaf-ucret-politikasi" }[active];
                const isActive = item.href === activeHref && (active !== "home" || i === 0);
                return (
                  <li key={item.href} className={`nav-item${isActive && isSub ? " nav-item--active" : ""}`}>
                    <Link href={item.href} onClick={close}>
                      {item.label}
                      {isActive && !isSub && (
                        <span className="active-chevron-box">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}

              <li className="mobile-menu-footer">
                <div className="mobile-footer-item">
                  <div className="mobile-footer-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
                <div className="mobile-footer-item mobile-footer-item-address">
                  <div className="mobile-footer-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span>{site.address}</span>
                </div>
              </li>
            </ul>

            <div className="header-main-right">
              <div className="header-call-widget">
                <div className="call-icon-circle">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="call-text-box">
                  <span className="call-label">7/24 İletişim</span>
                  <a href={site.phoneHref} className="call-number">
                    {site.phone}
                  </a>
                </div>
              </div>

              <button className="hamburger" aria-label="Menü Aç" onClick={() => setMenuOpen((o) => !o)}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`menu-backdrop${menuOpen ? " active" : ""}`} onClick={close}></div>
    </>
  );
}
