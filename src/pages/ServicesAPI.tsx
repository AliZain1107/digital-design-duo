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

const ServicesAPI: React.FC = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const location = useLocation();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Auto-scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle language routing
  useEffect(() => {
    let pathLang: Language;
    if (location.pathname === "/services-api-fr" || location.pathname === "/fr/services-api") {
      pathLang = "fr";
    } else if (location.pathname.startsWith("/en")) {
      // Redirect English URLs to external site
      window.location.href = "https://www.styly.io";
      return;
    } else {
      pathLang = "fr"; // Default to French
    }
    setLanguage(pathLang);
  }, [location.pathname, setLanguage]);

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
      name: language === "fr" ? "API Génération de Sols IA" : "AI Floor Generation API",
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
      name: language === "fr" ? "API Génération de Murs IA" : "AI Wall Generation API",
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
      name: language === "fr" ? "API Générateur de Moodboard IA" : "AI Moodboard Generator API",
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
      name: language === "fr" ? "API Amélioration Immobilière IA" : "AI Real Estate Enhancement API",
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
      name: language === "fr" ? "API Visualisation Produit IA" : "AI Product Visualization API",
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
      <section className="bg-gradient-to-b from-purple-100/30 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
              <Code className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-medium">
                {language === "fr" ? "API Développeurs" : "Developer APIs"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              {language === "fr" ? "Suite API IA Styly" : "Styly AI API Suite"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mb-8 animate-fade-in">
              {language === "fr" 
                ? "La Plateforme d'Intelligence Visuelle la Plus Avancée pour le Design, le Retail et l'Immobilier"
                : "The Most Advanced Visual Intelligence Platform for Design, Retail & Real Estate"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center justify-center text-lg"
                onClick={() => setIsContactFormOpen(true)}
              >
                {language === "fr" ? "Demander l'Accès" : "Request Access"} <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium px-8 py-3 rounded-full transition-all duration-200 text-lg">
                {language === "fr" ? "Explorer la Documentation" : "Explore API Docs"} <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Pourquoi Choisir Nos APIs" : "Why Choose Our APIs"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {language === "fr" ? "Ultra-Rapide" : "Lightning-Fast"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr" ? "~1.2 secondes" : "~1.2 seconds"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {language === "fr" ? "Évolutif" : "Scalable"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr" ? "Millions de requêtes" : "Millions of requests"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {language === "fr" ? "Prêt Production" : "Production-Ready"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr" ? "99.9% uptime" : "99.9% uptime"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {language === "fr" ? "Global" : "Global"}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === "fr" ? "CDN mondial" : "Worldwide CDN"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium API Services Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
              {language === "fr" ? "Nos APIs Principales" : "Our Core APIs"}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === "fr"
                ? "5 APIs puissantes pour transformer votre plateforme avec l'intelligence artificielle"
                : "5 powerful APIs to transform your platform with artificial intelligence"
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
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Intégration Simple" : "Simple Integration"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "fr"
                ? "Commencez à utiliser nos APIs en quelques lignes de code"
                : "Start using our APIs with just a few lines of code"
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
              <pre className="text-green-400 text-sm leading-relaxed">
{`// ${language === "fr" ? "Générer un design de sol IA" : "Generate AI floor design"}
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
console.log(result.design_url); // ${language === "fr" ? "URL du design généré" : "Generated design URL"}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Pour Qui C'est Conçu" : "Who It's Built For"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-purple-600" />
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-green-600" />
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
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

      {/* Platform Compatibility Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.04),transparent_50%)]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
              {language === "fr" ? "Fonctionne parfaitement avec votre plateforme" : "Works seamlessly with your platform"}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              {language === "fr"
                ? "Compatible avec les principales plateformes e-commerce comme Shopify, WooCommerce, Magento, WordPress, Wix, et plus — aucun développement personnalisé nécessaire."
                : "Compatible with leading e-commerce platforms like Shopify, WooCommerce, Magento, WordPress, Wix, and more — no custom development needed."
              }
            </p>
          </div>

          {/* Platform Logos Grid - Compact Premium Layout */}
          <div className="mb-14">
            {/* Row 1 - Main Platforms */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center mb-8">
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                  alt="Shopify"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg"
                  alt="WooCommerce"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/magento.svg"
                  alt="Magento"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg"
                  alt="BigCommerce"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/wix-1.svg"
                  alt="Wix"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/squarespace-1.svg"
                  alt="Squarespace"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Row 2 - Additional Platforms */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center">
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/prestashop.svg"
                  alt="PrestaShop"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/opencart.svg"
                  alt="OpenCart"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg"
                  alt="WordPress"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/volusion.svg"
                  alt="Volusion"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/weebly-1.svg"
                  alt="Weebly"
                  className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-16 w-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md hover:bg-white hover:border-purple-200/50 hover:-translate-y-1 transition-all duration-300 p-4 group">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-400 mb-0.5">+</div>
                  <span className="text-gray-500 font-medium text-xs">
                    {language === "fr" ? "Plus" : "More"}
                  </span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Pourquoi les Équipes Choisissent Styly APIs" : "Why Teams Choose Styly APIs"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {language === "fr" ? "IA de Pointe" : "Cutting-Edge AI"}
              </h3>
              <p className="text-gray-600">
                {language === "fr"
                  ? "Modèles d'IA entraînés sur millions d'images de design"
                  : "AI models trained on millions of design images"
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {language === "fr" ? "Déploiement Rapide" : "Fast Deployment"}
              </h3>
              <p className="text-gray-600">
                {language === "fr"
                  ? "Intégration en moins de 30 minutes avec notre SDK"
                  : "Integration in under 30 minutes with our SDK"
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {language === "fr" ? "Support Expert" : "Expert Support"}
              </h3>
              <p className="text-gray-600">
                {language === "fr"
                  ? "Équipe dédiée pour votre intégration et optimisation"
                  : "Dedicated team for your integration and optimization"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "fr"
                ? "Pourquoi Choisir Nos APIs ?"
                : "Why Choose Our APIs?"
              }
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Advantage Card 1 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">99.9%</div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "de disponibilité garantie avec notre infrastructure cloud robuste et redondante"
                  : "uptime guaranteed with our robust and redundant cloud infrastructure"
                }
              </p>
            </div>

            {/* Advantage Card 2 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">&lt;2s</div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "temps de réponse moyen pour la génération de designs IA haute qualité"
                  : "average response time for high-quality AI design generation"
                }
              </p>
            </div>

            {/* Advantage Card 3 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">50+</div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "styles de design et configurations personnalisables pour tous vos besoins"
                  : "design styles and customizable configurations for all your needs"
                }
              </p>
            </div>

            {/* Advantage Card 4 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-10 text-white shadow-xl">
              <div className="text-4xl md:text-6xl font-bold mb-4">24/7</div>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                {language === "fr"
                  ? "support technique expert disponible pour vous accompagner dans votre intégration"
                  : "expert technical support available to assist with your integration"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
      <section className="py-20">
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
                className="bg-white text-orange-600 hover:bg-gray-50 font-semibold px-10 py-4 rounded-2xl transition-all duration-300 inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
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
    </div>
  );
};

export default ServicesAPI;
