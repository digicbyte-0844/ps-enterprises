import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqsData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative w-full bg-sage-canvas dark:bg-dark-canvas py-20 md:py-28 border-t border-carbon/5 dark:border-dark-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-mist dark:text-dark-muted block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-carbon dark:text-dark-text tracking-tight leading-[1.1]">
            Everything you need to know.
          </h2>
          <p className="text-slate dark:text-dark-muted text-sm sm:text-base mt-3">
            Clear, transparent answers about our netting specifications, installation timelines, and warranty.
          </p>
        </div>

        {/* Minimal Hairline Accordion */}
        <div className="divide-y divide-slate/25 dark:divide-dark-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-carbon dark:text-dark-text group-hover:text-black dark:group-hover:text-vivid-teal transition-colors pr-6">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-carbon text-pure-white rotate-180'
                        : 'bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text group-hover:bg-carbon group-hover:text-pure-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-slate dark:text-dark-muted text-sm sm:text-base leading-relaxed animate-fade-in font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-[24px] bg-pure-white/70 dark:bg-dark-card/80 border border-carbon/5 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-carbon dark:text-dark-text">Have a custom architectural inquiry?</h4>
            <p className="text-xs text-mist dark:text-dark-muted mt-0.5">Speak with our senior safety engineer for customized measurements.</p>
          </div>
          <a
            href="tel:+919900980207"
            className="text-xs font-bold px-5 py-2.5 rounded-[12px] bg-carbon text-pure-white hover:bg-black transition-colors shrink-0"
          >
            Call +91 99009 80207
          </a>
        </div>
      </div>
    </section>
  );
}
