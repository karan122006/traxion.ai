import React from 'react';
import { PhoneCall, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { AudioVisualizer } from './AudioVisualizer';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div>
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-xs font-medium text-muted uppercase tracking-wider">Voice 2.0 is here</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Replace your front desk with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Human-Like AI.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              Automate reception, outbound sales, and lead qualification with voice agents that sound so real, your customers won't know the difference.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="primary" size="lg" icon={<PhoneCall className="w-4 h-4"/>}>
                Hear Demo
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>&lt; 500ms Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Integrates with CRM</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Visual Content */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl transform rotate-3 scale-105 blur-xl"></div>
          
          <FadeIn direction="left" delay={600} className="relative bg-[#131110] border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Fake UI Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center">
                  <span className="text-lg">👩‍💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Sarah (Receptionist)</h3>
                  <p className="text-xs text-muted">Connected • +1 (555) 012-3456</p>
                </div>
              </div>
              <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-mono">
                LIVE CALL
              </div>
            </div>

            {/* Visualizer */}
            <div className="mb-6">
                <AudioVisualizer />
            </div>

            {/* Transcript Mockup */}
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-4">
                <div className="w-16 text-muted text-right shrink-0">User</div>
                <div className="text-text/80">Hi, I'd like to book an appointment for next Tuesday.</div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 text-primary text-right shrink-0">Sarah</div>
                <div className="text-white">I can help with that. What time works best for you on Tuesday? I have openings at 10 AM and 2 PM.</div>
              </div>
               <div className="flex gap-4 opacity-50">
                <div className="w-16 text-muted text-right shrink-0">User</div>
                <div className="text-text/80">Let's do 2 PM please.</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};