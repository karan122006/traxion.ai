import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <FadeIn>
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#1c1917] to-[#0c0a09] border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to automate your calls?
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
              Join the waitlist today or book a demo to see how TraxionAI can save your team 20+ hours per week.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4"/>}>
                  Start Free Trial
              </Button>
              <Button variant="secondary" size="lg">
                  Contact Sales
              </Button>
              </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};