import React, { useEffect, useState } from 'react';

export const AudioVisualizer: React.FC = () => {
  const [bars, setBars] = useState<number[]>(new Array(30).fill(10));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.max(10, Math.floor(Math.random() * 100))));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 bg-surface/50 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
        {/* Glow behind */}
        <div className="absolute w-2/3 h-2/3 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
        
        <div className="flex items-center gap-1 z-10 h-24">
            {bars.map((height, i) => (
                <div 
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-orange-900 to-orange-500 rounded-full transition-all duration-100 ease-in-out"
                    style={{ height: `${height}%`, opacity: 0.8 }}
                />
            ))}
        </div>

        {/* Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-muted uppercase tracking-wider">Agent Active</span>
        </div>
    </div>
  );
};