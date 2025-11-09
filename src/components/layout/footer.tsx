'use client';

import { Mail, MapPin, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Product', href: '/product' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/kynex-dev', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kynex.dev', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 cursor-pointer">
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
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building the future of intelligent software through AI-powered innovation and adaptive systems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(social.href, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label={social.label}
                  className="group inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer relative z-10"
                  type="button"
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center group">
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:contact@kynex.dev">contact@kynex.dev</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>Remote — Operating globally</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-gray-400 text-m text-center">
              © {new Date().getFullYear()} Kynex.dev. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;