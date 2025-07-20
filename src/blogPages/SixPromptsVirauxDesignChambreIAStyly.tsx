import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const SixPromptsVirauxDesignChambreIAStyly: React.FC = () => {
  const { language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (language === "fr") {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
        <Helmet>
          <title>6 Prompts Viraux pour le Design de Chambre avec l'IA Styly | Styly.fr</title>
          <meta name="description" content="Découvrez 6 prompts viraux pour créer des designs de chambre époustouflants avec Styly AI. Transformez votre chambre avec l'intelligence artificielle." />
          <meta name="keywords" content="prompts IA design chambre, Styly AI chambre, design chambre IA, prompts viraux décoration, intelligence artificielle chambre" />
          <meta property="og:title" content="6 Prompts Viraux pour le Design de Chambre avec l'IA Styly" />
          <meta property="og:description" content="Créez des designs de chambre viraux avec ces 6 prompts optimisés pour Styly AI." />
          <meta property="og:image" content="https://www.styly.fr/Blogpages/viral-bedroom-prompts-ai.jpg" />
          <meta property="og:url" content="https://www.styly.fr/blog/6-prompts-viraux-design-chambre-ia-styly" />
      </Helmet>
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              6 Prompts Viraux pour le Design de Chambre avec l'IA Styly
            </h1>
            <div className="text-sm text-gray-500 mb-2">
              <time dateTime="2025-01-20">20 janvier 2025</time>
              <span className="mx-2">•</span>
              <span>Prompts IA & Design Chambre</span>
            </div>
            <img
              src="/Blogpages/viral-bedroom-prompts-ai.jpg"
              alt="Prompts viraux design chambre IA Styly - 6 exemples créatifs"
              className="w-full h-[400px] object-cover rounded-xl mb-6"
            />
          </header>

          <section className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              L'intelligence artificielle révolutionne la façon dont nous concevons nos espaces intérieurs. Avec <strong>Styly AI</strong>, 
              créez des designs de chambre époustouflants grâce à ces 6 prompts viraux qui font sensation sur les réseaux sociaux.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Le Prompt "Chambre Cocooning Scandinave"</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Chambre cocooning style scandinave, tons neutres beige et blanc, lit en bois naturel, 
                textiles doux, plantes vertes, lumière naturelle douce, minimalisme chaleureux"
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce prompt génère des chambres au style scandinave épuré et chaleureux, parfait pour créer une atmosphère apaisante.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Le Prompt "Chambre Bohème Moderne"</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Chambre bohème moderne, couleurs terracotta et ocre, macramé mural, tapis berbère, 
                plantes suspendues, éclairage tamisé, mix de textures naturelles"
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Parfait pour créer une ambiance bohème chic avec des éléments naturels et des couleurs chaudes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Le Prompt "Chambre Industrielle Chic"</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Chambre style industriel chic, murs en briques apparentes, mobilier métal et bois, 
                éclairage Edison, couleurs sombres avec touches dorées, esprit loft urbain"
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce prompt crée des chambres au style industriel raffiné, idéal pour un look urbain et moderne.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Le Prompt "Chambre Maximalist Colorée"</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Chambre maximalist vibrante, papier peint floral audacieux, couleurs vives rose et vert, 
                mix de motifs, objets déco éclectiques, ambiance joyeuse et énergique"
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour ceux qui aiment les intérieurs audacieux et colorés, ce prompt génère des chambres pleines de personnalité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Le Prompt "Chambre Zen Japonaise"</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Chambre zen inspiration japonaise, futon bas, cloisons shoji, bambou naturel, 
                couleurs neutres, espace épuré, méditation et sérénité"
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce prompt crée des espaces de repos inspirés de la philosophie zen japonaise, parfaits pour la détente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Le Prompt "Chambre Art Déco Glamour"</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-gray-800">
                "Chambre Art Déco glamour, velours émeraude et or, motifs géométriques, 
                miroirs dorés, lustre cristal, ambiance luxueuse années 20"
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour un style glamour et sophistiqué, ce prompt génère des chambres dignes des plus beaux hôtels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseils pour Optimiser vos Prompts</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Soyez spécifique sur les couleurs et matériaux</li>
              <li>Mentionnez l'ambiance souhaitée (cocooning, énergique, zen...)</li>
              <li>Incluez des détails sur l'éclairage</li>
              <li>Précisez le style décoratif de référence</li>
              <li>Ajoutez des éléments de texture pour plus de réalisme</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment Utiliser ces Prompts avec Styly AI</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Connectez-vous à votre compte Styly AI</li>
              <li>Uploadez une photo de votre chambre actuelle</li>
              <li>Copiez-collez l'un de ces prompts viraux</li>
              <li>Ajustez les détails selon vos préférences</li>
              <li>Générez et comparez plusieurs variations</li>
              <li>Partagez vos créations sur les réseaux sociaux</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ces 6 prompts viraux vous permettront de créer des designs de chambre exceptionnels avec <strong>Styly AI</strong>. 
              N'hésitez pas à les personnaliser selon vos goûts et à expérimenter avec différentes variations pour obtenir 
              le résultat parfait.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg mt-6">
              <p className="text-purple-800 font-medium">
                Prêt à créer votre chambre de rêve ? 
                <a href="https://app.styly.fr/signin" className="text-purple-600 hover:text-purple-800 underline ml-1">
                  Essayez Styly AI gratuitement
                </a> et transformez votre espace avec l'intelligence artificielle.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Partagez cet article</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.styly.fr/blog/6-prompts-viraux-design-chambre-ia-styly" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="https://twitter.com/intent/tweet?url=https://www.styly.fr/blog/6-prompts-viraux-design-chambre-ia-styly&text=6 Prompts Viraux pour le Design de Chambre avec l'IA Styly" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.styly.fr/blog/6-prompts-viraux-design-chambre-ia-styly" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
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
        <title>6 Viral Prompts for Bedroom Design with Styly AI | Styly.fr</title>
        <meta name="description" content="Discover 6 viral prompts to create stunning bedroom designs with Styly AI." />
      </Helmet>
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            6 Viral Prompts for Bedroom Design with Styly AI
          </h1>
          <p className="text-lg text-gray-700">
            Create viral bedroom designs with these 6 optimized prompts for Styly AI.
          </p>
        </header>
      </article>
    </div>
  );
};

export default SixPromptsVirauxDesignChambreIAStyly;
