import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, Phone, MessageSquare, Tag, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onOpenQuote }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!service) return null;

  const gallery = service.galleryImages || [service.image];

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-carbon/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Modal Window */}
        <div className="relative bg-pure-white dark:bg-dark-card w-full max-w-3xl rounded-[36px] overflow-hidden shadow-2xl border border-carbon/5 dark:border-dark-border my-8 text-carbon dark:text-dark-text">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-pure-white/90 dark:bg-dark-surface text-carbon dark:text-dark-text hover:bg-pure-white flex items-center justify-center border border-carbon/10 dark:border-dark-border shadow-sm transition-all duration-200"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Banner with Gallery Carousel */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate/10 group">
            {gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${service.title} - ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  idx === activeImgIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/30 to-transparent" />

            {/* Carousel Nav Arrows */}
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-carbon/60 text-pure-white flex items-center justify-center hover:bg-carbon transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-carbon/60 text-pure-white flex items-center justify-center hover:bg-carbon transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-6 sm:left-8 right-6">
              <span className="inline-block text-[11px] font-bold uppercase tracking-eyebrow text-vivid-teal mb-2">
                {service.eyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-pure-white tracking-tight font-display">
                {service.title}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-pure-white/90 text-xs sm:text-sm">{service.shortTitle}</span>
                <span className="text-vivid-teal text-xs font-bold">• {service.priceRange}</span>
              </div>
            </div>

            {/* Thumbnail Dots */}
            {gallery.length > 1 && (
              <div className="absolute top-5 left-5 z-20 flex items-center gap-1.5 bg-carbon/70 backdrop-blur-md px-2.5 py-1 rounded-full text-pure-white text-[10px]">
                {activeImgIndex + 1} / {gallery.length}
              </div>
            )}
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-eyebrow text-mist dark:text-dark-muted mb-2">
                Overview & Application
              </h4>
              <p className="text-carbon/90 dark:text-dark-text/90 text-sm sm:text-base leading-relaxed font-normal">
                {service.fullDescription || service.description}
              </p>
            </div>

            {/* Specifications Grid */}
            {service.specs && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-eyebrow text-mist dark:text-dark-muted mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="bg-sage-canvas/40 dark:bg-dark-surface/60 rounded-[16px] p-3.5 border border-carbon/5 dark:border-dark-border flex flex-col justify-between"
                    >
                      <span className="text-[11px] uppercase tracking-wider text-mist dark:text-dark-muted font-medium">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-carbon dark:text-dark-text mt-1">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            {service.features && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-eyebrow text-mist dark:text-dark-muted mb-3">
                  Engineering & Safety Highlights
                </h4>
                <ul className="space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-carbon/85 dark:text-dark-text/85">
                      <div className="w-5 h-5 rounded-full bg-vivid-teal/20 text-carbon dark:text-vivid-teal flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-gray-100 dark:border-dark-border flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(service.title);
                }}
                className="w-full sm:flex-1 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3.5 px-6 rounded-[12px] transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <span>Book Free Measurement for this</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                  service.title
                )}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-[12px] bg-carbon dark:bg-dark-surface text-pure-white text-sm font-semibold hover:bg-black transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-vivid-teal" />
                <span>WhatsApp Expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
