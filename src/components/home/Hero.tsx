import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Structured data specifically for the hero section 
  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "STYLY AI Interior Design Platform",
    "description": "AI-powered platform that transforms empty spaces into beautifully furnished, realistic visuals with just a photo upload or description.",
    "image": "/aiinterior.png",
    "brand": {
      "@type": "Brand",
      "name": "STYLY"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "20000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(heroStructuredData)}
        </script>
      </Helmet>
      <section
        className="flex w-full flex-col items-center justify-center min-h-[calc(100vh-70px)] px-2 py-4 sm:py-6 bg-white"
        aria-label="Hero section"
        itemScope
        itemType="https://schema.org/WebPageElement"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center px-4 h-full justify-center">
          {/* Premium Welcome banner */}
          <div
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg shadow-xl mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-500 cursor-pointer select-none"
            style={{
              background: "linear-gradient(90deg, rgba(89,50,134,1) 0%, rgba(250,111,64,1) 100%)",
              boxShadow: "0 10px 25px -5px rgba(89,50,134,0.3), 0 8px 10px -6px rgba(250,111,64,0.2)"
            }}
            role="banner"
            aria-label="Welcome to the Future of Design"
          >
            {t.welcomeToFuture}
          </div>

          {/* Main heading - Optimized for viewport */}
          <div className="w-full font-baloo font-bold max-w-[1200px] mx-auto mb-4 sm:mb-6">
            <h1 className="sr-only">STYLY - #1 most used AI design tool for modern spaces</h1>
            
            <div className="flex flex-col items-center justify-center font-extrabold tracking-tight leading-[0.85] font-baloo font-medium">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 w-full">
                {t.mostUsedAITool}
              </h2>

              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 w-full">
                {t.aiDesignTool}
              </h2>

              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 w-full">
                {t.for}
              </h2>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full text-purple-900 bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                {t.modernSpaces}
              </h2>
            </div>
          </div>

          {/* Description - Optimized for viewport */}
          <div className="w-full max-w-4xl text-center text-[rgba(44,30,73,1)] mb-3 sm:mb-4 leading-snug tracking-wide font-montagu" itemProp="description">
            <p className="text-sm xs:text-base sm:text-lg font-light leading-tight">
              {t.redesignEmptyRooms}
              <br className="hidden sm:block" />
              {t.forRealEstate}
              <span className="font-extrabold"> {t.noToolsNoDownloads}</span>.
            </p>
          </div>
          

          {/* Award badge - Optimized for viewport */}
          <div className="mb-3 sm:mb-4 flex justify-center transform hover:scale-110 transition-transform duration-500">
            <img
              src="/aiinterior.png"
              alt={language === "fr"
                ? "STYLY récompensé #1 Application Design Intérieur IA 2024 - Logiciel design intérieur gratuit et planificateur chambre IA pour professionnels immobilier"
                : "STYLY awarded #1 AI Interior Design App 2024 - Free interior design software and AI room planner for real estate professionals"
              }
              title={language === "fr"
                ? "STYLY - #1 Application Design Intérieur IA 2024"
                : "STYLY - #1 AI Interior Design App of 2024"
              }
              className="h-16 xs:h-18 sm:h-20 md:h-24 w-auto drop-shadow-lg"
              width="180"
              height="128"
              loading="eager"
              decoding="async"
              itemProp="image"
            />
          </div>

          {/* CTA Button */}
          <a
            href="https://app.styly.io"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 sm:px-7 py-2 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-3 sm:mb-4 transform"
            aria-label="Upload a photo to redesign your space with AI"
            itemProp="potentialAction"
            itemScope
            itemType="https://schema.org/Action"
          >
            <span itemProp="name">{t.uploadPhoto}</span>
          </a>

          {/* Supporting text */}
          <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base text-[#A5A5A5]">
            {t.supporting} <span itemProp="userInteractionCount">{t.realEstatePros}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
