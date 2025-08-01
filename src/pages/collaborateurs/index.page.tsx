import React, { useEffect, useContext, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SEO from "../../components/layout/SEO";
import ApplicationForm from "../../components/collaborators/ApplicationForm";
import AgencyShowcase from "../../components/collaborators/AgencyShowcase";
import { usePageContext } from '../../renderer/usePageContext';

import {  useLanguage } from "../../lib/i18n";
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
  Medal,
  ExternalLink
} from "lucide-react";

// import { useLanguage } from "@/lib/LanguageProvider";

export const Page: React.FC = () => {
//   const { language, setLanguage, t } = useContext(LanguageContext);
const { language,setLanguage, t } = useLanguage();
  // const location = useLocation();
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
// const { urlPathname:location } = usePageContext();
  
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
  const currentUrl = language === "fr" ? "https://www.styly.fr/fr/collaborateurs" : "https://www.styly.fr/en/collaborators";

  const alternateUrls = {
    en: "https://www.styly.fr/en/collaborators",
    fr: "https://www.styly.fr/fr/collaborateurs"
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

  const partnersSectionRef = useRef<HTMLElement | null>(null);
  const scrollToPartners = () => {
    if (partnersSectionRef.current) {
      partnersSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
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
      <section className="bg-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              {t.becomeCollaborator.replace(/\.$/, "")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-snug text-gray-600 tracking-wide max-w-4xl mx-auto mb-8 animate-fade-in">
              {language === 'fr'
                ? <>
                    Chaque semaine, des milliers de nouveaux concepts IA sont créés sur <span className="font-davetica-wide tracking-wider">STYLY</span>. Rejoignez les esprits créatifs qui les transforment en réalité.
                  </>
                : <>
                    Every week, thousands of new AI concepts are created on <span className="font-davetica-wide tracking-wider">STYLY</span>. Join the creative minds turning them into reality.
                  </>
              }
            </p>
            <div className="max-w-2xl text-gray-600 mb-10 animate-fade-in">
              <p className="font-medium text-lg">
                {t.freeAndQuick}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <div className="relative group">
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
                <button
                  type="button"
                  data-tally-open="31YM8p"
                  data-tally-layout="modal"
                  data-tally-emoji-animation="none"
                  className="relative flex items-center justify-center py-4 px-8 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg transition-all duration-200 hover:scale-105 hover:-translate-y-1 shadow-lg border border-transparent whitespace-nowrap z-10 font-baloo overflow-hidden"
                  style={{minWidth: '200px'}}
                >
                  <span className="relative flex items-center z-10">
                    {language === "fr" ? "Postuler Maintenant" : "Apply Now"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                  <span className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: '0 0 0 2px rgba(168,85,247,0.3), 0 0 16px 4px rgba(168,85,247,0.15)'}} />
                </button>
              </div>
              <div className="relative group">
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
                <button
                  type="button"
                  onClick={scrollToPartners}
                  className="relative flex items-center justify-center py-4 px-8 rounded-lg bg-white text-purple-700 font-bold text-lg transition-all duration-200 hover:bg-purple-50 hover:scale-105 border border-transparent whitespace-nowrap z-10 font-baloo"
                  style={{minWidth: '200px'}}
                >
                  <span className="flex items-center">
                    {language === "fr" ? "Voir les Partenaires" : "See Partners"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section - Styly Pro Launchpad Style */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
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
                {t.notJustLeadGeneration} <span className="relative shimmer-text text-purple-600 font-bold">{t.curatedMatchmaking}</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Styly Pro Launchpad Style */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{t.whatYoullGet}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <Medal className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-purple-700">{t.highIntentClients}</h3>
              <p className="text-gray-600">
                {t.highIntentClientsDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-purple-700">{t.aiEducatedHomeowners}</h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? <>
                      Connectez-vous avec des clients qui comprennent les concepts de design grâce à l'IA de <span className="font-davetica-wide tracking-wider">STYLY</span>.
                    </>
                  : <>
                      Connect with clients who understand design concepts through <span className="font-davetica-wide tracking-wider">STYLY</span>'s AI.
                    </>
                }
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-purple-700">{t.globalVisibility}</h3>
              <p className="text-gray-600">
                {t.globalVisibilityDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-purple-700">
                Official <span className="font-davetica-wide">STYLY</span> Certified Pro badge
              </h3>
              <p className="text-gray-600">
                {t.officialBadgeDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-purple-700">{t.directContact}</h3>
              <p className="text-gray-600">
                {t.directContactDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
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
              <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-purple-700">{t.noCommissions}</h3>
              <p className="text-gray-600">
                {t.noCommissionsDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Chart Section - Styly Pro Launchpad Style */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{t.paymentBenefits}</h2>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-xl p-6 md:p-10">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center font-bold text-lg">
                <h3 className="text-gray-800 mb-2">{t.traditionalAgencies}<br />{t.withoutAI}</h3>
                <div className="h-1 bg-black w-16 mx-auto"></div>
              </div>
              <div className="text-center font-bold text-lg">
                <h3 className="text-gray-800 mb-2">{t.vs}</h3>
              </div>
              <div className="text-center font-bold text-lg">
                <h3 className="text-gray-800 mb-2">
                  {language === 'fr'
                    ? <span className="font-davetica-wide tracking-wider">STYLY</span>
                    : <span className="font-davetica-wide tracking-wider">STYLY</span>
                  }
                </h3>
                <div className="h-1 bg-orange-500 w-16 mx-auto shadow-orange-300 shadow-md"></div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {/* Lead Cost */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? '1 000-1 500 €' : '€1000-1500'}
                </div>
                <div className="text-center font-medium">{t.leadCost}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? '25-333 €' : '€25-333'}
                </div>
              </div>

              {/* Monthly Lead Volume */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? '5-8 non qualifiés' : '5-8 unqualified'}
                </div>
                <div className="text-center font-medium">{t.monthlyLeadVolume}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? '15-20 qualifiés' : '15-20 qualified'}
                </div>
              </div>

              {/* AI Competency */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? 'Aucune expérience' : 'No experience'}
                </div>
                <div className="text-center font-medium">{t.aiCompetency.replace(/\bai\b/gi, 'AI')}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? 'Formation avancée' : 'Advanced training'}
                </div>
              </div>

              {/* Market Position */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? 'Adopteur tardif' : 'Late adopter'}
                </div>
                <div className="text-center font-medium">{t.marketPosition}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? 'Précurseur IA' : 'Early AI adopter'}
                </div>
              </div>

              {/* Service Evolution */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? 'Humain uniquement' : 'Human only'}
                </div>
                <div className="text-center font-medium">{t.serviceEvolution}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? 'IA + expertise humaine' : 'AI + human expertise'}
                </div>
              </div>

              {/* Design Preference Understanding */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? '2-3 réunions (4-6 heures)' : '2-3 meetings (4-6 hours)'}
                </div>
                <div className="text-center font-medium">{t.designPreferenceUnderstanding}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? 'Pré-établi' : 'Pre-established'}
                </div>
              </div>

              {/* Monthly Traffic */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? '500-1 000 général' : '500-1,000 general'}
                </div>
                <div className="text-center font-medium">{t.monthlyTraffic}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? '10 000+ ciblés' : '10,000+ targeted'}
                </div>
              </div>

              {/* Global Reach */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? 'Local uniquement, en déclin' : 'Local only, declining'}
                </div>
                <div className="text-center font-medium">{t.globalReach}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? '10+ pays, en croissance' : '10+ countries, growing'}
                </div>
              </div>

              {/* Portfolio Views Online */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? '200-500/mois' : '200-500/month'}
                </div>
                <div className="text-center font-medium">{t.portfolioViewsOnline}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? '5 000+/mois' : '5,000+/month'}
                </div>
              </div>

              {/* Client Base */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? 'Statique' : 'Static'}
                </div>
                <div className="text-center font-medium">{t.clientBase}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? 'En expansion' : 'Expanding'}
                </div>
              </div>

              {/* Future Readiness */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="bg-black text-white text-center p-3 rounded-lg font-semibold">
                  {language === 'fr' ? 'À risque' : 'At risk'}
                </div>
                <div className="text-center font-medium">{t.futureReadiness}</div>
                <div className="bg-orange-500 text-white text-center p-3 rounded-lg font-semibold shadow-orange-300 shadow-md text-glow-orange">
                  {language === 'fr' ? 'Préparé' : 'Prepared'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Placement Section - Styly Pro Launchpad Style */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {language === 'fr'
              ? <>
                  Démarquez-vous avec <span className="font-davetica-wide tracking-wider">STYLY</span> Pro
                </>
              : <>
                  Stand Out with <span className="font-davetica-wide tracking-wider">STYLY</span> Pro
                </>
            }
          </h2>

          {/* Styly Pro Journey Timeline */}
          <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="bg-orange-500 text-white rounded-full p-4 shadow-lg mb-4 animate-bounce">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">
                {language === 'fr' ? 'Soyez découvert' : 'Get Discovered'}
              </h4>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Exposez votre portfolio et attirez des clients qualifiés dès le premier jour.'
                  : 'Showcase your portfolio and attract high-intent clients from day one.'}
              </p>
            </div>
            {/* Connector */}
            <div className="hidden md:block flex-1 h-1 bg-purple-500 rounded-full my-8 animate-shimmer-line shadow-glow-white"></div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="bg-purple-500 text-white rounded-full p-4 shadow-lg mb-4 animate-bounce delay-200">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">
                {language === 'fr' ? 'Travaillez plus intelligemment' : 'Work Smarter'}
              </h4>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Exploitez les outils IA pour obtenir des résultats remarquables plus rapidement et avec moins d\'effort.'
                  : 'Leverage AI tools to deliver stunning results faster and with less effort.'}
              </p>
            </div>
            {/* Connector */}
            <div className="hidden md:block flex-1 h-1 bg-purple-500 rounded-full my-8 animate-shimmer-line shadow-glow-white"></div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="bg-yellow-500 text-white rounded-full p-4 shadow-lg mb-4 animate-bounce delay-400">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">
                {language === 'fr' ? 'Grandissez ensemble' : 'Grow Together'}
              </h4>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Rejoignez une communauté dynamique, soyez mis en avant et saisissez de nouvelles opportunités.'
                  : 'Join a thriving community, get featured, and unlock new opportunities.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Showcase Section */}
      {/* <AgencyShowcase ref={partnersSectionRef} /> */}

      {/* Application CTA Section - Styly Pro Launchpad Style */}
      <section className="bg-gradient-to-b from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fr'
                ? <>
                    Prêt à être recommandé par <span className="font-davetica-wide tracking-wider">STYLY</span> ?
                  </>
                : <>
                    Ready to Be Recommended by <span className="font-davetica-wide tracking-wider">STYLY</span>?
                  </>
              }
            </h2>

            <p className="text-xl mb-10">
              {t.inviteOnlyExperience}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center justify-center text-lg animate-cta-pulse hover:scale-105 hover:shadow-2xl hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
                onClick={() => setIsApplicationFormOpen(true)}
              >
                {t.applyNow} <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="mt-10">
              <p className="text-white/90">
                {t.questionsReachUs}{" "}
                <a href="mailto:partners@styly.fr" className="underline hover:text-white transition-colors">
                  partners@styly.fr
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

export default{
    Page,
}
