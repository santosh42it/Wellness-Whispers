export default function CompassionQuote() {
  return (
    <section className="pt-24 pb-16 relative bg-gradient-to-br from-peach/5 via-sage/10 to-cream/20">
      {/* Decorative section divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sage/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/60 backdrop-blur-sm p-12 rounded-3xl shadow-soft border border-sage/10">
            <p className="text-2xl lg:text-3xl font-kinfolk font-light text-dark-brown leading-relaxed italic">
              "Every month, a few sessions are kept aside as a quiet gift — reserved for those who truly need support but cannot afford therapy. These are limited, yet always offered with compassion and trust."
            </p>
          </div>
        </div>
      </div>

      {/* Minimal nature texture */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-10"></div>
    </section>
  );
}