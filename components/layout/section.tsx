import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <section className="w-full h-screen pt-15 shrink-0">{children}</section>;
}
