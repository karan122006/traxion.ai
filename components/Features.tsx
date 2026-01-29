import React from 'react';
import { CalendarClock, TrendingUp, PhoneIncoming, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'reception',
    title: 'Smart Receptionist',
    description: 'Never miss a call. Handles FAQs, transfers calls, and takes messages 24/7 without a coffee break.',
    icon: PhoneIncoming,
  },
  {
    id: 'scheduling',
    title: 'Lead Scheduling',
    description: 'Directly integrates with your calendar (Cal.com, Calendly) to book qualified leads instantly during the call.',
    icon: CalendarClock,
  },
  {
    id: 'sales',
    title: 'Outbound Sales',
    description: 'Scale your outreach. AI agents can dial thousands of leads simultaneously to qualify interest.',
    icon: TrendingUp,
  },
  {
    id: 'compliance',
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security. SOC2 compliant data handling ensures your customer interactions are safe.',
    icon: ShieldCheck,
  },
  {
    id: 'latency',
    title: 'Human Latency',
    description: 'Powered by LLaMA-3 and Groq, achieving sub-500ms response times for natural interruptions.',
    icon: Zap,
  },
  {
    id: 'analytics',
    title: 'Call Analytics',
    description: 'Get structured data, sentiment analysis, and action items extracted automatically after every call.',
    icon: BarChart3,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">More than just a chatbot.</h2>
          <p className="text-muted text-lg">
            TraxionAI replaces entire workflows. Deploy specialized agents for every phone-based role in your company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.id} className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 hover:bg-[#1e1b19] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#292524] flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-muted group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};