import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, formatDateTR } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Vezirköprü taksi, transfer, ulaşım ve seyahat ipuçlarımızı buradan takip edebilirsiniz.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="blog-page-body">
      <Header active="blog" />
      <main className="blog-page">
        <section className="blog-page-hero">
          <div className="container">
            <span className="blog-page-tag">Blog</span>
            <h1>Güncel Yazılar</h1>
            <p>Transfer, ulaşım ve seyahat ipuçlarımızı buradan takip edebilirsiniz.</p>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid">
              {posts.map((p) => (
                <article className="blog-card" key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="blog-card-image-link">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </Link>
                  <div className="blog-card-body">
                    <time className="blog-card-date" dateTime={p.date}>
                      {formatDateTR(p.date)}
                    </time>
                    <h2>
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h2>
                    <p>{p.summary}</p>
                    <Link href={`/blog/${p.slug}`} className="blog-card-link">
                      Devamını Oku <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
