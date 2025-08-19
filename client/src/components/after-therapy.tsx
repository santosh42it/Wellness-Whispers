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
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-earthy-brown mb-6">
            After Therapy
          </h2>
          <p className="text-xl text-sage-green font-medium max-w-4xl mx-auto leading-relaxed">
            Small shifts that create lasting change. These are the moments that matter.
          </p>
        </div>

        {/* Collage Style Images with Torn Paper Effect */}
        <div className="relative max-w-7xl mx-auto h-[1200px] md:h-[1100px] lg:h-[1200px] overflow-hidden">
          {transformations.map((item, index) => {
            // Random positioning and sizing for collage effect
            const sizes = [
              { width: 'w-96', height: 'h-64' },
              { width: 'w-80', height: 'h-96' },
              { width: 'w-88', height: 'h-72' },
              { width: 'w-84', height: 'h-80' },
              { width: 'w-76', height: 'h-88' },
              { width: 'w-100', height: 'h-76' },
              { width: 'w-72', height: 'h-84' },
              { width: 'w-92', height: 'h-68' },
              { width: 'w-80', height: 'h-80' }
            ];

            const positions = [
              { top: '5%', left: '8%', rotation: 'rotate-3' },
              { top: '12%', right: '15%', rotation: '-rotate-2' },
              { top: '25%', left: '5%', rotation: 'rotate-1' },
              { top: '8%', left: '45%', rotation: '-rotate-3' },
              { top: '35%', right: '8%', rotation: 'rotate-2' },
              { top: '50%', left: '12%', rotation: '-rotate-1' },
              { top: '45%', left: '55%', rotation: 'rotate-4' },
              { top: '65%', right: '25%', rotation: '-rotate-2' },
              { top: '70%', left: '25%', rotation: 'rotate-1' }
            ];

            const sizeClass = sizes[index % sizes.length];
            const positionClass = positions[index % positions.length];

            // Define different torn paper effects
            const tornEffects = [
              'polygon(0% 0%, 95% 0%, 100% 8%, 98% 100%, 0% 100%)', // Right side torn
              'polygon(0% 0%, 100% 0%, 100% 100%, 5% 95%, 0% 85%)', // Bottom left torn  
              'polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 5%)', // Top left torn
              'polygon(0% 0%, 100% 0%, 100% 92%, 95% 100%, 0% 100%)', // Bottom right torn
              'polygon(0% 8%, 5% 0%, 100% 0%, 100% 100%, 0% 100%)', // Top torn
              'polygon(0% 0%, 100% 0%, 100% 100%, 2% 92%, 0% 85%)', // Bottom torn irregular
              'polygon(0% 0%, 98% 0%, 100% 5%, 95% 100%, 0% 100%)', // Top right torn
              'polygon(8% 0%, 100% 0%, 100% 100%, 0% 95%, 0% 5%)', // Left side torn
              'polygon(0% 2%, 95% 0%, 100% 8%, 98% 95%, 5% 100%, 0% 92%)', // Multiple tears
            ];

            const currentTornEffect = tornEffects[index % tornEffects.length];

            return (
              <div 
                key={index}
                className={`absolute ${sizeClass.width} ${sizeClass.height} ${positionClass.rotation} shadow-2xl transform transition-all duration-300 hover:scale-105 hover:z-10`}
                style={{
                  top: positionClass.top,
                  left: positionClass.left,
                  right: positionClass.right,
                  zIndex: 10 + index
                }}
              >
                {/* No white border, direct torn paper effect on image */}
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover filter saturate-90"
                  style={{
                    clipPath: currentTornEffect,
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3)) saturate(90%)'
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Closing Reflection */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-white/50 backdrop-blur-sm p-12 rounded-3xl shadow-soft">
            <p className="text-xl text-charcoal-grey font-lato leading-relaxed italic">
              "Healing isn't about becoming someone new. It's about returning to who you've 
              always been underneath the hurt, the doubt, and the overwhelm."
            </p>
            <p className="text-sage-green font-playfair text-lg mt-4">
              — Your journey continues, one gentle step at a time
            </p>
          </div>
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
  );
}