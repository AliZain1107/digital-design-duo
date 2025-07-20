import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";
import { Link } from "react-router-dom";
import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/400.css"; // Specify weight

const GenZInteriors: React.FC = () => {
  const { t, language } = useLanguage(); // Get the translation object based on the current language

  return (
    <>
      <Helmet>
        <title>{language === "fr" ? "Intérieurs Gen Z : Tendances Design 2025 | Styly.fr" : "Gen Z Interiors: Design Trends 2025 | Styly.fr"}</title>
        <meta name="description" content={language === "fr" ? "Découvrez les tendances design intérieur Gen Z 2025. Guide complet pour créer des espaces modernes avec Styly AI." : "Discover Gen Z interior design trends 2025. Complete guide to creating modern spaces with Styly AI."} />
        <meta name="keywords" content={language === "fr" ? "design Gen Z, intérieur moderne, Styly AI, tendances 2025, décoration jeune" : "Gen Z design, modern interior, Styly AI, 2025 trends, youth decoration"} />
        <meta property="og:title" content={language === "fr" ? "Intérieurs Gen Z : Tendances Design 2025" : "Gen Z Interiors: Design Trends 2025"} />
        <meta property="og:description" content={language === "fr" ? "Découvrez les tendances design intérieur Gen Z 2025 avec Styly AI." : "Discover Gen Z interior design trends 2025 with Styly AI."} />
        <meta property="og:url" content={language === "fr" ? "https://www.styly.fr/blog/interieurs-gen-z-tendances-design-2025" : "https://www.styly.fr/en/blog/gen-z-interiors-design-trends-2025"} />
        <link rel="canonical" href={language === "fr" ? "https://www.styly.fr/blog/interieurs-gen-z-tendances-design-2025" : "https://www.styly.fr/en/blog/gen-z-interiors-design-trends-2025"} />
      </Helmet>
      <div className="flex flex-col gap-6 text-gray-600 text-[12px] leading-relaxed p-5">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === "fr" ? "Intérieurs Gen Z : Tendances Design 2025" : "Gen Z Interiors: Design Trends 2025"}
          </h1>
        </header>
        <h3 className="text-xl md:text-5xl font-bold text-gray-800">
          {t.creatingTrendySpaces}
        </h3>
        <p>{t.introductionText1}</p>
        <p>{t.introductionText2}</p>
        <p className="text-blue-600 mt-2">
          <a
            href="https://www.elledecoration.fr/deco/tendances/generation-z-decoration"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Elle Décoration highlights Gen Z as the most influential generation in interior design trends
          </a>
        </p>
        <p className="mt-2">
          <Link
            to="/blog/2025-interior-design-trends"
            className="text-purple-600 hover:underline"
          >
            Discover the latest 2025 interior design trends that Gen Z is embracing
          </Link>
        </p>

        <h3 className="text-xl font-bold text-gray-800">
          {t.understandingAestheticPreferences}
        </h3>
        <p>{t.aestheticPreferencesText}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.colorPalettes}</li>
          <p>{t.colorPalettesText}</p>
          <li>{t.eclecticFurnitureAndDecor}</li>
          <p>{t.eclecticFurnitureAndDecorText}</p>
          <li>{t.minimalistMeetsMaximalist}</li>
          <p>{t.minimalistMeetsMaximalistText}</p>
        </ul>

        <h3 className="text-xl font-bold text-gray-800">
          {t.keyElementsOfInstagramWorthyInterior}
        </h3>
        <p>{t.instagramWorthyDefinition}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.naturalLighting}</li>
          <p>{t.naturalLightingText}</p>
          <li>{t.accentWalls}</li>
          <p>{t.accentWallsText}</p>
          <li>{t.statementPieces}</li>
          <p>{t.statementPiecesText}</p>
          <li>{t.greeneryAndPlants}</li>
          <p>{t.greeneryAndPlantsText}</p>
          <li>{t.layeredTextures}</li>
          <p>{t.layeredTexturesText}</p>
          <li>{t.declutteredVisuals}</li>
          <p>{t.declutteredVisualsText}</p>
        </ul>

        <h3 className="text-xl font-bold text-gray-800">
          {t.incorporatingSustainabilityAndTechnology}
        </h3>
        <p>{t.sustainabilityTechText}</p>
        <h2 className="text-base font-bold text-gray-800">
          {t.sustainableMaterials}
        </h2>
        <p>{t.sustainableMaterialsText}</p>
        <h2 className="text-base font-bold text-gray-800">
          {t.smartHomeTechnology}
        </h2>
        <p>{t.smartHomeTechnologyText}</p>
        <h2 className="text-base font-bold text-gray-800">
          {t.multiFunctionalFurniture}
        </h2>
        <p>{t.multiFunctionalFurnitureText}</p>
        <p className="text-blue-600 mt-2">
          <a
            href="https://www.marieclaire.fr/maison/decoration/generation-z-durable"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Marie Claire Maison emphasizes Gen Z's commitment to sustainable interior design
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
              Create sustainable, tech-savvy interiors with our AI design tools
            </a>
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          {t.caseStudiesAndExamples}
        </h3>
        <p>{t.caseStudyIntro}</p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>{t.economicEfficiency}</strong>
            <p>{t.economicEfficiencyText}</p>
          </li>
          <li>
            <strong>{t.geometricDreamBedroom}</strong>
            <p>{t.geometricDreamBedroomText}</p>
          </li>
          <li>
            <strong>{t.cafeInspiredKitchenNook}</strong>
            <p>{t.cafeInspiredKitchenNookText}</p>
          </li>
          <li>
            <strong>{t.bohoOutdoorBalcony}</strong>
            <p>{t.bohoOutdoorBalconyText}</p>
          </li>
        </ol>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-14 mb-14">
        <div className="rounded-lg max-h-[500px] overflow-hidden">
          <img
            decoding="async"
            loading="lazy"
            src="https://framerusercontent.com/images/PDGDvvv47n39NPYfptqokQ9sY.webp"
            alt="Generated by Styly"
            className="w-full h-[500px] object-cover object-center rounded-[inherit]"
            style={{ borderRadius: "inherit" }}
          />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4">
        <h2 className="text-2xl font-bold">{t.diyInstagramWorthyMakeovers}</h2>
        <p className="text-[12px] text-gray-800">{t.diyTipsIntro}</p>
        <p className="mt-2">
          <Link
            to="/blog/10-expert-tips-to-save-big-on-home-interiors-in-2025"
            className="text-purple-600 hover:underline text-[12px]"
          >
            Learn expert tips for budget-friendly DIY interior design projects
          </Link>
        </p>

        <ol className="list-decimal list-inside space-y-2 text-[12px] text-gray-800 mt-5">
          <li>
            <span className="font-semibold">{t.startWithMoodBoard}</span>
            <p className="my-5">{t.startWithMoodBoardText}</p>
          </li>

          <li>
            <span className="font-semibold">{t.maximizeWhatYouHave}</span>
            <p className="my-5">{t.maximizeWhatYouHaveText}</p>
          </li>

          <li>
            <span className="font-semibold">{t.getCreativeWithPaint}</span>
            <p className="my-5">{t.getCreativeWithPaintText}</p>
          </li>

          <li>
            <span className="font-semibold">{t.thriftForJewels}</span>
            <p className="my-5">{t.thriftForJewelsText}</p>
          </li>

          <li>
            <span className="font-semibold">{t.accessorizeThoughtfully}</span>
            <p className="my-5">{t.accessorizeThoughtfullyText}</p>
          </li>

          <li>
            <span className="font-semibold">{t.playWithAnglesForPhotos}</span>
            <p className="my-5">{t.playWithAnglesForPhotosText}</p>
          </li>
        </ol>
      </div>

      <div className="md:max-w-5xl mx-auto px-4 mt-14 mb-14">
        <div className="rounded-lg max-h-[500px] h-[550px] overflow-hidden">
          <img
            decoding="async"
            loading="lazy"
            src="https://framerusercontent.com/images/m0gVSPoNKygTbBepwSoUP6FHww.jpg"
            alt="Generated by Styly"
            className="w-full h-[500px] object-cover object-center rounded-[inherit]"
            style={{ borderRadius: "inherit" }}
          />
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 text-[12px] text-gray-800">
        <h2 className="text-2xl font-bold text-gray-700">
          {t.socialMediaShapingDesignTrends}
        </h2>
        <p>{t.socialMediaShapingDesignTrendsText}</p>

        <ul className="space-y-4 list-disc list-inside text-gray-800">
          <li>
            {t.crowdsourcingCreativity}
            <p className="my-5">{t.crowdsourcingCreativityText}</p>
          </li>
          <li>
            {t.massAppealToNicheInterests}
            <p className="my-5">{t.massAppealToNicheInterestsText}</p>
          </li>
          <li>
            <strong>{t.interactiveShopping}</strong>
            <p className="my-5">{t.interactiveShoppingText}</p>
          </li>
          <li>
            <strong>{t.empoweringNewCreators}</strong>
            <p className="my-5">{t.empoweringNewCreatorsText}</p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-700">{t.shareYourBestSpace}</h2>
        <p className="text-[12px] text-gray-700">{t.shareYourBestSpaceText}</p>
        <p className="text-[12px] text-gray-700">{t.shareYourBestSpaceInstagram}</p>
        <p className="text-blue-600 mt-2">
          <a
            href="https://www.cotemaison.fr/decoration/reseaux-sociaux-decoration"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[12px]"
          >
            Côté Maison explores how social media is reshaping interior design trends
          </a>
        </p>
        <p className="mt-2">
          <Link
            to="/blog/free-ai-interior-design-software"
            className="text-purple-600 hover:underline text-[12px]"
          >
            Create Instagram-worthy spaces with our free AI interior design tools
          </Link>
        </p>
        <div className="bg-orange-50 p-4 rounded-lg mt-4">
          <p className="text-orange-700 font-medium text-[12px]">
            <a
              href={language === "fr" ? "https://app.styly.fr/signin?lang=fr" : "https://app.styly.fr/signin"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Start creating your Gen Z-inspired, Instagram-worthy interior today
            </a>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-12">
        <div className="flex flex-col">
          <a
            href="./how-real-estate-agents-are-boosting-sales-with-ai-powered-virtual-staging-the-2025-market-reality"
            className="text-[12px] text-blue-400 hover:underline"
          >
            ‹ {t.prevArticle}
          </a>
        </div>

        <div className="flex flex-col text-right">
          <a
            href="./how-to-build-your-own-house-with-ai-tools-including-porch-design"
            className="text-[12px] text-blue-400 hover:underline"
          >
            {t.nextArticle} ›
          </a>
        </div>
      </div>
    </>
  );
};

export default GenZInteriors;
