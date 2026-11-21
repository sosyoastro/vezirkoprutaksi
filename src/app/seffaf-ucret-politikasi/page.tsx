import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pricingPolicy, site } from "@/data/site";

export const metadata: Metadata = {
  title: pricingPolicy.title,
  description: pricingPolicy.description,
  alternates: { canonical: `/${pricingPolicy.slug}` },
  openGraph: {
    title: pricingPolicy.title,
    description: pricingPolicy.description,
    url: `/${pricingPolicy.slug}`,
    images: [site.ogImage],
  },
};

export default function PricingPolicyPage() {
  return (
    <div className="blog-page-body">
      <Header active="ucret" />
      <main className="blog-page">
        <article className="blog-detail">
          <div className="container blog-detail-container">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Ana Sayfa</Link>
              <span>/</span>
              <span>{pricingPolicy.title}</span>
            </nav>

            <h1 className="blog-detail-title">{pricingPolicy.title}</h1>

            <div className="blog-detail-content">
              {pricingPolicy.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="blog-detail-footer" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={site.phoneHref} className="btn btn-primary">
                <i className="fa-solid fa-phone" style={{ marginRight: 6 }}></i> Fiyat Bilgisi Al: {site.phone}
              </a>
              <Link href="/" className="blog-back-link">
                <i className="fa-solid fa-arrow-left"></i> Ana Sayfa
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
