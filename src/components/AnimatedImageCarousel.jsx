import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AnimatedImageCarousel({
  images = [],
  title = '',
  badge = '',
  aspectRatio = 'aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10]',
  autoPlayInterval = 3200,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const validImages = images.length > 0 ? images : ['/images/pigeon-safety-net.jpg'];

  // Smooth uninterrupted continuous autoplay
  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [validImages.length, autoPlayInterval]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate/10 dark:bg-dark-surface shadow-xl border border-carbon/15 dark:border-dark-border group select-none">
      {/* Main Image Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
        {validImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} - View ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === currentIndex
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
          />
        ))}

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-carbon/20 z-20 pointer-events-none" />

        {/* Top Badge (Only the clean official guarantee tag, zero tacky "auto-cycling" tags) */}
        {badge && (
          <div className="absolute top-4 left-4 z-30">
            <span className="px-3 py-1 rounded-[12px] bg-pure-white/95 dark:bg-dark-card/95 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-carbon dark:text-dark-text tracking-wider uppercase border border-carbon/5 dark:border-dark-border shadow-md">
              {badge}
            </span>
          </div>
        )}

        {/* Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pure-white/90 dark:bg-dark-card/90 backdrop-blur-md text-carbon dark:text-dark-text flex items-center justify-center shadow-lg border border-carbon/10 dark:border-dark-border opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pure-white/90 dark:bg-dark-card/90 backdrop-blur-md text-carbon dark:text-dark-text flex items-center justify-center shadow-lg border border-carbon/10 dark:border-dark-border opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Bottom Minimal Dots */}
        {validImages.length > 1 && (
          <div className="absolute bottom-3 inset-x-4 z-30 flex items-center justify-center gap-1.5">
            {validImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 bg-vivid-teal shadow-md'
                    : 'w-1.5 bg-pure-white/40 hover:bg-pure-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Bar Below */}
      {validImages.length > 1 && (
        <div className="p-2.5 bg-pure-white/90 dark:bg-dark-card/90 backdrop-blur-md border-t border-carbon/5 dark:border-dark-border flex items-center justify-start gap-2 overflow-x-auto scrollbar-none">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-12 w-16 sm:h-13 sm:w-18 rounded-[10px] overflow-hidden shrink-0 border-2 transition-all ${
                idx === currentIndex
                  ? 'border-vivid-teal scale-105 shadow-sm'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
