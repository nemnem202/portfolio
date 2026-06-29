// providers/StaggerProvider.tsx
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface SequenceContextType {
  animationDuration: number;
  staggerPercentage: number;
  isVisible: boolean; // État partagé pour lancer l'animation
}

const SequenceContext = createContext<SequenceContextType | undefined>(undefined);

export const SequenceProvider: React.FC<{
  children: React.ReactNode;
  animationDuration?: number;
  staggerPercentage?: number;
  triggerOnVisibility?: boolean;
  className: string;
}> = ({
  children,
  animationDuration = 500,
  staggerPercentage = 0.5,
  triggerOnVisibility = true,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnVisibility) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [triggerOnVisibility]);

  return (
    <SequenceContext.Provider value={{ animationDuration, staggerPercentage, isVisible }}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </SequenceContext.Provider>
  );
};
export const useSequence = () => {
  const context = useContext(SequenceContext);
  if (!context) throw new Error("useSequence doit être dans un SequenceProvider");
  return context;
};
