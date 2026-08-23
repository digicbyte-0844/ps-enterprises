import React, { useState } from 'react';
import { ShieldCheck, Wind, Weight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function TensileSimulator() {
  const [loadKg, setLoadKg] = useState(250);
  const [windKmh, setWindKmh] = useState(120);
  const [material, setMaterial] = useState('ss316');

  const materials = {
    ss316: {
      name: 'SS 316 Marine Invisible Grill',
      maxLoad: 450,
      maxWind: 220,
      corrosionGrade: 'Grade 10 (Zero Rust in 15+ Yrs)',
      opticalScore: '99% Invisible',
      toddlerSafe: true,
      desc: 'Marine grade 316 high-tension core with transparent DuPont sheath.'
    },
    nylonCoplymer: {
      name: 'UV Monofilament Pigeon Net',
      maxLoad: 180,
      maxWind: 160,
      corrosionGrade: 'Grade 10 (Zero Rust, UV-Proof)',
      opticalScore: '98% Invisible',
      toddlerSafe: true,
      desc: 'High-density copolymer twine engineered for balcony bird quarantine.'
    },
    traditionalIron: {
      name: 'Conventional Iron Grill (Comparison)',
      maxLoad: 300,
      maxWind: 180,
      corrosionGrade: 'Grade 3 (Rusts in 2-3 Monsoons)',
      opticalScore: '15% View Blocked (Heavy Cage)',
      toddlerSafe: true,
      desc: 'Heavy conventional mild steel bars requiring frequent rust painting.'
    }
  };

  const currentMat = materials[material];
  const isLoadSafe = loadKg <= currentMat.maxLoad;
  const isWindSafe = windKmh <= currentMat.maxWind;
  const safetyFactor = ((currentMat.maxLoad / loadKg) * 1.5).toFixed(1);

  return (
    <section className="relative w-full bg-sage-canvas dark:bg-dark-canvas py-16 md:py-24 border-t border-carbon/5 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted block mb-2">
            SIMULATION LAB
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-carbon dark:text-dark-text tracking-tight">
            Stress & Load Simulator.
          </h2>
          <p className="text-slate dark:text-dark-muted text-sm sm:text-base mt-2">
            Calibrate high-rise load pressures and extreme wind gusts to see real-world engineering resistance ratings.
          </p>
        </div>

        {/* Simulator Box (36px radius Pure White Card) */}
        <div className="bg-pure-white dark:bg-dark-card rounded-[36px] p-6 sm:p-10 border border-carbon/5 dark:border-dark-border shadow-subtle-hover">
          {/* Material Selector Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-100 dark:border-dark-border mb-8">
            {Object.entries(materials).map(([key, mat]) => (
              <button
                key={key}
                type="button"
                onClick={() => setMaterial(key)}
                className={`px-4 py-2.5 rounded-[16px] text-xs sm:text-sm font-medium transition-all ${
                  material === key
                    ? 'bg-carbon text-pure-white shadow-sm'
                    : 'bg-sage-canvas/40 dark:bg-dark-surface text-carbon dark:text-dark-text hover:bg-sage-canvas'
                }`}
              >
                {mat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Interactive Sliders */}
            <div className="lg:col-span-6 space-y-6">
              {/* Load Slider */}
              <div className="bg-sage-canvas/30 dark:bg-dark-surface rounded-[24px] p-5 border border-carbon/5 dark:border-dark-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Weight className="w-4 h-4 text-carbon dark:text-dark-text" />
                    <span className="text-xs font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted">
                      Simulated Impact Load
                    </span>
                  </div>
                  <span className="text-sm font-bold text-carbon dark:text-dark-text px-2.5 py-0.5 rounded-lg bg-pure-white dark:bg-dark-card border border-carbon/10 dark:border-dark-border">
                    {loadKg} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={loadKg}
                  onChange={(e) => setLoadKg(Number(e.target.value))}
                  className="w-full h-2 bg-sage-canvas dark:bg-dark-card rounded-lg appearance-none cursor-pointer accent-carbon"
                />
                <div className="flex justify-between text-[11px] text-mist dark:text-dark-muted mt-1.5">
                  <span>50 kg (Child Impact)</span>
                  <span>500 kg (Extreme Shock)</span>
                </div>
              </div>

              {/* Wind Speed Slider */}
              <div className="bg-sage-canvas/30 dark:bg-dark-surface rounded-[24px] p-5 border border-carbon/5 dark:border-dark-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-carbon dark:text-dark-text" />
                    <span className="text-xs font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted">
                      Simulated Wind Velocity
                    </span>
                  </div>
                  <span className="text-sm font-bold text-carbon dark:text-dark-text px-2.5 py-0.5 rounded-lg bg-pure-white dark:bg-dark-card border border-carbon/10 dark:border-dark-border">
                    {windKmh} km/h
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="240"
                  step="10"
                  value={windKmh}
                  onChange={(e) => setWindKmh(Number(e.target.value))}
                  className="w-full h-2 bg-sage-canvas dark:bg-dark-card rounded-lg appearance-none cursor-pointer accent-carbon"
                />
                <div className="flex justify-between text-[11px] text-mist dark:text-dark-muted mt-1.5">
                  <span>40 km/h (Breeze)</span>
                  <span>240 km/h (Cyclone Category 5)</span>
                </div>
              </div>

              <div className="text-xs text-slate dark:text-dark-muted bg-pure-white dark:bg-dark-surface rounded-[16px] p-4 border border-carbon/5 dark:border-dark-border">
                <strong>Specification Note:</strong> {currentMat.desc}
              </div>
            </div>

            {/* Right Live Visual Gauges */}
            <div className="lg:col-span-6 bg-carbon text-pure-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-pure-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-vivid-teal">
                    Real-time Structural Assessment
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-pure-white/10 text-pure-white/80">
                    Safety Margin: {safetyFactor}x
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 my-6">
                  {/* Load Rating */}
                  <div className="bg-pure-white/5 rounded-[20px] p-4 border border-pure-white/10">
                    <span className="text-[11px] text-pure-white/60 block mb-1">Load Status</span>
                    <div className="flex items-center gap-2">
                      {isLoadSafe ? (
                        <CheckCircle2 className="w-5 h-5 text-vivid-teal" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <span className="text-sm font-semibold text-pure-white">
                        {isLoadSafe ? '100% Safe' : 'Over Limit'}
                      </span>
                    </div>
                    <span className="text-[11px] text-mist mt-1 block">
                      Max rated: {currentMat.maxLoad} kg
                    </span>
                  </div>

                  {/* Wind Rating */}
                  <div className="bg-pure-white/5 rounded-[20px] p-4 border border-pure-white/10">
                    <span className="text-[11px] text-pure-white/60 block mb-1">Wind Resilience</span>
                    <div className="flex items-center gap-2">
                      {isWindSafe ? (
                        <CheckCircle2 className="w-5 h-5 text-vivid-teal" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <span className="text-sm font-semibold text-pure-white">
                        {isWindSafe ? 'Resistant' : 'Buffeting'}
                      </span>
                    </div>
                    <span className="text-[11px] text-mist mt-1 block">
                      Max rated: {currentMat.maxWind} km/h
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-pure-white/80 border-t border-pure-white/10 pt-4">
                  <div className="flex justify-between">
                    <span>Optical Clarity:</span>
                    <span className="text-pure-white font-medium">{currentMat.opticalScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Anti-Corrosion Endurance:</span>
                    <span className="text-pure-white font-medium">{currentMat.corrosionGrade}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-pure-white/10 text-center">
                <span className="text-xs text-vivid-teal font-medium flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Tested & verified under ASTM architectural load protocols</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
