import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 relative z-10">
      <h1 className="text-xl font-bold">CookieCloud Labs</h1>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#internship" className="hover:text-blue-400 transition">Internship</a>
        <Link
          href="https://code.cookiesensei.com"
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          Launch Lab
        </Link>
      </nav>
    </header>
  );
}