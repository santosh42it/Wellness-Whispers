export default function FontDemo() {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-sage/20 max-w-md">
      <h3 className="text-sm font-nunito font-medium text-earthy-brown mb-3">Font Options:</h3>
      
      {/* Current: Cormorant Garamond (Kinfolk) */}
      <div className="mb-4 p-3 bg-cream/50 rounded-lg">
        <p className="text-xs font-nunito text-earthy-brown/70 mb-1">Current: Cormorant Garamond (Extralight)</p>
        <h1 className="text-2xl font-kinfolk font-extralight text-earthy-brown leading-tight">
          WELCOME TO YOUR SAFE SPACE
        </h1>
      </div>
      
      {/* Option: Nunito 400 */}
      <div className="p-3 bg-sage/10 rounded-lg">
        <p className="text-xs font-nunito text-earthy-brown/70 mb-1">Option: Nunito 400</p>
        <h1 className="text-2xl font-nunito font-normal text-earthy-brown leading-tight uppercase tracking-wide">
          WELCOME TO YOUR SAFE SPACE
        </h1>
      </div>
      
      <p className="text-xs font-nunito text-earthy-brown/60 mt-3">
        Let me know which you prefer and I'll update the hero section.
      </p>
    </div>
  );
}