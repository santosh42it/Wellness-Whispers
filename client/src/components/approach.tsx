import { useQuery } from "@tanstack/react-query";
import a1Image from "@assets/a1.jpg";
import a2Image from "@assets/a2.jpg";
import a3Image from "@assets/a3.jpg";
import a4Image from "@assets/a4.jpg";
import a5Image from "@assets/a5.jpg";
import a6Image from "@assets/a6.jpg";
import a7Image from "@assets/a7.jpg";
import a8Image from "@assets/a8.jpg";
import a9Image from "@assets/a9.jpg";

// Helper function to get content from content blocks
function getContentValue(contentBlocks: any[], key: string, defaultValue: string): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find(block => block.blockKey === key);
  return block?.content || defaultValue;
}

export default function Approach() {
  // Fetch content blocks for dynamic text
  const { data: contentBlocks } = useQuery({
    queryKey: ["/api/content"],
    retry: false,
    refetchOnWindowFocus: true,
    staleTime: 0,
    gcTime: 0,
  });

  const safeContentBlocks = Array.isArray(contentBlocks) ? contentBlocks : [];

  // Get dynamic content values
  const approachTitle = getContentValue(safeContentBlocks, "approach_title", "What You'll Experience in Session");
  const approachSubtitle = getContentValue(safeContentBlocks, "approach_subtitle", "Every session is gentle, reflective, and deeply practical. You'll find yourself slowly returning to your own rhythm.");
  const approaches = [
    {
      title: "Mindfulness & Somatic Grounding",
      description: "Gentle body-awareness techniques to reconnect with your inner wisdom and calm",
      image: a1Image,
      alt: "Peaceful meditation pose representing mindfulness and grounding"
    },
    {
      title: "Breathwork & Guided Imagery",
      description: "Simple breathing exercises and visualization to ease anxiety and stress",
      image: a2Image,
      alt: "Person practicing deep breathing in natural setting"
    },
    {
      title: "Butterfly Hug (EMDR-style)",
      description: "Self-soothing technique for emotional regulation and trauma processing",
      image: a3Image,
      alt: "Gentle hands in self-soothing butterfly hug position"
    },
    {
      title: "Inner Child Healing",
      description: "Compassionate exploration of early emotional patterns and healing",
      image: a4Image,
      alt: "Child's perspective showing innocence and inner child healing"
    },
    {
      title: "Person-Centered Approach",
      description: "Your experience is the guide - gentle, non-directive therapeutic support",
      image: a5Image,
      alt: "Warm, empathetic therapist listening with person-centered focus"
    },
    {
      title: "Strengths-Based Therapy",
      description: "Building on your existing resilience and natural coping abilities",
      image: a6Image,
      alt: "Strong tree roots representing inner strength and resilience"
    },
    {
      title: "Emotional Clarity Work",
      description: "Untangling complex feelings and finding your emotional truth",
      image: a7Image,
      alt: "Clear water reflection representing emotional clarity"
    },
    {
      title: "Gentle Talk Therapy",
      description: "Safe space for processing thoughts without pressure or judgment",
      image: a8Image,
      alt: "Comfortable therapy space with gentle conversation atmosphere"
    },
    {
      title: "Flexible Online Support",
      description: "WhatsApp or Google Meet sessions that fit into your life naturally",
      image: a9Image,
      alt: "Modern technology connecting people for online therapy support"
    }
  ];

  return (
    <section id="approach" className="py-20 relative bg-gradient-to-br from-sage/5 via-soft-beige/30 to-peach/10">
      {/* Decorative section divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sage/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-brown mb-6 relative">
              {approachTitle}
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-sage via-peach to-sage rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-dark-brown font-medium max-w-4xl mx-auto leading-relaxed mt-8">
            {approachSubtitle}
          </p>
        </div>

        {/* Approaches Grid - Enhanced with Images */}
        <div className="approaches-grid max-w-7xl mx-auto">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-sage/10"
            >
              {/* Title on top */}
              <h3 className="text-xl font-playfair font-semibold text-dark-brown mb-4 text-center">
                {approach.title}
              </h3>
              
              {/* Image in middle */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={approach.image}
                  alt={approach.alt}
                  className="w-full h-48 object-cover filter saturate-90"
                  loading="lazy"
                />
              </div>
              
              {/* Description at bottom - centered and full text */}
              <p className="text-warm-gray font-lato text-sm leading-relaxed text-center">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
  );
}