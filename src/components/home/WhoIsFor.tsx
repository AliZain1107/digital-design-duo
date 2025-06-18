import React from "react";

const cards = [
  {
    icon: (
      <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7-9 7-9-7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9.75m6 11.25V9.75" /></svg>
    ),
    title: "Home-Owners",
    desc: "Transform your space with ease. Instantly visualize new designs, furniture, and layouts before making a single purchase."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25V15m0 0l-3.5-3.5m3.5 3.5l3.5-3.5M12 15V4.75m0 0l-3.5 3.5m3.5-3.5l3.5 3.5" /></svg>
    ),
    title: "Interior Designers",
    desc: "Speed up your workflow, impress clients with instant AI-generated concepts, and explore endless creative possibilities."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5V19a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19V7.5M3 7.5L12 3l9 4.5M3 7.5l9 4.5m0 0l9-4.5m-9 4.5V21" /></svg>
    ),
    title: "Real Estate Professionals",
    desc: "Stage properties virtually, boost listings with stunning visuals, and help buyers see the true potential of every space."
  }
];

const WhoIsFor: React.FC = () => (
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

export default WhoIsFor;
