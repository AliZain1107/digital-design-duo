import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n";

const ShowcaseScroll: React.FC = () => {
  const { language, t } = useLanguage();

  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Base images
  const topRowBase = [
    "/revolution/1.png",
    "/revolution/3.png",
    "/revolution/5.png",
    "/revolution/7.png",
    "/revolution/9.png",
  ];

  const bottomRowBase = [
    "/revolution/12.png",
    "/revolution/13.png",
    "/revolution/15.png",
    "/revolution/18.png",
    "/revolution/9.png",
  ];

  // Create enough duplicates to ensure seamless infinite scroll
  const createInfiniteArray = (baseArray: string[], copies: number = 6) => {
    const result = [];
    for (let i = 0; i < copies; i++) {
      result.push(...baseArray);
    }
    return result;
  };

  const topRowImages = createInfiniteArray(topRowBase);
  const bottomRowImages = createInfiniteArray(bottomRowBase);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const speed = 0.05; // pixels per millisecond (1/10th of original speed)

      if (topRowRef.current) {
        const translateX = -(elapsed * speed) % (topRowRef.current.scrollWidth / 6);
        topRowRef.current.style.transform = `translateX(${translateX}px)`;
      }

      if (bottomRowRef.current) {
        const maxTranslate = bottomRowRef.current.scrollWidth / 6;
        const translateX = -maxTranslate + ((elapsed * speed) % maxTranslate);
        bottomRowRef.current.style.transform = `translateX(${translateX}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden relative slideshow-container">
      {/* Top row - scrolls from right to left */}
      <div
        ref={topRowRef}
        className="flex mb-4"
        style={{ width: '600%', willChange: 'transform' }}
      >
        {topRowImages.map((src, index) => (
          <div key={`top-${index}`} className="h-auto w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] flex-shrink-0 mx-1 sm:mx-2">
            <img
              src={src}
              alt={language === "fr"
                ? `Vitrine Design Intérieur IA ${(index % 5) + 1} - Planificateur chambre IA et logiciel design intérieur gratuit`
                : `AI Interior Design Showcase ${(index % 5) + 1} - AI room planner and free interior design software`
              }
              className="h-full w-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {/* Bottom row - scrolls from left to right */}
      <div
        ref={bottomRowRef}
        className="flex"
        style={{ width: '600%', willChange: 'transform' }}
      >
        {bottomRowImages.map((src, index) => (
          <div key={`bottom-${index}`} className="h-auto w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] flex-shrink-0 mx-1 sm:mx-2">
            <img
              src={src}
              alt={language === "fr"
                ? `Galerie Design Chambre IA ${(index % 5) + 6} - Générateur design intérieur IA et home staging virtuel`
                : `AI Room Design Gallery ${(index % 5) + 6} - Interior design AI generator and virtual staging`
              }
              className="h-full w-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {/* White edge blend overlays */}
      <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default ShowcaseScroll;
