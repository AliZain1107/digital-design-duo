import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const InteriorDesignTrends2025: React.FC = () => {
  const { t, language } = useLanguage();

  const seoMeta = {
    en: {
      title: "2025 Interior Design Trends: What's In and What's Out | Styly.io",
      description: "Discover the hottest interior design trends for 2025. From eco-conscious design to smart home integration, learn what's trending and what's outdated in interior design.",
      keywords: "2025 interior design trends, interior design 2025, home design trends, eco-conscious design, biophilic design, smart home design, AI interior design"
    },
    fr: {
      title: "Tendances Design d'Intérieur 2025 : Ce qui est Tendance et ce qui ne l'est Plus | Styly.io",
      description: "Découvrez les tendances design d'intérieur les plus chaudes pour 2025. Du design éco-responsable à l'intégration domotique, apprenez ce qui est tendance et ce qui est dépassé.",
      keywords: "tendances design intérieur 2025, design intérieur 2025, tendances maison, design éco-responsable, design biophilique, maison intelligente, IA design intérieur"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const canonicalUrl = language === "fr"
    ? "https://styly.io/fr/blog/tendances-design-interieur-2025"
    : "https://styly.io/en/blog/2025-interior-design-trends";

  return (
    <>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content="/2025-interior-design-trends-hero.webp" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta name="twitter:image" content="/2025-interior-design-trends-hero.webp" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="flex flex-col items-center px-4 py-10 space-y-12">
        <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
          {/* Table of Contents */}
          <div>
            <h2 className="text-lg font-semibold">{t.interiorTrends2025TableOfContents}</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t.interiorTrends2025Introduction}</li>
              <li>{t.interiorTrends2025WhatsIn}</li>
              <li>{t.interiorTrends2025WhatsOut}</li>
              <li>{t.interiorTrends2025StylyRole}</li>
              <li>{t.interiorTrends2025Conclusion}</li>
            </ul>
          </div>

          {/* Hero Image */}
          <div className="w-full">
            <img
              src="/2025-interior-design-trends-hero.webp"
              alt={t.interiorTrends2025Title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Introduction */}
          <section>
            <h2 className="text-lg font-semibold">{t.interiorTrends2025Introduction}</h2>
            <p>{t.interiorTrends2025IntroductionText}</p>
          </section>

          {/* What's In Section */}
          <section>
            <h2 className="text-lg font-semibold">{t.interiorTrends2025WhatsIn}</h2>

            {/* Eco-Conscious Design */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025EcoConscious}</h3>
              <p>{t.interiorTrends2025EcoConsciousText}</p>
              <p className="italic text-gray-600 mt-2">{t.interiorTrends2025EcoConsciousStyly}</p>
            </div>

            {/* Biophilic Elements */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025Biophilic}</h3>
              <p>{t.interiorTrends2025BiophilicText}</p>
              <p className="text-blue-600 mt-2">
                <a
                  href="https://www.archdaily.com/tag/biophilic-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t.interiorTrends2025BiophilicExternal}
                </a>
              </p>
              <p className="italic text-gray-600 mt-2">{t.interiorTrends2025BiophilicStyly}</p>
              <p className="mt-2">
                <Link
                  to="/blog/free-ai-interior-design-software"
                  className="text-purple-600 hover:underline"
                >
                  {t.interiorTrends2025BiophilicLink}
                </Link>
              </p>
            </div>

            {/* Smart Home Integration */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025SmartHome}</h3>
              <p>{t.interiorTrends2025SmartHomeText}</p>
              <p className="italic text-gray-600 mt-2">{t.interiorTrends2025SmartHomeStyly}</p>
              <div className="bg-purple-50 p-4 rounded-lg mt-3">
                <p className="text-purple-700 font-medium">
                  <a
                    href={language === "fr" ? "https://app.styly.io/signin?lang=fr" : "https://app.styly.io/signin"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t.interiorTrends2025SmartHomeCTA}
                  </a>
                </p>
              </div>
            </div>

            {/* Middle Image */}
            <div className="w-full my-6">
              <img
                src="/interior-design-trends-2025-middle.webp"
                alt={t.interiorTrends2025BoldColors}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Bold Colors and Maximalism */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025BoldColors}</h3>
              <p>{t.interiorTrends2025BoldColorsText}</p>
              <p className="text-blue-600 mt-2">
                <a
                  href="https://www.elle.fr/Deco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t.interiorTrends2025BoldColorsExternal}
                </a>
              </p>
              <p className="italic text-gray-600 mt-2">{t.interiorTrends2025BoldColorsStyly}</p>
            </div>

            {/* Multifunctional Spaces */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025Multifunctional}</h3>
              <p>{t.interiorTrends2025MultifunctionalText}</p>
              <p className="italic text-gray-600 mt-2">{t.interiorTrends2025MultifunctionalStyly}</p>
              <p className="mt-2">
                <Link
                  to="/blog/10-expert-tips-to-save-big-on-home-interiors-in-2025"
                  className="text-purple-600 hover:underline"
                >
                  {t.interiorTrends2025MultifunctionalLink}
                </Link>
              </p>
            </div>
          </section>

          {/* What's Out Section */}
          <section>
            <h2 className="text-lg font-semibold">{t.interiorTrends2025WhatsOut}</h2>

            {/* Overly Minimalistic */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025OverlyMinimalistic}</h3>
              <p>{t.interiorTrends2025OverlyMinimalisticText}</p>
              <p className="mt-2">
                <Link
                  to="/blog/revolutionizing-architecture-engineering-construction-ai"
                  className="text-purple-600 hover:underline"
                >
                  {t.interiorTrends2025MinimalismLink}
                </Link>
              </p>
            </div>

            {/* All-White Kitchens */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025AllWhiteKitchens}</h3>
              <p>{t.interiorTrends2025AllWhiteKitchensText}</p>
              <p className="text-blue-600 mt-2">
                <a
                  href="https://www.houzz.com/magazine/kitchen-trends-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t.interiorTrends2025KitchenExternal}
                </a>
              </p>
            </div>

            {/* Open Shelving Overload */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025OpenShelving}</h3>
              <p>{t.interiorTrends2025OpenShelvingText}</p>
            </div>

            {/* Fast Furniture */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t.interiorTrends2025FastFurniture}</h3>
              <p>{t.interiorTrends2025FastFurnitureText}</p>
            </div>
          </section>

          {/* Bottom Image */}
          <div className="w-full">
            <img
              src="/interior-design-trends-bottom.webp"
              alt={t.interiorTrends2025StylyRole}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* How Styly Revolutionizes Interior Design */}
          <section>
            <h2 className="text-lg font-semibold">{t.interiorTrends2025StylyRole}</h2>
            <p>{t.interiorTrends2025StylyRoleText}</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>{t.interiorTrends2025StylyFeature1}</li>
              <li>{t.interiorTrends2025StylyFeature2}</li>
              <li>{t.interiorTrends2025StylyFeature3}</li>
            </ul>
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-700 font-medium">
                <a
                  href={language === "fr" ? "https://app.styly.io/signin?lang=fr" : "https://app.styly.io/signin"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t.interiorTrends2025StylyRoleCTA}
                </a>
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-lg font-semibold">{t.interiorTrends2025Conclusion}</h2>
            <p>{t.interiorTrends2025ConclusionText}</p>
          </section>

          {/* Call to Action */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">{t.interiorTrends2025CTATitle}</h3>
            <p className="mb-4">
              {t.interiorTrends2025CTAText}
            </p>
            <a
              href={language === "fr" ? "https://app.styly.io/signin?lang=fr" : "https://app.styly.io/signin"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgba(250,111,64,1)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t.interiorTrends2025CTAButton}
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t text-center">
            <p className="font-semibold">{t.followUsHere}</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://www.instagram.com/styly.io/"
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
                href="https://www.facebook.com/styly.io/"
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

export default InteriorDesignTrends2025;
