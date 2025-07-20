import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const AssistantIADesignInterieurPromptsChatGPT: React.FC = () => {
  const { language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (language === "fr") {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
        <Helmet>
          <title>Assistant IA Design Intérieur : Meilleurs Prompts ChatGPT et Styly AI | Styly.fr</title>
          <meta name="description" content="Découvrez les meilleurs prompts ChatGPT et Styly AI pour le design intérieur. Guide complet pour utiliser l'intelligence artificielle en décoration." />
          <meta name="keywords" content="assistant IA design intérieur, prompts ChatGPT décoration, Styly AI prompts, intelligence artificielle design, IA décoration intérieure" />
          <meta property="og:title" content="Assistant IA Design Intérieur : Meilleurs Prompts ChatGPT et Styly AI" />
          <meta property="og:description" content="Maîtrisez l'art des prompts IA pour révolutionner votre approche du design intérieur." />
          <meta property="og:image" content="https://www.styly.fr/Blogpages/ai-assistant-interior-design-prompts.jpg" />
          <meta property="og:url" content="https://www.styly.fr/blog/assistant-ia-design-interieur-prompts-chatgpt" />
          <link rel="canonical" href="https://www.styly.fr/blog/assistant-ia-design-interieur-prompts-chatgpt" />
        </Helmet>
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Assistant IA Design Intérieur : Meilleurs Prompts ChatGPT et Styly AI
            </h1>
            <div className="text-sm text-gray-500 mb-2">
              <time dateTime="2025-01-25">25 janvier 2025</time>
              <span className="mx-2">•</span>
              <span>IA & Prompts Design</span>
            </div>
            <img
              src="/Blogpages/ai-assistant-interior-design-prompts.jpg"
              alt="Assistant IA design intérieur prompts ChatGPT Styly AI - Guide complet"
              className="w-full h-[400px] object-cover rounded-xl mb-6"
            />
          </header>

          <section className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              L'intelligence artificielle transforme radicalement le monde du design intérieur. Que vous utilisiez ChatGPT pour 
              la planification ou <strong>Styly AI</strong> pour la visualisation, maîtriser l'art des prompts est essentiel 
              pour obtenir des résultats exceptionnels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Utiliser l'IA pour le Design Intérieur ?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Génération d'idées créatives illimitées</li>
              <li>Visualisation instantanée des concepts</li>
              <li>Optimisation de l'espace et des budgets</li>
              <li>Personnalisation selon vos préférences</li>
              <li>Gain de temps considérable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prompts ChatGPT pour la Planification Design</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Analyse d'Espace</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Analyse cette pièce de [dimensions] avec [description actuelle]. Propose 3 aménagements 
                optimisés pour [usage souhaité] en tenant compte de [contraintes spécifiques]."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Sélection de Couleurs</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Crée une palette de couleurs pour un [type de pièce] de style [style décoratif] 
                qui évoque [ambiance souhaitée]. Inclus les codes couleurs et leur utilisation."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Budget et Shopping List</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Établis un budget détaillé pour redécorer un [type de pièce] avec un budget de [montant]. 
                Priorise les achats et suggère des alternatives économiques."
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prompts Styly AI pour la Visualisation</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Transformation Complète</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Salon moderne minimaliste, couleurs neutres blanc et gris, mobilier épuré, 
                éclairage naturel, plantes vertes, ambiance zen et sophistiquée"
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Style Spécifique</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Cuisine style industriel, îlot central métal et bois, suspensions Edison, 
                carrelage métro blanc, touches de cuivre, ambiance loft urbain"
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Optimisation d'Espace</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Petit appartement studio optimisé, solutions de rangement intégrées, 
                mobilier multifonction, couleurs claires, miroirs pour agrandir l'espace"
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Techniques Avancées de Prompting</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Structure d'un Prompt Efficace</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Contexte :</strong> Type de pièce et usage</li>
              <li><strong>Style :</strong> Référence décorative précise</li>
              <li><strong>Couleurs :</strong> Palette spécifique</li>
              <li><strong>Matériaux :</strong> Textures et finitions</li>
              <li><strong>Ambiance :</strong> Feeling recherché</li>
              <li><strong>Contraintes :</strong> Budget, espace, besoins</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mots-Clés Puissants</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ambiances :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cocooning, zen, énergique</li>
                  <li>• Sophistiqué, chaleureux</li>
                  <li>• Minimaliste, maximaliste</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Styles :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Scandinave, industriel</li>
                  <li>• Bohème, art déco</li>
                  <li>• Contemporain, vintage</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Workflow Optimal : ChatGPT + Styly AI</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-4">
              <li><strong>Planification avec ChatGPT :</strong> Analysez vos besoins et contraintes</li>
              <li><strong>Génération d'idées :</strong> Obtenez des concepts et palettes</li>
              <li><strong>Visualisation avec Styly AI :</strong> Transformez les idées en images</li>
              <li><strong>Itération :</strong> Affinez avec des prompts plus précis</li>
              <li><strong>Validation :</strong> Comparez les options générées</li>
              <li><strong>Implémentation :</strong> Utilisez les résultats pour vos achats</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Erreurs à Éviter</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Prompts trop vagues ou génériques</li>
              <li>Oublier de mentionner les contraintes</li>
              <li>Ne pas itérer sur les résultats</li>
              <li>Ignorer l'aspect fonctionnel</li>
              <li>Ne pas tester plusieurs variations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La combinaison de ChatGPT pour la planification et de <strong>Styly AI</strong> pour la visualisation 
              offre un workflow puissant pour révolutionner votre approche du design intérieur. Maîtrisez l'art 
              des prompts pour libérer tout le potentiel de l'intelligence artificielle.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg mt-6">
              <p className="text-purple-800 font-medium">
                Prêt à devenir un expert des prompts IA ? 
                <a href="https://app.styly.fr/signin" className="text-purple-600 hover:text-purple-800 underline ml-1">
                  Commencez avec Styly AI
                </a> et transformez vos idées en réalité visuelle.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Partagez cet article</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.styly.fr/blog/assistant-ia-design-interieur-prompts-chatgpt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="https://twitter.com/intent/tweet?url=https://www.styly.fr/blog/assistant-ia-design-interieur-prompts-chatgpt&text=Assistant IA Design Intérieur : Meilleurs Prompts ChatGPT et Styly AI" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.styly.fr/blog/assistant-ia-design-interieur-prompts-chatgpt" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
            </div>
          </section>
        </article>
      </div>
    );
  }

  // English version fallback
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      <Helmet>
        <title>AI Interior Design Assistant: Best ChatGPT and Styly AI Prompts | Styly.fr</title>
        <meta name="description" content="Discover the best ChatGPT and Styly AI prompts for interior design." />
      </Helmet>
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Interior Design Assistant: Best ChatGPT and Styly AI Prompts
          </h1>
          <p className="text-lg text-gray-700">
            Master the art of AI prompts to revolutionize your interior design approach.
          </p>
        </header>
      </article>
    </div>
  );
};

export default AssistantIADesignInterieurPromptsChatGPT;
