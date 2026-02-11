import React from 'react';
import { ScanSearch, Binary, Rocket } from 'lucide-react';
import { IconComponent } from '../types';

const Step = ({ number, title, desc, icon: Icon }: { number: string, title: string, desc: string, icon: IconComponent }) => (
  <div className="relative p-8 border-l border-slate-800 hover:border-brand-500 hover:bg-slate-900/30 transition-all group">
    <div className="flex items-center gap-4 mb-6">
      <span className="font-mono text-4xl font-bold text-slate-800 group-hover:text-brand-500/20 transition-colors select-none">
        {number}
      </span>
      <div className="h-px flex-grow bg-slate-800 group-hover:bg-brand-500/30 transition-colors" />
      <Icon className="text-slate-500 group-hover:text-brand-500 transition-colors" size={24} />
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3 font-mono uppercase">
      <span className="text-brand-500 mr-2">></span>
      {title}
    </h3>
    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
      {desc}
    </p>
  </div>
);

export const SolutionSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-brand-500 text-xs uppercase tracking-widest mb-2 block">
            // The_Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            From Chaos to <br />
            <span className="text-slate-700">Kernel Panic</span> <span className="text-white">Resolved</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-y border-slate-800">
          <Step 
            number="01"
            icon={ScanSearch}
            title="Deep_Audit"
            desc="We mount your file system. We identify bottlenecks, legacy code (habits), and resource leaks in your infrastructure."
          />
          <Step 
            number="02"
            icon={Binary}
            title="Recompile"
            desc="We write the patch. A custom configuration to align incentives, refactor workflows, and establish clear governance."
          />
          <Step 
            number="03"
            icon={Rocket}
            title="Deploy"
            desc="Production release. Implementation support and real-time monitoring to ensure the herd stays moving forward."
          />
        </div>
      </div>
    </section>
  );
};