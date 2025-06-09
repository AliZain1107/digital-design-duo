import React from "react";
import { useLanguage } from "@/lib/i18n"; // Import the useLanguage hook
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const RealEstateVirtualStaging: React.FC = () => {
  const { t, language } = useLanguage(); // Get the translation function from context

  const seoMeta = {
    en: {
      title: "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality | Styly.io",
      description: "Discover how real estate agents are revolutionizing property sales with AI-powered virtual staging. Learn about market statistics, success stories, and implementation strategies for 2025.",
      keywords: "AI virtual staging, real estate staging, property marketing, virtual home staging, real estate AI, property sales, home staging technology"
    },
    fr: {
      title: "Comment les Agents Immobiliers Boostent leurs Ventes avec le Home Staging Virtuel IA : La Réalité du Marché 2025 | Styly.io",
      description: "Découvrez comment les agents immobiliers révolutionnent les ventes immobilières avec le home staging virtuel IA. Statistiques du marché, études de cas et stratégies d'implémentation pour 2025.",
      keywords: "home staging virtuel IA, staging immobilier, marketing immobilier, staging maison virtuel, IA immobilier, ventes propriétés, technologie staging"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const canonicalUrl = language === "fr"
    ? "https://styly.io/fr/blog/agents-immobiliers-home-staging-virtuel-ia"
    : "https://styly.io/en/blog/real-estate-agents-ai-virtual-staging";

  return (
    <>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
      </Helmet>
      <div className="flex flex-col gap-6 text-gray-600 text-base leading-relaxed p-5">
        <p>
          {t.realEstateLandscape}
          <a
            href="https://www.nar.realtor/research-and-statistics/research-reports"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {t.generationalTrendsReport}
          </a>
          {t.buyersBeginSearch}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          {t.virtualStagingRevolution}
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.propertiesWithAIStaging}</li>
          <li>{t.virtuallyStagedSellFaster}</li>
          <li>{t.aiStagingCostReduction}</li>
          <li>{t.propertiesWithAIEnhancedPhotos}</li>
          <li>{t.buyersStruggleToVisualize}</li>
        </ul>

        <p>
          {t.source}{" "}
          <a
            href="https://www.realestatestagingassociation.com/research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {t.realEstateStagingAssociation}
          </a>
        </p>

        <p className="text-blue-600 mt-2">
          <a
            href="https://www.architecturaldigest.com/story/virtual-staging-real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Architectural Digest reports that virtual staging is becoming the industry standard
          </a>
        </p>

        <p className="text-blue-600 mt-2">
          <a
            href="https://en.wikipedia.org/wiki/Virtual_home_staging"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {language === "fr"
              ? "En savoir plus sur le home staging virtuel sur Wikipedia"
              : "Learn more about virtual home staging on Wikipedia"
            }
          </a>
        </p>

        <p className="mt-2">
          <Link
            to="/blog/free-ai-interior-design-software"
            className="text-purple-600 hover:underline"
          >
            Discover how our free AI interior design software powers virtual staging
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          {t.whyAIStagingIndustryStandard}
        </h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>{t.economicEfficiency}</strong>: {t.economicEfficiencyDescription}
          </li>
          <li>
            <strong>{t.speedToMarket}</strong>: {t.speedToMarketDescription}
          </li>
          <li>
            <strong>{t.marketSpecificCustomization}</strong>: {t.marketSpecificCustomizationDescription}
          </li>
        </ol>

        <ul className="list-disc pl-6 space-y-2">
          <li>{t.targetSpecificBuyerDemographics}</li>
          <li>{t.adjustStagingRealTimeFeedback}</li>
          <li>{t.createSeasonalVariations}</li>
          <li>{t.generateDesignOptions}</li>
        </ul>
      </div>
      <div className="max-w-5xl mx-auto px-4 mt-14 mb-14">
        <div className="rounded-lg max-h-[500px] overflow-hidden">
          <img
            decoding="async"
            loading="lazy"
            src="https://framerusercontent.com/images/fXk976eJd7zcY9ghuZEYRcz9WXo.png"
            alt="Generated by Styly"
            className="w-full h-full object-cover object-center rounded-[inherit]"
            style={{ borderRadius: "inherit" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 text-gray-600 text-base leading-relaxed p-5">
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          {t.realWorldSuccessStories}
        </h2>

        {/* Case Study 1 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {t.caseStudy1Title}
          </h3>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li>{t.caseStudy1Property}</li>
            <li>{t.caseStudy1Challenge}</li>
            <li>{t.caseStudy1Solution}</li>
            <li>{t.caseStudy1Result}</li>
          </ul>
        </div>

        {/* Case Study 2 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {t.caseStudy2Title}
          </h3>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li>{t.caseStudy2Property}</li>
            <li>{t.caseStudy2Challenge}</li>
            <li>{t.caseStudy2Solution}</li>
            <li>{t.caseStudy2Result}</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg mt-4">
          <p className="text-purple-700 font-medium">
            <a
              href={language === "fr" ? "https://app.styly.io/?lang=fr" : "https://app.styly.io"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t.transformRealEstateListings}
            </a>
          </p>
        </div>

        {/* Agent Implementation */}
        <div>
          <h3 className="text-base font-semibold">
            {t.agentImplementationTitle}
          </h3>
          <div className="mt-4">
            <h4 className="font-semibold">{t.segmentedMarketingApproaches}</h4>
            <p className="mt-1">{t.segmentedMarketingDescription}</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>{t.emptyNesterDownsizing}</li>
              <li>{t.firstTimeHomebuyer}</li>
              <li>{t.workFromHomeLayouts}</li>
              <li>{t.multigenerationalLiving}</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              {t.renovationVisualizationTitle}
            </h4>
            <p className="mt-1">{t.renovationVisualizationDescription}</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>{t.energyEfficientUpgrades}</li>
              <li>{t.spaceReconfiguration}</li>
              <li>{t.modernUpdates}</li>
              <li>{t.accessibilityModifications}</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              {t.digitalMarketingIntegration}
            </h4>
            <p className="mt-1">{t.digitalMarketingDescription}</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>{t.higherEngagement}</li>
              <li>{t.longerTimeSpent}</li>
              <li>{t.moreSavedListings}</li>
              <li>{t.higherQualityLeads}</li>
            </ul>
          </div>
        </div>

        {/* Market Analysis */}
        <div>
          <h3 className="text-base font-semibold">
            {t.currentMarketAnalysis}
          </h3>
          <p className="mt-2">
            {t.marketAnalysisDescription}
            <a
              href="https://www.mckinsey.com/industries/real-estate/our-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {t.realEstateTechReport}
            </a>
          </p>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li>{t.aiStagingAdoption}</li>
            <li>{t.luxuryPropertiesUseAI}</li>
            <li>{t.virtualStagingMarketGrowth}</li>
            <li>{t.declineOfPhysicalStaging}</li>
          </ul>

          <p className="text-blue-600 mt-2">
            <a
              href="https://www.houzz.fr/magazine/immobilier-staging-virtuel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Houzz research shows virtual staging increases buyer interest by 83%
            </a>
          </p>

          <p className="mt-2">
            <Link
              to="/blog/revolutionizing-architecture-engineering-construction-ai"
              className="text-purple-600 hover:underline"
            >
              Learn how AI is transforming the entire real estate and construction industry
            </Link>
          </p>
        </div>

        {/* Best Practices */}
        <div>
          <h3 className="text-base font-medium text-gray-600">
            {t.evidenceBasedBestPractices}
          </h3>
          <div className="mt-4">
            <h4 className="font-semibold">{t.segmentedMarketingApproaches}</h4>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>{t.highResolutionImages}</li>
              <li>{t.consistentHeightPerspective}</li>
              <li>{t.cleanSpacesForAI}</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">{t.strategicApplication}</h4>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>{t.focusOnProblematicSpaces}</li>
              <li>{t.showcaseVersatility}</li>
              <li>{t.demonstrateLifestylePossibilities}</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">{t.marketResponsiveDesign}</h4>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>{t.researchLocalPreferences}</li>
              <li>{t.alignWithDesignTrends}</li>
              <li>{t.considerPropertyElements}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:max-w-5xl mx-auto px-4 mt-14 mb-14">
        <div className="rounded-lg max-h-[500px] overflow-hidden">
          <img
            decoding="async"
            loading="lazy"
            src="https://framerusercontent.com/images/J6HgpRPZB19Uynxc8MWqKN4btnA.png"
            alt="Generated by Styly"
            className="w-full h-full object-cover object-center rounded-[inherit]"
            style={{ borderRadius: "inherit" }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-base text-gray-800 font-semibold">
          {t.expertAnalysis}
        </h2>
        <p className="text-base mt-5">{t.expertAnalysisQuote}</p>

        <h3 className="text-base text-gray-800 font-medium mt-5">
          {t.the2025Reality}
        </h3>
        <p className="text-base text-gray-800">
          {t.aiStagingEmbeddedInPractice}
        </p>

        <h3 className="text-sm font-medium mt-5">
          {t.transformRealEstateBusiness}
        </h3>
        <p className="text-base text-gray-800 mt-5">
          {t.experienceAIAdvantage}
        </p>

        <ul className="list-disc list-inside space-y-2 text-base text-gray-800 mt-5">
          <li>{t.meetBuyerExpectations}</li>
          <li>{t.maximizePropertyValues}</li>
          <li>{t.reduceDaysOnMarket}</li>
          <li>{t.scaleMarketingEfforts}</li>
          <li>{t.deliverConsistentPresentation}</li>
        </ul>

        <p className="mt-4">
          <Link
            to="/blog/2025-interior-design-trends"
            className="text-purple-600 hover:underline"
          >
            Stay ahead with the latest 2025 interior design trends for staging
          </Link>
        </p>

        <div className="bg-orange-50 p-4 rounded-lg mt-4">
          <p className="text-orange-700 font-medium">
            <a
              href={language === "fr" ? "https://app.styly.io/?lang=fr" : "https://app.styly.io"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t.startBoostingRealEstateSales}
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 text-gray-600 text-base leading-relaxed p-5">
        <a
          href="./real-estate-agents-ai-virtual-staging"
          className="text-base text-blue-400 hover:underline"
        >
          {t.realEstateVirtualStaging}
        </a>
      </div>
    </>
  );
};

export default RealEstateVirtualStaging;
