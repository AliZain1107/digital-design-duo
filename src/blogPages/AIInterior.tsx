import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Link } from "react-router-dom";

const TipsToSaveBig2025: React.FC = () => {
  const { t, language } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-8">
      <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
        <p>
          {t.introductionText1}
          <strong>{t.stylyAI}</strong> {t.introductionText2}
        </p>
        <p className="text-blue-600 mt-2">
          <a
            href="https://www.houzz.fr/magazine/budget-decoration-interieur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Houzz reports that 78% of homeowners are looking for budget-friendly design solutions in 2025
          </a>
        </p>
        <p className="mt-2">
          <Link
            to="/blog/free-ai-interior-design-software"
            className="text-purple-600 hover:underline"
          >
            Discover how our free AI interior design software can help you save money
          </Link>
        </p>

        <div className="space-y-4">
          {[
            {
              title: t.planBeforeYouSpend,
              content: t.planBeforeYouSpendContent,
            },
            {
              title: t.optimizeRoomLayoutWithAI,
              content: t.optimizeRoomLayoutWithAIContent,
            },
            {
              title: t.upcycleFurniture,
              content: t.upcycleFurnitureContent,
            },
            {
              title: t.focusOnDIYProjects,
              content: t.focusOnDIYProjectsContent,
            },
            {
              title: t.shopSmartForMaterials,
              content: t.shopSmartForMaterialsContent,
            },
            {
              title: t.prioritizeKeyElements,
              content: t.prioritizeKeyElementsContent,
            },
            {
              title: t.experimentWithColorsVirtually,
              content: t.experimentWithColorsVirtuallyContent,
            },
            {
              title: t.investInMultiFunctionalFurniture,
              content: t.investInMultiFunctionalFurnitureContent,
            },
            {
              title: t.useAIForAccessoryPlacement,
              content: t.useAIForAccessoryPlacementContent,
            },
            {
              title: t.stayUpdatedWithTrends,
              content: t.stayUpdatedWithTrendsContent,
            },
          ].map((tip, i) => (
            <div key={i}>
              <h3 className="font-semibold text-base">{i + 1}. {tip.title}</h3>
              <p>{tip.content}</p>
              {i === 1 && ( // After "Optimize Room Layout with AI"
                <div className="bg-purple-50 p-4 rounded-lg mt-3">
                  <p className="text-purple-700 font-medium">
                    <a
                      href={language === "fr" ? "https://app.styly.io/?lang=fr" : "https://app.styly.io"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Try our AI room layout optimizer now - see instant results
                    </a>
                  </p>
                </div>
              )}
              {i === 4 && ( // After "Shop Smart for Materials"
                <p className="text-blue-600 mt-2">
                  <a
                    href="https://www.cotemaison.fr/decoration/budget-decoration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Côté Maison shares expert tips on finding affordable quality materials
                  </a>
                </p>
              )}
              {i === 6 && ( // After "Experiment with Colors Virtually"
                <p className="mt-2">
                  <Link
                    to="/blog/2025-interior-design-trends"
                    className="text-purple-600 hover:underline"
                  >
                    Explore the latest color trends for 2025 interior design
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>

        <img
          src="https://framerusercontent.com/images/qwNLVoWFq8EGoCFXGZ2jVmDfcJo.webp"
          alt="AI Home Design Trends"
          className="w-full h-[500px] rounded-xl object-cover"
        />

        <img
          src="https://framerusercontent.com/images/JlnrrzUwSWVZYpELxVUSK4pac.webp"
          alt="AI Room Planner Tool"
          className="w-full h-[500px] rounded-xl object-cover"
        />

        <h2 className="text-lg font-semibold">{t.whyChooseStyly}</h2>
        <p>{t.stylyDescription}</p>
        <ul className="list-disc pl-5">
          <li>{t.visualizeDesigns}</li>
          <li>{t.experimentWithLayouts}</li>
          <li>{t.saveMoney}</li>
        </ul>
        <p className="text-blue-600 mt-2">
          <a
            href="https://www.marieclaire.fr/maison/decoration/budget"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Marie Claire Maison highlights AI tools as the future of budget-friendly interior design
          </a>
        </p>
        <p className="mt-2">
          <Link
            to="/blog/revolutionizing-architecture-engineering-construction-ai"
            className="text-purple-600 hover:underline"
          >
            Learn how AI is revolutionizing the entire design and construction industry
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
              Start saving money on your interior design today with our free AI tools
            </a>
          </p>
        </div>

        <div className="pt-6 border-t text-center">
          <p className="font-semibold">{t.followUsHere}</p>
          <div className="space-x-4 mt-2">
            <a
              href="https://www.instagram.com/stylyio/"
              target="_blank"
              className="text-blue-500"
              rel="noopener"
            >
              {t.instagram}
            </a>
            <a
              href="../"
              target="_blank"
              className="text-blue-500"
              rel="noopener"
            >
              {t.linkedin}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558770901420"
              target="_blank"
              className="text-blue-500"
              rel="noopener"
            >
              {t.facebook}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsToSaveBig2025;
