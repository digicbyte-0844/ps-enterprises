import React from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ComparisonSection({ onOpenQuote }) {
  const withoutList = [
    "Ugly iron prison-bars that block natural daylight and skyline views",
    "Pigeon droppings, feathers, foul smell, and airborne lung mites",
    "Heavy rust, frequent sanding, and toxic enamel repainting costs",
    "Zero quick emergency evacuation in fire emergencies",
    "Diminishes luxury apartment resale value and architectural aesthetics"
  ];

  const withList = [
    { text: "100% Invisible from 10ft", highlight: "unblocked panoramic view" },
    { text: "Impenetrable bird barrier with", highlight: "5-year warranty" },
    { text: "Marine Grade SS 316 cables with", highlight: "400kg+ toddler fall safety" },
    { text: "Zero rust, zero maintenance,", highlight: "DuPont UV polymer coating" },
    { text: "Fast emergency egress friendly with", highlight: "standard wire cutters" }
  ];

  return (
    <section className="relative w-full bg-paper-white dark:bg-dark-canvas py-16 md:py-24 border-t border-hairline dark:border-dark-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-eyebrow text-smoke dark:text-dark-muted block mb-2">
            WHY MODERN HOMEOWNERS SWITCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-ink-black dark:text-dark-text tracking-heading leading-tight">
            See the difference <span className="hand-drawn-underline">side by side</span>.
          </h2>
          <p className="text-smoke dark:text-dark-muted text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Traditional metal grilles feel like cages and rust quickly. Here is why architects and high-rise residents choose PS Safetynets.
          </p>
        </div>

        {/* 7shifts 2-Column Comparison Grid (20px radius cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: Without Protection (Warm Bone #f1f0ec) */}
          <div className="bg-warm-bone dark:bg-dark-card rounded-card p-6 sm:p-8 border border-hairline dark:border-dark-border flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper-white dark:bg-dark-surface text-smoke dark:text-dark-muted text-xs font-semibold uppercase tracking-wider mb-6">
                Conventional Option
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-ink-black dark:text-dark-text tracking-tight mb-6">
                Without PS Safetynets
              </h3>

              <ul className="space-y-3.5">
                {withoutList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-graphite dark:text-dark-muted">
                    <div className="w-5 h-5 rounded-full bg-ink-black text-paper-white flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-8 border-t border-hairline dark:border-dark-border text-xs text-smoke dark:text-dark-muted">
              Result: High recurring maintenance & cage-like living experience.
            </div>
          </div>

          {/* Right Card: With PS Safetynets (Ink Black #000000 with Lime Highlighter #c6ff94 accents) */}
          <div className="bg-ink-black text-paper-white rounded-card p-6 sm:p-8 border border-ink-black flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Subtle glow behind card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-bolt/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper-white/15 text-lime-highlighter text-xs font-bold uppercase tracking-wider mb-6 border border-lime-highlighter/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Architectural Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-paper-white tracking-tight mb-6">
                With PS Safetynets
              </h3>

              <ul className="space-y-3.5">
                {withList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-paper-white/90">
                    <div className="w-5 h-5 rounded-full bg-lime-highlighter text-ink-black flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>
                      {item.text}{' '}
                      <span className="text-lime-highlighter font-semibold">
                        {item.highlight}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-8 border-t border-paper-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-paper-white/70">
                Guaranteed: 5-Year official replacement certificate.
              </span>
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto bg-indigo-bolt hover:bg-[#345fe8] text-paper-white text-xs font-semibold py-2.5 px-5 rounded-full transition-all flex items-center justify-center gap-1.5"
              >
                <span>Upgrade Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
