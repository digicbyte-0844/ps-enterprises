import React, { useState } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Sparkles, ArrowRight, ShieldCheck, Filter, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const galleryItems = [
    {
      id: 'pigeon-net',
      title: 'Luxury Balcony Monofilament Netting',
      category: 'Balcony',
      image: '/images/pigeon-safety-net.jpg',
      tag: '100% Invisible • 5-Yr Warranty'
    },
    {
      id: 'invisible-grill-toddler',
      title: 'Penthouse Child-Safe SS 316 Invisible Grills',
      category: 'Invisible Grill',
      image: '/images/invisible-grill-toddler.jpg',
      tag: 'Toddler Safety • 400kg+'
    },
    {
      id: 'box-cricket-after',
      title: 'Commercial Rooftop Box Cricket Arena',
      category: 'Sports Turf',
      image: '/images/box-cricket-after.jpg',
      tag: '150km/h Impact Enclosure'
    },
    {
      id: 'invisible-grill',
      title: 'Penthouse SS 316 Invisible Grills',
      category: 'Invisible Grill',
      image: '/images/invisible-grill.jpg',
      tag: 'Marine Grade Cable'
    },
    {
      id: 'box-cricket-net',
      title: 'Multi-Sport Turf Practice Net Enclosure',
      category: 'Sports Turf',
      image: '/images/box-cricket-net.jpg',
      tag: 'Double-Braided Twine'
    },
    {
      id: 'duct-area-after',
      title: 'Commercial Tower Sanitized Shaft Netting',
      category: 'Duct Area',
      image: '/images/duct-area-after.jpg',
      tag: 'Zipper Access Port'
    },
    {
      id: 'bird-spikes-after',
      title: 'AC Outdoor Unit Polycarbonate SS 304 Spikes',
      category: 'Bird Spikes',
      image: '/images/bird-spikes-after.jpg',
      tag: 'Humane Anti-Perch'
    },
    {
      id: 'hero-balcony',
      title: 'Panoramic High-Rise Balcony Protection',
      category: 'Balcony',
      image: '/images/hero-balcony.jpg',
      tag: 'Sunset Skyline View'
    },
    {
      id: 'ducts-area-net',
      title: 'High-Rise Vertical Duct & Shaft Netting',
      category: 'Duct Area',
      image: '/images/ducts-area-net.jpg',
      tag: 'Pest Quarantine'
    },
    {
      id: 'bird-spikes',
      title: 'Window Ledge & Parapet SS 304 Bird Spikes',
      category: 'Bird Spikes',
      image: '/images/bird-spikes.jpg',
      tag: 'Zero Perching'
    },
    {
      id: 'technician-install',
      title: 'Certified Rigging & Laser Calibration',
      category: 'Engineering',
      image: '/images/technician-install.jpg',
      tag: 'Rope Access Certified'
    },
    {
      id: 'balcony-after-clean',
      title: 'Pristine Balcony After Net Installation',
      category: 'Balcony',
      image: '/images/balcony-after-clean.jpg',
      tag: 'Clean & Safe'
    }
  ];

  const categories = [
    { id: 'ALL', label: 'All Photos (12)' },
    { id: 'Balcony', label: 'Balcony Safety Nets' },
    { id: 'Invisible Grill', label: 'Invisible Grills' },
    { id: 'Sports Turf', label: 'Sports Turfs' },
    { id: 'Duct Area', label: 'Duct Shafts' },
    { id: 'Bird Spikes', label: 'Bird Spikes' },
    { id: 'Engineering', label: 'Certified Rigging' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in text-left">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pure-white/90 dark:bg-dark-card border-l-2 border-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
              ARCHITECTURAL TRANSFORMATION PORTFOLIO
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-carbon dark:text-dark-text tracking-tight leading-[1.1] font-display">
            Installation Gallery.
          </h1>
          <p className="text-slate dark:text-dark-muted text-xs sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Real installations across residential high-rises, luxury penthouses, commercial towers, and multi-sport turfs in Hyderabad.
          </p>

          {/* Category Filter Pills (Sharp Format) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs sm:text-sm font-bold px-3.5 py-2 transition-all cursor-pointer ${
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

        {/* Real-World Before / After Showcase */}
        <div className="space-y-10 sm:space-y-14 mb-16">
          <BeforeAfterSlider
            beforeImage="/images/box-cricket-before.jpg"
            afterImage="/images/box-cricket-after.jpg"
            beforeLabel="Before: Empty Unused Terrace"
            afterLabel="After: Enclosed Box Cricket Arena"
            title="Box Cricket Arena Transformation"
            subtitle="Drag the slider to see how a bare building rooftop is converted into a floodlit box cricket turf."
          />

          <BeforeAfterSlider
            beforeImage="/images/invisible-grill-before.jpg"
            afterImage="/images/invisible-grill-toddler.jpg"
            beforeLabel="Before: Rusted Iron Cage Bars"
            afterLabel="After: Safe & Panoramic SS 316 Invisible Grills"
            title="Invisible Grill High-Rise Upgrade"
            subtitle="Replace heavy cage bars with child-safe, 400kg+ tensile SS 316 invisible grills without blocking daylight."
          />

          <BeforeAfterSlider
            beforeImage="/images/bird-spikes-before.jpg"
            afterImage="/images/bird-spikes-after.jpg"
            beforeLabel="Before: Pigeon Dropping Hazard"
            afterLabel="After: Spotless & Protected with Bird Spikes"
            title="Humane Bird Spikes on AC Compressor"
            subtitle="Eliminate roosting, foul droppings, and noise on window ledges and air conditioning units humanely."
          />

          <BeforeAfterSlider
            beforeImage="/images/duct-area-before.jpg"
            afterImage="/images/duct-area-after.jpg"
            beforeLabel="Before: Infested Utility Shaft"
            afterLabel="After: Sanitized Shaft with Zipper Access Net"
            title="Utility Duct Shaft Sanitization & Enclosure"
            subtitle="Deep antimicrobial fogging combined with industrial zippered access netting for building shafts."
          />
        </div>

        {/* Gallery Grid (Sharp Square Format) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-pure-white dark:bg-dark-card overflow-hidden border border-carbon/15 dark:border-dark-border shadow-subtle-hover flex flex-col justify-between hover:border-carbon/30 transition-all"
            >
              <div className="relative aspect-[4/3] bg-slate/10 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-pure-white/95 dark:bg-dark-card/95 text-[10px] sm:text-[11px] font-bold text-carbon dark:text-dark-text uppercase tracking-wider border-l-2 border-emerald-500 shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block">
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-carbon dark:text-dark-text font-display mt-0.5">
                    {item.title}
                  </h4>
                </div>
                <button
                  onClick={() => onOpenQuote(`${item.title} - Site Quote`)}
                  className="shrink-0 px-3 py-1.5 bg-vivid-teal hover:bg-teal-hover text-carbon text-xs font-bold transition-all shadow-sm border border-vivid-teal cursor-pointer"
                >
                  Free Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
