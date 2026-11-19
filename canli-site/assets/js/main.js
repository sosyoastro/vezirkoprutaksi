/* assets/js/main.js - Ön Yüz Kullanıcı Etkileşimleri */

document.addEventListener('DOMContentLoaded', () => {

    // ================= 1. YAPIŞKAN HEADER (STICKY NAVIGATION) =================
    const header = document.querySelector('.header-wrapper');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ================= 2. MOBİL HAMBURGER MENÜ VE DRAWER =================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-item a');
    const closeBtn = document.getElementById('mobile-menu-close-btn');
    const menuBackdrop = document.getElementById('menuBackdrop');

    if (hamburgerBtn && navMenu) {
        const openMenu = () => {
            navMenu.classList.add('active');
            if (menuBackdrop) menuBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
        };

        const closeMenu = () => {
            navMenu.classList.remove('active');
            if (menuBackdrop) menuBackdrop.classList.remove('active');
            document.body.style.overflow = ''; // Arka plan kaymasını geri aç
            
            // Hamburger ikonunu sıfırla
            const icon = hamburgerBtn.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        };

        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Çarpı butonuna basınca kapat
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMenu();
            });
        }

        // Karartma arka planına basınca kapat
        if (menuBackdrop) {
            menuBackdrop.addEventListener('click', closeMenu);
        }

        // Linklerden birine basınca kapat
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // ================= 3. HERO PREMIUM SLIDER VE KONTROLLERİ =================
    const slideBgs = document.querySelectorAll('.slide-bg');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const heroPrimaryBtn = document.getElementById('heroPrimaryBtn');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');
    const dotsWrapper = document.getElementById('sliderDotsWrapper');
    const spinnerBar = document.getElementById('spinnerBar');
    
    let currentSlide = 0;
    const slideCount = slideBgs.length;
    const duration = 6000; // 6 saniye slayt süresi
    let startTime = null;
    let autoplayTimer = null;
    let animationFrameId = null;

    if (slideCount > 0 && typeof slidesData !== 'undefined' && slidesData.length > 0) {
        
        // Dinamik olarak iki renkli başlık formatlama fonksiyonu (İkinci kelimeyi sarı yapar)
        function formatTitle(titleText) {
            const words = titleText.split(' ');
            if (words.length >= 3) {
                words[1] = `<span>${words[1]}</span>`;
                return words.join(' ');
            } else if (words.length === 2) {
                words[1] = `<span>${words[1]}</span>`;
                return words.join(' ');
            }
            return `<span>${titleText}</span>`;
        }

        // Dinamik Bağlantılı Nokta Göstergelerini Oluştur (Bottom Dots)
        if (dotsWrapper) {
            dotsWrapper.innerHTML = '';
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('div');
                dot.className = `hero-dot ${i === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    goToSlide(i);
                });
                dotsWrapper.appendChild(dot);
            }
        }

        // Noktaları güncelle
        function updateDots() {
            const dots = document.querySelectorAll('.hero-dot');
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Slayt geçiş fonksiyonu
        function goToSlide(index) {
            if (index === currentSlide) return;
            
            // Mevcut slayt görselini devredışı bırak
            slideBgs[currentSlide].classList.remove('active');
            
            // Yeni indexe geç
            currentSlide = (index + slideCount) % slideCount;
            
            // Yeni slayt görselini aktifleştir
            slideBgs[currentSlide].classList.add('active');
            
            // Noktaları güncelle
            updateDots();

            // Metinleri yumuşak geçişle güncelle
            if (heroTitle && heroDesc && slidesData[currentSlide]) {
                heroTitle.style.opacity = '0';
                heroDesc.style.opacity = '0';
                
                setTimeout(() => {
                    heroTitle.innerHTML = formatTitle(slidesData[currentSlide].title);
                    heroDesc.textContent = slidesData[currentSlide].subtitle;
                    // Buton metni ve linki (opsiyonel)
                    if (heroPrimaryBtn) {
                        const btnLabel = (slidesData[currentSlide].button_label || '').trim();
                        const btnLink = (slidesData[currentSlide].button_link || '').trim();
                        if (btnLabel !== '') {
                            // İçerik: sadece yazı, ikon HTML'i index.php tarafında var
                            const icon = heroPrimaryBtn.querySelector('i');
                            heroPrimaryBtn.textContent = btnLabel + ' ';
                            if (icon) heroPrimaryBtn.appendChild(icon);
                        }
                        if (btnLink !== '') {
                            heroPrimaryBtn.setAttribute('href', btnLink);
                            heroPrimaryBtn.style.display = '';
                        } else {
                            // Link yoksa butonu gizle (tam dinamik)
                            heroPrimaryBtn.style.display = 'none';
                        }
                    }
                    heroTitle.style.opacity = '1';
                    heroDesc.style.opacity = '1';
                }, 300);
            }

            // Zamanlayıcıyı ve daire dolumunu sıfırla
            resetAutoplay();
        }

        // Ok tıklama dinleyicileri
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentSlide - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToSlide(currentSlide + 1);
            });
        }

        // Otomatik Oynatma Spinner (Daire) Güncelleme Fonksiyonu
        function updateAutoplaySpinner(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Daire dolum animasyonu (100 -> 0)
            if (spinnerBar) {
                spinnerBar.style.strokeDashoffset = 100 - (progress * 100);
            }

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(updateAutoplaySpinner);
            } else {
                // Zaman doldu, sonraki slayda geç
                goToSlide(currentSlide + 1);
            }
        }

        function startAutoplay() {
            startTime = null;
            animationFrameId = requestAnimationFrame(updateAutoplaySpinner);
        }

        function stopAutoplay() {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }

        function resetAutoplay() {
            stopAutoplay();
            startAutoplay();
        }

        // İlk slayt butonunu hazırla
        if (heroPrimaryBtn && slidesData[0]) {
            const btnLabel = (slidesData[0].button_label || '').trim();
            const btnLink = (slidesData[0].button_link || '').trim();
            if (btnLabel !== '') {
                const icon = heroPrimaryBtn.querySelector('i');
                heroPrimaryBtn.textContent = btnLabel + ' ';
                if (icon) heroPrimaryBtn.appendChild(icon);
            }
            if (btnLink !== '') {
                heroPrimaryBtn.setAttribute('href', btnLink);
                heroPrimaryBtn.style.display = '';
            } else {
                heroPrimaryBtn.style.display = 'none';
            }
        }

        // İlk oynatmayı başlat
        startAutoplay();
    }

    // ================= 4. HIZLI REZERVASYON FORMU (AJAX FETCH) =================
    const bookingForm = document.getElementById('bookingForm');
    const bookingStatus = document.getElementById('booking-status');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Durum alanını temizle ve göster
            bookingStatus.className = 'form-status';
            bookingStatus.style.display = 'block';
            bookingStatus.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Talebiniz işleniyor...';
            
            const formData = new FormData(bookingForm);
            
            fetch('ajax.php?action=booking', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    bookingStatus.className = 'form-status success';
                    bookingStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${data.message}`;
                    bookingForm.reset(); // Formu temizle
                    
                    // 5 saniye sonra bildirimi gizle
                    setTimeout(() => {
                        bookingStatus.style.display = 'none';
                    }, 5000);
                } else {
                    bookingStatus.className = 'form-status error';
                    bookingStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data.message}`;
                }
            })
            .catch(error => {
                bookingStatus.className = 'form-status error';
                bookingStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Bağlantı hatası oluştu. Lütfen tekrar deneyin.';
                console.error('Hata:', error);
            });
        });
    }

    // ================= 6. İLETİŞİM FORMU (AJAX FETCH) =================
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contact-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Durum alanını temizle ve göster
            contactStatus.className = 'form-status';
            contactStatus.style.display = 'block';
            contactStatus.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Mesajınız iletiliyor...';
            
            const formData = new FormData(contactForm);
            
            fetch('ajax.php?action=contact', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    contactStatus.className = 'form-status success';
                    contactStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${data.message}`;
                    contactForm.reset(); // Formu temizle
                    
                    // 5 saniye sonra bildirimi gizle
                    setTimeout(() => {
                        contactStatus.style.display = 'none';
                    }, 5000);
                } else {
                    contactStatus.className = 'form-status error';
                    contactStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${data.message}`;
                }
            })
            .catch(error => {
                contactStatus.className = 'form-status error';
                contactStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Bağlantı hatası oluştu. Lütfen tekrar deneyin.';
                console.error('Hata:', error);
            });
        });
    }

    // ================= 7. AKORDEON (FAQ) GEÇİŞLERİ =================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isActive = item.classList.contains('active');

            // Tüm akordeonları kapat
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherHeader = otherItem.querySelector('.accordion-header');
                    if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    if (otherContent) {
                        otherContent.style.maxHeight = '0';
                        otherContent.style.opacity = '0';
                        otherContent.style.overflow = 'hidden';
                    }
                }
            });

            // Tıklanan akordeonu aç/kapat
            if (isActive) {
                item.classList.remove('active');
                header.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                content.style.overflow = 'hidden';
            } else {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                content.style.overflow = 'visible';
            }
        });
    });
});
