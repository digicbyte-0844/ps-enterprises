import React from 'react';
import { Shield, Layers, Anchor, Cpu, CheckCircle } from 'lucide-react';

export default function EngineeringSection() {
  const engineeringPillars = [
    {
      icon: Shield,
      tag: "GRADE 316 STAINLESS",
      title: "Marine-Grade Cable Core",
      desc: "SS 316 multi-strand wire core encased in transparent UV-resistant nylon sheath. High tensile load capacity exceeding 400 kg per line.",
    },
    {
      icon: Layers,
      tag: "UV MONOFILAMENT",
      title: "100% Optical Clarity",
      desc: "Translucent copolymer netting that blends into sky backgrounds. Zero yellowing, zero degradation under intense monsoon and tropical heat.",
    },
    {
      icon: Anchor,
      tag: "ZERO SAGGING",
      title: "Precision Anchor Tension",
      desc: "Heavy-duty expansion anchor hardware with calibrated tension turnbuckles to guarantee tight, clean linear geometry for years.",
    },
    {
      icon: Cpu,
      tag: "ZERO-DAMAGE RIGGING",
      title: "Clean Edge Architecture",
      desc: "Flawlessly routed along window mullions and balcony parapets without structural damage or cracking of building plaster.",
    }
  ];

  return (
    <section id="engineering" className="relative w-full bg-sage-canvas dark:bg-dark-canvas py-20 md:py-28 border-t border-carbon/5 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted block mb-3">
            MATERIALS & RIGGING STANDARDS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-carbon dark:text-dark-text tracking-tight leading-[1.1]">
            Engineered to be unseen. <br />
            Built to be unbreakable.
          </h2>
          <p className="text-slate dark:text-dark-muted text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Every installation adheres to rigorous architectural load testing and safety regulations for high-rise residential towers and commercial spaces.
          </p>
        </div>

        {/* 4 Gallery Cards with 36px radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-pure-white dark:bg-dark-card rounded-[36px] p-6 sm:p-8 border border-carbon/5 dark:border-dark-border flex flex-col justify-between transition-all duration-300 hover:translate-y-[-3px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-[16px] bg-sage-canvas/60 dark:bg-dark-surface text-carbon dark:text-vivid-teal flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted mb-2">
                    {pillar.tag}
                  </div>
                  <h3 className="text-xl font-normal text-carbon dark:text-dark-text tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate dark:text-dark-muted text-xs sm:text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-dark-border flex items-center gap-2 text-[11px] font-medium text-carbon/70 dark:text-dark-muted">
                  <CheckCircle className="w-3.5 h-3.5 text-vivid-teal" />
                  <span>ISO 9001 Certified Quality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
