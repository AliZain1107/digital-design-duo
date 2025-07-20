import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const FreeAIInteriorDesign: React.FC = () => {
  const { t, language } = useLanguage();

  const seoMeta = {
    en: {
      title: "Free AI Interior Design Software - Transform Your Space | Styly.io",
      description: "Discover Styly's free AI interior design software. Create stunning room layouts, experiment with furniture arrangements, and visualize your dream spaces in 3D with our AI room design tools.",
      keywords: "free AI interior design, AI room design free, AI room decorator, interior design software, free design tools, AI home design, room planner AI"
    },
    fr: {
      title: "Logiciel Gratuit de Design d'Intérieur IA - Transformez Votre Espace | Styly.io",
      description: "Découvrez le logiciel gratuit de design d'intérieur IA de Styly. Créez des aménagements de pièces époustouflants, expérimentez avec les arrangements de meubles et visualisez vos espaces de rêve en 3D.",
      keywords: "design intérieur IA gratuit, design de chambre IA gratuit, décorateur IA, logiciel design intérieur, outils design gratuits, design maison IA, planificateur chambre IA"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const canonicalUrl = language === "fr"
    ? "https://www.styly.fr/fr/blog/logiciel-gratuit-design-interieur-ia"
    : "https://www.styly.fr/en/blog/free-ai-interior-design-software";

  return (
    <>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content="/free-ai-interior-design-hero.webp" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta name="twitter:image" content="/free-ai-interior-design-hero.webp" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="flex flex-col items-center px-4 py-10 space-y-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentMeta.title}
            </h1>
          </header>
        <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
          {/* Table of Contents */}
          <div>
            <h2 className="text-lg font-semibold">{t.freeAIDesignTableOfContents}</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t.freeAIDesignIntroduction}</li>
              <li>{t.freeAIDesignWhyChooseStyly}</li>
              <li>{t.freeAIDesignKeyFeatures}</li>
              <li>{t.freeAIDesignBenefits}</li>
              <li>{t.freeAIDesignHowToStart}</li>
              <li>{t.freeAIDesignRoomDecorator}</li>
              <li>{t.freeAIDesignWhyStandsOut}</li>
              <li>{t.freeAIDesignConclusion}</li>
            </ul>
          </div>

          {/* Hero Image */}
          <div className="w-full">
            <img
              src="/ai-interior-design-free-tools.webp"
              alt={t.freeAIDesignTitle}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Introduction */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignIntroduction}</h2>
            <p>{t.freeAIDesignIntroductionText}</p>
          </section>

          {/* Why Choose Styly */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignWhyChooseStyly}</h2>
            <p>{t.freeAIDesignWhyChooseStylyText}</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>{t.freeAIDesignFeature1}</li>
              <li>{t.freeAIDesignFeature2}</li>
              <li>{t.freeAIDesignFeature3}</li>
              <li>{t.freeAIDesignFeature4}</li>
            </ul>
            <p className="text-blue-600 mt-2">
              <a
                href="https://www.houzz.fr/magazine/tendances-design-interieur-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t.freeAIDesignHouzzExternal}
              </a>
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignKeyFeatures}</h2>

            <div className="space-y-4 mt-4">
              {/* Feature 1 */}
              <div>
                <h3 className="text-md font-semibold">1. {t.freeAIDesignAIPowered}</h3>
                <p>{t.freeAIDesignAIPoweredText}</p>
              </div>

              {/* Feature 2 */}
              <div>
                <h3 className="text-md font-semibold">2. {t.freeAIDesignExtensiveLibrary}</h3>
                <p>{t.freeAIDesignExtensiveLibraryText}</p>
                <p className="text-blue-600 mt-2">
                  <a
                    href="https://www.elledecoration.fr/deco/tendances"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t.freeAIDesignElleExternal}
                  </a>
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h3 className="text-md font-semibold">3. {t.freeAIDesignUserFriendly}</h3>
                <p>{t.freeAIDesignUserFriendlyText}</p>
                <div className="bg-purple-50 p-4 rounded-lg mt-3">
                  <p className="text-purple-700 font-medium">
                    <a
                      href={language === "fr" ? "https://app.styly.fr/signin?lang=fr" : "https://app.styly.fr/signin"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {t.freeAIDesignTryNowCTA}
                    </a>
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div>
                <h3 className="text-md font-semibold">4. {t.freeAIDesignFreeCredits}</h3>
                <p>{t.freeAIDesignFreeCreditsText}</p>
              </div>
            </div>
          </section>

          {/* Middle Image */}
          <div className="w-full">
            <img
              src="/ai-interior-design-small-space-free.webp"
              alt={t.freeAIDesignBenefits}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Benefits */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignBenefits}</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>{t.freeAIDesignCostEffective}</strong>: {t.freeAIDesignCostEffectiveText}</li>
              <li><strong>{t.freeAIDesignTimeSaving}</strong>: {t.freeAIDesignTimeSavingText}</li>
              <li><strong>{t.freeAIDesignCustomizable}</strong>: {t.freeAIDesignCustomizableText}</li>
            </ul>
            <p className="mt-2">
              <Link
                to="/blog/2025-interior-design-trends"
                className="text-purple-600 hover:underline"
              >
                {t.freeAIDesignTrendsLink}
              </Link>
            </p>
          </section>

          {/* How to Get Started */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignHowToStart}</h2>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li>{t.freeAIDesignStep1}</li>
              <li>{t.freeAIDesignStep2}</li>
              <li>{t.freeAIDesignStep3}</li>
              <li>{t.freeAIDesignStep4}</li>
            </ol>
            <p className="text-blue-600 mt-2">
              <a
                href="https://www.marieclaire.fr/maison/decoration"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t.freeAIDesignMarieExternal}
              </a>
            </p>
          </section>

          {/* Room Decorator Image */}
          <div className="w-full">
            <img
              src="/ai-redecorate-feature-results.webp"
              alt={t.freeAIDesignRoomDecorator}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* AI Room Decorator */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignRoomDecorator}</h2>
            <p>{t.freeAIDesignRoomDecoratorText}</p>
            <p className="mt-2">
              <Link
                to="/blog/10-expert-tips-to-save-big-on-home-interiors-in-2025"
                className="text-purple-600 hover:underline"
              >
                {t.freeAIDesignExpertTipsLink}
              </Link>
            </p>
          </section>

          {/* Why Styly Stands Out */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignWhyStandsOut}</h2>
            <p>{t.freeAIDesignWhyStandsOutText}</p>
            <p className="text-blue-600 mt-2">
              <a
                href="https://www.cotemaison.fr/decoration"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t.freeAIDesignCoteMaisonExternal}
              </a>
            </p>
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-700 font-medium">
                <a
                  href={language === "fr" ? "https://app.styly.fr/signin?lang=fr" : "https://app.styly.fr/signin"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t.freeAIDesignExperienceCTA}
                </a>
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-lg font-semibold">{t.freeAIDesignConclusion}</h2>
            <p>{t.freeAIDesignConclusionText}</p>
            <p className="mt-2">
              <Link
                to="/blog/revolutionizing-architecture-engineering-construction-ai"
                className="text-purple-600 hover:underline"
              >
                {t.freeAIDesignArchitectureLink}
              </Link>
            </p>
          </section>

          {/* Call to Action */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">{t.freeAIDesignCTATitle}</h3>
            <p className="mb-4">
              {t.freeAIDesignCTAText}
            </p>
            <a
              href={language === "fr" ? "https://app.styly.fr/signin?lang=fr" : "https://app.styly.fr/signin"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgba(250,111,64,1)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t.freeAIDesignCTAButton}
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t text-center">
            <p className="font-semibold">{t.followUsHere}</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://www.instagram.com/styly.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                {t.instagram}
              </a>
              <a
                href="https://www.linkedin.com/company/styly-io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                {t.linkedin}
              </a>
              <a
                href="https://www.facebook.com/styly.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                {t.facebook}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeAIInteriorDesign;
