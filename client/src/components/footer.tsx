import { Heart, Mail, Phone } from "lucide-react";
import WhatsAppButton from "./whatsapp-button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-earthy-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-sage-green rounded-xl flex items-center justify-center shadow-soft">
                <Heart className="text-white h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-playfair font-bold">Wellness Whispers</h2>
                <p className="text-sm text-white/90 font-lato">Gentle Talk Therapy</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed font-lato">
              A safe space for emotional healing and personal growth. Professional online therapy 
              that meets you wherever you are in your journey.
            </p>
            <WhatsAppButton className="bg-sage-green hover:bg-olive-green text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-warm hover:shadow-strong font-lato border-2 border-sage-green hover:border-olive-green" />
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 font-lato">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-warm-misty-beige/80 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-warm-misty-beige/80 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("approach")}
                  className="text-warm-misty-beige/80 hover:text-white transition-colors"
                >
                  Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-warm-misty-beige/80 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-warm-misty-beige/80 hover:text-white transition-colors"
                >
                  Stories
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4 text-white">Connect</h3>
            <div className="space-y-3 font-lato">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/70" />
                <span className="text-white/90">+91 98806 07355</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/70" />
                <span className="text-white/90">WhatsApp & Google Meet</span>
              </div>
              <p className="text-white/80 text-sm mt-4">
                Flexible timing • Gentle support • Professional care
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-warm-misty-beige/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-misty-beige/60 text-sm font-lato">
              © 2025 Wellness Whispers. All rights reserved.
            </p>
            <p className="text-warm-misty-beige/60 text-sm mt-4 md:mt-0 font-lato">
              Mrs. Pavan Chowdhary • Licensed Therapist • Online Sessions
            </p>
          </div>
          <div className="text-center mt-6">
            <p className="text-warm-misty-beige/60 text-sm font-lato italic">
              "From wounds to wisdom — healing begins in quiet moments."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
