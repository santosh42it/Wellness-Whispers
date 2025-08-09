import WhatsAppButton from "./whatsapp-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

// Helper function to get content from content blocks
function getContentValue(contentBlocks: any[], key: string, defaultValue: string): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find(block => block.blockKey === key);
  return block?.content || defaultValue;
}

// Fallback images for when gallery is not available
// Import hero images from attached assets
import hero1Image from "@assets/hero1.jpg";
import hero2Image from "@assets/hero2.jpg";

const fallbackImages = {
  "hero-1": hero1Image,
  "hero-2": hero2Image,
  "hero-3": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
};

function getImageUrl(galleryImages: any, imageId: string, fallbackUrl: string) {
  // Ensure galleryImages is an array
  if (!Array.isArray(galleryImages)) {
    return fallbackUrl;
  }
  
  // Find image by title keywords
  let galleryImage;
  
  if (imageId === "hero-1") {
    galleryImage = galleryImages.find(img => {
      const title = img.title?.toLowerCase() || '';
      return title.includes("healing") || title.includes("forest");
    });
  } else if (imageId === "hero-2") {
    galleryImage = galleryImages.find(img => {
      const title = img.title?.toLowerCase() || '';
      return title.includes("mountain") || title.includes("reflection");
    });
  } else if (imageId === "hero-3") {
    galleryImage = galleryImages.find(img => {
      const title = img.title?.toLowerCase() || '';
      return title.includes("rainy") || title.includes("window") || title.includes("reflection");
    });
  }
  
  if (galleryImage?.imageUrl) {
    // Use the imageUrl directly if it's already a path, or convert from storage URL
    if (galleryImage.imageUrl.startsWith('/objects/')) {
      return galleryImage.imageUrl;
    } else if (galleryImage.imageUrl.includes('storage.googleapis.com')) {
      const url = new URL(galleryImage.imageUrl);
      const pathParts = url.pathname.split('/');
      const objectPath = pathParts.slice(3).join('/'); // Remove bucket name
      const finalUrl = `/objects/${objectPath}`;
      return finalUrl;
    }
    return galleryImage.imageUrl;
  }
  
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
          
          // Test if the image loads
          const testImg = new Image();
          testImg.src = testUrl;
        }
      }
    }
  }, [safeGalleryImages]);

  const heroImage1 = getImageUrl(safeGalleryImages, "hero-1", fallbackImages["hero-1"]);
  const heroImage2 = getImageUrl(safeGalleryImages, "hero-2", fallbackImages["hero-2"]);

  // Get dynamic content values
  const heroTitle = getContentValue(safeContentBlocks, "hero_title", "Welcome to Your Healing Space");
  const heroSubtitle = getContentValue(safeContentBlocks, "hero_subtitle", "Here, you're safe to heal.");
  const heroDescription = getContentValue(safeContentBlocks, "hero_description", "Begin therapy today, in a space built on trust, warmth, and healing.");
  const heroButtonText = getContentValue(safeContentBlocks, "hero_button_text", "Start Session");
  const heroQuote1 = getContentValue(safeContentBlocks, "hero_quote_1", "Healing does not shout it whispers");
  const heroQuote2 = getContentValue(safeContentBlocks, "hero_quote_2", "You are not too much");

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8 fade-in-up">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-earthy-brown leading-tight tracking-tight">
              {heroTitle}
            </h1>
            
            <p className="text-3xl lg:text-4xl italic text-sage-green font-normal" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {heroSubtitle}
            </p>
            
            <p className="text-lg lg:text-xl text-charcoal-grey font-lato leading-relaxed">
              {heroDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center sm:justify-start">
            <WhatsAppButton className="bg-sage-green hover:bg-olive-green text-white px-8 py-4 text-lg font-medium shadow-warm hover:shadow-strong transition-all duration-300 border-2 border-sage-green hover:border-olive-green">
              {heroButtonText}
            </WhatsAppButton>
            
            <a 
              href="#services" 
              className="text-earthy-brown hover:text-sage-green font-medium text-lg underline decoration-2 underline-offset-4 transition-colors duration-300 text-center sm:text-left"
            >
              Explore Services First
            </a>
          </div>
        </div>

        {/* Hero Images - 2 Image Layout */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto lg:mx-0">
            
            {/* First Hero Image */}
            <div className="relative group">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-warm hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src={heroImage1} 
                  alt="Healing does not shout it whispers - Peaceful therapy space" 
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    console.error("Hero image 1 failed to load:", heroImage1);
                    e.currentTarget.src = hero1Image;
                  }}
                  onLoad={() => console.log("Hero image 1 loaded successfully:", heroImage1)}
                />
                <p className="text-sm text-earthy-brown mt-3 font-cormorant italic text-center">
                  "{heroQuote1}"
                </p>
              </div>
            </div>

            {/* Second Hero Image */}
            <div className="relative group">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-warm hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src={heroImage2} 
                  alt={`${heroQuote2} - Gentle therapy moment`}
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    console.error("Hero image 2 failed to load:", heroImage2);
                    e.currentTarget.src = hero2Image;
                  }}
                  onLoad={() => console.log("Hero image 2 loaded successfully:", heroImage2)}
                />
                <p className="text-sm text-earthy-brown mt-3 font-cormorant italic text-center">
                  "{heroQuote2}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-30"></div>
    </section>
  );
}