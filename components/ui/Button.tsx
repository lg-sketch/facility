import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "rounded-full font-medium transition-all duration-200 active:scale-95 flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#000080] text-white hover:bg-opacity-90 shadow-lg shadow-blue-900/20",
    secondary: "bg-white text-[#000080] hover:bg-gray-50",
    outline: "border border-gray-200 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const paddingClass = "px-6 py-3";

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${paddingClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
