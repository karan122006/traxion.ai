import React from 'react';
import { Languages, ArrowUpRight, PhoneIncoming, Plug, Sparkles, Phone } from 'lucide-react';
import { FadeIn } from './FadeIn';

const reasons = [
  {
    icon: Languages,
    title: "Multi-Language",
    description: "Serve users in हिंदी, தமிழ், Español, 日本語, and more"
  },
  {
    icon: ArrowUpRight,
    title: "Scale Outbound",
    description: "Automate lead gen, reminders & collections",
    highlight: true
  },
  {
    icon: PhoneIncoming,
    title: "24/7 Inbound",
    description: "Handle bookings and inquiries around the clock"
  },
  {
    icon: Plug,
    title: "Connect Stack",
    description: "Integrate with CRM, Sheets, Slack, n8n"
  },
  {
    icon: Sparkles,
    title: "Quick Training",
    description: "Train AI with your own call recordings"
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    description: "Buy Indian (+91) or US (+1) numbers instantly"
  }
];

export const WhyTraxion: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why TraxionAI for <span className="text-primary">Voice AI?</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div 
                className={`
                  group relative p-8 rounded-2xl transition-all duration-300 h-full
                  flex flex-col items-center text-center
                  ${item.highlight 
                    ? 'bg-surface/50 border border-primary/50 shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)]' 
                    : 'bg-[#131110] border border-white/5 hover:border-primary/30 hover:bg-surface'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors
                  ${item.highlight ? 'bg-primary/20 text-primary' : 'bg-[#292524] text-muted group-hover:text-white'}
                `}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};