import middleBgImage from "@assets/middle-bg.jpg";

export default function MiddleQuote() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img 
          src={middleBgImage}
          alt="Peaceful cloudy landscape with wildflowers"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>
      
      {/* Overlapped quote text */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-white text-2xl md:text-4xl lg:text-5xl font-playfair font-medium italic leading-relaxed text-shadow-lg">
            "Like clouds drifting across the sky, feelings don't stay fixed. They move, change, and slowly make room for new ones."
          </blockquote>
        </div>
      </div>
    </section>
  );
}