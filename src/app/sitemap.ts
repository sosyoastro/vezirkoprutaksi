import type { MetadataRoute } from "next";
import { about, blogPosts, facts, faq, site, slides } from "@/data/site";

// /sitemap.xml adresinde otomatik oluşur. Yeni blog yazıları kendiliğinden eklenir.
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => `${site.url}${path}`;
  const latestPost = blogPosts.reduce((max, p) => (p.date > max ? p.date : max), "");

  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [...slides.map((s) => s.image), about.image, facts.bgImage, facts.fgImage, faq.image].map(abs),
    },
    {
      url: `${site.url}/seffaf-ucret-politikasi`,
      lastModified: new Date("2026-11-21"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${site.url}/blog`,
      lastModified: latestPost ? new Date(latestPost) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [abs(p.image)],
    })),
  ];
}
