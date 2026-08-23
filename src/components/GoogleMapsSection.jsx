import React, { useState } from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const CITIES = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    hub: 'Indiranagar / Whitefield / Koramangala / HSR Layout / Hebbal',
    coords: '12.9716,77.5946',
    mapQuery: 'Bengaluru, Karnataka',
    dispatchTime: '30 - 45 mins',
    activeTeams: 18,
  },
  {
    id: 'mumbai',
    name: 'Mumbai & MMR',
    state: 'Maharashtra',
    hub: 'Andheri / Bandra / Powai / Thane / Navi Mumbai',
    coords: '19.0760,72.8777',
    mapQuery: 'Mumbai, Maharashtra',
    dispatchTime: '45 - 60 mins',
    activeTeams: 14,
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    hub: 'Gachibowli / Hitec City / Madhapur / Kondapur / Banjara Hills',
    coords: '17.3850,78.4867',
    mapQuery: 'Hyderabad, Telangana',
    dispatchTime: '30 - 45 mins',
    activeTeams: 12,
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    hub: 'Hinjawadi / Baner / Wakad / Kharadi / Viman Nagar',
    coords: '18.5204,73.8567',
    mapQuery: 'Pune, Maharashtra',
    dispatchTime: '30 - 45 mins',
    activeTeams: 10,
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    hub: 'OMR / ECR / Velachery / Anna Nagar / Porur',
    coords: '13.0827,80.2707',
    mapQuery: 'Chennai, Tamil Nadu',
    dispatchTime: '45 mins',
    activeTeams: 8,
  },
  {
    id: 'delhincr',
    name: 'Delhi NCR',
    state: 'Delhi / NCR',
    hub: 'Gurugram / Noida / Greater Noida / Dwarka',
    coords: '28.6139,77.2090',
    mapQuery: 'New Delhi, Delhi',
    dispatchTime: '45 - 60 mins',
    activeTeams: 15,
  }
];

export default function GoogleMapsSection({ onOpenQuote }) {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);

  return (
    <section className="py-16 md:py-24 bg-sage-canvas dark:bg-[#080d0e] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pure-white/80 dark:bg-dark-card/90 backdrop-blur-sm border border-carbon/5 dark:border-dark-border mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-vivid-teal" />
            <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted">
              PAN-INDIA RAPID SERVICE COVERAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-carbon dark:text-dark-text tracking-tight font-display">
            Local Rapid Dispatch in Your City.
          </h2>
          <p className="text-slate dark:text-dark-muted text-sm sm:text-base mt-3 leading-relaxed">
            Our certified installation engineers are stationed across major metropolitan hubs to provide same-day doorstep inspection, free laser measurements, and precision installation.
          </p>
        </div>

        {/* City Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CITIES.map((city) => {
            const isSelected = selectedCity.id === city.id;
            return (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-[16px] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-carbon text-pure-white dark:bg-vivid-teal dark:text-carbon shadow-md scale-105'
                    : 'bg-pure-white/80 dark:bg-dark-card text-carbon dark:text-dark-text hover:bg-pure-white dark:hover:bg-dark-surface border border-carbon/5 dark:border-dark-border'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-vivid-teal dark:bg-carbon' : 'bg-mist'}`} />
                <span>{city.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Map & Information Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: City Details & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-pure-white dark:bg-dark-card rounded-[36px] p-6 sm:p-8 border border-carbon/5 dark:border-dark-border shadow-subtle-hover flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-carbon/5 dark:border-dark-border">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-vivid-teal block">
                      ACTIVE SERVICE ZONE
                    </span>
                    <h3 className="text-2xl font-semibold text-carbon dark:text-dark-text font-display">
                      {selectedCity.name}, {selectedCity.state}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vivid-teal/15 text-carbon dark:text-vivid-teal text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                      {selectedCity.activeTeams} Teams Live
                    </span>
                  </div>
                </div>

                <div className="space-y-4 py-6 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-sage-canvas/70 dark:bg-dark-surface flex items-center justify-center shrink-0 text-carbon dark:text-vivid-teal">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-mist dark:text-dark-muted font-medium">Primary Hubs Covered</div>
                      <div className="text-carbon dark:text-dark-text font-medium text-xs sm:text-sm mt-0.5 leading-snug">
                        {selectedCity.hub}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-sage-canvas/70 dark:bg-dark-surface flex items-center justify-center shrink-0 text-carbon dark:text-vivid-teal">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-mist dark:text-dark-muted font-medium">Average Arrival Time</div>
                      <div className="text-carbon dark:text-dark-text font-semibold text-sm mt-0.5">
                        Within {selectedCity.dispatchTime} (Same Day Free Site Visit)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-sage-canvas/70 dark:bg-dark-surface flex items-center justify-center shrink-0 text-carbon dark:text-vivid-teal">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-mist dark:text-dark-muted font-medium">Quality Assurance</div>
                      <div className="text-carbon dark:text-dark-text font-medium text-xs sm:text-sm mt-0.5">
                        5-Year Official Replacement Guarantee & ISO 9001:2015 Monofilament
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-carbon/5 dark:border-dark-border space-y-3">
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3.5 px-6 rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <span>Book Free Inspection in {selectedCity.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919900980207"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-[14px] bg-pure-white dark:bg-dark-surface text-carbon dark:text-dark-text text-xs font-semibold border border-carbon/10 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-card transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-graphite dark:text-vivid-teal" />
                    <span>Call Helpline</span>
                  </a>

                  <a
                    href={`https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20need%20a%20free%20site%20visit%20inspection%20in%20${encodeURIComponent(selectedCity.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-[14px] bg-[#25D366]/15 text-[#128C7E] dark:text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/25 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Embedded Styled Google Maps Visual */}
          <div className="lg:col-span-7 bg-pure-white dark:bg-dark-card rounded-[36px] overflow-hidden border border-carbon/5 dark:border-dark-border shadow-subtle-hover relative min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
            {/* Top Interactive Badge Overlay */}
            <div className="absolute top-4 left-4 z-10 bg-pure-white/90 dark:bg-dark-card/90 backdrop-blur-md px-4 py-2 rounded-[14px] border border-carbon/5 dark:border-dark-border shadow-md flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs font-bold text-carbon dark:text-dark-text">
                Live Coverage Active: {selectedCity.name} Hub
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedCity.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-carbon text-pure-white dark:bg-dark-surface dark:text-dark-text hover:bg-black text-xs font-semibold px-3.5 py-2 rounded-[12px] shadow-md flex items-center gap-1.5 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-vivid-teal" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Google Maps iFrame */}
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] relative">
              <iframe
                title={`PS Safetynets Coverage Map - ${selectedCity.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  selectedCity.mapQuery + ' high rise apartments'
                )}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Bottom Service Bar */}
            <div className="p-4 bg-pure-white/95 dark:bg-dark-card/95 backdrop-blur-md border-t border-carbon/5 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate dark:text-dark-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vivid-teal shrink-0" />
                <span>100% Free Doorstep Measurement • Zero Obligation • Free Laser Calibration</span>
              </div>
              <span className="font-semibold text-carbon dark:text-dark-text">
                Mon - Sun: 7:00 AM – 9:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
