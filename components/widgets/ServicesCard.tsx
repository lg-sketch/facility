import React from 'react';
import { Card } from '../ui/Card';
import { MoreHorizontal } from 'lucide-react';

export const ServicesCard: React.FC = () => {
  return (
    <Card variant="image" className="h-[400px] p-0 group cursor-pointer">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop" 
            alt="Services" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/90 via-[#000080]/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
                <div className="bg-[#000080] p-1.5 rounded-lg">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                </div>
                <span className="font-semibold text-sm">@stack</span>
            </div>
            <MoreHorizontal className="w-5 h-5 text-white/80" />
        </div>

        <div>
            <h3 className="text-4xl font-bold mb-6 text-white">Our Services</h3>
            <div className="flex gap-2 flex-wrap">
                {['SAAS', 'Web', 'Mobile'].map((tag) => (
                    <span key={tag} className="px-5 py-2 rounded-full bg-white/90 text-[#000080] text-sm font-bold backdrop-blur-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </Card>
  );
};
