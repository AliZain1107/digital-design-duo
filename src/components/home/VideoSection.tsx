import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Revolutionize Your Space with AI
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how our AI platform transforms interior design with just a few clicks
          </p>
        </div>
        
        <div className="w-full mx-auto" style={{ maxWidth: "min(90vw, 1200px)" }}>
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/I-8ur3hBTnM" 
              title="Revolutionize Your Space with AI Home & Room Design | Styly.io" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 