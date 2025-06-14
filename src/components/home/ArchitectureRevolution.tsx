import React from "react";
import ShowcaseScroll from "./ShowcaseScroll";
import { useLanguage } from "@/lib/i18n";

const ArchitectureRevolution: React.FC = () => {
  return (
    <section className="w-full py-6 sm:py-8 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="container mx-auto text-center mb-4 md:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1">
            <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              Every Space Has a Story
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
