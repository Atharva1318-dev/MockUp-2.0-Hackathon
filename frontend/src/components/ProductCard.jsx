import { ArrowRight } from 'lucide-react';
import React from 'react';

function ProductCard() {
  return (
    <div className="min-h-screen bg-card text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold tracking-wider">
            Quantum Nexus
            <br />
            Wireless Headphones
          </h1>
          <p className="text-gray-400 max-w-lg" style={{ fontFamily: '"Open Sans", sans-serif' }}>
            Quantum - Engineered with state-of-the-art audio technology for immersive sound. Experience unparalleled clarity and precision with our premium noise-cancelling headphones.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold text-[#e558ff]">&#8377;8699</span>
            <button className="bg-[#e558ff] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#d042eb] transition-colors">
              Buy Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Content - Headphone Model */}
        <div className="flex-1 relative">
          <div className="aspect-square bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-6 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <iframe
                title="Headphone"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                width="100%"
                height="100%"
                src="https://sketchfab.com/models/9cb17a119aec4bb78e408c0eac670886/embed?autostart=1&transparent=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_stop=0&ui_help=0"
                className="w-full h-full"
              ></iframe>
            </div>
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
