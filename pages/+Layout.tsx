import "./Layout.css";
import "./tailwind.css";
import logoUrl from "../assets/logo.svg";
import { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Layout({children}:{children:ReactNode}) {
  return <div className="flex flex-col">
    <Header/>
    <main>{children}</main>
    <Footer/>
  </div>
}