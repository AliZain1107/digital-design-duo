import React from "react";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gray-50 w-full flex flex-col items-center justify-center py-24 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left: Text */}
        <div className="flex-1 min-w-[300px] md:max-w-[520px] lg:max-w-[600px] md:pl-8 lg:pl-16 mb-10 md:mb-0">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-6">
              HOW IT WORKS
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-gray-900 mb-10">
              3 simple steps to interior design by AI
            </h3>
          </div>
          <div className="space-y-12 mt-6">
            <div className="transform hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl text-purple-800 font-bold mb-3">Upload</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Simply upload your image or sketch of the space you want to redesign.
              </p>
            </div>
            <div className="transform hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl text-purple-800 font-bold mb-3">Personalize</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Choose your preferences, from furniture selection to style, to create your ideal space by ai room design.
              </p>
            </div>
            <div className="transform hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl text-purple-800 font-bold mb-3">Enjoy</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Sit back and enjoy the end result by ai for interior design.
              </p>
            </div>
          </div>
          <Link
            to="/get-started"
            className="inline-block mt-12 text-lg md:text-xl bg-purple-700 hover:bg-purple-800 text-white font-medium px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            Get Started for Free
          </Link>
          <div className="text-base md:text-lg text-gray-500 font-bold mt-5">
            No Credit Card Required, No Commitments
          </div>
        </div>
        {/* Right: Animation */}
        <div className="flex-1 min-w-[320px] md:max-w-[600px] lg:max-w-[700px] w-full md:pr-8 lg:pr-16 flex flex-col items-center justify-center">
          <div className="w-full overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-200">
            <img
              src="/lovable-uploads/Dark Green and Light Green Clean Informative Marketing Tips Carousel Instagram Post (750 x 1115 px) (750 x 1115 px) (2).gif"
              alt="Interior design transformation process"
              className="w-full object-cover"
            />
          </div>
          <a 
            href="https://www.youtube.com/@stylyai/featured" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 mt-6 text-purple-700 hover:text-purple-900 font-semibold transition-colors duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <span className="group-hover:underline">Watch More Videos</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
