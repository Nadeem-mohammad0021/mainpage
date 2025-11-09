'use client';

import { useState, useEffect, ReactNode } from 'react';
import Header from './layout/header';
import { Analytics } from "@vercel/analytics/next";


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode as per user preference

  useEffect(() => {
    // Check system preference and localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Default to dark mode as per user preference
    const shouldUseDarkMode = savedTheme 
      ? savedTheme === 'dark' 
      : true; // Default to true (dark mode) if no saved theme
    
    setDarkMode(shouldUseDarkMode);
    
    // Apply the theme to the document
    if (shouldUseDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        {children}
        <Analytics />
      </div>
    </div>
  );
}