import React from 'react';
import { Webhook, Phone, Calendar, Briefcase } from 'lucide-react';
import { FadeIn } from './FadeIn';

const integrations = [
  {
    name: 'Custom API',
    description: 'Connect any external API',
    icon: Webhook,
  },
  {
    name: 'SIP Trunking',
    description: 'Connect to any telephony system',
    icon: Phone,
  },
  {
    name: 'Cal.com',
    description: 'Appointment scheduling',
    icon: Calendar,
  },
  {
    name: 'Salesforce',
    description: 'CRM sync & automation',
    icon: Briefcase,
  },
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0a09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
            
            {/* Header */}
            <div className="md:w-1/3">
                <FadeIn direction="right">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-primary rounded-full"></div>
                        <h2 className="text-3xl font-bold text-white">Popular Integrations</h2>
                    </div>
                    <p className="text-muted text-lg">
                        TraxionAI plays nice with your existing stack. Connect in seconds.
                    </p>
                </FadeIn>
            </div>

            {/* List */}
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
                {integrations.map((item, index) => (
                    <FadeIn key={item.name} delay={index * 100} direction="left">
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                            <div className="mt-1">
                                <item.icon className="w-6 h-6 text-text" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium text-lg">{item.name}</h3>
                                <p className="text-sm text-muted">{item.description}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};