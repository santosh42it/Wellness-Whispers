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
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8 fade-in-up">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-dark-brown leading-tight tracking-tight">
              {heroTitle}
            </h1>
            
            <p className="text-3xl lg:text-4xl italic text-dark-brown font-normal" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {heroSubtitle}
            </p>
            
            <p className="text-lg lg:text-xl text-dark-brown font-lato leading-relaxed">
              {heroDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center sm:justify-start">
            <WhatsAppButton className="bg-sage hover:bg-olive text-white px-8 py-4 text-lg font-medium shadow-warm hover:shadow-strong transition-all duration-300 border-2 border-sage hover:border-olive">
              {heroButtonText}
            </WhatsAppButton>
            
            <a 
              href="#services" 
              className="text-dark-brown hover:text-sage font-medium text-lg underline decoration-2 underline-offset-4 transition-colors duration-300 text-center sm:text-left"
            >
              Explore Services First
            </a>
          </div>
        </div>

        {/* Hero Images - Staggered Layout with Equal Sizes */}
        <div className="lg:w-1/2">
          <div className="relative max-w-md mx-auto lg:mx-0 h-80">
            
            {/* First Hero Image */}
            <div className="absolute top-0 left-0 w-64 h-48">
              <img 
                src={heroImage1} 
                alt="Healing does not shout it whispers - Peaceful therapy space" 
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                onError={(e) => {
                  console.error("Hero image 1 failed to load:", heroImage1);
                  e.currentTarget.src = "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400";
                }}
                onLoad={() => console.log("Hero image 1 loaded successfully:", heroImage1)}
              />
            </div>

            {/* Second Hero Image - Same exact size, offset position */}
            <div className="absolute top-20 right-0 w-64 h-48">
              <img 
                src={heroImage2} 
                alt={`${heroQuote2} - Gentle therapy moment`}
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                onError={(e) => {
                  console.error("Hero image 2 failed to load:", heroImage2);
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300";
                }}
                onLoad={() => console.log("Hero image 2 loaded successfully:", heroImage2)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-30"></div>
    </section>
  );
}