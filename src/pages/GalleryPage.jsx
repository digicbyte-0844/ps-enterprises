import React, { useState } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Sparkles, ZoomIn, X, ArrowRight, ShieldCheck, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryPage({ onOpenQuote }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const galleryItems = [
    {
      id: 'pigeon-net',
      title: 'Luxury Balcony Monofilament Netting',
      category: 'Balcony',
      image: '/images/pigeon-safety-net.jpg',
      tag: '100% Invisible'
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
      tag: 'Sunset Skyline'
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
    { id: 'Engineering', label: 'Certified Installation' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pure-white/80 dark:bg-dark-card border border-carbon/5 dark:border-dark-border mb-3">
            <Sparkles className="w-3.5 h-3.5 text-vivid-teal" />
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted">
              ARCHITECTURAL PORTFOLIO
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-carbon dark:text-dark-text tracking-tight leading-[1.08] font-display">
            Installation Gallery.
          </h1>
          <p className="text-slate dark:text-dark-muted text-sm sm:text-base mt-3 leading-relaxed">
            Real installations across residential high-rises, luxury penthouses, commercial towers, and multi-sport turfs.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-[16px] transition-all ${
                  activeCategory === cat.id
                    ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon shadow-sm scale-105'
                    : 'bg-pure-white/80 dark:bg-dark-card text-carbon dark:text-dark-text hover:bg-pure-white dark:hover:bg-dark-surface border border-carbon/5 dark:border-dark-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Real-World Before / After Showcase */}
        <div className="space-y-12 mb-16">
          <BeforeAfterSlider
            beforeImage="/images/box-cricket-before.jpg"
            afterImage="/images/box-cricket-after.jpg"
            beforeLabel="Before: Empty Unused Terrace"
            afterLabel="After: Enclosed Box Cricket Arena"
            title="Box Cricket Arena Transformation"
            subtitle="Drag the slider to see how a bare, unutilized building rooftop is converted into a floodlit, high-yield box cricket turf."
          />

          <BeforeAfterSlider
            beforeImage="/images/invisible-grill-before.jpg"
            afterImage="/images/invisible-grill-toddler.jpg"
            beforeLabel="Before: Rusted Iron Cage Bars"
            afterLabel="After: Safe & Panoramic SS 316 Invisible Grills"
            title="Invisible Grill High-Rise Upgrade"
            subtitle="Replace oppressive cage bars with elegant, child-safe, 400kg+ tensile SS 316 invisible grills without blocking daylight."
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-pure-white dark:bg-dark-card rounded-[32px] sm:rounded-[36px] overflow-hidden border border-carbon/10 dark:border-dark-border shadow-subtle-hover flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-slate/10 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-[12px] bg-pure-white/95 dark:bg-dark-card/95 backdrop-blur-md text-[11px] font-bold text-carbon dark:text-dark-text uppercase border border-carbon/5 dark:border-dark-border shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-carbon dark:text-dark-text font-display">{item.title}</h3>
                  <span className="text-xs text-mist dark:text-dark-muted font-medium">{item.tag}</span>
                </div>

                <button
                  onClick={() => onOpenQuote(item.title)}
                  className="text-xs font-bold text-vivid-teal hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
