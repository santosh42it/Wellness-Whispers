import { useQuery } from "@tanstack/react-query";
import s1Image from "@assets/s1.jpg";
import s2Image from "@assets/s2.jpg";
import s3Image from "@assets/s3.jpg";
import s4Image from "@assets/s4.jpg";
import s5Image from "@assets/s5.jpg";
import s6Image from "@assets/s6.jpg";
import s7Image from "@assets/s7.jpg";
import s8Image from "@assets/s8.jpg";
import s9Image from "@assets/s9.jpg";
import s10Image from "@assets/s10.jpg";
import s11Image from "@assets/s11.jpg";
import s12Image from "@assets/s12.jpg";

// Helper function to get content from content blocks
function getContentValue(contentBlocks: any[], key: string, defaultValue: string): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find(block => block.blockKey === key);
  return block?.content || defaultValue;
}

export default function Services() {
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
  const servicesTitle = getContentValue(safeContentBlocks, "services_title", "Support for Life's Difficult Moments");
  const servicesSubtitle = getContentValue(safeContentBlocks, "services_subtitle", "From heartbreak to burnout — you're not alone in this journey.");
  const services = [
    {
      title: "Low Motivation & Decision Fatigue",
      description: "When even small tasks feel too heavy.",
      image: s1Image,
      alt: "Support for low motivation and decision fatigue"
    },
    {
      title: "Emotional Confusion & Identity",
      description: "When you can't name what you feel.",
      image: s2Image,
      alt: "Understanding emotional confusion and identity"
    },
    {
      title: "When Love Turns into Hurt",
      description: "Sometimes closeness fades, and hearts drift apart.",
      image: s3Image,
      alt: "Healing when love becomes painful"
    },
    {
      title: "Social Withdrawal & Isolation",
      description: "When silence feels safer than people.",
      image: s4Image,
      alt: "Support for social withdrawal and isolation"
    },
    {
      title: "Grief, Loss & Past Wounds",
      description: "When memories weigh more than moments.",
      image: s5Image,
      alt: "Healing grief, loss and past wounds"
    },
    {
      title: "Social Media & Digital Burnout",
      description: "When online life drains your real energy.",
      image: s6Image,
      alt: "Recovery from social media and digital burnout"
    },
    {
      title: "Love Under Strain",
      description: "When conflict changes how you connect.",
      image: s7Image,
      alt: "Healing love relationships under strain"
    },
    {
      title: "Overthinking",
      description: "it is emotional traffic …",
      image: s8Image,
      alt: "Managing overthinking patterns"
    },
    {
      title: "Repetitive Thoughts & OCD Patterns",
      description: "When rituals and thoughts won't let you rest.",
      image: s9Image,
      alt: "Support for repetitive thoughts and OCD patterns"
    },
    {
      title: "Rebuilding Inner Confidence",
      description: "When believing in yourself feels impossible.",
      image: s10Image,
      alt: "Rebuilding inner confidence and self-belief"
    },
    {
      title: "Loneliness & Disconnection",
      description: "When you long for closeness but feel apart.",
      image: s11Image,
      alt: "Healing loneliness and disconnection"
    },
    {
      title: "Sleep & Energy Disturbance",
      description: "When restful nights feel out of reach.",
      image: s12Image,
      alt: "Support for sleep and energy disturbances"
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-gradient-to-br from-soft-beige/30 via-peach/20 to-sage/15">
      {/* Visual separator from hero section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-brown mb-6">
            {servicesTitle}
          </h2>
          <p className="text-xl text-dark-brown font-medium max-w-3xl mx-auto">
            {servicesSubtitle}
          </p>
        </div>

        {/* Services Grid - 4x3 layout */}
        <div className="services-grid max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-soft"
            >
              {/* Title on top */}
              <h3 className="text-xl font-playfair font-semibold text-dark-brown mb-4 text-center">
                {service.title}
              </h3>
              
              {/* Image in middle */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Text at bottom - centered and full text */}
              <p className="text-dark-brown font-lato text-base leading-relaxed text-center font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Block - Therapy in Everyday Moments with Falling Leaves */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-peach/40 backdrop-blur-sm p-12 rounded-3xl shadow-warm relative">
            
            {/* Content overlay */}
            <div className="relative z-10">
              <h3 className="text-3xl font-playfair font-bold text-dark-brown text-center mb-8">
                Therapy in Everyday Moments
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* H3: It's ok to reach out when you're ready */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300" 
                    alt="It's ok to reach out when you're ready - phone connection showing therapeutic support accessibility" 
                    className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-dark-brown/40 rounded-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-playfair font-bold text-white text-center leading-tight italic">
                      "It's ok to reach out when you're ready."
                    </h3>
                  </div>
                </div>

                {/* H4: I looked anxious but chose to tap my heart */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300" 
                    alt="I looked anxious but chose to tap my heart - person on laptop with therapeutic support" 
                    className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-dark-brown/40 rounded-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-playfair font-bold text-white text-center leading-tight italic">
                      "I looked anxious but chose to tap my heart."
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-center text-warm-gray font-lato text-lg mt-8 leading-relaxed">
                Healing doesn't require grand gestures. Sometimes it begins with a quiet moment, 
                a gentle conversation, or simply reaching out when you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-25"></div>
    </section>
  );
}