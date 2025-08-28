import middleBgImage from "@assets/middle-bg.jpg";

export default function MiddleQuote() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width background image */}
      <div className="relative w-full">
        <img 
          src={middleBgImage}
          alt="Peaceful cloudy landscape with wildflowers"
          className="w-full h-auto object-cover"
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30"></div>
        
        {/* Quote text with improved readability */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-white text-2xl md:text-4xl lg:text-5xl font-vibes font-medium leading-relaxed drop-shadow-2xl">
              "Like clouds drifting across the sky, feelings don't stay fixed. They move, change, and slowly make room for new ones."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}