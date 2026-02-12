import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Home, Shield } from 'lucide-react';
import { Button } from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: '_process', href: '#process' },
  { label: '_services', href: '#services' },
  { label: '_data', href: '#testimonials' },
];

interface NavbarProps {
  currentView: 'home' | 'specs' | 'admin';
  onNavigate: (view: 'home' | 'specs' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
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

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      // Allow time for render before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
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
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className={`flex items-center justify-center w-10 h-10 bg-slate-900 border text-brand-500 rounded-sm transition-all ${
                currentView === 'admin' 
                ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)] text-red-500' 
                : 'border-slate-700 group-hover:border-brand-500 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.3)]'
            }`}>
              {currentView === 'admin' ? <Shield size={20} strokeWidth={2.5} /> : <Terminal size={20} strokeWidth={2.5} />}
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              HCC<span className={`animate-pulse ${currentView === 'admin' ? 'text-red-500' : 'text-brand-500'}`}>_</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Standard Nav Items - Only show if on home or if we want them to redirect to home */}
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-xs font-mono font-medium transition-colors uppercase tracking-wider ${
                    currentView === 'home' ? 'text-slate-400 hover:text-brand-500' : 'text-slate-600 hover:text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* View Switcher Link */}
            <div className="h-4 w-px bg-slate-800 mx-2" />
            
            <button
                onClick={() => onNavigate(currentView === 'home' ? 'specs' : 'home')}
                className={`flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors px-3 py-1.5 rounded-sm border ${
                    currentView === 'specs' 
                    ? 'text-brand-500 bg-brand-500/10 border-brand-500/30' 
                    : 'text-slate-400 border-transparent hover:bg-slate-800'
                }`}
            >
                {currentView === 'home' ? <FileText size={14} /> : <Home size={14} />}
                {currentView === 'home' ? '_SYS_SPECS' : '_RETURN_HOME'}
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            {currentView === 'home' ? (
                <Button size="sm" onClick={() => handleNavClick('#contact')}>
                INIT_AUDIT
                </Button>
            ) : (
                <div className={`text-xs font-mono ${currentView === 'admin' ? 'text-red-500' : 'text-slate-500'}`}>
                    {currentView === 'admin' ? 'RESTRICTED_ACCESS' : 'READ_ONLY_MODE'}
                </div>
            )}
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
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-sm font-mono font-medium text-slate-300 hover:text-brand-500 py-2 border-b border-slate-900 last:border-0 uppercase"
            >
              {item.label}
            </button>
          ))}
          
          <button
             onClick={() => {
                 setIsOpen(false);
                 onNavigate(currentView === 'home' ? 'specs' : 'home');
             }}
             className="text-left text-sm font-mono font-bold text-brand-500 py-2 border-b border-slate-900 uppercase flex items-center gap-2"
          >
              {currentView === 'home' ? <><FileText size={16} /> _VIEW_SPECS</> : <><Home size={16} /> _RETURN_HOME</>}
          </button>

          {currentView === 'home' && (
            <Button fullWidth onClick={() => handleNavClick('#contact')}>
                INIT_AUDIT
            </Button>
          )}
        </div>
      )}
    </header>
  );
};