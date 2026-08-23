import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Info, ShieldCheck, Sparkles, Star, Tag, Clock, ArrowRight } from 'lucide-react';
import { services } from '../data/servicesData';

export default function ServicesSection({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Solutions (5)' },
    { id: 'RESIDENTIAL', label: 'Residential & Balcony' },
    { id: 'COMMERCIAL', label: 'Commercial & Sports' },
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'RESIDENTIAL') {
      return ['pigeon-net', 'invisible-grill', 'birds-spikes'].includes(s.id);
    }
    if (activeCategory === 'COMMERCIAL') {
      return ['box-cricket-net', 'ducts-area', 'invisible-grill'].includes(s.id);
    }
    return true;
  });

  return (
    <section id="services" className="relative w-full bg-sage-canvas dark:bg-[#080d0e] py-14 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header (Sharp Square Tag) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pure-white/90 dark:bg-dark-card border-l-2 border-vivid-teal border-t border-r border-b border-carbon/10 dark:border-dark-border mb-2.5 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-dark-text">
                5 CORE SAFETY SOLUTIONS • HYDERABAD
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-carbon dark:text-dark-text tracking-tight leading-[1.1] font-display">
              Engineered safety systems. <br className="hidden sm:inline" />
              <span className="text-emerald-600 dark:text-vivid-teal">Zero aesthetic compromise.</span>
            </h2>
          </div>

          {/* Filter Pills (Sharp Square Edges) */}
          <div className="flex items-center gap-1.5 mt-4 md:mt-0 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[11px] sm:text-sm font-bold px-4 py-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon shadow-sm border border-carbon dark:border-vivid-teal'
                    : 'bg-pure-white/90 dark:bg-dark-card text-carbon dark:text-dark-text hover:bg-pure-white border border-carbon/15 dark:border-dark-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sharp Square Cards Grid (Clean Precision Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-pure-white dark:bg-dark-card border border-carbon/15 dark:border-dark-border shadow-subtle-hover hover:border-carbon/30 dark:hover:border-vivid-teal/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 1. High-Clarity Square Photographic Card Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-carbon">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-transparent to-carbon/30 z-10 pointer-events-none" />

                  {/* Top Left Sharp Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 bg-pure-white/95 dark:bg-dark-card/95 text-[10px] sm:text-[11px] font-bold text-carbon dark:text-dark-text uppercase tracking-wider shadow-sm border-l-2 border-emerald-500">
                      {service.badge}
                    </span>
                  </div>

                  {/* Top Right Rating Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-carbon/90 text-[10px] sm:text-[11px] font-bold text-amber-300 shadow-sm border border-white/10">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{service.rating}</span>
                    </span>
                  </div>

                  {/* Bottom Price Tag on Image (Gold Highlight) */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-carbon text-xs font-extrabold shadow-md border border-amber-300">
                      <Tag className="w-3 h-3" />
                      <span>{service.priceRange}</span>
                    </span>
                  </div>
                </div>

                {/* 2. Moving Ticker Marquee Strip (Sharp Square Format) */}
                <div className="bg-carbon text-white py-1.5 px-3 overflow-hidden border-t border-b border-white/10 flex items-center">
                  <div className="animate-marquee flex items-center gap-4 text-[10px] font-bold text-vivid-teal tracking-wide">
                    <span>✨ {service.tagline.toUpperCase()}</span>
                    <span>•</span>
                    <span className="text-white">INSTALL: {service.turnaround}</span>
                    <span>•</span>
                    <span className="text-amber-400">5-YEAR GUARANTEE</span>
                    <span>•</span>
                    {/* Seamless Loop Duplicate */}
                    <span>✨ {service.tagline.toUpperCase()}</span>
                    <span>•</span>
                    <span className="text-white">INSTALL: {service.turnaround}</span>
                    <span>•</span>
                    <span className="text-amber-400">5-YEAR GUARANTEE</span>
                    <span>•</span>
                  </div>
                </div>

                {/* 3. Card Typography & Specifications */}
                <div className="p-5 sm:p-6 space-y-2 text-left">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block">
                    {service.eyebrow}
                  </span>

                  <Link
                    to={`/services/${service.id}`}
                    className="block text-xl sm:text-2xl font-bold text-carbon dark:text-dark-text tracking-tight hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors font-display"
                  >
                    {service.title}
                  </Link>

                  <p className="text-slate dark:text-dark-muted text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Sharp Mini Spec Badges */}
                  <div className="grid grid-cols-2 gap-1.5 pt-2">
                    <div className="bg-sage-canvas/40 dark:bg-dark-surface/60 p-2.5 border-l-2 border-cyan-500 border-t border-r border-b border-carbon/5 dark:border-dark-border text-[11px]">
                      <span className="text-mist dark:text-dark-muted font-semibold block text-[9px] uppercase">Install Time</span>
                      <span className="text-carbon dark:text-dark-text font-bold">{service.turnaround}</span>
                    </div>
                    <div className="bg-sage-canvas/40 dark:bg-dark-surface/60 p-2.5 border-l-2 border-emerald-500 border-t border-r border-b border-carbon/5 dark:border-dark-border text-[11px]">
                      <span className="text-mist dark:text-dark-muted font-semibold block text-[9px] uppercase">Warranty</span>
                      <span className="text-carbon dark:text-dark-text font-bold text-emerald-600 dark:text-emerald-400">5-Year Stamped</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Sharp Card Bottom Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex items-center gap-2">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-sage-canvas/60 dark:bg-dark-surface hover:bg-sage-canvas text-carbon dark:text-dark-text text-xs sm:text-sm font-bold py-3 px-3 transition-colors border border-carbon/15 dark:border-dark-border text-center"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Specs</span>
                </Link>

                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-vivid-teal hover:bg-teal-hover text-carbon text-xs sm:text-sm font-bold py-3 px-3 transition-all shadow-sm group/btn cursor-pointer border border-vivid-teal"
                >
                  <span>Free Quote</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
