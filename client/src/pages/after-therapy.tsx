import { useEffect } from "react";
import Header from "@/components/header";
import AfterTherapy from "@/components/after-therapy";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function AfterTherapyPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="Life After Therapy - Wellness Whispers"
        description="Discover what life looks like after therapy and how the healing journey continues. Learn about post-therapy growth and maintaining mental wellness."
        keywords="therapy, healing, post-therapy, mental wellness, recovery"
      />
      <Header />
      <main className="relative z-10 pt-20">
        <AfterTherapy />
      </main>
      <Footer />
    </div>
  );
}