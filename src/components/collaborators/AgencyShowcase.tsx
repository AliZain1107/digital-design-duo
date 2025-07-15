import React, { forwardRef } from "react";
import { useLanguage } from "@/lib/i18n";
import { MapPin, Eye, Heart, Award } from "lucide-react";

const countryTranslations: Record<string, { en: string; fr: string }> = {
  "Japan": { en: "Japan", fr: "Japon" },
  "USA": { en: "USA", fr: "États-Unis" },
  "UK": { en: "UK", fr: "Royaume-Uni" },
  "France": { en: "France", fr: "France" },
  "Sweden": { en: "Sweden", fr: "Suède" },
  "Germany": { en: "Germany", fr: "Allemagne" },
  "Australia": { en: "Australia", fr: "Australie" },
};

const specialtyTranslations: Record<string, { en: string; fr: string }> = {
  "Minimalist Design": { en: "Minimalist Design", fr: "Design minimaliste" },
  "Commercial Spaces": { en: "Commercial Spaces", fr: "Espaces commerciaux" },
  "Creative Interiors": { en: "Creative Interiors", fr: "Intérieurs créatifs" },
  "Luxury Residential": { en: "Luxury Residential", fr: "Résidentiel de luxe" },
  "Scandinavian Style": { en: "Scandinavian Style", fr: "Style scandinave" },
  "Modern Architecture": { en: "Modern Architecture", fr: "Architecture moderne" },
  "Coastal Design": { en: "Coastal Design", fr: "Design côtier" },
  "Zen & Wellness": { en: "Zen & Wellness", fr: "Zen & bien-être" },
};

const AgencyShowcase = forwardRef<HTMLElement, {}>((props, ref) => {
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
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.06),transparent_50%)]"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-baloo font-extrabold tracking-tight leading-tight text-gray-900 mb-4 text-center font-baloo">
            {language === "fr" ? "Nos Partenaires Certifiés" : "Our Certified Partners"}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-baloo">
            {language === "fr"
              ? "Rejoignez un réseau d'élite de designers et architectes qui transforment l'avenir du design avec l'IA."
              : "Join an elite network of designers and architects transforming the future of design with AI."
            }
          </p>
        </div>

        {/* Smaller, More Responsive Agency Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4 mb-12">
          {agencies.map((agency, index) => (
            <div
              key={agency.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-white/50 hover:border-purple-200/50 hover:-translate-y-2 font-baloo"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Smaller Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={agency.image}
                  alt={`${agency.name} - ${agency.specialty}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                {/* Smaller Verification Badge */}
                {agency.verified && (
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full p-1 shadow-md">
                    <Award className="w-3 h-3 text-purple-600" />
                  </div>
                )}

                {/* Smaller Country Flag */}
                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm rounded-md px-1 py-0.5">
                  <span className="text-xs font-semibold text-gray-700">
                    {(() => {
                      const [city, country] = agency.location.split(', ');
                      const countryLabel = countryTranslations[country]?.[language] || country;
                      return `${city}, ${countryLabel}`;
                    })()}
                  </span>
                </div>
              </div>

              {/* Compact Content */}
              <div className="p-2 sm:p-3">
                <h3 className="font-bold text-xs sm:text-sm text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300 leading-tight line-clamp-2 font-baloo">
                  {agency.name}
                </h3>

                <div className="flex items-center text-gray-600 text-xs mb-1 font-baloo">
                  <MapPin className="w-2 h-2 mr-1 text-purple-500" />
                  <span className="truncate">
                    {(() => {
                      const [city, country] = agency.location.split(', ');
                      const countryLabel = countryTranslations[country]?.[language] || country;
                      return `${city}, ${countryLabel}`;
                    })()}
                  </span>
                </div>

                <p className="text-xs text-purple-600 font-medium mb-2 bg-purple-50 rounded-full px-1 py-0.5 inline-block truncate max-w-full font-baloo">
                  {specialtyTranslations[agency.specialty]
                    ? specialtyTranslations[agency.specialty][language]
                    : agency.specialty}
                </p>

                {/* Compact Stats */}
                <div className="flex items-center justify-between font-baloo">
                  <div className="flex items-center bg-blue-50 rounded-full px-1 py-0.5 font-baloo">
                    <Eye className="w-2 h-2 text-blue-600 mr-1" />
                    <span className="text-xs font-semibold text-blue-700">{agency.views}</span>
                  </div>
                  <div className="flex items-center bg-red-50 rounded-full px-1 py-0.5 font-baloo">
                    <Heart className="w-2 h-2 text-red-500 mr-1" />
                    <span className="text-xs font-semibold text-red-600">{agency.likes}</span>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-purple-400/5 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AgencyShowcase;
