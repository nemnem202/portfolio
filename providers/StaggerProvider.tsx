import React, { createContext, useContext } from "react";

interface SequenceContextType {
  animationDuration: number; // en ms
  staggerPercentage: number; // en pourcentage (ex: 0.5 = 50%)
}

const SequenceContext = createContext<SequenceContextType | undefined>(undefined);

export const SequenceProvider: React.FC<{
  children: React.ReactNode;
  animationDuration?: number;
  staggerPercentage?: number;
}> = ({ children, animationDuration = 500, staggerPercentage = 0.5 }) => {
  return (
    <SequenceContext.Provider value={{ animationDuration, staggerPercentage }}>
      {children}
    </SequenceContext.Provider>
  );
};

export const useSequence = () => {
  const context = useContext(SequenceContext);
  if (!context) throw new Error("useSequence doit être utilisé dans un SequenceProvider");
  return context;
};
