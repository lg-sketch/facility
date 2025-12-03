import React, { useState } from 'react';
import { ArrowLeft, Bell, MoreVertical, Heart, MessageCircle, Send, Bookmark, Grid, User } from 'lucide-react';
import { TextLogo, Logo } from '../Logo';
import { Button } from '../ui/Button';
import { generateBio } from '../../services/geminiService';

export const ProfileView: React.FC = () => {
    const [bio, setBio] = useState("We are a custom software development company. For 11 years, we've been creating impactful custom-built software. #westack");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateBio = async () => {
        setIsGenerating(true);
        const newBio = await generateBio(bio);
        setBio(newBio);
        setIsGenerating(false);
    };

  return (
    <div className="bg-black p-3 rounded-[40px] shadow-2xl mx-auto h-[800px] w-[375px] border-8 border-gray-900 overflow-hidden relative">
      {/* Mobile Screen Content */}
      <div className="bg-white rounded-[32px] h-full overflow-hidden flex flex-col w-full relative">
        
        {/* Status Bar Mock */}
        <div className="h-12 flex justify-between items-center px-6 pt-2">
            <span className="text-sm font-bold">9:41</span>
            <div className="flex gap-1">
                <div className="w-4 h-4 bg-gray-900 rounded-full opacity-20"/>
                <div className="w-4 h-4 bg-gray-900 rounded-full opacity-20"/>
                <div className="w-4 h-4 bg-gray-900 rounded-full"/>
            </div>
        </div>

        {/* App Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-50">
            <div className="flex items-center gap-4">
                <ArrowLeft className="w-6 h-6 text-gray-900" />
                <span className="font-bold text-lg">stack</span>
            </div>
            <div className="flex items-center gap-4">
                <Bell className="w-6 h-6 text-gray-900" />
                <MoreVertical className="w-6 h-6 text-gray-900" />
            </div>
        </div>

        {/* Profile Info */}
        <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-4">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center border-2 border-gray-100">
                        <Logo size={48} />
                    </div>
                </div>
                <div className="flex gap-8 px-4 text-center">
                    <div>
                        <div className="font-bold text-lg">199</div>
                        <div className="text-xs text-gray-500">Posts</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">3,990</div>
                        <div className="text-xs text-gray-500">Followers</div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">89</div>
                        <div className="text-xs text-gray-500">Following</div>
                    </div>
                </div>
            </div>

            <div className="space-y-1 mb-4">
                <h2 className="font-bold text-sm">Stack | Software Development</h2>
                <p className="text-sm text-gray-600 leading-relaxed cursor-pointer hover:bg-blue-50 p-1 rounded transition-colors" onClick={handleGenerateBio} title="Click to rewrite with AI">
                    {isGenerating ? <span className="animate-pulse">Writing creative bio...</span> : bio}
                </p>
                <a href="#" className="text-[#000080] text-sm font-medium block">www.stack.com</a>
            </div>

            <div className="flex gap-2">
                <Button variant="primary" className="flex-1 py-2 text-sm">Follow</Button>
                <Button variant="secondary" className="flex-1 py-2 text-sm bg-gray-100 text-gray-900">Message</Button>
                <Button variant="secondary" className="py-2 text-sm bg-gray-100 text-gray-900">Email</Button>
                <Button variant="secondary" className="px-2 py-2 text-sm bg-gray-100 text-gray-900">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </Button>
            </div>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-gray-100 mt-2">
            <div className="flex-1 flex justify-center py-3 border-b-2 border-gray-900">
                <Grid className="w-6 h-6 text-gray-900" />
            </div>
            <div className="flex-1 flex justify-center py-3 text-gray-400">
                 <User className="w-6 h-6" />
            </div>
        </div>

        {/* Photo Grid */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
            <div className="grid grid-cols-3 gap-0.5">
                {[1,2,3,4,5,6,7,8,9].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 relative group overflow-hidden">
                        <img 
                            src={`https://picsum.photos/id/${i + 50}/200/200`} 
                            className="w-full h-full object-cover" 
                            alt="Post"
                        />
                        {i === 1 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <div className="text-white text-xs font-bold p-2 text-center">
                                    <Logo color="white" size={20} className="mx-auto mb-1" />
                                    stack
                                    <div className="font-normal text-[10px] mt-1">Our Mission</div>
                                </div>
                            </div>
                        )}
                        {i === 2 && (
                             <div className="absolute bottom-2 right-2">
                                <div className="bg-white/20 backdrop-blur-md rounded p-1">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                                </div>
                             </div>
                        )}
                         {i === 3 && (
                             <div className="absolute inset-0 bg-[#000080]/80 flex flex-col items-center justify-center p-2 text-white text-center">
                                <div className="text-xs font-bold">Meeting your needs</div>
                             </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        
        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 h-16 flex items-center justify-around px-6">
             <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
                <Logo color="white" size={16} />
             </div>
             <Heart className="w-6 h-6 text-gray-400" />
             <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000080" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
             </div>
             <MessageCircle className="w-6 h-6 text-gray-400" />
             <User className="w-6 h-6 text-gray-400" />
        </div>

      </div>
    </div>
  );
};
