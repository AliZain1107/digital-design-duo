import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

interface MarketSegment {
  image: string;
  title: string;
  link: string;
}

const MarketSegmentCarousel: React.FC = () => {
  // Market segments data
  const marketSegments: MarketSegment[] = [
    {
      image: "/lovable-uploads/1.png",
      title: "REAL ESTATE PROFESSIONALS",
      link: "/real-estate"
    },
    {
      image: "/lovable-uploads/2.png",
      title: "HOMEOWNERS & RENTERS",
      link: "/homeowners"
    },
    {
      image: "/lovable-uploads/3.png", 
      title: "STARTUPS & TECH-SAVVY CREATORS",
      link: "/startups"
    },
    {
      image: "/lovable-uploads/4.png",
      title: "INTERIOR DESIGNERS & ARCHITECTS",
      link: "/designers"
    },
    {
      image: "/lovable-uploads/5.png",
      title: "RETAILERS & BRANDS",
      link: "/retailers"
    },
    {
      image: "/lovable-uploads/6.png",
      title: "WALLPAPER BRANDS",
      link: "/wallpaper"
    },
    {
      image: "/lovable-uploads/7.png",
      title: "WALLPAPER & FLOORING BRANDS",
      link: "/flooring-wallpaper"
    },
    {
      image: "/lovable-uploads/8.png",
      title: "FLOORING BRANDS",
      link: "/flooring"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-advance function
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === marketSegments.length - 1 ? 0 : prev + 1));
  }, [marketSegments.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? marketSegments.length - 1 : prev - 1));
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    // Pause auto-advance temporarily when user manually selects an image
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };
  
  // Set up auto-advancing with useEffect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isPaused) {
      intervalId = setInterval(() => {
        goToNext();
      }, 5000); // Change slide every 5 seconds
    }
    
    // Clean up interval on component unmount or when paused
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [goToNext, isPaused]);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent">
            Tailored Solutions For Every Need
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Our AI design tool serves diverse market segments with specialized features
        </p>

        {/* Main carousel container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Large image display */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-xl mb-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Link to={marketSegments[activeIndex].link}>
              <img 
                src={marketSegments[activeIndex].image} 
                alt={marketSegments[activeIndex].title}
                className="w-full aspect-video object-cover transition-transform duration-700"
              />
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-indigo-800/90 text-white py-5 px-6">
                <h3 className="text-2xl md:text-3xl font-bold text-center">{marketSegments[activeIndex].title}</h3>
              </div>
            </Link>
            
            {/* Navigation buttons */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                goToPrev();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-800 rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                goToNext();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-800 rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            {/* Progress indicators */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 py-2">
              {marketSegments.map((_, index) => (
                <div 
                  key={`indicator-${index}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {marketSegments.map((segment, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
                  activeIndex === index ? "ring-4 ring-purple-600 scale-110" : "opacity-70 hover:opacity-100"
                }`}
                aria-label={`View ${segment.title}`}
              >
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSegmentCarousel; 