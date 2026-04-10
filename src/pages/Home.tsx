import Hero from '../components/landing/Hero';
import SocialProofBar from '../components/landing/SocialProofBar';
import ProblemStatement from '../components/landing/ProblemStatement';
import ServicesGrid from '../components/landing/ServicesGrid';
import HowItWorks from '../components/landing/HowItWorks';
import WhyChooseUs from '../components/landing/WhyChooseUs';
import Testimonials from '../components/landing/Testimonials';
import LeadMagnet from '../components/landing/LeadMagnet';
import FAQ from '../components/landing/FAQ';
import CTASection from '../components/landing/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemStatement />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <LeadMagnet />
      <FAQ />
      <CTASection />
    </>
  );
}
