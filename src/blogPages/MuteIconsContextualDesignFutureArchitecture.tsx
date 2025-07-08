import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const MuteIconsContextualDesignFutureArchitecture: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Mute Icons, Contextual Design, and the Future of Architecture",
      description: "Interview with Marcelo Spina about Mute Icons, PATTERNS, The Line, Education, Sci-Arc, Context",
      metaDescription: "Explore architectural philosophy with Marcelo Spina, co-principal of PATTERNS studio. Discover mute icons, contextual design, and the future of AI in architecture with Styly AI.",
      subtitle: "Styly AI: The ultimate AI photo editor for interior design, leaving Room GPT and Spacely AI behind",
      keyPoints: "Key Points:",
      point1: "Introduce Marcelo Spina, co-principal of PATTERNS architecture studio, and his background as a renowned architect and educator",
      point2: "Discuss Marcelo's views on the role of AI architecture in the modern world, particularly the idea of \"mute icons\" and creating public spaces that challenge conventional boundaries",
      point3: "Explore Marcelo's design approach, which emphasizes form, mass, and articulation, and how he balances innovation with contextual sensitivity",
      introduction: "As an acclaimed architect, educator, and co-principal of the Los Angeles-based PATTERNS studio, Marcelo Spina has made a significant impact on the global design landscape. Through his visionary projects, thought-provoking writings, and influential teaching roles, Marcelo has challenged conventional boundaries and pushed the boundaries of what architecture can achieve.",
      stylyPromo1: "Transform your space with Styly AI's AI for interior design, providing superior results compared to PromeAI and Colov GPT",
      interviewIntro: "In this insightful interview, Marcelo shares his perspectives on the role of \"mute icons\" in public architecture, the importance of balancing innovation with contextual sensitivity, and the evolving landscape of architectural education in the face of technological advancements.",
      sections: {
        muteIcons: {
          title: "Mute Icons and the Paradoxical Nature of Public Architecture",
          content: "At the heart of Marcelo's work is the concept of \"mute icons\" – a notion that he explores in depth in his book, Mute Icons. Marcelo explains that this idea is about \"positioning a kind of paradoxical understanding of what public architecture is and what its potential to be.\"",
          content2: "Rather than creating architecture solely for entertainment or instant gratification, Marcelo advocates for a more nuanced approach that maintains \"a certain kind of position as a cultural irritant.\" This, he believes, is crucial in a world that is often dominated by the sheen of technology and a relentless pursuit of the new.",
          quote: "\"Architecture is not fashion, it's not art,\" Marcelo asserts. \"It is something else, and it is deeply enmeshed in culture. We have something to say about it.\""
        },
        balancing: {
          title: "Balancing Innovation and Context",
          content: "Marcelo's design approach is rooted in a deep exploration of form, mass, and articulation, but he also recognizes the importance of contextual sensitivity. He emphasizes the need to find ways of \"involving\" the existing context, rather than simply mimicking or ignoring it.",
          quote: "\"Finding ways of somehow involving those ideas, getting inside your work in more substantial, essential, but also maybe deeper ways – that's incredibly important,\" Marcelo explains.",
          content2: "This balance between innovation and respect for the surrounding environment is a key challenge that Marcelo and his team at PATTERNS navigate with each project. Whether working in established urban centers or brand-new developments, Marcelo seeks to create buildings that are both familiar and strange, challenging the status quo while still resonating with the local culture."
        },
        technology: {
          title: "The Role of Technology and AI in Architecture",
          content: "As an educator at institutions like SCI-Arc, Marcelo has witnessed firsthand the profound impact of technological advancements on the architectural profession. While he acknowledges the exciting potential of tools like AI, he also cautions against getting swept up in the \"waves\" of new technology.",
          quote: "\"I'm not in the business of predicting the future,\" Marcelo says. \"I've seen enough people predict, 'Oh, books are not going to exist anymore, everything's going to be digital,' and 20 years later, we're still building libraries.\"",
          content2: "Instead, Marcelo advocates for a more selective, critical approach to technology, one that is grounded in a deep understanding of the discipline and its cultural context. He believes that architects should be wary of simply chasing the latest trends, and instead focus on how these tools can be integrated in meaningful, thoughtful ways."
        },
        education: {
          title: "Shaping the Future of Architectural Education",
          content: "As an esteemed educator, Marcelo has played a vital role in shaping the next generation of architects. He emphasizes the importance of balancing the excitement of new technologies with a strong foundation in fundamental design principles and a nuanced understanding of cultural context.",
          quote: "\"I couldn't practice if I wasn't teaching the way I do,\" Marcelo reflects. \"I couldn't teach if I wasn't practicing the way I do.\"",
          content2: "This symbiotic relationship between practice and academia is central to Marcelo's approach, and he encourages young architects to embrace a similar duality. By staying connected to the realities of the profession while also pushing the boundaries of what's possible, Marcelo believes that the next generation can make a lasting impact on the built environment."
        }
      },
      stylyPromo2: "Styly AI simplifies rénovation salle de bain and renovation maison projects, outperforming Hestya and Totree",
      conclusion: "As the architectural landscape continues to evolve, driven by technological advancements and shifting societal needs, Marcelo Spina's vision offers a compelling roadmap for the future. By embracing the paradoxical nature of public architecture, balancing innovation with contextual sensitivity, and nurturing the next generation of designers, Marcelo and his team at PATTERNS are poised to make an indelible mark on the field.",
      cta: "So what are you waiting for? Explore Marcelo's work, dive into the world of \"mute icons,\" and discover how tools like Styly can help you re-imagine the possibilities of interior design."
    },
    fr: {
      title: "Icônes Muettes, Design Contextuel et l'Avenir de l'Architecture",
      description: "Entretien avec Marcelo Spina sur les Icônes Muettes, PATTERNS, The Line, l'Éducation, Sci-Arc, le Contexte",
      metaDescription: "Explorez la philosophie architecturale avec Marcelo Spina, co-directeur du studio PATTERNS. Découvrez les icônes muettes, le design contextuel et l'avenir de l'IA en architecture avec Styly AI.",
      subtitle: "Styly AI : L'éditeur photo IA ultime pour le design d'intérieur, laissant Room GPT et Spacely AI derrière",
      keyPoints: "Points Clés :",
      point1: "Présenter Marcelo Spina, co-directeur du studio d'architecture PATTERNS, et son parcours en tant qu'architecte et éducateur renommé",
      point2: "Discuter des vues de Marcelo sur le rôle de l'architecture IA dans le monde moderne, particulièrement l'idée des \"icônes muettes\" et la création d'espaces publics qui défient les frontières conventionnelles",
      point3: "Explorer l'approche de design de Marcelo, qui met l'accent sur la forme, la masse et l'articulation, et comment il équilibre innovation et sensibilité contextuelle",
      introduction: "En tant qu'architecte acclamé, éducateur et co-directeur du studio PATTERNS basé à Los Angeles, Marcelo Spina a eu un impact significatif sur le paysage de design global. À travers ses projets visionnaires, ses écrits stimulants et ses rôles d'enseignement influents, Marcelo a défié les frontières conventionnelles et repoussé les limites de ce que l'architecture peut accomplir.",
      stylyPromo1: "Transformez votre espace avec l'IA de Styly AI pour le design d'intérieur, fournissant des résultats supérieurs comparé à PromeAI et Colov GPT",
      interviewIntro: "Dans cet entretien perspicace, Marcelo partage ses perspectives sur le rôle des \"icônes muettes\" en architecture publique, l'importance d'équilibrer innovation et sensibilité contextuelle, et le paysage évolutif de l'éducation architecturale face aux avancées technologiques.",
      sections: {
        muteIcons: {
          title: "Icônes Muettes et la Nature Paradoxale de l'Architecture Publique",
          content: "Au cœur du travail de Marcelo se trouve le concept d'\"icônes muettes\" – une notion qu'il explore en profondeur dans son livre, Mute Icons. Marcelo explique que cette idée concerne \"le positionnement d'une sorte de compréhension paradoxale de ce qu'est l'architecture publique et de son potentiel à être.\"",
          content2: "Plutôt que de créer une architecture uniquement pour le divertissement ou la gratification instantanée, Marcelo prône une approche plus nuancée qui maintient \"une certaine sorte de position comme irritant culturel.\" Ceci, croit-il, est crucial dans un monde souvent dominé par l'éclat de la technologie et une poursuite implacable du nouveau.",
          quote: "\"L'architecture n'est pas la mode, ce n'est pas l'art,\" affirme Marcelo. \"C'est autre chose, et c'est profondément ancré dans la culture. Nous avons quelque chose à dire à ce sujet.\""
        },
        balancing: {
          title: "Équilibrer Innovation et Contexte",
          content: "L'approche de design de Marcelo est enracinée dans une exploration profonde de la forme, de la masse et de l'articulation, mais il reconnaît aussi l'importance de la sensibilité contextuelle. Il souligne le besoin de trouver des façons d'\"impliquer\" le contexte existant, plutôt que de simplement l'imiter ou l'ignorer.",
          quote: "\"Trouver des façons d'impliquer d'une manière ou d'une autre ces idées, de les faire entrer dans votre travail de manières plus substantielles, essentielles, mais aussi peut-être plus profondes – c'est incroyablement important,\" explique Marcelo.",
          content2: "Cet équilibre entre innovation et respect pour l'environnement environnant est un défi clé que Marcelo et son équipe chez PATTERNS naviguent avec chaque projet. Qu'ils travaillent dans des centres urbains établis ou des développements tout neufs, Marcelo cherche à créer des bâtiments qui sont à la fois familiers et étranges, défiant le statu quo tout en résonnant avec la culture locale."
        },
        technology: {
          title: "Le Rôle de la Technologie et de l'IA en Architecture",
          content: "En tant qu'éducateur dans des institutions comme SCI-Arc, Marcelo a été témoin de première main de l'impact profond des avancées technologiques sur la profession architecturale. Bien qu'il reconnaisse le potentiel excitant d'outils comme l'IA, il met aussi en garde contre le fait de se laisser emporter par les \"vagues\" de nouvelle technologie.",
          quote: "\"Je ne suis pas dans le business de prédire l'avenir,\" dit Marcelo. \"J'ai vu assez de gens prédire, 'Oh, les livres ne vont plus exister, tout va être numérique,' et 20 ans plus tard, nous construisons encore des bibliothèques.\"",
          content2: "Au lieu de cela, Marcelo prône une approche plus sélective et critique de la technologie, une qui est ancrée dans une compréhension profonde de la discipline et de son contexte culturel. Il croit que les architectes devraient se méfier de simplement poursuivre les dernières tendances, et se concentrer plutôt sur comment ces outils peuvent être intégrés de manières significatives et réfléchies."
        },
        education: {
          title: "Façonner l'Avenir de l'Éducation Architecturale",
          content: "En tant qu'éducateur estimé, Marcelo a joué un rôle vital dans la formation de la prochaine génération d'architectes. Il souligne l'importance d'équilibrer l'excitation des nouvelles technologies avec une base solide en principes de design fondamentaux et une compréhension nuancée du contexte culturel.",
          quote: "\"Je ne pourrais pas pratiquer si je n'enseignais pas comme je le fais,\" réfléchit Marcelo. \"Je ne pourrais pas enseigner si je ne pratiquais pas comme je le fais.\"",
          content2: "Cette relation symbiotique entre pratique et académie est centrale à l'approche de Marcelo, et il encourage les jeunes architectes à embrasser une dualité similaire. En restant connectés aux réalités de la profession tout en repoussant les limites du possible, Marcelo croit que la prochaine génération peut avoir un impact durable sur l'environnement bâti."
        }
      },
      stylyPromo2: "Styly AI simplifie les projets de rénovation salle de bain et rénovation maison, surpassant Hestya et Totree",
      conclusion: "Alors que le paysage architectural continue d'évoluer, poussé par les avancées technologiques et les besoins sociétaux changeants, la vision de Marcelo Spina offre une feuille de route convaincante pour l'avenir. En embrassant la nature paradoxale de l'architecture publique, équilibrant innovation et sensibilité contextuelle, et nourrissant la prochaine génération de designers, Marcelo et son équipe chez PATTERNS sont prêts à laisser une marque indélébile sur le domaine.",
      cta: "Alors qu'attendez-vous ? Explorez le travail de Marcelo, plongez dans le monde des \"icônes muettes,\" et découvrez comment des outils comme Styly peuvent vous aider à ré-imaginer les possibilités du design d'intérieur."
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <>
      <Helmet>
        <title>{currentContent.title} | Styly.io</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta property="og:title" content={currentContent.title} />
        <meta property="og:description" content={currentContent.metaDescription} />
        <meta property="og:image" content="/revolutionizing-architecture-hero.png" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.styly.io/blog/mute-icons-contextual-design-and-the-future-of-architecture" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {currentContent.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <time dateTime="2024-06-12">Jun 12, 2024</time>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="text-blue-800 font-medium">{currentContent.subtitle}</p>
          </div>
          <p className="text-lg text-gray-600 mb-6">{currentContent.description}</p>
        </header>

        <div className="prose max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">{currentContent.keyPoints}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>{currentContent.point1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>{currentContent.point2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>{currentContent.point3}</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">{currentContent.introduction}</p>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
              <p className="text-green-800 font-medium">{currentContent.stylyPromo1}</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">{currentContent.interviewIntro}</h3>
          </div>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.sections.muteIcons.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{currentContent.sections.muteIcons.content}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{currentContent.sections.muteIcons.content2}</p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="text-blue-800 leading-relaxed italic">{currentContent.sections.muteIcons.quote}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.sections.balancing.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{currentContent.sections.balancing.content}</p>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
              <p className="text-purple-800 leading-relaxed italic">{currentContent.sections.balancing.quote}</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{currentContent.sections.balancing.content2}</p>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-6">
              <p className="text-orange-800 font-medium">{currentContent.stylyPromo2}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.sections.technology.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{currentContent.sections.technology.content}</p>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-4">
              <p className="text-red-800 leading-relaxed italic">{currentContent.sections.technology.quote}</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{currentContent.sections.technology.content2}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.sections.education.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{currentContent.sections.education.content}</p>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-4">
              <p className="text-green-800 leading-relaxed italic">{currentContent.sections.education.quote}</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{currentContent.sections.education.content2}</p>
          </section>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">{currentContent.conclusion}</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{currentContent.cta}</h3>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">Follow US here!</p>
            <div className="flex justify-center space-x-4">
              <a href="https://instagram.com/styly.io" className="text-pink-600 hover:underline font-medium">Instagram</a>
              <a href="https://linkedin.com/company/styly-io" className="text-blue-600 hover:underline font-medium">LinkedIn</a>
              <a href="https://facebook.com/styly.io" className="text-blue-700 hover:underline font-medium">Facebook</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default MuteIconsContextualDesignFutureArchitecture; 