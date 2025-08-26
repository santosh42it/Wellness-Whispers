import { useQuery } from "@tanstack/react-query";
import mentorPhoto from "@assets/WhatsApp Image 2025-08-09 at 3.09.59 PM_1754793958983.jpeg";

// Helper function to get content from content blocks
function getContentValue(contentBlocks: any[], key: string, defaultValue: string): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find(block => block.blockKey === key);
  return block?.content || defaultValue;
}

export default function About() {
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
  const aboutTitle = getContentValue(safeContentBlocks, "about_title", "Meet Me");
  const credentialsTitle = getContentValue(safeContentBlocks, "about_credentials_title", "Credentials & Experience");
  const credentialsText = getContentValue(safeContentBlocks, "about_credentials_text", "Gold Medalist in MPA with a Postgraduate Diploma in Guidance & Counselling, complemented by various certified courses in therapeutic methods. Over 45 years of people-focused leadership, entrepreneurship, and mentoring experience, combined with 6+ years of dedicated emotional wellness practice.");
  const philosophyTitle = getContentValue(safeContentBlocks, "about_philosophy_title", "Philosophy & Values");
  const philosophyText = getContentValue(safeContentBlocks, "about_philosophy_text", "At Wellness Whispers, therapy is offered as a form of service, with a focus on making emotional healing accessible and deeply personal. Guided by empathy, trust, and a genuine commitment to care, the aim is to create a safe, non-judgmental space where emotional well-being can flourish.");
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-kinfolk font-light text-earthy-brown mb-6">
              {aboutTitle}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            
            {/* Optional Professional Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="polaroid-image">
                <img 
                  src={mentorPhoto} 
                  alt="Mrs. Pavan Chowdhary - Professional therapist in warm, welcoming environment" 
                  className="w-64 h-80 object-cover"
                />
                <div className="polaroid-overlay"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Paragraph 1 – Credentials & Experience */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                <h3 className="text-xl font-kinfolk font-light text-sage-green mb-4">
                  {credentialsTitle}
                </h3>
                <p className="text-charcoal-grey font-nunito leading-relaxed text-lg">
                  {credentialsText}
                </p>
              </div>

              {/* Paragraph 2 – Philosophy & Values */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                <h3 className="text-xl font-kinfolk font-light text-sage-green mb-4">
                  {philosophyTitle}
                </h3>
                <p className="text-charcoal-grey font-nunito leading-relaxed text-lg">
                  {philosophyText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
  );
}