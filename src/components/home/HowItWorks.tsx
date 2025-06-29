import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const HowItWorks: React.FC = () => {
  const { t, language } = useLanguage();
  

  
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-10" key={`how-it-works-${language}`}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Section header */}
        <h2 className="text-4xl font-baloo font-extrabold tracking-tight leading-tight text-gray-900 mb-4 text-center">
          <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
            {language === 'fr' ? 'Comment ça marche' : 'How it works'}
          </span>
        </h2>

        {/* Description only, no title or orange writing */}
        <div className="w-full max-w-3xl mx-auto text-center mb-16">
          <p className="text-base sm:text-lg md:text-xl font-baloo font-normal leading-snug text-gray-600 tracking-wide animate-fade-in">
            {language === 'fr'
              ? 'Transformez votre espace en trois étapes simples : téléchargez une photo, personnalisez, profitez du résultat.'
              : 'Transform your space in three simple steps: just upload a photo, personalize, and enjoy your new design.'}
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16 relative">
          {/* First two steps in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 relative">
            {/* Connecting line between first two steps */}
            <div className="hidden md:block absolute top-12 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100"></div>
          
          {/* Step 1: Upload */}
          <div className="flex flex-col items-center text-center group relative">
            {/* Animated upload demonstration */}
            <div className="w-64 h-48 mb-6 rounded-xl overflow-hidden shadow-lg border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 relative group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              {/* Upload animation */}
              <div className="relative">
                {/* Phone/device mockup */}
                <div className="w-32 h-20 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center relative">
                  {/* Screen */}
                  <div className="w-28 h-16 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                    {/* Animated upload arrow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    {/* Animated dots indicating upload progress */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
                {/* Floating photo icon */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-lg shadow-lg flex items-center justify-center animate-pulse">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-baloo font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mr-3">
                1
              </div>
              {t.upload}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-baloo font-normal leading-snug text-gray-600 tracking-wide max-w-xs mx-auto">
              {language === 'fr'
                ? "Téléchargez une photo de votre pièce. C'est simple et rapide."
                : "Upload a photo of your space. It's quick and easy."}
            </p>
          </div>

          {/* Step 2: Personalize */}
          <div className="flex flex-col items-center text-center group relative">
            {/* Animated personalization demonstration */}
            <div className="w-64 h-48 mb-6 rounded-xl overflow-hidden shadow-lg border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 relative group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              {/* Customization interface mockup */}
              <div className="relative">
                {/* Main interface */}
                <div className="w-40 h-24 bg-white rounded-lg shadow-md border border-gray-200 p-3">
                  {/* Style options */}
                  <div className="flex justify-between mb-2">
                    <div className="w-6 h-6 bg-purple-400 rounded animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="w-6 h-6 bg-pink-400 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-6 h-6 bg-orange-400 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  {/* Color palette */}
                  <div className="flex justify-between mb-2">
                    <div className="w-4 h-4 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-4 h-4 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
                    <div className="w-4 h-4 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
                    <div className="w-4 h-4 bg-red-300 rounded-full animate-ping" style={{ animationDelay: '1.7s' }}></div>
                  </div>
                  {/* Slider */}
                  <div className="w-full h-1 bg-gray-200 rounded-full relative">
                    <div className="absolute top-0 left-0 h-1 bg-purple-400 rounded-full animate-pulse" style={{ width: '60%', animationDelay: '0.3s' }}></div>
                  </div>
                </div>
                {/* Floating customization icons */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-500 rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-baloo font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mr-3">
                2
              </div>
              {t.personalize}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-baloo font-normal leading-snug text-gray-600 tracking-wide max-w-xs mx-auto">
              {language === 'fr'
                ? "Personnalisez le style, les couleurs et l'ameublement selon vos envies."
                : "Personalize the style, colors, and furnishings to match your vision."}
            </p>
          </div>
          </div>

          {/* Connecting line from step 2 to step 3 */}
          <div className="hidden md:flex justify-center mb-8">
            <div className="w-0.5 h-12 bg-gradient-to-b from-purple-100 to-pink-100"></div>
          </div>

          {/* Step 3: Enjoy - centered below */}
          <div className="flex flex-col items-center text-center group relative max-w-4xl mx-auto">
            <h3 className="text-2xl font-baloo font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mr-3">
                3
              </div>
              {t.enjoy}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-baloo font-normal leading-snug text-gray-600 tracking-wide max-w-xs mx-auto mb-6">
              {language === 'fr'
                ? "Profitez d'un rendu réaliste généré par l'IA en quelques secondes."
                : "Enjoy a realistic result generated by AI in seconds."}
            </p>
            {/* Before/After Slider */}
            <div className="w-full max-w-2xl mb-6 rounded-2xl overflow-hidden shadow-lg border border-purple-100 bg-white">
              <BeforeAfterSlider
                beforeImage="/Before.png"
                afterImage="/After.jpg"
                altBefore={language === 'fr' ? 'Avant' : 'Before'}
                altAfter={language === 'fr' ? 'Après' : 'After'}
              />
            </div>
          </div>
        </div>

        {/* CTA Section after How It Works */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-baloo">
            {language === "fr"
              ? "Prêt à voir la magie opérer ?"
              : "Ready to See the Magic Happen?"
            }
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-baloo">
            {language === "fr"
              ? "En seulement 3 étapes simples, transformez n'importe quel espace en un design professionnel époustouflant."
              : "In just 3 simple steps, transform any space into a stunning professional design."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#593286] via-purple-500 to-[#FA6F40] text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-baloo"
            >
              {language === "fr"
                ? "Essayer Maintenant"
                : "Try It Now"
              }
            </a>
            <a
              href="/video-guide"
              className="border-2 border-[#593286] text-[#593286] font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#593286] hover:text-white transition-all duration-300 font-baloo"
            >
              {language === "fr"
                ? "Voir la Démo"
                : "Watch Demo"
              }
            </a>
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-500 font-baloo">
              {language === "fr" ? "✓ Gratuit • ✓ Aucune installation • ✓ Résultats instantanés" : "✓ Free • ✓ No Download • ✓ Instant Results"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
