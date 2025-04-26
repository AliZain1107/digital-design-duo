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
  ];

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading with star icons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="text-purple-600">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0L21.2 14.8L36 18L21.2 21.2L18 36L14.8 21.2L0 18L14.8 14.8L18 0Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent">
            UNLOCK THE POTENTIAL
          </h2>
          <div className="text-orange-500">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0L21.2 14.8L36 18L21.2 21.2L18 36L14.8 21.2L0 18L14.8 14.8L18 0Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-center text-[rgba(44,30,73,1)] text-lg md:text-xl max-w-4xl mx-auto mb-16">
          Our AI was inspired by Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, and Gaudi. 
          Be inspired as our AI brings your design ideas to life.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className="group rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={item.image}
                  alt={`Interior design example ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnlockPotential;
