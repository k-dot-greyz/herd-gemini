import React from 'react';
import { ArrowRight, ChevronDown, Command } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToProcess = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 flex flex-col justify-center min-h-[90vh]">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05]" />
      
      {/* Radial fade for grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs font-mono mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            SYSTEM_STATUS: CHAOS_DETECTED
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            HERD THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-400 to-white">
              CATS.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            <span className="text-brand-500 font-mono text-sm mr-2">></span>
            We optimize scattered workflows into a single, high-performance engine. Stop chasing tails. Start leading the pack.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto gap-3 group">
              <Command size={18} />
              EXECUTE_AUDIT
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToProcess}
              className="w-full sm:w-auto font-mono text-xs"
            >
              VIEW_PROTOCOL
            </Button>
          </div>
        </div>
      </div>

      {/* Tech Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce text-slate-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};