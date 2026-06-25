export function GrainOverlay({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.4"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: "url(#grain)",
          opacity,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
