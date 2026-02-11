import React from 'react';
import { AlertTriangle, Workflow, Cpu } from 'lucide-react';
import { IconComponent } from '../types';

const PainPoint = ({ title, text, icon: Icon, delay }: { title: string, text: string, icon: IconComponent, delay: string }) => (
  <div className={`flex flex-col gap-6 p-8 bg-slate-900 border border-slate-800 hover:border-brand-500 hover:bg-slate-900/50 transition-all duration-300 group relative overflow-hidden ${delay}`}>
    {/* Hover highlight */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="w-12 h-12 bg-slate-950 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-brand-500 group-hover:border-brand-500 transition-colors z-10">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    
    <div className="z-10">
      <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-tight uppercase">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm border-l-2 border-slate-800 pl-4 group-hover:border-brand-500 transition-colors">
        {text}
      </p>
    </div>
  </div>
);

export const PainSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              System <span className="text-brand-500">Critical</span>
            </h2>
            <p className="text-lg text-slate-400">
              Uncoordinated movement destroys velocity. We identify the friction points in your organization's operating system.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="font-mono text-xs text-brand-500 border border-brand-500/30 px-3 py-1 rounded-sm bg-brand-500/5">
              ERR_CODE: LITTER_BOX
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <PainPoint 
            icon={AlertTriangle}
            title="Silo_Isolation"
            text="Departments operating in vacuum. We break down the firewalls and establish a unified protocol for cross-functional communication."
            delay=""
          />
          <PainPoint 
            icon={Workflow}
            title="Thread_Deadlock"
            text="Scattered workflows causing race conditions in your delivery pipeline. We serialize the chaos into a linear path to profit."
            delay="md:mt-8"
          />
          <PainPoint 
            icon={Cpu}
            title="Resource_Leak"
            text="Human capital wasted on context switching. We patch the leaks so your team operates at maximum clock speed."
            delay="md:mt-16"
          />
        </div>
      </div>
    </section>
  );
};