export default function Testimonials() {
  const testimonials = [
    {
      name: "Shreya, 24",
      text: "I was drowning in overthinking… now I feel lighter and more in control.",
      rating: 5
    },
    {
      name: "Arjun, 27", 
      text: "I didn't believe online therapy could feel this warm… I finally found clarity.",
      rating: 5
    },
    {
      name: "Priya, 22",
      text: "Gentle, non-judgmental listening helped me breathe again. I feel hopeful.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-earthy-brown mb-6">
            Stories of Healing
          </h2>
          <p className="text-xl text-sage-green font-medium max-w-3xl mx-auto">
            Real experiences from people who found their way back to themselves.
          </p>
        </div>

        {/* Testimonials - Paper Tiered Style */}
        <div className="relative max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative mb-8 transform ${
                index === 0 ? 'rotate-1 z-30' : 
                index === 1 ? '-rotate-1 z-20' : 
                'rotate-0.5 z-10'
              } ${index > 0 ? '-mt-4' : ''}`}
            >
              {/* Paper Background with Tiered Effect */}
              <div className="bg-gradient-to-br from-white via-cream/95 to-soft-beige/90 p-8 md:p-12 rounded-lg shadow-2xl border border-sage/20 relative overflow-hidden">
                
                {/* Subtle Paper Texture */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-peach/10 to-sage/5"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Decorative Quote Mark */}
                  <div className="text-6xl text-sage/30 font-serif leading-none mb-4">"</div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="mb-6">
                    <p className="text-dark-brown font-lato text-lg md:text-xl leading-relaxed italic mb-6">
                      {testimonial.text}
                    </p>
                  </blockquote>

                  {/* Author & Stars */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <cite className="text-sage font-playfair font-semibold text-lg not-italic">
                      — {testimonial.name}
                    </cite>
                    
                    {/* Stars */}
                    <div className="flex mt-2 md:mt-0">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className="w-5 h-5 text-peach"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Torn Paper Edge Effect */}
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-sage/10 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonial Context */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
            <p className="text-lg text-charcoal-grey font-lato leading-relaxed">
              Each story represents someone who took the brave step to prioritize their emotional 
              well-being. Your story matters too, and there's space here for your healing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}