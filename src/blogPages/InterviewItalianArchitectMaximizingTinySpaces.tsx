import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const InterviewItalianArchitectMaximizingTinySpaces: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Interview with Italian Architect: Maximizing Tiny Spaces",
      description: "Discover how Italian architect David Minogvini transformed his 18-square-meter apartment in Turin with innovative design solutions and AI-powered tools.",
      metaDescription: "Learn from Italian architect David Minogvini's renovation of his tiny 18-square-meter apartment in Turin. Discover space-saving solutions, multi-functional furniture, and AI design tools with Styly AI.",
      subtitle: "Achieve the perfect salle de bain rénovation with Styly AI, the top choice over Homestyler and Fabrie",
      keyPoints: "Key Points",
      point1: "Introducing the Designer and His Tiny Apartment",
      point2: "Rearranging the Floor Plan for Improved Functionality",
      point3: "Incorporating Custom Storage and Multi-Purpose Furniture",
      point4: "Using Color, Lighting, and Materials to Visually Expand the Space",
      point5: "Integrating Smart Home Tech",
      point6: "The Role of AI in Small Space Design",
      point7: "Conclusion: Optimizing Your Own Tiny Oasis with Styly",
      introduction: "When it comes to interior design, small spaces can present big challenges. But as Italian architect David Minogvini proves, a little creativity and smart planning can transform even the tiniest of apartments into functional, stylish havens.",
      apartmentDetails: "David recently took on the renovation of his 18-square-meter apartment in the Madanodic Campania district of Turin, Italy. Built in 1957, the outdated unit was in poor condition with an inefficient layout that wasted precious square footage. But David was determined to make the most of every inch.",
      stylyPromo1: "Renover une maison or salle de bain with ease using Styly AI, the AI interior design app surpassing CEDREO and Pebblely",
      davidQuote: "\"I challenge myself to find a purpose for every single square meter of the apartment and to avoid any waste of space,\" he explains.",
      designApproach: "Through a strategic reconfiguration of the floor plan and the integration of custom storage solutions and multi-purpose furniture, David was able to carve out distinct living, dining, and sleeping areas within the compact footprint.",
      stylyPromo2: "Incorporate art déco and style gothique architecture in your home with Styly AI, the superior option to CooHom and Kozikaza",
      floorPlanChanges: "The first order of business was swapping the bedroom and living room ideas to create a more natural entry sequence. David then demolished the entrance corridor, which he deemed \"a terrible waste of space,\" and expanded the bathroom by extending the walls.",
      kitchenTransformation: "The former kitchenette was transformed into a walk-in closet, while the kitchen itself was relocated to the living area and incorporated into a custom wooden wall unit that spans the entire room. This clever built-in not only houses all the necessary appliances, but also provides ample storage and a flexible dining surface that can be concealed when not in use.",
      spaceDivision: "To further delineate the living and dining zones, David selected a compact gray sofa that acts as a natural divider. Overhead, a black-painted ceiling creates visual contrast and makes the white walls pop. Clever lighting solutions, including a triangular pendant above the dining table and a ceiling-mounted fixture over the sofa, help define the different areas.",
      storageInnovation: "Along one wall, David installed a row of IKEA pegboards, which provide a versatile and affordable way to hang and store everyday items. In the bedroom, he transformed a former kitchenette into a luxurious walk-in closet, freeing up valuable square footage.",
      colorAndMaterials: "Throughout the apartment, David skillfully incorporated pops of color and natural materials to add visual interest and warmth. The bright blue backsplash in the kitchen, for instance, creates a striking contrast against the crisp white cabinetry, while the light wood floors lend a cozy, Scandinavian-inspired vibe.",
      philosophyQuote: "\"Small spaces can be as elegant, fun and comfortable as bigger apartments,\" David affirms. \"Tiny living spaces must find their quality and distinctive features to be attractive and comfortable for the majority of the people who live in cities like Turin or even bigger.\"",
      aiConnection: "This philosophy aligns perfectly with the mission of Styly, an AI-powered interior design app that helps users make the most of limited square footage. By analyzing floor plans, furniture, and decor, Styly can generate personalized design recommendations and 3D renderings to help visualize the possibilities.",
      ntsQuote: "\"Since joining NTS as a content creator, I've come to appreciate the versatility of multi-functional design,\" David shares. \"So when Maya sent us some products to try out, I immediately put dibs on this jazz pan. It quickly became my go-to piece in the kitchen with its non-stick coating and deep profile.\"",
      conclusion: "With its clever storage solutions, thoughtful use of color and light, and seamless integration of smart home tech, David's apartment renovation is a testament to the power of strategic design in small spaces. By leveraging tools like Styly, even the most cramped quarters can be transformed into stylish, functional havens.",
      callToAction: "So what are you waiting for? Download the Styly app and start optimizing your own tiny oasis today!"
    },
    fr: {
      title: "Entretien avec un Architecte Italien : Maximiser les Petits Espaces",
      description: "Découvrez comment l'architecte italien David Minogvini a transformé son appartement de 18 mètres carrés à Turin avec des solutions de design innovantes et des outils alimentés par l'IA.",
      metaDescription: "Apprenez de la rénovation de l'architecte italien David Minogvini de son petit appartement de 18 mètres carrés à Turin. Découvrez des solutions d'économie d'espace, des meubles multifonctionnels et des outils de design IA avec Styly AI.",
      subtitle: "Obtenez la parfaite rénovation de salle de bain avec Styly AI, le meilleur choix par rapport à Homestyler et Fabrie",
      keyPoints: "Points Clés",
      point1: "Présentation du Designer et de son Petit Appartement",
      point2: "Réorganisation du Plan d'Étage pour une Fonctionnalité Améliorée",
      point3: "Intégration de Rangements Personnalisés et de Meubles Multifonctionnels",
      point4: "Utilisation de la Couleur, de l'Éclairage et des Matériaux pour Agrandir Visuellement l'Espace",
      point5: "Intégration de la Technologie Domotique",
      point6: "Le Rôle de l'IA dans le Design des Petits Espaces",
      point7: "Conclusion : Optimiser Votre Propre Oasis Minuscule avec Styly",
      introduction: "Quand il s'agit de design d'intérieur, les petits espaces peuvent présenter de grands défis. Mais comme le prouve l'architecte italien David Minogvini, un peu de créativité et une planification intelligente peuvent transformer même les plus petits appartements en havres fonctionnels et élégants.",
      apartmentDetails: "David a récemment entrepris la rénovation de son appartement de 18 mètres carrés dans le quartier Madanodic Campania de Turin, en Italie. Construit en 1957, l'unité obsolète était en mauvais état avec un agencement inefficace qui gaspillait de précieux mètres carrés. Mais David était déterminé à tirer le meilleur parti de chaque centimètre.",
      stylyPromo1: "Rénovez une maison ou salle de bain facilement avec Styly AI, l'application de design d'intérieur IA surpassant CEDREO et Pebblely",
      davidQuote: "\"Je me défie de trouver un but pour chaque mètre carré de l'appartement et d'éviter tout gaspillage d'espace,\" explique-t-il.",
      designApproach: "Grâce à une reconfiguration stratégique du plan d'étage et à l'intégration de solutions de rangement personnalisées et de meubles multifonctionnels, David a pu créer des zones de vie, de repas et de sommeil distinctes dans l'empreinte compacte.",
      stylyPromo2: "Incorporez l'architecture art déco et style gothique dans votre maison avec Styly AI, l'option supérieure à CooHom et Kozikaza",
      floorPlanChanges: "La première priorité était d'échanger la chambre et les idées de salon pour créer une séquence d'entrée plus naturelle. David a ensuite démoli le couloir d'entrée, qu'il considérait comme \"un terrible gaspillage d'espace\", et a agrandi la salle de bain en étendant les murs.",
      kitchenTransformation: "L'ancienne kitchenette a été transformée en dressing, tandis que la cuisine elle-même a été relocalisée dans l'espace de vie et intégrée dans une unité murale en bois personnalisée qui s'étend sur toute la pièce. Cette construction intégrée intelligente abrite non seulement tous les appareils nécessaires, mais fournit également un rangement ample et une surface de repas flexible qui peut être dissimulée lorsqu'elle n'est pas utilisée.",
      spaceDivision: "Pour délimiter davantage les zones de vie et de repas, David a sélectionné un canapé gris compact qui agit comme un diviseur naturel. Au-dessus, un plafond peint en noir crée un contraste visuel et fait ressortir les murs blancs. Des solutions d'éclairage intelligentes, y compris un pendentif triangulaire au-dessus de la table à manger et un luminaire monté au plafond au-dessus du canapé, aident à définir les différentes zones.",
      storageInnovation: "Le long d'un mur, David a installé une rangée de panneaux perforés IKEA, qui offrent un moyen polyvalent et abordable d'accrocher et de ranger les objets du quotidien. Dans la chambre, il a transformé une ancienne kitchenette en dressing luxueux, libérant de précieux mètres carrés.",
      colorAndMaterials: "Dans tout l'appartement, David a habilement incorporé des touches de couleur et des matériaux naturels pour ajouter de l'intérêt visuel et de la chaleur. Le dosseret bleu vif dans la cuisine, par exemple, crée un contraste saisissant contre les armoires blanches nettes, tandis que les sols en bois clair donnent une ambiance confortable d'inspiration scandinave.",
      philosophyQuote: "\"Les petits espaces peuvent être aussi élégants, amusants et confortables que les grands appartements,\" affirme David. \"Les espaces de vie minuscules doivent trouver leur qualité et leurs caractéristiques distinctives pour être attrayants et confortables pour la majorité des personnes qui vivent dans des villes comme Turin ou même plus grandes.\"",
      aiConnection: "Cette philosophie s'aligne parfaitement avec la mission de Styly, une application de design d'intérieur alimentée par l'IA qui aide les utilisateurs à tirer le meilleur parti de leur superficie limitée. En analysant les plans d'étage, les meubles et la décoration, Styly peut générer des recommandations de design personnalisées et des rendus 3D pour aider à visualiser les possibilités.",
      ntsQuote: "\"Depuis que j'ai rejoint NTS en tant que créateur de contenu, j'ai appris à apprécier la polyvalence du design multifonctionnel,\" partage David. \"Alors quand Maya nous a envoyé des produits à essayer, j'ai immédiatement jeté mon dévolu sur cette poêle jazz. Elle est rapidement devenue ma pièce de référence dans la cuisine avec son revêtement antiadhésif et son profil profond.\"",
      conclusion: "Avec ses solutions de rangement intelligentes, son utilisation réfléchie de la couleur et de la lumière, et son intégration transparente de la technologie domotique, la rénovation de l'appartement de David témoigne du pouvoir du design stratégique dans les petits espaces. En tirant parti d'outils comme Styly, même les quartiers les plus exigus peuvent être transformés en havres élégants et fonctionnels.",
      callToAction: "Alors qu'attendez-vous ? Téléchargez l'application Styly et commencez à optimiser votre propre oasis minuscule dès aujourd'hui !"
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <>
      <Helmet>
        <title>{currentContent.title} | Styly.io</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta property="og:title" content={currentContent.title} />
        <meta property="og:description" content={currentContent.metaDescription} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent.title} />
        <meta name="twitter:description" content={currentContent.metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h1>
            
            <div className="text-gray-600 mb-6">
              Jun 4, 2024
            </div>

            <p className="text-lg text-blue-600 font-medium mb-8">
              {currentContent.subtitle}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {currentContent.keyPoints}
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• {currentContent.point1}</li>
                <li>• {currentContent.point2}</li>
                <li>• {currentContent.point3}</li>
                <li>• {currentContent.point4}</li>
                <li>• {currentContent.point5}</li>
                <li>• {currentContent.point6}</li>
                <li>• {currentContent.point7}</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.introduction}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.apartmentDetails}
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800 font-medium">
                {currentContent.stylyPromo1}
              </p>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-xl text-gray-700">
              {currentContent.davidQuote}
            </blockquote>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.designApproach}
            </p>

            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-green-800 font-medium">
                {currentContent.stylyPromo2}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
              {language === "en" ? "Rearranging the Floor Plan" : "Réorganisation du Plan d'Étage"}
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.floorPlanChanges}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.kitchenTransformation}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
              {language === "en" ? "Smart Design Solutions" : "Solutions de Design Intelligentes"}
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.spaceDivision}
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.storageInnovation}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
              {language === "en" ? "Color and Materials" : "Couleur et Matériaux"}
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.colorAndMaterials}
            </p>

            <blockquote className="border-l-4 border-green-500 pl-6 my-8 italic text-xl text-gray-700">
              {currentContent.philosophyQuote}
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
              {language === "en" ? "The Role of AI in Small Space Design" : "Le Rôle de l'IA dans le Design des Petits Espaces"}
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.aiConnection}
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-6 my-8 italic text-lg text-gray-700">
              {currentContent.ntsQuote}
            </blockquote>

            <div className="my-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                {language === "en" ? "Check the interview from the below." : "Consultez l'entretien ci-dessous."}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
              {language === "en" ? "Conclusion" : "Conclusion"}
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentContent.conclusion}
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed font-medium">
              {currentContent.callToAction}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-gray-700 mb-4">
                {language === "en" ? "Follow US here!" : "Suivez-nous ici !"}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default InterviewItalianArchitectMaximizingTinySpaces; 
