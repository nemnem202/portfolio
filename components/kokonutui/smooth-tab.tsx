"use client";

/**
 * @author: @dorianbaffier
 * @description: Smooth Tab
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { Section } from "@/config/sections";
import { cn } from "@/lib/utils";

interface TabItem {
  id: Section;
  title: string;
  description?: string;
  icon?: LucideIcon;
  content?: React.ReactNode;
  cardContent?: React.ReactNode;
  color: string;
}

const RotatingBorder = () => {
  const rectRef = React.useRef<SVGRectElement>(null);

  React.useEffect(() => {
    let x = -300;
    let raf: number;
    const animate = () => {
      x = (x + 1.4) % (400 + 300);
      if (rectRef.current) rectRef.current.setAttribute("x", String(x - 300));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible opacity-20"
      preserveAspectRatio="none"
      viewBox="0 0 400 48"
    >
      <defs>
        <linearGradient id="glossGrad" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="35%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor="rgba(255,255,255,1)" />
          <stop offset="65%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <mask id="borderMask">
          <rect
            x="0.5"
            y="0.5"
            width="399"
            height="47"
            rx="11"
            ry="11"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </mask>
      </defs>
      <rect
        x="0.5"
        y="0.5"
        width="399"
        height="47"
        rx="11"
        ry="11"
        fill="none"
        stroke="rgba(120,120,140,0.2)"
        strokeWidth="1"
      />
      <rect
        ref={rectRef}
        x="-300"
        y="0"
        width="300"
        height="48"
        fill="url(#glossGrad)"
        mask="url(#borderMask)"
      />
    </svg>
  );
};

const DEFAULT_TABS: TabItem[] = [];

interface SmoothTabProps {
  items?: TabItem[];
  displayedTab: Section;
  className?: string;
  activeColor?: string;
  onChange?: (tabId: Section) => void;
}

export default function SmoothTab({
  items = DEFAULT_TABS,
  displayedTab,
  className,
  activeColor = "bg-[#1F9CFE]",
  onChange,
}: SmoothTabProps) {
  const [selected, setSelected] = React.useState<string>(displayedTab);
  const [direction, setDirection] = React.useState(0);
  const [dimensions, setDimensions] = React.useState({ width: 0, left: 0 });

  // Reference for the selected button
  const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setSelected(displayedTab);
  }, [displayedTab]);

  // Update dimensions whenever selected tab changes or on mount
  React.useLayoutEffect(() => {
    const updateDimensions = () => {
      const selectedButton = buttonRefs.current.get(selected);
      const container = containerRef.current;

      if (selectedButton && container) {
        const rect = selectedButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setDimensions({
          width: rect.width,
          left: rect.left - containerRect.left,
        });
      }
    };

    // Initial update
    requestAnimationFrame(() => {
      updateDimensions();
    });

    // Update on resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [selected]);

  const handleTabClick = (tabId: Section) => {
    const currentIndex = items.findIndex((item) => item.id === selected);
    const newIndex = items.findIndex((item) => item.id === tabId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelected(tabId);
    onChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, tabId: Section) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTabClick(tabId);
    }
  };

  const selectedItem = items.find((item) => item.id === selected);

  return (
    <div
      aria-label="Smooth tabs"
      className={cn(
        "relative mt-auto flex items-center justify-between gap-1 py-1",
        "w-[400px]",
        "rounded-xl cursor-pointer",
        "transition-all duration-200",
        className
      )}
      ref={containerRef}
      role="tablist"
    >
      <RotatingBorder />
      <motion.div
        animate={{
          width: dimensions.width - 8,
          x: dimensions.left + 4,
          opacity: 1,
        }}
        className={cn(
          "absolute z-[1] rounded-md border border-white/30 border-1",
          selectedItem?.color || activeColor
        )}
        initial={false}
        style={{ height: "calc(100% - 8px)", top: "4px" }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 32,
        }}
      />

      <div className="relative z-[2] grid w-full grid-cols-4 gap-1">
        {items.map((item) => {
          const isSelected = selected === item.id;
          return (
            <motion.button
              aria-controls={`panel-${item.id}`}
              aria-selected={isSelected}
              className={cn(
                "relative flex items-center justify-center gap-0.5 rounded-lg px-2 py-1.5",
                "font-medium text-sm transition-all duration-300 cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "truncate ",
                isSelected ? "text-white" : "text-muted-foreground hover:text-foreground"
              )}
              id={`tab-${item.id}`}
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              ref={(el) => {
                if (el) buttonRefs.current.set(item.id, el);
                else buttonRefs.current.delete(item.id);
              }}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              type="button"
            >
              <span className="truncate">{item.title}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
