import { Video, Clock, Heart, Shield, CheckCircle, Star } from "lucide-react";

export default function SessionInfo() {
  const features = [
    {
      icon: Video,
      title: "1-on-1 Online Sessions",
      description: "Sessions via Google Meet or WhatsApp Video - your choice for comfort.",
      borderColor: "border-peach/20"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule sessions that work with your life, not against it.",
      borderColor: "border-sage/20"
    },
    {
      icon: Heart,
      title: "Come As You Are",
      description: "No rigid format - just authentic conversation focused on your healing.",
      borderColor: "border-soft-coral/20"
    },
    {
      icon: Shield,
      title: "Healing-Focused",
      description: "No focus on diagnosis - only on healing and moving forward.",
      borderColor: "border-peach/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-soft-beige via-cream to-sage/15 relative">
      <div className="absolute inset-0 bg-overlay-sage opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full-width title section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-dark-brown">
            <span className="font-['Dancing_Script'] text-peach font-bold text-5xl md:text-6xl drop-shadow-lg">Online...</span> but it <br />
            <span className="text-sage font-bold drop-shadow-md">won't feel distant</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-peach via-accent-gold to-sage rounded-full mx-auto shadow-md"></div>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed font-medium">
            Technology brings us together, not apart. Every session feels personal, warm, and deeply connected.
          </p>
        </div>

        {/* Features section - full width */}
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const iconColors = ["text-sage", "text-peach", "text-soft-coral", "text-sage"];
                const bgGradients = [
                  "bg-gradient-to-br from-sage/10 to-sage/5",
                  "bg-gradient-to-br from-peach/10 to-peach/5", 
                  "bg-gradient-to-br from-soft-coral/10 to-soft-coral/5",
                  "bg-gradient-to-br from-sage/10 to-sage/5"
                ];
                return (
                  <div 
                    key={index}
                    className={`${bgGradients[index]} backdrop-blur-sm p-6 rounded-3xl border-2 border-peach/40 hover:shadow-strong transition-all duration-300 hover:scale-105 group relative overflow-hidden bg-white/90`}
                  >
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/20 -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-300"></div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-2xl bg-white shadow-warm group-hover:shadow-strong transition-all duration-300`}>
                          <Icon className={`${iconColors[index]} h-6 w-6`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-dark-brown mb-1">{feature.title}</h3>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="text-sage h-4 w-4" />
                            <span className="text-sm text-sage font-medium">Always Available</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-warm-gray leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          
          {/* Testimonial highlights */}
          <div className="bg-gradient-to-r from-white/80 to-cream/80 backdrop-blur-sm p-8 rounded-3xl border border-peach/20 shadow-xl">
              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-peach fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-dark-brown font-light italic">
                  "It truly feels like talking to a caring friend who understands exactly what you're going through"
                </blockquote>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sage">98%</div>
                    <div className="text-sm text-warm-gray">Feel More Connected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-peach">24hr</div>
                    <div className="text-sm text-warm-gray">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-soft-coral">5⭐</div>
                    <div className="text-sm text-warm-gray">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
