import React from 'react';
import { Card } from '../ui/Card';
import { Menu } from 'lucide-react';

export const StatsCard: React.FC = () => {
  return (
    <Card className="h-full flex flex-col justify-between p-8">
      <div className="flex justify-between items-start">
        <h2 className="text-[64px] font-bold leading-none tracking-tighter text-[#000080]">56+</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6 text-gray-400" />
        </button>
      </div>
      
      <p className="text-gray-500 mt-2 font-medium">
        More than 50 companies joined<br/>us this month.
      </p>
      
      <div className="mt-8 relative h-24 flex items-center">
        <div className="relative">
           <img 
              src="https://picsum.photos/id/64/100/100" 
              alt="User" 
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
            <div className="absolute -top-4 left-16 bg-[#000080] text-white px-4 py-2 rounded-xl rounded-bl-none text-xs font-medium whitespace-nowrap shadow-lg animate-bounce">
                welcome to our team
            </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-[64px] font-bold leading-none tracking-tighter text-[#000080]">94%</h2>
        <p className="text-gray-500 mt-2 font-medium">
            Most of our customers come<br/>back to us repeatedly.
        </p>
      </div>
    </Card>
  );
};
