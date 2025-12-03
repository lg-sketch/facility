import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => onChange(!checked)}>
      <div
        className={`w-12 h-7 rounded-full transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative ${
          checked ? 'bg-[#000080]' : 'bg-gray-200'
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-sm absolute top-1 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    </div>
  );
};