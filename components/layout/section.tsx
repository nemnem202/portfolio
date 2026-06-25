import { ReactNode, useEffect, useRef } from "react";
import { Section } from "@/config/sections";
import { useTabs } from "@/providers/TabsProvider";

export default function Section({ children, id }: { children: ReactNode; id: Section }) {
  const { setDisplayedTab } = useTabs();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayedTab(id);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id, setDisplayedTab]);

  return (
    <section ref={ref} className="w-full h-screen shrink-0 flex items-end p-4" id={id}>
      {children}
    </section>
  );
}
