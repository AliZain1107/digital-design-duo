import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";
import { Link } from "react-router-dom";

const AiBedroomDesign: React.FC = () => {
  const { t, language } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-12">
      <Helmet>
        <title>{language === "fr" ? "Design de Chambre IA : Guide Complet 2025 | Styly.fr" : "AI Bedroom Design: Complete Guide 2025 | Styly.fr"}</title>
        <meta name="description" content={language === "fr" ? "Découvrez comment l'IA révolutionne le design de chambre. Guide complet avec Styly AI pour créer des chambres personnalisées et modernes." : "Discover how AI revolutionizes bedroom design. Complete guide with Styly AI to create personalized and modern bedrooms."} />
        <meta name="keywords" content={language === "fr" ? "design chambre IA, Styly AI, décoration chambre, design intérieur IA, chambre moderne" : "AI bedroom design, Styly AI, bedroom decoration, AI interior design, modern bedroom"} />
        <meta property="og:title" content={language === "fr" ? "Design de Chambre IA : Guide Complet 2025" : "AI Bedroom Design: Complete Guide 2025"} />
        <meta property="og:description" content={language === "fr" ? "Découvrez comment l'IA révolutionne le design de chambre avec Styly AI." : "Discover how AI revolutionizes bedroom design with Styly AI."} />
      </Helmet>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {language === "fr" ? "Design de Chambre IA : Guide Complet 2025" : "AI Bedroom Design: Complete Guide 2025"}
        </h1>
      </header>
      <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
        {/* Table of Contents */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{t.tableOfContents}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t.introduction}</li>
            <li>{t.aiInBedroomDesign}</li>
            <li>{t.stylyioOverview}</li>
            <li>{t.eightAIPoweredBedroomDesigns}</li>
            <li>{t.expertDesignTips}</li>
            <li>{t.conclusion}</li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{t.introduction}</h2>
          <p>{t.introductionText}</p>
        </section>

        {/* AI in Bedroom Design */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{t.aiInBedroomDesign}</h2>
          <p>{t.aiInBedroomDesignText}</p>
          <p className="text-blue-600 mt-2">
            <a
              href="https://www.elledecoration.fr/deco/tendances/ai-interior-design"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Elle Décoration reports that AI design tools are revolutionizing bedroom personalization
            </a>
          </p>
          <p className="mt-2">
            <Link
              to="/blog/free-ai-interior-design-software"
              className="text-purple-600 hover:underline"
            >
              Discover our comprehensive guide to free AI interior design software
            </Link>
          </p>
        </section>

        {/* Styly.io: Your AI-Powered Bedroom Design Companion */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{t.stylyioOverview}</h2>
          <p>{t.stylyioOverviewText}</p>
          <div className="bg-purple-50 p-4 rounded-lg mt-3">
            <p className="text-purple-700 font-medium">
              <a
                href={language === "fr" ? "https://app.styly.fr/signin?lang=fr" : "https://app.styly.fr/signin"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Try our AI bedroom design tool now - create stunning bedrooms in minutes
              </a>
            </p>
          </div>
        </section>

        {/* Image */}
        <img
          src="/mini_magick20250608-11056-vbllb8.jpg"
          alt="AI bedroom design sample - Modern bedroom with AI-powered layout"
          className="w-full h-64 rounded-lg object-cover"
        />

        {/* Eight AI-Powered Bedroom Designs */}
        <section>
          <h2 className="text-lg font-semibold">{t.eightAIPoweredBedroomDesigns}</h2>

          {[{
            title: t.scandinavianSerenity,
            prompt: t.scandinavianBedroomPrompt,
            img: "https://framerusercontent.com/images/pi01A97j7UMNxBcRpREKZzpluk.jpg",
          }, {
            title: t.modernLuxurySuite,
            prompt: t.modernLuxurySuitePrompt,
            img: "https://framerusercontent.com/images/u6iOWwSX4DlBxdSBUFhhEYZ9Vg.jpg",
          }, {
            title: t.coastalRetreat,
            prompt: t.coastalBedroomPrompt,
            img: "https://framerusercontent.com/images/5AnXg7FUUJShc9jcuWsxPdPcwM.jpg",
          }, {
            title: t.urbanIndustrial,
            prompt: t.urbanIndustrialPrompt,
            img: "https://framerusercontent.com/images/39xj9Xn6JWU2zJ8TvjHwouLorA.jpg",
          }, {
            title: t.bohemianDreams,
            prompt: t.bohemianDreamsPrompt,
            img: "https://framerusercontent.com/images/d5weBH7LJbTNZtkewc9uSdymVI0.jpg",
          }, {
            title: t.japaneseZen,
            prompt: t.japaneseZenPrompt,
            img: "https://framerusercontent.com/images/GblR3QXJexhIW4uUjN6bGD634.jpg",
          }, {
            title: t.midCenturyModern,
            prompt: t.midCenturyModernPrompt,
            img: "https://framerusercontent.com/images/hS9OFnYRvhyaafYaA165rVxK4k.jpg",
          }, {
            title: t.contemporaryGlam,
            prompt: t.contemporaryGlamPrompt,
            img: "https://framerusercontent.com/images/Uam4DfciQaVVOqsa3jCwsTOd5g.jpg",
          }].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-semibold text-base">{idx + 1}. {item.title}</h3>
              <p className="text-sm">{t.prompt}: {item.prompt}</p>
              <img src={item.img} alt={item.title} className="rounded-md h-40 w-64 object-cover" />
            </div>
          ))}
        </section>

        {/* Expert Design Tips */}
        <section>
          <h2 className="text-lg font-semibold">{t.expertDesignTips}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t.considerNaturalLight}</li>
            <li>{t.ensureWalkableSpace}</li>
            <li>{t.layerLighting}</li>
            <li>{t.includeHiddenStorage}</li>
            <li>{t.useCalmingMaterials}</li>
          </ul>
          <p className="text-blue-600 mt-2">
            <a
              href="https://www.marieclaire.fr/maison/decoration/chambre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Marie Claire Maison emphasizes the importance of lighting in bedroom design
            </a>
          </p>
          <p className="mt-2">
            <Link
              to="/blog/2025-interior-design-trends"
              className="text-purple-600 hover:underline"
            >
              Explore the latest 2025 interior design trends for bedrooms
            </Link>
          </p>
        </section>

        {/* Negative Prompt Guidelines */}
        <section>
          <h2 className="text-lg font-semibold">{t.negativePromptGuidelines}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t.avoidClutter}</li>
            <li>{t.keepLightingNatural}</li>
            <li>{t.stickToDesignStyle}</li>
            <li>{t.maintainProportions}</li>
          </ul>
        </section>

        {/* Sources and Research */}
        <section>
          <h2 className="text-lg font-semibold">{t.sourcesAndResearch}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://www.thensf.org/" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.nationalSleepFoundation}</a>
            </li>
            <li>
              <a href="https://interiordesign.net/" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.interiorDesignMagazine}</a>
            </li>
            <li>
              <a href="https://capen.asid.org/news/asid-highlights-growth-of-interior-design-practice-with-2024-state-of-interior-design-report" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.asidAnnualReport}</a>
            </li>
            <li>
              <a href="https://www.health.harvard.edu/topics/sleep" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.harvardHealthSleepStudies}</a>
            </li>
          </ul>
        </section>

        <img
          src="/mini_magick20250608-11056-w1ke6k.jpg"
          alt="AI bedroom design showcase - Stunning bedroom transformations"
          className="w-full h-64 max-w-3xl object-cover rounded-lg"
        />

        {/* Conclusion */}
        <section>
          <h2 className="text-lg font-semibold">{t.conclusion}</h2>
          <p>{t.conclusionText}</p>
          <p>{t.keywords}</p>
          <p className="mt-2">
            <Link
              to="/blog/revolutionizing-architecture-engineering-construction-ai"
              className="text-purple-600 hover:underline"
            >
              Learn how AI is transforming the entire architecture and construction industry
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
                Start designing your dream bedroom today with our AI-powered tools
              </a>
            </p>
          </div>
        </section>

        {/* Follow Us Section */}
        <section className="pt-6 border-t border-gray-200 text-center">
          <p className="font-semibold">{t.followUsHere}</p>
          <div className="space-x-4 mt-2">
            <a href="https://www.instagram.com/stylyio/" target="_blank" className="text-blue-500">{t.instagram}</a>
            <a href="../" target="_blank" className="text-blue-500">{t.linkedin}</a>
            <a href="https://www.facebook.com/profile.php?id=61558770901420" target="_blank" className="text-blue-500">{t.facebook}</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiBedroomDesign;
