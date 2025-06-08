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
        className="flex w-full flex-col items-center justify-center min-h-[calc(100vh-70px)] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white"
        aria-label="Hero section"
        itemScope
        itemType="https://schema.org/WebPageElement"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center h-full justify-center space-y-6 sm:space-y-8">
          {/* Premium Welcome banner */}
          <div
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-medium text-sm sm:text-base shadow-2xl transform hover:scale-[1.02] transition-all duration-700 cursor-pointer select-none backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(89,50,134,0.95) 0%, rgba(250,111,64,0.95) 100%)",
              boxShadow: "0 20px 40px -12px rgba(89,50,134,0.4), 0 8px 16px -8px rgba(250,111,64,0.3)"
            }}
            role="banner"
            aria-label="Welcome to the Future of Design"
          >
            {t.welcomeToFuture}
          </div>

          {/* Main heading - Premium typography */}
          <div className="w-full max-w-5xl mx-auto">
            <h1 className="sr-only">STYLY - #1 most used AI design tool for modern spaces</h1>

            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-baloo font-bold tracking-tight leading-[0.9] text-gray-900">
                {t.mostUsedAITool}
              </h2>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-baloo font-bold tracking-tight leading-[0.9] text-gray-800">
                {t.aiDesignTool}
              </h2>

              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-medium tracking-wide leading-relaxed text-gray-600">
                {t.for}
              </h2>

              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-baloo font-bold tracking-tight leading-[0.9] bg-gradient-to-r from-purple-600 via-purple-700 to-orange-500 bg-clip-text text-transparent">
                {t.modernSpaces}
              </h2>
            </div>
          </div>

          {/* Description - Premium typography */}
          <div className="w-full max-w-3xl mx-auto" itemProp="description">
            <p className="text-lg sm:text-xl md:text-2xl font-montagu font-light leading-relaxed text-gray-600 tracking-wide">
              {t.redesignEmptyRooms}
              <br className="hidden sm:block" />
              {t.forRealEstate}
              <span className="font-semibold text-gray-800"> {t.noToolsNoDownloads}</span>.
            </p>
          </div>
          

          {/* Award badge - Premium presentation */}
          <div className="flex justify-center transform hover:scale-[1.05] transition-all duration-700">
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
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
              width="180"
              height="128"
              loading="eager"
              decoding="async"
              itemProp="image"
            />
          </div>

          {/* CTA Button - Premium design */}
          <a
            href="https://app.styly.io"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-white transition-all duration-500 ease-out rounded-2xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-[1.02] hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              boxShadow: "0 20px 40px -12px rgba(249, 115, 22, 0.4), 0 8px 16px -8px rgba(234, 88, 12, 0.3)"
            }}
            aria-label="Upload a photo to redesign your space with AI"
            itemProp="potentialAction"
            itemScope
            itemType="https://schema.org/Action"
          >
            <span className="relative z-10 tracking-wide" itemProp="name">{t.uploadPhoto}</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>

          {/* Supporting text - Refined typography */}
          <p className="text-base sm:text-lg font-medium text-gray-500 tracking-wide leading-relaxed">
            {t.supporting} <span className="text-gray-700 font-semibold" itemProp="userInteractionCount">{t.realEstatePros}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
