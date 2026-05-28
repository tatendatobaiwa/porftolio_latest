'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return; 
    }

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering an interactive element
      const isClickable = !!target.closest('a, button, input, select, textarea, .cursor-pointer, [role="button"]');
      setIsHovering(prev => prev !== isClickable ? isClickable : prev);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] will-change-transform print:hidden"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <div 
        className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
          isClicking 
            ? 'scale-90' 
            : 'scale-100'
        } ${
          isHovering 
            ? 'w-10 h-10 border-4 border-[#00FF41] bg-black/50 shadow-[6px_6px_0px_#00FF41]' 
            : 'w-4 h-4 border-2 border-white bg-[#00FF41] shadow-[2px_2px_0px_#00FF41]'
        }`}
      >
        {isHovering && (
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white shadow-[2px_2px_0px_#00FF41]" />
        )}
      </div>
    </motion.div>
  );
}
