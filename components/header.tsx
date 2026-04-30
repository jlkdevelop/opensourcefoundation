"use client";
import { useState } from "react";
import GitHubSignInButton from "./github-signin-button";

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
        <a href="/" className="flex items-center" aria-label="Open Source Foundation home">
          <img
            src="/logo.png"
            alt="Open Source Foundation"
            width={1308}
            height={401}
            className="h-12 w-auto"
          />
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

        {/* CTA — desktop */}
        <div className="hidden md:flex items-center">
          <GitHubSignInButton size="sm" />
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
          <GitHubSignInButton size="sm" fullWidth />
        </div>
      )}
    </header>
  );
}
