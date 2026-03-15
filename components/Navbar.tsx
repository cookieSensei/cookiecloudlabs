"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavLinks = () => (
    <>
      {!isHome && (
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
      )}

      <Link href="/about" className="hover:text-blue-400 transition">
        About
      </Link>

      <Link href="/founder" className="hover:text-blue-400 transition">
        Founder
      </Link>

      <Link href="/faq" className="hover:text-blue-400 transition">
        FAQ
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
    </>
  );

  return (
    <>
      <header className="w-full px-4 md:px-10 py-4 flex justify-between items-center sticky top-0 backdrop-blur bg-[#0b1220]/70 z-40">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-lg md:text-xl font-bold cursor-pointer">
            CookieSensei
          </h1>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-slate-700 shadow-xl transform transition-transform duration-300 z-50 md:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 mt-10">

          {!isHome && (
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-blue-400"
            >
              Home
            </Link>
          )}

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/founder"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-blue-400"
          >
            Founder
          </Link>

          <Link
            href="/faq"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-blue-400"
          >
            FAQ
          </Link>

          <Link
            href="/enroll"
            onClick={() => setMenuOpen(false)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-center"
          >
            Enroll
          </Link>

          <Link
            href="https://code.cookiesensei.com"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-center"
          >
            Launch Lab
          </Link>

        </div>
      </div>
    </>
  );
}