import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function SideQuickContactBar({ onOpenQuote }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      aria-label="Quick Contact Dock"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 pointer-events-auto select-none ${
        isCollapsed ? 'translate-x-[calc(100%-14px)]' : 'translate-x-0'
      }`}
    >
      <div className="flex items-center">
        {/* Toggle Collapse/Expand Tab */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Open Quick Contact Bar' : 'Collapse Quick Contact Bar'}
          className="w-4 h-14 bg-carbon/90 dark:bg-dark-card/90 text-pure-white hover:bg-carbon rounded-l-md flex items-center justify-center shadow-lg border-y border-l border-pure-white/15 focus:outline-none transition-colors"
          title={isCollapsed ? 'Show Quick Contacts' : 'Hide Quick Contacts'}
        >
          {isCollapsed ? (
            <ChevronLeft className="w-3.5 h-3.5 text-vivid-teal" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-mist" />
          )}
        </button>

        {/* Vertical Floating Action Strip */}
        <div className="bg-pure-white/95 dark:bg-dark-card/95 backdrop-blur-md p-1.5 sm:p-2 rounded-l-[20px] shadow-2xl border-y border-l border-carbon/10 dark:border-dark-border flex flex-col items-center gap-2">
          {/* 1. WhatsApp Button */}
          <a
            href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20need%20a%20free%20quote%20and%20inspection%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 shadow-[#25D366]/30"
            aria-label="Chat on WhatsApp: 9900980207"
            title="Chat on WhatsApp (+91 99009 80207)"
          >
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300" />
            </span>
            <MessageSquare className="w-5 h-5 fill-white" />
          </a>

          {/* 2. Direct Phone Call Button */}
          <a
            href="tel:+919900980207"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-carbon hover:bg-black text-pure-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 border border-carbon/10"
            aria-label="Call +91 99009 80207"
            title="Direct Call (+91 99009 80207)"
          >
            <Phone className="w-5 h-5 text-vivid-teal" />
          </a>

          {/* 3. Direct Email Button: pssafetynetssolutions@gmail.com */}
          <a
            href="mailto:pssafetynetssolutions@gmail.com?subject=Inquiry%20for%20Safety%20Netting%20Solutions"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-pure-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Email pssafetynetssolutions@gmail.com"
            title="Email (pssafetynetssolutions@gmail.com)"
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* 4. Instant Quote Quick Trigger */}
          <button
            onClick={() => onOpenQuote()}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-vivid-teal hover:bg-teal-hover text-carbon flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Open Free Quote Booking"
            title="Book Free Doorstep Inspection"
          >
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
