import Hero from '@/components/home/Hero';
import ServiceBento from '@/components/home/ServiceBento';
import WhyNeoSkin from '@/components/home/WhyNeoSkin';
import TrustBar from '@/components/home/TrustBar';
import Testimonials from '@/components/home/Testimonials';
import FirstVisit from '@/components/home/FirstVisit';
import ResultsTeaser from '@/components/home/ResultsTeaser';
import CTABanner from '@/components/home/CTABanner';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceBento />
      <ScrollReveal>
        <WhyNeoSkin />
      </ScrollReveal>
      <TrustBar />
      <Testimonials />
      <ScrollReveal>
        <FirstVisit />
      </ScrollReveal>
      <ScrollReveal>
        <ResultsTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <CTABanner />
      </ScrollReveal>
    </>
  );
}
