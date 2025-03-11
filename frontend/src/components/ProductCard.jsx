import { ArrowRight } from 'lucide-react';

function ProductCard() {
  return (
    <div className="min-h-screen bg-card text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold tracking-wider" style={{ fontFamily: 'Arial' }}>
            Quantum Vanguard
            <br />
            Gaming Controller
          </h1>
          <p className="text-gray-400 max-w-lg">
            Quantum - Suggests advanced, cutting-edge technology powering the controller. It conveys a sense of innovation and high-performance.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold text-[#e558ff]">$85.99</span>
            <button className="bg-[#e558ff] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#d042eb] transition-colors">
              Buy Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Content - Controller Image */}
        <div className="flex-1 relative">
          <div className="aspect-square bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-12">
            <div className="w-full h-full bg-[#333] rounded-2xl"></div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e558ff]/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#e558ff]/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
