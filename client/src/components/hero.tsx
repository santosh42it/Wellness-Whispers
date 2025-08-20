import WhatsAppButton from "./whatsapp-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import heroMiddleImage from "@assets/hero-middle.webp";
import hero2Image from "@assets/hero2.jpg";

// Helper function to get content from content blocks
function getContentValue(contentBlocks: any[], key: string, defaultValue: string): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find(block => block.blockKey === key);
  return block?.content || defaultValue;
}

// Use uploaded images directly
const heroImages = {
  "hero-1": heroMiddleImage,
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
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Split Screen Layout */}
      <div className="w-full h-screen flex relative">
        
        {/* Left Panel - Text Content */}
        <div className="w-1/2 bg-gradient-to-br from-cream via-soft-beige to-warm-misty-beige flex items-center justify-center p-12 relative">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-peach/10 to-sage/5"></div>
          
          <div className="relative z-10 max-w-lg text-left">
            <h1 className="text-4xl lg:text-5xl font-playfair font-light text-dark-brown leading-tight mb-6">
              Welcome to Your Healing Space
            </h1>
            
            <p className="text-lg text-dark-brown/80 font-lato mb-2">
              Here, you're safe to heal.
            </p>
            
            <p className="text-base text-dark-brown/70 font-lato mb-8 leading-relaxed">
              Begin therapy today, in a space built on trust, warmth, and healing.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 items-stretch sm:items-center">
              <WhatsAppButton 
                message="Hi, I'd like to start a therapy session."
                className="bg-sage hover:bg-sage/90 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 text-center flex items-center justify-center min-h-[50px] whitespace-nowrap"
              >
                Start Session
              </WhatsAppButton>
              
              <button className="bg-transparent border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center min-h-[50px] whitespace-nowrap">
                Explore Services First
              </button>
            </div>
            
            {/* Healing Quote */}
            <div className="text-center">
              <p className="text-sage font-playfair text-lg italic">
                "Healing does not shout, it whispers."
              </p>
            </div>
            
            {/* Additional Quote */}
            <div className="mt-6 text-center">
              <p className="text-sage/80 font-playfair text-base italic">
                "Healing begins in a quiet corner where there are untold stories."
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Image Content */}
        <div className="w-1/2 relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroImage2}
              alt="Peaceful therapy environment"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-white/30"></div>
          </div>
        </div>
        
        {/* Center Portrait Image - Positioned on the Divider Between Sections */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img 
              src={heroImage1}
              alt="Wellness professional portrait"
              className="w-48 h-64 object-cover shadow-2xl border-4 border-white rounded-lg"
              loading="eager"
            />
          </div>
        </div>
        
      </div>

    </section>
  );
}