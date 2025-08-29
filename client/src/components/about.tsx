import pavanPhoto from "@assets/pavan.png";
import pavanBg from "@assets/pavan-bg.jpg";
import oceanBg from "@assets/ocean-bg.jpg";
import balloonImg from "@assets/hotair-balloons.jpg";
import sunsetImg from "@assets/sunset.jpg";

export default function About() {
  return (
    <section id="about" className="relative">
      
      {/* Section 1: Therapist Introduction */}
      <div className="min-h-screen relative flex items-center py-20">
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Photo with Overlapping Background */}
            <div className="relative">
              {/* Overlapping Background Image - Small overlap only */}
              <div className="absolute -top-10 -left-10 w-96 h-64 z-0">
                <img 
                  src={pavanBg}
                  alt="Peaceful floral background"
                  className="w-full h-full object-cover opacity-70"
                  loading="eager"
                />
              </div>
              
              {/* Main Portrait Photo - Moved more to the right */}
              <div className="w-80 h-96 relative mx-auto lg:ml-16 z-10">
                <img 
                  src={pavanPhoto}
                  alt="Mrs. Pavan Chowdhary - Licensed Therapist"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                MEET ME
              </h1>
              <div className="space-y-6">
                <p className="text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  I'm Mrs. Pavan Chowdhary, a Gold Medalist in Public Administration with a Postgraduate Diploma in Guidance & Counselling, along with multiple certified diploma courses. My journey combines 45+ years of entrepreneurial leadership and mentoring people, including experience in conflict management, with 6+ years of focused emotional support.
                </p>
                <p className="text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  I continue to expand my training across therapeutic approaches, ensuring every session is flexible, empathetic, and grounded in real-life understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Ocean Cliffs */}
      <div className="min-h-screen relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={oceanBg}
            alt="Peaceful ocean and cliffs"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-kinfolk font-extralight text-white leading-tight uppercase">
              STEADY STRENGTH
            </h2>
            <p className="text-2xl lg:text-3xl font-kinfolk font-extralight text-white/90 italic leading-relaxed">
              "Even the highest cliffs stand calm against the waves — just like your heart can find steady strength."
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl font-nunito text-white/90 leading-relaxed">
                I offer online therapy especially suited for young adults, providing a safe space where emotions can be explored without judgment. Healing is not about fixing what is broken, but about listening deeply and finding a gentler way forward.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Hot Air Balloon */}
      <div className="min-h-screen relative flex items-center py-20">
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Large Balloon Image (Half Screen) */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="w-full max-w-2xl h-[50vh] lg:h-[60vh]">
                <img 
                  src={balloonImg}
                  alt="Hot air balloon at sunset"
                  className="w-full h-full object-cover shadow-2xl rounded-lg"
                  loading="lazy"
                />
                {/* Quote below the image */}
                <div className="mt-6 text-center">
                  <p className="text-xl lg:text-2xl font-kinfolk font-extralight text-earthy-brown/80 italic leading-relaxed">
                    "Like a hot air balloon, healing rises gently — not with force, but with lightness."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                GENTLE RISING
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  I believe therapy should feel like a safe shoreline, a quiet space for emotions to rest without pressure. Every balloon has a quiet lift-off — so did I, by finding lightness in my own journey. Over the years, I've learned that healing comes when we pause, breathe, and allow space.
                </p>
                <p className="text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  This space is not about rushing — it's about gently lifting, and seeing life from a calmer height. My focus has always been on helping hearts, not counting currency. Sessions are simple, accessible, and deeply personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Sunset */}
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
                "Not every day needs answers — sometimes the soft colors of nature hold you enough."
              </p>
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl lg:text-2xl font-nunito text-white/95 leading-relaxed drop-shadow-sm">
                  Every session is designed to feel simple, safe, and welcoming, using gentle approaches like mindfulness, grounding, inner child healing, and reflective talk therapy. Therapy here is a safe pause for your heart, where emotions can rest and gradually transform into understanding, resilience, and inner strength.
                </p>
                <p className="text-xl lg:text-2xl font-nunito text-white/95 leading-relaxed drop-shadow-sm">
                  Healing is not about rushing — it's about finding steady, quiet steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section - Transition to Footer */}
      <div className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl lg:text-4xl font-kinfolk font-extralight text-earthy-brown leading-tight">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg font-nunito text-earthy-brown/80 leading-relaxed">
              Take the first gentle step toward healing. Every journey starts with a single breath.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}