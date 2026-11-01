import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Heart,
  ChevronRight
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onOpenQuote }) {
  const hyderabadLocalities = [
    "Gachibowli", "HITEC City", "Madhapur", "Kondapur", "Financial District", "Kokapet", "Nanakramguda",
    "Secunderabad", "Marredpally", "Bowenpally", "Alwal", "Sainikpuri", "Kompally",
    "Uppal", "LB Nagar", "Dilsukhnagar", "Tarnaka", "Malakpet", "Manikonda", "Jubilee Hills", "Banjara Hills", "Miyapur", "Tellapur"
  ];

  return (
    <footer className="relative w-full bg-[#cbdcd7] dark:bg-[#070d0e] text-carbon dark:text-dark-text pt-12 sm:pt-16 pb-28 md:pb-12 border-t border-carbon/15 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* ========================================================================= */}
        {/* 1. MAIN FOOTER CONTENT (SHARP SQUARE FORMAT) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-carbon/15 dark:border-dark-border">
          
          {/* Column 1: Brand & Direct Contact (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-3">
              <Link to="/" className="h-12 sm:h-16 w-auto flex items-center justify-center shrink-0">
                <img
                  src="/ps-logo.png"
                  alt="PS Safetynets Solutions"
                  className="h-full w-auto max-h-12 sm:max-h-16 object-contain"
                />
              </Link>
              <div>
                <Link to="/" className="text-lg sm:text-2xl font-bold tracking-tight text-carbon dark:text-dark-text block leading-none hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors font-display">
                  PS Safetynets Solutions
                </Link>
                <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-vivid-teal font-bold tracking-wider uppercase mt-1 block">
                  Hyderabad Safety Systems
                </span>
              </div>
            </div>

            <p className="text-slate dark:text-dark-muted text-xs sm:text-sm leading-relaxed">
              Hyderabad’s trusted engineering specialist for SS 316 invisible grills, high-rise pigeon netting, building duct enclosures, and sports turf nets.
            </p>

            {/* Direct Contact Channels (Sharp Format) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 pt-1 text-xs">
              {/* Phone */}
              <a
                href="tel:+919900980207"
                className="flex items-center gap-2.5 p-2.5 bg-pure-white/80 dark:bg-dark-surface hover:bg-pure-white text-carbon dark:text-dark-text font-bold transition-all border border-carbon/10 dark:border-dark-border"
              >
                <div className="w-6 h-6 bg-carbon text-vivid-teal flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3" />
                </div>
                <span>+91 99009 80207</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20would%20like%20a%20free%20inspection%20and%20quote%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-[#25D366]/15 dark:bg-[#25D366]/10 hover:bg-[#25D366]/25 text-[#128C7E] dark:text-[#25D366] font-bold transition-all border border-[#25D366]/30"
              >
                <div className="w-6 h-6 bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                </div>
                <span>WhatsApp: 9900980207</span>
              </a>

              {/* Email */}
              <a
                href="mailto:pssafetynetssolutions@gmail.com"
                className="flex items-center gap-2.5 p-2.5 bg-pure-white/80 dark:bg-dark-surface hover:bg-pure-white text-carbon dark:text-dark-text transition-all border border-carbon/10 dark:border-dark-border truncate"
              >
                <div className="w-6 h-6 bg-[#ea4335] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="truncate">pssafetynetssolutions@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: 5 Core Safety Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block">
              Core Safety Solutions
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-carbon/90 dark:text-dark-text">
              <li>
                <Link to="/services/pigeon-net" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>First Pigeon Net (Balcony)</span>
                </Link>
              </li>
              <li>
                <Link to="/services/invisible-grill" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>SS 316 Invisible Grill</span>
                </Link>
              </li>
              <li>
                <Link to="/services/box-cricket-net" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Box Cricket Turf Net</span>
                </Link>
              </li>
              <li>
                <Link to="/services/ducts-area" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Ducts Area Shaft Netting</span>
                </Link>
              </li>
              <li>
                <Link to="/services/birds-spikes" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Polycarbonate Birds Spikes</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/services" className="text-emerald-600 dark:text-vivid-teal font-bold hover:underline inline-flex items-center gap-1 text-xs">
                  <span>View All 5 Services Catalog &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Quick Booking (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs sm:text-sm font-medium text-carbon/90 dark:text-dark-text">
              <Link to="/" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors py-0.5">Home</Link>
              <Link to="/services" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors py-0.5">Services</Link>
              <Link to="/gallery" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors py-0.5">Gallery</Link>
              <Link to="/reviews" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors py-0.5">Reviews</Link>
              <Link to="/visiting-card" className="hover:text-amber-500 transition-colors py-0.5 text-amber-600 dark:text-amber-400 font-bold inline-flex items-center gap-1">
                <span>Visiting Card</span>
                <span className="text-[9px] bg-amber-500/20 px-1 rounded font-mono">3D</span>
              </Link>
              <Link to="/contact" className="hover:text-emerald-600 dark:hover:text-vivid-teal transition-colors py-0.5">Contact HQ</Link>
            </div>
            
            <div className="pt-1">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto px-3.5 py-2 bg-carbon hover:bg-black text-pure-white text-xs font-bold transition-all shadow-xs text-center cursor-pointer border border-carbon"
              >
                Free Doorstep Quote
              </button>
            </div>
          </div>

          {/* Column 4: Hyderabad Service Neighborhoods & SEO (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block">
              Hyderabad Dispatch Areas
            </span>
            <p className="text-[10px] sm:text-[11px] text-slate dark:text-dark-muted">
              30-minute laser measurement across Hyderabad neighborhoods:
            </p>
            <div className="flex flex-wrap gap-1 text-[10px] sm:text-[11px] font-medium text-carbon/80 dark:text-dark-muted max-h-36 sm:max-h-none overflow-y-auto sm:overflow-visible">
              {hyderabadLocalities.map((loc) => (
                <button
                  key={loc}
                  onClick={() => onOpenQuote(`Balcony Safety Nets at ${loc}, Hyderabad`)}
                  className="px-2 py-0.5 bg-pure-white/80 dark:bg-dark-surface hover:bg-carbon hover:text-pure-white transition-colors border border-carbon/10 cursor-pointer"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. BOTTOM ATTRIBUTION & COPYRIGHT (SHARP FORMAT) */}
        {/* ========================================================================= */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate dark:text-dark-muted text-center sm:text-left">
          
          {/* Copyright Info */}
          <div className="text-[11px] sm:text-xs">
            © 2026 <strong>PS Safetynets Solutions</strong>. All rights reserved.
          </div>

          {/* Special Credit Line: Designed and developed by Prabhuteja Koda */}
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-carbon dark:text-dark-text font-medium bg-pure-white/80 dark:bg-dark-card px-3.5 py-1.5 border border-carbon/15 dark:border-dark-border shadow-xs">
            <span>Designed and developed by</span>
            <span className="font-bold text-carbon dark:text-vivid-teal tracking-wide">
              Prabhuteja Koda
            </span>
          </div>

          {/* Right Trust Info */}
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate dark:text-dark-muted">
            <span className="font-bold text-emerald-700 dark:text-vivid-teal">ISO 9001:2015</span>
            <span>•</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">5-Year Stamped Warranty</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
