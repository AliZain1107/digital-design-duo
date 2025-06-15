import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactPlayer from 'react-player/youtube';
import { useLanguage } from '@/lib/i18n';

const typewriterWordsEN = [
  "AI Interior Design",
  "Room Makeover in Seconds",
  "Virtual Staging",
  "Photo to Furnished Room",
  "Real Estate Visualization",
  "Home Staging Online",
  "AI Room Planner",
  "Instant 3D Design",
  "Smart Space Transformation",
  "No Downloads Needed"
];

const typewriterWordsFR = [
  "Design d'intérieur IA",
  "Transformation de pièce en secondes",
  "Mise en scène virtuelle",
  "Photo en pièce meublée",
  "Visualisation immobilière",
  "Home staging en ligne",
  "Planificateur de pièce IA",
  "Conception 3D instantanée",
  "Transformation intelligente d'espace",
  "Aucun téléchargement requis"
];

const Hero: React.FC = () => {
  const { language } = useLanguage ? useLanguage() : { language: 'en' };
  const typewriterWords = language === 'fr' ? typewriterWordsFR : typewriterWordsEN;
  // Improved typewriter animation state
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(60);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const word = typewriterWords[currentWord];
    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => {
        setDisplayed(word.substring(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(word.substring(0, displayed.length - 1));
      }, 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % typewriterWords.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentWord]);

  // Structured data specifically for the hero section 
  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "STYLY AI Interior Design Platform",
    "description": "AI-powered platform that transforms empty spaces into beautifully furnished, realistic visuals with just a photo upload or description.",
    "image": "/hero-room-transformation.png",
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
        className="relative flex w-full flex-col items-center justify-center min-h-[calc(100vh-70px)] px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 bg-white overflow-hidden"
        aria-label="Hero section"
        itemScope
        itemType="https://schema.org/WebPageElement"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center h-full justify-center space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
          {/* Main headline for clarity */}
          <div className="w-full max-w-5xl mx-auto">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-baloo font-extrabold tracking-tight leading-tight text-gray-900 mb-8 animate-fade-in whitespace-pre-line">
              {language === 'fr' ? (
                <>
                  {"#1 outil IA le plus utilisé\npour le design d'intérieur\n"}
                  <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">espaces modernes</span>
                </>
              ) : (
                <>
                  {"#1 most used\nAI design tool for\n"}
                  <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">modern spaces</span>
                </>
              )}
            </h1>
            {/* Subheadline with typewriter effect */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-baloo font-medium tracking-wide leading-tight text-purple-700 animate-fade-in">
                {displayed}
                <span className="inline-block w-2 h-7 bg-orange-500 align-middle animate-pulse ml-1" style={{verticalAlign: 'middle'}}></span>
              </h2>
            </div>
          </div>
          {/* Description - Compact premium typography */}
          <div className="w-full max-w-3xl mx-auto" itemProp="description">
            <p className="text-base sm:text-lg md:text-xl font-montagu font-light leading-snug text-gray-600 tracking-wide animate-fade-in">
              {language === 'fr'
                ? "Téléchargez une photo et voyez votre espace vide devenir une pièce meublée et réaliste, propulsée par l'IA. Aucun outil. Aucun téléchargement. Juste des résultats."
                : "Upload a photo and see your empty space become a beautifully furnished, realistic room—powered by AI. No tools. No downloads. Just results."}
            </p>
          </div>
          {/* Hero video with fade-in animation and custom controls on hover */}
          <div className="w-full max-w-2xl mx-auto animate-fade-in mb-6">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group"
              style={{ aspectRatio: '16/9' }}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=I-8ur3hBTnM"
                playing
                muted
                loop
                width="100%"
                height="100%"
                controls={showControls}
                className="rounded-2xl react-player"
                config={{
                  playerVars: { rel: 0, showinfo: 0, modestbranding: 1 }
                }}
              />
            </div>
          </div>
          {/* CTA Button - Premium design with animation */}
          <a
            href="https://app.styly.io"
            className="group relative inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-4 text-lg font-semibold text-white transition-all duration-300 ease-out rounded-xl shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-orange-500 to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 animate-fade-in"
            aria-label="Start Free Trial with STYLY AI"
            itemProp="potentialAction"
            itemScope
            itemType="https://schema.org/Action"
          >
            <span className="relative z-10 tracking-wide" itemProp="name">Start Free Trial</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          {/* Supporting text - Compact refined typography */}
          <p className="text-sm sm:text-base font-medium text-gray-500 tracking-wide leading-snug animate-fade-in">
            {language === 'fr'
              ? "Plébiscité par 20 000 architectes d'intérieur, propriétaires et professionnels de l'immobilier"
              : "Trusted by 20,000 interior designers, home-owners and real estate professionals"}
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
