import { ReactLenis, useLenis } from "lenis/react";
import Snap from "lenis/snap";
import { useEffect, useRef } from "react";

function SnapSetup() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const snap = new Snap(lenis, {
      type: "mandatory",
      duration: 3,
      easing: (t) => 1 - Math.pow(1 - t, 10),
    });

    snap.addElements(document.querySelectorAll("section") as any, {
      align: ["start"],
    });

    return () => snap.destroy();
  }, [lenis]);

  return null;
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      <SnapSetup />
      {children}
    </ReactLenis>
  );
}
