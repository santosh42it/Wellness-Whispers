import pavanPhoto from "@assets/pavan.png";
import pavanBg from "@assets/pavan-bg.jpg";
import oceanBg from "@assets/ocean-bg.jpg";
import dreamyNatureImg from "@assets/nature-landscape-with-dreamy.jpg";
import balloonImg from "@assets/hotair-balloons.jpg";
import sunsetImg from "@assets/sunset.jpg";
import natureLandscapeImg from "@assets/nature-landscape.jpg";
import WhatsAppButton from "./whatsapp-button";

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
              {/* Overlapping Background Image - Vertical format */}
              <div className="absolute -top-10 -left-10 w-64 h-96 z-0">
                <img
                  src={pavanBg}
                  alt="Peaceful floral background"
                  className="w-full h-full object-cover opacity-70"
                  loading="eager"
                />
              </div>

              {/* Main Portrait Photo - Positioned down to start at 30% of background */}
              <div className="w-80 h-96 relative mx-auto lg:ml-32 lg:mr-0 lg:mt-28 z-10">
                <img
                  src={pavanPhoto}
                  alt="Ms. Pavan Chowdhary - Licensed Therapist"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                MEET ME
              </h1>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  I'm Ms. Pavan Chowdhary, a Gold Medalist in Public
                  Administration with a Postgraduate Diploma in Guidance &
                  Counselling, along with multiple certified diploma courses. My
                  journey combines 45+ years of entrepreneurial leadership and
                  mentoring people, including experience in conflict management,
                  with 6+ years of focused emotional support.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  I continue to expand my training across therapeutic
                  approaches, ensuring every session is flexible, empathetic,
                  and grounded in real-life understanding.
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
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-3xl font-nunito text-white/95 leading-relaxed drop-shadow-sm font-light">
                I offer online therapy especially suited for young adults,
                providing a safe space where emotions can be explored without
                judgment. Healing is not about fixing what is broken, but about
                listening deeply and finding a gentler way forward.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Dreamy Nature - Therapy Approach */}
      <div className="min-h-screen relative flex items-center py-20">
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <div className="space-y-8 mt-12 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                MY APPROACH
              </h2>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  Every session is designed to feel simple, safe, and welcoming, using gentle approaches like mindfulness, grounding, inner child healing, and reflective talk therapy.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  Therapy here is a safe pause for your heart, where emotions can rest and gradually transform into understanding, resilience, and inner strength.
                </p>
              </div>
            </div>

            {/* Right Side - Large Nature Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl h-[50vh] lg:h-[60vh]">
                <img
                  src={dreamyNatureImg}
                  alt="Dreamy nature landscape with peaceful therapy setting"
                  className="w-full h-full object-cover shadow-2xl rounded-lg"
                  loading="lazy"
                />
                {/* Quote below the image */}
                <div className="mt-12 text-center">
                  <p className="text-base sm:text-lg lg:text-2xl font-kinfolk font-extralight text-earthy-brown/80 italic leading-relaxed">A safe pause for your heart — where healing quietly unfolds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Hot Air Balloon */}
      <div className="min-h-screen relative flex items-center py-20">
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
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
                <div className="mt-12 text-center">
                  <p className="text-base sm:text-lg lg:text-2xl font-kinfolk font-extralight text-earthy-brown/80 italic leading-relaxed">Like a hot air balloon, healing rises gently — not with force, but with lightness.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8 mt-12 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-kinfolk font-extralight text-earthy-brown leading-tight uppercase">
                GENTLE RISING
              </h2>
              <div className="space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  I believe therapy should feel like a safe shoreline, a quiet
                  space for emotions to rest without pressure. Every balloon has
                  a quiet lift-off — so did I, by finding lightness in my own
                  journey. Over the years, I've learned that healing comes when
                  we pause, breathe, and allow space.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-nunito text-earthy-brown/90 leading-relaxed">
                  This space is not about rushing — it's about gently lifting,
                  and seeing life from a calmer height. My focus has always been
                  on helping hearts, not counting currency. Sessions are simple,
                  accessible, and deeply personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 5: Nature Landscape Section */}
      <div className="min-h-screen relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={natureLandscapeImg}
            alt="Peaceful nature landscape"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-kinfolk font-extralight text-white leading-tight uppercase drop-shadow-lg">
              STEADY STRENGTH
            </h2>
            <p className="text-lg sm:text-xl lg:text-4xl font-kinfolk font-extralight text-white/95 italic leading-relaxed drop-shadow-md">Even the highest cliffs stand calm against the waves — just like your heart can find steady strength.</p>
          </div>
        </div>
      </div>
      {/* Therapeutic Quote Transition */}
      <div className="py-16 relative bg-gradient-to-br from-cream/40 via-soft-beige/30 to-peach/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-3xl font-kinfolk font-extralight text-earthy-brown italic leading-relaxed">Healing is not about rushing — it's about finding steady, quiet steps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
