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
import middleBgImage from "@assets/middle-bg.jpg";
import itsOkayToReachoutImage from "@assets/itsOkayToReachout.png";
import iLookedAnxiousImage from "@assets/iLookedAnxious.png";

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
    <section id="services" className="py-16 relative bg-gradient-to-br from-soft-beige/30 via-peach/20 to-sage/15">
      {/* Visual separator from hero section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-kinfolk font-light text-dark-brown mb-6">
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
              <h3 className="text-xl font-kinfolk font-semibold text-dark-brown mb-4 text-center">
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
              <p className="text-dark-brown font-nunito text-base leading-relaxed text-center font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Therapy in Everyday Moments - HIDDEN FOR NOW */}
        {/* 
        <div className="mt-32 relative pt-20 pb-8">
          <div className="absolute inset-0 -mx-20">
            <img 
              src={middleBgImage}
              alt="Peaceful landscape with wildflowers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/20"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-kinfolk font-light text-dark-brown mb-6">
                Therapy in Everyday Moments
              </h2>
              <div className="w-24 h-1 bg-peach mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="group">
                <div className="relative overflow-hidden shadow-2xl transform transition-all duration-300">
                  <img 
                    src={itsOkayToReachoutImage}
                    alt="It's ok to reach out when you're ready - phone connection showing therapeutic support accessibility" 
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden shadow-2xl transform transition-all duration-300">
                  <img 
                    src={iLookedAnxiousImage}
                    alt="I looked anxious but chose to tap my heart - person on laptop with therapeutic support" 
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl max-w-4xl mx-auto border border-peach/20">
                <p className="text-dark-brown font-nunito text-xl leading-relaxed font-medium">
                  Healing doesn't require grand gestures. Sometimes it begins with a quiet moment, 
                  a gentle conversation, or simply reaching out when you're ready.
                </p>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-25"></div>
    </section>
  );
}