import sunsetImg from "@assets/sunset.jpg";

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
    <>
      {/* Soft Colors Hold You Section */}
      <div className="min-h-screen relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={sunsetImg}
            alt="Peaceful sunset over water"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="p-8 lg:p-12">
              <h2 className="text-5xl lg:text-6xl font-kinfolk font-extralight text-white leading-tight uppercase mb-8 drop-shadow-lg">
                SOFT COLORS HOLD YOU
              </h2>
              <p className="text-3xl lg:text-4xl font-kinfolk font-extralight text-white/95 italic leading-relaxed mb-10 drop-shadow-md">
                "Not every day needs answers — sometimes the soft colors of
                nature hold you enough."
              </p>
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl lg:text-2xl font-nunito text-white/95 leading-relaxed drop-shadow-sm">
                  Every session is designed to feel simple, safe, and welcoming,
                  using gentle approaches like mindfulness, grounding, inner
                  child healing, and reflective talk therapy. Therapy here is a
                  safe pause for your heart, where emotions can rest and
                  gradually transform into understanding, resilience, and inner
                  strength.
                </p>
                <p className="text-xl lg:text-2xl font-nunito text-white/95 leading-relaxed drop-shadow-sm">
                  Healing is not about rushing — it's about finding steady,
                  quiet steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-kinfolk font-light text-earthy-brown mb-6">
            Bright Days
          </h2>
          <p className="text-xl text-sage-green font-medium max-w-4xl mx-auto leading-relaxed">
            Small shifts that create lasting change. These are the moments that matter.
          </p>
        </div>

        {/* Photo with Overlapping Background - Copied from Meet Me section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -left-10 w-64 h-96 z-0">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=600"
                  alt="Peaceful background for bright days"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned down to start at 30% of background */}
              <div className="w-80 h-96 relative mx-auto lg:ml-32 lg:mr-0 lg:mt-28 z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800"
                  alt="Confidence and inner strength after therapy"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Closing Reflection */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
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
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
    </>
  );
}