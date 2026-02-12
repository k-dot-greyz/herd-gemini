import React from 'react';
import { Check, XCircle } from 'lucide-react';

interface TerminalInputProps {
  label: string;
  error?: any;
  isDirty?: boolean;
  isTouched?: boolean;
  children: React.ReactNode;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({ 
  label, 
  error, 
  isDirty, 
  isTouched,
  children 
}) => (
  <div className="space-y-2 w-full">
    <div className="flex justify-between items-end">
      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest ml-1">
        {label}
      </label>
      {error && (
          <span className="text-red-500 text-[10px] font-mono uppercase flex items-center gap-1 animate-in slide-in-from-right-2">
              //! {error.message}
          </span>
      )}
    </div>
    <div className={`
      group flex items-start bg-slate-950 border-b-2 transition-all duration-200 relative overflow-hidden
      ${error 
          ? 'border-red-500/50 bg-red-500/5' 
          : 'border-slate-800 focus-within:border-brand-500 focus-within:bg-brand-500/5 hover:border-slate-700'}
    `}>
      {/* Status Bar on left */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-colors ${
          error ? 'bg-red-500' : (isDirty ? 'bg-brand-500' : 'bg-transparent')
      }`} />

      <span className={`pl-4 pr-3 py-3 font-mono text-sm select-none transition-colors ${
          error ? 'text-red-500' : 'text-slate-600 group-focus-within:text-brand-500'
      }`}>
          {'>'}
      </span>
      
      {/* The actual input element is passed as a child for maximum flexibility */}
      <div className="flex-grow">
        {children}
      </div>

      <div className="pr-4 py-3 flex items-center h-full min-w-[32px] justify-end">
          {error && <XCircle size={16} className="text-red-500 animate-in zoom-in duration-200" />}
          {/* Only show success checkmark if touched (validated) and dirty (modified) and no error */}
          {!error && isDirty && isTouched && <Check size={16} className="text-brand-500 animate-in zoom-in duration-200" />}
      </div>
    </div>
  </div>
);