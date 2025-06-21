import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/layout/SEO";
import { LanguageContext, Language } from "@/lib/i18n";
import {
  Code,
  Zap,
  Shield,
  Globe,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Cpu,
  Database,
  Palette,
  Home,
  ShoppingCart,
  Building,
  Smartphone,
  Monitor,
  MessageSquare,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react";
import { useCountUp } from "../components/home/Stats";

const ServicesAPI: React.FC = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const location = useLocation();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Auto-scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle language routing - now uses current language state for seamless switching
  useEffect(() => {
    // No need to set language based on URL - it's handled by the LanguageProvider
    // The language state is managed globally and will update the content automatically
  }, []);

  // SEO metadata
  const seoMeta = {
    en: {
      title: "Styly AI API Suite - Advanced Visual Intelligence Platform | AI Interior Design API",
      description: "Integrate Styly's powerful AI APIs into your platform. Lightning-fast AI floor generation, wall design, moodboards, real estate enhancement, and product visualization APIs for developers.",
      keywords: "AI interior design API, visual intelligence API, AI floor generation API, AI wall design API, AI moodboard API, real estate enhancement API, product visualization API, interior design software API, AI home staging API, room design API, free AI interior design API, ai interior design free, interior ai, ai room design"
    },
    fr: {
      title: "Suite API IA Styly - Plateforme d'Intelligence Visuelle Avancée | API Design Intérieur IA",
      description: "Intégrez les puissantes API IA de Styly dans votre plateforme. API ultra-rapides pour génération de sols IA, design de murs, moodboards, amélioration immobilière et visualisation produits.",
      keywords: "API design intérieur IA, API intelligence visuelle, API génération sol IA, API design mur IA, API moodboard IA, API amélioration immobilière, API visualisation produit, API logiciel design intérieur, API home staging IA, API design chambre, API design intérieur gratuit, ia design intérieur gratuit, ia décoration intérieur gratuit, ia aménagement intérieur gratuit"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const currentUrl = language === "fr" ? "https://styly.io/fr/services-api" : "https://styly.io/en/services-api";

  const alternateUrls = {
    en: "https://styly.io/en/services-api",
    fr: "https://styly.io/fr/services-api"
  };

  const apiServices = [
    {
      id: 1,
      name: language === "fr" ? "API Génération de Sols" : "Floor Generation API",
      description: language === "fr"
        ? "Générez des designs de sols réalistes et personnalisés en quelques secondes"
        : "Generate realistic and customized floor designs in seconds",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      endpoint: "/api/v1/floor-generation",
      features: language === "fr"
        ? ["Matériaux réalistes", "Styles personnalisables", "Haute résolution", "Intégration facile"]
        : ["Realistic materials", "Customizable styles", "High resolution", "Easy integration"]
    },
    {
      id: 2,
      name: language === "fr" ? "API Génération de Murs" : "Wall Generation API",
      description: language === "fr"
        ? "Créez des designs de murs sophistiqués avec textures et couleurs"
        : "Create sophisticated wall designs with textures and colors",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      endpoint: "/api/v1/wall-generation",
      features: language === "fr"
        ? ["Textures variées", "Couleurs personnalisées", "Éclairage réaliste", "Rendu instantané"]
        : ["Varied textures", "Custom colors", "Realistic lighting", "Instant rendering"]
    },
    {
      id: 3,
      name: language === "fr" ? "API Générateur de Moodboard" : "Moodboard Generator API",
      description: language === "fr"
        ? "Créez des moodboards cohérents et inspirants automatiquement"
        : "Create cohesive and inspiring moodboards automatically",
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      endpoint: "/api/v1/moodboard-generation",
      features: language === "fr"
        ? ["Palettes harmonieuses", "Styles cohérents", "Export multiple", "Personnalisation avancée"]
        : ["Harmonious palettes", "Cohesive styles", "Multiple exports", "Advanced customization"]
    },
    {
      id: 4,
      name: language === "fr" ? "API Amélioration Immobilière" : "Real Estate Enhancement API",
      description: language === "fr"
        ? "Transformez les photos immobilières avec le home staging virtuel"
        : "Transform real estate photos with virtual home staging",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      endpoint: "/api/v1/real-estate-enhancement",
      features: language === "fr"
        ? ["Home staging virtuel", "Amélioration photos", "Styles multiples", "ROI immédiat"]
        : ["Virtual home staging", "Photo enhancement", "Multiple styles", "Immediate ROI"]
    },
    {
      id: 5,
      name: language === "fr" ? "API Visualisation Produit" : "Product Visualization API",
      description: language === "fr"
        ? "Intégrez des produits dans des environnements réalistes"
        : "Integrate products into realistic environments",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      endpoint: "/api/v1/product-visualization",
      features: language === "fr"
        ? ["Placement réaliste", "Éclairage adaptatif", "Contexte automatique", "E-commerce ready"]
        : ["Realistic placement", "Adaptive lighting", "Automatic context", "E-commerce ready"]
    }
  ];

  // Animated counters for API Advantages section
  const uptimeCounter = useCountUp(99.9, 2000);
  const responseTimeCounter = useCountUp(2, 2000);
  const stylesCounter = useCountUp(50, 2000);
  const supportCounter = useCountUp(24, 2000);
  const apiAdvantageCounters = [uptimeCounter, responseTimeCounter, stylesCounter, supportCounter];
  const apiAdvantageNumbers = [99.9, 2, 50, 24];

  // Ref for API Advantages section
  const apiAdvantagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            uptimeCounter.setIsIntersecting(true);
            responseTimeCounter.setIsIntersecting(true);
            stylesCounter.setIsIntersecting(true);
            supportCounter.setIsIntersecting(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    const refCurrent = apiAdvantagesRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [uptimeCounter, responseTimeCounter, stylesCounter, supportCounter]);

  // Typewriter animation for code example
  const codeString = `// ${language === "fr" ? "Générer un design de sol IA" : "Generate AI floor design"}
const response = await fetch('https://api.styly.io/v1/floor-generation', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    style: 'modern',
    material: 'hardwood',
    room_type: 'living_room',
    dimensions: { width: 400, height: 300 }
  })
});

const result = await response.json();
console.log(result.design_url); // ${language === "fr" ? "URL du design généré" : "Generated design URL"}`;
  const nextLine = language === "fr"
    ? "// Essayez-le maintenant sur votre plateforme."
    : "// Try it now on your platform.";
  const [typed, setTyped] = React.useState("");
  const [showNext, setShowNext] = React.useState(false);
  React.useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;
    function type() {
      if (i <= codeString.length) {
        setTyped(codeString.slice(0, i));
        i++;
        timeout = setTimeout(type, 7); // really fast
      } else {
        setShowNext(true);
      }
    }
    setTyped("");
    setShowNext(false);
    type();
    return () => clearTimeout(timeout);
  }, [language, codeString]);

  return (
    <div className="bg-white flex flex-col w-full min-h-screen" key={`services-api-${language}`}>
      <SEO
        title={currentMeta.title}
        description={currentMeta.description}
        keywords={currentMeta.keywords}
        ogUrl={currentUrl}
        language={language}
        alternateUrls={alternateUrls}
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Animated shimmer background (copied from homepage) */}
        <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.13 }}>
          <div
            className="absolute inset-0 w-full h-full animate-shimmer-bg"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.2) 20%, rgba(249, 115, 22, 0.3) 50%, rgba(147, 51, 234, 0.2) 80%, transparent 100%)',
              width: '200%',
              height: '100%',
              filter: 'blur(1px)'
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              {language === "fr" ? "Suite d'APIs" : "API Suite"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-snug text-gray-600 tracking-wide max-w-4xl mx-auto mb-8 animate-fade-in">
              {language === "fr" 
                ? "La Plateforme d'Intelligence Visuelle la Plus Avancée pour le Design, le Retail et l'Immobilier."
                : "The Most Advanced Visual Intelligence Platform for Design, Retail & Real Estate."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <div className="relative group">
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
                <button
                  className="relative flex items-center justify-center py-4 px-8 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg transition-all duration-200 hover:scale-105 hover:-translate-y-1 shadow-lg border border-transparent whitespace-nowrap z-10 font-baloo overflow-hidden"
                  style={{minWidth: '200px'}} // scale for hero
                  onClick={() => setIsContactFormOpen(true)}
                >
                  <span className="relative flex items-center z-10">
                    {language === "fr" ? "Demander l'Accès" : "Request Access"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                  <span className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: '0 0 0 2px rgba(168,85,247,0.3), 0 0 16px 4px rgba(168,85,247,0.15)'}} />
                </button>
              </div>
              <div className="relative group">
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
                <button
                  className="relative flex items-center justify-center py-4 px-8 rounded-lg bg-white text-purple-700 font-bold text-lg transition-all duration-200 hover:bg-purple-50 hover:scale-105 border border-transparent whitespace-nowrap z-10 font-baloo"
                  style={{minWidth: '200px'}} // scale for hero
                >
                  <span className="flex items-center">
                    {language === "fr" ? "Explorer la Documentation" : "Explore API Docs"}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Seamless blend to white at bottom (matches homepage) */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
      </section>

      {/* API Advantages Section (moved up) */}
      <section ref={apiAdvantagesRef} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "fr"
                ? "Pourquoi Choisir Nos APIs ?"
                : "Why Choose Our APIs?"
              }
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Advantage Card 1 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">
                {Number(uptimeCounter.count).toFixed(1)}
                <span className="align-super text-2xl md:text-3xl">%</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "De disponibilité garantie avec notre infrastructure cloud robuste et redondante"
                  : "Uptime guaranteed with our robust and redundant cloud infrastructure"
                }
              </p>
            </div>

            {/* Advantage Card 2 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">
                &lt;{Number(responseTimeCounter.count)}
                <span className="align-super text-2xl md:text-3xl">s</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "Temps de réponse moyen pour la génération de designs IA haute qualité"
                  : "Average response time for high-quality AI design generation"
                }
              </p>
            </div>

            {/* Advantage Card 3 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">
                {Number(stylesCounter.count)}+
              </div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "Styles de design et configurations personnalisables pour tous vos besoins"
                  : "Design styles and customizable configurations for all your needs"
                }
              </p>
            </div>

            {/* Advantage Card 4 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">
                {Number(supportCounter.count)}/7
              </div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "Support technique expert disponible pour vous accompagner dans votre intégration"
                  : "Expert technical support available to assist with your integration"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core APIs Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "fr" ? "Nos APIs Principales" : "Our Core APIs"}
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-snug text-gray-600 tracking-wide max-w-4xl mx-auto mb-8">
              {language === "fr"
                ? "5 APIs puissantes pour transformer votre plateforme avec l'intelligence artificielle"
                : "Add next-gen AI design tools to your website or app."
              }
            </p>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {apiServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-purple-200/50 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Premium Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} - Professional demonstration`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                      {language === "fr" ? "API" : "API"}
                    </span>
                  </div>

                  {/* Endpoint Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2">
                    <code className="text-xs text-white font-mono">{service.endpoint}</code>
                  </div>
                </div>

                {/* Premium Content */}
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Premium Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Premium CTA Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm">
                    {language === "fr" ? "Explorer l'API" : "Explore API"}
                  </button>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/0 via-purple-400/5 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Intégration Simple" : "Simple Integration"}
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-snug text-gray-600 tracking-wide max-w-4xl mx-auto mb-8">
              {language === "fr"
                ? "Commencez à utiliser nos APIs en quelques lignes de code."
                : "Start using our APIs with just a few lines of code."
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">
                  {language === "fr" ? "Exemple d'API" : "API Example"}
                </span>
              </div>
              <pre className="text-green-400 text-sm leading-relaxed min-h-[320px]">
                {typed}
                {showNext && (
                  <>
                    {"\n"}
                    <span className="text-orange-400">{nextLine}</span>
                    <span className="inline-block w-2 h-5 align-middle bg-orange-400 animate-pulse ml-1" style={{borderRadius:2}}></span>
                  </>
                )}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Compatibility Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
              {language === "fr" ? "Fonctionne parfaitement avec votre plateforme" : "Works seamlessly with your platform"}
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-snug text-gray-600 tracking-wide max-w-4xl mx-auto mb-8">
              {language === "fr"
                ? "Compatible avec les principales plateformes e-commerce comme Shopify, WooCommerce, Magento, WordPress, Wix, et plus — aucun développement personnalisé nécessaire."
                : "Seamlessly integrates with all major e-commerce and website platforms."
              }
            </p>
          </div>

          {/* Platform Compatibility Text */}
          <div className="mb-8">
            <div className="text-center rounded-2xl p-8 border border-purple-100 animate-gradient-x bg-[length:200%_200%] bg-gradient-to-r from-purple-50 via-orange-100 to-orange-50" style={{animation: 'gradient-x 6s ease-in-out infinite'}}>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  {[
                    "Shopify",
                    "WooCommerce",
                    "Magento",
                    "WordPress",
                    "BigCommerce",
                    "Wix",
                    "Squarespace",
                    language === "fr" ? "+ Plus" : "+ More"
                  ].map((platform, idx) => (
                    <div
                      key={platform}
                      className={`flex items-center justify-center p-3 bg-white rounded-lg shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg ${idx === 7 ? 'text-purple-600 font-medium' : 'font-medium'}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes gradient-x {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Pour Qui C'est Conçu" : "Who It's Built For"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Animated Illustration Box */}
              <div className="w-24 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-md border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center relative animate-float">
                <Monitor className="w-10 h-10 text-purple-600 animate-bounce-slow" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {language === "fr" ? "Plateformes Design" : "Design Platforms"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr"
                  ? "Intégrez l'IA dans vos outils de design existants"
                  : "Integrate AI into your existing design tools"
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Animated Illustration Box */}
              <div className="w-24 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-md border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center relative animate-float">
                <Building className="w-10 h-10 text-blue-600 animate-bounce-slow" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {language === "fr" ? "Immobilier" : "Real Estate"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr"
                  ? "Améliorez vos listings avec le home staging virtuel"
                  : "Enhance your listings with virtual home staging"
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Animated Illustration Box */}
              <div className="w-24 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-md border border-green-100 bg-gradient-to-br from-green-50 to-lime-50 flex items-center justify-center relative animate-float">
                <ShoppingCart className="w-10 h-10 text-green-600 animate-bounce-slow" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {language === "fr" ? "E-commerce" : "E-commerce"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr"
                  ? "Visualisez vos produits dans des environnements réels"
                  : "Visualize your products in real environments"
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Animated Illustration Box */}
              <div className="w-24 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-md border border-orange-100 bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center relative animate-float">
                <Smartphone className="w-10 h-10 text-orange-600 animate-bounce-slow" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {language === "fr" ? "Applications Mobiles" : "Mobile Apps"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr"
                  ? "Ajoutez des fonctionnalités IA à vos apps"
                  : "Add AI capabilities to your mobile apps"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Ce Que Vous Pouvez Construire" : "What You Can Build With It"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl mb-4">
                {language === "fr" ? "Plateforme de Design Intérieur" : "Interior Design Platform"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "fr"
                  ? "Créez une plateforme complète avec génération automatique de designs, moodboards et visualisations 3D."
                  : "Create a complete platform with automatic design generation, moodboards and 3D visualizations."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {language === "fr" ? "Génération automatique de designs" : "Automatic design generation"}
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {language === "fr" ? "Moodboards personnalisés" : "Custom moodboards"}
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {language === "fr" ? "Visualisation 3D en temps réel" : "Real-time 3D visualization"}
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl mb-4">
                {language === "fr" ? "Application E-commerce" : "E-commerce Application"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "fr"
                  ? "Intégrez vos produits dans des environnements réalistes pour augmenter les conversions."
                  : "Integrate your products into realistic environments to increase conversions."
                }
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {language === "fr" ? "Visualisation produit contextuelle" : "Contextual product visualization"}
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {language === "fr" ? "Recommandations automatiques" : "Automatic recommendations"}
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {language === "fr" ? "Augmentation des conversions" : "Increased conversions"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                <path d="M0 400C100 350 200 300 300 250C350 225 375 200 400 175V400H0Z" fill="white"/>
                <path d="M0 380C80 340 160 300 240 260C290 235 315 210 340 185C360 165 380 145 400 125V400H0Z" fill="white" fillOpacity="0.5"/>
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {language === "fr"
                  ? "Prêt à élever votre entreprise avec des solutions IA sur mesure ?"
                  : "Ready to elevate your business with tailored AI solutions?"
                }
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                {language === "fr"
                  ? "Nous offrons des solutions personnalisées pour améliorer l'engagement, augmenter les conversions et stimuler le succès. Cliquez sur le bouton \"Nous Contacter\" ci-dessous pour vous connecter avec notre équipe et découvrir comment nous pouvons soutenir vos besoins uniques !"
                  : "We offer personalized solutions to enhance engagement, boost conversions, and drive success. Click the \"Contact Us\" button below to connect with our team and discover how we can support your unique needs!"
                }
              </p>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="inline-block bg-white text-orange-600 font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-200 font-baloo z-10 animate-cta-pulse"
              >
                {language === "fr" ? "Nous Contacter" : "Contact Us"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">
                {language === "fr" ? "Demander l'Accès API" : "Request API Access"}
              </h3>
              <button
                onClick={() => setIsContactFormOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "fr" ? "Nom complet" : "Full Name"}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={language === "fr" ? "Votre nom" : "Your name"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "fr" ? "Email professionnel" : "Work Email"}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={language === "fr" ? "votre@entreprise.com" : "you@company.com"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "fr" ? "Entreprise" : "Company"}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={language === "fr" ? "Nom de votre entreprise" : "Your company name"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "fr" ? "Cas d'usage" : "Use Case"}
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">
                    {language === "fr" ? "Sélectionnez votre cas d'usage" : "Select your use case"}
                  </option>
                  <option value="design-platform">
                    {language === "fr" ? "Plateforme de design" : "Design Platform"}
                  </option>
                  <option value="real-estate">
                    {language === "fr" ? "Immobilier" : "Real Estate"}
                  </option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="mobile-app">
                    {language === "fr" ? "Application mobile" : "Mobile App"}
                  </option>
                  <option value="other">
                    {language === "fr" ? "Autre" : "Other"}
                  </option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200"
              >
                {language === "fr" ? "Envoyer la Demande" : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
      `}</style>
    </div>
  );
};

export default ServicesAPI;
