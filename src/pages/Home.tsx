import Hero from '../components/landing/Hero';
import SocialProofBar from '../components/landing/SocialProofBar';
import ServicesGrid from '../components/landing/ServicesGrid';
import HowItWorks from '../components/landing/HowItWorks';
import WhyChooseUs from '../components/landing/WhyChooseUs';
import FAQ from '../components/landing/FAQ';
import CTASection from '../components/landing/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <CTASection />
    </>
  );
}
