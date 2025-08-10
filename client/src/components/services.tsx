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
  const servicesTitle = getContentValue(safeContentBlocks, "services_title", "Who I Work With");
  const servicesSubtitle = getContentValue(safeContentBlocks, "services_subtitle", "Every emotional experience is valid. Here's how we can work together on your healing journey.");
  const services = [
    {
      title: "Anxiety Support",
      description: "Gentle techniques for managing overwhelming feelings and racing thoughts",
      image: s1Image,
      alt: "Gentle hands offering support for anxiety management"
    },
    {
      title: "Relationship Healing", 
      description: "Support for breakups, toxic relationships, and building healthier connections",
      image: s2Image,
      alt: "Two people supporting each other in relationship healing"
    },
    {
      title: "Emotional Confusion",
      description: "Clarity when feelings feel tangled and emotions seem overwhelming",
      image: s3Image,
      alt: "Person finding clarity through emotional confusion"
    },
    {
      title: "Social Withdrawal",
      description: "Gentle encouragement to reconnect with yourself and others",
      image: s4Image,
      alt: "Person gently reconnecting with social connections"
    },
    {
      title: "Grief Processing",
      description: "Compassionate support through loss and life transitions",
      image: s5Image,
      alt: "Peaceful nature scene representing grief healing journey"
    },
    {
      title: "Depression Support",
      description: "Understanding and gentle movement through difficult emotional landscapes",
      image: s6Image,
      alt: "Light breaking through darkness representing hope in depression"
    },
    {
      title: "Life Transitions",
      description: "Support during major changes, career shifts, and new life phases",
      image: s7Image,
      alt: "Path leading forward representing life transitions"
    },
    {
      title: "Self-Worth Issues",
      description: "Building confidence and understanding your inherent value",
      image: s8Image,
      alt: "Person looking confidently ahead representing self-worth"
    },
    {
      title: "Stress Management",
      description: "Practical tools for handling life's pressures with grace",
      image: s9Image,
      alt: "Peaceful meditation scene for stress management"
    },
    {
      title: "Family Dynamics",
      description: "Navigating complex family relationships and boundaries",
      image: s10Image,
      alt: "Family silhouettes representing healthy family dynamics"
    },
    {
      title: "Work-Life Balance",
      description: "Finding harmony between professional and personal wellbeing",
      image: s11Image,
      alt: "Balanced stones representing work-life harmony"
    },
    {
      title: "Inner Child Healing",
      description: "Reconnecting with and healing past emotional wounds",
      image: s12Image,
      alt: "Child's hands holding a flower representing inner child healing"
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
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 group"
            >
              {/* Title on top */}
              <h3 className="text-xl font-playfair font-semibold text-dark-brown mb-4 text-center group-hover:text-sage transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Image in middle */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Text at bottom - centered and full text */}
              <p className="text-warm-gray font-lato text-sm leading-relaxed text-center">
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
              
              <div className="flex flex-wrap justify-center items-center gap-8">
                {/* Image 3: Healing begins in quiet corner */}
                <div className="pasted-image">
                  <img 
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200" 
                    alt="Healing begins in quiet corner - book, glasses, candle creating peaceful therapy moment" 
                    className="w-72 h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Image 4: It's ok to reach out */}
                <div className="pasted-image">
                  <img 
                    src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200" 
                    alt="It's ok to reach out - phone connection showing therapeutic support accessibility" 
                    className="w-64 h-44 object-cover rounded-lg"
                  />
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