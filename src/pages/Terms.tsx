import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext, Language } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/layout/SEO";

const Terms: React.FC = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    // Detect language from URL path
    let pathLang: Language;
    if (location.pathname.startsWith("/fr/conditions") || location.pathname.startsWith("/fr") || location.pathname === "/conditions") {
      pathLang = "fr";
    } else if (location.pathname.startsWith("/en/terms") || location.pathname.startsWith("/en")) {
      pathLang = "en";
    } else {
      // Default to French for legacy routes
      pathLang = "fr";
    }
    setLanguage(pathLang);
  }, [location.pathname, setLanguage]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoMeta = {
    en: {
      title: "Terms of Service - Styly.io",
      description: "Terms and Conditions of Use for Styly.io - AI-powered interior design platform. Read our legal terms, user obligations, and service conditions.",
      keywords: "terms of service, legal terms, user agreement, Styly.io terms, AI interior design terms"
    },
    fr: {
      title: "Conditions Générales d'Utilisation - Styly.io",
      description: "Conditions Générales d'Utilisation de Styly.io - plateforme de design d'intérieur alimentée par l'IA. Consultez nos conditions légales, obligations des utilisateurs et conditions de service.",
      keywords: "conditions générales, conditions légales, accord utilisateur, conditions Styly.io, conditions design IA"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;

  // Generate language-specific URLs for hreflang
  const currentUrl = language === "fr" ? "https://styly.io/fr/conditions" : "https://styly.io/en/terms";
  const alternateUrls = {
    en: "https://styly.io/en/terms",
    fr: "https://styly.io/fr/conditions"
  };

  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <SEO
        title={currentMeta.title}
        description={currentMeta.description}
        keywords={currentMeta.keywords}
        ogUrl={currentUrl}
        language={language}
        alternateUrls={alternateUrls}
      />
      <div className="flex w-full flex-col">
        <Navbar />

        {/* Terms Content */}
        <main className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-5 sm:px-10 lg:px-20 py-20">
          <div className="flex w-full max-w-4xl flex-col overflow-hidden">

            {/* Header */}
            <div className="flex w-full flex-col items-center text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[rgba(51,51,51,1)] tracking-[-2px] mb-4">
                {t.termsOfService}
              </h1>
              <p className="text-lg text-[rgba(102,102,102,1)] font-normal">
                {t.termsLastUpdated}
              </p>
            </div>

            {/* Terms Sections */}
            <div className="flex w-full flex-col space-y-8">

              {/* Legal Notice */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.legalNotice}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.legalNoticeContent}
                </p>
              </section>

              {/* Hosting */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.hosting}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.hostingContent}
                </p>
              </section>

              {/* Definitions */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.definitions}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.definitionsContent}
                </p>
              </section>

              {/* General Conditions */}
              <section className="flex flex-col space-y-6">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.generalConditions}
                </h2>

                {/* Article 1 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article1}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article1Content}
                  </p>
                </div>

                {/* Article 2 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article2}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article2Content}
                  </p>
                </div>

                {/* Article 3 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article3}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article3Content}
                  </p>
                </div>

                {/* Article 4 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article4}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article4Content}
                  </p>
                </div>

                {/* Article 5 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article5}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article5Content}
                  </p>
                </div>

                {/* Article 6 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article6}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article6Content}
                  </p>
                </div>

                {/* Article 7 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article7}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article7Content}
                  </p>
                </div>

                {/* Article 8 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article8}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article8Content}
                  </p>
                </div>

                {/* Article 9 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article9}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article9Content}
                  </p>
                </div>

                {/* Article 10 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article10}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article10Content}
                  </p>
                </div>

                {/* Article 11 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article11}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article11Content}
                  </p>
                </div>

                {/* Article 12 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.article12}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.article12Content}
                  </p>
                </div>
              </section>

              {/* Article 13: Free Trial and Paid Plans */}
              <section className="flex flex-col space-y-6">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.article13}
                </h2>

                {/* Free Trial */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.freeTrial}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.freeTrialContent}
                  </p>
                </div>

                {/* Paid Plan */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.paidPlan}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.paidPlanContent}
                  </p>
                </div>

                {/* No Refund Policy */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.noRefundPolicy}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.noRefundPolicyContent}
                  </p>
                </div>

                {/* User Responsibility */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.userResponsibility}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.userResponsibilityContent}
                  </p>
                </div>
              </section>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Terms;
