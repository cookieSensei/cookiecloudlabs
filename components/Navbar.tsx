import EnrollButton from "./EnrollButton";
import Link from "next/link";

export default function Navbar() {
return (
  <header className="flex justify-between items-center px-4 md:px-10 py-4 md:py-6 relative z-10">
    <h1 className="text-lg md:text-xl font-bold whitespace-nowrap">
      CookieCloud Labs
    </h1>

    <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
      <a href="#about" className="hover:text-blue-400 transition">
        About
      </a>
      <EnrollButton />

      <Link
        href="https://code.cookiesensei.com"
        className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 md:px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Launch Lab
      </Link>
    </nav>
  </header>
);
}