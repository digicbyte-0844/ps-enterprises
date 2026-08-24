import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = '/images/balcony-before-mess.jpg',
  afterImage = '/images/pigeon-safety-net.jpg',
  beforeLabel = 'Before: Pest Mess & Hazard',
  afterLabel = 'After: 100% Invisible PS Protection',
  title = 'Interactive Protection Visualizer',
  subtitle = 'Watch the transformation sweep automatically or drag the slider to compare.',
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  // Smooth continuous automatic before-after oscillating sweep when not manually dragging
  useEffect(() => {
    if (isUserInteracting) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animateSweep = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      
      // Smooth sine wave oscillation between 20% and 80% (period 4.5 seconds)
      const sweep = 50 + 30 * Math.sin((elapsed / 4500) * 2 * Math.PI);
      setSliderPosition(sweep);
      
      animationRef.current = requestAnimationFrame(animateSweep);
    };

    animationRef.current = requestAnimationFrame(animateSweep);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isUserInteracting]);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchStart = (e) => {
    setIsUserInteracting(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = (e) => {
    setIsUserInteracting(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isUserInteracting) return;
    handleMove(e.clientX);
  };

  const handleInteractionEnd = () => {
    setTimeout(() => {
      setIsUserInteracting(false);
      startTimeRef.current = null;
    }, 3000);
  };

  return (
    <div className="w-full text-left">
      {/* Title & Subtitle */}
      {title && (
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
            REAL-WORLD TRANSFORMATION
          </span>
          <h3 className="text-xl sm:text-3xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
            {title}
          </h3>
          {subtitle && (
            <p className="text-slate dark:text-dark-muted text-xs sm:text-sm mt-1.5">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Comparison Slider Box with Sharp Square Borders */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleInteractionEnd}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[520px] overflow-hidden select-none cursor-ew-resize border border-carbon/15 dark:border-dark-border shadow-subtle-hover bg-carbon touch-pan-y"
      >
        {/* AFTER IMAGE (Background Layer) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* AFTER BADGE */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-carbon/90 backdrop-blur-md text-pure-white text-[11px] font-bold border-l-2 border-emerald-400 border-t border-r border-b border-pure-white/10 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-vivid-teal" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped Layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* BEFORE BADGE */}
          <div className="absolute top-4 left-4 z-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/90 backdrop-blur-md text-pure-white text-[11px] font-bold border-l-2 border-red-500 border-t border-r border-b border-red-500/20 shadow-sm">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span>{beforeLabel}</span>
            </div>
          </div>
        </div>

        {/* DIVIDER LINE & DRAGGABLE HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-[3px] h-full bg-pure-white shadow-lg" />
          
          <div
            className="absolute w-9 h-9 sm:w-10 sm:h-10 bg-pure-white text-carbon flex items-center justify-center shadow-xl border-2 border-carbon cursor-grab active:cursor-grabbing pointer-events-auto transition-transform hover:scale-110 active:scale-95"
            aria-label="Drag slider"
          >
            <div className="flex items-center gap-0.5 text-xs font-bold">
              <span>◀</span>
              <span>▶</span>
            </div>
          </div>
        </div>

        {/* Live Auto-Sweep Indicator Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="px-3 py-1 bg-carbon/80 backdrop-blur-md text-pure-white text-[10px] sm:text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-md border border-pure-white/10">
            <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
            <span>Auto-sweep active • Drag or touch to compare</span>
          </div>
        </div>
      </div>
    </div>
  );
}
