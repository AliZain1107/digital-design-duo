import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-10 pb-0 pt-16 sm:pt-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-7xl flex-col overflow-hidden items-center justify-center">
        <div className="flex w-full flex-col overflow-hidden items-center text-base font-normal leading-[1.2] px-4 sm:px-8 md:px-20">
          <div className="flex w-full max-w-md flex-col items-center">
            <h2 className="text-4xl font-semibold mb-4 font-baloo text-gray-900 text-center">
              <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
                {t.faqs}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-baloo text-center mb-16">
              {t.faqDescription}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-2.5">
          <div className="bg-[rgba(242,242,242,1)] self-stretch min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] my-auto pb-0.5 px-5 rounded-[20px] max-md:max-w-full">
            {t.faqQuestions.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center gap-6 overflow-hidden flex-wrap pl-2.5 py-5 max-md:max-w-full"
              >
                <div
                  className="self-stretch min-w-60 text-base text-[rgba(51,51,51,1)] font-semibold flex-1 shrink basis-[0%] my-auto max-md:max-w-full cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="w-full max-md:max-w-full">
                    {item.question}
                  </div>
                  {openItem === index && (
                    <div
                      className="w-full text-sm font-normal mt-3 text-[rgba(102,102,102,1)] max-md:max-w-full"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  )}
                </div>
                <button
                  className="self-stretch flex min-h-[23px] flex-col items-stretch justify-center w-[22px] my-auto"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <img
                    src={
                      openItem === index
                        ? "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/77380469c6e02d866dd12bdc3fd46696122b057d?placeholderIfAbsent=true"
                        : "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/5121e61296999c22cf69c321d98030701840c3b8?placeholderIfAbsent=true"
                    }
                    alt={openItem === index ? "Collapse" : "Expand"}
                    className="aspect-[0.96] object-contain w-[22px] flex-1"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section after FAQ */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-baloo">
              {language === "fr"
                ? "Toutes vos questions ont une réponse ?"
                : "Got All Your Questions Answered?"
              }
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-baloo">
              {language === "fr"
                ? "Il est temps de passer à l'action et de créer vos premiers designs époustouflants avec Styly AI."
                : "It's time to take action and create your first stunning designs with Styly AI."
              }
            </p>
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#593286] via-purple-500 to-[#FA6F40] text-white font-bold text-xl px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-baloo"
              aria-label={language === "fr" ? "Créer mon premier design avec Styly AI" : "Create my first design with Styly AI"}
            >
              {language === "fr"
                ? "Créer Mon Premier Design"
                : "Create My First Design"
              }
            </a>
            <div className="mt-4">
              <span className="text-sm text-gray-500 font-baloo">
                {language === "fr" ? "✓ Inscription gratuite en 30 secondes" : "✓ Free signup in 30 seconds"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
