'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedY: number;
}

export function GalaxyParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const colors = ['#00FF41', '#ffffff', '#60a5fa', '#a855f7', '#ff00ff'];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120
    };

    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    function init() {
      if (!canvas) return;
      particlesArray = [];
      // Calculate particle count based on screen size but cap at maximum 100 for potato PCs
      const calculatedParticles = Math.floor((canvas.width * canvas.height) / 10000);
      const numberOfParticles = Math.min(calculatedParticles, 120);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        // Favor green and white for the main theme
        const color = Math.random() > 0.4 ? '#00FF41' : colors[Math.floor(Math.random() * colors.length)];
        const speedY = (Math.random() * 0.3) + 0.1;
        
        particlesArray.push({
          x,
          y,
          size,
          color,
          speedY
        });
      }
    }

    let animationFrameId: number;

    function animate() {
      if (!canvas || !ctx) return;
      
      // Clear with slight trailing effect for motion blur
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];

        // Interaction with mouse (push particles away)
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = (dx / distance) * force * 3;
          const pushY = (dy / distance) * force * 3;
          p.x += pushX;
          p.y += pushY;
        }

        // Base drift
        p.y -= p.speedY;

        // Apply scroll velocity (parallax)
        p.y -= scrollVelocity * p.speedY * 0.5;

        // Boundary wrapping
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        } else if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        
        // Draw particle
        ctx.beginPath();
        ctx.rect(p.x, p.y, p.size * 1.5, p.size * 1.5);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Optimize glow: Don't use shadowBlur, draw a larger transparent rect
        if (p.size > 1.5) {
          ctx.beginPath();
          // Use basic alpha hex (e.g. 33 = ~20% opacity)
          ctx.fillStyle = p.color + '33';
          ctx.rect(p.x - 2, p.y - 2, (p.size * 1.5) + 4, (p.size * 1.5) + 4);
          ctx.fill();
        }
      }

      // Dampen scroll velocity
      scrollVelocity *= 0.9;
      
      animationFrameId = requestAnimationFrame(animate);
    }

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 opacity-70 mix-blend-screen print:hidden"
    />
  );
}
