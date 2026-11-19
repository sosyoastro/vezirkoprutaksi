import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s - ${site.title}` },
  description: site.description,
  keywords: site.keywords,
  robots: { index: true, follow: true },
  icons: { icon: site.favicon },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: site.name,
  url: `${site.url}/`,
  telephone: site.phone,
  image: `${site.url}${site.ogImage}`,
  areaServed: "Vezirköprü, Samsun",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Vezirköprü",
    addressRegion: "Samsun",
    addressCountry: "TR",
  },
  openingHours: "Mo-Su 00:00-23:59",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </head>
      <body>
        {children}

        {/* Google Ads etiketi (canlı siteyle aynı) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.googleAdsId}');
gtag('event', 'conversion', {'send_to': '${site.googleAdsConversion}'});`}
        </Script>
      </body>
    </html>
  );
}
