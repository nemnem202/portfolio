import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Section } from "@/config/sections";

export type TabsContextContent = {
  currentTab: Section;
  setCurrentTab: Dispatch<SetStateAction<Section>>;
};

export const TabsContext = createContext<TabsContextContent | null>(null);

export default function TabsProvider({
  defaultTab,
  children,
}: {
  defaultTab: Section;
  children: ReactNode;
}) {
  const [currentTab, setCurrentTab] = useState<Section>(defaultTab);
  return (
    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>{children}</TabsContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Use tabs must be used within it's provider");
  return context;
}
