import { useTabs } from "@/providers/TabsProvider";
import SmoothTab from "../kokonutui/smooth-tab";

export default function Navbar() {
  const { currentTab, setCurrentTab } = useTabs();
  return (
    <SmoothTab
      items={[
        {
          id: "presentation",
          title: "Me",
          color: "bg-gradient-to-r from-primary/80 to-primary/65",
        },
        {
          id: "projects",
          title: "Projects",
          color: "bg-gradient-to-r from-primary/65 to-primary/50",
        },
        {
          id: "skills",
          title: "Skills",
          color: "bg-gradient-to-r from-primary/50 to-secondary/50",
        },
        {
          id: "contacts",
          title: "Contact",
          color: "bg-gradient-to-r from-secondary/50 to-secondary",
        },
      ]}
      className="bg-transparent"
      activeColor="bg-primary"
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
    />
  );
}
