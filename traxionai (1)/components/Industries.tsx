import React from 'react';
import { Home, Shield, HeartPulse, Utensils, Landmark, GraduationCap, ShoppingBag } from 'lucide-react';
import { FadeIn } from './FadeIn';

const industries = [
  { name: 'Real Estate', icon: Home, description: 'Qualify buyers and schedule viewings instantly.' },
  { name: 'Insurance', icon: Shield, description: 'Handle claims intake and policy renewals 24/7.' },
  { name: 'Healthcare', icon: HeartPulse, description: 'Patient scheduling and medication reminders.' },
  { name: 'Restaurants', icon: Utensils, description: 'Automate reservations and takeout orders.' },
  { name: 'Finance', icon: Landmark, description: 'Secure identity verification and support.' },
  { name: 'Education', icon: GraduationCap, description: 'Student enrollment and course information.' },
  { name: 'E-commerce', icon: ShoppingBag, description: 'Order tracking and return processing.' },
];

export const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for every <span className="text-primary">industry</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              TraxionAI models are pre-trained on industry-specific knowledge bases for immediate impact.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <FadeIn key={industry.name} delay={index * 50} className="h-full">
              <div className="group h-full p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#292524] flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-sm text-muted">{industry.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};