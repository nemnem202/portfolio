// components/SequenceItem.tsx
import React, { useEffect, useState } from "react";
import { useSequence } from "@/providers/StaggerProvider";

export const SequenceItem: React.FC<{
  index: number;
  children: React.ReactNode;
  className?: string;
}> = ({ index, children, className = "" }) => {
  const { animationDuration, staggerPercentage, isVisible } = useSequence();

  const delay = index * (animationDuration * staggerPercentage);

  return (
    <div
      className={`${className} transition-all  ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        transitionDuration: `${animationDuration}ms`,
        // filter: isVisible ? "blur(0px)" : "blur(10px)",
        // transform: isVisible ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export const LazyMountSequenceItem: React.FC<{
  index: number;
  children: React.ReactNode;
  className?: string;
}> = ({ index, children, className = "" }) => {
  const { animationDuration, staggerPercentage, isVisible } = useSequence();
  const [startAnimation, setStartAnimation] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const delay = index * (animationDuration * staggerPercentage);

  useEffect(() => {
    if (!isVisible) return;
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setStartAnimation(true));
      });
    }, delay);

    return () => clearTimeout(mountTimer);
  }, [isVisible, delay]);

  if (!isVisible) {
    return <div className={className} />;
  }

  return <div className={className}>{isMounted ? children : null}</div>;
};
