'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/constants';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('home');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        isMobile ? 'top-4 right-4' : 'bottom-8 left-1/2 -translate-x-1/2'
      } ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-32 pointer-events-none'
      }`}
    >
      {/* Mobile Hamburger Menu */}
      {isMobile ? (
        <div className="relative">
          {/* Hamburger Button with enhanced animation */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-14 h-14 flex flex-col justify-center items-center gap-1.5 relative z-50 group bg-gradient-to-br from-purple-600/30 to-cyan-600/30 backdrop-blur-lg border border-purple-500/40 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-500 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2 scale-110' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-500 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-500 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2 scale-110' : ''
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu Dropdown with enhanced animation */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          )}
          
          {mobileMenuOpen && (
            <div className="absolute top-20 right-0 w-64 backdrop-blur-2xl bg-gradient-to-b from-slate-900/98 via-slate-900/95 to-slate-900/90 border border-purple-500/40 rounded-2xl shadow-2xl shadow-purple-900/50 animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
              <div className="p-4 space-y-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeLink === link.href.replace('#', '');
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 capitalize transform hover:scale-105 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/40'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                      style={{
                        animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${idx * 0.05}s both` : 'none',
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <style>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateX(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>
            </div>
          )}
        </div>
      ) : (
        /* Desktop Navigation */
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />

          <div className="backdrop-blur-2xl bg-gradient-to-b from-slate-900/40 to-slate-900/20 border border-purple-500/20 rounded-full px-2 py-3 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 rounded-full animate-pulse" />

            <div className="relative flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap justify-center">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href.replace('#', '');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-2 sm:px-3 md:px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-1 sm:gap-2 group overflow-hidden whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/50'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-full" />

                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-white scale-100'
                        : 'bg-slate-500 scale-75 group-hover:scale-100 group-hover:bg-purple-400'
                    }`} />

                    <span className="relative overflow-hidden">
                      <span className="block capitalize">{link.name}</span>
                    </span>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 animate-shimmer" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </nav>
  );
}
