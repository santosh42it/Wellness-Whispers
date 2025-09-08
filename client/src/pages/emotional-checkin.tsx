import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import dreamyNatureImg from "@assets/nature-landscape-with-dreamy.jpg";

export default function EmotionalCheckInPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="Emotional Check-In - Wellness Whispers"
        description="Take a moment to pause and reflect on how you're really feeling today. A gentle self-reflection tool for emotional awareness."
        keywords="emotional check-in, self-reflection, mental health, emotional awareness, wellness"
      />
      <Header />
      <main className="relative z-10 pt-20">
        
        {/* Hero Section with Background Image */}
        <div className="min-h-screen relative flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={dreamyNatureImg}
              alt="Dreamy nature landscape for emotional reflection"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-kinfolk font-extralight text-white leading-tight uppercase drop-shadow-lg">
                EMOTIONAL CHECK-IN
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-nunito text-white/95 leading-relaxed drop-shadow-md font-light max-w-3xl mx-auto">
                Take a moment to pause and reflect on how you're really feeling today. There are no right or wrong answers — this is only for you.
              </p>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <section className="pt-24 pb-16 relative bg-gradient-to-br from-sage/5 via-soft-beige/30 to-peach/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              <h2 className="text-3xl lg:text-4xl font-kinfolk font-light text-dark-brown mb-12 text-center">
                Questions
              </h2>

              <div className="space-y-8">
                {[
                  "How is your mood today? (😊 😐 😞)",
                  "Do you feel more energized or tired lately?",
                  "Have you been able to focus on daily tasks?",
                  "Are you feeling connected to others or more withdrawn?",
                  "What is one emotion that shows up most often for you?",
                  "Do you feel hopeful about the future, or more uncertain?",
                  "How well are you sleeping these days?",
                  "Are you able to show kindness to yourself when things go wrong?"
                ].map((question, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-sage/10">
                    <p className="text-lg font-nunito text-dark-brown leading-relaxed">
                      <span className="font-semibold text-sage-green">{index + 1}.</span> {question}
                    </p>
                  </div>
                ))}
              </div>

              {/* Reflection Section */}
              <div className="mt-16 bg-peach-blush/30 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-kinfolk font-light text-earthy-brown mb-6 flex items-center">
                  🌿 Reflection
                </h3>
                <p className="text-lg text-dark-brown font-nunito leading-relaxed mb-6">
                  Notice your answers — do they show balance, stress, or a mix of both? You may even want to jot them down or doodle them.
                </p>
                <p className="text-lg text-dark-brown font-nunito leading-relaxed">
                  ✨ If your answers feel heavy, uncertain, or confusing, it may be a gentle sign that extra support could help.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 bg-sage/10 backdrop-blur-sm p-6 rounded-xl border border-sage/20">
                <h4 className="text-lg font-kinfolk font-semibold text-earthy-brown mb-4 flex items-center">
                  ⚠️ Disclaimer
                </h4>
                <p className="text-sm text-dark-brown font-nunito leading-relaxed">
                  This check-in is for self-reflection only. It is not a diagnostic tool or substitute for therapy. If you are in crisis or experiencing overwhelming distress, please contact a mental health professional or emergency service immediately.
                </p>
              </div>

            </div>
          </div>

          {/* Subtle nature texture overlay */}
          <div className="nature-texture absolute inset-0 pointer-events-none opacity-15"></div>
        </section>

      </main>
      <Footer />
    </div>
  );
}