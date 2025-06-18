import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactPlayer from 'react-player/youtube';
import { useLanguage } from '@/lib/i18n';

const typewriterWordsEN = [
  "Room Makeover in Seconds",
  "Virtual Staging",
  "Photo to Furnished Room",
  "Real Estate Visualization",
  "Home Staging Online",
  "Instant 3D Design",
  "Smart Space Transformation",
  "No Downloads Needed",
  "Home Decor Ideas",
  "Room Designer",
  "Staging for Realtors",
  "Office Design Inspiration",
  "Bedroom Makeover Tips",
  "Living Room Design Trends",
  "Kitchen Planner",
  "Bathroom Remodel Inspiration",
  "Floor Plan Generator",
  "Interior Trends 2025",
  "Modern Home Makeover",
  "Creative Space Solutions"
];

const typewriterWordsFR = [
  "Transformation de pièce en secondes",
  "Mise en scène virtuelle",
  "Photo en pièce meublée",
  "Visualisation immobilière",
  "Home staging en ligne",
  "Conception 3D instantanée",
  "Transformation intelligente d'espace",
  "Aucun téléchargement requis",
  "Idées déco maison",
  "Concepteur de pièce",
  "Mise en scène pour agents immobiliers",
  "Inspiration design bureau",
  "Conseils relooking chambre",
  "Tendances salon",
  "Planificateur cuisine",
  "Inspiration rénovation salle de bain",
  "Générateur de plans",
  "Tendances intérieures 2025",
  "Relooking maison moderne",
  "Solutions créatives d'espace"
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
        {/* Animated shimmer background */}
        <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.13 }}>
          <div
            className="absolute inset-0 w-full h-full animate-shimmer-bg"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.2) 20%, rgba(249, 115, 22, 0.3) 50%, rgba(147, 51, 234, 0.2) 80%, transparent 100%)',
              width: '200%',
              height: '100%',
              filter: 'blur(1px)'
            }}
          ></div>
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center h-full justify-center space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
          {/* Main headline for clarity */}
          <div className="w-full max-w-5xl mx-auto">
            <h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-8 animate-fade-in whitespace-pre-line font-baloo"
            >
              {language === 'fr' ? (
                <>
                  {"Design, "}
                  <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">sans limites</span>
                  {"."}
                </>
              ) : (
                <>
                  {"Design, "}
                  <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">without limits</span>
                  {"."}
                </>
              )}
            </h1>
            {/* Subheadline with typewriter effect */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide leading-tight text-purple-700 animate-fade-in font-baloo">
                {displayed}
                <span className="inline-block w-2 bg-orange-500 animate-pulse ml-1" style={{height: '0.9em', transform: 'translateY(0.1em)'}}></span>
              </h2>
            </div>
          </div>
          {/* Description - Compact premium typography */}
          <div className="w-full max-w-3xl mx-auto" itemProp="description">
            <p className="text-base sm:text-lg md:text-xl font-bold leading-snug text-gray-600 tracking-wide animate-fade-in font-baloo">
              {language === 'fr'
                ? "Téléchargez une photo et voyez votre espace vide devenir une pièce meublée et réaliste, propulsée par l'IA. Aucun outil. Aucun téléchargement. Juste des résultats."
                : "Upload a photo and see your empty space become a beautifully furnished, realistic room—powered by AI. No tools. No downloads. Just results."}
            </p>
          </div>
          {/* Hero video with fade-in animation and custom controls on hover */}
          <div className="w-full max-w-2xl mx-auto animate-fade-in mb-6 mt-8">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
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
          {/* CTA Buttons - Premium design with animation */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ marginTop: '48px' }}>
            <div className="relative group">
              <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
              <a
                href="https://app.styly.io"
                className="group relative flex items-center justify-center px-7 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/30 border border-transparent whitespace-nowrap z-10 font-baloo"
                aria-label="Start Free Trial with STYLY AI"
                itemProp="potentialAction"
                itemScope
                itemType="https://schema.org/Action"
              >
                <span className="relative z-10 tracking-wide" itemProp="name">Get Started</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Contact Us Button */}
            <div className="relative group">
              <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
              <a
                href="/contact"
                className="relative flex items-center justify-center px-7 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-purple-700 font-bold text-lg transition-all duration-200 hover:bg-purple-50 hover:scale-105 border border-transparent whitespace-nowrap z-10 font-baloo"
                aria-label="Contact Us"
              >
                <span
                  className="relative group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:via-purple-500 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  style={{
                    backgroundSize: '300% 100%',
                    animation: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation = 'shimmer-text 3.5s linear infinite';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = 'none';
                  }}
                >
                  Contact Us
                </span>
              </a>
              <style>{`
                @keyframes shimmer-text {
                  0% {
                    background-position: -300% 0;
                  }
                  100% {
                    background-position: 300% 0;
                  }
                }
              `}</style>
            </div>
          </div>

        </div>
        {/* Seamless blend to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
      </section>


    </>
  );
};

export default Hero;
