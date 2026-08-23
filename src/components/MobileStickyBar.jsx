import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function MobileStickyBar({ onOpenQuote }) {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-auto">
      <div className="bg-carbon/95 dark:bg-dark-card/95 backdrop-blur-lg text-pure-white rounded-[24px] p-2 sm:p-2.5 shadow-2xl border border-pure-white/10 dark:border-dark-border flex items-center justify-between gap-2 safe-bottom">
        {/* Call Button: 9900980207 */}
        <a
          href="tel:+919900980207"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[16px] bg-pure-white/10 text-pure-white text-xs font-bold hover:bg-pure-white/20 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-vivid-teal" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button: 919900980207 */}
        <a
          href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20would%20like%20a%20free%20site%20visit%20quote%20in%20Hyderabad."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[16px] bg-[#25D366]/20 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Free Quote Button in Vivid Teal */}
        <button
          onClick={() => onOpenQuote()}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[16px] bg-vivid-teal text-carbon text-xs font-bold shadow-md hover:bg-teal-hover active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Quote</span>
        </button>
      </div>
    </div>
  );
}
