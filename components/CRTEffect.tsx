'use client';

export function CRTEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9000] overflow-hidden print:hidden hidden sm:block">
      {/* Optimized Vignette */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.9)',
          background: 'radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.8) 100%)'
        }}
      />
      
      {/* Barrel Distortion Edge Curves using solid color borders */}
      <div className="absolute inset-x-0 top-0 h-[3vh] bg-black rounded-b-[50%_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-[3vh] bg-black rounded-t-[50%_100%]" />
      <div className="absolute inset-y-0 left-0 w-[3vw] bg-black rounded-r-[100%_50%]" />
      <div className="absolute inset-y-0 right-0 w-[3vw] bg-black rounded-l-[100%_50%]" />
      
      {/* Inner glass reflection simulating bulbous screen */}
      <div className="absolute top-[2%] left-[4%] right-[4%] h-[15%] bg-gradient-to-b from-white/10 to-transparent rounded-[50%_/_30%] blur-sm opacity-40 will-change-transform" />
      
      {/* Edge Color Bleed (Edge Chromatic Aberration) */}
      <div className="absolute inset-0 shadow-[inset_4px_0_10px_rgba(255,0,0,0.15),inset_-4px_0_10px_rgba(0,100,255,0.15)]" />
    </div>
  );
}
