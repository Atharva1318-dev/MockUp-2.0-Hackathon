import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CustomerReviews = () => {
  const reviewsRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  
  // Reset refs on each render
  useEffect(() => {
    cardsRef.current = [];
  }, []);
  
  // Add cards to refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    if (!reviewsRef.current || cardsRef.current.length === 0) return;
    
    const titleElement = reviewsRef.current.querySelector(".section-title");
    
    if (!titleElement) return;
    
    // Create animation timeline similar to BlogSection
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(titleElement, {
      y: -30,
      opacity: 0,
      duration: 0.8,
    })
    .from(cardsRef.current, {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
    }, "-=0.3");
    
    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);
  
  // Hover Animations - matching BlogSection style
  const handleMouseEnter = (card, bgColor) => {
    gsap.killTweensOf(card); // Prevent animation conflicts
    
    gsap.to(card, {
      y: -10,
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      duration: 0.3
    });
    
    gsap.to(card.querySelector(".card-overlay"), { 
      opacity: 0.95, 
      duration: 0.3 
    });
    
    const reviewText = card.querySelector(".review-text");
    const reviewerName = card.querySelector(".reviewer-name");
    const reviewerLocation = card.querySelector(".reviewer-location");
    
    // Apply gradient text effect to review text (similar to the blog hover effect)
    if (reviewText) {
      gsap.to(reviewText, { 
        opacity: 1, 
        y: 0, 
        duration: 0.3,
        background: bgColor,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      });
    }
    
    if (reviewerName) {
      gsap.to(reviewerName, { 
        opacity: 1, 
        x: 0, 
        color: "#d946ef",
        duration: 0.3 
      });
    }
    
    if (reviewerLocation) {
      gsap.to(reviewerLocation, { 
        opacity: 1, 
        x: 0, 
        duration: 0.3 
      });
    }
  };
  
  const handleMouseLeave = (card) => {
    gsap.killTweensOf(card); // Prevent animation conflicts
    
    gsap.to(card, { 
      y: 0,
      scale: 1, 
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", 
      duration: 0.3 
    });
    
    gsap.to(card.querySelector(".card-overlay"), { 
      opacity: 0, 
      duration: 0.3 
    });
    
    const reviewText = card.querySelector(".review-text");
    const reviewerName = card.querySelector(".reviewer-name");
    const reviewerLocation = card.querySelector(".reviewer-location");
    
    if (reviewText) {
      gsap.to(reviewText, { 
        opacity: 0, 
        y: 20,
        WebkitTextFillColor: "white",
        duration: 0.2 
      });
    }
    
    if (reviewerName) {
      gsap.to(reviewerName, { 
        opacity: 0, 
        x: -10,
        color: "white",
        duration: 0.2 
      });
    }
    
    if (reviewerLocation) {
      gsap.to(reviewerLocation, { 
        opacity: 0, 
        x: -10, 
        duration: 0.2 
      });
    }
  };
  
  const reviewsData = [
    { 
      name: "John Smith", 
      location: "From New York", 
      text: "Incredible gaming experience!", 
      bgColor: "bg-purple-900",
      gradient: "linear-gradient(to right, #9333ea, #d946ef)" 
    },
    { 
      name: "Mark Wilson", 
      location: "From London", 
      text: "Amazing build quality and fantastic customer support.", 
      bgColor: "bg-blue-900",
      gradient: "linear-gradient(to right, #2563eb, #38bdf8)" 
    },
    { 
      name: "Sally H. McDuffie", 
      location: "From California", 
      text: "Completely transformed my gaming experience!", 
      bgColor: "bg-pink-900", 
      isMain: true,
      gradient: "linear-gradient(to right, #db2777, #f472b6)" 
    },
    { 
      name: "Emily Chen", 
      location: "From Toronto", 
      text: "Exceptional comfort during long gaming sessions.", 
      bgColor: "bg-green-900",
      gradient: "linear-gradient(to right, #16a34a, #4ade80)" 
    },
    { 
      name: "Carlos Rodriguez", 
      location: "From Madrid", 
      text: "Perfect for both casual and competitive gaming!", 
      bgColor: "bg-indigo-900",
      gradient: "linear-gradient(to right, #4f46e5, #818cf8)" 
    },
  ];
  
  return (
    <div className="bg-card text-white py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - Matching the blog section style */}
        <h1 ref={titleRef} className="section-title text-5xl md:text-6xl font-bold mb-16 text-center tracking-wide">
          Customer Reviews
        </h1>
        
        {/* Reviews Grid */}
        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`review-card relative rounded-lg overflow-hidden h-96 transition-all duration-300 cursor-pointer shadow-lg bg-gray-800 ${review.isMain ? 'md:col-span-1' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget, review.gradient)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className={`absolute inset-0 ${review.bgColor} bg-opacity-70`}></div>
              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  Verified Purchase
                </div>
                <h3 className="reviewer-name text-xl font-bold text-white opacity-0 transform translate-x-[-10px] mb-1">
                  {review.name}
                </h3>
                <p className="reviewer-location text-sm text-gray-400 opacity-0 transform translate-x-[-10px] mb-3">
                  {review.location}
                </p>
                <p className="review-text text-lg font-medium mt-2 opacity-0 transform translate-y-[20px]">
                  "{review.text}"
                </p>
                <div className="mt-4 opacity-0 review-text transform translate-y-[20px]">
                  <button className="text-sm font-medium flex items-center text-white hover:text-fuchsia-500 transition-colors">
                    Read Full Review
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
