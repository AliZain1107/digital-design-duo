import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";
import { Link } from "react-router-dom";

const BuildHouseAI: React.FC = () => {
  const { t, language } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-10">
      <Helmet>
        <title>{language === "fr" ? "Comment Construire sa Maison avec l'IA | Styly.fr" : "How to Build Your House with AI | Styly.fr"}</title>
        <meta name="description" content={language === "fr" ? "Guide complet pour construire votre maison avec l'intelligence artificielle. Outils IA, conseils d'experts et solutions Styly." : "Complete guide to building your house with artificial intelligence. AI tools, expert advice and Styly solutions."} />
        <meta name="keywords" content={language === "fr" ? "construire maison IA, Styly AI, construction intelligente, design architectural IA" : "build house AI, Styly AI, smart construction, AI architectural design"} />
        <meta property="og:title" content={language === "fr" ? "Comment Construire sa Maison avec l'IA" : "How to Build Your House with AI"} />
        <meta property="og:description" content={language === "fr" ? "Guide complet pour construire votre maison avec l'intelligence artificielle et Styly." : "Complete guide to building your house with artificial intelligence and Styly."} />
      </Helmet>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {language === "fr" ? "Comment Construire sa Maison avec l'IA" : "How to Build Your House with AI"}
        </h1>
      </header>
      <div className="max-w-4xl text-sm text-gray-800 space-y-6">
        {/* Market Overview */}
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{t.marketOverview}</h2>
        <ul className="list-disc pl-5">
          <li>{t.keyEvaluationCriteria}</li>
          {/* Add other content with translations */}
        </ul>

        {/* Market Leaders */}
        <h3 className="text-lg font-bold">{t.marketLeaders}</h3>
        <ol className="list-decimal pl-5">
          <li>{t.foyr} - {t.knownForCommercialApplications}</li>
          <li>{t.palette} - {t.focusesOnColorHarmony}</li>
          <li>{t.pablo} - {t.specializesInLightingDesign}</li>
        </ol>

        {/* Emerging Innovators */}
        <h3 className="text-lg font-bold">{t.emergingInnovators}</h3>
        <ol className="list-decimal pl-5">
          <li>{t.reroomAI} - {t.notableForRenovationProjects}</li>
          <li>{t.promeAI} - {t.specializesInTextureGeneration}</li>
        </ol>

        {/* Styly Advantage */}
        <h3 className="text-lg font-bold">{t.stylyAdvantage}</h3>
        <ul className="list-disc pl-5">
          <li>{t.realTimeStyleTransferTechnology}</li>
          <li>{t.advancedMaterialRecognition}</li>
          <li>{t.intelligentSpaceOptimization}</li>
        </ul>
        <p className="text-blue-600 mt-2">
          <a
            href="https://www.dezeen.com/tag/artificial-intelligence/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Dezeen showcases AI as transforming architectural design and construction
          </a>
        </p>
        <div className="bg-purple-50 p-4 rounded-lg mt-3">
          <p className="text-purple-700 font-medium">
            <a
              href={language === "fr" ? "https://app.styly.fr/signin?lang=fr" : "https://app.styly.fr/signin"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Build your dream house with our AI-powered design tools
            </a>
          </p>
        </div>

        {/* Performance Metrics */}
        <h2 className="text-xl font-semibold">{t.performanceMetrics}</h2>
        <ul className="list-disc pl-5">
          <li>{t.timeSaved}: 45% {t.reductionInInitialDesignPhase}</li>
          <li>{t.clientSatisfactionRates}: 89% {t.positiveFeedback}</li>
          <li>{t.costReduction}: 35% {t.averageSavingsInProjectPlanning}</li>
        </ul>

        {/* Case Study */}
        <h2 className="text-xl font-semibold">{t.caseStudy}</h2>
        <ul className="list-disc pl-5">
          <li>{t.reduceDesignIterationTime}: 60%</li>
          <li>{t.cutDesignCosts}: 40%</li>
        </ul>

        {/* Future Trends */}
        <h2 className="text-xl font-semibold">{t.futureTrends}</h2>
        <ul className="list-disc pl-5">
          <li>{t.integrationOfARVRTechnologies}</li>
          <li>{t.sustainableDesignAutomation}</li>
        </ul>

        {/* Expert Perspectives */}
        <h2 className="text-xl font-semibold">{t.expertPerspectives}</h2>
        <p>"{t.aiToolsAreNotReplacingDesigners}"</p>

        {/* Making the Right Choice */}
        <h2 className="text-xl font-semibold">{t.makingTheRightChoice}</h2>
        <ul className="list-decimal pl-5">
          <li>{t.yourSpecificNeedsAndUseCases}</li>
          <li>{t.budgetConstraints}</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold">{t.conclusion}</h2>
        <p>
          {t.whileEachPlatformOffersUniqueAdvantages}, Styly.io {t.emergesAsAComprehensiveSolution}.
        </p>
        <p className="mt-2">
          <Link
            to="/blog/revolutionizing-architecture-engineering-construction-ai"
            className="text-purple-600 hover:underline"
          >
            Learn how AI is revolutionizing architecture and construction
          </Link>
        </p>
        <p className="mt-2">
          <Link
            to="/blog/free-ai-interior-design-software"
            className="text-purple-600 hover:underline"
          >
            Explore our free AI interior design tools for your house project
          </Link>
        </p>
        <div className="bg-orange-50 p-4 rounded-lg mt-4">
          <p className="text-orange-700 font-medium">
            <a
              href={language === "fr" ? "https://app.styly.fr/signin?lang=fr" : "https://app.styly.fr/signin"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Start building your dream house today with AI-powered design assistance
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildHouseAI;
