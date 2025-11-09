"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize theme and client state
  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === null) {
      // Default to dark mode as per user preference
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Shared Menu Component
  const MenuList = ({ isMobile = false, onLinkClick }: { isMobile?: boolean; onLinkClick?: () => void }) => (
    <nav className={`${isMobile ? "flex flex-col space-y-3" : "flex items-center space-x-8"}`}>
      {navLinks.map((link) => (
        <div 
          key={link.name} 
          className="relative" 
        >
          <Link
            href={link.href}
            className={`font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group ${
              isMobile ? "block text-center py-3 text-xl" : ""
            }`}
            onClick={onLinkClick}
          >
            {link.name}
            {/* Underline animation for regular links */}
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      ))}
    </nav>
  );

  // Render nothing on the server for theme toggle to prevent layout shift
  if (!isClient) {
    return (
      <header className="w-full fixed top-0 left-0 z-50 bg-gray-900 dark:bg-gray-900 backdrop-blur-md border-b border-gray-800 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <img
                src="/logo.png"
                alt="Kynex.dev Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="font-quador logo-text tracking-tight text-3xl" style={{ fontFamily: '"quador", Arial, sans-serif' }}>
              <span className="text-white">KYNEX</span>
              <span className="text-gray-400">.dev</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <MenuList />
          </div>

          {/* Theme toggle placeholder and Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-lg bg-gray-800" aria-hidden="true" />
            {/* Custom animated hamburger toggle */}
            <button
              className="md:hidden p-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-12 h-12 flex flex-col justify-center items-center">
                <span className={`block w-6 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-1 bg-white rounded-full mt-1 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-1 bg-white rounded-full mt-1 transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 bg-transparent backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div 
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl mx-4 my-4 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <MenuList isMobile onLinkClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-900 dark:bg-gray-900 backdrop-blur-md border-b border-gray-800 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <img
              src="/logo.png"
              alt="Kynex.dev Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="font-quador logo-text tracking-tight text-3xl" style={{ fontFamily: '"quador", Arial, sans-serif' }}>
            <span className="text-white">KYNEX</span>
            <span className="text-gray-400">.dev</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <MenuList />
        </div>

        {/* Theme Toggle and Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform transition-transform relative"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              {darkMode ? (
                <Sun className="w-5 h-5 absolute inset-0 transition-all duration-300 transform rotate-0 scale-100 opacity-100" />
              ) : (
                <Sun className="w-5 h-5 absolute inset-0 transition-all duration-300 transform rotate-90 scale-0 opacity-0" />
              )}
              {darkMode ? (
                <Moon className="w-5 h-5 absolute inset-0 transition-all duration-300 transform rotate-90 scale-0 opacity-0" />
              ) : (
                <Moon className="w-5 h-5 absolute inset-0 transition-all duration-300 transform rotate-0 scale-100 opacity-100" />
              )}
            </div>
          </button>

          {/* Custom animated hamburger toggle */}
          <button
            className="md:hidden p-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-12 h-12 flex flex-col justify-center items-center">
              <span className={`block w-6 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-1 bg-white rounded-full mt-1 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-1 bg-white rounded-full mt-1 transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-transparent backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl mx-4 my-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <MenuList isMobile onLinkClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}