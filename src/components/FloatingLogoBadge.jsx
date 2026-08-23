import React from 'react';
import { Link } from 'react-router-dom';

export default function FloatingLogoBadge() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 right-3.5 z-40 md:hidden pointer-events-auto animate-fade-in">
      <Link
        to="/"
        onClick={scrollToTop}
        aria-label="PS Safetynets Solutions Home"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-pure-white dark:bg-dark-card shadow-2xl border-2 border-carbon/20 dark:border-vivid-teal/40 overflow-hidden hover:scale-105 active:scale-90 transition-all duration-300 shadow-carbon/30"
      >
        {/* Subtle Online Pulse Ring */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vivid-teal opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-vivid-teal border-2 border-pure-white dark:border-dark-card" />
        </span>

        {/* Brand Logo Image */}
        <img
          src="/logo.jpg"
          alt="PS Safetynets Solutions"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
          }}
        />

        {/* Fallback Initials Badge */}
        <div className="hidden w-full h-full bg-carbon text-vivid-teal items-center justify-center font-bold text-xs">
          PS
        </div>
      </Link>
    </div>
  );
}
