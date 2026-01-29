import React from 'react';
import { Users, CalendarCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const UseCases: React.FC = () => {
  return (
    <section className="py-20 bg-[#0c0a09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
         <div className="grid md:grid-cols-2 gap-8">
            
            {/* Lead Collection */}
            <FadeIn direction="right" delay={0} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-surface to-[#0c0a09] border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Users className="w-32 h-32 text-primary" />
                  </div>
                  <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                          <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Lead Collection</h3>
                      <p className="text-muted leading-relaxed mb-6">
                          Automatically engage inbound traffic, qualify prospects based on your criteria, and capture contact details directly into your CRM. Stop losing leads to voicemail.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          <span>Instant Qualification</span>
                      </div>
                  </div>
              </div>
            </FadeIn>

            {/* Collection (Calendar) */}
            <FadeIn direction="left" delay={200} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-surface to-[#0c0a09] border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <CalendarCheck className="w-32 h-32 text-blue-500" />
                  </div>
                  <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                          <CalendarCheck className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Collection</h3>
                      <p className="text-muted leading-relaxed mb-6">
                          Seamlessly manage appointments and schedule events. The AI negotiates times, handles rescheduling, and sends calendar invites automatically.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span>Calendar Sync</span>
                      </div>
                  </div>
              </div>
            </FadeIn>

         </div>
      </div>
    </section>
  );
};