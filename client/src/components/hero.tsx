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
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Split Screen Layout */}
      <div className="w-full h-screen flex">
        
        {/* Left Panel - Text Content */}
        <div className="w-1/2 bg-gradient-to-br from-cream via-soft-beige to-warm-misty-beige flex items-center justify-center p-12 relative">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-peach/10 to-sage/5"></div>
          
          <div className="relative z-10 max-w-md text-center">
            <p className="text-sm text-sage font-lato tracking-wider uppercase mb-8 opacity-70">
              SOMATIC TRAUMA THERAPY
            </p>
            
            <h1 className="text-4xl lg:text-5xl font-playfair font-light text-dark-brown leading-tight tracking-wide">
              RECONNECT<br />
              WITH YOUR<br />
              INTUITION
            </h1>
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
          
          {/* Center Portrait Image - No Border */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={heroImage1}
              alt="Wellness professional portrait"
              className="w-80 h-96 object-cover shadow-2xl"
              loading="eager"
            />
          </div>
          
          {/* Quote Overlay */}
          <div className="absolute top-16 right-16 max-w-xs">
            <div className="bg-white/90 backdrop-blur-sm p-6 shadow-lg">
              <p className="text-sage font-playfair text-lg leading-relaxed italic">
                "OF ALL THE ROADS SHE
                TRAVELED, THE JOURNEY
                BACK TO HERSELF WAS
                THE MOST MAGNIFICENT."
              </p>
            </div>
          </div>
          
          
        </div>
        
      </div>

      {/* WhatsApp Button - Floating */}
      <div className="absolute bottom-8 left-8 z-20">
        <WhatsAppButton 
          message="Hi, I'd like to know more about your therapy services."
          className="bg-sage hover:bg-sage/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Start Your Journey
        </WhatsAppButton>
      </div>
    </section>
  );
}