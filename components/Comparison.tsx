import React from 'react';
import { FadeIn } from './FadeIn';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0a09] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The mathematical advantage of <span className="text-primary">Voice AI</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-muted text-lg mb-8">
              Traditional call centers are expensive, hard to scale, and suffer from high turnover. TraxionAI solves the capacity problem instantly.
            </p>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={200}>
                <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                    <span className="text-white">Cost per minute (Human)</span>
                    <span className="text-muted">$0.412 - $3.00</span>
                </div>
                <div className="h-2 w-full bg-[#292524] rounded-full overflow-hidden">
                    <div className="h-full w-full bg-muted opacity-30"></div>
                </div>
                </div>
            </FadeIn>

            <FadeIn delay={300}>
                <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                    <span className="text-white">Cost per minute (TraxionAI)</span>
                    <span className="text-primary font-bold">$0.249</span>
                </div>
                <div className="h-2 w-full bg-[#292524] rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-primary shadow-[0_0_15px_rgba(234,88,12,0.8)]"></div>
                </div>
                </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <FadeIn delay={200} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-surface border border-white/5 flex flex-col items-center text-center justify-center">
                    <span className="text-4xl font-bold text-white mb-2">10k+</span>
                    <span className="text-sm text-muted">Calls per minute</span>
                </div>
            </FadeIn>
            <FadeIn delay={300} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-surface border border-white/5 flex flex-col items-center text-center justify-center">
                    <span className="text-4xl font-bold text-white mb-2">0s</span>
                    <span className="text-sm text-muted">Wait time</span>
                </div>
            </FadeIn>
            <FadeIn delay={400} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-surface border border-white/5 flex flex-col items-center text-center justify-center">
                    <span className="text-4xl font-bold text-white mb-2">24/7</span>
                    <span className="text-sm text-muted">Availability</span>
                </div>
            </FadeIn>
            <FadeIn delay={500} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-surface border border-white/5 flex flex-col items-center text-center justify-center">
                    <span className="text-4xl font-bold text-white mb-2">35+</span>
                    <span className="text-sm text-muted">Languages</span>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};