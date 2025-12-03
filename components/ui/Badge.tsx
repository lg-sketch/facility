import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const variants = {
    primary: "bg-[#000080] text-white shadow-md shadow-blue-900/20",
    secondary: "bg-white text-[#000080]",
    outline: "border border-gray-200 text-gray-600 bg-transparent",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    error: "bg-red-100 text-red-700"
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-4 py-1.5 text-xs"
  };

  return (
    <span className={`inline-flex items-center rounded-full font-bold uppercase tracking-wider ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};