import React from 'react';
import { Terminal, Github, Twitter, Linkedin, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'specs' | 'admin') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-brand-500" size={24} />
              <span className="text-lg font-bold text-white font-mono tracking-tighter">
                HCC<span className="text-slate-600">_CONSULTING</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs font-mono">
              Bringing order to entropy since 2024.
              <br/>
              Status: <span className="text-green-500">ONLINE</span>
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 rounded-sm transition-all" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 rounded-sm transition-all" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 rounded-sm transition-all" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600 uppercase">
          <p>&copy; {new Date().getFullYear()} Herding Cats Consulting.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-500 transition-colors">Privacy_Protocol</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Terms_of_Service</a>
            {/* Secret Admin Link */}
            {onNavigate && (
               <button 
                onClick={() => onNavigate('admin')}
                className="text-slate-800 hover:text-brand-500 transition-colors ml-4 focus:outline-none"
                aria-label="Admin Access"
               >
                 <Lock size={12} />
               </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};