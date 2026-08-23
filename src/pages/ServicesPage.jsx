import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Clock,
  CheckCircle2,
  Tag,
  Star
} from 'lucide-react';
import { services } from '../data/servicesData';
import HyderabadLocationsSection from '../components/HyderabadLocationsSection';

export default function ServicesPage({ onOpenQuote }) {
  const [filter, setFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Services (5)' },
    { id: 'RESIDENTIAL', label: 'Residential & Balcony' },
    { id: 'SPORTS', label: 'Sports & Turf Nets' },
    { id: 'UTILITY', label: 'Building Shafts & Ducts' },
    { id: 'PEST', label: 'Pest Deterrents' }
  ];

  const filteredServices = services.filter((s) => {
    if (filter === 'ALL') return true;
    if (filter === 'RESIDENTIAL') return ['pigeon-net', 'invisible-grill', 'birds-spikes'].includes(s.id);
    if (filter === 'SPORTS') return s.id === 'box-cricket-net';
    if (filter === 'UTILITY') return s.id === 'ducts-area';
    if (filter === 'PEST') return ['pigeon-net', 'birds-spikes', 'ducts-area'].includes(s.id);
    return true;
  });

  return (
    <div className="pt-24 sm:pt-36 pb-24 bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER WITH SHARP SQUARE TAG & MOVING MARQUEE */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          
          {/* Sharp Header Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pure-white/90 dark:bg-dark-card border-l-2 border-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border mb-2.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
              5 CERTIFIED SAFETY SOLUTIONS • HYDERABAD HQ
            </span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-carbon dark:text-dark-text tracking-tight leading-[1.1] font-display">
            Our Safety Portfolio.
          </h1>

          {/* Continuous Moving Letters/Fonts Marquee Bar (Sharp Square) */}
          <div className="mt-3.5 overflow-hidden py-2 px-3 bg-carbon text-pure-white dark:bg-dark-card/90 border border-carbon/15 dark:border-dark-border max-w-2xl mx-auto flex items-center shadow-sm">
            <div className="animate-marquee flex items-center gap-6 text-[11px] sm:text-xs font-bold text-vivid-teal tracking-wide">
              <span>⚡ 30-MIN RAPID HYDERABAD DISPATCH</span>
              <span>•</span>
              <span className="text-amber-300">5-YEAR OFFICIAL GUARANTEE</span>
              <span>•</span>
              <span className="text-emerald-400">SS 316 MARINE GRADE CABLES</span>
              <span>•</span>
              <span className="text-white">FREE DOORSTEP MEASUREMENT</span>
              <span>•</span>
              <span className="text-cyan-300">400KG+ TENSILE FALL SAFETY</span>
              <span>•</span>
              {/* Duplicate for seamless infinite loop */}
              <span>⚡ 30-MIN RAPID HYDERABAD DISPATCH</span>
              <span>•</span>
              <span className="text-amber-300">5-YEAR OFFICIAL GUARANTEE</span>
              <span>•</span>
              <span className="text-emerald-400">SS 316 MARINE GRADE CABLES</span>
              <span>•</span>
              <span className="text-white">FREE DOORSTEP MEASUREMENT</span>
              <span>•</span>
              <span className="text-cyan-300">400KG+ TENSILE FALL SAFETY</span>
              <span>•</span>
            </div>
          </div>

          {/* Sharp Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-[11px] sm:text-sm font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon shadow-sm border border-carbon dark:border-vivid-teal'
                    : 'bg-pure-white/90 dark:bg-dark-card text-carbon/90 dark:text-dark-text hover:bg-pure-white border border-carbon/15 dark:border-dark-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SERVICES LISTING (SHARP SQUARE CARDS) */}
        {/* ========================================================================= */}
        <div className="space-y-6 sm:space-y-10 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-pure-white dark:bg-dark-card overflow-hidden border border-carbon/15 dark:border-dark-border shadow-subtle-hover group text-left"
            >
              
              {/* ------------------------------------------------------------------- */}
              {/* MOBILE VIEW (lg:hidden): SHARP SQUARE WITH MOVING TICKER */}
              {/* ------------------------------------------------------------------- */}
              <div className="lg:hidden flex flex-col">
                {/* Sharp Image Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-carbon">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-transparent to-carbon/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 bg-pure-white/95 text-[10px] font-bold text-carbon uppercase shadow-sm border-l-2 border-emerald-500">
                      {service.badge}
                    </span>
                  </div>

                  {/* Bottom Text Over Image: Title & Gold Price Tag */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                        {service.eyebrow}
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-tight font-display">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-xs font-extrabold text-carbon bg-amber-400 px-2.5 py-1 shadow-sm shrink-0 border border-amber-300">
                      {service.priceRange}
                    </span>
                  </div>
                </div>

                {/* Moving Animated Marquee */}
                <div className="bg-carbon text-white py-1.5 px-3 overflow-hidden border-t border-b border-white/10 flex items-center">
                  <div className="animate-marquee flex items-center gap-4 text-[10px] font-bold text-vivid-teal">
                    <span>✨ {service.tagline.toUpperCase()}</span>
                    <span>•</span>
                    <span className="text-white">INSTALL: {service.turnaround}</span>
                    <span>•</span>
                    <span className="text-amber-300">RATING: ★ {service.rating} ({service.reviewsCount}+)</span>
                    <span>•</span>
                    {/* Duplicate */}
                    <span>✨ {service.tagline.toUpperCase()}</span>
                    <span>•</span>
                    <span className="text-white">INSTALL: {service.turnaround}</span>
                    <span>•</span>
                    <span className="text-amber-300">RATING: ★ {service.rating} ({service.reviewsCount}+)</span>
                    <span>•</span>
                  </div>
                </div>

                {/* Minimal Sharp Action Buttons */}
                <div className="p-3.5 flex items-center gap-2 bg-pure-white dark:bg-dark-card">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-carbon hover:bg-black text-pure-white text-xs font-bold py-3 px-3 transition-all border border-carbon"
                  >
                    <span>View Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-vivid-teal" />
                  </Link>

                  <button
                    onClick={() => onOpenQuote(`${service.title} - Free Site Quote`)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-vivid-teal hover:bg-teal-hover text-carbon text-xs font-bold py-3 px-3 transition-all shadow-sm border border-vivid-teal cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Quote</span>
                  </button>
                </div>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* DESKTOP VIEW (hidden lg:grid): SHARP 2-COLUMN ARCHITECTURAL CARD */}
              {/* ------------------------------------------------------------------- */}
              <div className="hidden lg:grid grid-cols-12 items-stretch">
                {/* Left Sharp Image Section */}
                <div className="col-span-5 relative min-h-[300px] bg-slate/10 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-pure-white/95 dark:bg-dark-card/95 text-[11px] font-bold text-carbon dark:text-dark-text tracking-wider uppercase border-l-2 border-emerald-500 shadow-sm">
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="px-3 py-1 bg-amber-400 text-carbon font-extrabold text-xs shadow-md border border-amber-300">
                      {service.priceRange}
                    </span>
                  </div>
                </div>

                {/* Right Content Section */}
                <div className="col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal">
                        {service.eyebrow}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 bg-sage-canvas dark:bg-dark-surface text-carbon dark:text-dark-text flex items-center gap-1 border border-carbon/10">
                        <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        <span>Install: {service.turnaround}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-carbon dark:text-dark-text tracking-tight mb-1 font-display group-hover:text-emerald-600 dark:group-hover:text-vivid-teal transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-emerald-600 dark:text-vivid-teal font-bold text-xs sm:text-sm mb-2.5">
                      {service.shortTitle} — {service.tagline}
                    </p>

                    <p className="text-slate dark:text-dark-muted text-sm leading-relaxed mb-4">
                      {service.fullDescription || service.description}
                    </p>

                    {/* Sharp Spec Matrix */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {service.specs.slice(0, 4).map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-sage-canvas/40 dark:bg-dark-surface/60 p-2.5 border-l-2 border-cyan-500 border-t border-r border-b border-carbon/5 dark:border-dark-border text-xs flex flex-col justify-between"
                        >
                          <span className="text-mist dark:text-dark-muted text-[10px] uppercase tracking-wider font-bold">
                            {spec.label}
                          </span>
                          <span className="text-carbon dark:text-dark-text font-bold text-xs mt-0.5 truncate">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-gray-100 dark:border-dark-border flex items-center gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-carbon hover:bg-black text-pure-white text-xs sm:text-sm font-bold py-3.5 px-4 transition-all shadow-xs border border-carbon"
                    >
                      <span>View Specifications & Packages</span>
                      <ArrowRight className="w-4 h-4 text-vivid-teal" />
                    </Link>

                    <button
                      onClick={() => onOpenQuote(`${service.title} - Site Visit Quote`)}
                      className="inline-flex items-center justify-center gap-1.5 bg-vivid-teal hover:bg-teal-hover text-carbon text-xs sm:text-sm font-bold py-3.5 px-5 transition-all shadow-sm border border-vivid-teal cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Free Quote</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. SIDE-BY-SIDE ENGINEERING SPECIFICATION MATRIX (SHARP FORMAT) */}
        {/* ========================================================================= */}
        <div className="bg-pure-white dark:bg-dark-card p-5 sm:p-10 border border-carbon/15 dark:border-dark-border shadow-subtle-hover mb-16">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
              ENGINEERING MATRIX
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
              Compare All 5 Safety Systems.
            </h3>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-carbon/20 dark:border-dark-border bg-sage-canvas/30 dark:bg-dark-surface">
                  <th className="py-3 px-3 font-bold text-carbon dark:text-dark-text uppercase text-[10px] tracking-wider">Solution</th>
                  <th className="py-3 px-3 font-bold text-carbon dark:text-dark-text uppercase text-[10px] tracking-wider">Core Material</th>
                  <th className="py-3 px-3 font-bold text-carbon dark:text-dark-text uppercase text-[10px] tracking-wider">Tensile Capacity</th>
                  <th className="py-3 px-3 font-bold text-carbon dark:text-dark-text uppercase text-[10px] tracking-wider">Pricing</th>
                  <th className="py-3 px-3 font-bold text-carbon dark:text-dark-text uppercase text-[10px] tracking-wider">Warranty</th>
                  <th className="py-3 px-3 font-bold text-carbon dark:text-dark-text uppercase text-[10px] tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
                {services.map((item) => (
                  <tr key={item.id} className="hover:bg-sage-canvas/30 dark:hover:bg-dark-surface transition-colors">
                    <td className="py-3.5 px-3 font-bold text-carbon dark:text-dark-text">{item.title}</td>
                    <td className="py-3.5 px-3 text-slate dark:text-dark-muted text-xs">{item.specs[0]?.value}</td>
                    <td className="py-3.5 px-3 text-slate dark:text-dark-muted text-xs">{item.specs[2]?.value}</td>
                    <td className="py-3.5 px-3 text-amber-600 dark:text-amber-300 font-extrabold">{item.priceRange}</td>
                    <td className="py-3.5 px-3">
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[10px] border border-emerald-300 dark:border-emerald-800">
                        {item.badge}
                      </span>
                    </td>
                    <td className="py-3.5 px-3">
                      <Link
                        to={`/services/${item.id}`}
                        className="text-xs font-bold text-carbon dark:text-vivid-teal hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. HYDERABAD LOCAL SEO SECTION */}
        {/* ========================================================================= */}
        <HyderabadLocationsSection onOpenQuote={onOpenQuote} />
      </div>
    </div>
  );
}
