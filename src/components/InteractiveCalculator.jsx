import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageSquare, ShieldCheck, Sparkles, HelpCircle, Phone, CheckCircle2 } from 'lucide-react';
import { services } from '../data/servicesData';
import WhatsAppIcon from './WhatsAppIcon';

export default function InteractiveCalculator({ onOpenQuote }) {
  const [selectedServiceId, setSelectedServiceId] = useState('pigeon-net');
  const [lengthFt, setLengthFt] = useState(15);
  const [heightFt, setHeightFt] = useState(8);
  const [balconiesCount, setBalconiesCount] = useState(1);
  const [includeSanitization, setIncludeSanitization] = useState(true);

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];
  const isRunningFeet = activeService.id === 'birds-spikes';

  // Calculations
  const areaPerUnit = isRunningFeet ? lengthFt : lengthFt * heightFt;
  const totalArea = areaPerUnit * balconiesCount;
  const baseCost = totalArea * activeService.basePrice;
  const sanitizationCost = includeSanitization ? (activeService.id === 'ducts-area' ? 0 : 499) : 0;
  const totalEstimate = Math.round(baseCost + sanitizationCost);

  const generateWhatsAppMessage = () => {
    const text = `Hi PS Safetynets! I calculated an estimate for ${activeService.title} on your website:

• Dimensions: ${lengthFt}ft x ${heightFt}ft (${balconiesCount} Unit(s))
• Total Area: ${totalArea} ${isRunningFeet ? 'running ft' : 'sq.ft'}
• Estimated Price: ~₹${totalEstimate.toLocaleString('en-IN')}

Please arrange a free doorstep laser inspection.`;
    return `https://wa.me/919900980207?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-14 sm:py-24 bg-sage-canvas dark:bg-[#080d0e] transition-colors duration-300 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pure-white/90 dark:bg-dark-card border-l-2 border-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border mb-3 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
              TRANSPARENT PRICING ESTIMATOR • HYDERABAD
            </span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-bold text-carbon dark:text-dark-text tracking-tight font-display leading-[1.1]">
            Instant Cost Calculator.
          </h2>
          <p className="text-slate dark:text-dark-muted text-xs sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Get an accurate, instant price estimate tailored to your balcony or turf dimensions with zero hidden charges.
          </p>
        </div>

        {/* Calculator Main Box (Sharp Format) */}
        <div className="bg-pure-white dark:bg-dark-card p-5 sm:p-9 border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover">
          
          {/* Service Selector Chips */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal mb-2.5">
              1. Select Required Safety Solution
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {services.map((srv) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`p-3 text-left transition-all flex flex-col justify-between border cursor-pointer ${
                    selectedServiceId === srv.id
                      ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon border-carbon dark:border-vivid-teal shadow-sm scale-[1.01]'
                      : 'bg-sage-canvas/30 dark:bg-dark-surface/60 text-carbon dark:text-dark-text border-carbon/10 dark:border-dark-border hover:bg-sage-canvas/60'
                  }`}
                >
                  <span className="text-xs font-bold leading-tight line-clamp-1">{srv.title}</span>
                  <span className="text-[10px] font-bold text-amber-500 dark:text-amber-400 mt-1">{srv.priceRange}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Dimension Inputs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal">
                2. Calibrate Balcony Dimensions
              </label>

              {/* Length Slider */}
              <div className="bg-sage-canvas/30 dark:bg-dark-surface/60 p-4 border border-carbon/10 dark:border-dark-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-carbon dark:text-dark-text">
                    Balcony Length (Width)
                  </span>
                  <span className="text-xs font-extrabold text-carbon dark:text-dark-text px-2.5 py-0.5 bg-pure-white dark:bg-dark-card border border-carbon/15">
                    {lengthFt} Feet
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="60"
                  value={lengthFt}
                  onChange={(e) => setLengthFt(Number(e.target.value))}
                  className="w-full h-2 bg-slate/20 dark:bg-dark-card appearance-none cursor-pointer accent-carbon dark:accent-vivid-teal"
                />
                <div className="flex justify-between text-[10px] text-slate dark:text-dark-muted mt-1 font-medium">
                  <span>4 ft (Standard Window)</span>
                  <span>60 ft (Large Terrace)</span>
                </div>
              </div>

              {/* Height Slider */}
              {!isRunningFeet && (
                <div className="bg-sage-canvas/30 dark:bg-dark-surface/60 p-4 border border-carbon/10 dark:border-dark-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-carbon dark:text-dark-text">
                      Balcony Height (Ceiling to Railing)
                    </span>
                    <span className="text-xs font-extrabold text-carbon dark:text-dark-text px-2.5 py-0.5 bg-pure-white dark:bg-dark-card border border-carbon/15">
                      {heightFt} Feet
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="20"
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value))}
                    className="w-full h-2 bg-slate/20 dark:bg-dark-card appearance-none cursor-pointer accent-carbon dark:accent-vivid-teal"
                  />
                  <div className="flex justify-between text-[10px] text-slate dark:text-dark-muted mt-1 font-medium">
                    <span>3 ft (Half Railing)</span>
                    <span>20 ft (Double Height)</span>
                  </div>
                </div>
              )}

              {/* Number of Units / Balconies */}
              <div className="bg-sage-canvas/30 dark:bg-dark-surface/60 p-4 border border-carbon/10 dark:border-dark-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-carbon dark:text-dark-text">
                    Number of Balconies / Units
                  </span>
                  <span className="text-xs font-extrabold text-carbon dark:text-dark-text px-2.5 py-0.5 bg-pure-white dark:bg-dark-card border border-carbon/15">
                    {balconiesCount} Unit{balconiesCount > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBalconiesCount(num)}
                      className={`flex-1 py-2 text-xs font-bold transition-all border cursor-pointer ${
                        balconiesCount === num
                          ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon border-carbon'
                          : 'bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text border-carbon/10 hover:bg-sage-canvas/40'
                      }`}
                    >
                      {num} {num === 1 ? 'Unit' : 'Units'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deep Sanitization Addon */}
              <div className="flex items-center justify-between p-3.5 bg-sage-canvas/40 dark:bg-dark-surface/80 border border-carbon/10">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="calc-sanitization"
                    checked={includeSanitization}
                    onChange={(e) => setIncludeSanitization(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="calc-sanitization" className="text-xs font-bold text-carbon dark:text-dark-text cursor-pointer">
                    Include Antimicrobial Balcony Pressure Washing (+₹499)
                  </label>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  Recommended
                </span>
              </div>
            </div>

            {/* Right Estimation Result Box */}
            <div className="lg:col-span-5 bg-carbon text-pure-white p-6 sm:p-8 border border-carbon flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-pure-white/15">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-vivid-teal">
                    ESTIMATED COST BREAKDOWN
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[9px] font-bold uppercase border border-emerald-400/30">
                    5-Year Warranty Included
                  </span>
                </div>

                <div className="space-y-2 py-4 text-xs">
                  <div className="flex justify-between text-pure-white/80">
                    <span>Solution:</span>
                    <strong className="text-pure-white">{activeService.title}</strong>
                  </div>
                  <div className="flex justify-between text-pure-white/80">
                    <span>Calculated Total Area:</span>
                    <strong className="text-pure-white">{totalArea} {isRunningFeet ? 'Running Ft' : 'Sq.Ft'}</strong>
                  </div>
                  <div className="flex justify-between text-pure-white/80">
                    <span>Unit Rate:</span>
                    <strong className="text-amber-400">₹{activeService.basePrice} / {isRunningFeet ? 'ft' : 'sq.ft'}</strong>
                  </div>
                  {includeSanitization && (
                    <div className="flex justify-between text-pure-white/80">
                      <span>Antimicrobial Sanitization:</span>
                      <strong className="text-emerald-400">₹{sanitizationCost}</strong>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-pure-white/15">
                  <div className="text-[10px] font-bold text-pure-white/70 uppercase">Approximate Estimate</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display mt-0.5">
                    ₹{totalEstimate.toLocaleString('en-IN')}*
                  </div>
                  <p className="text-[10px] text-pure-white/60 mt-1">
                    *Final price confirmed on-site after laser millimeter measurement. Includes materials, rigging, and stamped 5-year warranty card.
                  </p>
                </div>
              </div>

              <div className="pt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={() => onOpenQuote(`${activeService.title} - Approx ~₹${totalEstimate.toLocaleString('en-IN')}`)}
                  className="w-full py-3.5 px-4 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer border border-vivid-teal"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Laser Measurement</span>
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-[#25D366]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send Estimate to WhatsApp (9900980207)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
