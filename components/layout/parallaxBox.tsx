export default function ParallaxBox({
  strength = 280, // Valeur par défaut ici
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { strength?: number }) {
  // 'strength' devient optionnel dans le type
  return (
    <div
      {...props}
      style={{
        transform: `translateY(calc((var(--scroll-progress, 0.5) - 0.5) * -${strength}px))`,
        willChange: "transform",
      }}
    >
      {props.children}
    </div>
  );
}
