"use client";
import { useState } from "react";

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "For Maintainers", href: "#maintainers" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Wordmark */}
        <a href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-[#1A1A1A]">
          <span className="bg-[#99FCA5] text-black rounded px-1.5 py-0.5 text-sm font-black">OSF</span>
          Open Source Foundation
        </a>

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#signin"
            className="text-sm font-semibold text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
          >
            Sign in with GitHub
          </a>
          <a
            href="#submit"
            className="flex items-center gap-1.5 bg-[#99FCA5] text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-[#5DFB84] transition-colors"
          >
            Submit Project <span aria-hidden>→</span>
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-0.5 bg-[#1A1A1A] mb-1" />
          <span className="block w-5 h-0.5 bg-[#1A1A1A] mb-1" />
          <span className="block w-5 h-0.5 bg-[#1A1A1A]" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-t border-black/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1A1A1A]/80"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signin"
            className="text-sm font-semibold text-[#1A1A1A]/70"
          >
            Sign in with GitHub
          </a>
          <a
            href="#submit"
            className="flex items-center justify-center gap-1.5 bg-[#99FCA5] text-black text-sm font-bold px-4 py-2 rounded-full"
          >
            Submit Project →
          </a>
        </div>
      )}
    </header>
  );
}
