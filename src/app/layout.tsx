import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Vezirköprü 7/24 Acil Taksi | 0543 951 51 01",
  description: "Vezirköprü'de 7/24 hızlı, konforlu ve güvenilir taksi hizmeti. Şehir içi ve şehirler arası transfer, havalimanı transferi.",
  keywords: "vezirköprü taksi, vezirköprü acil taksi, samsun vezirköprü taksi, 7/24 taksi, vezirköprü nöbetçi taksi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow flex flex-col pt-[120px] lg:pt-[140px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
