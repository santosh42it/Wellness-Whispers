import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import WhatsAppButton from "./whatsapp-button";
import logoPath from "@assets/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (location !== "/") {
      navigate("/");
      // Wait a moment for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we're already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goToHome = () => {
    if (location !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      // If we're already on homepage, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-warm-misty-beige/30 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={goToHome}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src={logoPath}
              alt="Wellness Whispers Logo"
              className="h-16 w-auto"
            />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 xl:space-x-6">
            <button
              onClick={goToHome}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              Home
            </button>
            <Link 
              href="/about"
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              Meet Me
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              Approach
            </button>
            <Link 
              href="/after-therapy"
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              Bright Days
            </Link>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              Gift of Healing
            </button>
            <Link 
              href="/emotional-checkin"
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              Check-In
            </Link>
            <Link 
              href="/faq"
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-nunito"
            >
              FAQ
            </Link>
            <WhatsAppButton className="text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-warm hover:shadow-strong font-nunito text-sm" />
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-12 h-12"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-warm-misty-beige/30">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={goToHome}
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
              >
                Home
              </button>
              <Link
                href="/about"
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meet Me
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
              >
                Approach
              </button>
              <Link
                href="/after-therapy"
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bright Days
              </Link>
              <Link
                href="/emotional-checkin"
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Emotional Check-In
              </Link>
              <Link
                href="/faq"
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <WhatsAppButton className="text-white px-6 py-3 rounded-xl transition-all duration-300 w-full justify-center shadow-warm hover:shadow-strong" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
