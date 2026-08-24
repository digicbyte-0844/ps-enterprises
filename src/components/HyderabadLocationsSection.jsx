import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { hyderabadZones } from '../data/locationsData';

export default function HyderabadLocationsSection({ onOpenQuote }) {
  const [selectedZone, setSelectedZone] = useState('ALL');

  const filteredZones = hyderabadZones.filter((z) => {
    if (selectedZone === 'ALL') return true;
    if (selectedZone === 'WEST' && z.zoneName.includes('West')) return true;
    if (selectedZone === 'NORTH' && z.zoneName.includes('North')) return true;
    if (selectedZone === 'EAST' && z.zoneName.includes('East')) return true;
    return false;
  });

  return (
    <section id="service-areas" className="relative w-full bg-pure-white dark:bg-dark-card py-16 md:py-24 border-t border-carbon/10 dark:border-dark-border text-left">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sage-canvas/60 dark:bg-dark-surface border-l-2 border-emerald-500 border-t border-r border-b border-carbon/10 dark:border-dark-border text-carbon dark:text-dark-text mb-3 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
              HYDERABAD SERVICE NETWORK & 30-MIN DISPATCH
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-carbon dark:text-dark-text tracking-tight font-display leading-[1.1]">
            Serving All Neighborhoods <br className="hidden sm:inline" />
            Across <span className="text-emerald-600 dark:text-vivid-teal">Hyderabad</span>.
          </h2>

          <p className="text-slate dark:text-dark-muted text-xs sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Our certified mobile installation units are stationed across Hyderabad to provide <strong>30-minute doorstep laser measurement</strong> and same-day installation.
          </p>

          {/* Zone Filter Tabs (Sharp Format) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6">
            {[
              { id: 'ALL', label: 'All Hyderabad Zones (25+ Areas)' },
              { id: 'WEST', label: 'HITEC City & West Hyderabad' },
              { id: 'NORTH', label: 'Secunderabad & North' },
              { id: 'EAST', label: 'East & Central Hyderabad' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedZone(tab.id)}
                className={`text-xs sm:text-sm font-bold px-3.5 py-2 transition-all cursor-pointer ${
                  selectedZone === tab.id
                    ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon shadow-sm border border-carbon dark:border-vivid-teal'
                    : 'bg-sage-canvas/40 dark:bg-dark-surface text-carbon dark:text-dark-text hover:bg-sage-canvas border border-carbon/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Zones Grid (Sharp Square Format) */}
        <div className="space-y-6 sm:space-y-8 mb-12">
          {filteredZones.map((zone, zIdx) => (
            <div
              key={zIdx}
              className="bg-sage-canvas/30 dark:bg-dark-surface p-5 sm:p-8 border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/10 dark:border-dark-border"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 sm:pb-5 border-b border-carbon/10 dark:border-dark-border gap-2">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block">
                    ZONE COVERAGE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-carbon dark:text-dark-text font-display mt-0.5">
                    {zone.zoneName}
                  </h3>
                  <p className="text-xs text-slate dark:text-dark-muted mt-0.5">
                    {zone.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text text-[11px] font-bold border border-carbon/10 shadow-2xs">
                    <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Avg. Dispatch: 20-30 Mins</span>
                  </span>
                </div>
              </div>

              {/* Location Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-4">
                {zone.locations.map((loc, lIdx) => (
                  <button
                    key={lIdx}
                    onClick={() => onOpenQuote(`Balcony Safety Netting at ${loc.name}, Hyderabad`)}
                    className="p-2.5 bg-pure-white dark:bg-dark-card hover:bg-carbon hover:text-pure-white text-carbon dark:text-dark-text border border-carbon/10 dark:border-dark-border text-left transition-all duration-200 group flex flex-col justify-between hover:translate-y-[-1px] shadow-2xs cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <MapPin className="w-3 h-3 text-emerald-500 group-hover:text-vivid-teal shrink-0" />
                        {loc.popular && (
                          <span className="text-[8px] font-extrabold px-1 py-0.2 bg-amber-400 text-carbon uppercase">
                            Hot
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-bold block leading-tight">{loc.name}</span>
                      <span className="text-[10px] text-slate dark:text-dark-muted group-hover:text-pure-white/70 block mt-0.5">
                        {loc.turnaround}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
