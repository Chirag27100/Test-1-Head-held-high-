import Hero from '../components/landing/Hero';
import ValueProposition from '../components/landing/ValueProposition';
import ServicesGrid from '../components/landing/ServicesGrid';
import HowItWorks from '../components/landing/HowItWorks';
import WhyChooseUs from '../components/landing/WhyChooseUs';
import Testimonials from '../components/landing/Testimonials';
import CTASection from '../components/landing/CTASection';
import FAQ from '../components/landing/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
