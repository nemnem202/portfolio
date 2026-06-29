import { GrainOverlay } from "./grain-texture";

export default function Background() {
  return (
    <div className="absolute inset-0 h-[102%] overflow-hidden -z-10">
      <div className="absolute inset-0 bg-linear-[25deg,var(--primary)_0%,var(--background)_15%,var(--background)_80%,var(--secondary)_100%]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_15%_at_50%_50%,var(--accent)_0%,transparent_70%)] opacity-40" />
      <GrainOverlay opacity={0.8} />
    </div>
  );
}
