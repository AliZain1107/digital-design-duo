import React from "react";
import ShowcaseScroll from "./ShowcaseScroll";

const ArchitectureRevolution: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 w-full py-28 overflow-hidden">
      <div className="w-full relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -z-10 blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full -z-10 blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <h2 className="text-center mb-16 relative">
            <span className="inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
              Architecture Revolution
            </span>
            <span className="block mt-4 text-xl sm:text-2xl md:text-3xl text-gray-700 font-light max-w-4xl mx-auto">
              Home design, Room design and Interior design by AI.
            </span>
          </h2>
        </div>
        
        <div className="w-full transform hover:scale-[1.01] transition-transform duration-1000">
          <ShowcaseScroll />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureRevolution;
