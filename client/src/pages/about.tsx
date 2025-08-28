import { useEffect } from "react";
import Header from "@/components/header";
import About from "@/components/about";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function AboutPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="Meet Me - Wellness Whispers"
        description="Learn about my journey as a licensed therapist and my approach to mental health care. Discover how I can help you on your healing journey."
        keywords="therapist, mental health, therapy, counseling, meet me"
      />
      <Header />
      <main className="relative z-10 pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}