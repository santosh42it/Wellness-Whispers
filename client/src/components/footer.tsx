import { Heart, Mail, Phone } from "lucide-react";
import WhatsAppButton from "./whatsapp-button";
import logoFooterPath from "@assets/logo-footer.png";
import footerBgImage from "@assets/footer-bg.jpg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={footerBgImage}
          alt="Golden grass field footer background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={logoFooterPath}
                  alt="Wellness Whispers Footer Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white mb-6 max-w-md leading-relaxed font-nunito text-xl font-medium drop-shadow-lg">
                A safe space for emotional healing and personal growth. Professional online therapy 
                that meets you wherever you are in your journey.
              </p>
              <WhatsAppButton className="text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-warm hover:shadow-strong font-lato" />
            </div>
            
            <div>
              <h3 className="text-2xl font-cormorant font-medium mb-6 text-white drop-shadow-lg">Quick Links</h3>
              <ul className="space-y-4 font-nunito">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white/90 hover:text-peach transition-colors font-semibold text-lg drop-shadow-sm"
                  >
                    Meet Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/90 hover:text-peach transition-colors font-semibold text-lg drop-shadow-sm"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("approach")}
                    className="text-white/90 hover:text-peach transition-colors font-semibold text-lg drop-shadow-sm"
                  >
                    Approach
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-white/90 hover:text-peach transition-colors font-semibold text-lg drop-shadow-sm"
                  >
                    Gift Of Healing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-white/90 hover:text-peach transition-colors font-semibold text-lg drop-shadow-sm"
                  >
                    Stories
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-cormorant font-medium mb-6 text-white drop-shadow-lg">Connect</h3>
              <div className="space-y-4 font-nunito">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-peach drop-shadow-sm" />
                  <span className="text-white font-semibold text-lg drop-shadow-sm">+91 98806 07355</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-peach drop-shadow-sm" />
                  <span className="text-white font-semibold text-lg drop-shadow-sm">WhatsApp & Google Meet</span>
                </div>
                <p className="text-white/80 text-base mt-4 font-semibold drop-shadow-sm">
                  Flexible timing • Gentle support • Professional care
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/30 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/70 text-base font-nunito font-medium drop-shadow-sm">
                © 2025 Wellness Whispers. All rights reserved.
              </p>
              <p className="text-white/70 text-base mt-4 md:mt-0 font-nunito font-medium drop-shadow-sm">
                Ms. Pavan Chowdhary • Qualified Therapist • Online Sessions
              </p>
            </div>
            <div className="text-center mt-6">
              <p className="text-white/80 text-lg font-cormorant italic font-medium drop-shadow-lg">
                "From wounds to wisdom — healing begins in quiet moments."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
