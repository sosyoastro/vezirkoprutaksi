"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0F172A] text-white text-sm py-2 px-4 md:px-8 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#F5B731]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>Çanaklı mah. 1612.sokak No:0 Vezirköprü/Samsun</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:05439515101" className="flex items-center gap-2 hover:text-[#F5B731] transition-colors">
            <svg className="w-4 h-4 text-[#F5B731]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>0543 951 51 01</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white transition-all duration-300 shadow-md ${isScrolled ? "py-3" : "py-4 md:py-6"}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-outfit font-bold text-2xl md:text-3xl text-[#0F172A]">Vezirköprü <span className="text-[#F5B731]">Taksi</span></span>
            <span className="text-xs text-gray-500 font-medium tracking-wider">7/24 ACİL HİZMET</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="font-medium text-[#0F172A] hover:text-[#F5B731] transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone Widget Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="bg-[#F5B731] text-[#0F172A] p-3 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-semibold uppercase">7/24 İletişim</span>
              <a href="tel:05439515101" className="font-outfit font-bold text-xl text-[#0F172A] hover:text-[#F5B731] transition-colors">
                0543 951 51 01
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-[#0F172A] p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMobileMenu}>
        <div className={`absolute top-0 right-0 w-64 h-full bg-white shadow-xl flex flex-col p-6 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <span className="font-outfit font-bold text-xl text-[#0F172A]">Menü</span>
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-red-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6 flex-grow">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={toggleMobileMenu} className="font-medium text-lg text-[#0F172A] hover:text-[#F5B731]">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t pt-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-500 font-semibold uppercase">Hemen Ara</span>
              <a href="tel:05439515101" className="font-outfit font-bold text-xl text-[#F5B731]">
                0543 951 51 01
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
