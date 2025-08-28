import middleBg2 from "@assets/middle-bg2.jpg";

export default function NatureHealing() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width background image */}
      <div className="relative w-full">
        <img 
          src={middleBg2}
          alt="Peaceful nature healing environment"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30"></div>
        
        {/* Quote text with improved readability */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Text container with subtle background */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <blockquote className="text-white text-2xl md:text-4xl lg:text-5xl font-vibes font-medium leading-relaxed drop-shadow-2xl">
                "Nature shows us that stillness can heal. Your heart too can take its time to soften."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}