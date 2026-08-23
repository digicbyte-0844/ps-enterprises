import React from 'react';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { reviews, statistics } from '../data/reviewsData';

export default function ReviewsSection({ onOpenQuote }) {
  return (
    <section id="reviews" className="relative w-full bg-carbon text-pure-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pure-white/10 backdrop-blur-md border-l-2 border-emerald-400 border-t border-r border-b border-pure-white/15 text-pure-white mb-3 shadow-xs">
            <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-vivid-teal">
              VERIFIED HYDERABAD TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-pure-white tracking-tight leading-[1.1] font-display">
            Trusted by 10,000+ Homes.
          </h2>
          <p className="text-pure-white/70 text-xs sm:text-base mt-3 max-w-lg mx-auto">
            From high-rise balconies in HITEC City to premier sports arenas, see how PS Safetynets delivers uncompromising protection.
          </p>
        </div>

        {/* Sharp Square White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 text-left">
          {reviews.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-pure-white text-carbon p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:translate-y-[-3px] border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/15 shadow-xl"
            >
              <div>
                {/* Star rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 uppercase tracking-wider border border-emerald-300">
                    {rev.tag}
                  </span>
                </div>

                {/* Primary Quote */}
                <blockquote className="text-sm sm:text-base text-carbon font-bold leading-snug mb-3 font-display">
                  "{rev.quote}"
                </blockquote>

                {/* Extended review details */}
                <p className="text-slate text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {rev.details}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3.5 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-carbon font-display">{rev.name}</div>
                  <div className="text-[10px] sm:text-[11px] text-mist font-medium">{rev.location}</div>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar (Sharp Format) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto pt-6 border-t border-pure-white/15">
          {statistics.map((stat, idx) => (
            <div key={idx} className="text-center p-3 sm:p-4 bg-pure-white/5 border border-pure-white/10">
              <div className="text-xl sm:text-3xl font-extrabold text-amber-400 tracking-tight font-display">
                {stat.value}
              </div>
              <div className="text-xs text-pure-white font-semibold mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-pure-white/70 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Sharp Square CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center justify-center gap-2 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-xs sm:text-base px-8 py-3.5 transition-all shadow-md border border-vivid-teal cursor-pointer"
          >
            <span>Book Your Free Doorstep Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
