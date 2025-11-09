import FAQPage from "@/components/blocks/faqs";
import { Feature72 } from "@/components/blocks/feature";
import Footer from "@/components/blocks/footer";
import { Hero } from "@/components/blocks/hero-section";
import AppIntegrationPage from "@/components/blocks/how-work";
import { Navbar } from "@/components/blocks/nav-bar";
import TestimonialsComponentPage from "@/components/blocks/testi-monial";
export default function Home() {
  return (
    <div className="px-12">
      <Navbar />
      <div className="px-32">
        <Hero />
        <Feature72 title="Service" />
        <AppIntegrationPage />
        <TestimonialsComponentPage />
        <FAQPage />
      </div>
      <Footer />
    </div>
  );
}
