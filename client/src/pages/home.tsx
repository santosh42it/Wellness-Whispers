import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
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
        <Services />
        <Approach />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
