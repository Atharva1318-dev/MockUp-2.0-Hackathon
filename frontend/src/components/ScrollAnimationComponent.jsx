import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Use gsap.context to scope selectors to this component
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
        // Use (items.length - 1) so we don't reference a non-existent next item.
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: 'top top',
            end: () => `+=${(items.length - 1) * 100}%`,
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true, // Uncomment for debugging layout/trigger points
          },
          defaults: { ease: 'none' },
        });

        // Animate each item and bring in the next one
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

    // Cleanup animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="main-wrapper">
      {/* Section: Vertical Scroll Intro */}
      <div className="overflow-hidden">
        <div className="max-w-4xl mx-auto py-8">
          <div className="max-w-5xl mx-auto">
            <h1
              className="text-5xl h-[50vh] flex items-center justify-center"
              style={{ textShadow: '0.04em 0.04rem 0 #81b5ab' }}
            >
              Vertical Scroll Is Cool!
            </h1>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Section */}
      <div className="scroll-section vertical-section overflow-hidden">
        <div className="wrapper h-screen">
          <div
            role="list"
            className="flex justify-start items-center h-full relative p-[0.2rem]"
          >
            {/* Item 1 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  1
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  Wildlife in Action: A Glimpse into Nature’s Daily Drama
                </h2>
                <p>
                  Witness the fascinating lives of animals in their natural
                  habitats, from playful cubs to stealthy predators.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
              />
            </div>

            {/* Item 2 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  2
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  The Changing Seasons: Nature’s Everlasting Cycle
                </h2>
                <p>
                  Experience the beauty of nature's transitions, from blooming
                  spring flowers to snowy winter landscapes.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
              />
            </div>

            {/* Item 3 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  3
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  Guardians of Nature: Protecting Our Planet’s Future
                </h2>
                <p>
                  Learn about the importance of conservation and how we can work
                  together to preserve the beauty of nature for generations to
                  come.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/4328514/4328514-uhd_2560_1440_30fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
              />
            </div>

            {/* Item 4 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  4
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  Astral Aesthetics: Portraits from the Infinite
                </h2>
                <p>
                  Experience the boundless beauty of the cosmos through striking
                  portraits that capture its infinite aesthetic appeal.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/2871916/2871916-hd_1920_1080_30fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Horizontal Scroll Intro */}
      <div className="overflow-hidden">
        <div className="max-w-4xl mx-auto py-8">
          <div className="max-w-5xl mx-auto">
            <h1
              className="text-5xl h-[50vh] flex items-center justify-center"
              style={{ textShadow: '0.04em 0.04rem 0 #81b5ab' }}
            >
              But Horizontal Scroll Is Also Cool!
            </h1>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="scroll-section horizontal-section overflow-hidden">
        <div className="wrapper h-screen">
          <div
            role="list"
            className="flex justify-start items-center h-full relative p-[0.2rem]"
          >
            {/* Horizontal Item 1 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  1
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  Wildlife in Action: A Glimpse into Nature’s Daily Drama
                </h2>
                <p>
                  Explore the untouched beauty of forests, mountains, and rivers
                  as we uncover the hidden secrets of nature's most breathtaking
                  landscapes.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/10178127/10178127-uhd_2560_1440_30fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 2 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  2
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  Nature’s Symphony: The Sounds That Heal the Soul
                </h2>
                <p>
                  Immerse yourself in the soothing sounds of chirping birds,
                  rustling leaves, and flowing streams – nature's music for peace
                  and tranquility.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/15708463/15708463-uhd_2560_1440_24fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 3 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  3
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  Nature’s Masterpieces: Landscapes That Take Your Breath Away
                </h2>
                <p>
                  Discover stunning views of majestic mountains, endless oceans,
                  and golden sunsets that remind us of nature's artistic brilliance.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/15708462/15708462-uhd_2560_1440_24fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
              />
            </div>

            {/* Horizontal Item 4 */}
            <div
              role="listitem"
              className="item w-screen h-full flex absolute inset-0 shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden"
            >
              <div className="item_content bg-white text-gray-800 flex flex-col justify-center items-start p-12 relative w-1/2">
                <h2 className="item_number text-xl h-12 w-12 mb-2 rounded-full bg-black text-white flex items-center justify-center font-normal absolute top-24 left-12">
                  4
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  The Power of Nature: How It Shapes Our World
                </h2>
                <p>
                  Dive into the incredible forces of nature – from roaring
                  waterfalls to mighty hurricanes – and see how they sculpt the
                  earth we live on.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/5788966/5788966-hd_1920_1080_25fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media object-cover w-1/2 h-full"
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
                Soo Cool!!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Floating YouTube Button */}
      <a
        href="https://www.youtube.com/@PixelPerfectLabs"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-all duration-300 z-20 hover:bg-red-600 hover:shadow-lg hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
        </svg>
      </a>
    </main>
  );
};

export default ScrollAnimationComponent;
