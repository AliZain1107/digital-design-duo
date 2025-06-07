import React from "react";
import { useLanguage } from "@/lib/i18n";
import { MapPin, Eye, Heart, Award } from "lucide-react";

const AgencyShowcase: React.FC = () => {
  const { language, t } = useLanguage();

  const agencies = [
    {
      id: 1,
      name: "Studio Minimal",
      location: "Tokyo, Japan",
      specialty: "Minimalist Design",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "12.5K",
      likes: 856,
      verified: true
    },
    {
      id: 2,
      name: "Dewy Flavored Water",
      location: "New York, USA",
      specialty: "Commercial Spaces",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "8.9K",
      likes: 642,
      verified: true
    },
    {
      id: 3,
      name: "Cartoon Network Time",
      location: "London, UK",
      specialty: "Creative Interiors",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "15.6K",
      likes: 1203,
      verified: true
    },
    {
      id: 4,
      name: "Thanks Mom Branding",
      location: "Paris, France",
      specialty: "Luxury Residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "20.3K",
      likes: 1847,
      verified: true
    },
    {
      id: 5,
      name: "Nordic Design Co",
      location: "Stockholm, Sweden",
      specialty: "Scandinavian Style",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "9.4K",
      likes: 723,
      verified: true
    },
    {
      id: 6,
      name: "Urban Architects",
      location: "Berlin, Germany",
      specialty: "Modern Architecture",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "17.8K",
      likes: 1456,
      verified: true
    },
    {
      id: 7,
      name: "Coastal Interiors",
      location: "Sydney, Australia",
      specialty: "Coastal Design",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "14.2K",
      likes: 1089,
      verified: true
    },
    {
      id: 8,
      name: "Zen Spaces",
      location: "Kyoto, Japan",
      specialty: "Zen & Wellness",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      views: "8.6K",
      likes: 672,
      verified: true
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.06),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">
              {language === "fr" ? "Réseau Elite" : "Elite Network"}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            {language === "fr" ? "Nos Partenaires Certifiés" : "Our Certified Partners"}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {language === "fr"
              ? "Rejoignez un réseau d'élite de designers et architectes qui transforment l'avenir du design avec l'IA"
              : "Join an elite network of designers and architects transforming the future of design with AI"
            }
          </p>
        </div>

        {/* Premium Agency Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {agencies.map((agency, index) => (
            <div
              key={agency.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-purple-200/50 hover:-translate-y-3"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Premium Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={agency.image}
                  alt={`${agency.name} - ${agency.specialty}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                {/* Floating Verification Badge */}
                {agency.verified && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                )}

                {/* Country Flag Placeholder */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-xs font-semibold text-gray-700">
                    {agency.location.split(', ')[1]}
                  </span>
                </div>
              </div>

              {/* Premium Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                  {agency.name}
                </h3>

                <div className="flex items-center text-gray-600 text-xs mb-2">
                  <MapPin className="w-3 h-3 mr-1 text-purple-500" />
                  <span>{agency.location}</span>
                </div>

                <p className="text-xs text-purple-600 font-medium mb-3 bg-purple-50 rounded-full px-2 py-1 inline-block">
                  {agency.specialty}
                </p>

                {/* Premium Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-blue-50 rounded-full px-2 py-1">
                    <Eye className="w-3 h-3 text-blue-600 mr-1" />
                    <span className="text-xs font-semibold text-blue-700">{agency.views}</span>
                  </div>
                  <div className="flex items-center bg-red-50 rounded-full px-2 py-1">
                    <Heart className="w-3 h-3 text-red-500 mr-1" />
                    <span className="text-xs font-semibold text-red-600">{agency.likes}</span>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/0 via-purple-400/5 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Premium Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-semibold">
                {language === "fr" ? "Certification Styly Gratuite" : "Free Styly Certification"}
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {language === "fr"
                ? "Rejoignez ces professionnels d'élite et développez votre activité avec l'IA"
                : "Join these elite professionals and grow your business with AI"
              }
            </p>
            <div className="inline-flex items-center text-sm text-purple-600 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              {language === "fr" ? "Applications ouvertes" : "Applications open"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;
