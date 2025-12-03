import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({ icon, label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">{label}</label>}
      <div className="relative group">
        {icon && (
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#000080]'}`}>
            {icon}
          </div>
        )}
        <input
          className={`
            w-full bg-white text-gray-900 rounded-2xl border-2 
            px-4 py-3 outline-none transition-all duration-200
            placeholder:text-gray-400 font-medium
            ${error 
              ? 'border-red-100 bg-red-50 focus:border-red-500 focus:shadow-[0_4px_20px_rgba(239,68,68,0.08)]' 
              : 'border-transparent focus:border-[#000080]/10 focus:bg-white focus:shadow-[0_4px_20px_rgba(0,0,128,0.08)] hover:bg-white'
            }
            ${!error && 'bg-gray-50/50'}
            ${icon ? 'pl-11' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
};