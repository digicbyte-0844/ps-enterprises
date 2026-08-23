import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageSquare, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { services } from '../data/servicesData';

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
    const text = `Hi PS Safetynets! I calculated an estimate for ${activeService.title} on your website:%0A%0A• Dimensions: ${lengthFt}ft x ${heightFt}ft (${balconiesCount} Unit(s))%0A• Total Area: ${totalArea} ${isRunningFeet ? 'running ft' : 'sq.ft'}%0A• Estimated Price: ~₹${totalEstimate.toLocaleString('en-IN')}%0A%0APlease arrange a free doorstep inspection to confirm exact laser measurements.`;
    return `https://wa.me/919900980207?text=${text}`;
  };

  return (
    <section className="py-16 md:py-24 bg-sage-canvas dark:bg-[#080d0e] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pure-white/80 dark:bg-dark-card/90 backdrop-blur-sm border border-carbon/5 dark:border-dark-border mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-vivid-teal" />
            <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted">
              TRANSPARENT PRICING ESTIMATOR
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-carbon dark:text-dark-text tracking-tight font-display">
            Instant Cost Calculator.
          </h2>
          <p className="text-slate dark:text-dark-muted text-sm sm:text-base mt-3 leading-relaxed">
            Get an instant, transparent price estimate tailored to your balcony or turf dimensions with zero hidden charges.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-pure-white dark:bg-dark-card rounded-[36px] p-6 sm:p-10 border border-carbon/5 dark:border-dark-border shadow-subtle-hover">
          {/* Service Selector Chips */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted mb-3">
              1. Select Required Safety Solution
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {services.map((srv) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`p-3 rounded-[16px] text-left transition-all flex flex-col justify-between border ${
                    selectedServiceId === srv.id
                      ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon border-transparent shadow-md scale-[1.02]'
                      : 'bg-sage-canvas/30 dark:bg-dark-surface/60 text-carbon dark:text-dark-text border-carbon/5 dark:border-dark-border hover:bg-sage-canvas/60'
                  }`}
                >
                  <span className="text-xs font-bold leading-tight line-clamp-1">{srv.title}</span>
                  <span className="text-[10px] opacity-75 mt-1 font-medium">{srv.priceRange}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Dimension Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <label className="block text-xs font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted">
                2. Calibrate Dimensions
              </label>

              {/* Length Slider */}
              <div className="bg-sage-canvas/30 dark:bg-dark-surface/60 rounded-[24px] p-5 border border-carbon/5 dark:border-dark-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-carbon dark:text-dark-text">
                    Balcony Length (Width)
                  </span>
                  <span className="text-sm font-bold text-carbon dark:text-vivid-teal px-2.5 py-0.5 rounded-lg bg-pure-white dark:bg-dark-card border border-carbon/10 dark:border-dark-border">
                    {lengthFt} Feet
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="60"
                  value={lengthFt}
                  onChange={(e) => setLengthFt(Number(e.target.value))}
                  className="w-full h-2 bg-sage-canvas dark:bg-dark-card rounded-lg appearance-none cursor-pointer accent-carbon dark:accent-vivid-teal"
                />
                <div className="flex justify-between text-[11px] text-mist dark:text-dark-muted mt-1">
                  <span>4 ft (Standard Window)</span>
                  <span>60 ft (Large Terrace)</span>
                </div>
              </div>

              {/* Height Slider (if sq.ft) */}
              {!isRunningFeet && (
                <div className="bg-sage-canvas/30 dark:bg-dark-surface/60 rounded-[24px] p-5 border border-carbon/5 dark:border-dark-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-carbon dark:text-dark-text">
                      Balcony Height (Ceiling Clearance)
                    </span>
                    <span className="text-sm font-bold text-carbon dark:text-vivid-teal px-2.5 py-0.5 rounded-lg bg-pure-white dark:bg-dark-card border border-carbon/10 dark:border-dark-border">
                      {heightFt} Feet
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="20"
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value))}
                    className="w-full h-2 bg-sage-canvas dark:bg-dark-card rounded-lg appearance-none cursor-pointer accent-carbon dark:accent-vivid-teal"
                  />
                  <div className="flex justify-between text-[11px] text-mist dark:text-dark-muted mt-1">
                    <span>3 ft (Railing Only)</span>
                    <span>20 ft (Full Ceiling Enclosure)</span>
                  </div>
                </div>
              )}

              {/* Number of Balconies */}
              <div className="bg-sage-canvas/30 dark:bg-dark-surface/60 rounded-[24px] p-5 border border-carbon/5 dark:border-dark-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-carbon dark:text-dark-text">
                    Number of Balconies / Openings
                  </span>
                  <span className="text-sm font-bold text-carbon dark:text-vivid-teal px-2.5 py-0.5 rounded-lg bg-pure-white dark:bg-dark-card border border-carbon/10 dark:border-dark-border">
                    {balconiesCount} Unit{balconiesCount > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBalconiesCount(num)}
                      className={`flex-1 py-2 rounded-[12px] text-xs font-bold transition-all ${
                        balconiesCount === num
                          ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon shadow-sm'
                          : 'bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text border border-carbon/10 dark:border-dark-border'
                      }`}
                    >
                      {num} {num === 5 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Live Estimate Breakdown Card */}
            <div className="lg:col-span-5 bg-carbon dark:bg-dark-surface text-pure-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-pure-white/10 dark:border-dark-border shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-pure-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-vivid-teal">
                    Cost Estimate Breakdown
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-pure-white/10 text-pure-white/80">
                    5-Yr Warranty Included
                  </span>
                </div>

                <div className="my-6 space-y-3.5 text-xs">
                  <div className="flex justify-between items-center text-pure-white/80">
                    <span>Selected Solution:</span>
                    <span className="text-pure-white font-bold">{activeService.title}</span>
                  </div>

                  <div className="flex justify-between items-center text-pure-white/80">
                    <span>Total Calculated Coverage:</span>
                    <span className="text-pure-white font-bold">
                      {totalArea} {isRunningFeet ? 'Running Feet' : 'Sq. Feet'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-pure-white/80">
                    <span>Base Material & Labor Rate:</span>
                    <span className="text-pure-white font-bold">₹{activeService.basePrice} / {isRunningFeet ? 'rft' : 'sq.ft'}</span>
                  </div>

                  <div className="flex justify-between items-center text-pure-white/80">
                    <span>Pre-Installation Sanitization:</span>
                    <span className="text-vivid-teal font-semibold">
                      {sanitizationCost === 0 ? 'FREE with Package' : `₹${sanitizationCost}`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-pure-white/80">
                    <span>Doorstep Site Measurement:</span>
                    <span className="text-vivid-teal font-semibold">100% FREE</span>
                  </div>

                  {/* Total Calculated Estimate */}
                  <div className="pt-4 border-t border-pure-white/15">
                    <span className="text-[11px] text-pure-white/60 block mb-1">Estimated Project Total</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-vivid-teal font-display">
                        ₹{totalEstimate.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-pure-white/60 font-normal">
                        *All taxes & hardware included
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-pure-white/10 space-y-2.5">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-md text-xs sm:text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenQuote(activeService.title)}
                  className="w-full bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3 px-4 rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-sm text-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Free Inspection to Lock Price</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
