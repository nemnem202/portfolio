import { ReactLenis, useLenis } from "lenis/react";
import Snap from "lenis/snap";
import { useEffect, useRef } from "react";
import { useTabs } from "@/providers/TabsProvider";

function SnapSetup() {
  const lenis = useLenis();
  const { currentTab } = useTabs();

  useEffect(() => {
    if (!lenis) return;
    const snap = new Snap(lenis, {
      type: "mandatory",
      duration: 1.0,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      debounce: 0,
    });
    snap.addElements(document.querySelectorAll("section") as any, { align: ["start"] });
    return () => snap.destroy();
  }, [lenis]);

  useEffect(() => {
    const element = document.getElementById(currentTab);
    if (!element) return;

    lenis?.scrollTo(element);
  }, [currentTab]);

  return null;
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 4,
        touchMultiplier: 0.8,
      }}
    >
      <SnapSetup />
      {children}
    </ReactLenis>
  );
}
