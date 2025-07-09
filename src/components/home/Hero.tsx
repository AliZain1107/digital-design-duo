import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactPlayer from 'react-player/youtube';
import { useLanguage } from '@/lib/i18n';
import StagingModal from '@/components/staging-modal';

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
  const { language, t } = useLanguage();
  const typewriterWords = language === 'fr' ? typewriterWordsFR : typewriterWordsEN;
  // Improved typewriter animation state
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(60);
  const [showControls, setShowControls] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  }, [displayed, isDeleting, currentWord, typewriterWords, typingSpeed]);

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
                : <>
                    Upload a photo and see your empty space become a beautifully furnished, realistic room. No tools. No downloads. Just <span className="font-davetica-wide bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">STYLY</span>.
                  </>}
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
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 animate-fade-in" style={{ marginTop: '48px' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg border border-transparent transition-all duration-200 hover:scale-105 hover:-translate-y-1 animate-cta-pulse group min-h-[44px] min-w-[44px]"
              aria-label={language === "fr" ? "Essayer Styly AI maintenant" : "Start Free Trial"}
            >
              {language === "fr"
                ? "Essayer Maintenant"
                : <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_white]">Start Free Trial</span>
              }
            </button>
              <a
                href="/contact"
              className="border-2 border-purple-700 bg-white text-purple-700 font-bold text-lg sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-200 hover:bg-purple-50 hover:scale-105 hover:-translate-y-1 font-baloo relative z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={language === "fr" ? "Contactez-nous" : "Contact Us"}
            >
              {language === "fr" ? "Contactez-nous" : "Contact Us"} <span className="ml-2">&rarr;</span>
            </a>
          </div>

        </div>
        {/* Seamless blend to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
      </section>

      {/* Staging Modal */}
      <StagingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />

    </>
  );
};

export default Hero;
