import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import WhatsAppButton from "./whatsapp-button";

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
            <div className="w-12 h-12 bg-sage-green rounded-xl flex items-center justify-center shadow-soft">
              <Heart className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-earthy-brown">Wellness Whispers</h1>
              <p className="text-sm text-sage-green font-lato">Gentle Talk Therapy</p>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={goToHome}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-lato"
            >
              Home
            </button>
            <Link 
              href="/about"
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-lato"
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-lato"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-lato"
            >
              Approach
            </button>
            <Link 
              href="/after-therapy"
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-lato"
            >
              After Therapy
            </Link>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-lato"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-charcoal-grey hover:text-sage-green transition-colors duration-300 font-lato"
            >
              Stories
            </button>
            <WhatsAppButton className="bg-sage-green hover:bg-olive-green text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-warm hover:shadow-strong font-lato border-2 border-sage-green hover:border-olive-green" />
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
                About
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
                After Therapy
              </Link>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-warm-gray hover:text-dark-brown transition-gentle py-2"
              >
                Testimonials
              </button>
              <WhatsAppButton className="bg-sage-green hover:bg-olive-green text-white px-6 py-3 rounded-xl transition-all duration-300 w-full justify-center shadow-warm hover:shadow-strong border-2 border-sage-green hover:border-olive-green" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
