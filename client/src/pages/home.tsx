import Header from "@/components/header";
import Hero from "@/components/hero";
import MiddleQuote from "@/components/middle-quote";
import Services from "@/components/services";
import NatureHealing from "@/components/nature-healing";
import Approach from "@/components/approach";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <Hero />
        
        {/* Breathing space section */}
        <section className="py-8 lg:py-12 bg-gradient-to-b from-cream/30 to-warm-misty-beige/20 relative">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent via-peach/5 to-sage/5"></div>
        </section>
        
        <MiddleQuote />
        <Services />
        <NatureHealing />
        <Approach />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
