import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
// import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <TrustStrip /> */}
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQSection />
      <CTAFinal />
      <Footer />
      {/* <WaFloat /> */}
    </>
  );
}
