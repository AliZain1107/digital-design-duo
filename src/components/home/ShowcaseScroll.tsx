
import React from "react";

const ShowcaseScroll: React.FC = () => {
  const images = [
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png", // Duplicate for seamless loop
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-showcase">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Showcase ${index + 1}`}
            className="min-w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseScroll;
