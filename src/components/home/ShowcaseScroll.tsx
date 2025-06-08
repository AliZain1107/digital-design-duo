import React from "react";
import { useLanguage } from "@/lib/i18n";

const ShowcaseScroll: React.FC = () => {
  // Add language debugging
  const { language, t } = useLanguage();
  console.log("Current language in ShowcaseScroll:", language);
  
  // First row of images - from revolution folder
  const topRowImages = [
    "/revolution/1.png",
    "/revolution/3.png",
    "/revolution/5.png",
    "/revolution/7.png",
    "/revolution/9.png",
    // Duplicate for continuous scroll effect
    "/revolution/1.png",
    "/revolution/3.png",
    "/revolution/5.png",
    "/revolution/7.png",
    "/revolution/9.png",
  ];

  // Second row of images - from revolution folder
  const bottomRowImages = [
    "/revolution/12.png",
    "/revolution/13.png",
    "/revolution/15.png",
    "/revolution/18.png",
    "/revolution/9.png",
    // Duplicate for continuous scroll effect
    "/revolution/12.png",
    "/revolution/13.png",
    "/revolution/15.png",
    "/revolution/18.png",
    "/revolution/9.png",
  ];

  return (
    <div className="w-screen -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 overflow-hidden">
      {/* Top row - scrolls from right to left */}
      <div className="flex animate-marquee-left mb-4">
        {topRowImages.map((src, index) => (
          <div key={`top-${index}`} className="h-auto w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] flex-shrink-0 mx-1 sm:mx-2">
            <img
              src={src}
              alt={language === "fr"
                ? `Vitrine Design Intérieur IA ${index + 1} - Planificateur chambre IA et logiciel design intérieur gratuit`
                : `AI Interior Design Showcase ${index + 1} - AI room planner and free interior design software`
              }
              className="h-full w-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {/* Bottom row - scrolls from left to right */}
      <div className="flex animate-marquee-right">
        {bottomRowImages.map((src, index) => (
          <div key={`bottom-${index}`} className="h-auto w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] flex-shrink-0 mx-1 sm:mx-2">
            <img
            src={src}
              alt={language === "fr"
                ? `Galerie Design Chambre IA ${index + 1 + topRowImages.length} - Générateur design intérieur IA et home staging virtuel`
                : `AI Room Design Gallery ${index + 1 + topRowImages.length} - Interior design AI generator and virtual staging`
              }
              className="h-full w-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseScroll;
