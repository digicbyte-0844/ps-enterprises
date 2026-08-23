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
    <section id="service-areas" className="relative w-full bg-pure-white dark:bg-dark-card py-20 md:py-28 border-t border-carbon/5 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-canvas/60 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-carbon dark:text-dark-text mb-4 shadow-xs">
            <MapPin className="w-4 h-4 text-vivid-teal" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-carbon dark:text-vivid-teal">
              HYDERABAD SERVICE NETWORK & SAME-DAY DISPATCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-carbon dark:text-dark-text tracking-tight leading-[1.1]">
            Serving All Neighborhoods <br className="hidden sm:inline" />
            Across <span className="font-semibold text-carbon dark:text-vivid-teal">Hyderabad</span>.
          </h2>

          <p className="text-slate dark:text-dark-muted text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Our certified mobile rigging teams are strategically stationed across Hyderabad to provide <strong>30-minute laser measurement</strong> and same-day installation.
          </p>

          {/* Zone Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'ALL', label: 'All Hyderabad Zones (25+ Areas)' },
              { id: 'WEST', label: 'HITEC City & West Hyderabad' },
              { id: 'NORTH', label: 'Secunderabad & North' },
              { id: 'EAST', label: 'East & Central Hyderabad' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedZone(tab.id)}
                className={`text-xs sm:text-sm font-medium px-4 py-2.5 rounded-[16px] transition-all ${
                  selectedZone === tab.id
                    ? 'bg-carbon text-pure-white shadow-sm'
                    : 'bg-sage-canvas/40 dark:bg-dark-surface text-carbon dark:text-dark-text hover:bg-sage-canvas'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Zones Grid */}
        <div className="space-y-8 mb-16">
          {filteredZones.map((zone, zIdx) => (
            <div
              key={zIdx}
              className="bg-sage-canvas/30 dark:bg-dark-surface rounded-[36px] p-6 sm:p-9 border border-carbon/5 dark:border-dark-border"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-carbon/10 dark:border-dark-border gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-eyebrow text-mist dark:text-dark-muted block mb-1">
                    ZONE COVERAGE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-carbon dark:text-dark-text tracking-tight">
                    {zone.zoneName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate dark:text-dark-muted mt-0.5">
                    {zone.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text text-xs font-semibold border border-carbon/5 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-vivid-teal" />
                    <span>Avg. Response: 20-30 Mins</span>
                  </span>
                </div>
              </div>

              {/* Location Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-6">
                {zone.locations.map((loc, lIdx) => (
                  <button
                    key={lIdx}
                    onClick={() => onOpenQuote(`Balcony Safety Netting at ${loc.name}, Hyderabad`)}
                    className="p-3 rounded-[16px] bg-pure-white dark:bg-dark-card hover:bg-carbon hover:text-pure-white text-carbon dark:text-dark-text border border-carbon/5 dark:border-dark-border text-left transition-all duration-200 group flex flex-col justify-between hover:translate-y-[-2px] shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <MapPin className="w-3.5 h-3.5 text-vivid-teal group-hover:text-vivid-teal shrink-0" />
                        {loc.popular && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-vivid-teal/20 group-hover:bg-pure-white/20 text-carbon group-hover:text-pure-white dark:text-vivid-teal font-bold uppercase">
                            Fast Dispatch
                          </span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-bold tracking-tight">
                        {loc.name}
                      </div>
                    </div>
                    <div className="text-[10px] text-mist group-hover:text-pure-white/80 dark:text-dark-muted mt-2 flex items-center justify-between">
                      <span>PIN {loc.pin}</span>
                      <span className="font-semibold">{loc.avgArrival}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hyderabad Quick Connect Strip */}
        <div className="bg-carbon text-pure-white rounded-[36px] p-6 sm:p-10 border border-carbon shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pure-white/10 text-vivid-teal text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HYDERABAD HELPLINE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Need Same-Day Doorstep Measurement in Hyderabad?
            </h3>
            <p className="text-pure-white/80 text-xs sm:text-sm mt-1">
              Call our Hyderabad dispatch office at <strong>+91 99009 80207</strong> or chat on WhatsApp. We operate 7 days a week (7 AM - 9 PM).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="tel:+919900980207"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] bg-vivid-teal hover:bg-teal-hover text-carbon text-sm font-bold transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9900980207</span>
            </a>

            <a
              href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20need%20a%20free%20doorstep%20quote%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
