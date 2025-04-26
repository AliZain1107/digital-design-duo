import React, { useState } from "react";

interface Testimonial {
  name: string;
  username: string;
  country: string;
  countryFlag: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Creative Spaces Agency",
    username: "@CreativeSpaces",
    country: "United States",
    countryFlag: "🇺🇸",
    text: "As a boutique design agency, we've accelerated project delivery by 30% using your AI-driven interior architecture. Truly a game-changer!"
  },
  {
    name: "Modern Studio Agency",
    username: "@ModernStudio",
    country: "Germany",
    countryFlag: "🇩🇪",
    text: "Our agency scaled client presentations effortlessly with your AI, increasing win rates by 20%. Exceptional tool for professional designers!"
  },
  {
    name: "Hans Müller",
    username: "@zuzu254",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    text: "The architecture for interior AI is breathtaking! 🏢 I'm fascinated by the fusion of form and function in every room, enhanced by your cutting-edge AI. 👏 Kudos to your exceptional team!"
  },
  {
    name: "Jean-Pierre Dubois",
    username: "@dubois60",
    country: "France",
    countryFlag: "🇫🇷",
    text: "Your architecture is magnificent! I'm impressed by the seamless blend of aesthetics and functionality in every corner. Bravo on your exceptional work! 👍"
  },
  {
    name: "Olivia Thompson Ray",
    username: "@RayrayT",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    text: "I'm in awe of the architectural genius evident in every detail of my new design interior ideas, all meticulously crafted with the help of interior AI. The harmonious mix of traditional and modern styles is truly inspiring 🎯"
  },
  {
    name: "Hans Müller",
    username: "@zuzu254",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    text: "The architecture for exterior AI is breathtaking! 🏢 I'm fascinated by the fusion of form and function in every room, enhanced by your cutting-edge AI. 👏 Kudos to your exceptional team!"
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
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const goToPrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return testimonials.slice(start, end);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1800px] mx-auto">
        {/* Social Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 text-center mb-4">
                Don't just take our word for it
            </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-12">
                Hear from some of our amazing customers who used our product
          </p>

          <div className="bg-gray-100 p-6 md:p-8 lg:p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCurrentTestimonials().map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mr-4">
                      {testimonial.countryFlag}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl md:text-2xl">{testimonial.name}</h3>
                      <p className="text-base text-gray-500">{testimonial.username}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              ))}
              </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              <button 
                onClick={goToPrev}
                className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonials"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-purple-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={goToNext}
                className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next testimonials"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-purple-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
