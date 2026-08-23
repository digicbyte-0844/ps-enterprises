import React, { useState, useEffect } from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import EmailInquiryModal from './EmailInquiryModal';
import WhatsAppInquiryModal from './WhatsAppInquiryModal';

export default function FloatingActionHub() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <aside
        aria-label="Floating Action Controls"
        className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-center gap-2.5 pointer-events-auto select-none animate-fade-in"
      >
        {/* 1. Scroll-To-Top Upper Arrow Button (Appears when scrolled) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Scroll to top"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text hover:bg-carbon hover:text-pure-white shadow-xl border border-carbon/15 dark:border-dark-border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in group cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-carbon dark:text-vivid-teal group-hover:text-vivid-teal transition-colors" />
          </button>
        )}

        {/* 2. WhatsApp Direct Action Button (Clean Solid WhatsApp Logo) */}
        <button
          type="button"
          onClick={() => setIsWhatsAppModalOpen(true)}
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 shadow-[#25D366]/40 cursor-pointer"
          aria-label="Send WhatsApp Inquiry: 9900980207"
          title="Send WhatsApp Inquiry to Owner (9900980207)"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-6 sm:h-6 fill-white" />
        </button>

        {/* 3. Direct Phone Call Button */}
        <a
          href="tel:+919900980207"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-carbon dark:bg-dark-card hover:bg-black text-pure-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border border-pure-white/15 shadow-carbon/40 cursor-pointer"
          aria-label="Call +91 99009 80207"
          title="Call Helpline (+91 99009 80207)"
        >
          <Phone className="w-5 h-5 sm:w-5 sm:h-5 text-vivid-teal" />
        </a>

        {/* 4. Direct Email Dialog Trigger Button */}
        <button
          type="button"
          onClick={() => setIsEmailModalOpen(true)}
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ea4335] hover:bg-[#d93025] text-pure-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 shadow-[#ea4335]/30 cursor-pointer"
          aria-label="Email pssafetynetssolutions@gmail.com"
          title="Send Email Inquiry to pssafetynetssolutions@gmail.com"
        >
          <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
        </button>
      </aside>

      {/* WhatsApp Inquiry Dialog */}
      <WhatsAppInquiryModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />

      {/* Email Inquiry Dialog */}
      <EmailInquiryModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
}
