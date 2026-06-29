import { ReactNode, useEffect, useRef } from "react";
import { Section } from "@/config/sections";
import { SequenceProvider } from "@/providers/StaggerProvider";
import { useTabs } from "@/providers/TabsProvider";
import ParallaxBox from "./parallaxBox";

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

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalDistance = windowHeight + rect.height;
        const progress = (windowHeight - rect.top) / totalDistance;
        el.style.setProperty("--scroll-progress", progress.toString());
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id, setDisplayedTab]);

  return (
    <section
      ref={ref}
      className="w-full h-screen shrink-0 flex-col flex justify-end p-4 pt-15"
      id={id}
    >
      {children}
    </section>
  );
}

export function SectionContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ParallaxBox className={`h-full w-full p-15 lg:pl-25 min-h-0 ${className}`}>
      <SequenceProvider>{children}</SequenceProvider>
    </ParallaxBox>
  );
}
