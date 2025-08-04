import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

interface FrenchBlogTemplateProps {
  title: string;
  slug: string;
  description: string;
  keywords: string;
  date: string;
  category: string;
  image: string;
}

const createFrenchBlogComponent = (props: FrenchBlogTemplateProps) => {
  const FrenchBlogComponent: React.FC = () => {
    const { language } = useLanguage();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    if (language === "fr") {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
          <Helmet>
            <title>{props.title} | Styly.fr</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={`https://www.styly.fr${props.image}`} />
            <meta property="og:url" content={`https://www.styly.fr/blog/${props.slug}`} />
            <link rel="canonical" href={`https://www.styly.fr/blog/${props.slug}`} />
          </Helmet>
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {props.title}
              </h1>
              <div className="text-sm text-gray-500 mb-2">
                <time dateTime={props.date}>{props.date}</time>
                <span className="mx-2">•</span>
                <span>{props.category}</span>
              </div>
              <img
                src={props.image}
                alt={`${props.title} - Styly AI`}
                className="w-full h-[400px] object-cover rounded-xl mb-6"
              />
            </header>

            <section className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Découvrez comment <strong>Styly AI</strong> révolutionne le design intérieur avec l'intelligence artificielle. 
                Cet article explore les dernières innovations et tendances pour transformer votre espace de vie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'intelligence artificielle transforme notre façon de concevoir et d'aménager nos espaces intérieurs. 
                Avec Styly AI, explorez de nouvelles possibilités créatives et optimisez vos projets de décoration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Les Avantages de l'IA en Design</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Visualisation instantanée de vos idées</li>
                <li>Optimisation de l'espace et des budgets</li>
                <li>Personnalisation selon vos préférences</li>
                <li>Gain de temps considérable</li>
                <li>Accès aux dernières tendances</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment Utiliser Styly AI</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                <li>Uploadez une photo de votre espace</li>
                <li>Décrivez vos préférences et contraintes</li>
                <li>Laissez l'IA générer des propositions</li>
                <li>Affinez et personnalisez le résultat</li>
                <li>Implémentez votre design de rêve</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'avenir du design intérieur est déjà là avec <strong>Styly AI</strong>. Explorez les possibilités 
                infinies de l'intelligence artificielle pour créer l'espace de vos rêves.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg mt-6">
                <p className="text-purple-800 font-medium">
                  Prêt à transformer votre intérieur ? 
                  <a href="https://app.styly.fr/signin" className="text-purple-600 hover:text-purple-800 underline ml-1">
                    Essayez Styly AI gratuitement
                  </a> et découvrez le futur du design.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partagez cet article</h3>
              <div className="flex space-x-4">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.styly.fr/blog/${props.slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href={`https://twitter.com/intent/tweet?url=https://www.styly.fr/blog/${props.slug}&text=${encodeURIComponent(props.title)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.styly.fr/blog/${props.slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
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
          <title>{props.title} | Styly.fr</title>
          <meta name="description" content={props.description} />
        </Helmet>
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {props.title}
            </h1>
            <p className="text-lg text-gray-700">
              Discover how Styly AI revolutionizes interior design with artificial intelligence.
            </p>
          </header>
        </article>
      </div>
    );
  };

  return FrenchBlogComponent;
};

export default createFrenchBlogComponent;
