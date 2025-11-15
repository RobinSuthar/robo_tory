"use server";
import FAQPage from "@/components/blocks/faqs";
import { Feature72 } from "@/components/blocks/feature";
import Footer from "@/components/blocks/footer";
import { Hero } from "@/components/blocks/hero-section";
import AppIntegrationPage from "@/components/blocks/how-work";
import { Navbar } from "@/components/blocks/nav-bar";
import TestimonialsComponentPage from "@/components/blocks/testi-monial";
import isLoggedIn from "@/lib/actions/login-status";
import { redirect } from "next/navigation";
export default async function Home() {
  const result = await isLoggedIn();
  if (result) {
    return redirect("/chat");
  }

  return (
    <div className="px-12">
      <Navbar />
      <div className="md:px-6 2xl:px-32 lg:px-26 sm:px-0 px-0">
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
