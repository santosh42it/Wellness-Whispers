import WhatsAppButton from "./whatsapp-button";

export default function Pricing() {
  const plans = [
    {
      name: "Comfort",
      price: "₹450",
      description: "1 Talk (50 min)",
      features: ["50-minute therapy session", "WhatsApp or Google Meet", "Gentle, supportive environment"]
    },
    {
      name: "Gentle",
      price: "₹950", 
      description: "1 Talk + 1 Check-in + 1 Booster",
      features: ["50-minute therapy session", "Follow-up check-in", "Booster session", "Ongoing support"]
    },
    {
      name: "Strength",
      price: "₹1800",
      description: "3 Talks + 2 Check-ins + 2 Boosters",
      features: ["3 therapy sessions", "2 check-in calls", "2 booster sessions", "Consistent healing journey"],
      popular: true
    },
    {
      name: "Reconnect", 
      price: "₹2500",
      description: "4 Talks + 3 Check-ins + 3 Boosters",
      features: ["4 therapy sessions", "3 check-in calls", "3 booster sessions", "Deep emotional work"]
    },
    {
      name: "Deep Care",
      price: "₹3200",
      description: "5 Talks + 5 Check-ins + 5 Boosters",
      features: ["5 therapy sessions", "5 check-in calls", "5 booster sessions", "Comprehensive support"]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-earthy-brown mb-6">
            Gentle, Accessible Emotional Wellness
          </h2>
          <p className="text-xl text-charcoal-grey font-lato max-w-4xl mx-auto leading-relaxed">
            This space was created for those who need a soft pause, a listening ear, and a safe 
            place to untangle their thoughts. Sessions are offered in the spirit of care and service, 
            so support can remain within reach for anyone who needs it.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16 pt-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-sage-green scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-sage-green text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-playfair font-bold text-earthy-brown mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-terracotta mb-2">
                  {plan.price}
                </div>
                <p className="text-sage-green font-medium">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-grey font-lato text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton className="w-full bg-sage-green hover:bg-olive-green text-white py-3 px-6 font-medium shadow-warm hover:shadow-strong transition-all duration-300 border-2 border-sage-green hover:border-olive-green">
                Choose {plan.name}
              </WhatsAppButton>
            </div>
          ))}
        </div>


      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-15"></div>
    </section>
  );
}