import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";
import { Link } from "react-router-dom";

const BuildHouseAI: React.FC = () => {
  const { t, language } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-10">
      <Helmet>
        <title>{language === "fr" ? "Guide Ultime Design Intérieur IA 2025 | Styly.fr" : "Ultimate AI Interior Design Guide 2025 | Styly.fr"}</title>
        <meta name="description" content={language === "fr" ? "Guide complet du design intérieur avec l'intelligence artificielle. Tout savoir sur Styly AI et les outils de décoration moderne." : "Complete guide to interior design with artificial intelligence. Everything about Styly AI and modern decoration tools."} />
        <meta name="keywords" content={language === "fr" ? "guide design IA, Styly AI, décoration intelligente, design intérieur 2025, outils IA maison" : "AI design guide, Styly AI, smart decoration, interior design 2025, home AI tools"} />
        <meta property="og:title" content={language === "fr" ? "Guide Ultime Design Intérieur IA 2025" : "Ultimate AI Interior Design Guide 2025"} />
        <meta property="og:description" content={language === "fr" ? "Guide complet du design intérieur avec l'intelligence artificielle et Styly AI." : "Complete guide to interior design with artificial intelligence and Styly AI."} />
        <meta property="og:url" content={language === "fr" ? "https://www.styly.fr/blog/guide-ultime-design-interieur-ia-2025" : "https://www.styly.fr/en/blog/ultimate-ai-interior-design-guide-2025"} />
        <link rel="canonical" href={language === "fr" ? "https://www.styly.fr/blog/guide-ultime-design-interieur-ia-2025" : "https://www.styly.fr/en/blog/ultimate-ai-interior-design-guide-2025"} />
      </Helmet>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {language === "fr" ? "Guide Ultime Design Intérieur IA 2025" : "Ultimate AI Interior Design Guide 2025"}
        </h1>
      </header>
      <div className="max-w-4xl text-sm text-gray-800 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{t.marketOverview}</h2>
        <ul className="list-disc pl-5">
          <li>{t.keyEvaluationCriteria}</li>
          {/* Add other content with translations */}
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{t.marketLeaders}</h3>
        <ol className="list-decimal pl-5">
          <li>Foyr - Known for commercial applications</li>
          <li>Palette - Focuses on color harmony</li>
          <li>Pablo - Specializes in lighting design</li>
        </ol>

        <h3 className="text-lg font-bold">{t.emergingInnovators}</h3>
        <ol className="list-decimal pl-5">
          <li>Reroom AI - Notable for renovation projects</li>
          <li>PromeAI - Specializes in texture generation</li>
        </ol>

        <h3 className="text-lg font-bold">{t.stylyAdvantage}</h3>
        <ul className="list-disc pl-5">
          <li>Real-time style transfer technology</li>
          <li>Advanced material recognition</li>
          <li>Intelligent space optimization</li>
        </ul>
        <p className="text-blue-600 mt-2">
          <a
            href="https://www.archdaily.com/tag/artificial-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ArchDaily highlights AI as the most significant advancement in design technology
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
              Experience Styly's advanced AI features - try our comprehensive design platform
            </a>
          </p>
        </div>

        <h2 className="text-xl font-semibold">{t.performanceMetrics}</h2>
        <ul className="list-disc pl-5">
          <li>Time saved: 45% reduction in initial design phase</li>
          <li>Client satisfaction rates: 89% positive feedback</li>
          <li>Cost reduction: 35% average savings in project planning</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.caseStudy}</h2>
        <ul className="list-disc pl-5">
          <li>Reduce design iteration time by 60%</li>
          <li>Cut design costs by 40%</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.futureTrends}</h2>
        <ul className="list-disc pl-5">
          <li>Integration of AR/VR technologies</li>
          <li>Sustainable design automation</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.expertPerspectives}</h2>
        <p>
          "AI tools are not replacing designers; they're empowering them to be more creative and efficient."
        </p>

        <h2 className="text-xl font-semibold">{t.makingTheRightChoice}</h2>
        <ul className="list-decimal pl-5">
          <li>Your specific needs and use cases</li>
          <li>Budget constraints</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.conclusion}</h2>
        <p>
          While each platform offers unique advantages, Styly.io emerges as a comprehensive solution that
          combines powerful AI capabilities with user-friendly features.
        </p>
        <p className="mt-2">
          <Link
            to="/blog/free-ai-interior-design-software"
            className="text-purple-600 hover:underline"
          >
            Get started with our free AI interior design software
          </Link>
        </p>
        <p className="mt-2">
          <Link
            to="/blog/2025-interior-design-trends"
            className="text-purple-600 hover:underline"
          >
            Explore the latest 2025 interior design trends with AI tools
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
              Start your AI interior design journey today - compare and choose the best tools
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildHouseAI;
