
import React from "react";

const ShowcaseScroll: React.FC = () => {
  const images = [
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
  ];

  return (
    <div className="w-full overflow-hidden mt-8">
      <div className="flex animate-showcase">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Showcase ${index + 1}`}
            className="h-auto w-full flex-shrink-0"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseScroll;
