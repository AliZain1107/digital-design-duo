import React from "react";
import { Link } from "react-router-dom";

const UnlockPotential: React.FC = () => {
  const images = [
    {
      image: "/lovable-uploads/1.png",
      link: "/renovators",
    },
    {
      image: "/lovable-uploads/2.png",
      link: "/wallpaper-brands",
    },
    {
      image: "/lovable-uploads/3.png",
      link: "/real-estate",
    },
    {
      image: "/lovable-uploads/4.png",
      link: "/interior-designers",
    },
    {
      image: "/lovable-uploads/5.png",
      link: "/furniture-retailers",
    },
    {
      image: "/lovable-uploads/6.png",
      link: "/homeowners",
    },
    {
      image: "/lovable-uploads/7.png",
      link: "/commercial-spaces",
    },
    {
      image: "/lovable-uploads/8.png",
      link: "/architects",
    },
  ];

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center py-28 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Heading with star icons */}
        <div className="flex flex-col items-center justify-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-purple-600 transform rotate-12">
              <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0L21.2 14.8L36 18L21.2 21.2L18 36L14.8 21.2L0 18L14.8 14.8L18 0Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide leading-none">
              <span className="bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent">
                UNLOCK THE POTENTIAL
              </span>
            </h2>
            <div className="text-orange-500 transform -rotate-12">
              <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0L21.2 14.8L36 18L21.2 21.2L18 36L14.8 21.2L0 18L14.8 14.8L18 0Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-center text-[rgba(44,30,73,1)] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto font-serif italic">
            Our AI was inspired by Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, and Gaudi. 
            <span className="block mt-2 font-bold not-italic">Be inspired as our AI brings your design ideas to life.</span>
          </p>
        </div>

        {/* Image Grid - improved layout with 8 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {images.map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className="group rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:scale-[1.03] relative"
            >
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-purple-50 to-orange-50">
                <img
                  src={item.image}
                  alt={`Interior design example ${index + 1}`}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnlockPotential;
