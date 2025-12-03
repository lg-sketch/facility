import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Phone, Mail, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <div className="relative py-24 lg:py-32 overflow-hidden rounded-t-[48px] -mt-12 z-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay: Transparent top to Dark Blue bottom/fill */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000080]/80 via-[#000080]/90 to-[#000080]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Bereit für einen <br/>
              <span className="text-blue-300">entspannten Neuanfang?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
              Verschwenden Sie keine wertvolle Zeit. Lassen Sie uns die Arbeit machen. 
              Fordern Sie jetzt Ihre unverbindliche Offerte an.
            </p>
            
            <div className="flex flex-col gap-4 pt-4">
              <a href="tel:+41791511216" className="flex items-center gap-4 text-xl font-medium hover:text-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-6 h-6" />
                </div>
                +41 79 151 12 16
              </a>
              <a href="mailto:info@deti-reinigung.ch" className="flex items-center gap-4 text-xl font-medium hover:text-blue-300 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-6 h-6" />
                </div>
                info@deti-reinigung.ch
              </a>
            </div>
          </div>

          {/* Open Form Card */}
          <Card className="p-8 md:p-10 shadow-2xl shadow-blue-900/50 backdrop-blur-sm bg-white/95">
            <h3 className="text-2xl font-bold text-[#000080] mb-6">Gratis Offerte anfordern</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Vorname" className="bg-gray-50" />
                <Input placeholder="Nachname" className="bg-gray-50" />
              </div>
              <Input placeholder="E-Mail Adresse" type="email" className="bg-gray-50" />
              <Input placeholder="Telefonnummer" type="tel" className="bg-gray-50" />
              
              <div className="space-y-3 pt-2">
                <label className="text-sm font-medium text-gray-700">Ich interessiere mich für:</label>
                <div className="flex gap-3">
                    <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 hover:border-[#000080] transition-colors">
                        <input type="radio" name="service" className="accent-[#000080]" />
                        <span className="text-sm text-gray-700">Reinigung</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 hover:border-[#000080] transition-colors">
                        <input type="radio" name="service" className="accent-[#000080]" />
                        <span className="text-sm text-gray-700">Umzug</span>
                    </label>
                </div>
              </div>

              <Button variant="primary" fullWidth className="mt-4 h-12 text-lg">
                Jetzt anfragen <Send className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-center text-gray-400 mt-4">
                Unverbindlich & kostenlos. Wir antworten in der Regel innert 24h.
              </p>
            </form>
          </Card>

        </div>
      </div>
    </div>
  );
};