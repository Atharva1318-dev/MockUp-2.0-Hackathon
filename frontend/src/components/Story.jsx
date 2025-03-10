import { Play, ArrowUpRight } from "lucide-react";

export default function GamingStorySection() {
  return (
    <section className="w-full bg-gray-900 py-12 px-4 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12">
          {/* Left Panel - Gaming Setup with Video Play Button (60% width) */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 to-pink-700 md:col-span-3 h-[250px] md:h-[300px] lg:h-[350px]">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img
              src="/placeholder.svg"
              alt="Gaming setup with RGB keyboard, headset and controllers"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                        bg-white/20 backdrop-blur-sm rounded-full p-4 
                        hover:bg-white/30 transition-all duration-300"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 text-white fill-white" />
            </button>
          </div>

          {/* Right Panel - Our Story (40% width) */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-700 via-pink-600 to-purple-800 p-8 md:p-10 flex flex-col justify-between md:col-span-2 h-[250px] md:h-[300px] lg:h-[350px]">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-mono tracking-wide">
                Our Story
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mt-6">
                Driven by gaming passion, we craft the finest gear to empower players. Our unwavering innovation and
                user focus make us an integral part of the global gaming community.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors group"
              >
                <span className="text-lg font-medium">Read More</span>
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
