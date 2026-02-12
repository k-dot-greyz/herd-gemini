import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  tag?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  description,
  tag,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {tag && (
        <span className="font-mono text-brand-500 text-xs uppercase tracking-widest mb-3 block animate-in fade-in slide-in-from-bottom-4">
          // {tag}
        </span>
      )}
      
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight animate-in fade-in slide-in-from-bottom-6 delay-100">
        {title} <br className="hidden md:block" />
        {highlight && <span className="text-brand-500">{highlight}</span>}
      </h2>
      
      {description && (
        <p className={`text-lg text-slate-400 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 delay-200 ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};