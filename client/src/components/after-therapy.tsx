export default function AfterTherapy() {
  const transformations = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Energy restored - Boy going to gym with renewed vitality and motivation"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Confidence - Boy in rust shirt radiating self-assurance and inner strength"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616c96f6cec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Inner courage - Self doubt transformed into quiet, unshakeable confidence"
    },
    {
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Mental clarity - Overthinking isn't weakness, it's understanding your patterns"
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Trust & openness - This page does not judge, and neither do your feelings"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Balance - Choosing peace over perfection in daily life decisions"
    },
    {
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Self-regulation - I looked anxious but chose to tap my heart and breathe"
    },
    {
      image: "https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Relationship healing - We paused the blame and found understanding instead"
    },
    {
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
      caption: "Gentle care - Let yourself be held, even if it's just in small moments"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-kinfolk font-light text-earthy-brown mb-6">
            After Therapy
          </h2>
          <p className="text-xl text-sage-green font-medium max-w-4xl mx-auto leading-relaxed">
            Small shifts that create lasting change. These are the moments that matter.
          </p>
        </div>

        {/* Clean Grid Layout for Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {transformations.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-60 object-cover filter saturate-90 group-hover:saturate-100 transition-all duration-300"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Closing Reflection */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-white/50 backdrop-blur-sm p-12 rounded-3xl shadow-soft">
            <p className="text-xl text-charcoal-grey font-nunito leading-relaxed italic">
              "Healing isn't about becoming someone new. It's about returning to who you've 
              always been underneath the hurt, the doubt, and the overwhelm."
            </p>
            <p className="text-sage-green font-kinfolk text-lg mt-4">
              — Your journey continues, one gentle step at a time
            </p>
          </div>
        </div>

        {/* Therapy in Everyday Moments */}
        <div className="mt-32 relative pt-20 pb-8">
          <div className="absolute inset-0 -mx-20">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
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
                    src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                    alt="It's ok to reach out when you're ready - phone connection showing therapeutic support accessibility" 
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden shadow-2xl transform transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
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
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
  );
}