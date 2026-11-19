import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import { About, CtaBanner, Facts, Services, Ticker, WhyChoose } from "@/components/Sections";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { faq } from "@/data/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <HeroSlider />
      <Ticker />
      <About />
      <WhyChoose />
      <Facts />
      <CtaBanner />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
