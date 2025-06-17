import React from "react";
import ShowcaseScroll from "./ShowcaseScroll";
import { useLanguage } from "@/lib/i18n";

const ArchitectureRevolution: React.FC = () => {
  return (
    <section className="w-full -mt-28 pb-6 sm:pb-8 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="container mx-auto text-center mb-4 md:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1 font-baloo relative">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
                See it
              </span>
              <span className="text-gray-900 relative">
                {' '}for yourself
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
              </span>
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
