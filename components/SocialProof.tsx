import React from 'react';

const CorpLogo = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 opacity-30 hover:opacity-80 transition-opacity grayscale hover:grayscale-0 cursor-default">
    <div className="w-6 h-6 bg-slate-800 rounded-sm" />
    <span className="font-mono text-sm font-bold text-slate-300 tracking-wider uppercase">{label}</span>
  </div>
);

export const SocialProof: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 bg-slate-950 border-b border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 p-6 bg-slate-900/20">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest whitespace-nowrap">
             Trusted_By_Systems:
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 w-full">
            <CorpLogo label="OMEGA_CORP" />
            <CorpLogo label="CYBER_DYNE" />
            <CorpLogo label="TYRELL_IND" />
            <CorpLogo label="MASSIVE_D" />
            <CorpLogo label="ENCOM_SYS" />
          </div>
        </div>
      </div>
    </section>
  );
};