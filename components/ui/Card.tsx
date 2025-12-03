import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'image';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'light', onClick }) => {
  const baseClasses = "rounded-[32px] overflow-hidden relative transition-all duration-300";
  
  let variantClasses = "bg-white text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
  
  if (variant === 'dark') {
    variantClasses = "bg-[#000080] text-white shadow-[0_8px_30px_rgb(0,0,128,0.2)]";
  } else if (variant === 'image') {
    variantClasses = "text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]";
  }

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
