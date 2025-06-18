import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const AIAssistantInteriorDesignPrompts: React.FC = () => {
  const { language, t } = useLanguage();

  const addAlternateLanguageLink = () => {
    const currentSlug = language === "fr" 
      ? "assistant-ia-design-interieur-prompts-chatgpt" 
      : "ai-assistant-interior-design-chatgpt-prompts";
    const alternateSlug = language === "fr" 
      ? "ai-assistant-interior-design-chatgpt-prompts" 
      : "assistant-ia-design-interieur-prompts-chatgpt";
    const alternateLang = language === "fr" ? "en" : "fr";
    
    return (
      <link
        rel="alternate"
        hrefLang={alternateLang}
        href={alternateLang === 'fr' ? `https://www.styly.fr/blog/${alternateSlug}` : `https://www.styly.fr/en/blog/${alternateSlug}`}
      />
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Helmet>
        <title>
          {language === "fr" 
            ? "Assistant IA en Design Intérieur - Meilleurs Prompts pour ChatGPT, Gemini, Mistral | Styly.fr"
            : "AI Assistant in Interior Design - Best Prompts for ChatGPT, Gemini, Mistral | Styly.fr"
          }
        </title>
        <meta
          name="description"
          content={
            language === "fr"
              ? "Découvrez les meilleurs prompts pour utiliser ChatGPT, Gemini et Mistral en design intérieur. Guide complet pour optimiser l'IA dans vos projets de décoration."
              : "Discover the best prompts for using ChatGPT, Gemini, and Mistral in interior design. Complete guide to optimize AI in your decoration projects."
          }
        />
        <meta
          name="keywords"
          content={
            language === "fr"
              ? "assistant IA design intérieur, prompts ChatGPT design, IA décoration intérieure, Gemini design intérieur, Mistral IA, logiciel design interieur gratuit, ia design intérieur gratuit"
              : "AI assistant interior design, ChatGPT design prompts, AI interior decoration, Gemini interior design, Mistral AI, free interior design software, AI interior design free"
          }
        />
        {addAlternateLanguageLink()}
      </Helmet>

      <article className="prose prose-lg max-w-none">
        {language === "fr" ? (
          <>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-700 mb-4">
                L'intégration de la technologie IA a révolutionné l'industrie du design intérieur, permettant aux designers de donner vie à leurs visions créatives comme jamais auparavant. Ce blog explore le rôle d'un assistant IA spécialisé en design intérieur et comment il peut élever le processus de design pour les professionnels de ce domaine.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Table des Matières :</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
              <li><strong>Introduction</strong></li>
              <li><strong>Le Rôle de l'Assistant IA</strong></li>
              <li><strong>Le Processus</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Révision du Prompt de Design</li>
                  <li>Sélection du Modèle IA Approprié</li>
                  <li>Génération d'Images Itérative</li>
                  <li>Présentation des Images Finales</li>
                </ul>
              </li>
              <li><strong>Les Avantages du Design Intérieur Assisté par IA</strong></li>
              <li><strong>Conclusion</strong></li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              L'intégration de la technologie IA a révolutionné l'industrie du design intérieur, permettant aux designers de donner vie à leurs visions créatives comme jamais auparavant. Ce blog explore le rôle d'un assistant IA spécialisé en design intérieur et comment il peut élever le processus de design pour les professionnels de ce domaine.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Le Rôle de l'Assistant IA :</h2>
            <p className="text-gray-700 mb-6">
              L'assistant IA sert d'outil puissant entre les mains des designers d'intérieur. En exploitant des modèles avancés de génération d'images, l'assistant peut transformer les prompts de design en représentations visuelles époustouflantes qui capturent l'essence de l'esthétique désirée. Que l'objectif soit de transformer la <a href="https://styly.io" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">décoration de maison</a>, une cuisine élégante ou une chambre sereine, l'assistant IA est équipé pour aider les designers à chaque étape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src="/ai-interior-design-technology.webp"
                alt="Assistant IA design intérieur prompts"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/ai-room-design-free.webp"
                alt="ChatGPT assistant design intérieur"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Le Processus :</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Révision du Prompt de Design :</h3>
            <p className="text-gray-700 mb-4">
              La première étape de la collaboration consiste pour le designer d'intérieur à fournir un prompt de design détaillé. Ce prompt doit décrire les éléments spécifiques, les styles et l'ambiance générale que le designer souhaite atteindre. L'assistant IA analyse soigneusement le prompt, s'assurant d'une compréhension complète de la vision du designer.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Sélection du Modèle IA Approprié :</h3>
            <p className="text-gray-700 mb-4">
              Basé sur les détails du prompt, l'assistant IA sélectionne le modèle de génération d'images le plus approprié. L'expertise de l'assistant réside dans l'évaluation des capacités du modèle, s'assurant qu'il peut capturer avec précision le style, les textures et les détails spécifiés dans le prompt.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Génération d'Images Itérative :</h3>
            <p className="text-gray-700 mb-4">
              Avec le modèle en place, l'assistant IA commence le processus de génération d'images. L'assistant surveille étroitement les résultats, apportant des ajustements aux paramètres du modèle ou fournissant des conseils supplémentaires selon les besoins. Cette approche itérative permet à l'assistant d'affiner les images jusqu'à ce qu'elles s'alignent parfaitement avec la vision du designer.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Présentation des Images Finales :</h3>
            <p className="text-gray-700 mb-6">
              Une fois que l'assistant IA est satisfait des images générées, elles sont présentées au designer d'intérieur avec une description détaillée de chacune. L'assistant souligne comment les images capturent les éléments clés du prompt de design et signale toute caractéristique ou élément notable qui a été incorporé.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src="/ai-interior-design-free-tools.webp"
                alt="Outils IA design intérieur gratuits"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/viral-ai-room-design-prompts-hero.webp"
                alt="Exemples prompts design chambre IA"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Les Avantages du Design Intérieur Assisté par IA :</h2>
            <p className="text-gray-700 mb-4">
              En collaborant avec un assistant IA, les designers d'intérieur peuvent débloquer un monde de possibilités dans leurs projets. Voici quelques-uns des principaux avantages :
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Idéation et Visualisation Plus Rapides :</h3>
            <p className="text-gray-700 mb-4">
              La capacité de générer des images de haute qualité basées sur des prompts permet aux designers d'explorer et de visualiser les concepts de design plus efficacement, leur permettant de prendre des décisions éclairées et d'itérer sur leurs idées plus rapidement.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Esthétique Cohérente :</h3>
            <p className="text-gray-700 mb-4">
              La cohérence et la précision des modèles IA garantissent que les images générées maintiennent une esthétique cohérente et harmonieuse, même lors de l'exploration de multiples directions de design.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Exploration de Styles Uniques :</h3>
            <p className="text-gray-700 mb-4">
              L'accès de l'assistant IA à une vaste gamme de modèles signifie que les designers peuvent expérimenter avec une large gamme de styles, du classique et traditionnel au contemporain et avant-gardiste, ouvrant de nouvelles voies pour l'expression créative et l'innovation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Efficacité Économe en Temps :</h3>
            <p className="text-gray-700 mb-6">
              En automatisant le processus de génération d'images, l'assistant IA peut faire économiser aux designers un temps et des ressources précieux, leur permettant de se concentrer sur les aspects de plus haut niveau de leurs projets de design.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Prompt Gratuit pour Assistant IA Design Intérieur :</h3>
              <p className="text-gray-700 mb-4">
                Voici le prompt gratuit pour l'Assistant IA Design Intérieur que vous pouvez utiliser avec ChatGPT, Gemini, ou Mistral :
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-sm text-gray-700">
                <p className="font-semibold mb-2">Vous êtes un assistant IA spécialisé en design intérieur. Votre rôle est d'aider un designer d'intérieur à générer des images de haute qualité en utilisant des modèles IA basés sur leurs prompts et exigences.</p>
                <p className="mb-2">Premièrement, examinez attentivement le prompt de design fourni par l'utilisateur :</p>
                <p className="mb-2">&lt;prompt&gt; ……&lt;/prompt&gt;</p>
                <p className="mb-2">Utilisez ce prompt pour guider le processus de génération d'images. Portez une attention particulière aux détails spécifiques, styles ou éléments mentionnés dans le prompt.</p>
                <p className="mb-2">Ensuite, sélectionnez le modèle IA le plus approprié pour générer des images basées sur le prompt.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion :</h2>
            <p className="text-gray-700 mb-6">
              L'intégration de la technologie IA dans le design intérieur peut révolutionner l'industrie, permettant aux designers d'élever leurs visions créatives et de livrer des résultats époustouflants qui captivent les clients et transforment les espaces. En collaborant avec un assistant IA, les designers d'intérieur peuvent débloquer de nouvelles possibilités, repousser les limites du design et créer des espaces vraiment exceptionnels qui inspirent et ravissent.
            </p>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Articles Connexes :
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <a href="/blog/comment-ia-generative-revolutionne-design-interieur" className="text-blue-600 hover:underline font-medium">
                    → Comment l'IA Générative Révolutionne le Design Intérieur
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Découvrez les technologies IA qui transforment le design</span>
                </li>
                <li>
                  <a href="/blog/6-prompts-viraux-design-chambre-ia-styly" className="text-blue-600 hover:underline font-medium">
                    → 6 Prompts Viraux de Design de Chambre IA
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Exemples pratiques de prompts pour créer des chambres époustouflantes</span>
                </li>
                <li>
                  <a href="/blog/logiciel-gratuit-design-interieur-ia" className="text-blue-600 hover:underline font-medium">
                    → Logiciel Gratuit de Design Intérieur IA
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Outils IA gratuits pour transformer vos espaces</span>
                </li>
                <li>
                  <a href="/blog/impact-ia-role-designer-interieur" className="text-blue-600 hover:underline font-medium">
                    → L'Impact de l'IA sur le Rôle du Designer d'Intérieur
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Comment l'IA transforme la profession de designer</span>
                </li>
                <li>
                  <a href="/blog/guide-ultime-outils-design-interieur-ia-2025" className="text-blue-600 hover:underline font-medium">
                    → Guide Ultime des Outils de Design Intérieur IA 2025
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Comparaison complète des meilleurs outils IA</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                💡 Ressources Externes Recommandées :
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="https://www.elle.fr/Deco" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    → Elle Décoration - Tendances Design
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Inspiration et tendances décoration</span>
                </li>
                <li>
                  <a href="https://www.houzz.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    → Houzz France - Idées Décoration
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Plateforme de design et décoration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-gray-700 text-center">
                <strong>Suivez-nous :</strong><br />
                <a href="https://www.instagram.com/stylyio/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Instagram</a>
                <a href="https://www.linkedin.com/company/styly-io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=61558770901420" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Facebook</a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-700 mb-4">
                The integration of AI technology has revolutionized the interior design industry, empowering designers to bring their creative visions to life like never before. This blog explores the role of an AI assistant specializing in interior design, and how it can elevate the design process for professionals in this field.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Table of Contents:</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
              <li><strong>Introduction</strong></li>
              <li><strong>The Role of the AI Assistant</strong></li>
              <li><strong>The Process</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Reviewing the Design Prompt</li>
                  <li>Selecting the Appropriate AI Model</li>
                  <li>Iterative Image Generation</li>
                  <li>Presenting the Final Images</li>
                </ul>
              </li>
              <li><strong>The Benefits of AI-Assisted Interior Design</strong></li>
              <li><strong>Conclusion</strong></li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              The integration of AI technology has revolutionized the interior design industry, empowering designers to bring their creative visions to life like never before. This blog explores the role of an AI assistant specializing in interior design, and how it can elevate the design process for professionals in this field.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Role of the AI Assistant:</h2>
            <p className="text-gray-700 mb-6">
              The AI assistant serves as a powerful tool in the hands of interior designers. By leveraging advanced image generation models, the assistant can transform design prompts into stunning visual representations that capture the essence of the desired aesthetic. Whether the goal is to transform <a href="https://styly.io" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">home decoration</a>, a sleek kitchen, or a serene bedroom, the AI assistant is equipped to assist designers every step of the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src="/ai-interior-design-technology.webp"
                alt="AI assistant interior design prompts"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/ai-room-design-free.webp"
                alt="ChatGPT interior design assistant"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Process:</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Reviewing the Design Prompt:</h3>
            <p className="text-gray-700 mb-4">
              The first step in the collaboration is for the interior designer to provide a detailed design prompt. This prompt should outline the specific elements, styles, and overall ambiance the designer wishes to achieve. The AI assistant carefully analyzes the prompt, ensuring a full understanding of the designer's vision.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Selecting the Appropriate AI Model:</h3>
            <p className="text-gray-700 mb-4">
              Based on the details in the prompt, the AI assistant selects the most suitable image generation model. The assistant's expertise lies in evaluating the model's capabilities, ensuring it can accurately capture the style, textures, and details specified in the prompt.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Iterative Image Generation:</h3>
            <p className="text-gray-700 mb-4">
              With the model in place, the AI assistant begins the image generation process. The assistant closely monitors the results, making adjustments to the model parameters or providing additional guidance as needed. This iterative approach allows the assistant to refine the images until they align perfectly with the designer's vision.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Presenting the Final Images:</h3>
            <p className="text-gray-700 mb-6">
              Once the AI assistant is satisfied with the generated images, they are presented to the interior designer with a detailed description of each one. The assistant highlights how the images capture the key elements of the design prompt and points out any notable features or elements that have been incorporated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src="/ai-interior-design-free-tools.webp"
                alt="AI interior design free tools"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/viral-ai-room-design-prompts-hero.webp"
                alt="AI room design prompts examples"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Benefits of AI-Assisted Interior Design:</h2>
            <p className="text-gray-700 mb-4">
              By collaborating with an AI assistant, interior designers can unlock a world of possibilities in their projects. Some of the key benefits include:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Faster Idealization and Visualization:</h3>
            <p className="text-gray-700 mb-4">
              The ability to generate high-quality images based on prompts allows designers to explore and visualize design concepts more efficiently, enabling them to make informed decisions and iterate on their ideas more quickly.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Consistent Aesthetic:</h3>
            <p className="text-gray-700 mb-4">
              The consistency and precision of AI models ensure that the generated images maintain a cohesive and harmonious aesthetic, even when exploring multiple design directions.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Exploration of Unique Styles:</h3>
            <p className="text-gray-700 mb-4">
              The AI assistant's access to a vast array of models means designers can experiment with a wide range of styles, from classic and traditional to contemporary and avant-garde, opening up new avenues for creative expression and innovation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Time-Saving Efficiency:</h3>
            <p className="text-gray-700 mb-6">
              By automating the image generation process, the AI assistant can save designers valuable time and resources, allowing them to focus on the higher-level aspects of their design projects.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Free Task Prompt for Interior AI Design Assistant:</h3>
              <p className="text-gray-700 mb-4">
                Here is the free task prompt for Interior AI Design Assistant that you can use with ChatGPT, Gemini, or Mistral:
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-sm text-gray-700">
                <p className="font-semibold mb-2">You are an AI assistant specializing in interior design. Your role is to help an interior designer generate high-quality images using AI models based on their prompts and requirements.</p>
                <p className="mb-2">First, carefully review the design prompt provided by the user:</p>
                <p className="mb-2">&lt;prompt&gt; ……&lt;/prompt&gt;</p>
                <p className="mb-2">Use this prompt to guide the image generation process. Pay close attention to any specific details, styles, or elements mentioned in the prompt.</p>
                <p className="mb-2">Next, select the most appropriate AI model for generating images based on the prompt.</p>
                <p className="mb-2">Consider factors like style, aesthetic, level of detail, realism needed, specific objects, textures, and overall complexity of the scene described.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion:</h2>
            <p className="text-gray-700 mb-6">
              The integration of AI technology in interior design can revolutionize the industry, empowering designers to elevate their creative visions and deliver stunning results that captivate clients and transform spaces. By collaborating with an AI assistant, interior designers can unlock new possibilities, push the boundaries of design, and create truly exceptional spaces that inspire and delight.
            </p>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Related Articles:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <a href="/en/blog/how-generative-ai-revolutionizing-interior-design" className="text-blue-600 hover:underline font-medium">
                    → How Generative AI is Revolutionizing Interior Design
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Discover AI technologies transforming design</span>
                </li>
                <li>
                  <a href="/en/blog/6-viral-ai-room-design-prompts-create-dream-bedroom-styly" className="text-blue-600 hover:underline font-medium">
                    → 6 Viral AI Room Design Prompts
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Practical prompt examples for stunning bedroom designs</span>
                </li>
                <li>
                  <a href="/en/blog/free-ai-interior-design-software" className="text-blue-600 hover:underline font-medium">
                    → Free AI Interior Design Software
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Free AI tools to transform your spaces</span>
                </li>
                <li>
                  <a href="/en/blog/impact-ai-role-interior-designer" className="text-blue-600 hover:underline font-medium">
                    → The Impact of AI on Interior Designer Role
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">How AI is transforming the design profession</span>
                </li>
                <li>
                  <a href="/en/blog/ultimate-guide-AI" className="text-blue-600 hover:underline font-medium">
                    → Ultimate Guide to AI Interior Design Tools 2025
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Comprehensive comparison of the best AI tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                💡 Recommended External Resources:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="https://www.architecturaldigest.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    → Architectural Digest - Design Inspiration
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Premium design and architecture content</span>
                </li>
                <li>
                  <a href="https://www.houzz.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    → Houzz - Home Design Platform
                  </a>
                  <span className="text-sm text-gray-600 block ml-4">Leading platform for home design and decoration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-gray-700 text-center">
                <strong>Follow Us:</strong><br />
                <a href="https://www.instagram.com/stylyio/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Instagram</a>
                <a href="https://www.linkedin.com/company/styly-io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=61558770901420" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Facebook</a>
              </p>
            </div>
          </>
        )}
      </article>
    </div>
  );
};

export default AIAssistantInteriorDesignPrompts;
