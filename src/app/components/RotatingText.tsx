import { useState, useEffect, useRef } from 'react';

const words = ['Life', 'Health', 'General Business'];

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate the offset based on the actual height of items
  const getOffset = () => {
    if (typeof window === 'undefined') return 0;

    // Use different offsets for different screen sizes
    if (window.innerWidth < 640) {
      return currentIndex * 60; // Mobile spacing
    } else if (window.innerWidth < 1024) {
      return currentIndex * 75; // Tablet spacing
    } else {
      return currentIndex * 88; // Desktop spacing
    }
  };

  return (
    <div ref={containerRef} className="relative h-[48px] sm:h-[60px] lg:h-[72px] overflow-hidden">
      <div
        className="absolute transition-transform duration-500 ease-in-out w-full"
        style={{
          transform: `translateY(-${getOffset()}px)`,
        }}
      >
        {words.map((word, index) => (
          <div
            key={index}
            className="h-[60px] sm:h-[75px] lg:h-[88px] flex items-center"
          >
            <p className="font-['Leadway_Heavy_Italic:Italic',sans-serif] italic leading-[48px] sm:leading-[60px] lg:leading-[72px] text-[#ff6b22] text-[36px] sm:text-[48px] lg:text-[60px] whitespace-nowrap">
              {word}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
