import React from "react";
import { Link } from "react-router-dom";

interface TestimonialProps {
  name: string;
  role: string;
  profileImage: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  stats: string[];
}

const testimonials: TestimonialProps[] = [
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

const TestimonialCard: React.FC<{ testimonial: TestimonialProps }> = ({ testimonial }) => {
  const gradientColors = [
    "from-purple-600 to-purple-400",
    "from-purple-500 to-purple-300",
    "from-purple-400 to-purple-200",
    "from-purple-300 to-purple-100"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
      {/* Header with profile image and details */}
      <div className="flex items-start space-x-4 mb-4">
        <img 
          src={testimonial.profileImage}
          alt={testimonial.name}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-xl font-bold text-purple-800">{testimonial.name}</h3>
          <p className="text-sm font-medium text-blue-600">{testimonial.role}</p>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-700 mb-5">{testimonial.description}</p>
      
      {/* Styly.io button */}
      <Link 
        to="/"
        className="w-full bg-purple-600 text-white text-center py-3 rounded-lg font-medium mb-6 hover:bg-purple-700 transition-colors"
      >
        www.styly.io
      </Link>
      
      {/* Before/After Images */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="relative rounded-lg overflow-hidden mb-1">
            <img 
              src={testimonial.beforeImage}
              alt="Before"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-white text-[10px] font-bold py-1 px-2 text-center">
              {testimonial.beforeLabel}
            </div>
          </div>
          <p className="text-center text-xs text-gray-500">Before</p>
        </div>
        <div>
          <div className="relative rounded-lg overflow-hidden mb-1">
            <img 
              src={testimonial.afterImage}
              alt="After"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-white text-[10px] font-bold py-1 px-2 text-center">
              {testimonial.afterLabel}
            </div>
          </div>
          <p className="text-center text-xs text-gray-500">After</p>
        </div>
      </div>
      
      {/* Stats list */}
      <div className="space-y-2 mt-auto">
        {testimonial.stats.map((stat, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-r ${gradientColors[index % gradientColors.length]} text-white py-2 px-4 rounded-full text-sm font-medium`}
          >
            {stat}
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
