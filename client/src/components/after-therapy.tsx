import sunsetImg from "@assets/sunset.jpg";
import h1BgImg from "@assets/h1-bg.jpg";
import h2BgImg from "@assets/h2-bg.jpg";
import h3BgImg from "@assets/h3-bg.jpg";
import h4BgImg from "@assets/h4-bg.jpg";
import h5BgImg from "@assets/h5-bg.jpg";
import h6BgImg from "@assets/h6-bg.jpg";
import h7BgImg from "@assets/h7-bg.jpg";
import h1FrontImg from "@assets/h1.png";

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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Photo with Overlapping Background */}
            <div className="relative">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -left-10 w-64 h-96 z-0">
                <img
                  src={h1BgImg}
                  alt="Peaceful background for bright days"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned down to start at 30% of background */}
              <div className="w-80 h-96 relative mx-auto lg:ml-32 lg:mr-0 lg:mt-28 z-10">
                <img
                  src={h1FrontImg}
                  alt="Confidence and inner strength after therapy"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                BRIGHT DAYS
              </h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  These are the moments that show healing is working — when confidence 
                  blooms naturally, when overthinking transforms into understanding, 
                  and when self-doubt gives way to quiet inner strength.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  Small shifts create lasting change. You learn to pause instead of 
                  react, to choose peace over perfection, and to trust the gentle 
                  process of becoming who you truly are.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-kinfolk text-earthy-brown/80 italic leading-relaxed">
                  "Healing is not about rushing — it's about finding steady, quiet steps."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Reversed Layout */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                GENTLE STRENGTH
              </h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  Therapy teaches you that strength doesn't always roar — sometimes 
                  it's the quiet voice at the end of the day saying you'll try again 
                  tomorrow. You learn to hold space for difficult emotions without 
                  being overwhelmed by them.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  This is where true healing lives — in the gentle acceptance of 
                  yourself, in choosing compassion over criticism, and in finding 
                  peace with the journey rather than rushing toward the destination.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-kinfolk text-earthy-brown/80 italic leading-relaxed">
                  "Sometimes the most powerful thing you can do is simply breathe and trust the process."
                </p>
              </div>
            </div>

            {/* Right Side - Photo with Overlapping Background */}
            <div className="relative order-1 lg:order-2">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -right-10 w-64 h-96 z-0">
                <img
                  src={h2BgImg}
                  alt="Peaceful background for gentle strength"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned for right-side overlap */}
              <div className="w-80 h-96 relative mx-auto lg:-mr-28 lg:ml-0 lg:mt-20 z-10" style={{transform: 'translateX(100px)'}}>
                <img
                  src={h1FrontImg}
                  alt="Inner peace and gentle strength"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - Image Left, Text Right */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Photo with Overlapping Background */}
            <div className="relative">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -left-10 w-64 h-96 z-0">
                <img
                  src={h3BgImg}
                  alt="Peaceful background for mental clarity"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned down to start at 30% of background */}
              <div className="w-80 h-96 relative mx-auto lg:ml-32 lg:mr-0 lg:mt-28 z-10">
                <img
                  src={h1FrontImg}
                  alt="Trust and openness in healing"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                OPEN HEART
              </h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  Learning to trust again — both yourself and others — becomes 
                  possible when you've done the inner work. Your heart opens not 
                  because you're naive, but because you're strong enough to be 
                  vulnerable in healthy ways.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  This page does not judge, and neither do your feelings. You 
                  discover that mental clarity comes not from having all the answers, 
                  but from understanding your patterns and choosing your responses.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-kinfolk text-earthy-brown/80 italic leading-relaxed">
                  "True strength is being soft in a world that mistakes gentleness for weakness."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section - Image Right, Text Left */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                PEACEFUL BALANCE
              </h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  You learn to choose peace over perfection in your daily life 
                  decisions. Self-regulation becomes natural — when you feel 
                  anxious, you tap your heart and breathe instead of spiraling 
                  into overwhelm.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  Relationships heal when you pause the blame and find understanding 
                  instead. You allow yourself to be held, even if it's just in 
                  small moments, and you extend that same gentle care to others.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-kinfolk text-earthy-brown/80 italic leading-relaxed">
                  "Balance is not perfection — it's the art of returning to center when life pulls you away."
                </p>
              </div>
            </div>

            {/* Right Side - Photo with Overlapping Background */}
            <div className="relative order-1 lg:order-2">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -right-10 w-64 h-96 z-0">
                <img
                  src={h4BgImg}
                  alt="Peaceful background for balance"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned for right-side overlap */}
              <div className="w-80 h-96 relative mx-auto lg:-mr-28 lg:ml-0 lg:mt-20 z-10" style={{transform: 'translateX(100px)'}}>
                <img
                  src={h1FrontImg}
                  alt="Relationship healing and gentle care"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        {/* Fifth Section - Image Left, Text Right */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Photo with Overlapping Background */}
            <div className="relative">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -left-10 w-64 h-96 z-0">
                <img
                  src={h5BgImg}
                  alt="Peaceful background for inner wisdom"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned down to start at 30% of background */}
              <div className="w-80 h-96 relative mx-auto lg:ml-32 lg:mr-0 lg:mt-28 z-10">
                <img
                  src={h1FrontImg}
                  alt="Inner wisdom and self-awareness"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                INNER WISDOM
              </h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  Therapy awakens the wisdom that was always within you. You begin 
                  to trust your intuition, recognize your own patterns, and make 
                  decisions from a place of inner knowing rather than external pressure.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  This is where authentic healing happens — when you learn to listen 
                  to your inner voice with compassion, to honor your feelings without 
                  judgment, and to trust that you have everything you need within you.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-kinfolk text-earthy-brown/80 italic leading-relaxed">
                  "The answers you seek are not outside you — they're waiting quietly within."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sixth Section - Image Right, Text Left */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                AUTHENTIC CONNECTION
              </h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  As you heal, your relationships transform. You learn to connect 
                  authentically — sharing your truth without losing yourself, 
                  setting boundaries with love, and choosing relationships that 
                  nourish rather than drain your spirit.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  This deeper connection starts with yourself and ripples outward 
                  to touch every relationship in your life. You become magnetic 
                  to what's meant for you and peacefully release what no longer serves.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-kinfolk text-earthy-brown/80 italic leading-relaxed">
                  "Real connection happens when you're brave enough to be yourself."
                </p>
              </div>
            </div>

            {/* Right Side - Photo with Overlapping Background */}
            <div className="relative order-1 lg:order-2">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -right-10 w-64 h-96 z-0">
                <img
                  src={h6BgImg}
                  alt="Peaceful background for connection"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned for right-side overlap */}
              <div className="w-80 h-96 relative mx-auto lg:-mr-28 lg:ml-0 lg:mt-20 z-10" style={{transform: 'translateX(100px)'}}>
                <img
                  src={h1FrontImg}
                  alt="Authentic connection and relationships"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Seventh Section - Image Left, Text Right */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Photo with Overlapping Background */}
            <div className="relative">
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -left-10 w-64 h-96 z-0">
                <img
                  src={h7BgImg}
                  alt="Peaceful background for lasting transformation"
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
              </div>

              {/* Main Photo - Positioned down to start at 30% of background */}
              <div className="w-80 h-96 relative mx-auto lg:ml-32 lg:mr-0 lg:mt-28 z-10">
                <img
                  src={h1FrontImg}
                  alt="Lasting transformation and growth"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                LASTING TRANSFORMATION
              </h3>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  The most beautiful part of therapy is witnessing your own 
                  transformation — not into someone different, but into who you've 
                  always been beneath the layers of protection, fear, and doubt.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  This isn't a destination but a way of being — moving through life 
                  with greater ease, responding instead of reacting, and trusting 
                  in your own resilience to handle whatever comes your way.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-kinfolk text-earthy-brown/80 italic leading-relaxed">
                  "You are not broken and in need of fixing — you are whole and in the process of remembering."
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* Soft Colors Hold You Section - Full Screen */}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Closing Reflection */}
          <div className="max-w-4xl mx-auto text-center">
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