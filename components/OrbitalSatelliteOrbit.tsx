'use client';

export function OrbitalSatelliteOrbit() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden mix-blend-screen opacity-60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div 
          className="w-[150vw] sm:w-[120vw] lg:w-[100vw] h-[150vh] sm:h-[120vh] lg:h-[100vh] rounded-full animate-[spin_60s_linear_infinite]" 
          style={{ border: 'dashed 1px rgba(0, 255, 65, 0.15)' }}
        >
          {/* Satellite Entity */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
            <div className="relative w-8 h-8 flex items-center justify-center rotate-90">
              {/* Solar Panels */}
              <div className="absolute w-2 h-5 bg-[#00FF41] left-0"></div>
              <div className="absolute w-2 h-5 bg-[#00FF41] right-0"></div>
              
              {/* Connector */}
              <div className="absolute w-full h-[2px] bg-[#00FF41] top-1/2 -translate-y-1/2"></div>
              
              {/* Main Body */}
              <div className="absolute w-4 h-4 bg-[#05050A] border-[2px] border-white z-10 box-border"></div>
              
              {/* Front Antenna */}
              <div className="absolute w-[2px] h-3 bg-white top-[-4px] left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-3 h-[2px] bg-white top-[-4px] left-1/2 -translate-x-1/2"></div>
              
              {/* Thruster Trail */}
              <div className="absolute w-[2px] h-20 bg-gradient-to-t from-transparent via-[#00FF41] to-white opacity-80 bottom-[-80px] left-1/2 -translate-x-1/2"></div>
              
              {/* Engine blip */}
              <div className="absolute w-1.5 h-1.5 bg-white bottom-[-2px] left-1/2 -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
