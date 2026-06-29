import React from "react";
import { useSequence } from "@/providers/StaggerProvider";

interface Props {
  index: number;
  children: React.ReactNode;
  className?: string;
}

export const SequenceItem: React.FC<Props> = ({ index, children, className = "" }) => {
  const { animationDuration, staggerPercentage } = useSequence();

  // Calcul du délai : peut être négatif si staggerPercentage est négatif
  const delay = index * (animationDuration * staggerPercentage);

  return (
    <div
      className={`opacity-0 transition-opacity ease-in-out ${className}`}
      style={{
        transitionDuration: `${animationDuration}ms`,
        transitionDelay: `${delay}ms`,
        animationFillMode: "forwards",
        animation: `fadeIn ${animationDuration}ms ease-in-out ${delay}ms forwards`,
      }}
    >
      {children}
    </div>
  );
};
