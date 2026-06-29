import Navbar from "../molecules/navbar";

export default function Header() {
  return (
    <header className="fixed top-0 w-screen p-3 md:h-16 h-20 z-10 flex justify-center md:justify-end">
      <Navbar />
    </header>
  );
}
