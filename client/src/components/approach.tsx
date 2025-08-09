import { useQuery } from "@tanstack/react-query";

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
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Peaceful meditation pose representing mindfulness and grounding"
    },
    {
      title: "Breathwork & Guided Imagery",
      description: "Simple breathing exercises and visualization to ease anxiety and stress",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Person practicing deep breathing in natural setting"
    },
    {
      title: "Butterfly Hug (EMDR-style)",
      description: "Self-soothing technique for emotional regulation and trauma processing",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Gentle hands in self-soothing butterfly hug position"
    },
    {
      title: "Inner Child Healing",
      description: "Compassionate exploration of early emotional patterns and healing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Child's perspective showing innocence and inner child healing"
    },
    {
      title: "Person-Centered Approach",
      description: "Your experience is the guide - gentle, non-directive therapeutic support",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Warm, empathetic therapist listening with person-centered focus"
    },
    {
      title: "Strengths-Based Therapy",
      description: "Building on your existing resilience and natural coping abilities",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Strong tree roots representing inner strength and resilience"
    },
    {
      title: "Emotional Clarity Work",
      description: "Untangling complex feelings and finding your emotional truth",
      image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Clear water reflection representing emotional clarity"
    },
    {
      title: "Gentle Talk Therapy",
      description: "Safe space for processing thoughts without pressure or judgment",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Comfortable therapy space with gentle conversation atmosphere"
    },
    {
      title: "Flexible Online Support",
      description: "WhatsApp or Google Meet sessions that fit into your life naturally",
      image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Modern technology connecting people for online therapy support"
    }
  ];

  return (
    <section id="approach" className="py-20 relative bg-gradient-to-br from-sage-green/5 via-warm-misty-beige/30 to-peach-blush/10">
      {/* Decorative section divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sage-green/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-earthy-brown mb-6 relative">
              {approachTitle}
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-sage-green via-peach-blush to-sage-green rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-sage-green font-medium max-w-4xl mx-auto leading-relaxed mt-8">
            {approachSubtitle}
          </p>
        </div>

        {/* Approaches Grid - Enhanced with Images */}
        <div className="approaches-grid max-w-7xl mx-auto">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 group border border-sage-green/10"
            >
              {/* Title on top */}
              <h3 className="text-xl font-playfair font-semibold text-earthy-brown mb-4 text-center group-hover:text-sage-green transition-colors duration-300">
                {approach.title}
              </h3>
              
              {/* Image in middle */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={approach.image}
                  alt={approach.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 filter saturate-90"
                  loading="lazy"
                />
              </div>
              
              {/* Description at bottom - centered and full text */}
              <p className="text-charcoal-grey font-lato text-sm leading-relaxed text-center">
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