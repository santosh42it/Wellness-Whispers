import { Heart, Video, MessageCircle, Calendar } from "lucide-react";

export default function ServiceGallery() {
  const serviceImages = [
    {
      title: "Anxiety & Emotional Support",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      description: "Gentle support for anxiety, stress, and emotional overwhelm through heart-centered healing",
      icon: Heart,
      color: "text-sage"
    },
    {
      title: "Online Therapy Sessions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      description: "Comfortable online sessions from your safe space with warm, caring connection",
      icon: Video,
      color: "text-peach"
    },
    {
      title: "Relationship Healing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      description: "Support for breakups, toxic relationships, and social withdrawal in a healing environment",
      icon: MessageCircle,
      color: "text-soft-coral"
    },
    {
      title: "Mindfulness & Grounding",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      description: "Butterfly hug technique, breathwork, and somatic grounding with nature-inspired peace",
      icon: Calendar,
      color: "text-sage"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cream to-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-dark-brown mb-6">
            <span className="font-['Dancing_Script'] text-peach font-medium text-4xl md:text-5xl">Therapy</span> That <span className="text-sage font-medium">Feels Like Home</span>
          </h2>
          <p className="text-warm-gray max-w-3xl mx-auto text-lg leading-relaxed">
            Every image, every moment, and every technique is designed to create warmth, safety, and genuine healing. 
            These are real moments of connection, support, and transformation that happen in our sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceImages.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-[3/2] overflow-hidden torn-paper">
                  <img 
                    src={service.image}
                    alt={service.description}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional healing moment images */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
              alt="Warm tea and comfort items creating safe therapeutic space"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Comfort & Safety</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
              alt="Healing journal and reflection tools for emotional processing"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peach/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Reflection & Growth</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
              alt="Peaceful plants and natural healing environment"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-coral/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Natural Healing</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-sage/20 max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-dark-brown mb-4">
              Every Space is Sacred, Every Moment is Healing
            </h3>
            <p className="text-warm-gray leading-relaxed text-lg">
              Whether it's the gentle glow of candlelight during our sessions, the comfort of your favorite tea, 
              or the safety of speaking from your own space - every element of our work together is intentionally 
              crafted to support your healing journey. These images represent the warmth, safety, and genuine connection you'll experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}