import React from 'react';
import ReviewsSection from '../components/ReviewsSection';
import { reviews, statistics } from '../data/reviewsData';
import { Star, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function ReviewsPage({ onOpenQuote }) {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pure-white/90 dark:bg-dark-card border-l-2 border-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
              10,000+ VERIFIED HYDERABAD HOMES
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-carbon dark:text-dark-text tracking-tight leading-[1.1] font-display">
            Real Hyderabad Experiences.
          </h1>
          <p className="text-slate dark:text-dark-muted text-xs sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Read honest stories from residents in HITEC City, Gachibowli, Kokapet, and across Hyderabad who secured their balconies, pets, and sports turfs with us.
          </p>
        </div>

        {/* 4 Sharp Square Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {statistics.map((st, idx) => (
            <div
              key={idx}
              className="bg-pure-white dark:bg-dark-card p-4 sm:p-5 border-l-4 border-l-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover"
            >
              <div className="text-xl sm:text-3xl font-extrabold text-amber-500 dark:text-amber-400 font-display">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-carbon dark:text-dark-text mt-1">
                {st.label}
              </div>
              <div className="text-[10px] text-slate dark:text-dark-muted mt-0.5">
                {st.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Review Cards Grid (Sharp Square Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text p-6 sm:p-8 border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 uppercase tracking-wider">
                    {rev.tag}
                  </span>
                </div>

                <blockquote className="text-base sm:text-lg font-bold text-carbon dark:text-dark-text mb-2.5 leading-snug font-display">
                  "{rev.quote}"
                </blockquote>

                <p className="text-slate dark:text-dark-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {rev.details}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-dark-border flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-carbon dark:text-dark-text font-display">{rev.name}</div>
                  <div className="text-xs text-mist dark:text-dark-muted">{rev.role} • {rev.location}</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Resident</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Forest Section embed */}
        <ReviewsSection onOpenQuote={onOpenQuote} />
      </div>
    </div>
  );
}
