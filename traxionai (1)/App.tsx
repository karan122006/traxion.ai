import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyTraxion } from './components/WhyTraxion';
import { UseCases } from './components/UseCases';
import { Industries } from './components/Industries';
import { Integrations } from './components/Integrations';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-text selection:bg-primary/30 selection:text-white">
      {/* Global Grainy Overlay */}
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none"></div>

      <Navbar />
      
      <main className="relative z-0">
        <Hero />
        <WhyTraxion />
        <UseCases />
        <Industries />
        <Integrations />
        <Comparison />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;