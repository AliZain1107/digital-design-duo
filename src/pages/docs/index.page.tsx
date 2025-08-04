import React, { useEffect, useContext, useState } from "react";
// import { useLocation } from "react-router-dom";
import Navbar from "../../../src/components/layout/Navbar";
import Footer from "../../../src/components/layout/Footer";
import SEO from "../../../src/components/layout/SEO";
import {  Language } from "../../../src/lib/i18n";
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
  ExternalLink,
  BookOpen,
  FileText,
  Settings,
  Terminal
} from "lucide-react";
import { useLanguage } from "../../lib/i18n";

const Page: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  // const location = useLocation();
  const [activeSection, setActiveSection] = useState("authentication");

  // Auto-scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle language routing - now uses current language state for seamless switching
  useEffect(() => {
    // No need to set language based on URL - it's handled by the LanguageProvider
    // The language state is managed globally and will update the content automatically
  }, []);

  const apiSections = [
    {
      id: "authentication",
      title: language === "fr" ? "Contexte" : "Context",
      icon: Shield,
      description: language === "fr" ? "Traitement d'image contextuel avec suppression et amélioration du mobilier" : "Context-aware image processing API"
    },
    {
      id: "room-design",
      title: language === "fr" ? "Rafraîchissement" : "Refurnishing",
      icon: Home,
      description: language === "fr" ? "API de rafraîchissement d'espaces (meubles et décoration)" : "Space refurnishing API"
    },
    {
      id: "moodboard",
      title: language === "fr" ? "Moodboard" : "Moodboard",
      icon: Settings,
      description: language === "fr" ? "Génération de moodboards de design intérieur" : "Design moodboard generation"
    },
    {
      id: "staging",
      title: language === "fr" ? "Mise en scène à domicile" : "Staging",
      icon: Palette,
      description: language === "fr" ? "Mise en scène virtuelle pour l'immobilier" : "Virtual real estate staging"
    }
  ];

  const seoData = {
    en: {
      title: "API Documentation - Styly.fr",
      description: "Complete API documentation for Styly.fr's AI-powered interior design services. Learn how to integrate our APIs into your applications.",
      keywords: "API documentation, Styly API, interior design API, AI design API, API integration, developer docs",
      ogImage: "/api-documentation-hero.webp"
    },
    fr: {
      title: "Documentation API - Styly.fr",
      description: "Documentation API complète pour les services de design intérieur alimentés par l'IA de Styly.fr. Apprenez à intégrer nos APIs dans vos applications.",
      keywords: "documentation API, API Styly, API design intérieur, API design IA, intégration API, docs développeur",
      ogImage: "/api-documentation-hero.webp"
    }
  };

  const currentSeo = language === "fr" ? seoData.fr : seoData.en;
  const currentUrl = language === "fr"
    ? "https://www.styly.fr/fr/docs"
    : "https://www.styly.fr/en/docs";

  const alternateUrls = {
    en: "https://www.styly.fr/en/docs",
    fr: "https://www.styly.fr/fr/docs"
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        ogImage={currentSeo.ogImage}
        ogUrl={currentUrl}
        alternateUrls={alternateUrls}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white py-20 pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "fr" ? "Documentation API" : "API Documentation"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === "fr"
                ? "Intégrez la puissance de l'IA de design intérieur dans vos applications"
                : "Integrate the power of AI interior design into your applications"
              }
            </p>
            <div className="flex justify-center">
              <div className="relative group">
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
                <button
                  type="button"
                  data-tally-open="w2YLQj"
                  data-tally-layout="modal"
                  data-tally-emoji-animation="none"
                  className="relative flex items-center justify-center py-4 px-8 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg transition-all duration-200 hover:scale-105 hover:-translate-y-1 shadow-lg border border-transparent whitespace-nowrap z-10 font-baloo overflow-hidden"
                  style={{minWidth: '200px'}}
                >
                  <span className="relative flex items-center z-10">
                {language === "fr" ? "Commencer" : "Get Started"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                  <span className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: '0 0 0 2px rgba(168,85,247,0.3), 0 0 16px 4px rgba(168,85,247,0.15)'}} />
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Secondary Navbar */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {apiSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                    activeSection === section.id
                      ? "border-purple-600 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Context Section */}
        {activeSection === "authentication" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === "fr" ? "API Contexte" : "Context API"}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === "fr"
                  ? "Traitement d'image contextuel avec suppression et amélioration du mobilier."
                  : "Context-aware image processing with furniture removal and enhancement capabilities."
                }
              </p>
            </div>

            {/* Request Parameters */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Paramètres de requête" : "Request Parameters"}
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">image_url</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "URL de l'image à traiter (ou utilisez base64_image)"
                      : "URL of the image to process (alternatively use base64_image)"
                    }
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">positive</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "Instructions de traitement décrivant ce qu'il faut faire avec l'image"
                      : "Processing instructions describing what to do with the image"
                    }
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">seed</code>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "optionnel" : "optional"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">integer</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "Graine aléatoire pour des résultats reproductibles"
                      : "Random seed for reproducible results"
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Synchronous API */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "API Synchrone" : "Synchronous API"}
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-800">
                    {language === "fr" ? "Réponse immédiate" : "Immediate Response"}
                  </span>
                </div>
                <p className="text-yellow-700 mt-1">
                  {language === "fr" 
                    ? "Traitement contextuel synchrone"
                    : "Synchronous context processing"
                  }
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 text-sm">{language === "fr" ? "Exemple cURL" : "cURL Example"}</span>
                <button className="text-gray-400 hover:text-white text-sm">
                  {language === "fr" ? "Copier" : "Copy"}
                </button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST "https://api.styly.fr/models/context/predict" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key-here" \
  -d '{
  "image_url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fm=jpg",
  "positive": "remove all furniture and enhance the room",
  "seed": 12345
  }'`}
              </pre>
            </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "fr" ? "Exemple de réponse :" : "Response Example:"}
                </h4>
                <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "result": "iVBORw0KGgoAAAANSUhEUgAABgAAAAQICAIAAABEQId4...(base64-encoded image data)",
  "time_taken": 12.3,
  "metadata": {
    "request_id": "req_1234567890",
    "model_name": "context",
    "processing_time": 12.3,
    "user_id": "user123"
  }
}`}
                </pre>
                </div>
            </div>

            {/* Authentication */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Authentification" : "Authentication"}
                  </h3>
              <p className="text-gray-600 mb-4">
                    {language === "fr"
                  ? "Toutes les requêtes API nécessitent une clé API dans l'en-tête :"
                  : "All API requests require an API key in the header:"
                    }
                  </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm">
{`X-API-Key: your-api-key-here`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Refurnishing Section */}
        {activeSection === "room-design" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === "fr" ? "API Rafraîchissement" : "Refurnishing API"}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === "fr"
                  ? "Rafraîchissez des espaces existants avec de nouveaux meubles et une nouvelle décoration tout en conservant la disposition de la pièce."
                  : "Refurnish existing spaces with new furniture and decor while maintaining room layout."
                }
              </p>
            </div>

            {/* Request Parameters */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Paramètres de requête" : "Request Parameters"}
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">input_image</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "URL de la pièce meublée à rafraîchir (ou utilisez base64_image)"
                      : "URL of the furnished room to refurnish (alternatively use base64_image)"
                    }
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">room_type</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Type de pièce à rafraîchir" : "Type of room being refurnished"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables :" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">living room</span>
                      <span className="bg-white px-2 py-1 rounded border">bedroom</span>
                      <span className="bg-white px-2 py-1 rounded border">kitchen</span>
                      <span className="bg-white px-2 py-1 rounded border">bathroom</span>
                      <span className="bg-white px-2 py-1 rounded border">dining room</span>
                      <span className="bg-white px-2 py-1 rounded border">home office</span>
                      <span className="bg-white px-2 py-1 rounded border">entryway</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">style</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Nouveau style de design intérieur" : "New interior design style"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables :" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">modern</span>
                      <span className="bg-white px-2 py-1 rounded border">scandinavian</span>
                      <span className="bg-white px-2 py-1 rounded border">coastal</span>
                      <span className="bg-white px-2 py-1 rounded border">industrial</span>
                      <span className="bg-white px-2 py-1 rounded border">wooden</span>
                      <span className="bg-white px-2 py-1 rounded border">countryside</span>
                      <span className="bg-white px-2 py-1 rounded border">traditional</span>
                      <span className="bg-white px-2 py-1 rounded border">italian</span>
                      <span className="bg-white px-2 py-1 rounded border">contemporary</span>
                      <span className="bg-white px-2 py-1 rounded border">minimalist</span>
                      <span className="bg-white px-2 py-1 rounded border">bohemian</span>
                      <span className="bg-white px-2 py-1 rounded border">mid century</span>
                      <span className="bg-white px-2 py-1 rounded border">art deco</span>
                      <span className="bg-white px-2 py-1 rounded border">japanese</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">color_theme</code>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "optionnel" : "optional"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Préférence de thème de couleur" : "New color theme preference"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables :" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">original</span>
                      <span className="bg-white px-2 py-1 rounded border">red</span>
                      <span className="bg-white px-2 py-1 rounded border">blue</span>
                      <span className="bg-white px-2 py-1 rounded border">green</span>
                      <span className="bg-white px-2 py-1 rounded border">yellow</span>
                      <span className="bg-white px-2 py-1 rounded border">brown</span>
                      <span className="bg-white px-2 py-1 rounded border">white</span>
                      <span className="bg-white px-2 py-1 rounded border">black</span>
                      <span className="bg-white px-2 py-1 rounded border">grey</span>
                      <span className="bg-white px-2 py-1 rounded border">purple</span>
                      <span className="bg-white px-2 py-1 rounded border">pink</span>
                      <span className="bg-white px-2 py-1 rounded border">orange</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">positive</code>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "optionnel" : "optional"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "Demandes spécifiques de meubles ou de décoration"
                      : "Specific furniture or decor requests"
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Synchronous API */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "API Synchrone" : "Synchronous API"}
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-800">
                    {language === "fr" ? "Réponse immédiate" : "Immediate Response"}
                  </span>
                </div>
                <p className="text-yellow-700 mt-1">
                  {language === "fr" 
                    ? "Rafraîchissement synchrone"
                    : "Synchronous refurnishing"
                  }
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 text-sm">{language === "fr" ? "Exemple cURL" : "cURL Example"}</span>
                <button className="text-gray-400 hover:text-white text-sm">
                  {language === "fr" ? "Copier" : "Copy"}
                </button>
              </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST "https://api.styly.fr/models/moodboard/predict" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key-here" \
  -d '{
  "input_image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fm=jpg",
  "room_type": "living room",
  "style": "scandinavian",
  "color_theme": "original",
  "positive": "comfortable modern furniture, clean design"
}'`}
              </pre>
            </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "fr" ? "Exemple de réponse :" : "Response Example:"}
                </h4>
                <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "result": "iVBORw0KGgoAAAANSUhEUgAABgAAAAQICAIAAABEQId4...(base64-encoded image data)",
  "time_taken": 18.7,
  "metadata": {
    "request_id": "req_1234567890",
    "model_name": "moodboard",
    "processing_time": 18.7,
    "user_id": "user123"
  }
}`}
                </pre>
              </div>
              </div>

            {/* Authentication */}
              <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Authentification" : "Authentication"}
                </h3>
              <p className="text-gray-600 mb-4">
                {language === "fr" 
                  ? "Toutes les requêtes API nécessitent une clé API dans l'en-tête:"
                  : "All API requests require an API key in the header:"
                }
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm">
{`X-API-Key: your-api-key-here`}
                  </pre>
              </div>
            </div>
          </div>
        )}

        {/* Moodboard Section */}
        {activeSection === "moodboard" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === "fr" ? "API Moodboard" : "Moodboard API"}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === "fr"
                  ? "Générez des moodboards de design intérieur avec correspondance de style et analyse de pièce."
                  : "Generate interior design moodboards with style matching and room analysis."
                }
              </p>
            </div>

            {/* Request Parameters */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Paramètres de requête" : "Request Parameters"}
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">input_image</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "URL de l'image de base de la pièce (ou utilisez base64_image)"
                      : "URL of the base room image (alternatively use base64_image)"
                    }
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">input_styleimage</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "URL de l'image de référence de style (ou utilisez style_base64_image)"
                      : "URL of the style reference image (alternatively use style_base64_image)"
                    }
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">room_type</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Type de pièce" : "Type of room"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables :" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">living room</span>
                      <span className="bg-white px-2 py-1 rounded border">bedroom</span>
                      <span className="bg-white px-2 py-1 rounded border">kitchen</span>
                      <span className="bg-white px-2 py-1 rounded border">bathroom</span>
                      <span className="bg-white px-2 py-1 rounded border">dining room</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">style</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Style de design intérieur à correspondre" : "Interior design style to match"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables :" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">modern</span>
                      <span className="bg-white px-2 py-1 rounded border">scandinavian</span>
                      <span className="bg-white px-2 py-1 rounded border">coastal</span>
                      <span className="bg-white px-2 py-1 rounded border">industrial</span>
                      <span className="bg-white px-2 py-1 rounded border">wooden</span>
                      <span className="bg-white px-2 py-1 rounded border">countryside</span>
                      <span className="bg-white px-2 py-1 rounded border">traditional</span>
                      <span className="bg-white px-2 py-1 rounded border">italian</span>
                      <span className="bg-white px-2 py-1 rounded border">contemporary</span>
                      <span className="bg-white px-2 py-1 rounded border">minimalist</span>
                      <span className="bg-white px-2 py-1 rounded border">bohemian</span>
                      <span className="bg-white px-2 py-1 rounded border">mid century</span>
                      <span className="bg-white px-2 py-1 rounded border">art deco</span>
                      <span className="bg-white px-2 py-1 rounded border">japanese</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">color_theme</code>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "optionnel" : "optional"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Préférence de thème de couleur" : "Color theme preference"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables :" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">original</span>
                      <span className="bg-white px-2 py-1 rounded border">red</span>
                      <span className="bg-white px-2 py-1 rounded border">blue</span>
                      <span className="bg-white px-2 py-1 rounded border">green</span>
                      <span className="bg-white px-2 py-1 rounded border">yellow</span>
                      <span className="bg-white px-2 py-1 rounded border">brown</span>
                      <span className="bg-white px-2 py-1 rounded border">white</span>
                      <span className="bg-white px-2 py-1 rounded border">black</span>
                      <span className="bg-white px-2 py-1 rounded border">grey</span>
                      <span className="bg-white px-2 py-1 rounded border">purple</span>
                      <span className="bg-white px-2 py-1 rounded border">pink</span>
                      <span className="bg-white px-2 py-1 rounded border">orange</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">positive</code>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "optionnel" : "optional"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Prompts de style supplémentaires" : "Additional style prompts"}
                  </p>
                </div>
              </div>
            </div>

            {/* Synchronous API */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "API Synchrone" : "Synchronous API"}
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-800">
                    {language === "fr" ? "Réponse immédiate" : "Immediate Response"}
                  </span>
                </div>
                <p className="text-yellow-700 mt-1">
                  {language === "fr" 
                    ? "Génération de moodboard synchrone"
                    : "Synchronous moodboard generation"
                  }
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 text-sm">{language === "fr" ? "Exemple cURL" : "cURL Example"}</span>
                  <button className="text-gray-400 hover:text-white text-sm">
                    {language === "fr" ? "Copier" : "Copy"}
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST "https://api.styly.fr/models/moodboard/predict" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key-here" \
  -d '{
  "input_image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fm=jpg",
  "input_styleimage": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fm=jpg",
  "room_type": "bedroom",
  "style": "modern",
  "color_theme": "white",
  "positive": "modern scandinavian living room"
}'`}
                </pre>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "fr" ? "Exemple de réponse :" : "Response Example:"}
                </h4>
                <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "result": "iVBORw0KGgoAAAANSUhEUgAABgAAAAQICAIAAABEQId4...(base64-encoded image data)",
  "time_taken": 15.2,
  "metadata": {
    "request_id": "req_1234567890",
    "model_name": "moodboard",
    "processing_time": 15.2,
    "user_id": "user123"
  }
}`}
                </pre>
              </div>
            </div>

            {/* Asynchronous API */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "API Asynchrone" : "Asynchronous API"}
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-800">
                    {language === "fr" ? "Basé sur les Jobs" : "Job-based"}
                  </span>
                </div>
                <p className="text-blue-700 mt-1">
                  {language === "fr" 
                    ? "Génération de moodboard asynchrone"
                    : "Asynchronous moodboard generation"
                  }
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 text-sm">cURL</span>
                  <button className="text-gray-400 hover:text-white text-sm">
                    {language === "fr" ? "Copier" : "Copy"}
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST "https://api.styly.fr/models/moodboard/predict?async=true" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key-here" \
  -d '{
  "input_image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fm=jpg",
  "input_styleimage": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fm=jpg",
  "room_type": "bedroom",
  "style": "modern",
  "color_theme": "white",
  "positive": "modern scandinavian living room"
}'`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "fr" ? "Réponse Initiale:" : "Initial Response:"}
                  </h4>
                  <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "job_id": "34dd3fb5-632c-4813-8bbf-502fa4267ca2",
  "status": "pending",
  "model_name": "moodboard",
  "created_at": "2025-06-26T14:57:52.123456Z",
  "status_url": "/jobs/34dd3fb5-632c-4813-8bbf-502fa4267ca2"
}`}
                  </pre>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "fr" ? "Réponse de Complétion:" : "Job Completion Response:"}
                  </h4>
                  <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "job_id": "742e7c0b-fe98-4a4b-8b4d-548c6ac41429",
  "status": "completed",
  "result": "iVBORw0KGgoAAAANSUhEUgAABgAAAAQICAIAAABEQId4...(base64-encoded image data)",
  "created_at": "2025-06-26T19:12:28.829380Z",
  "completed_at": "2025-06-26T19:12:45.123456Z",
  "processing_time": 16.3
}`}
                  </pre>
                </div>
              </div>

              {/* Job Status Polling */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "fr" ? "Polling du Statut du Job" : "Job Status Polling"}
                </h4>
                <p className="text-gray-600 mb-4">
                  {language === "fr" 
                    ? "Pour les requêtes asynchrones, utilisez l'ID du job pour vérifier le statut de complétion."
                    : "For async requests, use the job ID to poll for completion status."
                  }
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300 text-sm">JavaScript</span>
                    <button className="text-gray-400 hover:text-white text-sm">
                      {language === "fr" ? "Copier" : "Copy"}
                    </button>
                  </div>
                  <pre className="text-blue-400 text-sm overflow-x-auto">
{`// Poll job status
const pollJob = async (jobId) => {
  const pollUrl = \`https://api.styly.fr/jobs/\${jobId}\`;
  
  while (true) {
    const response = await fetch(pollUrl, {
      headers: { "X-API-Key": "your-api-key-here" }
    });
    
    const job = await response.json();
    console.log(\`Status: \${job.status}\`);
    
    if (job.status === 'completed') {
      console.log('Result:', job.result);
      break;
    } else if (job.status === 'failed') {
      console.error('Job failed:', job.error);
      break;
    }
    
    // Wait 2 seconds before next poll
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

// Usage: pollJob("your-job-id-here");`}
                  </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-800 mb-2">pending</h5>
                    <p className="text-yellow-700 text-sm">
                      {language === "fr" ? "Le job est en file d'attente ou en traitement" : "Job is queued or processing"}
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">completed</h5>
                    <p className="text-green-700 text-sm">
                      {language === "fr" ? "Le job s'est terminé avec succès" : "Job finished successfully"}
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">failed</h5>
                    <p className="text-red-700 text-sm">
                      {language === "fr" ? "Le job a rencontré une erreur" : "Job encountered an error"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Authentification" : "Authentication"}
              </h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  {language === "fr" 
                    ? "Toutes les requêtes API nécessitent une clé API dans l'en-tête:"
                    : "All API requests require an API key in the header:"
                  }
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">X-API-Key: your-api-key-here</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Staging Section */}
        {activeSection === "staging" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === "fr" ? "API Mise en scène à domicile" : "Staging API"}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === "fr"
                  ? "Mise en scène virtuelle pour l'immobilier - transformez des pièces vides en espaces magnifiquement meublés."
                  : "Virtual staging for real estate - transform empty rooms into beautifully furnished spaces."
                }
              </p>
            </div>

            {/* Request Parameters */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Paramètres de requête" : "Request Parameters"}
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">image_url</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "URL de l'image de la pièce à meubler (ou utilisez base64_image)"
                      : "URL of the room image to stage (alternatively use base64_image)"
                    }
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">room_type</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Type de pièce" : "Type of room"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables:" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">living room</span>
                      <span className="bg-white px-2 py-1 rounded border">bedroom</span>
                      <span className="bg-white px-2 py-1 rounded border">kitchen</span>
                      <span className="bg-white px-2 py-1 rounded border">bathroom</span>
                      <span className="bg-white px-2 py-1 rounded border">dining room</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">style</code>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "obligatoire" : "required"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Style de design intérieur" : "Interior design style"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables:" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">modern</span>
                      <span className="bg-white px-2 py-1 rounded border">scandinavian</span>
                      <span className="bg-white px-2 py-1 rounded border">coastal</span>
                      <span className="bg-white px-2 py-1 rounded border">industrial</span>
                      <span className="bg-white px-2 py-1 rounded border">wooden</span>
                      <span className="bg-white px-2 py-1 rounded border">countryside</span>
                      <span className="bg-white px-2 py-1 rounded border">traditional</span>
                      <span className="bg-white px-2 py-1 rounded border">italian</span>
                      <span className="bg-white px-2 py-1 rounded border">contemporary</span>
                      <span className="bg-white px-2 py-1 rounded border">minimalist</span>
                      <span className="bg-white px-2 py-1 rounded border">bohemian</span>
                      <span className="bg-white px-2 py-1 rounded border">mid century</span>
                      <span className="bg-white px-2 py-1 rounded border">art deco</span>
                      <span className="bg-white px-2 py-1 rounded border">japanese</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">color_theme</code>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "optionnel" : "optional"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700 mb-3">
                    {language === "fr" ? "Préférence de thème de couleur" : "Color theme preference"}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === "fr" ? "Valeurs acceptables:" : "Acceptable values:"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span className="bg-white px-2 py-1 rounded border">original</span>
                      <span className="bg-white px-2 py-1 rounded border">red</span>
                      <span className="bg-white px-2 py-1 rounded border">blue</span>
                      <span className="bg-white px-2 py-1 rounded border">green</span>
                      <span className="bg-white px-2 py-1 rounded border">yellow</span>
                      <span className="bg-white px-2 py-1 rounded border">brown</span>
                      <span className="bg-white px-2 py-1 rounded border">white</span>
                      <span className="bg-white px-2 py-1 rounded border">black</span>
                      <span className="bg-white px-2 py-1 rounded border">grey</span>
                      <span className="bg-white px-2 py-1 rounded border">purple</span>
                      <span className="bg-white px-2 py-1 rounded border">pink</span>
                      <span className="bg-white px-2 py-1 rounded border">orange</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-lg font-semibold text-purple-600">positive</code>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{language === "fr" ? "optionnel" : "optional"}</span>
                  </div>
                  <p className="text-gray-600 mb-2">string</p>
                  <p className="text-gray-700">
                    {language === "fr" 
                      ? "Prompts positifs supplémentaires pour le style"
                      : "Additional positive prompts for styling"
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Synchronous API */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "API Synchrone" : "Synchronous API"}
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-800">
                    {language === "fr" ? "Réponse immédiate" : "Immediate Response"}
                  </span>
                </div>
                <p className="text-yellow-700 mt-1">
                  {language === "fr" 
                    ? "Mise en scène synchrone"
                    : "Synchronous staging"
                  }
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 text-sm">{language === "fr" ? "Exemple cURL" : "cURL Example"}</span>
                  <button className="text-gray-400 hover:text-white text-sm">
                    {language === "fr" ? "Copier" : "Copy"}
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST "https://api.styly.fr/models/staging/predict" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key-here" \
  -d '{
  "image_url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fm=jpg",
  "room_type": "living room",
  "style": "modern",
  "color_theme": "white",
  "positive": "elegant modern furniture"
}'`}
                </pre>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "fr" ? "Exemple de réponse :" : "Response Example:"}
                </h4>
                <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "result": "iVBORw0KGgoAAAANSUhEUgAABgAAAAQICAIAAABEQId4...(base64-encoded image data)",
  "time_taken": 14.8,
  "metadata": {
    "request_id": "req_1234567890",
    "model_name": "staging",
    "processing_time": 14.8,
    "user_id": "user123"
  }
}`}
                </pre>
              </div>
            </div>

            {/* Asynchronous API */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "API Asynchrone" : "Asynchronous API"}
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-800">
                    {language === "fr" ? "Basé sur les Jobs" : "Job-based"}
                  </span>
                </div>
                <p className="text-blue-700 mt-1">
                  {language === "fr" 
                    ? "Prédiction asynchrone - retourne un ID de job pour le polling"
                    : "Asynchronous prediction - returns job ID for polling"
                  }
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 text-sm">cURL</span>
                  <button className="text-gray-400 hover:text-white text-sm">
                    {language === "fr" ? "Copier" : "Copy"}
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST "https://api.styly.fr/models/staging/predict?async=true" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key-here" \
  -d '{
  "image_url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fm=jpg",
  "room_type": "living room",
  "style": "scandinavian",
  "color_theme": "original",
  "positive": "comfortable modern furniture, clean design"
}'`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "fr" ? "Réponse Initiale:" : "Initial Response:"}
                  </h4>
                  <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "job_id": "05320a0f-fc52-4057-8b74-902e9b6fad31",
  "status": "pending",
  "model_name": "staging",
  "created_at": "2025-06-26T14:54:41.782641Z",
  "status_url": "/jobs/05320a0f-fc52-4057-8b74-902e9b6fad31"
}`}
                  </pre>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "fr" ? "Réponse de Complétion:" : "Job Completion Response:"}
                  </h4>
                  <pre className="text-sm text-gray-700 overflow-x-auto">
{`{
  "job_id": "742e7c0b-fe98-4a4b-8b4d-548c6ac41429",
  "status": "completed",
  "result": "iVBORw0KGgoAAAANSUhEUgAABgAAAAQICAIAAABEQId4...(base64-encoded image data)",
  "created_at": "2025-06-26T19:12:28.829380Z",
  "completed_at": "2025-06-26T19:12:45.123456Z",
  "processing_time": 16.3
}`}
                  </pre>
                </div>
              </div>

              {/* Job Status Polling */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === "fr" ? "Polling du Statut du Job" : "Job Status Polling"}
                </h4>
                <p className="text-gray-600 mb-4">
                  {language === "fr" 
                    ? "Pour les requêtes asynchrones, utilisez l'ID du job pour vérifier le statut de complétion."
                    : "For async requests, use the job ID to poll for completion status."
                  }
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300 text-sm">JavaScript</span>
                    <button className="text-gray-400 hover:text-white text-sm">
                      {language === "fr" ? "Copier" : "Copy"}
                    </button>
                  </div>
                  <pre className="text-blue-400 text-sm overflow-x-auto">
{`// Poll job status
const pollJob = async (jobId) => {
  const pollUrl = \`https://api.styly.fr/jobs/\${jobId}\`;
  
  while (true) {
    const response = await fetch(pollUrl, {
      headers: { "X-API-Key": "your-api-key-here" }
    });
    
    const job = await response.json();
    console.log(\`Status: \${job.status}\`);
    
    if (job.status === 'completed') {
      console.log('Result:', job.result);
      break;
    } else if (job.status === 'failed') {
      console.error('Job failed:', job.error);
      break;
    }
    
    // Wait 2 seconds before next poll
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

// Usage: pollJob("your-job-id-here");`}
                  </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-800 mb-2">pending</h5>
                    <p className="text-yellow-700 text-sm">
                      {language === "fr" ? "Le job est en file d'attente ou en traitement" : "Job is queued or processing"}
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">completed</h5>
                    <p className="text-green-700 text-sm">
                      {language === "fr" ? "Le job s'est terminé avec succès" : "Job finished successfully"}
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">failed</h5>
                    <p className="text-red-700 text-sm">
                      {language === "fr" ? "Le job a rencontré une erreur" : "Job encountered an error"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "fr" ? "Authentification" : "Authentication"}
              </h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  {language === "fr" 
                    ? "Toutes les requêtes API nécessitent une clé API dans l'en-tête:"
                    : "All API requests require an API key in the header:"
                  }
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">X-API-Key: your-api-key-here</code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
                type="button"
                data-tally-open="w2YLQj"
                data-tally-layout="modal"
                data-tally-emoji-animation="none"
                className="inline-block bg-white text-orange-600 font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-200 font-baloo z-10 animate-cta-pulse"
              >
                {language === "fr" ? "Nous Contacter" : "Contact Us"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default {
    Page,
}; 