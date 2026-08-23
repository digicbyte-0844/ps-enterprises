import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';

export default function MobileFloatingContactHub() {
  return (
    <aside
      aria-label="Mobile Floating Quick Actions"
      className="fixed bottom-20 right-3 z-40 md:hidden flex flex-col items-center gap-2.5 pointer-events-auto select-none animate-fade-in"
    >
      {/* 1. WhatsApp Action Button */}
      <a
        href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20would%20like%20a%20free%20inspection%20and%20quote%20in%20Hyderabad."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform duration-200 shadow-[#25D366]/40"
        aria-label="WhatsApp Us: 9900980207"
        title="WhatsApp Us"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300" />
        </span>
        <MessageSquare className="w-5 h-5 fill-white" />
      </a>

      {/* 2. Direct Call Action Button */}
      <a
        href="tel:+919900980207"
        className="w-11 h-11 rounded-full bg-carbon dark:bg-dark-card hover:bg-black text-pure-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform duration-200 border border-pure-white/20 shadow-carbon/40"
        aria-label="Call +91 99009 80207"
        title="Call Helpline"
      >
        <Phone className="w-5 h-5 text-vivid-teal" />
      </a>

      {/* 3. Direct Email Action Button */}
      <a
        href="mailto:pssafetynetssolutions@gmail.com?subject=Inquiry%20for%20Safety%20Netting%20Solutions"
        className="w-11 h-11 rounded-full bg-[#ea4335] hover:bg-[#d93025] text-pure-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform duration-200 shadow-[#ea4335]/30"
        aria-label="Email pssafetynetssolutions@gmail.com"
        title="Email Us"
      >
        <Mail className="w-5 h-5" />
      </a>
    </aside>
  );
}
