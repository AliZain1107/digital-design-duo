import React, { useEffect, useContext } from "react";
// import { useLocation } from "react-router-dom";
import {  Language } from "../../lib/i18n";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/layout/SEO";
import { useLanguage } from "../../lib/LanguageProvider";

import { usePageContext } from '../../renderer/usePageContext';



const Page: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  // const location = useLocation();
     const { urlPathname:location } = usePageContext();
//   setInterval(() => {
//     console.log(location);
//   }, 500);

  useEffect(() => {
    // Detect language from URL path
    let pathLang: Language;
    if (location.startsWith("/fr/confidentialite") || location.startsWith("/fr") || location === "/confidentialite") {
      pathLang = "fr";
    } else if (location.startsWith("/en/privacy") || location.startsWith("/en")) {
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
      title: "Privacy Policy - Styly.fr",
      description: "Privacy Policy of Styly.fr - Learn how we collect, use, and protect your personal data. GDPR compliant privacy practices for our AI interior design platform.",
      keywords: "privacy policy, data protection, GDPR, personal data, Styly.fr privacy, AI interior design privacy"
    },
    fr: {
      title: "Politique de Confidentialité - Styly.fr",
      description: "Politique de Confidentialité de Styly.fr - Découvrez comment nous collectons, utilisons et protégeons vos données personnelles. Pratiques de confidentialité conformes au RGPD pour notre plateforme de design d'intérieur IA.",
      keywords: "politique de confidentialité, protection des données, RGPD, données personnelles, confidentialité Styly.fr, confidentialité design IA"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;

  // Generate language-specific URLs for hreflang
  const currentUrl = language === "fr" ? "https://www.styly.fr/confidentialite" : "https://www.styly.fr/en/privacy";
  const alternateUrls = {
    en: "https://www.styly.fr/en/privacy",
    fr: "https://www.styly.fr/confidentialite"
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

        {/* Privacy Policy Content */}
        <main className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-5 sm:px-10 lg:px-20 py-20">
          <div className="flex w-full max-w-4xl flex-col overflow-hidden">

            {/* Header */}
            <div className="flex w-full flex-col items-center text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[rgba(51,51,51,1)] tracking-[-2px] mb-4">
                {t.privacyPolicy}
              </h1>
              <p className="text-lg text-[rgba(102,102,102,1)] font-normal">
                {t.privacyLastUpdated}
              </p>
            </div>

            {/* Privacy Policy Sections */}
            <div className="flex w-full flex-col space-y-8">

              {/* Introduction */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.privacyIntro}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.privacyIntroContent}
                </p>
              </section>

              {/* Section 1: Data We Collect */}
              <section className="flex flex-col space-y-6">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.dataWeCollect}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.dataWeCollectContent}
                </p>

                {/* Account Data */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.accountData}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.accountDataContent}
                  </p>
                </div>

                {/* Styly Image Data */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.stylyImageData}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.stylyImageDataContent}
                  </p>
                </div>

                {/* Browsing Data */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.browsingData}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.browsingDataContent}
                  </p>
                </div>
              </section>

              {/* Section 2: How We Use Your Data */}
              <section className="flex flex-col space-y-6">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.howWeUseData}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.howWeUseDataContent}
                </p>

                {/* Purpose/Legal Basis Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[rgba(51,51,51,1)]">
                          {t.tableHeaderPurpose}
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[rgba(51,51,51,1)]">
                          {t.tableHeaderLegalBasis}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tablePurpose1}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tableLegalBasis1}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tablePurpose2}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tableLegalBasis2}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tablePurpose3}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tableLegalBasis3}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tablePurpose4}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tableLegalBasis4}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tablePurpose5}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-[rgba(102,102,102,1)]">
                          {t.tableLegalBasis5}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Who Has Access to Your Data */}
              <section className="flex flex-col space-y-6">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.whoHasAccess}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.whoHasAccessContent}
                </p>

                {/* Authorities */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.authorities}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.authoritiesContent}
                  </p>
                </div>

                {/* Third-Party Service Providers */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.thirdPartyProviders}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.thirdPartyProvidersContent}
                  </p>
                </div>
              </section>

              {/* Section 4: Data Retention */}
              <section className="flex flex-col space-y-6">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.dataRetention}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.dataRetentionContent}
                </p>

                {/* Account Data Retention */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.retentionAccount}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.retentionAccountContent}
                  </p>
                </div>

                {/* Image Data Retention */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.retentionImages}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.retentionImagesContent}
                  </p>
                </div>

                {/* Browsing Data Retention */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-[rgba(51,51,51,1)]">
                    {t.retentionBrowsing}
                  </h3>
                  <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                    {t.retentionBrowsingContent}
                  </p>
                </div>
              </section>

              {/* Section 5: International Transfers */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.internationalTransfers}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.internationalTransfersContent}
                </p>
              </section>

              {/* Section 6: Data Security */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.dataSecurity}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.dataSecurityContent}
                </p>
              </section>

              {/* Section 7: Your Rights */}
              <section className="flex flex-col space-y-6">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.yourRights}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.yourRightsContent}
                </p>

                {/* Rights List */}
                <ul className="list-disc list-inside space-y-2 text-base text-[rgba(102,102,102,1)] leading-relaxed ml-4">
                  <li>{t.rightAccess}</li>
                  <li>{t.rightRectification}</li>
                  <li>{t.rightErasure}</li>
                  <li>{t.rightRestriction}</li>
                  <li>{t.rightPortability}</li>
                  <li>{t.rightObject}</li>
                  <li>{t.rightWithdrawConsent}</li>
                  <li>{t.rightComplaint}</li>
                </ul>
              </section>

              {/* Section 8: Changes to This Privacy Policy */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.privacyChanges}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.privacyChangesContent}
                </p>
              </section>

              {/* Section 9: Contact */}
              <section className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[rgba(51,51,51,1)]">
                  {t.privacyContact}
                </h2>
                <p className="text-base text-[rgba(102,102,102,1)] leading-relaxed">
                  {t.privacyContactContent}
                </p>
              </section>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default {
    Page,
}
