
import React, { useState, useEffect } from 'react';

const CursorImageFollow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add some lag to make the movement smoother
      requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50"
      style={{
        transform: `translate(${position.x + 20}px, ${position.y - 100}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <img
        src="/lovable-uploads/9b430da7-ba45-4cad-94f5-1c7fe6c26599.png"
        alt="Cursor following content"
        className="w-[300px] rounded-lg shadow-lg opacity-90"
      />
    </div>
  );
};

export default CursorImageFollow;
