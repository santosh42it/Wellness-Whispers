import WhatsAppButton from "./whatsapp-button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Opening Message */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-earthy-brown mb-8 leading-tight">
              Healing begins in quiet moments, 
              <span className="block text-sage-green">one breath, one step at a time.</span>
            </h2>
          </div>

          {/* Main CTA Section - Redesigned */}
          <div className="space-y-8">
            {/* Elegant WhatsApp Button Container */}
            <div className="relative bg-gradient-to-br from-sage-green/10 via-white/70 to-peach-blush/15 backdrop-blur-sm p-10 rounded-3xl shadow-warm border border-sage-green/20 overflow-hidden">
              {/* Subtle decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-sage-green/5 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-peach-blush/10 rounded-full"></div>
              
              <div className="relative z-10 text-center space-y-6">
                {/* Refined messaging */}
                <div className="space-y-3">
                  <p className="text-lg text-charcoal-grey font-lato leading-relaxed">
                    Ready to take the first step toward healing?
                  </p>
                  <p className="text-sm text-sage-green font-medium">
                    Start with a gentle conversation
                  </p>
                </div>
                
                {/* Enhanced WhatsApp Button */}
                <div className="flex flex-col items-center space-y-4">
                  <WhatsAppButton className="bg-gradient-to-r from-sage-green to-olive-green hover:from-olive-green hover:to-sage-green text-white px-10 py-4 text-lg font-medium rounded-2xl shadow-warm hover:shadow-strong transition-all duration-300 transform hover:scale-105 border-2 border-sage-green/20 hover:border-white/20">
                    Begin Your Journey
                  </WhatsAppButton>
                  
                  {/* Elegant secondary action */}
                  <a 
                    href="#services" 
                    className="text-earthy-brown/80 hover:text-sage-green font-medium text-base transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span>Learn more about our approach</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-playfair font-bold text-earthy-brown mb-4">
                  How We Connect
                </h3>
                <div className="space-y-4 text-charcoal-grey font-lato">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                    <span>WhatsApp: +91 98806 07355</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                    <span>Google Meet sessions available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                    <span>Flexible timing that works with your life</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-playfair font-bold text-earthy-brown mb-4">
                  What to Expect
                </h3>
                <div className="space-y-4 text-charcoal-grey font-lato">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-peach-blush rounded-full"></div>
                    <span>Warm, non-judgmental conversation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-peach-blush rounded-full"></div>
                    <span>Gentle guidance at your pace</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-peach-blush rounded-full"></div>
                    <span>Safe space to process emotions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="bg-peach-blush/30 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
              <p className="text-lg text-charcoal-grey font-lato leading-relaxed italic">
                "Sometimes the most courageous thing you can do is simply reach out. 
                Your emotional well-being matters, and there's no 'right' time to start healing 
                except now, if you feel ready."
              </p>
              <p className="text-sage-green font-playfair text-lg mt-4">
                — Mrs. Pavan Chowdhary
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal nature texture */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-10"></div>
    </section>
  );
}