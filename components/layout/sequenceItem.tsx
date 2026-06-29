import { useEffect, useState } from "react";
import { useSequence } from "@/providers/StaggerProvider";

export const SequenceItem: React.FC<{
  index: number;
  children: React.ReactNode;
  className?: string;
}> = ({ index, children, className = "" }) => {
  const { animationDuration, staggerPercentage, isVisible: providerVisible } = useSequence();
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Si le provider dit que la section est visible
    if (providerVisible) {
      // 1. On monte le composant immédiatement
      setIsMounted(true);

      // 2. On attend un cycle de rendu (10ms) pour que React injecte le DOM
      // puis on lance l'animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [providerVisible]);

  if (!isMounted) return null;

  const delay = index * (animationDuration * staggerPercentage);

  return (
    <div
      className={`${className} transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}
      style={{
        transitionDuration: `${animationDuration}ms`,
        transitionDelay: `${isAnimating ? delay : 0}ms`,
      }}
    >
      {children}
    </div>
  );
};
