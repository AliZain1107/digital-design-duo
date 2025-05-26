import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Helmet } from "react-helmet";

const RevolutionizingArchitecture: React.FC = () => {
  const { t, language } = useLanguage();

  const seoMeta = {
    en: {
      title: "Revolutionizing Architecture, Engineering, and Construction with AI | Styly.io",
      description: "Discover how artificial intelligence is transforming the AEC industry with innovative design solutions, enhanced efficiency, and revolutionary applications in architecture and construction.",
      keywords: "AI architecture, construction AI, engineering AI, AEC industry, artificial intelligence construction, AI design tools, smart buildings, generative design"
    },
    fr: {
      title: "Révolutionner l'Architecture, l'Ingénierie et la Construction avec l'IA | Styly.io",
      description: "Découvrez comment l'intelligence artificielle transforme l'industrie AEC avec des solutions de design innovantes, une efficacité améliorée et des applications révolutionnaires.",
      keywords: "IA architecture, construction IA, ingénierie IA, industrie AEC, intelligence artificielle construction, outils design IA, bâtiments intelligents, design génératif"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const canonicalUrl = language === "fr"
    ? "https://styly.io/blog/revolutionner-architecture-ingenierie-construction-ia"
    : "https://styly.io/blog/revolutionizing-architecture-engineering-construction-ai";

  return (
    <>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content="/revolutionizing-architecture-hero.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta name="twitter:image" content="/revolutionizing-architecture-hero.png" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="flex flex-col items-center px-4 py-10 space-y-12">
        <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
          {/* Table of Contents */}
          <div>
            <h2 className="text-lg font-semibold">{t.revolutionizingArchitectureTableOfContents}</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t.revolutionizingArchitectureIntroduction}</li>
              <li>{t.revolutionizingArchitectureAITransformation}</li>
              <li>{t.revolutionizingArchitectureKeyBenefits}</li>
              <li>{t.revolutionizingArchitectureRealWorldApplications}</li>
              <li>{t.revolutionizingArchitectureFuture}</li>
              <li>{t.revolutionizingArchitectureConclusion}</li>
            </ul>
          </div>

          {/* Introduction */}
          <section>
            <h2 className="text-lg font-semibold">{t.revolutionizingArchitectureIntroduction}</h2>
            <p>{t.revolutionizingArchitectureIntroductionText}</p>
          </section>

          {/* Hero Image */}
          <img
            src="/revolutionizing-architecture-hero.png"
            alt="AI in Architecture and Construction"
            className="w-full h-[400px] rounded-xl object-cover"
          />

          {/* AI Transformation in AEC */}
          <section>
            <h2 className="text-lg font-semibold">{t.revolutionizingArchitectureAITransformation}</h2>
            <p>{t.revolutionizingArchitectureAITransformationText}</p>
          </section>

          {/* Key Benefits */}
          <section>
            <h2 className="text-lg font-semibold">{t.revolutionizingArchitectureKeyBenefits}</h2>
            <p>{t.revolutionizingArchitectureKeyBenefitsText}</p>

            <div className="space-y-4 mt-4">
              {/* Benefit 1 */}
              <div>
                <h3 className="font-semibold text-base">1. {t.revolutionizingArchitectureBenefit1}</h3>
                <p>{t.revolutionizingArchitectureBenefit1Text}</p>
              </div>

              {/* Benefit 2 */}
              <div>
                <h3 className="font-semibold text-base">2. {t.revolutionizingArchitectureBenefit2}</h3>
                <p>{t.revolutionizingArchitectureBenefit2Text}</p>
              </div>

              {/* Benefit 3 */}
              <div>
                <h3 className="font-semibold text-base">3. {t.revolutionizingArchitectureBenefit3}</h3>
                <p>{t.revolutionizingArchitectureBenefit3Text}</p>
              </div>

              {/* Benefit 4 */}
              <div>
                <h3 className="font-semibold text-base">4. {t.revolutionizingArchitectureBenefit4}</h3>
                <p>{t.revolutionizingArchitectureBenefit4Text}</p>
              </div>
            </div>
          </section>

          {/* Interior Design Image */}
          <img
            src="/revolutionizing-architecture-interior.jpg"
            alt="AI Interior Design"
            className="w-full h-[400px] rounded-xl object-cover"
          />

          {/* Real-World Applications */}
          <section>
            <h2 className="text-lg font-semibold">{t.revolutionizingArchitectureRealWorldApplications}</h2>
            <p>{t.revolutionizingArchitectureRealWorldApplicationsText}</p>

            <div className="space-y-4 mt-4">
              {/* Application 1 */}
              <div>
                <h3 className="font-semibold text-base">{t.revolutionizingArchitectureApplication1}</h3>
                <p>{t.revolutionizingArchitectureApplication1Text}</p>
              </div>

              {/* Application 2 */}
              <div>
                <h3 className="font-semibold text-base">{t.revolutionizingArchitectureApplication2}</h3>
                <p>{t.revolutionizingArchitectureApplication2Text}</p>
              </div>

              {/* Application 3 */}
              <div>
                <h3 className="font-semibold text-base">{t.revolutionizingArchitectureApplication3}</h3>
                <p>{t.revolutionizingArchitectureApplication3Text}</p>
              </div>
            </div>
          </section>

          {/* Design Image */}
          <img
            src="/revolutionizing-architecture-design.jpg"
            alt="AI Design Process"
            className="w-full h-[400px] rounded-xl object-cover"
          />

          {/* Future of AI in AEC */}
          <section>
            <h2 className="text-lg font-semibold">{t.revolutionizingArchitectureFuture}</h2>
            <p>{t.revolutionizingArchitectureFutureText}</p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-lg font-semibold">{t.revolutionizingArchitectureConclusion}</h2>
            <p>{t.revolutionizingArchitectureConclusionText}</p>
          </section>

          {/* Call to Action */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">{t.revolutionizingArchitectureCTATitle}</h3>
            <p className="mb-4">
              {t.revolutionizingArchitectureCTAText}
            </p>
            <a
              href={language === "fr" ? "https://app.styly.io/?lang=fr" : "https://app.styly.io"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgba(250,111,64,1)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t.revolutionizingArchitectureCTAButton}
            </a>
          </div>

          {/* Social Links */}
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
                href="https://www.linkedin.com/company/styly-design"
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
    </>
  );
};

export default RevolutionizingArchitecture;
