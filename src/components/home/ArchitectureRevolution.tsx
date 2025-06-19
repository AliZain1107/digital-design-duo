import React from "react";
import ShowcaseScroll from "./ShowcaseScroll";
import { useLanguage } from "@/lib/i18n";

const ArchitectureRevolution: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full -mt-28 pb-6 sm:pb-8 overflow-hidden">
      {/* Title with proper padding */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="container mx-auto text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl font-semibold mb-1 font-baloo relative">
            <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              {t.seeItForYourself}
            </span>
          </h2>
        </div>
      </div>

      {/* Slideshow with proper centering */}
      <div className="w-full transform hover:scale-[1.01] transition-transform duration-1000">
        <ShowcaseScroll />
      </div>
    </section>
  );
};

export default ArchitectureRevolution;
