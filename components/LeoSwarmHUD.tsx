'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Satellite, Activity } from 'lucide-react';

export function LeoSwarmHUD() {
  const [mounted, setMounted] = useState(false);
  const [telemetry, setTelemetry] = useState({
    lat: -21.1736,
    lon: 27.5125,
    alt: 450.21,
    vel: 7.66,
  });

  const [logs, setLogs] = useState<string[]>([
    "INIT PROPAGATOR...",
    "AWAITING UPLINK"
  ]);

  useEffect(() => {
    setMounted(true);

    let frame: number;
    let lastTime = 0;
    const update = (time: number) => {
      if (time - lastTime > 150) {
        setTelemetry(prev => ({
          lat: prev.lat + (Math.random() * 0.002 - 0.001),
          lon: prev.lon + (Math.random() * 0.002 - 0.001),
          alt: prev.alt + (Math.random() * 0.02 - 0.01),
          vel: 7.66 + (Math.random() * 0.006 - 0.003),
        }));
        lastTime = time;
      }
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);

    const events = [
      "SGP4 TLE SYNCED",
      "H3 GRID ALIGNED",
      "COMPUTING SET-COVER...",
      "MOSAIC RECONSTRUCTED",
      "ORBIT BURN PLANNED",
      "SIGNAL ACQUIRED"
    ];
    
    const logInterval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, events[Math.floor(Math.random() * events.length)]];
        if (next.length > 3) next.shift(); // Keep last 3 logs
        return next;
      });
    }, 3500);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(logInterval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
      // Responsive positioning: floating on desktop, relative flow on smaller screens if needed (hidden here to keep it pristine)
      className="fixed bottom-6 right-6 z-[60] border-[4px] border-[#00FF41] bg-[#0A0A1F]/90 p-4 shadow-[8px_8px_0px_#00FF41] hidden lg:flex flex-col gap-4 backdrop-blur-md pointer-events-none print:hidden uppercase font-mono w-[300px]"
    >
      {/* HUD Header */}
      <div className="flex justify-between items-center border-b-[2px] border-[#00FF41] pb-2">
        <div className="flex items-center gap-2 text-white font-black tracking-tighter">
          <Satellite size={20} className="text-[#00FF41]" />
          <span className="text-lg leading-none">BW_SAT_CMD</span>
        </div>
        <div className="flex gap-1.5 items-center">
          <div className="w-1.5 h-3 bg-[#00FF41] animate-pulse"></div>
          <div className="w-1.5 h-3 bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        {/* Retro Circular Radar using pure CSS (Extremely high performance) */}
        <div className="relative w-[72px] h-[72px] shrink-0 border-[2px] border-[#00FF41] rounded-full overflow-hidden bg-black flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,255,65,0.4)]">
          {/* Radar Sweep */}
          <div 
            className="absolute inset-0 origin-center animate-[spin_2.5s_linear_infinite]"
            style={{ backgroundImage: 'conic-gradient(from 0deg, transparent 70%, rgba(0, 255, 65, 0.6) 100%)' }}
          ></div>
          {/* Crosshairs */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#00FF41]/40"></div>
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#00FF41]/40"></div>
          {/* Center Earth Dot */}
          <div className="w-1 h-1 bg-[#00FF41] rounded-full z-10"></div>
          
          {/* Simulated Satellite Blips */}
          <div className="absolute top-[25%] left-[25%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_white] animate-[ping_2s_infinite]"></div>
          <div className="absolute bottom-[30%] right-[20%] w-1.5 h-1.5 bg-[#00FF41] rounded-full shadow-[0_0_6px_#00FF41] animate-[ping_3s_infinite]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[60%] left-[70%] w-1 h-1 bg-white rounded-full animate-[ping_4s_infinite]" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Telemetry Readouts */}
        <div className="text-[11px] text-[#00FF41] flex flex-col gap-1.5 font-bold tracking-widest w-full">
          <div className="flex justify-between items-center bg-[#00FF41]/20 px-1 py-0.5 border border-[#00FF41]/40">
            <span>LINK:</span>
            <span className="text-white drop-shadow-[0_0_2px_#fff]">OPTIMAL</span>
          </div>
          <div className="flex justify-between"><span>LAT:</span> <span className="text-white">{telemetry.lat.toFixed(4)}°</span></div>
          <div className="flex justify-between"><span>LON:</span> <span className="text-white">{telemetry.lon.toFixed(4)}°</span></div>
          <div className="flex justify-between"><span>ALT:</span> <span className="text-white">{telemetry.alt.toFixed(2)} KM</span></div>
          <div className="flex justify-between"><span>VEL:</span> <span className="text-white">{telemetry.vel.toFixed(3)} V/S</span></div>
        </div>
      </div>

      {/* Live Operations Log */}
      <div className="mt-2 border-t-[2px] border-[#00FF41]/40 pt-3 flex flex-col gap-1 overflow-hidden h-[45px] relative">
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div 
              key={log + i} // ensure unique key for animation
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-[10px] text-[#00FF41]/80 leading-none"
            >
              <span className="text-white font-black">&gt; </span>{log}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
