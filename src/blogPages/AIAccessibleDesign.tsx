import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const AIAccessibleDesign: React.FC = () => {
  const { language } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (language === "fr") {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
        <Helmet>
          <title>L'IA dans le Design Accessible : Créer des Espaces Inclusifs avec Styly | Styly.fr</title>
          <meta name="description" content="Découvrez comment l'IA révolutionne le design accessible, créant des espaces inclusifs pour tous. Apprenez sur les outils IA de STYLY.fr pour l'accessibilité." />
          <meta name="keywords" content="design accessible IA, design intérieur inclusif, outils IA accessibilité, design universel, design sans barrières, accessibilité STYLY.fr" />
          <meta property="og:title" content="L'IA dans le Design Accessible : Créer des Espaces Inclusifs avec Styly" />
          <meta property="og:description" content="Découvrez comment l'IA révolutionne le design accessible, créant des espaces inclusifs pour tous." />
          <meta property="og:image" content="https://www.styly.fr/accessible-design-modern-wheelchair-interior.webp" />
          <meta property="og:url" content="https://www.styly.fr/blog/ia-design-accessible-espaces-inclusifs" />
          <link rel="canonical" href="https://www.styly.fr/blog/ia-design-accessible-espaces-inclusifs" />
          <link rel="alternate" hrefLang="en" href="https://www.styly.fr/en/blog/ai-accessible-design-inclusive-spaces" />
          <link rel="alternate" hrefLang="fr" href="https://www.styly.fr/blog/ia-design-accessible-espaces-inclusifs" />
          <link rel="alternate" hrefLang="x-default" href="https://www.styly.fr/blog/ia-design-accessible-espaces-inclusifs" />
        </Helmet>
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              L'IA dans le Design Accessible : Créer des Espaces Inclusifs avec Styly
            </h1>
            <div className="text-sm text-gray-500 mb-2">
              <time dateTime="2025-06-28">28 juin 2025</time>
              <span className="mx-2">•</span>
              <span>Design Accessible & IA Inclusif</span>
            </div>
            <img
              src="/accessible-design-modern-wheelchair-interior.webp"
              alt="Design accessible IA - Styly pour espaces inclusifs et universels"
              className="w-full h-[400px] object-cover rounded-xl mb-6"
            />
          </header>

          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              L'accessibilité dans le design n'est plus un luxe - c'est une nécessité. Avec l'avènement de l'intelligence artificielle, créer des espaces inclusifs qui répondent aux besoins de tous les utilisateurs, indépendamment de leurs capacités physiques ou cognitives, est devenu plus réalisable que jamais. STYLY.fr est à l'avant-garde de cette révolution, utilisant l'IA pour démocratiser le{" "}
              <a href="/blog/logiciel-gratuit-design-interieur-ia" className="text-blue-600 hover:text-blue-800 font-medium">
                design d'intérieur accessible
              </a>
              {" "}et créer des environnements véritablement inclusifs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <img
                src="/accessible-design-modern-wheelchair-interior.webp"
                alt="Design accessible moderne - Styly IA pour espaces inclusifs"
                className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
              />
              <img
                src="/ai-accessible-design-inclusive-spaces.webp"
                alt="Espaces inclusifs IA - Styly pour design accessible universel"
                className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Comprendre le Design Accessible avec l'IA</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le design accessible vise à créer des espaces utilisables par des personnes ayant diverses capacités. L'IA améliore ce processus en :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Analysant les Besoins d'Accessibilité :</strong> L'IA peut identifier les exigences spécifiques basées sur les profils d'utilisateurs</li>
              <li><strong>Optimisant les Dispositions :</strong> Création automatique de chemins clairs et d'espaces navigables</li>
              <li><strong>Recommandant des Matériaux :</strong> Suggestion de textures, couleurs et matériaux adaptés aux besoins sensoriels</li>
              <li><strong>Assurant la Conformité :</strong> Vérification automatique des standards d'accessibilité</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Comprendre ces principes est essentiel lors de la planification de tout espace accessible. Le bon choix peut influencer l'expérience utilisateur, la sécurité et le confort général d'une pièce ou d'un bâtiment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Comment STYLY.fr Révolutionne le Design Accessible</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La technologie IA a révolutionné de nombreuses industries, et le design accessible ne fait pas exception. La capacité de l'IA à traiter et analyser les données aide les utilisateurs à prendre des décisions plus rapidement, avec plus de précision et une plus grande confiance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              En utilisant les <strong>outils de design intérieur IA de STYLY.fr</strong>, vous pouvez rapidement générer plusieurs conceptions adaptées aux besoins d'accessibilité, à la taille de la pièce et aux conditions d'utilisation. L'IA analyse les éléments existants de la pièce et suggère des aménagements qui maximisent l'accessibilité.
            </p>

            <img
              src="/ai-accessible-design-inclusive-spaces.webp"
              alt="Design accessible IA - Styly pour espaces inclusifs et universels"
              className="w-full h-64 object-cover rounded-lg shadow-md my-6"
            />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Applications Pratiques de l'IA en Design Accessible</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Planification Intelligente des Espaces</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les outils de{" "}
              <a href="/blog/huit-designs-chambres-ia-epoustouflants" className="text-blue-600 hover:text-blue-800 font-medium">
                planification de pièce IA
              </a>
              {" "}de STYLY.fr analysent automatiquement les dimensions et suggèrent des dispositions qui maximisent l'accessibilité. Cela inclut :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Largeurs de passages optimales pour fauteuils roulants</li>
              <li>Zones de retournement appropriées</li>
              <li>Hauteurs de surfaces de travail ajustables</li>
              <li>Éclairage adapté aux besoins visuels</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Sélection de Matériaux Sensoriels</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              L'IA de STYLY.fr recommande des matériaux et couleurs qui améliorent l'expérience sensorielle, en tenant compte des besoins de personnes avec des déficiences visuelles, auditives ou tactiles.
            </p>

            <img
              src="/accessible-design-modern-wheelchair-interior.webp"
              alt="Matériaux sensoriels design accessible - Styly IA pour expérience inclusive"
              className="w-full h-64 object-cover rounded-lg shadow-md my-6"
            />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Avantages du Design Accessible Piloté par l'IA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🎯 Précision</h3>
                <p className="text-gray-700">L'IA assure une conformité précise aux standards d'accessibilité internationaux.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">⚡ Efficacité</h3>
                <p className="text-gray-700">Réduction du temps de conception tout en maintenant la qualité et l'inclusivité.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">💰 Économies</h3>
                <p className="text-gray-700">Évite les modifications coûteuses en intégrant l'accessibilité dès la conception.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🌍 Inclusivité</h3>
                <p className="text-gray-700">Crée des espaces utilisables par le plus grand nombre de personnes possible.</p>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">Découvrez les Espaces Inclusifs avec Styly AI</h3>
            <p className="text-purple-800 mb-4">
              Créez des espaces accessibles et inclusifs avec les outils avancés de Styly AI.
            </p>
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Commencer avec Styly AI
            </a>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ressources Complémentaires</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                📚 Ressources Complémentaires :
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="/blog/logiciel-gratuit-design-interieur-ia" className="text-blue-600 hover:text-blue-800 font-medium">
                    → Logiciel Gratuit de Design d'Intérieur IA
                  </a>
                  {" "}pour commencer votre projet accessible
                </li>
                <li>
                  <a href="/blog/6-prompts-viraux-design-chambre-ia-styly" className="text-blue-600 hover:text-blue-800 font-medium">
                    → Prompts de Design Inclusif
                  </a>
                  {" "}pour l'inspiration
                </li>
                <li>
                  <a href="/blog/tendances-design-interieur-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                    → Tendances Design Inclusif 2025
                  </a>
                  {" "}pour rester à jour
                </li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 <strong>Saviez-vous ?</strong> Selon{" "}
                  <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    l'OMS
                  </a>
                  , plus d'1 milliard de personnes vivent avec un handicap. Le design accessible bénéficie à tous, pas seulement aux personnes handicapées.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              L'IA transforme le design accessible en le rendant plus précis, efficace et abordable. STYLY.fr mène cette révolution en offrant des outils qui permettent à chacun de créer des espaces véritablement inclusifs. L'avenir du design est accessible, et il commence aujourd'hui.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Connectez-vous avec Nous</h2>
            <p className="text-gray-700 mb-4">
              Suivez-nous sur les réseaux sociaux pour plus de conseils sur le design accessible :
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/profile.php?id=61558770901420" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Facebook : Styly AI</a>
              <a href="https://www.linkedin.com/company/stylyai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">LinkedIn : Styly AI</a>
              <a href="https://www.instagram.com/stylyio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Instagram : @stylyio</a>
            </div>
          </section>
        </article>
      </div>
    );
  }

  // English version
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      <Helmet>
        <title>AI in Accessible Design: Creating Inclusive Spaces with Styly | Styly.fr</title>
        <meta name="description" content="Discover how AI is revolutionizing accessible design, creating inclusive spaces for everyone. Learn about STYLY.fr's AI tools for accessibility-focused interior design." />
        <meta name="keywords" content="AI accessible design, inclusive interior design, accessibility AI tools, universal design, barrier-free design, STYLY.fr accessibility" />
        <meta property="og:title" content="AI in Accessible Design: Creating Inclusive Spaces with Styly" />
        <meta property="og:description" content="Discover how AI is revolutionizing accessible design, creating inclusive spaces for everyone." />
        <meta property="og:image" content="https://www.styly.fr/accessible-design-modern-wheelchair-interior.webp" />
        <meta property="og:url" content="https://www.styly.fr/en/blog/ai-accessible-design-inclusive-spaces" />
        <link rel="canonical" href="https://www.styly.fr/en/blog/ai-accessible-design-inclusive-spaces" />
        <link rel="alternate" hrefLang="en" href="https://www.styly.fr/en/blog/ai-accessible-design-inclusive-spaces" />
        <link rel="alternate" hrefLang="fr" href="https://www.styly.fr/blog/ia-design-accessible-espaces-inclusifs" />
        <link rel="alternate" hrefLang="x-default" href="https://www.styly.fr/en/blog/ai-accessible-design-inclusive-spaces" />
      </Helmet>
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI in Accessible Design: Creating Inclusive Spaces with Styly
          </h1>
          <div className="text-sm text-gray-500 mb-2">
            <time dateTime="2025-06-28">June 28, 2025</time>
            <span className="mx-2">•</span>
            <span>Accessible Design & Inclusive AI</span>
          </div>
          <img
            src="/accessible-design-modern-wheelchair-interior.webp"
            alt="AI accessible design - Styly for inclusive and universal spaces"
            className="w-full h-[400px] object-cover rounded-xl mb-6"
          />
        </header>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Accessibility in design is no longer a luxury—it's a necessity. With the advent of artificial intelligence, creating inclusive spaces that cater to all users, regardless of their physical or cognitive abilities, has become more achievable than ever. STYLY.fr is at the forefront of this revolution, using AI to democratize{" "}
            <a href="/en/blog/free-ai-interior-design-software" className="text-blue-600 hover:text-blue-800 font-medium">
              accessible interior design
            </a>
            {" "}and create truly inclusive environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <img
              src="https://unsplash.com/photos/3PRy0fLiVwM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8aW50ZXJpb3IlMjBzcGFjZXN8ZW58MHx8fHwxNzUyNDQzMzgwfDA&force=true"
              alt="Modern accessible design - Styly AI for inclusive spaces"
              className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
            />
            <img
              src="https://unsplash.com/photos/R5v8Xtc0ecg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTAzfHxpbnRlcmlvcnxlbnwwfHx8fDE3NTI0NDI5ODl8MA&force=true"
              alt="Inclusive spaces AI - Styly for universal accessible design"
              className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-sm"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Accessible Design with AI</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Accessible design aims to create spaces that are usable by people with diverse abilities. AI enhances this process by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Analyzing Accessibility Needs:</strong> AI can identify specific requirements based on user profiles</li>
            <li><strong>Optimizing Layouts:</strong> Automatically creating clear pathways and navigable spaces</li>
            <li><strong>Recommending Materials:</strong> Suggesting textures, colors, and materials suited for sensory needs</li>
            <li><strong>Ensuring Compliance:</strong> Automatically checking against accessibility standards</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding these principles is essential when planning any accessible space. The right choice can influence user experience, safety, and overall comfort of a room or building.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How STYLY.fr Revolutionizes Accessible Design</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AI technology has revolutionized many industries, and accessible design is no exception. The ability of AI to process and analyze data helps users make decisions faster, with more accuracy, and greater confidence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Using <strong>STYLY.fr's AI interior design</strong> tools, you can quickly generate multiple layouts suited to accessibility needs, room size, and usage conditions. The AI analyzes existing room elements and suggests arrangements that maximize accessibility.
          </p>

          <img
            src="https://unsplash.com/photos/Koj7a_Hj2d0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGludGVyaW9yJTIwc3BhY2VzfGVufDB8fHx8MTc1MjQ0MzM4MHww&force=true"
            alt="AI interior design tools for accessible layouts - Styly for inclusive spaces"
            className="w-full h-64 object-cover rounded-lg shadow-md my-6"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Practical Applications of AI in Accessible Design</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Intelligent Space Planning</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            STYLY.fr's{" "}
            <a href="/en/blog/AI-Bedroom" className="text-blue-600 hover:text-blue-800 font-medium">
              AI room planning
            </a>
            {" "}tools automatically analyze dimensions and suggest layouts that maximize accessibility. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Optimal pathway widths for wheelchairs</li>
            <li>Appropriate turning spaces</li>
            <li>Adjustable work surface heights</li>
            <li>Lighting adapted to visual needs</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Sensory Material Selection</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            STYLY.fr's AI recommends materials and colors that enhance sensory experience, considering the needs of people with visual, auditory, or tactile impairments.
          </p>

          <img
            src="https://unsplash.com/photos/JDDX9mivQms/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fGludGVyaW9yJTIwc3BhY2VzfGVufDB8fHx8MTc1MjQ0MzM4MHww&force=true"
            alt="AI sensory material selection for accessible design - Styly for inclusive experience"
            className="w-full h-64 object-cover rounded-lg shadow-md my-6"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of AI-Driven Accessible Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">🎯 Precision</h3>
              <p className="text-gray-700">AI ensures precise compliance with international accessibility standards.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">⚡ Efficiency</h3>
              <p className="text-gray-700">Reduces design time while maintaining quality and inclusivity.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">💰 Cost Savings</h3>
              <p className="text-gray-700">Avoids expensive modifications by integrating accessibility from the start.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">🌍 Inclusivity</h3>
              <p className="text-gray-700">Creates spaces usable by the greatest number of people possible.</p>
            </div>
          </div>
        </section>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">Discover Inclusive Spaces with Styly AI</h3>
            <p className="text-purple-800 mb-4">
              Create accessible and inclusive spaces with Styly AI's advanced tools.
            </p>
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Start with Styly AI
            </a>
          </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              📚 Additional Resources:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="/en/blog/free-ai-interior-design-software" className="text-blue-600 hover:text-blue-800 font-medium">
                  → Free AI Interior Design Software
                </a>
                {" "}to start your accessible project
              </li>
              <li>
                <a href="/en/blog/6-viral-ai-room-design-prompts-create-dream-bedroom-styly" className="text-blue-600 hover:text-blue-800 font-medium">
                  → Inclusive Design Prompts
                </a>
                {" "}for inspiration
              </li>
              <li>
                <a href="/en/blog/2025-interior-design-trends" className="text-blue-600 hover:text-blue-800 font-medium">
                  → Inclusive Design Trends 2025
                </a>
                {" "}to stay updated
              </li>
            </ul>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                💡 <strong>Did you know?</strong> According to{" "}
                <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  WHO
                </a>
                , over 1 billion people live with a disability. Accessible design benefits everyone, not just people with disabilities.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            AI is transforming accessible design by making it more precise, efficient, and affordable. STYLY.fr leads this revolution by offering tools that enable everyone to create truly inclusive spaces. The future of design is accessible, and it starts today.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect with Us</h2>
          <p className="text-gray-700 mb-4">
            Follow us on social media for more tips on accessible design:
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.facebook.com/profile.php?id=61558770901420" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Facebook: Styly AI</a>
            <a href="https://www.linkedin.com/company/stylyai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">LinkedIn: Styly AI</a>
            <a href="https://www.instagram.com/stylyio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">Instagram: @stylyio</a>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AIAccessibleDesign;

