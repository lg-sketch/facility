import React from 'react';

interface LogoProps {
  color?: 'white' | 'blue';
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ color = 'blue', className = '', size = 32 }) => {
  const fill = color === 'white' ? 'white' : '#000080';
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M16 2L4 8V24L16 30L28 24V8L16 2Z" 
        stroke={fill} 
        strokeWidth="0" 
        fill={fill}
        fillOpacity="0.2"
      />
      <path 
        d="M16 8L10 11V14.5L16 17.5L22 14.5V11L16 8Z" 
        fill={fill}
      />
      <path 
        d="M16 17.5L10 20.5V24L16 27L22 24V20.5L16 17.5Z" 
        fill={fill}
      />
    </svg>
  );
};

export const TextLogo: React.FC<{ color?: 'white' | 'blue'; text?: string }> = ({ color = 'blue', text = 'Deti' }) => {
  return (
    <div className="flex items-center gap-2">
      <Logo color={color} size={28} />
      <span className={`font-bold text-xl tracking-tight ${color === 'white' ? 'text-white' : 'text-[#000080]'}`}>
        {text}
      </span>
    </div>
  );
};