import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import dreamyAestheticImg from "@assets/nature-landscape-with-dreamy-aesthetic.jpg";

export default function FAQPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is therapy and how can it help me?",
      answer: "Therapy is a safe, confidential space where you can explore your thoughts, feelings, and experiences with a trained professional. It can help you develop coping strategies, gain insights into patterns in your life, and work through challenges like anxiety, depression, relationships, and personal growth."
    },
    {
      question: "How do I know if I need therapy?",
      answer: "If you're feeling overwhelmed, stuck, anxious, sad, or simply want to understand yourself better, therapy can be beneficial. You don't need to be in crisis to seek support. Many people find therapy helpful for personal growth, life transitions, or developing better coping skills."
    },
    {
      question: "What happens in the first session?",
      answer: "The first session is about getting to know each other. We'll discuss what brought you to therapy, your goals, and what you hope to achieve. I'll explain my approach and answer any questions you have. This is also your chance to see if we feel like a good fit for working together."
    },
    {
      question: "How long does therapy take?",
      answer: "The length of therapy varies greatly depending on your goals and needs. Some people find relief in a few sessions, while others benefit from longer-term support. We'll regularly check in about your progress and adjust our work together as needed."
    },
    {
      question: "Is everything I say confidential?",
      answer: "Yes, confidentiality is a cornerstone of therapy. What you share remains private, with very few exceptions related to safety (if you're in danger of harming yourself or others, or if there's suspected abuse of a vulnerable person)."
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Yes, I offer secure online therapy sessions that provide the same level of care and confidentiality as in-person sessions. Many clients find online sessions convenient and comfortable, especially for those with busy schedules or mobility concerns."
    },
    {
      question: "What therapy approaches do you use?",
      answer: "I use a gentle, integrative approach that includes mindfulness, narrative therapy, person-centered therapy, and inner child healing. Each session is tailored to your unique needs and preferences, always maintaining a warm, non-judgmental environment."
    },
    {
      question: "How much do sessions cost?",
      answer: "Please refer to the pricing section on our website for current session rates. I also keep a few sessions available each month for those who need support but cannot afford full fees, offered with compassion and trust."
    },
    {
      question: "How often should I attend sessions?",
      answer: "Most clients benefit from weekly sessions initially, though this can be adjusted based on your needs and circumstances. Some prefer bi-weekly sessions, while others may need more frequent support during difficult times. We'll find a rhythm that works for you."
    },
    {
      question: "What if I don't feel comfortable with you?",
      answer: "It's important that you feel comfortable and safe with your therapist. If we don't feel like a good fit, I'm happy to help you find another therapist who might be better suited to your needs. Your wellbeing is what matters most."
    },
    {
      question: "Can therapy help with anxiety and depression?",
      answer: "Yes, therapy can be very effective for anxiety and depression. Through gentle exploration, coping strategies, and a supportive relationship, many people find significant relief from their symptoms and develop tools for long-term wellbeing."
    },
    {
      question: "Do you work with couples or families?",
      answer: "I primarily focus on individual therapy, providing personalized support for your unique healing journey. For couples or family therapy, I can provide referrals to qualified therapists who specialize in those areas."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can reach out through WhatsApp using the button on our website, or through the contact form. I'll respond within 24 hours to discuss your needs and find a suitable time for your first session."
    },
    {
      question: "What should I expect between sessions?",
      answer: "Between sessions, you might notice thoughts and feelings that relate to our work together. Some clients keep a journal or practice techniques we've discussed. There's no pressure to do anything specific - healing happens at your own pace."
    },
    {
      question: "Is it normal to feel emotional during or after therapy?",
      answer: "Absolutely. Therapy often brings up emotions as we explore important topics. Feeling emotional is a normal part of the healing process. I'll support you through these feelings and help you process them in a safe, nurturing environment."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="FAQ - Wellness Whispers"
        description="Frequently asked questions about therapy, counseling services, and what to expect. Get answers to common questions about mental health support."
        keywords="therapy FAQ, counseling questions, mental health, therapy process, Ms. Pavan Chowdhary"
      />
      <Header />
      <main className="relative z-10 pt-20">
        
        {/* Hero Section with Background Image */}
        <div className="min-h-screen relative flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={dreamyAestheticImg}
              alt="Dreamy nature landscape for FAQ section"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-kinfolk font-extralight text-white leading-tight uppercase drop-shadow-lg mb-6">
                FAQ
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-nunito text-white/95 leading-relaxed drop-shadow-md font-light max-w-3xl mx-auto mb-4">
                Your clarity matters. Every journey begins with curiosity —
                and here you'll find simple answers to questions people often ask.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="pt-24 pb-16 relative bg-gradient-to-br from-sage/5 via-soft-beige/30 to-peach/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-sage/10 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-sage/5 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-nunito font-semibold text-dark-brown pr-4">
                        {faq.question}
                      </h3>
                      <div className={`text-sage-green text-2xl transform transition-transform duration-200 ${openFAQ === index ? 'rotate-45' : ''}`}>
                        +
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-dark-brown font-nunito leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-16 bg-peach-blush/30 backdrop-blur-sm p-8 rounded-2xl shadow-soft text-center">
                <h3 className="text-2xl font-kinfolk font-light text-earthy-brown mb-4">
                  Still have questions?
                </h3>
                <p className="text-lg text-dark-brown font-nunito leading-relaxed mb-6">
                  Feel free to reach out through WhatsApp or our contact form. I'm here to help answer any specific questions about your therapeutic journey.
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