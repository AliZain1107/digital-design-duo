// import React from "react";
// import { useLanguage } from "../../lib/i18n";

// const WhoIsFor: React.FC = () => {
//   const { t, language } = useLanguage();
//   const cards = [
//     {
//       icon: (
//         <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7-9 7-9-7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9.75m6 11.25V9.75" /></svg>
//       ),
//       title: t.homeownersRenters,
//       desc: language === 'fr'
//         ? "Transformez votre espace facilement. Visualisez instantanément de nouveaux designs, meubles et agencements avant d'acheter."
//         : "Transform your space with ease. Instantly visualize new designs, furniture, and layouts before making a single purchase."
//     },
//     {
//       icon: (
//         <svg className="w-10 h-10 text-purple-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25V15m0 0l-3.5-3.5m3.5 3.5l3.5-3.5M12 15V4.75m0 0l-3.5 3.5m3.5-3.5l3.5 3.5" /></svg>
//       ),
//       title: t.interiorDesignersArchitects,
//       desc: language === 'fr'
//         ? "Accélérez votre workflow, impressionnez vos clients avec des concepts IA instantanés et explorez des possibilités créatives infinies."
//         : "Speed up your workflow, impress clients with instant AI-generated concepts, and explore endless creative possibilities."
//     },
//     {
//       icon: (
//         <svg className="w-10 h-10 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5V19a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19V7.5M3 7.5L12 3l9 4.5M3 7.5l9 4.5m0 0l9-4.5m-9 4.5V21" /></svg>
//       ),
//       title: t.realEstateProfessionals,
//       desc: language === 'fr'
//         ? "Mettez en scène des biens virtuellement, valorisez vos annonces avec des visuels époustouflants et aidez les acheteurs à voir le vrai potentiel de chaque espace."
//         : "Stage properties virtually, boost listings with stunning visuals, and help buyers see the true potential of every space."
//     }
//   ];

//   return (
//     <section className="w-full pt-6 pb-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0">
//           {cards.map((card, idx) => (
//             <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//               {card.icon}
//               <h3 className="text-xl font-semibold mb-3 text-purple-800 font-baloo">{card.title.charAt(0).toUpperCase() + card.title.slice(1).toLowerCase()}</h3>
//               <p className="text-gray-600 text-base font-normal font-baloo">{card.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Central CTA Section */}
//         {/* Deleted: Central CTA with 'Ready to Transform Your Spaces?' */}
//       </div>
//     </section>
//   );
// };

// export default WhoIsFor;


import React from "react";

const WhoIsFor: React.FC = () => {
  const cards = [
    {
      icon: (
        <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7-9 7-9-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9.75m6 11.25V9.75" />
        </svg>
      ),
      title: "Homeowners & Renters",
      desc: "Transform your space with ease. Instantly visualize new designs, furniture, and layouts before making a single purchase.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-purple-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25V15m0 0l-3.5-3.5m3.5 3.5l3.5-3.5M12 15V4.75m0 0l-3.5 3.5m3.5-3.5l3.5 3.5" />
        </svg>
      ),
      title: "Interior Designers & Architects",
      desc: "Speed up your workflow, impress clients with instant AI-generated concepts, and explore endless creative possibilities.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5V19a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19V7.5M3 7.5L12 3l9 4.5M3 7.5l9 4.5m0 0l9-4.5m-9 4.5V21" />
        </svg>
      ),
      title: "Real Estate Professionals",
      desc: "Stage properties virtually, boost listings with stunning visuals, and help buyers see the true potential of every space.",
    }
  ];

  return (
    <section className="w-full pt-6 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              {card.icon}
              <h3 className="text-xl font-semibold mb-3 text-purple-800 font-baloo">{card.title}</h3>
              <p className="text-gray-600 text-base font-normal font-baloo">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
