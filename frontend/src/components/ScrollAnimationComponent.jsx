import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scope selectors to this component using gsap.context
    const ctx = gsap.context(() => {
      const scrollSections = document.querySelectorAll('.scroll-section');

      scrollSections.forEach((section) => {
        const wrapper = section.querySelector('.wrapper');
        const items = wrapper.querySelectorAll('.item');
        const direction = section.classList.contains('vertical-section')
          ? 'vertical'
          : 'horizontal';

        // Set initial positions for all items except the first one
        items.forEach((item, index) => {
          if (index !== 0) {
            if (direction === 'horizontal') {
              gsap.set(item, { xPercent: 100 });
            } else {
              gsap.set(item, { yPercent: 100 });
            }
          }
        });

        // Create timeline for scroll-triggered animations.
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: 'top top',
            end: () => `+=${(items.length - 1) * 100}%`,
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
          defaults: { ease: 'none' },
        });

        for (let i = 0; i < items.length - 1; i++) {
          timeline.to(items[i], {
            scale: 0.9,
            borderRadius: '10px',
          });
          if (direction === 'horizontal') {
            timeline.to(items[i + 1], { xPercent: 0 }, '<');
          } else {
            timeline.to(items[i + 1], { yPercent: 0 }, '<');
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="main-wrapper">
      {/* Vertical Scroll Section */}
      <div className="scroll-section vertical-section overflow-hidden">
        <div className="wrapper h-screen">
          <div
            role="list"
            className="flex justify-start items-center h-full relative p-[0.2rem]"
          >
            {/* Vertical Item 1: Gaming Headphones */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Immersive Audio Experience
                </h2>
                <p>
                  Elevate your game with our top-of-the-line gaming headphones that deliver crystal-clear sound and deep bass.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://source.unsplash.com/800x600/?gaming,headphones"
                alt="Gaming Headphones"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Vertical Item 2: Gaming Laptop (unchanged) */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Power-Packed Gaming Laptop
                </h2>
                <p>
                  Experience ultimate performance with our gaming laptops featuring fast processors and advanced graphics.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Gaming Laptop"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Vertical Item 3: Gaming Keyboard */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Precision Gaming Keyboard
                </h2>
                <p>
                  Enjoy responsive keys, customizable RGB lighting, and tactile feedback to gain the competitive edge.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://source.unsplash.com/800x600/?gaming,keyboard"
                alt="Gaming Keyboard"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Vertical Item 4: Gaming Mouse */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Ergonomic Gaming Mouse
                </h2>
                <p>
                  Gain ultimate control with our high-DPI, customizable gaming mouse designed for precision.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://source.unsplash.com/800x600/?gaming,mouse"
                alt="Gaming Mouse"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transition Page Between Scroll Types */}
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-4xl font-bold text-white">
          Explore More Gaming Essentials
        </h2>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="scroll-section horizontal-section overflow-hidden">
        <div className="wrapper h-screen">
          <div
            role="list"
            className="flex justify-start items-center h-full relative p-[0.2rem]"
          >
            {/* Horizontal Item 1: Gaming Monitor */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Ultra HD Gaming Monitor
                </h2>
                <p>
                  Immerse yourself in vivid colors and high refresh rates for a truly dynamic gaming experience.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://source.unsplash.com/800x600/?gaming,monitor"
                alt="Gaming Monitor"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 2: Gaming Chair */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Ergonomic Gaming Chair
                </h2>
                <p>
                  Designed for comfort and style, our gaming chairs offer premium support during marathon sessions.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://source.unsplash.com/800x600/?gaming,chair"
                alt="Gaming Chair"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 3: VR Headset */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Cutting-Edge VR Headset
                </h2>
                <p>
                  Step into a new dimension of gaming with immersive virtual reality technology.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://source.unsplash.com/800x600/?vr,headset"
                alt="VR Headset"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 4: Gaming Desk */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-lg overflow-hidden"
            >
              <div className="item_content z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col justify-center items-start p-12 relative w-1/2 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Sleek Gaming Desk
                </h2>
                <p>
                  Organize your gear and elevate your setup with a modern, spacious gaming desk designed for efficiency.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <img
                src="https://source.unsplash.com/800x600/?gaming,desk"
                alt="Gaming Desk"
                className="item_media z-0 object-cover w-1/2 h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="overflow-hidden">
        <div className="px-10">
          <div className="max-w-4xl mx-auto py-8">
            <div className="max-w-5xl mx-auto">
              <h1
                className="text-5xl h-[50vh] flex items-center justify-center"
                style={{ textShadow: '0.04em 0.04rem 0 #81b5ab' }}
              >
                Level Up Your Game!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScrollAnimationComponent;
