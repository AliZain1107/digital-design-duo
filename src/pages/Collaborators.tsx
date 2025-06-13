import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/layout/SEO";
import ApplicationForm from "@/components/collaborators/ApplicationForm";
import AgencyShowcase from "@/components/collaborators/AgencyShowcase";
import { LanguageContext, Language } from "@/lib/i18n";
import {
  CheckCircle,
  Users,
  Zap,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  Settings,
  FileText,
  MapPin,
  Quote,
  ArrowRight,
  AlertTriangle,
  BadgeCheck,
  Globe,
  MessageSquare,
  Medal
} from "lucide-react";

const Collaborators: React.FC = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const location = useLocation();
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  // Auto-scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle language routing
  useEffect(() => {
    // No need to set language based on URL - it's handled by the LanguageProvider
    // The language state is managed globally and will update the content automatically
  }, []);

  // SEO metadata
  const seoMeta = {
    en: {
      title: "Styly Certified Collaborators - AI Interior Designers & Architects | Free AI Interior Design",
      description: "Join Styly's network of AI-certified interior designers and architects. Access pre-qualified clients, grow your business with artificial intelligence, and become an expert in free AI interior design.",
      keywords: "styly collaborators, certified interior designers, AI architects, free AI interior design, free interior design software, AI interior decorator, AI home staging, AI home renovation, qualified design clients, design partners, professional design certification, interior ai, ai room design, ai interior design free"
    },
    fr: {
      title: "Collaborateurs Certifiés Styly - Designers & Architectes d'Intérieur IA | Design Intérieur IA Gratuit",
      description: "Rejoignez le réseau Styly de designers d'intérieur et architectes certifiés IA. Accédez à des clients pré-qualifiés, développez votre activité avec l'intelligence artificielle et devenez un expert en design intérieur IA gratuit.",
      keywords: "collaborateurs styly, designers intérieur certifiés, architectes IA, design intérieur IA gratuit, logiciel design intérieur gratuit, décorateur intérieur IA, home staging IA, rénovation maison IA, clients design qualifiés, partenaires design, certification professionnelle design, ia design intérieur, ia décoration intérieur gratuit, ia aménagement intérieur gratuit, home staging virtuel, decorateur d'interieur, renovation maison, construction maison"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const currentUrl = language === "fr" ? "https://styly.io/fr/collaborateurs" : "https://styly.io/en/collaborators";

  const alternateUrls = {
    en: "https://styly.io/en/collaborators",
    fr: "https://styly.io/fr/collaborateurs"
  };

  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: t.clientsWithVision,
      description: t.clientsWithVisionDescription
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: t.designOnYourTerms,
      description: t.designOnYourTermsDescription
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: t.builtInExposure,
      description: t.builtInExposureDescription
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: t.realCreativityAI,
      description: t.realCreativityAIDescription
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: t.forStudiosAndSolo,
      description: t.forStudiosAndSoloDescription
    }
  ];

  const steps = [
    {
      number: "01",
      title: t.stepOne,
      description: t.stepOneDescription,
      icon: <FileText className="w-6 h-6 text-white" />
    },
    {
      number: "02",
      title: t.stepTwo,
      description: t.stepTwoDescription,
      icon: <CheckCircle className="w-6 h-6 text-white" />
    },
    {
      number: "03",
      title: t.stepThree,
      description: t.stepThreeDescription,
      icon: <Users className="w-6 h-6 text-white" />
    }
  ];



  return (
    <div className="bg-white flex flex-col w-full min-h-screen" key={`collaborators-${language}`}>
      <SEO
        title={currentMeta.title}
        description={currentMeta.description}
        keywords={currentMeta.keywords}
        ogUrl={currentUrl}
        language={language}
        alternateUrls={alternateUrls}
      />
      
      <Navbar />

      {/* Hero Section - Styly Pro Launchpad Style */}
      <section className="bg-gradient-to-b from-purple-100/30 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              {t.becomeCollaborator}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-8 animate-fade-in">
              {t.joinOurNetwork}
            </p>
            <div className="max-w-2xl text-gray-600 mb-10 animate-fade-in">
              <p className="mb-4">
                {t.collaboratorHeroDescription}
              </p>
              <p className="font-medium text-lg">
                {t.freeAndQuick}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center justify-center text-lg"
                onClick={() => setIsApplicationFormOpen(true)}
              >
                {t.becomeDesignPartner} <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium px-8 py-3 rounded-full transition-all duration-200 text-lg"
              >
                {t.collaborators}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Showcase Section */}
      <AgencyShowcase />

      {/* Problem Section - Styly Pro Launchpad Style */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center justify-center bg-red-100 p-3 rounded-full mb-4">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">{t.theProblem}</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mb-12">
              {t.problemDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">{t.deadEndDMs}</h3>
              <p className="text-gray-600">
                {t.deadEndDMsDescription}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">{t.budgetlessCollectors}</h3>
              <p className="text-gray-600">
                {t.budgetlessCollectorsDescription}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">{t.endlessPitching}</h3>
              <p className="text-gray-600">
                {t.endlessPitchingDescription}
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-center text-gray-700 text-lg mb-10">
              {language === 'fr' ? (
                <>
                  Pendant ce temps, <span className="font-bold text-purple-600">{t.stylyUsersReady}</span>. {t.stylyUsersDescription}
                </>
              ) : (
                <>
                  Meanwhile, <span className="font-bold text-purple-600">{t.stylyUsersReady}</span>. {t.stylyUsersDescription}
                </>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-purple-600 font-bold text-2xl md:text-3xl mb-2">"47%"</p>
              <p className="text-gray-600">
                of design projects fail due to poor communication.
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-purple-600 font-bold text-2xl md:text-3xl mb-2">"87%"</p>
              <p className="text-gray-600">
                of saved inspiration images are never executed.
              </p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-purple-600 font-bold text-2xl md:text-3xl mb-2">"€4,800+"</p>
              <p className="text-gray-600">
                is the cost of traditional home staging setups, leading to 20% higher sale prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section - Styly Pro Launchpad Style */}
      <section className="bg-purple-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center justify-center bg-purple-600/10 p-3 rounded-full mb-4">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">{t.stylyAdvantage}</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mb-8">
              {t.stylyAdvantageDescription}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800 mb-8 text-center">{t.getDiscoveredBy}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">{t.haveAIDesigns}</p>
                  <p className="text-gray-600 mt-2 text-sm">{t.haveAIDesignsDescription}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">{t.knowStyleSpace}</p>
                  <p className="text-gray-600 mt-2 text-sm">{t.knowStyleSpaceDescription}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">{t.activelyLooking}</p>
                  <p className="text-gray-600 mt-2 text-sm">{t.activelyLookingDescription}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-purple-100 p-6 rounded-lg">
              <p className="text-center text-xl font-medium text-gray-800">
                {t.notJustLeadGeneration} <span className="text-purple-600 font-bold">{t.curatedMatchmaking}</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Styly Pro Launchpad Style */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center mb-16">{t.whatYoullGet}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <Medal className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{t.highIntentClients}</h3>
              <p className="text-gray-600">
                {t.highIntentClientsDescription}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{t.aiEducatedHomeowners}</h3>
              <p className="text-gray-600">
                {t.aiEducatedHomeownersDescription}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{t.globalVisibility}</h3>
              <p className="text-gray-600">
                {t.globalVisibilityDescription}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{t.officialBadge}</h3>
              <p className="text-gray-600">
                {t.officialBadgeDescription}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{t.directContact}</h3>
              <p className="text-gray-600">
                {t.directContactDescription}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-purple-600">
                  <path d="M9 14l6-6" />
                  <path d="M7 11l-1.5 1.5" />
                  <path d="M14.5 7.5L16 9" />
                  <path d="M8 16l2-2" />
                  <path d="M16 16l-4-4" />
                  <path d="M20 18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">{t.noCommissions}</h3>
              <p className="text-gray-600">
                {t.noCommissionsDescription}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Comparison Chart Section - Styly Pro Launchpad Style */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{t.paymentBenefits}</h2>
            <p className="text-xl font-medium text-center">{t.comparisonChart}</p>
          </div>

          <div className="max-w-6xl mx-auto bg-purple-100/30 rounded-xl p-6 md:p-10">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center font-bold text-lg">
                <h3 className="text-gray-800 mb-2">{t.traditionalAgencies}<br />{t.withoutAI}</h3>
                <div className="h-1 bg-black w-16 mx-auto"></div>
              </div>
              <div className="text-center font-bold text-lg">
                <h3 className="text-gray-800 mb-2">{t.vs}</h3>
              </div>
              <div className="text-center font-bold text-lg">
                <h3 className="text-gray-800 mb-2">{t.styly}</h3>
                <div className="h-1 bg-green-500 w-16 mx-auto"></div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {/* Lead Cost */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">€1000-1500</div>
                <div className="text-center font-medium">{t.leadCost}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">€25-333</div>
              </div>

              {/* Monthly Lead Volume */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">5-8 UNQUALIFIED</div>
                <div className="text-center font-medium">{t.monthlyLeadVolume}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">15-20 QUALIFIED</div>
              </div>

              {/* AI Competency */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">NO EXPERIENCE</div>
                <div className="text-center font-medium">{t.aiCompetency}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">ADVANCED<br />TRAINING</div>
              </div>

              {/* Market Position */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">LATE ADOPTER</div>
                <div className="text-center font-medium">{t.marketPosition}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">EARLY AI<br />ADOPTER</div>
              </div>

              {/* Service Evolution */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">HUMAN ONLY</div>
                <div className="text-center font-medium">{t.serviceEvolution}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">AI + HUMAN<br />EXPERTISE</div>
              </div>

              {/* Design Preference Understanding */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">2-3 MEETINGS (4-6<br />HOURS)</div>
                <div className="text-center font-medium">{t.designPreferenceUnderstanding}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">PRE-<br />ESTABLISHED</div>
              </div>

              {/* Monthly Traffic */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">500-1,000<br />GENERAL</div>
                <div className="text-center font-medium">{t.monthlyTraffic}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">10,000+<br />TARGETED</div>
              </div>

              {/* Global Reach */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">LOCAL ONLY,<br />DECLINING</div>
                <div className="text-center font-medium">{t.globalReach}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">10+<br />COUNTRIES,<br />GROWING</div>
              </div>

              {/* Portfolio Views Online */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">200-500/MONTH</div>
                <div className="text-center font-medium">{t.portfolioViewsOnline}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">5,000+/MONTH</div>
              </div>

              {/* Client Base */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">STATIC</div>
                <div className="text-center font-medium">{t.clientBase}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">EXPANDING</div>
              </div>

              {/* Future Readiness */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">AT RISK</div>
                <div className="text-center font-medium">{t.futureReadiness}</div>
                <div className="bg-green-500 text-white text-center p-3 rounded-lg font-semibold">PREPARED</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg font-semibold text-gray-800">{t.joinStylyTransform}</p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-200 inline-flex items-center justify-center mt-5"
              onClick={() => setIsApplicationFormOpen(true)}
            >
              {t.becomeCertifiedPro}
            </button>
          </div>
        </div>
      </section>

      {/* Premium Placement Section - Styly Pro Launchpad Style */}
      <section className="bg-purple-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center mb-12">{t.premiumPlacement}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800 mb-6">{t.stylyHighlightPros}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t.aiProjectExports}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t.stylyNewsletters}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t.proPartnerDirectory}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800 mb-6">{t.goToNameWhen}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t.couplesDisagree}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t.realtorsWantStaging}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t.homeownersNeedProfessional}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA Section - Styly Pro Launchpad Style */}
      <section className="bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.readyToBeRecommended}
            </h2>

            <p className="text-xl mb-10">
              {t.inviteOnlyExperience}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center justify-center text-lg"
                onClick={() => setIsApplicationFormOpen(true)}
              >
                {t.applyNow} <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="mt-10">
              <p className="text-white/90">
                {t.questionsReachUs}{" "}
                <a href="mailto:partners@styly.io" className="underline hover:text-white transition-colors">
                  partners@styly.io
                </a>{" "}
                {t.orDMUs}{" "}
                <a href="https://instagram.com/stylyio" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                  @stylyio
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Application Form Modal */}
      <ApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
      />
    </div>
  );
};

export default Collaborators;
