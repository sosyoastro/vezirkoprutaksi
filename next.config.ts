import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  // Eski PHP sitesinin adreslerini (Google'da kayıtlı olanlar) yeni sayfalara kalıcı olarak yönlendir
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/blog.php", destination: "/blog", permanent: true },
      {
        source: "/blog-detay.php",
        has: [{ type: "query", key: "slug" }],
        destination: "/blog/:slug",
        permanent: true,
      },
      { source: "/blog-detay.php", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
