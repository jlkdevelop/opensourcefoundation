import Header from "@/components/header";
import Hero from "@/components/hero";
import FeatureCards from "@/components/feature-cards";
import Metrics from "@/components/metrics";
import WhySection from "@/components/why-section";
import EmailSignup from "@/components/email-signup";
import AlternatingSections from "@/components/alternating-sections";
import Testimonials from "@/components/testimonials";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <Metrics />
        <WhySection />
        <EmailSignup />
        <AlternatingSections />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
