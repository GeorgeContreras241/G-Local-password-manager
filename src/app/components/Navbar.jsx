"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-18"></div>;

  const isDark = resolvedTheme === "dark";

  return (
    <header className="h-18 max-w-7xl mx-auto flex items-center justify-between px-2">
      <p className="flex items-center gap-1.5">
        <BiSolidLock className="h-8 w-8 text-blue-600" />
        <Link
          href="/"
          className="font-bold lg:text-3xl text-2xl text-text-light dark:text-text-dark"
        >
          Lockora
        </Link>
      </p>

      <nav className="flex relative flex-row-reverse items-center justify-center lg:gap-8 gap-6 text-text-light dark:text-text-dark">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="bg-blue-600 p-2 rounded-md"
          aria-label="Cambiar tema"
        >
          {isDark ? (
            <FaMoon className="h-5 w-5 text-white" />
          ) : (
            <FaSun className="h-5 w-5 text-white" />
          )}
        </button>

        <div className="hidden sm:flex  gap-2 md:gap-6">
          <Link href="/passwords" className=" md:text-[.9rem] text-[.7rem] font-semibold">
            Contraseñas
          </Link>
          <Link href="/how" className=" md:text-[.9rem] text-[.7rem] font-semibold">
            Como funciona
          </Link>
        </div>
        <div className="block sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "menu-btn active flex flex-col gap-1" : "flex flex-col gap-1"}>
            <div className="menu-div w-4.5 h-0.5 bg-text-light dark:bg-text-dark"></div>
            <div className="menu-div w-4.5 h-0.5 bg-text-light dark:bg-text-dark"></div>
            <div className="menu-div w-4.5 h-0.5 bg-text-light dark:bg-text-dark"></div>
          </button>
        </div>
    <div className={`${menuOpen ? 'h-20 opacity-100' : 'h-0 opacity-0'} flex flex-col justify-center items-center gap-2 absolute top-10 right-0 bg-background-light dark:bg-[#0F172A] px-1 z-50 w-28 
    overflow-hidden transition-all duration-400 ease`}>
          <Link href="/passwords" className="p-1 bg-blue-600 rounded-md w-full text-center md:text-[.9rem] text-[.7rem] font-semibold">
            Contraseñas
          </Link>
          <Link href="/how" className="p-1 bg-blue-600 rounded-md w-full text-center md:text-[.9rem] text-[.7rem] font-semibold">
            Como funciona
          </Link>
        </div>
      </nav>
    </header>
  );
};
