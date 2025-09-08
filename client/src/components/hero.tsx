import WhatsAppButton from "./whatsapp-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import heroMiddleImage from "@assets/hero-middle.png";
import heroBgImage from "@assets/hero-bg.jpg";

// Helper function to get content from content blocks
function getContentValue(contentBlocks: any[], key: string, defaultValue: string): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find(block => block.blockKey === key);
  return block?.content || defaultValue;
}

// Use uploaded images directly
const heroImages = {
  "hero-1": heroMiddleImage,
  "hero-2": heroBgImage,
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
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full h-screen relative">
        
        {/* Left Panel - Text Area (40%) */}
        <div className="w-2/5 relative flex items-center justify-center">
          
          {/* Hero Text Content */}
          <div className="relative z-20 text-center px-8 xl:px-16">
            <h1 className="text-4xl xl:text-6xl font-kinfolk font-extralight text-earthy-brown mb-6 leading-tight animate-fade-in-up">
              <div className="block">WELCOME</div>
              <div className="block text-sage-green/80" style={{fontFamily: 'Feather, cursive', fontSize: '0.8em', margin: '0.2em 0'}}>TO YOUR</div>
              <div className="block">SAFE SPACE</div>
            </h1>
            <p className="text-xl xl:text-2xl text-earthy-brown/80 font-nunito max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              You've arrived at a space to pause and breathe. A quiet start, where you can feel safe and a little lighter.
            </p>
          </div>
        </div>
        
        {/* Right Panel - Background Image (60%) */}
        <div className="w-3/5 relative">
          <div className="absolute inset-0">
            <img 
              src={heroImage2}
              alt="Peaceful therapy environment"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>
        
        {/* Center Portrait Image - Desktop Only */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="relative">
            <img 
              src={heroImage1}
              alt="Wellness professional portrait"
              className="w-72 h-96 xl:w-80 xl:h-[28rem] object-cover shadow-2xl rounded-2xl"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>


      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full min-h-screen relative flex flex-col">
        {/* Mobile Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage2}
            alt="Peaceful therapy environment"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/5 to-transparent"></div>
        </div>

        {/* Mobile Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-center flex-1 px-6 py-16 space-y-8">
          
          {/* Welcome Text - Top */}
          <div className="text-center">
            <h1 className="font-kinfolk text-3xl sm:text-4xl text-earthy-brown mb-4 leading-tight font-extralight">
              <div className="block">WELCOME</div>
              <div className="block text-sage-green/80" style={{fontFamily: 'Feather, cursive', fontSize: '0.8em', margin: '0.2em 0'}}>TO YOUR</div>
              <div className="block">SAFE SPACE</div>
            </h1>
            <p className="font-nunito text-lg sm:text-xl text-earthy-brown/80 leading-relaxed max-w-md">
              You've arrived at a space to pause and breathe. A quiet start, where you can feel safe and a little lighter.
            </p>
          </div>

          {/* Mobile Center Portrait Image */}
          <div className="flex-shrink-0">
            <img 
              src={heroImage1}
              alt="Wellness professional portrait"
              className="w-56 h-72 sm:w-64 sm:h-80 object-cover shadow-2xl rounded-2xl"
              loading="eager"
            />
          </div>

        </div>
      </div>

    </section>
  );
}