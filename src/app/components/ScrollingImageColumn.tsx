import { useEffect, useRef } from 'react';

interface ScrollingImageColumnProps {
  children: React.ReactNode;
  direction: 'up' | 'down';
  speed?: number;
  className?: string;
}

export function ScrollingImageColumn({ children, direction, speed = 0.5, className = '' }: ScrollingImageColumnProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPosition = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Get the height of one set of content (first child)
    const firstChild = content.firstElementChild as HTMLElement;
    if (!firstChild) return;

    const singleContentHeight = firstChild.offsetHeight;

    // Initialize scroll position based on direction
    scrollPosition.current = 0;

    const animate = () => {
      if (direction === 'down') {
        scrollPosition.current += speed;
        // Loop when we've scrolled past one full content height
        if (scrollPosition.current >= singleContentHeight) {
          scrollPosition.current = 0;
        }
      } else {
        scrollPosition.current -= speed;
        // Loop when we've scrolled up past one full content height
        if (scrollPosition.current <= -singleContentHeight) {
          scrollPosition.current = 0;
        }
      }

      if (content) {
        content.style.transform = `translateY(${scrollPosition.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden h-full ${className}`}>
      <div ref={contentRef} className="will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
