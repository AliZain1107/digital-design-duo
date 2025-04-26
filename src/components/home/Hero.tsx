import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-2 py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center px-4">
        {/* Premium Welcome banner */}
        <div
          className="px-8 sm:px-12 py-4 sm:py-5 rounded-full text-white font-semibold text-lg sm:text-xl md:text-2xl shadow-xl mb-14 transform hover:scale-105 transition-all duration-500 cursor-pointer select-none"
          style={{
            background: "linear-gradient(90deg, rgba(89,50,134,1) 0%, rgba(250,111,64,1) 100%)",
            boxShadow: "0 10px 25px -5px rgba(89,50,134,0.3), 0 8px 10px -6px rgba(250,111,64,0.2)"
          }}
        >
          Welcome to the Future of Design
        </div>

        {/* Main heading */}
        <h1 className="w-full font-extrabold tracking-tight leading-[0.9] mb-12">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-2">#1 most used</div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2">AI design tool</div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3">for</div>
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-purple-700 bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">modern spaces</div>
        </h1>

        {/* Description */}
        <div className="w-full max-w-4xl text-center text-[rgba(44,30,73,1)] mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
            Redesign empty rooms into styled, market-ready interior —
            <br className="hidden sm:block" />
            for real estate, renovation, and retail. <span className="font-extrabold italic">No tools, no downloads. Just results</span>.
          </p>
        </div>

        {/* Award badge - Using the aiinterior.png image */}
        <div className="mb-12 flex justify-center transform hover:scale-110 transition-transform duration-500">
          <img 
            src="/aiinterior.png" 
            alt="#1 AI Interior App of 2024" 
            className="h-28 md:h-32 w-auto drop-shadow-lg"
          />
        </div>

        {/* CTA Button */}
        <Link
          to="/upload"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-5 rounded-xl text-xl md:text-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-12 transform"
        >
          Upload a Photo to Start
        </Link>

        {/* Supporting text */}
        <p className="text-gray-900 font-semibold text-base md:text-xl lg:text-2xl tracking-wide">
          Supporting 20,000+ real estate pros & designers & Homeowners
        </p>
      </div>
    </section>
  );
};

export default Hero;
