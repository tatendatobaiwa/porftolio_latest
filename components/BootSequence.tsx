'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const bootLines = [
  "BIOS Date 05/28/26 14:31:56 Ver 08.00.15",
  "CPU: Neo-Brutalist Processor, Speed: 3.4 GHz",
  "Memory Test: 32000000K OK",
  "Initializing Hardware... OK",
  "Mounting File System... OK",
  "Loading Kernel Modules...",
  "> astrodynamics_core.sys",
  "> deep_learning_engine.sys",
  "> computational_geometry.sys",
  "Establishing Secure Connection // PORT 8080",
  "Starting Tatenda_Tobaiwa.sh...",
  "ACCESS GRANTED."
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [isReadyForExit, setIsReadyForExit] = useState(false);

  useEffect(() => {
    // Check if we've already booted in this session to avoid annoyance
    if (sessionStorage.getItem('hasBooted')) {
      onComplete();
      return;
    }

    document.body.style.overflow = 'hidden';

    let currentLine = 0;
    
    // Add first line instantly
    setLines([bootLines[0]]);
    currentLine++;
    
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setLines(prev => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsReadyForExit(true);
          sessionStorage.setItem('hasBooted', 'true');
          document.body.style.overflow = 'auto';
          setTimeout(onComplete, 500); // Allow fade out animation
        }, 400); 
      }
    }, 120); // Fast sequence to be snappy
    
    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  const hasBooted = typeof window !== 'undefined' ? sessionStorage.getItem('hasBooted') : false;
  if (hasBooted && lines.length === 0) return null;

  return (
    <AnimatePresence>
      {!isReadyForExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="fixed inset-0 z-[99999] bg-[#05050A] text-[#00FF41] font-mono p-4 sm:p-8 flex flex-col justify-start items-start pointer-events-none"
        >
          <div className="max-w-3xl w-full">
            {lines.map((line, idx) => (
              <div key={idx} className="mb-1 text-sm sm:text-base md:text-lg">
                {line}
              </div>
            ))}
            {lines.length < bootLines.length && (
              <div className="w-2.5 h-4 sm:h-5 bg-[#00FF41] animate-pulse mt-1 inline-block" />
            )}
            {lines.length >= bootLines.length && (
              <div className="w-2.5 h-4 sm:h-5 bg-[#00FF41] animate-pulse mt-1 inline-block" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
