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
        <section className="py-16 lg:py-24 bg-gradient-to-b from-cream/50 to-warm-misty-beige/30 relative">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent via-peach/5 to-sage/5"></div>
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
