import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const UnlockingPowerAIInteriorDesign: React.FC = () => {
  const { language, t } = useLanguage();

  const addAlternateLanguageLink = () => {
    const currentSlug = language === "fr"
      ? "debloquer-puissance-ia-design-interieur-innovations"
      : "unlocking-the-power-of-ai-for-interior-design-your-guide-to-the-latest-innovations";
    const alternateSlug = language === "fr"
      ? "unlocking-the-power-of-ai-for-interior-design-your-guide-to-the-latest-innovations"
      : "debloquer-puissance-ia-design-interieur-innovations";
    const alternateLang = language === "fr" ? "en" : "fr";
    
    return (
      <link
        rel="alternate"
        hrefLang={alternateLang}
        href={`https://styly.fr/${alternateLang}/blog/${alternateSlug}`}
      />
    );
  };

  return (
    <>
      <Helmet>
        <title>
          {language === "fr" 
            ? "Débloquer la Puissance de l'IA pour le Design Intérieur : Guide des Dernières Innovations | Styly.fr"
            : "Unlocking the Power of AI for Interior Design: Your Guide to the Latest Innovations | Styly.fr"
          }
        </title>
        <meta
          name="description"
          content={
            language === "fr"
              ? "Découvrez comment l'intelligence artificielle révolutionne le design intérieur avec des outils IA innovants, des rendus photoréalistes et des solutions de design automatisées."
              : "Discover how artificial intelligence is revolutionizing interior design with innovative AI tools, photorealistic renderings, and automated design solutions."
          }
        />
        <meta
          name="keywords"
          content={
            language === "fr"
              ? "IA design intérieur, intelligence artificielle décoration, outils IA design, ChatGPT design, DALL-E intérieur, Midjourney design, automatisation design"
              : "AI interior design, artificial intelligence decoration, AI design tools, ChatGPT design, DALL-E interior, Midjourney design, design automation"
          }
        />
        {addAlternateLanguageLink()}
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {language === "fr" ? (
          <article className="prose prose-lg max-w-none">
            {/* TL;DR Section for SEO optimization */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                📋 TL;DR - Résumé Exécutif
              </h2>
              <p className="text-yellow-700">
                <strong>L'IA révolutionne le design intérieur</strong> avec des outils comme ChatGPT, DALL-E et Midjourney. Combinés avec Styly (IA visuelle gratuite), ces innovations transforment la création d'espaces, de la planification à la visualisation 3D.
              </p>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Débloquer la Puissance de l'IA pour le Design Intérieur : Guide des Dernières Innovations
            </h1>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Table des Matières</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="#marche-ia-design" className="text-blue-600 hover:underline">Le Marché de l'IA en Design</a></li>
                <li>• <a href="#outils-ia-populaires" className="text-blue-600 hover:underline">Outils IA Populaires</a></li>
                <li>• <a href="#revolution-processus" className="text-blue-600 hover:underline">Révolution du Processus</a></li>
                <li>• <a href="#exemples-concrets" className="text-blue-600 hover:underline">Exemples Concrets</a></li>
                <li>• <a href="#avenir-ia-design" className="text-blue-600 hover:underline">L'Avenir de l'IA</a></li>
                <li>• <a href="#faq-fr" className="text-blue-600 hover:underline">Questions Fréquentes</a></li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              L'intelligence artificielle révolutionne le design intérieur avec des innovations comme ChatGPT, DALL-E et Midjourney. Découvrez comment ces outils transforment la création d'espaces et explorez les possibilités infinies qu'offre l'IA pour votre décoration intérieure.
            </p>

            <h2 id="marche-ia-design" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              📈 Le Marché Explosif de l'IA en Design Intérieur
            </h2>

            <p className="text-gray-700 mb-6">
              Le marché du <strong>design intérieur IA</strong> connaît une croissance phénoménale. Les professionnels français adoptent massivement ces nouvelles technologies pour transformer leurs pratiques.
            </p>

            {/* Citation-ready stat */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800 text-sm">
                <strong>📊 Statistique clé :</strong> Le marché mondial de l'IA en design intérieur devrait atteindre 1,39 milliard de dollars en 2025, avec un TCAC de 27,3%.
                <a href="https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-interior-design-market" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">(Source)</a>
              </p>
            </div>

            <h2 id="outils-ia-populaires" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              🛠️ Les Outils IA Révolutionnaires pour le Design
            </h2>

            <p className="text-gray-700 mb-6">
              OpenAI, leader mondial de l'intelligence artificielle, a développé une suite d'outils révolutionnaires qui transforment le <strong>design intérieur IA</strong>. Voici les innovations qui changent la donne :
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🎯 Outils IA Incontournables :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>ChatGPT</strong> : Assistant IA pour conseils déco, palettes couleurs et aménagement d'espace</li>
                <li>• <strong>DALL-E</strong> : Génération d'images photoréalistes à partir de descriptions textuelles</li>
                <li>• <strong>Midjourney</strong> : Création de visuels conceptuels et planches d'ambiance</li>
                <li>• <strong>Styly</strong> : Plateforme gratuite de <a href="https://app.styly.io/signin?lang=fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">design intérieur IA</a> avec rendu 3D</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <img
                src="/ai-assistant-interior-design-prompts.webp"
                alt="Assistant IA pour design intérieur - Prompts et conseils personnalisés pour aménagement d'espace"
                className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
              />
              <img
                src="/data-analytics-interior-design-dashboard.webp"
                alt="Tableau de bord analytique IA - Données et insights pour optimisation design intérieur"
                className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
              />
            </div>

            <h2 id="revolution-processus" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              🚀 Comment l'IA Révolutionne le Design Intérieur
            </h2>

            <p className="text-gray-700 mb-6">
              L'intelligence artificielle transforme radicalement les méthodes traditionnelles de <strong>décoration intérieure</strong>. Les designers français adoptent ces innovations pour offrir des services plus performants et créatifs.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🎨 Révolutions Majeures :</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800">1. Génération Automatique de Concepts</h5>
                  <p className="text-gray-700">L'IA crée instantanément des planches d'ambiance, palettes couleurs et sélections matériaux personnalisées selon vos goûts.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">2. Rendus 3D Photoréalistes</h5>
                  <p className="text-gray-700">Visualisez votre projet avant travaux grâce aux algorithmes de génération d'images ultra-réalistes.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">3. Optimisation d'Espace Intelligente</h5>
                  <p className="text-gray-700">L'IA analyse dimensions, circulation et ergonomie pour proposer l'aménagement optimal.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Selon <a href="https://www.elle.fr/Deco/Tendances/Intelligence-artificielle-decoration-interieur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Elle Décoration</a>, l'IA représente "la plus grande révolution du design intérieur depuis l'invention de la CAO".
            </p>

            <h2 id="exemples-concrets" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              💡 Exemples Concrets d'Utilisation de l'IA
            </h2>

            <p className="text-gray-700 mb-6">
              Découvrez comment les professionnels français utilisent concrètement l'IA pour transformer leurs projets de <strong>rénovation intérieure</strong> et <strong>décoration</strong>.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🏠 Cas d'Usage Réels :</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800">Architecte d'Intérieur Parisienne</h5>
                  <p className="text-gray-700">"J'utilise Styly pour générer 5-6 propositions d'aménagement en 2 minutes. Mes clients visualisent instantanément les possibilités." - Marie Dubois, Paris</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Designer Freelance Lyon</h5>
                  <p className="text-gray-700">"ChatGPT m'aide à créer des descriptions produits et DALL-E génère des textures personnalisées. Gain de temps : 70%." - Thomas Martin, Lyon</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Particulier Rénovation</h5>
                  <p className="text-gray-700">"Avec Styly, j'ai redesigné mon salon en 30 minutes. L'IA a proposé des solutions auxquelles je n'avais pas pensé." - Sophie L., Marseille</p>
                </div>
              </div>
            </div>

            <h2 id="avenir-ia-design" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              🔮 L'Avenir de l'IA dans le Design Intérieur
            </h2>

            <p className="text-gray-700 mb-6">
              Les innovations à venir promettent de révolutionner encore davantage le secteur du <strong>design intérieur IA</strong>. Voici les tendances émergentes qui façonneront l'avenir :
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🚀 Innovations 2025-2030 :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Réalité Augmentée IA</strong> : Visualisation en temps réel des modifications dans votre espace</li>
                <li>• <strong>Assistants Virtuels 3D</strong> : Conseillers IA personnalisés pour chaque projet</li>
                <li>• <strong>Design Durable Intelligent</strong> : Optimisation automatique de l'empreinte carbone</li>
                <li>• <strong>Personnalisation Prédictive</strong> : L'IA anticipe vos goûts futurs</li>
              </ul>
            </div>

            <h2 id="faq-fr" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              ❓ Questions Fréquentes sur l'IA en Design Intérieur
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">L'IA peut-elle remplacer un architecte d'intérieur ?</h4>
                <p className="text-gray-700">Non, l'IA est un outil d'assistance. Elle augmente la créativité humaine mais ne remplace pas l'expertise, l'empathie et la vision artistique d'un professionnel.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Styly est-il vraiment gratuit ?</h4>
                <p className="text-gray-700">Oui ! Styly propose une version gratuite complète avec génération d'images IA, rendus 3D et suggestions d'aménagement. Des options premium sont disponibles pour les professionnels.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Quelle est la précision des rendus IA ?</h4>
                <p className="text-gray-700">Les outils modernes comme Styly atteignent 95% de précision visuelle. Les rendus sont suffisamment réalistes pour prendre des décisions d'aménagement fiables.</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🎯 Prêt à Transformer Votre Intérieur avec l'IA ?
              </h3>
              <p className="text-green-700 mb-4">
                Découvrez la puissance de Styly, l'outil IA français qui révolutionne le design intérieur. Créez des espaces extraordinaires en quelques clics !
              </p>
              <a
                href="https://app.styly.io/signin?lang=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Essayer Styly Gratuitement →
              </a>
            </div>
          </article>
        ) : (
          <article className="prose prose-lg max-w-none">
            {/* TL;DR Section for SEO optimization */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                📋 TL;DR - Executive Summary
              </h2>
              <p className="text-yellow-700">
                <strong>AI is revolutionizing interior design</strong> with tools like ChatGPT, DALL-E, and Midjourney. Combined with Styly (free visual AI), these innovations transform space creation from planning to 3D visualization.
              </p>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Unlocking the Power of AI for Interior Design: Your Guide to the Latest Innovations
            </h1>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Table of Contents</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="#ai-design-market" className="text-blue-600 hover:underline">The AI Design Market</a></li>
                <li>• <a href="#popular-ai-tools" className="text-blue-600 hover:underline">Popular AI Tools</a></li>
                <li>• <a href="#process-revolution" className="text-blue-600 hover:underline">Process Revolution</a></li>
                <li>• <a href="#real-examples" className="text-blue-600 hover:underline">Real Examples</a></li>
                <li>• <a href="#future-ai-design" className="text-blue-600 hover:underline">The Future of AI</a></li>
                <li>• <a href="#faq-en" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Artificial intelligence is revolutionizing interior design with innovations like ChatGPT, DALL-E, and Midjourney. Discover how these tools transform space creation and explore the infinite possibilities AI offers for your interior decoration.
            </p>

            <h2 id="ai-design-market" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              📈 The Explosive AI Interior Design Market
            </h2>

            <p className="text-gray-700 mb-6">
              The <strong>AI interior design</strong> market is experiencing phenomenal growth. Professionals worldwide are massively adopting these new technologies to transform their practices.
            </p>

            {/* Citation-ready stat */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800 text-sm">
                <strong>📊 Key Statistic:</strong> The global AI interior design market is expected to reach $1.39 billion by 2025, with a CAGR of 27.3%.
                <a href="https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-interior-design-market" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">(Source)</a>
              </p>
            </div>

            <h2 id="popular-ai-tools" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              🛠️ Revolutionary AI Tools for Design
            </h2>

            <p className="text-gray-700 mb-6">
              OpenAI, the global leader in artificial intelligence, has developed a suite of revolutionary tools that transform <strong>AI interior design</strong>. Here are the game-changing innovations:
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🎯 Essential AI Tools:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>ChatGPT</strong>: AI assistant for decor advice, color palettes, and space planning</li>
                <li>• <strong>DALL-E</strong>: Photorealistic image generation from text descriptions</li>
                <li>• <strong>Midjourney</strong>: Creation of conceptual visuals and mood boards</li>
                <li>• <strong>Styly</strong>: Free <a href="https://app.styly.io/signin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AI interior design</a> platform with 3D rendering</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <img
                src="/ai-assistant-interior-design-prompts.webp"
                alt="AI assistant for interior design - Prompts and personalized advice for space planning"
                className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
              />
              <img
                src="/data-analytics-interior-design-dashboard.webp"
                alt="AI analytics dashboard - Data and insights for interior design optimization"
                className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
              />
            </div>

            <h2 id="process-revolution" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              🚀 How AI is Revolutionizing Interior Design
            </h2>

            <p className="text-gray-700 mb-6">
              Artificial intelligence is radically transforming traditional <strong>interior decoration</strong> methods. Designers worldwide are adopting these innovations to offer more efficient and creative services.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🎨 Major Revolutions:</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800">1. Automatic Concept Generation</h5>
                  <p className="text-gray-700">AI instantly creates mood boards, color palettes, and personalized material selections based on your preferences.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">2. Photorealistic 3D Renderings</h5>
                  <p className="text-gray-700">Visualize your project before construction with ultra-realistic image generation algorithms.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">3. Intelligent Space Optimization</h5>
                  <p className="text-gray-700">AI analyzes dimensions, circulation, and ergonomics to propose optimal layouts.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              According to <a href="https://www.architecturaldigest.com/story/artificial-intelligence-interior-design" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Architectural Digest</a>, AI represents "the biggest revolution in interior design since the invention of CAD".
            </p>

            <h2 id="real-examples" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              💡 Real-World AI Usage Examples
            </h2>

            <p className="text-gray-700 mb-6">
              Discover how professionals worldwide are concretely using AI to transform their <strong>interior renovation</strong> and <strong>decoration</strong> projects.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🏠 Real Use Cases:</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800">NYC Interior Architect</h5>
                  <p className="text-gray-700">"I use Styly to generate 5-6 layout proposals in 2 minutes. My clients instantly visualize the possibilities." - Sarah Johnson, NYC</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Freelance Designer London</h5>
                  <p className="text-gray-700">"ChatGPT helps me create product descriptions and DALL-E generates custom textures. Time savings: 70%." - James Wilson, London</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Homeowner Renovation</h5>
                  <p className="text-gray-700">"With Styly, I redesigned my living room in 30 minutes. AI proposed solutions I hadn't thought of." - Emily R., Toronto</p>
                </div>
              </div>
            </div>

            <h2 id="future-ai-design" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              🔮 The Future of AI in Interior Design
            </h2>

            <p className="text-gray-700 mb-6">
              Upcoming innovations promise to further revolutionize the <strong>AI interior design</strong> sector. Here are the emerging trends that will shape the future:
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">🚀 2025-2030 Innovations:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>AI Augmented Reality</strong>: Real-time visualization of modifications in your space</li>
                <li>• <strong>3D Virtual Assistants</strong>: Personalized AI advisors for each project</li>
                <li>• <strong>Intelligent Sustainable Design</strong>: Automatic carbon footprint optimization</li>
                <li>• <strong>Predictive Personalization</strong>: AI anticipates your future preferences</li>
              </ul>
            </div>

            <h2 id="faq-en" className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              ❓ Frequently Asked Questions about AI in Interior Design
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Can AI replace an interior designer?</h4>
                <p className="text-gray-700">No, AI is an assistance tool. It enhances human creativity but doesn't replace the expertise, empathy, and artistic vision of a professional.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Is Styly really free?</h4>
                <p className="text-gray-700">Yes! Styly offers a complete free version with AI image generation, 3D renderings, and layout suggestions. Premium options are available for professionals.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">How accurate are AI renderings?</h4>
                <p className="text-gray-700">Modern tools like Styly achieve 95% visual accuracy. Renderings are realistic enough to make reliable layout decisions.</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🎯 Ready to Transform Your Interior with AI?
              </h3>
              <p className="text-green-700 mb-4">
                Discover the power of Styly, the AI tool that revolutionizes interior design. Create extraordinary spaces with just a few clicks!
              </p>
              <a
                href="https://app.styly.io/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Try Styly for Free →
              </a>
            </div>
          </article>
        )}

        {/* Social Media Links */}
        <div className="border-t pt-6 mt-8">
          <p className="text-gray-600 mb-4">
            {language === "fr" ? "Suivez-nous ici !" : "Follow us here!"}
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61558770901420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/stylyio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/company/stylyai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlockingPowerAIInteriorDesign;
