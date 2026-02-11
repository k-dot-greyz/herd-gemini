import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  // Industrial feel: rounded-sm instead of rounded-lg
  const baseStyles = "inline-flex items-center justify-center font-mono font-bold tracking-tight transition-all duration-150 active:scale-[0.98] focus:outline-none rounded-sm border uppercase";
  
  const variants = {
    // Primary: Brand amber, slate text (high contrast), sharp borders
    primary: "bg-brand-500 border-brand-500 text-slate-950 hover:bg-brand-400 hover:border-brand-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    // Secondary: Slate surface, white text
    secondary: "bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600",
    // Outline: Transparent, visible border
    outline: "bg-transparent border-slate-700 text-brand-500 hover:border-brand-500 hover:bg-brand-500/10",
    // Ghost: Minimal
    ghost: "bg-transparent border-transparent text-slate-400 hover:text-brand-500 hover:bg-slate-900",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};