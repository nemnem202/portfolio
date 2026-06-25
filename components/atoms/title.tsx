import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-7xl bold">{children}</h1>;
}
