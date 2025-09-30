
import { useEffect } from "react";
import Header from "@/components/header";
import Services from "@/components/services";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function ServicesPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="Services - Wellness Whispers"
        description="Professional therapy services for life's difficult moments. From anxiety and depression to relationship support and personal growth."
        keywords="therapy services, mental health, anxiety support, depression help, relationship counseling"
      />
      <Header />
      <main className="relative z-10 pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
