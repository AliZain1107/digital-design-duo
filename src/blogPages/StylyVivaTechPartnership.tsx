import React, { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const StylyVivaTechPartnership: React.FC = () => {
  const { language, t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoData = {
    en: {
      title: "How Styly.io & Viva Technology Are Shaping the Future of AI-Powered Design | Styly.io",
      description: "Discover how Styly.io's partnership with Viva Technology 2025 is revolutionizing AI interior design. Learn about our zero-friction platform, instant staging, and global expansion plans.",
      keywords: "AI interior design, AI room planner, virtual staging AI, free AI interior design, home design ai free, ai room design, ai for interior design, VivaTech, Viva Technology, startup showcase",
      ogImage: "/ai-interior-design-technology.webp"
    },
    fr: {
      title: "Comment Styly.io et Viva Technology Façonnent l'Avenir du Design Alimenté par l'IA | Styly.io",
      description: "Découvrez comment le partenariat de Styly.io avec Viva Technology 2025 révolutionne le design intérieur IA. Plateforme sans friction, staging instantané et plans d'expansion mondiale.",
      keywords: "application d'aménagement intérieur gratuit, logiciel design interieur gratuit, ia design intérieur gratuit, simulateur deco interieur a partir d'une photo, home staging virtuel, logiciel decoration interieur, amenagement chambre, décoration intérieure, ia maison, ia room, interieur ai, home staging ia, VivaTech, Viva Technology, startup",
      ogImage: "/ai-interior-design-technology.webp"
    }
  };

  const currentMeta = language === "fr" ? seoData.fr : seoData.en;
  const canonicalUrl = language === "fr"
    ? "https://www.styly.fr/blog/styly-viva-technology-avenir-design-ia"
    : "https://www.styly.fr/en/blog/styly-viva-technology-future-ai-design";

  const alternateUrls = {
    en: "https://www.styly.fr/en/blog/styly-viva-technology-future-ai-design",
    fr: "https://www.styly.fr/blog/styly-viva-technology-avenir-design-ia"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={currentMeta.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta.title} />
        <meta name="twitter:description" content={currentMeta.description} />
        <meta name="twitter:image" content={currentMeta.ogImage} />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
        <link rel="alternate" hrefLang="fr" href={alternateUrls.fr} />
        <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {language === "fr" ? (
          <>
            <article className="prose prose-lg max-w-none">

              {/* TL;DR Section for GEO optimization */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                  📋 TL;DR - Résumé Exécutif
                </h2>
                <p className="text-yellow-700">
                  <strong>Styly.io rejoint VivaTech 2025</strong> pour révolutionner le design intérieur avec l'IA. Notre plateforme transforme les photos de pièces en designs professionnels en moins de 10 secondes, sans installation. Objectifs 2025 : expansion Paris-Berlin-NYC, bibliothèques de styles et API entreprise.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">
                  🧠 Le Partenariat Styly.io × Viva Technology
                </h2>
                <p className="text-blue-700">
                  Nous sommes ravis de rejoindre l'écosystème partenaires de VivaTech 2025, avec pour mission de réinventer le design d'intérieur grâce à la mise en scène par IA—accessible, instantanée, sans compétence requise.
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Styly.io transforme chaque photo de pièce vide en un visuel aménagé époustouflant, en quelques secondes seulement. Aucune installation, aucun abonnement nécessaire.
              </p>

              <p className="text-gray-700 mb-6">
                Notre partenariat avec <a href="https://vivatechnology.com/partners/styly" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VivaTech</a> marque une étape importante dans notre mission de démocratiser le <strong>design intérieur IA</strong>.
              </p>

              {/* Table of Contents for better structure */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Table des Matières</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <a href="#pourquoi-vivatech" className="text-blue-600 hover:underline">Pourquoi VivaTech ?</a></li>
                  <li>• <a href="#styly-avantages" className="text-blue-600 hover:underline">En quoi Styly.io se distingue</a></li>
                  <li>• <a href="#objectifs-2025" className="text-blue-600 hover:underline">Et maintenant avec VivaTech</a></li>
                  <li>• <a href="#faq" className="text-blue-600 hover:underline">Questions Fréquentes</a></li>
                </ul>
              </div>

              <h2 id="pourquoi-vivatech" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                🚀 Pourquoi VivaTech ?
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>🏙️ Hub mondial de l'innovation :</strong> VivaTech réunit entrepreneurs, investisseurs et media.</li>
                  <li><strong>🤝 Écosystème complémentaire :</strong> parfait pour notre stratégie B2C et B2B.</li>
                  <li><strong>🎙️ Visibilité renforcée :</strong> exposition auprès des grandes marques tech et des médias internationaux.</li>
                </ul>
              </div>

              {/* Citation-ready stat */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>📊 Statistique clé :</strong> Selon <a href="https://www.vivatechnology.com/about" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VivaTech</a>, l'événement rassemble plus de 150 000 participants et 13 000 startups chaque année, en faisant le plus grand événement tech européen.
                </p>
              </div>

              <h2 id="styly-avantages" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                ⛳ En quoi Styly.io se distingue
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img
                  src="/ai-interior-design-technology.webp"
                  alt="Partenariat VivaTech Styly.io - Innovation design IA"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
                />
                <img
                  src="/ai-room-design-free.webp"
                  alt="Showcase design intérieur IA - Transformation instantanée"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
                />
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Utilisation immédiate :</strong> compatible web, mobile, WhatsApp — aucun logiciel à télécharger</li>
                  <li>• <strong>Rendu express :</strong> aménagement généré en moins de 10 secondes</li>
                  <li>• <strong>Adapté à tous :</strong> particuliers, agences, agents immobiliers, e‑com</li>
                  <li>• <strong>Variantes infinies :</strong> changement instantané de matériaux et de styles</li>
                  <li>• <strong>Essai gratuit complet :</strong> découverte sans engagement financier</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                Selon <a href="https://www.elle.fr/Deco/Tendances/Intelligence-artificielle-decoration-interieur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Elle Décoration</a>, notre approche <strong>home staging virtuel</strong> répond parfaitement aux attentes du marché français en matière de <strong>décoration intérieure</strong> accessible.
              </p>

              <h2 id="objectifs-2025" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                🌟 Et maintenant avec VivaTech
              </h2>

              <p className="text-gray-700 mb-6">
                Grâce à VivaTech, voici nos prochaines étapes :
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>🔄 Lancement du programme Partenaires Fondateurs</strong> à Paris, Berlin et New York</li>
                  <li>• <strong>🖌️ Bibliothèques de styles thématiques</strong> (scandinave, cosy français, zen japonais)</li>
                  <li>• <strong>🛠️ Intégration e‑commerce & immobilier</strong></li>
                  <li>• <strong>🎨 API ouverte et marque blanche</strong> pour les entreprises</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                Les recherches de <a href="https://www.houzz.fr/magazine/intelligence-artificielle-design-interieur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Houzz</a> confirment que notre <strong>simulateur deco interieur a partir d'une photo</strong> répond aux besoins croissants du marché français.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
                <blockquote className="text-lg italic text-purple-800">
                  « VivaTech partage notre conviction : le design doit être rapide, beau et accessible à tous. »
                </blockquote>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                ✅ Rejoignez notre aventure
              </h2>

              <p className="text-gray-700 mb-6">
                Venez découvrir Styly.io en action au stand VivaTech. Professionnels ou passionnés, donnez vie à vos espaces.
              </p>

              <p className="text-gray-700 mb-6">
                🔗 <a href="https://www.styly.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.styly.io</a>
              </p>

              <p className="text-gray-700 mb-6">
                #IA #DesignIntérieur #VivaTech #StylyAI #VirtualStaging #PropTech
              </p>

              {/* FAQ Section for GEO optimization */}
              <div id="faq" className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">❓ Questions Fréquentes</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: Qu'est-ce que Styly.io exactement ?</h4>
                    <p className="text-gray-700">R: Styly.io est une plateforme d'IA qui transforme les photos de pièces vides en designs d'intérieur professionnels en moins de 10 secondes, sans installation ni abonnement requis.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: Pourquoi Styly.io a-t-elle choisi VivaTech comme partenaire ?</h4>
                    <p className="text-gray-700">R: VivaTech est le plus grand événement tech européen avec 150 000+ participants. Cette plateforme nous permet d'atteindre investisseurs, entreprises et médias internationaux pour accélérer notre croissance.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: Quels sont les avantages de l'IA pour le design intérieur ?</h4>
                    <p className="text-gray-700">R: L'IA démocratise le design en le rendant accessible, instantané et abordable. Elle permet de visualiser des centaines d'options de design sans compétences techniques.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: Quels sont les objectifs de Styly.io pour 2025 ?</h4>
                    <p className="text-gray-700">R: Expansion à Paris, Berlin et NYC, lancement de bibliothèques de styles thématiques, intégrations e-commerce/immobilier, et API entreprise pour partenaires.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <a
                  href="https://app.styly.io/?lang=fr"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Essayer Styly Gratuitement
                </a>
              </div>

              <p className="text-gray-700 mb-6 mt-8">
                Découvrez aussi nos guides sur <Link to="/fr/blog/agents-immobiliers-home-staging-virtuel-ia" className="text-blue-600 hover:underline">le home staging virtuel pour agents immobiliers</Link> et <Link to="/fr/blog/logiciel-gratuit-design-interieur-ia" className="text-blue-600 hover:underline">notre logiciel gratuit de design intérieur IA</Link> pour maximiser votre <strong>amenagement chambre</strong> et projets de <strong>ia maison</strong>.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Suivez Styly.io pour plus d'innovations en design IA :
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/stylyio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instagram: stylyio
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61558770901420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook: Styly AI
                  </a>
                  <a
                    href="https://www.linkedin.com/company/stylyai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn: Styly AI
                  </a>
                </div>
              </div>
            </article>
          </>
        ) : (
          <>
            <article className="prose prose-lg max-w-none">

              {/* TL;DR Section for GEO optimization */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                  📋 TL;DR - Executive Summary
                </h2>
                <p className="text-yellow-700">
                  <strong>Styly.io joins VivaTech 2025</strong> to revolutionize interior design with AI. Our platform transforms room photos into professional designs in under 10 seconds, no installation required. 2025 goals: Paris-Berlin-NYC expansion, style libraries, and enterprise API.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">
                  🧠 The Styly.io × Viva Technology Partnership
                </h2>
                <p className="text-blue-700">
                  We are thrilled to join the Viva Technology 2025 partner ecosystem, showcasing how Styly.io is redefining interior design with accessible, screen-to-space AI staging.
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                As a startup that believes creative design should be for everyone, Styly.io uses <strong>proprietary generative AI</strong> to convert everyday room photos into stunning, staged visuals in seconds—no downloads, no subscriptions.
              </p>

              <p className="text-gray-700 mb-6">
                Our partnership with <a href="https://vivatechnology.com/partners/styly" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VivaTech</a> marks an important milestone in our mission to democratize <strong>AI interior design</strong>.
              </p>

              {/* Table of Contents for better structure */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Table of Contents</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <a href="#why-vivatech" className="text-blue-600 hover:underline">Why VivaTech Was Our Natural Choice</a></li>
                  <li>• <a href="#styly-strengths" className="text-blue-600 hover:underline">Core Strengths of Styly.io</a></li>
                  <li>• <a href="#goals-2025" className="text-blue-600 hover:underline">What's Next with VivaTech & Beyond</a></li>
                  <li>• <a href="#faq-en" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
                </ul>
              </div>

              <h2 id="why-vivatech" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                🚀 Why VivaTech Was Our Natural Choice
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>🏙️ Global innovation hub:</strong> VivaTech brings together top entrepreneurs and tech leaders.</li>
                  <li><strong>🤝 Ecosystem synergy:</strong> Its vibrant producer-community model aligns with our B2B and B2C aspirations.</li>
                  <li><strong>🎙️ Showcase platform:</strong> VivaTech offers exposure to investors, design pros, and global media.</li>
                </ul>
              </div>

              {/* Citation-ready stat */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>📊 Key Statistic:</strong> According to <a href="https://www.vivatechnology.com/about" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VivaTech</a>, the event gathers over 150,000 participants and 13,000 startups annually, making it Europe's largest tech event.
                </p>
              </div>

              <h2 id="styly-strengths" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                ⛳ Core Strengths of Styly.io
              </h2>

              <p className="text-gray-700 mb-6">
                Our <strong>free AI interior design</strong> platform stands out with several key advantages that revolutionize the user experience:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img
                  src="/ai-interior-design-technology.webp"
                  alt="VivaTech Styly.io partnership - AI design innovation"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
                />
                <img
                  src="/ai-room-design-free.webp"
                  alt="AI interior design showcase - Instant transformation"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
                />
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Our competitive advantages:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Zero friction:</strong> Use via web, mobile, and WhatsApp—no installation required</li>
                  <li>• <strong>Instant results:</strong> Real-time room staging in less than 10 seconds</li>
                  <li>• <strong>Versatile usage:</strong> Ideal for homeowners, real estate agents, designers, and retailers</li>
                  <li>• <strong>Rich customization:</strong> Swap products, materials, and layouts with a click</li>
                  <li>• <strong>Completely free trial:</strong> Try before you buy, with no hidden costs</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                According to <a href="https://www.architecturaldigest.com/story/ai-interior-design-trends-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Architectural Digest</a>, our <strong>virtual staging AI</strong> approach perfectly meets market expectations for accessible interior design solutions.
              </p>

              <h2 id="goals-2025" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                🌟 What's Next with VivaTech & Beyond
              </h2>

              <p className="text-gray-700 mb-6">
                With VivaTech's support, Styly.io is scaling fast with our <strong>free AI interior design</strong> platform:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Our 2025 Goals:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>🔄 Founding Partners rollout</strong> in Paris, Berlin, and NYC</li>
                  <li>• <strong>🖌️ Launch of style libraries</strong> (Nordic minimalism, French cozy, Zen Japanese)</li>
                  <li>• <strong>🛠️ E-commerce & real estate integrations</strong> for seamless workflows</li>
                  <li>• <strong>🎨 Open API & white-label options</strong> for enterprise partners</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                Research from <a href="https://www.houzz.com/magazine/artificial-intelligence-interior-design" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Houzz</a> confirms that our <strong>AI room planner</strong> meets the growing market demand for intelligent design solutions.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
                <blockquote className="text-lg italic text-purple-800">
                  "We chose VivaTech because it aligns with our vision: making design fast, beautiful, and inclusive."
                </blockquote>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                ✅ Join The Movement
              </h2>

              <p className="text-gray-700 mb-6">
                Explore our showcase at VivaTech to see live AI room staging in action. Whether you're a design pro or a homeowner with a vision, Styly.io is your canvas.
              </p>

              {/* FAQ Section for GEO optimization */}
              <div id="faq-en" className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">❓ Frequently Asked Questions</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: What exactly is Styly.io?</h4>
                    <p className="text-gray-700">A: Styly.io is an AI platform that transforms empty room photos into professional interior designs in under 10 seconds, with no installation or subscription required.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: Why did Styly.io choose VivaTech as a partner?</h4>
                    <p className="text-gray-700">A: VivaTech is Europe's largest tech event with 150,000+ participants. This platform allows us to reach investors, enterprises, and international media to accelerate our growth.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: What are the benefits of AI for interior design?</h4>
                    <p className="text-gray-700">A: AI democratizes design by making it accessible, instant, and affordable. It allows visualization of hundreds of design options without technical skills.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Q: What are Styly.io's goals for 2025?</h4>
                    <p className="text-gray-700">A: Expansion to Paris, Berlin, and NYC, launch of thematic style libraries, e-commerce/real estate integrations, and enterprise API for partners.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <a
                  href="https://app.styly.io/"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Styly Free
                </a>
              </div>

              <p className="text-gray-700 mb-6 mt-8">
                Also explore our guides on <Link to="/en/blog/real-estate-agents-ai-virtual-staging" className="text-blue-600 hover:underline">virtual staging for real estate agents</Link> and <Link to="/en/blog/free-ai-interior-design-software" className="text-blue-600 hover:underline">our free AI interior design software</Link> for comprehensive <strong>AI room design</strong> solutions.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Styly.io for more AI design innovations:
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/stylyio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instagram: stylyio
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61558770901420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook: Styly AI
                  </a>
                  <a
                    href="https://www.linkedin.com/company/stylyai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn: Styly AI
                  </a>
                </div>
              </div>
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default StylyVivaTechPartnership;
