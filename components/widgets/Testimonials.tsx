
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Die Endreinigung war absolut stressfrei. Die Abnahmegarantie hat super funktioniert, der Vermieter war sofort zufrieden.",
    author: "Sarah M.",
    role: "Privatkunde",
    location: "Bern",
    rating: 5
  },
  {
    id: 2,
    content: "Wir haben unser komplettes Büro mit Deti gezügelt. Alles wurde sorgfältig verpackt und pünktlich geliefert. Sehr professionell.",
    author: "Markus B.",
    role: "Geschäftsführer",
    location: "Thun",
    rating: 5
  },
  {
    id: 3,
    content: "Sehr freundliches Personal und faire Preise. Ich hatte Angst vor dem Umzug, aber die Jungs haben das super gemanagt.",
    author: "Julia K.",
    role: "Privatkunde",
    location: "Köniz",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden my-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">Das sagen unsere Kunden</h2>
           <div className="flex justify-center items-center gap-2 text-gray-500 font-medium">
              <div className="flex gap-1 text-yellow-400">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span>4.9/5 (500+ Bewertungen)</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, i) => (
             <div 
                key={testimonial.id}
                className="flex flex-col items-center text-center group"
             >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#000080] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 fill-current opacity-80" />
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8 italic relative">
                    "{testimonial.content}"
                </p>
                
                <div className="mt-auto">
                    <h4 className="font-bold text-[#000080] text-lg">{testimonial.author}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{testimonial.role} aus {testimonial.location}</p>
                    
                    <div className="flex justify-center gap-1 mt-3 text-yellow-400 opacity-60">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
