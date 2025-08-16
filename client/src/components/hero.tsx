import WhatsAppButton from "./whatsapp-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import hero1Image from "@assets/hero1.jpg";
import hero2Image from "@assets/hero2.jpg";

// Helper function to get content from content blocks
function getContentValue(contentBlocks: any[], key: string, defaultValue: string): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find(block => block.blockKey === key);
  return block?.content || defaultValue;
}

// Use uploaded images directly
const heroImages = {
  "hero-1": hero1Image,
  "hero-2": hero2Image,
};

function getImageUrl(galleryImages: any, imageId: string, fallbackUrl: string) {
  // Ensure galleryImages is an array
  if (!Array.isArray(galleryImages)) {
    console.log(`⚠️ No gallery images available for ${imageId}, using fallback`);
    return fallbackUrl;
  }
  
  console.log(`🔍 Looking for image match for ${imageId} among ${galleryImages.length} images`);
  
  // Find image by title keywords
  let galleryImage;
  
  if (imageId === "hero-1") {
    galleryImage = galleryImages.find(img => {
      const title = img.title?.toLowerCase() || '';
      const match = title.includes("healing") || title.includes("forest");
      if (match) console.log(`✅ Found ${imageId} match: "${img.title}"`);
      return match;
    });
  } else if (imageId === "hero-2") {
    galleryImage = galleryImages.find(img => {
      const title = img.title?.toLowerCase() || '';
      const match = title.includes("mountain") || title.includes("reflection");
      if (match) console.log(`✅ Found ${imageId} match: "${img.title}"`);
      return match;
    });
  } else if (imageId === "hero-3") {
    galleryImage = galleryImages.find(img => {
      const title = img.title?.toLowerCase() || '';
      const match = title.includes("rainy") || title.includes("window") || title.includes("reflection");
      if (match) console.log(`✅ Found ${imageId} match: "${img.title}"`);
      return match;
    });
  }
  
  if (galleryImage?.imageUrl) {
    console.log(`🎯 Using uploaded image for ${imageId}: "${galleryImage.title}" -> ${galleryImage.imageUrl}`);
    // Use the imageUrl directly if it's already a path, or convert from storage URL
    if (galleryImage.imageUrl.startsWith('/objects/')) {
      return galleryImage.imageUrl;
    } else if (galleryImage.imageUrl.includes('storage.googleapis.com')) {
      const url = new URL(galleryImage.imageUrl);
      const pathParts = url.pathname.split('/');
      const objectPath = pathParts.slice(3).join('/'); // Remove bucket name
      const finalUrl = `/objects/${objectPath}`;
      console.log(`🔄 Converted storage URL to: ${finalUrl}`);
      return finalUrl;
    }
    return galleryImage.imageUrl;
  }
  
  console.log(`❌ No match found for ${imageId}, using fallback: ${fallbackUrl}`);
  return fallbackUrl;
}

export default function Hero() {
  // Fetch gallery images with cache busting
  const { data: galleryImages, isLoading, error, refetch } = useQuery({
    queryKey: ["/api/gallery"],
    retry: false,
    refetchOnWindowFocus: true,
    staleTime: 0, // Always consider data stale to force refetch
    gcTime: 0, // Don't cache the result (cacheTime is now gcTime in React Query v5)
  });

  // Fetch content blocks for dynamic text
  const { data: contentBlocks } = useQuery({
    queryKey: ["/api/content"],
    retry: false,
    refetchOnWindowFocus: true,
    staleTime: 0,
    gcTime: 0,
  });

  // Use fallback images while loading or if fetch fails
  const safeGalleryImages = Array.isArray(galleryImages) ? galleryImages : [];
  const safeContentBlocks = Array.isArray(contentBlocks) ? contentBlocks : [];

  // Test image accessibility directly
  useEffect(() => {
    if (safeGalleryImages.length > 0) {
      const latestImage = safeGalleryImages[0];
      if (latestImage?.imageUrl?.includes('storage.googleapis.com')) {
        // Test direct access to the normalized URL
        const normalizedUrl = latestImage.imageUrl.match(/\.private\/(.+)/)?.[1];
        if (normalizedUrl) {
          const testUrl = `/objects/${normalizedUrl}`;
          console.log("Testing image accessibility:", testUrl);
          
          // Test if the image loads
          const testImg = new Image();
          testImg.onload = () => console.log("✅ Image loads successfully:", testUrl);
          testImg.onerror = () => console.error("❌ Image failed to load:", testUrl);
          testImg.src = testUrl;
        }
      }
    }
  }, [safeGalleryImages]);

  // Debug: Check current gallery state
  console.log("Current gallery images count:", safeGalleryImages.length);
  console.log("Gallery data:", safeGalleryImages);
  console.log("Content blocks:", safeContentBlocks);

  // Use uploaded images directly instead of gallery system
  const heroImage1 = heroImages["hero-1"];
  const heroImage2 = heroImages["hero-2"];

  console.log("Final hero URLs:", { heroImage1, heroImage2 });

  // Get dynamic content values
  const heroTitle = getContentValue(safeContentBlocks, "hero_title", "Welcome to Your Healing Space");
  const heroSubtitle = getContentValue(safeContentBlocks, "hero_subtitle", "Here, you're safe to heal.");
  const heroDescription = getContentValue(safeContentBlocks, "hero_description", "Begin therapy today, in a space built on trust, warmth, and healing.");
  const heroButtonText = getContentValue(safeContentBlocks, "hero_button_text", "Start Session");
  const heroQuote1 = getContentValue(safeContentBlocks, "hero_quote_1", "Healing does not shout it whispers");
  const heroQuote2 = getContentValue(safeContentBlocks, "hero_quote_2", "You are not too much");

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-6">
        
        {/* Hero Content - Single Column Layout */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main Hero Text */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-dark-brown leading-tight">
              {heroTitle}
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl italic text-dark-brown font-light max-w-3xl mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {heroSubtitle}
            </p>
            
            <p className="text-lg md:text-xl text-dark-brown font-lato leading-relaxed max-w-2xl mx-auto">
              {heroDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton className="bg-sage hover:bg-olive text-white px-10 py-5 text-lg font-medium rounded-2xl shadow-warm hover:shadow-strong transition-all duration-300 border-2 border-sage hover:border-olive transform hover:scale-105">
              {heroButtonText}
            </WhatsAppButton>
            
            <a 
              href="#services" 
              className="text-dark-brown hover:text-sage font-medium text-lg underline decoration-2 underline-offset-4 transition-colors duration-300"
            >
              Explore Services First
            </a>
          </div>

          {/* Inspirational Quotes Section - Smooth & Calm Design */}
          <div className="mt-16 max-w-4xl mx-auto">
            
            {/* First Quote */}
            <div className="text-center mb-12 p-8 bg-gradient-to-r from-sage/10 via-peach/15 to-sage/10 rounded-3xl backdrop-blur-sm border border-sage/20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair italic text-dark-brown leading-relaxed">
                "Healing does not shout, it whispers."
              </h2>
              <div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-sage to-transparent mx-auto"></div>
            </div>

            {/* Second Quote */}
            <div className="text-center p-8 bg-gradient-to-r from-peach/10 via-sage/15 to-peach/10 rounded-3xl backdrop-blur-sm border border-peach/20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair italic text-dark-brown leading-relaxed">
                "Healing begins in a quiet corner where there are untold stories."
              </h3>
              <div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-peach to-transparent mx-auto"></div>
            </div>

            {/* Gentle Nature Elements */}
            <div className="flex justify-center items-center mt-12 gap-4 opacity-60">
              <div className="w-2 h-2 bg-sage rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-peach rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-soft-beige rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="pt-8">
            <p className="text-xl md:text-2xl italic text-dark-brown/80 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              "{heroQuote1}"
            </p>
          </div>
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
  );
}