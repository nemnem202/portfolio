import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-[15rem]/[9rem] title bold opacity-10 hidden md:block">{children}</h1>;
}
