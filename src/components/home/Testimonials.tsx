import React, { useState, useRef } from "react";
import { useLanguage } from "@/lib/i18n";
import AgencyShowcase from "@/components/collaborators/AgencyShowcase";

interface Testimonial {
  name: string;
  username: string;
  country: string;
  countryFlag: string;
  text: string;
  profileImage: string;
}

const testimonialsEn: Testimonial[] = [
  {
    name: "Creative Spaces Agency",
    username: "@CreativeSpaces",
    country: "United States",
    countryFlag: "🇺🇸",
    text: "Our small team has big dreams, and this platform made them real. We turn wild ideas into beautiful spaces, impressing clients and making every project a joy to deliver.",
    profileImage: "/1.jpg"
  },
  {
    name: "Modern Studio Agency",
    username: "@ModernStudio",
    country: "Germany",
    countryFlag: "🇩🇪",
    text: "Efficiency is my top priority, and this tool is my secret weapon. Presentations are smooth, clients are impressed, and our success rate has never been higher. It's a game changer.",
    profileImage: "/2.jpg"
  },
  {
    name: "Hans Müller",
    username: "@zuzu254",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    text: "As an architect, I'm detail-oriented. This platform blends form and function perfectly, making every project feel like a creative partnership. It's intuitive and inspiring to use.",
    profileImage: "/3.jpg"
  },
  {
    name: "Jean-Pierre Dubois",
    username: "@dubois60",
    country: "France",
    countryFlag: "🇫🇷",
    text: "After years in design, I thought I'd seen it all. But this tool adds a special touch to my work. Clients notice the difference, and I feel more creative than ever. Bravo!",
    profileImage: "/4.jpg"
  },
  {
    name: "Olivia Thompson Ray",
    username: "@RayrayT",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    text: "Mixing old and new is my passion, and this platform gets it. My living room is now a conversation starter, and friends keep asking for my design secrets. It's truly unique.",
    profileImage: "/5.jpg"
  },
  {
    name: "Sofia Rossi",
    username: "@sofiarossi",
    country: "Italy",
    countryFlag: "🇮🇹",
    text: "I'm not a professional designer, but this platform made me feel like one. The suggestions felt personal, and now my home reflects my style. Even my nonna is impressed!",
    profileImage: "/6.jpg"
  },
  {
    name: "Carlos Mendez",
    username: "@carlitosmx",
    country: "Mexico",
    countryFlag: "🇲🇽",
    text: "As a real estate agent, I need to impress buyers fast. This tool lets me show a vision for any property in minutes. My sales have jumped, and clients trust my advice.",
    profileImage: "/7.jpg"
  },
  {
    name: "Priya Sharma",
    username: "@priyainteriors",
    country: "India",
    countryFlag: "🇮",
    text: "I blog about small spaces, and this platform is my secret for creative makeovers. My readers love the before-and-afters, and I enjoy experimenting with new ideas easily.",
    profileImage: "/8.jpg"
  },
  {
    name: "Tom Becker",
    username: "@tomthebuilder",
    country: "Australia",
    countryFlag: "🇦🇺",
    text: "Managing renovations means time is money. This software helps me plan layouts and show clients options quickly. Projects stay on track, and my customers are always happy.",
    profileImage: "/9.jpg"
  },
  {
    name: "Maya Lee",
    username: "@mayaleestudio",
    country: "Singapore",
    countryFlag: "🇸🇬",
    text: "I love bold colors and design, but was always hesitant to try new things. Now I can preview my ideas before committing. My apartment finally feels like me, and I get compliments.",
    profileImage: "/10.jpg"
  },
  {
    name: "Samir El Amrani",
    username: "@samircreates",
    country: "Morocco",
    countryFlag: "🇲🇦",
    text: "Designing restaurants means every project needs a unique vibe. This platform lets me test lighting and layouts until it feels right. Clients are thrilled, and so am I.",
    profileImage: "/11.jpg"
  },
  {
    name: "Emily Johnson",
    username: "@emilyathome",
    country: "Canada",
    countryFlag: "🇨🇦",
    text: "Buying my first house was overwhelming, but the step-by-step suggestions made it fun. Now my place feels cozy and totally my style. I recommend it to all new homeowners.",
    profileImage: "/12.jpg"
  }
];

const testimonialsFr: Testimonial[] = [
  {
    name: "Creative Spaces Agency",
    username: "@CreativeSpaces",
    country: "États-Unis",
    countryFlag: "🇺🇸",
    text: "Notre petite équipe a de grandes ambitions, et cette plateforme les a rendues possibles. Nous transformons des idées folles en espaces uniques, nos clients sont ravis à chaque projet.",
    profileImage: "/1.jpg"
  },
  {
    name: "Modern Studio Agency",
    username: "@ModernStudio",
    country: "Allemagne",
    countryFlag: "🇩🇪",
    text: "L'efficacité est essentielle pour moi, et cet outil est mon atout secret. Les présentations sont fluides, les clients impressionnés, et notre taux de réussite a explosé.",
    profileImage: "/2.jpg"
  },
  {
    name: "Hans Müller",
    username: "@zuzu254",
    country: "Suisse",
    countryFlag: "🇨🇭",
    text: "Architecte exigeant, j'ai trouvé ici un allié. La plateforme marie esthétique et utilité, chaque projet devient un vrai dialogue créatif. C'est intuitif et inspirant.",
    profileImage: "/3.jpg"
  },
  {
    name: "Jean-Pierre Dubois",
    username: "@dubois60",
    country: "France",
    countryFlag: "🇫🇷",
    text: "Après des années dans le design, je pensais avoir tout vu. Mais cet outil apporte une touche unique à mon travail. Les clients le remarquent, et je me sens plus créatif.",
    profileImage: "/4.jpg"
  },
  {
    name: "Olivia Thompson Ray",
    username: "@RayrayT",
    country: "Royaume-Uni",
    countryFlag: "🇬🇧",
    text: "J'adore mélanger l'ancien et le moderne, et cette plateforme a tout compris. Mon salon est devenu un sujet de conversation, mes amis veulent tous connaître mon secret déco.",
    profileImage: "/5.jpg"
  },
  {
    name: "Sofia Rossi",
    username: "@sofiarossi",
    country: "Italie",
    countryFlag: "🇮��",
    text: "Je ne suis pas décoratrice, mais cette plateforme m'a donné confiance. Les suggestions étaient adaptées, et maintenant mon intérieur me ressemble. Même ma nonna est conquise !",
    profileImage: "/6.jpg"
  },
  {
    name: "Carlos Mendez",
    username: "@carlitosmx",
    country: "Mexique",
    countryFlag: "🇲🇽",
    text: "Agent immobilier, je dois séduire vite. Cet outil me permet de montrer une vision pour chaque bien en quelques minutes. Mes ventes ont grimpé, mes clients me font confiance.",
    profileImage: "/7.jpg"
  },
  {
    name: "Priya Sharma",
    username: "@priyainteriors",
    country: "Inde",
    countryFlag: "🇮",
    text: "Je blogue sur les petits espaces, et cette plateforme est mon secret pour des relookings créatifs. Mes lecteurs adorent les avant/après, et j'expérimente facilement.",
    profileImage: "/8.jpg"
  },
  {
    name: "Tom Becker",
    username: "@tomthebuilder",
    country: "Australie",
    countryFlag: "🇦🇺",
    text: "Gérer des rénovations, c'est optimiser le temps. Ce logiciel m'aide à planifier et à présenter des options rapidement. Les projets avancent, et mes clients sont satisfaits.",
    profileImage: "/9.jpg"
  },
  {
    name: "Maya Lee",
    username: "@mayaleestudio",
    country: "Singapour",
    countryFlag: "🇸🇬",
    text: "J'aime les couleurs vives et le design audacieux, mais j'hésitais à oser. Maintenant, je peux visualiser mes idées avant de me lancer. Mon appartement me ressemble enfin.",
    profileImage: "/10.jpg"
  },
  {
    name: "Samir El Amrani",
    username: "@samircreates",
    country: "Maroc",
    countryFlag: "🇲��",
    text: "Concevoir des restaurants, c'est créer une ambiance unique à chaque fois. Cette plateforme me permet de tester jusqu'à ce que tout soit parfait. Les clients sont ravis.",
    profileImage: "/11.jpg"
  },
  {
    name: "Emily Johnson",
    username: "@emilyathome",
    country: "Canada",
    countryFlag: "🇨🇦",
    text: "Acheter ma première maison était stressant, mais les suggestions étape par étape ont tout simplifié. Mon chez-moi est chaleureux et à mon image. Je recommande à tous.",
    profileImage: "/12.jpg"
  }
];

const caseStudies = [
  {
    name: "Emma",
    role: "First-Time Homeowner",
    profileImage: "/lovable-uploads/1.png",
    description: "Faced with a tight budget for her fixer-upper, Emma discovered Styly.io and found smart, cost-effective ways to renovate her new home.",
    beforeImage: "/lovable-uploads/2.png",
    afterImage: "/lovable-uploads/3.png",
    beforeLabel: "HOMEOWNERS & RENTERS",
    afterLabel: "STARTUPS & TECH-SAVVY CREATORS",
    stats: [
      "Saved $2,500 on designer fees",
      "25% under budget",
      "10% property value increase",
      "Decision-making time cut: 3 weeks to 5 days"
    ]
  },
  {
    name: "Marcus",
    role: "Airbnb Host",
    profileImage: "/lovable-uploads/4.png",
    description: "Looking to boost his Airbnb bookings, Marcus used Styly.io to create unique, appealing interiors that set his properties apart from the competition.",
    beforeImage: "/lovable-uploads/5.png",
    afterImage: "/lovable-uploads/6.png",
    beforeLabel: "RETAILERS & BRANDS",
    afterLabel: "WALLPAPER BRANDS",
    stats: [
      "Bookings up 40% across all properties",
      "Average nightly rate up €30",
      "\"Superhost\" status in 4 months"
    ]
  },
  {
    name: "Sophia",
    role: "Real Estate Developer",
    profileImage: "/lovable-uploads/7.png",
    description: "Challenged to pre-sell apartments in a new complex, Sophia leveraged Styly.io to create compelling visualizations that helped potential buyers envision their future homes.",
    beforeImage: "/lovable-uploads/8.png",
    afterImage: "/lovable-uploads/9.png",
    beforeLabel: "FLOORING BRANDS",
    afterLabel: "RENOVATORS",
    stats: [
      "70% units pre-sold before completion",
      "Marketing spend down 35% with Styly.io visuals",
      "Average sale price up 7%",
      "Sales cycle shortened from 45 to 30 days"
    ]
  }
];

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const testimonials = language === 'fr' ? testimonialsFr : testimonialsEn;
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);



  const goToPrev = () => {
    if (currentPage === 0 || animating) return;
    setDirection(-1);
    setAnimating(true);
    setCurrentPage((prev) => prev - 1);
    setTimeout(() => setAnimating(false), 500); // match transition duration for smoothness
  };

  const goToNext = () => {
    if (currentPage === testimonials.length - 1 || animating) return;
    setDirection(1);
    setAnimating(true);
    setCurrentPage((prev) => prev + 1);
    setTimeout(() => setAnimating(false), 500); // match transition duration for smoothness
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return testimonials.slice(start, end);
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white -mt-4" key={`testimonials-${language}`}>
      <div className="max-w-[1800px] mx-auto">
        {/* Social Testimonials */}
        <div>
          <h2 className="text-4xl font-baloo font-extrabold tracking-tight leading-tight text-gray-900 mb-4 text-center">
            <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
              {t.dontTakeOurWord}
            </span>
          </h2>
          <div className="w-full max-w-3xl mx-auto text-center mb-8">
            <p className="text-base sm:text-lg md:text-xl font-baloo font-normal leading-snug text-gray-600 tracking-wide animate-fade-in">
              {t.hearFromCustomers}
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 lg:p-12 rounded-3xl flex flex-col items-center">
            {/* Deck of cards effect with smooth animation and more visible background cards */}
            <div className="relative flex items-center justify-center w-full max-w-xl h-[420px] mb-8 overflow-visible">
              {[-2, -1, 0, 1, 2].map((offset) => {
                const idx = currentPage + offset;
                if (idx < 0 || idx >= testimonials.length) return null;
                // Main card
                if (offset === 0) {
                  return (
                    <div
                      key={idx}
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[420px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center z-20 transition-all duration-500 ${animating ? (direction === 1 ? 'animate-slide-left' : 'animate-slide-right') : ''}`}
                      style={{ boxShadow: '0 8px 32px 0 rgba(80, 80, 120, 0.10)' }}
                    >
                      <img
                        src={testimonials[idx].profileImage}
                        alt={testimonials[idx].name}
                        className="h-20 w-20 rounded-full object-cover border-4 border-purple-200 mb-4 shadow"
                      />
                      <h3 className="font-bold text-gray-900 text-lg md:text-xl text-center mb-1 font-baloo">{testimonials[idx].name}</h3>
                      <p className="text-xs md:text-base text-gray-500 break-all text-center mb-1 font-baloo">{testimonials[idx].username} {testimonials[idx].countryFlag}</p>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center flex-1 mt-2 font-baloo">
                        {testimonials[idx].text}
                      </p>
                    </div>
                  );
                }
                // Side cards (deck effect)
                const z = 10 - Math.abs(offset);
                const scale = 1 - Math.abs(offset) * 0.12;
                const blur = Math.abs(offset) === 2 ? 'blur-[2px]' : 'blur-[1px]';
                const opacity = 0.35 + 0.25 * (2 - Math.abs(offset));
                const translateX = offset * 110;
                return (
                  <div
                    key={idx}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[420px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center z-${z} transition-all duration-500 ${blur}`}
                    style={{
                      transform: `translate(-50%, -50%) scale(${scale}) translateX(${translateX}px)`,
                      opacity,
                      boxShadow: '0 8px 32px 0 rgba(80, 80, 120, 0.10)'
                    }}
                  >
                    <img
                      src={testimonials[idx].profileImage}
                      alt={testimonials[idx].name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-purple-200 mx-auto mt-6 mb-2 shadow"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center gap-4 mb-10">
              <button
                onClick={goToPrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700 shadow transition"
                disabled={currentPage === 0 || animating}
              >
                &lt;
              </button>
              <button
                onClick={goToNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700 shadow transition"
                disabled={currentPage === testimonials.length - 1 || animating}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-16">
        {/* CTA Banner Section removed */}
      </div>
    </section>
  );
};

export default Testimonials;
