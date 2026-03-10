"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-10 py-4 flex justify-between items-center relative">

      {/* Logo */}
      <Link href="/">
        <h1 className="text-lg md:text-xl font-bold cursor-pointer">
          CookieSensei
        </h1>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6">

        <Link href="/about" className="hover:text-blue-400 transition">
          About
        </Link>

        <Link
          href="/enroll"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Enroll
        </Link>

        <Link
          href="https://code.cookiesensei.com"
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white"
        >
          Launch Lab
        </Link>

      </nav>

      {/* Hamburger */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-16 bg-slate-900 border border-slate-700 rounded-lg shadow-xl p-6 flex flex-col gap-4 z-50 md:hidden">

          

          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link
            href="/enroll"
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-center"
          >
            Enroll
          </Link>

          <Link
            href="https://code.cookiesensei.com"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-center"
          >
            Launch Lab
          </Link>

        </div>
      )}

    </header>
  );
}