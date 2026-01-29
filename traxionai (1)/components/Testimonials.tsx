import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { FadeIn } from './FadeIn';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "We replaced our entire after-hours answering service. The leads are qualified better than our human agents did, and it costs 1/10th of the price.",
    author: "Elena Rodriguez",
    role: "VP of Sales",
    company: "Apex Realty",
  },
  {
    id: '2',
    quote: "The latency is practically non-existent. Our customers genuinely think they are talking to a person at the front desk. It's magic.",
    author: "Mark Davidson",
    role: "Director of Ops",
    company: "MediCare Plus",
  },
  {
    id: '3',
    quote: "Integration was seamless. We plugged TraxionAI into our HubSpot CRM and started seeing booked meetings appear on our calendars overnight.",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "GrowthFlow",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Trusted by innovative teams</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <FadeIn key={t.id} delay={index * 100} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-[#131110] border border-white/5 relative">
                <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/20" />
                <p className="text-text leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
                <div className="border-t border-white/5 pt-6">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-muted">{t.role}, {t.company}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};