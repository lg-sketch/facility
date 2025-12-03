import React, { useState } from 'react';
import { TextLogo, Logo } from './Logo';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { Toggle } from './ui/Toggle';
import { Avatar } from './ui/Avatar';
import { Search, Mail, Lock, CheckCircle, AlertCircle, ArrowRight, Star, Heart } from 'lucide-react';

// Import existing widgets for the "Organisms" section
import { StatsCard } from './widgets/StatsCard';
import { ProjectStatusCard } from './widgets/ProjectStatusCard';
import { ServicesCard } from './widgets/ServicesCard';
import { InfoCard } from './widgets/InfoCard';
import { BrandCard } from './widgets/BrandCard';

export const DesignSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'foundations' | 'components' | 'widgets'>('foundations');
  const [toggleState, setToggleState] = useState(true);

  return (
    <div className="min-h-screen bg-[#EEF2FF] pb-24 font-sans text-gray-900">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TextLogo />
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-mono text-gray-500">v1.0.0</span>
          </div>
          <nav className="flex gap-1 bg-gray-100 p-1 rounded-full">
            {[
              { id: 'foundations', label: 'Foundations' },
              { id: 'components', label: 'Components' },
              { id: 'widgets', label: 'Widgets' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-[#000080] shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Foundations Section */}
        {activeTab === 'foundations' && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Colors */}
            <section>
              <h2 className="text-3xl font-bold text-[#000080] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#000080] text-white flex items-center justify-center text-sm">01</span>
                Color System
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Primary', hex: '#000080', desc: 'Brand identity, primary actions', text: 'white' },
                  { name: 'Background', hex: '#EEF2FF', desc: 'App background, secondary areas', text: '#000080' },
                  { name: 'Surface', hex: '#FFFFFF', desc: 'Cards, modals, inputs', text: 'gray-900', border: true },
                  { name: 'Text', hex: '#111827', desc: 'Headings, body text', text: 'white' },
                  { name: 'Accent Blue', hex: '#3B82F6', desc: 'Links, highlights', text: 'white' },
                  { name: 'Accent Purple', hex: '#8B5CF6', desc: 'Creative elements', text: 'white' },
                ].map((color) => (
                  <div key={color.name} className="group">
                    <div 
                      className={`h-32 rounded-[24px] shadow-sm flex items-end p-4 mb-3 transition-transform group-hover:-translate-y-1 ${color.border ? 'border border-gray-200' : ''}`}
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className={`font-mono text-sm opacity-90`} style={{ color: color.text }}>{color.hex}</span>
                    </div>
                    <h3 className="font-bold text-gray-900">{color.name}</h3>
                    <p className="text-sm text-gray-500">{color.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Typography */}
            <section>
              <h2 className="text-3xl font-bold text-[#000080] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#000080] text-white flex items-center justify-center text-sm">02</span>
                Typography
              </h2>
              <Card className="p-12 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-8">
                  <div className="md:col-span-3 text-gray-400 font-mono text-sm">Display</div>
                  <div className="md:col-span-9">
                    <h1 className="text-6xl font-bold text-[#000080] tracking-tight">Making software<br/>unique.</h1>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-8">
                  <div className="md:col-span-3 text-gray-400 font-mono text-sm">Heading 1</div>
                  <div className="md:col-span-9">
                    <h1 className="text-4xl font-bold text-gray-900">The quick brown fox</h1>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-8">
                  <div className="md:col-span-3 text-gray-400 font-mono text-sm">Heading 2</div>
                  <div className="md:col-span-9">
                    <h2 className="text-2xl font-bold text-gray-900">The quick brown fox jumps over</h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-3 text-gray-400 font-mono text-sm">Body</div>
                  <div className="md:col-span-9 max-w-2xl">
                    <p className="text-gray-600 leading-relaxed">
                      We are a custom software development company. For 11 years, we've been creating impactful custom-built software. The key to Stack's customers' success is in the ability to deliver unique experiences.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

             {/* Iconography */}
             <section>
              <h2 className="text-3xl font-bold text-[#000080] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#000080] text-white flex items-center justify-center text-sm">03</span>
                Iconography
              </h2>
              <Card className="p-8">
                <div className="flex flex-wrap gap-8">
                  {[Star, Heart, Search, Mail, Lock, ArrowRight, CheckCircle, AlertCircle].map((Icon, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 w-20">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#000080] flex items-center justify-center hover:bg-[#000080] hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </div>
        )}

        {/* Components Section */}
        {activeTab === 'components' && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Buttons */}
            <section>
              <h2 className="text-3xl font-bold text-[#000080] mb-8">Buttons</h2>
              <Card className="p-8 space-y-8">
                <div className="flex flex-wrap items-center gap-6">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-100">
                  <Button variant="primary" className="pl-4">
                    <Star className="w-4 h-4 mr-2" />
                    With Icon
                  </Button>
                  <Button variant="primary" className="pr-4">
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="primary" className="w-12 h-12 !px-0 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </section>

            {/* Inputs & Forms */}
            <section>
              <h2 className="text-3xl font-bold text-[#000080] mb-8">Form Elements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8 space-y-6">
                    <h3 className="font-bold text-gray-900 mb-4">Input Fields</h3>
                    <Input label="Default Input" placeholder="Enter your text..." />
                    <Input label="With Icon" icon={<Search className="w-5 h-5"/>} placeholder="Search anything..." />
                    <Input label="Error State" error defaultValue="Invalid input" icon={<AlertCircle className="w-5 h-5"/>} />
                </Card>
                <Card className="p-8 space-y-8">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6">Toggles & Switches</h3>
                        <div className="flex flex-col gap-6">
                            <Toggle checked={toggleState} onChange={setToggleState} label="Notifications Enabled" />
                            <Toggle checked={false} onChange={() => {}} label="Dark Mode" />
                        </div>
                    </div>
                    <div>
                         <h3 className="font-bold text-gray-900 mb-6">Badges & Tags</h3>
                         <div className="flex flex-wrap gap-3">
                             <Badge variant="primary">Primary</Badge>
                             <Badge variant="secondary">Secondary</Badge>
                             <Badge variant="success">Active</Badge>
                             <Badge variant="warning">Pending</Badge>
                             <Badge variant="error">Failed</Badge>
                             <Badge variant="outline">Outline</Badge>
                         </div>
                    </div>
                </Card>
              </div>
            </section>

            {/* Cards */}
            <section>
              <h2 className="text-3xl font-bold text-[#000080] mb-8">Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="h-64 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                        <Star className="w-8 h-8 text-[#000080]"/>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Light Card</h3>
                    <p className="text-sm text-gray-500">Default surface style with soft shadows.</p>
                </Card>
                <Card variant="dark" className="h-64 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                        <Heart className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">Dark Card</h3>
                    <p className="text-sm text-blue-200">Used for emphasis and brand moments.</p>
                </Card>
                <Card variant="image" className="h-64 p-0 group cursor-pointer relative">
                    <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 group-hover:bg-black/50 transition-colors">
                        <h3 className="font-bold text-lg mb-2 text-white">Image Card</h3>
                        <p className="text-sm text-white/80">Rich media backgrounds.</p>
                    </div>
                </Card>
              </div>
            </section>

             {/* Avatars */}
             <section>
              <h2 className="text-3xl font-bold text-[#000080] mb-8">Avatars</h2>
              <Card className="p-8">
                  <div className="flex items-end gap-6">
                      <Avatar size="sm" initials="SM" />
                      <Avatar size="md" initials="MD" className="bg-purple-600" />
                      <Avatar size="lg" initials="LG" className="bg-pink-600" />
                      <Avatar size="xl" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200" bordered />
                  </div>
              </Card>
            </section>
          </div>
        )}

        {/* Widgets Section */}
        {activeTab === 'widgets' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h2 className="text-3xl font-bold text-[#000080] mb-8">Composed Widgets</h2>
               <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
                   <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="h-[400px]"><StatsCard /></div>
                       <div className="h-[400px]"><ProjectStatusCard /></div>
                       <div className="h-[300px] md:col-span-2"><InfoCard /></div>
                   </div>
                   <div className="space-y-6">
                       <div className="h-[300px]"><BrandCard /></div>
                       <div className="h-[400px]"><ServicesCard /></div>
                   </div>
               </div>
           </div>
        )}

      </main>
    </div>
  );
};