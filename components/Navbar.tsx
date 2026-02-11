import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: '_process', href: '#process' },
  { label: '_services', href: '#services' },
  { label: '_data', href: '#testimonials' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center justify-center w-10 h-10 bg-slate-900 border border-slate-700 text-brand-500 rounded-sm group-hover:border-brand-500 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.3)] transition-all">
              <Terminal size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              HCC<span className="text-brand-500 animate-pulse">_</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-xs font-mono font-medium text-slate-400 hover:text-brand-500 transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" onClick={() => scrollToSection('#contact')}>
              INIT_AUDIT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-brand-500 transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-sm font-mono font-medium text-slate-300 hover:text-brand-500 py-2 border-b border-slate-900 last:border-0 uppercase"
            >
              {item.label}
            </a>
          ))}
          <Button fullWidth onClick={() => scrollToSection('#contact')}>
            INIT_AUDIT
          </Button>
        </div>
      )}
    </header>
  );
};