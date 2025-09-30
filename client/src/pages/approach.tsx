
import { useEffect } from "react";
import Header from "@/components/header";
import Approach from "@/components/approach";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function ApproachPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="Therapeutic Approach - Wellness Whispers"
        description="Gentle tools for healing including mindfulness, CBT, narrative therapy, inner child healing, and strengths-based approaches."
        keywords="therapy approach, mindfulness therapy, CBT, narrative therapy, inner child healing, therapeutic methods"
      />
      <Header />
      <main className="relative z-10 pt-20">
        <Approach />
      </main>
      <Footer />
    </div>
  );
}
