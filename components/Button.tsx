import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0c0a09] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg tracking-wide";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-orange-600 shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)] border border-transparent",
    secondary: "bg-surface text-text hover:bg-[#292524] border border-[#44403c]",
    outline: "bg-transparent border border-[#44403c] text-muted hover:text-text hover:border-[#78716c]",
    ghost: "bg-transparent text-muted hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};