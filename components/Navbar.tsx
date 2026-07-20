"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const linkClass = (path: string) =>
    `transition hover:text-blue-400 ${
      pathname === path ? "text-blue-400 font-semibold" : ""
    }`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    closeMenu();
  };

  const NavLinks = () => (
    <>
      {!isHome && (
        <Link href="/" scroll className="hover:text-blue-400 transition">
          Home
        </Link>
      )}

      <Link href="/about" scroll className={linkClass("/about")}>
        About
      </Link>

      <Link href="/approach" scroll className={linkClass("/approach")}>
        Our Approach
      </Link>

      <Link href="/curriculum" scroll className={linkClass("/curriculum")}>
        Curriculum
      </Link>

      <Link href="/workshops" scroll className={linkClass("/workshops")}>
        Workshops
      </Link>

      <Link href="/internship" scroll className={linkClass("/internship")}>
        Internship
      </Link>

      <Link href="/contact" scroll className={linkClass("/contact")}>
        Contact
      </Link>

      <Link href="/faq" scroll className={linkClass("/faq")}>
        FAQ
      </Link>

      <Link
        href="https://code.cookiesensei.com"
        className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-white"
      >
        Launch Lab
      </Link>
    </>
  );

  return (
    <>
      <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-[#0b1220]/70 px-4 py-4 backdrop-blur md:px-10">
        <Link href="/" scroll onClick={handleLogoClick}>
          <h1 className="cursor-pointer text-lg font-bold transition hover:text-blue-400 md:text-xl">
            CookieSensei
          </h1>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <button
          className="z-50 text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        ref={menuRef}
        className={`fixed left-0 top-0 z-50 h-full w-64 transform border-r border-slate-700 bg-slate-900 shadow-xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-10 flex flex-col gap-6 p-6">
          <Link
            href="/"
            scroll
            onClick={handleLogoClick}
            className="text-lg font-bold transition hover:text-blue-400"
          >
            CookieSensei
          </Link>

          {!isHome && (
            <Link
              href="/"
              scroll
              onClick={closeMenu}
              className={`text-lg ${linkClass("/")}`}
            >
              Home
            </Link>
          )}

          <Link
            href="/about"
            scroll
            onClick={closeMenu}
            className={`text-lg ${linkClass("/about")}`}
          >
            About
          </Link>

          <Link
            href="/approach"
            scroll
            onClick={closeMenu}
            className={`text-lg ${linkClass("/approach")}`}
          >
            Our Approach
          </Link>

          <Link
            href="/curriculum"
            scroll
            onClick={closeMenu}
            className={`text-lg ${linkClass("/curriculum")}`}
          >
            Curriculum
          </Link>

          <Link
            href="/workshops"
            scroll
            onClick={closeMenu}
            className={`text-lg ${linkClass("/workshops")}`}
          >
            Workshops
          </Link>

          <Link
            href="/internship"
            scroll
            onClick={closeMenu}
            className={`text-lg ${linkClass("/internship")}`}
          >
            Internships
          </Link>

          <Link
            href="/contact"
            scroll
            onClick={closeMenu}
            className={`text-lg ${linkClass("/contact")}`}
          >
            Contact
          </Link>


          <Link
            href="/faq"
            scroll
            onClick={closeMenu}
            className={`text-lg ${linkClass("/faq")}`}
          >
            FAQ
          </Link>

          <Link
            href="https://code.cookiesensei.com"
            onClick={closeMenu}
            className="w-fit rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 text-white"
          >
            Launch Lab
          </Link>
        </div>
      </div>
    </>
  );
}