
import { useEffect } from "react";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function PricingPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="Gift of Healing - Wellness Whispers"
        description="Therapy sessions offered in the spirit of care and service. Accessible healing support with flexible timing and professional care."
        keywords="therapy pricing, affordable therapy, healing sessions, mental health support"
      />
      <Header />
      <main className="relative z-10 pt-20">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
