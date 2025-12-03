import React from 'react';

interface AvatarProps {
  src?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  bordered?: boolean;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  initials = 'ST', 
  size = 'md', 
  bordered = false,
  className = '' 
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-xl"
  };

  const borderClass = bordered ? 'border-4 border-white shadow-sm' : '';

  return (
    <div className={`relative rounded-full overflow-hidden flex items-center justify-center bg-[#000080] text-white font-bold ${sizeClasses[size]} ${borderClass} ${className}`}>
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};