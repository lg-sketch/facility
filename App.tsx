
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Badge } from './components/ui/Badge';
import { ContactSection } from './components/widgets/ContactSection';
import { Testimonials } from './components/widgets/Testimonials';
import { 
  CheckCircle, Truck, Sparkles, ShieldCheck, 
  ArrowRight, Star, AlertCircle, Phone, 
  Mail, MapPin, Box, FileText, Calendar, Key,
  ChevronRight, Users, Clock, ThumbsUp, Wallet
} from 'lucide-react';

/* --- SVG ASSETS --- */
const ArrowConnector = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-full h-auto overflow-visible ${className}`} preserveAspectRatio="none">
    <path 
      d="M0,10 Q50,20 100,10" 
      fill="none" 
      stroke="#BFDBFE" 
      strokeWidth="2" 
      strokeDasharray="4 4"
      className="animate-[dash_20s_linear_infinite]"
    />
    <path 
      d="M95,6 L100,10 L95,14" 
      fill="none" 
      stroke="#BFDBFE" 
      strokeWidth="2" 
    />
  </svg>
);

/* --- PAGE COMPONENTS --- */

const HomePage = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <div className="space-y-16">
    {/* HERO SECTION - FULL WIDTH */}
    <div className="w-full bg-[#000080] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden rounded-b-[48px] shadow-2xl">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop" 
                alt="Clean Home Background" 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            {/* Primary Gradient: Transparent top to Dark Blue bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000080]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Content Left */}
            <div className="space-y-8 animate-in slide-in-from-left-4 duration-700 fade-in">
                 <Badge variant="secondary" className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-4 py-2 text-sm">
                    Bern & Umgebung
                 </Badge>
                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                    Zügeln & Reinigen <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">ohne Stress.</span>
                 </h1>
                 <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-lg">
                    Ihr Partner für Umzug und Reinigung in Bern mit <strong>100% Abnahmegarantie</strong>. Konzentrieren Sie sich auf das Neue, wir machen den Rest.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button variant="secondary" className="h-14 px-8 text-lg bg-white text-[#000080] hover:bg-blue-50 border-0 shadow-xl shadow-blue-900/20" onClick={() => onNavigate('contact')}>
                      Offerte anfordern
                    </Button>
                    <Button variant="outline" className="h-14 px-8 text-lg text-white border-white/30 hover:bg-white/10 hover:border-white" onClick={() => onNavigate('cleaning')}>
                      Unsere Services
                    </Button>
                 </div>
                 
                 {/* Social Proof */}
                 <div className="pt-8 flex items-center gap-6 text-sm font-medium text-blue-200/80">
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#000080] bg-gray-200 overflow-hidden">
                                <img src={`https://picsum.photos/id/${i+60}/50/50`} className="w-full h-full object-cover" alt="User" />
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="text-white flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold">4.9/5</span>
                        </div>
                        <span>Kundenzufriedenheit</span>
                    </div>
                 </div>
            </div>

            {/* Image Right */}
            <div className="relative hidden lg:block animate-in slide-in-from-right-4 duration-700 fade-in delay-200">
                 <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500 ease-out group">
                    <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                        alt="Moving Day" 
                        className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-10 left-10 right-10">
                         <Card className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center text-white shrink-0">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#000080] leading-tight">Abnahmegarantie inklusive</h4>
                                <p className="text-xs text-gray-500 mt-1">Keine Diskussionen bei der Übergabe.</p>
                            </div>
                         </Card>
                    </div>
                 </div>
            </div>
        </div>
    </div>

    {/* WARUM DETI - FEATURES STRIP (Under Hero) */}
    {/* Responsive Update: Styled as a card on mobile (bg-blue-50, border), transparent strip on desktop */}
    <div className="w-full max-w-[96%] mx-auto px-4 md:px-6 -mt-12 md:-mt-8 relative z-20">
        <div className="bg-blue-50/90 backdrop-blur-sm md:bg-transparent border border-blue-200 md:border-0 rounded-3xl md:rounded-none p-6 md:p-0 shadow-xl md:shadow-none grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
             {[
                { icon: ShieldCheck, text: "100% Abnahmegarantie", sub: "Garantiert sorgenfrei" },
                { icon: Wallet, text: "Faire Pauschalpreise", sub: "Keine versteckten Kosten" },
                { icon: CheckCircle, text: "Versicherung inklusive", sub: "Voll abgesichert" }
             ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-2 md:p-4 text-[#000080] animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-12 h-12 rounded-full bg-white md:bg-blue-100 flex items-center justify-center text-[#000080] shrink-0 shadow-sm md:shadow-none border border-blue-100 md:border-0">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="block font-bold text-lg leading-tight">{item.text}</span>
                        <span className="text-sm text-gray-500">{item.sub}</span>
                    </div>
                </div>
             ))}
        </div>
    </div>

    {/* SECTION 2 - SERVICES (Moved Up) */}
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">Unsere Dienstleistungen</h2>
            <p className="text-gray-600">Alles aus einer Hand für Bern und Umgebung.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <Card className="hover:shadow-xl transition-shadow cursor-pointer group p-8" onClick={() => onNavigate('cleaning')}>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#000080] mb-6 group-hover:bg-[#000080] group-hover:text-white transition-colors">
                    <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Reinigung</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Endreinigung mit Abnahmegarantie. Wir putzen bis in die letzte Ecke, damit der Vermieter zufrieden ist.
                </p>
                <div className="flex items-center text-[#000080] font-bold text-sm group-hover:underline">
                    Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer group p-8" onClick={() => onNavigate('moving')}>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#000080] mb-6 group-hover:bg-[#000080] group-hover:text-white transition-colors">
                    <Truck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Umzüge</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Sicherer Möbeltransport für Privat und Gewerbe. Montage, Demontage und Versicherung inklusive.
                </p>
                 <div className="flex items-center text-[#000080] font-bold text-sm group-hover:underline">
                    Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </Card>
        </div>
    </div>

    {/* SECTION 1 - AIDA: Interest/Problem */}
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="outline" className="border-blue-200 text-blue-600">Das Problem</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] leading-tight">Ein Partner für den kompletten Wohnungswechsel</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Ein Umzug ist mehr als nur Kisten schleppen. Es ist der Start in einen neuen Lebensabschnitt. Doch die Realität sieht oft anders aus: Zeitdruck, schwere Möbel und die Angst vor der Wohnungsabgabe beim Vermieter. Suchen Sie nach einer Lösung, die Ihnen diese Last abnimmt?
          </p>
          <ul className="space-y-3 pt-2">
            {[
                'Keine Zeit für die Endreinigung?',
                'Angst vor Schäden beim Transport?',
                'Stress mit der Verwaltung?'
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                        <AlertCircle className="w-4 h-4" />
                    </div>
                    {item}
                </li>
            ))}
          </ul>
        </div>
        <Card variant="image" className="h-[400px] md:h-[500px] group">
           <img src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=1000&auto=format&fit=crop" alt="Umzug Stress" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
           <div className="absolute bottom-8 left-8 right-8">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-[24px] border border-white/20 shadow-lg">
               <p className="font-bold text-lg mb-1 text-white">Wir übernehmen den Stress</p>
               <p className="text-sm text-blue-100">Damit Sie sich auf Ihr neues Zuhause freuen können.</p>
             </div>
           </div>
        </Card>
      </div>
    </div>

    {/* SECTION 1.5 - PROCESS / HOW IT WORKS */}
    <div className="py-24 bg-white rounded-[48px] my-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="text-center mb-16 px-6 relative z-10">
            <Badge variant="secondary" className="bg-blue-50 text-[#000080] mb-4">Der Ablauf</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">So einfach funktioniert's</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Vier einfache Schritte zu Ihrem erfolgreichen Wohnungswechsel.</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                    { icon: FileText, title: "1. Anfrage", desc: "Kontaktieren Sie uns für eine kostenlose Offerte.", delay: "0s" },
                    { icon: Calendar, title: "2. Besichtigung", desc: "Kostenlose Besichtigung vor Ort für genaue Planung.", delay: "1s" },
                    { icon: Truck, title: "3. Ausführung", desc: "Pünktlicher Umzug und gründliche Reinigung.", delay: "2s" },
                    { icon: Key, title: "4. Übergabe", desc: "Erfolgreiche Abgabe mit Garantie.", delay: "3s" }
                ].map((step, index, arr) => (
                    <div key={index} className="relative group">
                        {/* Floating Arrow Connector */}
                        {index < arr.length - 1 && (
                             <div className="hidden md:block absolute top-12 left-1/2 w-full h-12 z-0 -translate-y-1/2 pointer-events-none">
                                <ArrowConnector className="opacity-60" />
                             </div>
                        )}
                        
                        <div className={`relative z-10 flex flex-col items-center text-center animate-float`} style={{ animationDelay: step.delay }}>
                            <div className="w-24 h-24 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#000080] mb-6 shadow-lg shadow-blue-100/50 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed px-4">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* TESTIMONIALS WIDGET */}
    <Testimonials />
    
    {/* CTA SECTION - NEW DESIGN */}
    <ContactSection />
  </div>
);

const CleaningPage = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <div className="space-y-16 animate-in fade-in duration-500">
    {/* HERO - UPDATED to match screenshot layout */}
     <div className="pt-6 px-4 md:px-6">
        <div className="relative h-[600px] w-full rounded-[48px] overflow-hidden bg-[#000080] shadow-2xl border-[6px] border-white/20">
            {/* Background Image with Overlay */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1581578731117-104f2a412727?q=80&w=2000&auto=format&fit=crop" 
                    alt="Cleaning Hero" 
                    // Changed mix-blend-mode to soft-light and increased opacity slightly for better visibility
                    className="w-full h-full object-cover opacity-50 mix-blend-soft-light"
                />
                <div className="absolute inset-0 bg-[#000080]/40" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                 <div className="mb-8 px-6 py-2.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase shadow-lg">
                    Reinigungsservice
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                    Glänzend sauber,<br/>
                    garantiert abgenommen.
                 </h1>
                 <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-medium">
                    Professionelle Endreinigung in Bern mit 100% Abnahmegarantie.
                 </p>
            </div>
        </div>
     </div>

    {/* PAS FRAMEWORK CONTENT - REORDERED & REDESIGNED */}
    <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Module (Image) - Moved to Left */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[500px] order-2 lg:order-1 bg-gray-100">
                 <img src="https://images.unsplash.com/photo-1527515664-627775433300?q=80&w=1000&auto=format&fit=crop" alt="Cleaning Detail" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Text - Moved to Right */}
            <div className="space-y-8 order-1 lg:order-2">
                <div>
                     <Badge variant="secondary" className="bg-blue-50 text-[#000080] mb-4 border border-blue-100">
                        Das Problem
                     </Badge>
                     <h2 className="text-3xl md:text-5xl font-bold text-[#000080] leading-tight mb-6">
                        Die Angst vor dem <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Übergabeprotokoll</span>
                     </h2>
                     <p className="text-lg text-gray-600 leading-relaxed">
                        Sie haben alles gepackt, die Kisten sind weg, und Sie freuen sich auf die neue Wohnung. Doch dann der Blick zurück: Kalk im Bad, Fettspritzer in der Küche, Fenster, die geputzt werden müssen. Der Gedanke an die Endreinigung raubt Ihnen die Vorfreude.
                     </p>
                </div>

                {/* Transparent List with Modern Check Signs */}
                <div className="space-y-4 pt-2">
                     <h3 className="font-bold text-gray-900 text-lg">Häufige Mangelpunkte:</h3>
                     <ul className="space-y-4">
                        {['Kalkrückstände in Sanitäranlagen', 'Schmutzige Lamellenstoren', 'Flecken auf Teppichböden', 'Ungeputzte Fensterrahmen'].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                {/* Modern Gradient Check Sign */}
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#000080] to-[#3B82F6] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-lg shadow-blue-500/20">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                <span className="text-gray-700 font-medium text-lg leading-snug">{item}</span>
                            </li>
                        ))}
                     </ul>
                </div>
            </div>
        </div>

        {/* Agitate Section - REDESIGNED */}
        <div className="mt-24 w-full">
            <div className="relative rounded-[32px] overflow-hidden h-[600px] w-full group shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                    alt="Expensive Cleaning" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay: Bottom Dark Blue to Transparent Top */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000080] via-[#000080]/80 to-transparent opacity-95" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 text-center items-center z-10">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl">Warum Selberputzen oft teurer wird</h2>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
                        Wussten Sie, dass die meisten Beanstandungen bei Wohnungsabgaben auf ungenügende Reinigung zurückzuführen sind? Stundenlanges Schrubben, teure Spezialmittel und am Ende doch Stress mit dem Vermieter. Eine Nachreinigung kostet oft das Doppelte.
                    </p>
                    <div className="inline-flex items-center gap-3 text-white font-bold bg-white/20 backdrop-blur-md px-10 py-5 rounded-full border border-white/30 hover:bg-white/30 transition-colors cursor-default shadow-lg text-lg">
                        <AlertCircle className="w-6 h-6" />
                        Wollen Sie dieses Risiko eingehen?
                    </div>
                </div>
            </div>
        </div>

        {/* Solution */}
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#000080] mb-4">Unsere Abnahmegarantie ist Ihre Sicherheit</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Atmen Sie durch. Deti Facility Management GmbH übernimmt das für Sie. Wir kennen die strengen Anforderungen der Verwaltungen im Kanton Bern genau.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-white border border-blue-50 hover:border-[#000080] transition-colors">
                    <Sparkles className="w-10 h-10 text-[#000080] mb-4" />
                    <h3 className="font-bold text-lg mb-2">Umzugsreinigung</h3>
                    <p className="text-sm text-gray-500">Komplettreinigung inklusive Küche, Lamellen, Fenster und Sanitäranlagen.</p>
                </Card>
                <Card className="p-6 bg-white border border-blue-50 hover:border-[#000080] transition-colors">
                    <ShieldCheck className="w-10 h-10 text-[#000080] mb-4" />
                    <h3 className="font-bold text-lg mb-2">Abnahmegarantie</h3>
                    <p className="text-sm text-gray-500">Wir sind bei der Übergabe dabei. Keine Diskussionen – wir haften für die Sauberkeit.</p>
                </Card>
                <Card className="p-6 bg-white border border-blue-50 hover:border-[#000080] transition-colors">
                    <Box className="w-10 h-10 text-[#000080] mb-4" />
                    <h3 className="font-bold text-lg mb-2">Gewerbereinigung</h3>
                    <p className="text-sm text-gray-500">Saubere Büros und Praxisräume für einen professionellen ersten Eindruck.</p>
                </Card>
            </div>
        </div>
    </div>
    
    <ContactSection />
  </div>
);

const MovingPage = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <div className="space-y-16 animate-in fade-in duration-500">
    {/* HERO - FRAMED CARD STYLE (Matched to Cleaning) */}
     <div className="pt-6 px-4 md:px-6">
        <div className="relative h-[600px] w-full rounded-[48px] overflow-hidden bg-[#000080] shadow-2xl border-[6px] border-white/20">
            {/* Background Image with Overlay */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop" 
                    alt="Moving Hero" 
                    className="w-full h-full object-cover opacity-50 mix-blend-soft-light"
                />
                <div className="absolute inset-0 bg-[#000080]/40" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                 <div className="mb-8 px-6 py-2.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase shadow-lg">
                    Umzugsservice
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                    Wir tragen<br/>
                    Ihre Last.
                 </h1>
                 <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-medium">
                    Sicherer und stressfreier Umzug in Bern und Umgebung.
                 </p>
            </div>
        </div>
     </div>

    {/* PAS FRAMEWORK CONTENT - SPLIT LAYOUT (Matched to Cleaning) */}
    <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Module (Image) - Left */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[500px] order-2 lg:order-1 bg-gray-100">
                 <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop" alt="Moving Stress" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Text - Right */}
            <div className="space-y-8 order-1 lg:order-2">
                <div>
                     <Badge variant="secondary" className="bg-blue-50 text-[#000080] mb-4 border border-blue-100">
                        Das Problem
                     </Badge>
                     <h2 className="text-3xl md:text-5xl font-bold text-[#000080] leading-tight mb-6">
                        Ein Umzug ist oft pure <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Schwerstarbeit</span>
                     </h2>
                     <p className="text-lg text-gray-600 leading-relaxed">
                        Kisten packen, Möbel demontieren, Transporter organisieren und dann das schwere Schleppen durch enge Treppenhäuser. Ein Umzug gehört psychologisch zu den stressigsten Ereignissen im Leben.
                     </p>
                </div>

                {/* List with Modern Check Signs */}
                <div className="space-y-4 pt-2">
                     <h3 className="font-bold text-gray-900 text-lg">Stressfaktoren:</h3>
                     <ul className="space-y-4">
                        {['Schwere Möbel durch enge Treppenhäuser', 'Risiko von Kratzern und Schäden', 'Zeitdruck am Zügeltag', 'Mangelndes Werkzeug und Transportmittel'].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#000080] to-[#3B82F6] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-lg shadow-blue-500/20">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                <span className="text-gray-700 font-medium text-lg leading-snug">{item}</span>
                            </li>
                        ))}
                     </ul>
                </div>
            </div>
        </div>

        {/* Agitate Section - FULL WIDTH CARD (Matched to Cleaning) */}
        <div className="mt-24 w-full">
            <div className="relative rounded-[32px] overflow-hidden h-[600px] w-full group shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Moving Risk" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000080] via-[#000080]/80 to-transparent opacity-95" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 text-center items-center z-10">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl">Risiko Eigenregie</h2>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
                        Oft sagen private Helfer kurzfristig ab oder das geliebte Möbelstück bekommt Kratzer im Treppenhaus. Ohne Profi-Versicherung bleiben Sie oft auf dem Schaden sitzen.
                    </p>
                    <div className="inline-flex items-center gap-3 text-white font-bold bg-white/20 backdrop-blur-md px-10 py-5 rounded-full border border-white/30 hover:bg-white/30 transition-colors cursor-default shadow-lg text-lg">
                        <AlertCircle className="w-6 h-6" />
                        Wollen Sie dieses Risiko eingehen?
                    </div>
                </div>
            </div>
        </div>

        {/* Solution Grid (Matched to Cleaning) */}
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#000080] mb-4">Sicher zügeln mit den Profis von Deti</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Unser erfahrenes Umzugsteam sorgt dafür, dass Ihr Hab und Gut sicher und versichert von A nach B kommt.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-white border border-blue-50 hover:border-[#000080] transition-colors">
                    <Truck className="w-10 h-10 text-[#000080] mb-4" />
                    <h3 className="font-bold text-lg mb-2">Möbeltransport</h3>
                    <p className="text-sm text-gray-500">Fachgerechtes Verladen und Sichern Ihrer Möbel im Transporter.</p>
                </Card>
                <Card className="p-6 bg-white border border-blue-50 hover:border-[#000080] transition-colors">
                    <Box className="w-10 h-10 text-[#000080] mb-4" />
                    <h3 className="font-bold text-lg mb-2">Montage & Demontage</h3>
                    <p className="text-sm text-gray-500">Wir bauen Schränke und Betten professionell ab und wieder auf.</p>
                </Card>
                <Card className="p-6 bg-white border border-blue-50 hover:border-[#000080] transition-colors">
                    <ShieldCheck className="w-10 h-10 text-[#000080] mb-4" />
                    <h3 className="font-bold text-lg mb-2">Versicherung inklusive</h3>
                    <p className="text-sm text-gray-500">Bei uns ist Ihr gesamtes Inventar während des Transports versichert.</p>
                </Card>
            </div>
        </div>
    </div>
    
    <ContactSection />
  </div>
);

const AboutPage = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <div className="space-y-16 animate-in fade-in duration-500 pt-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
             <Badge>Über uns</Badge>
             <h1 className="text-4xl md:text-5xl font-bold text-[#000080] leading-tight">Zuverlässigkeit ist unser Handwerk</h1>
             <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                    Willkommen bei Deti Facility Management GmbH. Wir sind ein junges, dynamisches und in Bern verwurzeltes Unternehmen mit einem klaren Ziel: Dienstleistung muss wieder dienen und leisten.
                </p>
                <p>
                    In einer Branche, in der oft Hektik herrscht, setzen wir auf Qualität und Handschlagqualität. Wir wissen, dass wir in Ihre privatesten Räume eintreten. Diesem Vertrauen begegnen wir mit höchster Diskretion, Respekt und Sorgfalt.
                </p>
             </div>
             
             {/* Value Cards */}
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {[
                    { label: "Transparenz", desc: "Festpreise statt Überraschungen." },
                    { label: "Qualität", desc: "Geschultes Personal & Profi-Equipment." },
                    { label: "Kundenfokus", desc: "Ihre Zufriedenheit ist unsere Visitenkarte." }
                ].map((val, i) => (
                    <Card key={i} className="p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-blue-50 hover:border-blue-200">
                        <h4 className="font-bold text-[#000080] mb-2 text-lg">{val.label}</h4>
                        <p className="text-sm text-gray-600 leading-snug">{val.desc}</p>
                    </Card>
                ))}
             </div>
        </div>
        <div className="relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#000080]/20 mix-blend-multiply" />
        </div>
    </div>
    <ContactSection />
  </div>
);

const ContactPage = () => (
    <div className="pt-12 animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#000080] mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Haben Sie Fragen oder wünschen Sie eine unverbindliche Offerte? Wir sind für Sie da – schnell und unkompliziert.
            </p>
        </div>
        <ContactSection />
    </div>
);

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
     window.scrollTo(0, 0);
  }, [page]);

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'cleaning' && <CleaningPage onNavigate={setPage} />}
      {page === 'moving' && <MovingPage onNavigate={setPage} />}
      {page === 'about' && <AboutPage onNavigate={setPage} />}
      {page === 'contact' && <ContactPage />}
    </Layout>
  );
};

export default App;
