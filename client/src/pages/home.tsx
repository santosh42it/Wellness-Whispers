import Header from "@/components/header";
import Hero from "@/components/hero";
import MiddleQuote from "@/components/middle-quote";
import Services from "@/components/services";
import NatureHealing from "@/components/nature-healing";
import Approach from "@/components/approach";
import Pricing from "@/components/pricing";
import CompassionQuote from "@/components/compassion-quote";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <Hero />
        
        {/* Gentle transition with meaningful content */}
        <section className="py-12 bg-gradient-to-b from-cream/20 to-transparent relative">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xl font-light text-earthy-brown/90 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Sometimes the hardest step is reaching out. You're already here — that takes courage.
            </p>
          </div>
        </section>
        
        <MiddleQuote />
        <Services />
        <NatureHealing />
        <Approach />
        <Pricing />
        <CompassionQuote />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
