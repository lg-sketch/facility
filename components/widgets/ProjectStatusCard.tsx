import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { TextLogo } from '../Logo';
import { generateProjectSummary } from '../../services/geminiService';
import { Loader2, RefreshCw } from 'lucide-react';

export const ProjectStatusCard: React.FC = () => {
  const [summary, setSummary] = useState<string>("Task Completed");
  const [loading, setLoading] = useState(false);

  const completed = 68;
  const total = 89;
  const percentage = (completed / total) * 100;

  const handleUpdate = async () => {
    setLoading(true);
    const text = await generateProjectSummary(completed, total);
    setSummary(text);
    setLoading(false);
  };

  return (
    <Card variant="dark" className="h-full flex flex-col items-center text-center p-8 justify-between relative">
      <div className="absolute top-8">
        <TextLogo color="white" />
      </div>

      <div className="mt-16 w-full">
        <p className="text-blue-200 font-medium mb-2">Project Status</p>
        <h3 className="text-[64px] font-bold leading-none tracking-tight">{completed}/{total}</h3>
        <button 
            onClick={handleUpdate}
            className="text-sm text-blue-200/80 mt-2 flex items-center justify-center gap-2 mx-auto hover:text-white transition-colors"
        >
            {loading ? <Loader2 className="w-3 h-3 animate-spin"/> : <RefreshCw className="w-3 h-3"/>}
            {summary}
        </button>
      </div>

      <div className="w-full mt-8">
        <div className="h-4 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
                className="h-full bg-white rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${percentage}%` }}
            />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-sm text-blue-200">On project:</span>
        <div className="flex -space-x-2">
            {[100, 101, 102].map((id) => (
                <img 
                    key={id} 
                    src={`https://picsum.photos/id/${id}/50/50`} 
                    className="w-8 h-8 rounded-full border-2 border-[#000080]" 
                    alt="Team" 
                />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-[#000080] bg-white text-[#000080] flex items-center justify-center text-xs font-bold">
                +
            </div>
        </div>
      </div>
    </Card>
  );
};
