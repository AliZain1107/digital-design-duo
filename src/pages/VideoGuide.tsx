import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SEO from "@/components/layout/SEO";
import { LanguageContext, Language } from "@/lib/i18n";

const VideoGuide = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    // Detect language from URL path
    let pathLang: Language;
    if (location.pathname.startsWith("/fr/video") || location.pathname.startsWith("/fr")) {
      pathLang = "fr";
    } else if (location.pathname.startsWith("/en/video") || location.pathname.startsWith("/en")) {
      pathLang = "en";
    } else {
      // Default to French for legacy /video routes
      pathLang = "fr";
    }
    setLanguage(pathLang);
  }, [location.pathname, setLanguage]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Video data
  const videos = [
    {
      id: 1,
      title: language === "fr" ? "SKETCH TO RENDER IA" : "SKETCH TO RENDER AI",
      duration: "02:00",
      date: "Apr 8, 2024",
      videoUrl: "https://www.youtube.com/embed/I-8ur3hBTnM"
    },
    {
      id: 2,
      title: language === "fr" ? "INTERFACE DE STYLY IA" : "INTERFACE OF STYLY AI",
      duration: "02:00",
      date: "Apr 8, 2024",
      videoUrl: "https://www.youtube.com/embed/I-8ur3hBTnM"
    },
    {
      id: 3,
      title: language === "fr" ? "TEXTE VERS DESIGN" : "TEXT TO DESIGN",
      duration: "02:00",
      date: "Apr 8, 2024",
      videoUrl: "https://www.youtube.com/embed/I-8ur3hBTnM"
    },
    {
      id: 4,
      title: language === "fr" ? "REDÉCORER IA" : "REDECORATE AI",
      duration: "02:00",
      date: "Apr 8, 2024",
      videoUrl: "https://www.youtube.com/embed/I-8ur3hBTnM"
    },
    {
      id: 5,
      title: language === "fr" ? "HOME STAGING IA" : "HOME STAGING AI",
      duration: "02:36",
      date: "Apr 20, 2024",
      videoUrl: "https://www.youtube.com/embed/I-8ur3hBTnM"
    },
    {
      id: 6,
      title: language === "fr" ? "DESIGN DE CHAMBRE IA" : "AI BEDROOM DESIGN",
      duration: "02:15",
      date: "Apr 15, 2024",
      videoUrl: "https://www.youtube.com/embed/I-8ur3hBTnM"
    }
  ];

  // SEO metadata based on language
  const seoMeta = {
    en: {
      title: "Video Tutorials - Learn AI Interior Design | Styly.fr",
      description: "Watch our comprehensive video tutorials to master AI interior design. Learn how to use Styly.fr's powerful features for home staging, room design, and more.",
      keywords: "AI interior design tutorials, video guides, home staging videos, room design tutorials, Styly.fr tutorials"
    },
    fr: {
      title: "Tutoriels Vidéo - Apprenez le Design Intérieur IA | Styly.fr",
      description: "Regardez nos tutoriels vidéo complets pour maîtriser le design intérieur IA. Apprenez à utiliser les fonctionnalités puissantes de Styly.fr pour le home staging, la conception de pièces, et plus.",
      keywords: "tutoriels design intérieur IA, guides vidéo, vidéos home staging, tutoriels conception pièces, tutoriels Styly.fr"
    }
  };

  const currentMeta = language === "fr" ? seoMeta.fr : seoMeta.en;
  const currentUrl = language === "fr" ? "https://www.styly.fr/fr/video" : "https://www.styly.fr/en/video";

  const alternateUrls = {
    en: "https://www.styly.fr/en/video",
    fr: "https://www.styly.fr/fr/video"
  };

  return (
    <div>
      <SEO
        title={currentMeta.title}
        description={currentMeta.description}
        keywords={currentMeta.keywords}
        ogUrl={currentUrl}
        language={language}
        alternateUrls={alternateUrls}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Tutoriels Vidéo" : "Video Tutorials"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {language === "fr"
                ? "Découvrez comment utiliser nos outils IA pour transformer vos espaces intérieurs"
                : "Learn how to use our AI tools to transform your interior spaces"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {video.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === "fr"
              ? "Prêt à transformer vos espaces ?"
              : "Ready to transform your spaces?"
            }
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {language === "fr"
              ? "Commencez dès maintenant avec nos outils IA gratuits"
              : "Get started now with our free AI tools"
            }
          </p>
          <a
            href="https://app.styly.fr/signin"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {language === "fr" ? "Commencer Gratuitement" : "Get Started Free"}
          </a>
        </div>
      </section>
    </div>
  );
};

export default VideoGuide;
