import React from 'react';
import { AudioWaveform, Mail } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0a09] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={100}>
          <div className="mb-16">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
                    <AudioWaveform className="w-3 h-3 text-primary" />
                </div>
                <span className="text-lg font-bold text-white">traxion<span className="text-primary">ai</span></span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
              Building the future of voice interactions. AI that listens, understands, and acts.
            </p>
            
            <div className="flex items-center gap-2 text-muted hover:text-primary transition-colors duration-200 w-fit">
               <Mail className="w-4 h-4" />
               <a href="mailto:karanvadaje@gmail.com" className="text-sm font-medium">
                 karanvadaje@gmail.com
               </a>
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-white/5 pt-8">
          <p className="text-xs text-muted">© 2026 TraxionAI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};