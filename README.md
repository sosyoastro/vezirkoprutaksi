# Vezirköprü Taksi – Next.js

[vezirkoprutaksi.com](https://vezirkoprutaksi.com) sitesinin Next.js 16 sürümü. Tasarım, metinler, görseller ve blog yazıları canlı PHP sitesinden birebir taşındı.

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme: http://localhost:3000
npm run build    # üretim derlemesi
npm run start    # derlenmiş siteyi çalıştırır
```

Node.js 20.9 veya üstü gerekir.

## İçerik nasıl düzenlenir?

Bütün metinler tek dosyada: **`src/data/site.ts`**

- Telefon, adres, WhatsApp numarası, SEO başlığı/açıklaması → `site`
- Slider başlıkları ve görselleri → `slides`
- Hakkımızda, Neden Biz, Hizmetler, SSS → ilgili bölümler
- **Yeni blog yazısı** → `blogPosts` dizisine yeni bir nesne ekleyin, görselini `public/uploads/` içine koyun. Sayfa (`/blog/<slug>`) ve site haritası otomatik oluşur.

## Yapı

```
src/app/page.tsx              Ana sayfa
src/app/blog/page.tsx         Blog listesi
src/app/blog/[slug]/page.tsx  Blog yazısı
src/app/globals.css           Canlı sitenin style.css + blog.css dosyaları
src/components/               Header, HeroSlider, Faq, Contact, Footer, bölümler
src/data/site.ts              Tüm içerik
public/uploads/               Görseller
```

## Canlı siteden farklar

- **İletişim formu** canlı sitede PHP (`ajax.php`) ile kaydediliyordu. Burada sunucu tarafı olmadığından form, yazılanları hazır mesaj olarak **WhatsApp**'a aktarır.
- WhatsApp linkleri `wa.me/90543...` biçimine düzeltildi (eskisi ülke kodu olmadığı için çalışmıyordu).
- "Rezervasyon" linkleri sayfada karşılığı olmayan bir bölüme gidiyordu; artık "Hemen Arayın" bandına gidiyor.
- Eski adresler kalıcı olarak yönlendirilir: `index.php` → `/`, `blog.php` → `/blog`, `blog-detay.php?slug=...` → `/blog/...`
- Yönetim paneli yok; içerik `src/data/site.ts` üzerinden düzenlenir.
