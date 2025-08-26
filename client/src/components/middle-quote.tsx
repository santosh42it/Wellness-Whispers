import middleBgImage from "@assets/middle-bg.jpg";

export default function MiddleQuote() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img 
          src={middleBgImage}
          alt="Peaceful cloudy landscape with wildflowers"
          className="w-full h-full object-contain"
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30"></div>
      </div>
      
      {/* Quote text with improved readability */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text container with subtle background */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <blockquote className="text-white text-2xl md:text-4xl lg:text-5xl font-vibes font-medium leading-relaxed drop-shadow-2xl">
              "Like clouds drifting across the sky, feelings don't stay fixed. They move, change, and slowly make room for new ones."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}