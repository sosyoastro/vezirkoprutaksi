import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, formatDateTR, site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [post.image],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.summary,
    description: post.description,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <div className="blog-page-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header active="blog" />
      <main className="blog-page">
        <article className="blog-detail">
          <div className="container blog-detail-container">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{post.title}</span>
            </nav>

            <time className="blog-detail-date" dateTime={post.date}>
              {formatDateTR(post.date)}
            </time>

            <h1 className="blog-detail-title">{post.title}</h1>

            <div className="blog-detail-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} />
            </div>

            <div className="blog-detail-content">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="blog-detail-footer">
              <Link href="/blog" className="blog-back-link">
                <i className="fa-solid fa-arrow-left"></i> Tüm Yazılar
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
