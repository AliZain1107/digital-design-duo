import React from "react";
import { Link } from "react-router-dom";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  stats: {
    text: string;
    color: string;
  }[];
}

const testimonials: TestimonialProps[] = [
  {
    name: "Emma",
    role: "First-Time Homeowner",
    image: "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    beforeImage: "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    afterImage: "/lovable-uploads/9b430da7-ba45-4cad-94f5-1c7fe6c26599.png",
    description: "Faced with a tight budget for her fixer-upper, Emma discovered Styly.io and found smart, cost-effective ways to renovate her new home.",
    stats: [
      { text: "Saved $2,500 on designer fees", color: "bg-purple-600" },
      { text: "25% under budget", color: "bg-purple-500" },
      { text: "10% property value increase", color: "bg-purple-400" },
      { text: "Decision-making time cut: 3 weeks to 5 days", color: "bg-purple-300" }
    ]
  },
  {
    name: "Marcus",
    role: "Airbnb Host",
    image: "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    beforeImage: "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    afterImage: "/lovable-uploads/9b430da7-ba45-4cad-94f5-1c7fe6c26599.png",
    description: "Looking to boost his Airbnb bookings, Marcus used Styly.io to create unique, appealing interiors that set his properties apart from the competition.",
    stats: [
      { text: "Bookings up 40% across all properties", color: "bg-purple-600" },
      { text: "Average nightly rate up €30", color: "bg-purple-500" },
      { text: '"Superhost" status in 4 months', color: "bg-purple-400" }
    ]
  },
  {
    name: "Sophia",
    role: "Real Estate Developer",
    image: "/lovable-uploads/9b430da7-ba45-4cad-94f5-1c7fe6c26599.png",
    beforeImage: "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    afterImage: "/lovable-uploads/9b430da7-ba45-4cad-94f5-1c7fe6c26599.png",
    description: "Challenged to pre-sell apartments in a new complex, Sophia leveraged Styly.io to create compelling visualizations that helped potential buyers envision their future homes.",
    stats: [
      { text: "70% units pre-sold before completion", color: "bg-purple-600" },
      { text: "Marketing spend down 35% with Styly.io visuals", color: "bg-purple-500" },
      { text: "Average sale price up 7%", color: "bg-purple-400" },
      { text: "Sales cycle shortened from 45 to 30 days", color: "bg-purple-300" }
    ]
  }
];

const TestimonialCard: React.FC<{ testimonial: TestimonialProps }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 flex flex-col gap-4">
      {/* User Profile */}
      <div className="flex items-start gap-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-20 h-20 rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-bold text-purple-900">{testimonial.name}</h3>
          <p className="text-sm text-green-600">{testimonial.role}</p>
          <p className="text-sm mt-2 text-gray-700">{testimonial.description}</p>
        </div>
      </div>
      
      {/* Styly.io Button */}
      <Link to="/" className="block w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center font-medium hover:opacity-90 transition-opacity">
        www.styly.io
      </Link>
      
      {/* Before/After Images */}
      <div className="grid grid-cols-2 gap-2 my-2">
        <div>
          <img 
            src={testimonial.beforeImage} 
            alt="Before" 
            className="w-full h-24 object-cover rounded-md"
          />
          <p className="text-xs text-gray-500 mt-1">Before</p>
        </div>
        <div>
          <img 
            src={testimonial.afterImage} 
            alt="After" 
            className="w-full h-24 object-cover rounded-md"
          />
          <p className="text-xs text-gray-500 mt-1">After</p>
        </div>
      </div>
      
      {/* Stats */}
      <div className="flex flex-col gap-2 mt-2">
        {testimonial.stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.color} text-white py-2 px-4 rounded-full text-sm font-medium`}
          >
            {stat.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full">
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
