import React from 'react';
import { Card } from '../ui/Card';
import { TextLogo } from '../Logo';
import { ArrowRight, Mail, Layout, Hexagon } from 'lucide-react';

export const InfoCard: React.FC = () => {
  return (
    <Card className="h-full p-8 flex flex-col">
        {/* Top Image Section */}
        <div className="h-48 w-full rounded-[24px] overflow-hidden relative mb-8">
             <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                alt="Meeting" 
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="bg-white px-4 py-2 rounded-full text-xs font-bold text-[#000080] hover:bg-gray-100 transition-colors">
                    Hire Us
                </button>
                <button className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white hover:bg-white/30 transition-colors">
                    Contact Us
                </button>
            </div>
            <div className="absolute bottom-4 right-4">
                 <div className="bg-[#000080]/80 p-2 rounded-xl backdrop-blur-sm border border-white/10">
                    <Layout className="w-4 h-4 text-white" />
                 </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col justify-end">
            <div className="mb-6">
                <TextLogo />
            </div>
            
            <p className="text-lg font-medium text-gray-800 leading-snug mb-8">
                The key to <span className="text-[#000080] font-bold">Stack's</span> customers' success is in the ability to deliver unique experiences to their end customers.
            </p>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-[18px] border-2 border-[#000080] flex items-center justify-center text-[#000080]">
                        <Hexagon className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 rounded-[18px] border border-gray-200 flex items-center justify-center text-[#000080] hover:border-[#000080] transition-colors">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div className="w-12 h-12 rounded-[18px] border border-gray-200 flex items-center justify-center text-[#000080] hover:border-[#000080] transition-colors">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-[#000080] text-white flex items-center justify-center hover:bg-blue-900 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
        
         <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-gray-500">
            <a href="#" className="hover:text-[#000080]">www.stack.com</a>
        </div>
    </Card>
  );
};
