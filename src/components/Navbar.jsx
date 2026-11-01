import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronRight,
  Moon,
  Sun,
  Sparkles,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data/servicesData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Smooth hover handlers with grace period
  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleToggleServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesDropdownOpen((prev) => !prev);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Visiting Card', path: '/visiting-card', badge: '3D Pass' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#d3e4df]/95 dark:bg-[#0c1415]/95 backdrop-blur-md border-b border-carbon/10 dark:border-dark-border py-2 sm:py-2.5 shadow-md'
            : 'bg-[#d3e4df]/85 dark:bg-[#0c1415]/85 backdrop-blur-sm py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Prominently Sized Logo & Brand Title */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none"
              aria-label="PS Safetynets Solutions Home"
            >
              {/* Enriched & Bold Brand Logo */}
              <div className="h-12 sm:h-14 lg:h-16 w-auto flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/ps-logo.png"
                  alt="PS Safetynets Solutions"
                  className="h-full w-auto max-h-12 sm:max-h-14 lg:max-h-16 object-contain drop-shadow-sm"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-12 h-12 rounded-xl bg-carbon text-vivid-teal items-center justify-center font-bold text-sm">
                  PS
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-carbon dark:text-dark-text leading-none group-hover:text-black dark:group-hover:text-vivid-teal transition-colors">
                  PS Safetynets Solutions
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate dark:text-dark-muted tracking-wider uppercase mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-vivid-teal inline-block" />
                  <span className="hidden sm:inline">Hyderabad • </span>
                  <span>Safety Solutions</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex items-center">
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `inline-flex items-center gap-1 text-[15px] font-medium px-3.5 py-2 transition-all ${
                              isActive
                                ? 'text-carbon dark:text-vivid-teal font-semibold bg-pure-white/80 dark:bg-dark-card shadow-xs border-b-2 border-emerald-500'
                                : 'text-carbon/80 dark:text-dark-muted hover:text-carbon dark:hover:text-dark-text hover:bg-pure-white/40 dark:hover:bg-dark-card/50'
                            }`
                          }
                        >
                          <span>{link.name}</span>
                        </NavLink>
                        
                        <button
                          type="button"
                          onClick={handleToggleServices}
                          aria-label="Toggle Services dropdown"
                          aria-expanded={servicesDropdownOpen}
                          className="px-2 py-2.5 text-carbon/80 dark:text-dark-muted hover:text-carbon dark:hover:text-dark-text hover:bg-pure-white/40 dark:hover:bg-dark-card/50 transition-colors cursor-pointer"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              servicesDropdownOpen ? 'rotate-180 text-carbon dark:text-vivid-teal' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Desktop Dropdown Menu for Services (Sharp Format) */}
                      {servicesDropdownOpen && (
                        <div
                          className="absolute top-full left-0 w-96 pt-3 z-50 animate-fade-in"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Continuous Hitbox Bridge Layer */}
                          <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" />

                          <div className="bg-pure-white dark:bg-dark-card shadow-2xl border border-carbon/15 dark:border-dark-border p-3.5 space-y-1.5">
                            
                            {/* Header row */}
                            <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100 dark:border-dark-border">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                                <span>5 Core Safety Solutions</span>
                              </span>
                              <Link
                                to="/services"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-[11px] font-bold text-vivid-teal hover:underline flex items-center gap-0.5"
                              >
                                <span>View Catalog</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            {/* 5 Services List */}
                            {services.map((srv) => (
                              <Link
                                key={srv.id}
                                to={`/services/${srv.id}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-center justify-between p-2.5 hover:bg-sage-canvas/50 dark:hover:bg-dark-surface transition-colors group border-l-2 border-transparent hover:border-emerald-500"
                              >
                                <div className="pr-2">
                                  <div className="text-xs font-bold text-carbon dark:text-dark-text group-hover:text-black dark:group-hover:text-vivid-teal flex items-center gap-1.5">
                                    <span>{srv.title}</span>
                                    <span className="text-[9px] px-1.5 py-0.5 bg-sage-canvas/80 dark:bg-dark-card text-slate dark:text-dark-muted font-semibold">
                                      {srv.turnaround}
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-slate dark:text-dark-muted line-clamp-1 mt-0.5">
                                    {srv.tagline}
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-mist group-hover:text-carbon dark:group-hover:text-vivid-teal group-hover:translate-x-0.5 transition-all shrink-0" />
                              </Link>
                            ))}

                            {/* Bottom All Services CTA */}
                            <div className="pt-2 border-t border-gray-100 dark:border-dark-border">
                              <Link
                                to="/services"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-carbon dark:bg-dark-surface text-pure-white hover:bg-black dark:hover:bg-dark-card text-xs font-bold transition-colors shadow-xs border border-carbon"
                              >
                                <span>Explore All 5 Solutions & Pricing</span>
                                <ArrowRight className="w-3.5 h-3.5 text-vivid-teal" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-[15px] font-medium px-3.5 py-2 transition-all inline-flex items-center gap-1.5 ${
                        isActive
                          ? 'text-carbon dark:text-vivid-teal font-semibold bg-pure-white/80 dark:bg-dark-card shadow-xs border-b-2 border-emerald-500'
                          : 'text-carbon/80 dark:text-dark-muted hover:text-carbon dark:hover:text-dark-text hover:bg-pure-white/40 dark:hover:bg-dark-card/50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                        <span>{link.badge}</span>
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Controls (Sharp Square Edges) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp Quick Button (Desktop only) */}
              <a
                href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20would%20like%20a%20free%20inspection%20and%20quote%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366]/15 text-[#128C7E] dark:text-[#25D366] text-xs font-bold hover:bg-[#25D366]/25 transition-colors border border-[#25D366]/30"
                title="Direct WhatsApp Consultation"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-[#128C7E] dark:text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 sm:p-2.5 bg-pure-white/80 dark:bg-dark-surface text-carbon dark:text-dark-text hover:bg-pure-white border border-carbon/15 dark:border-dark-border transition-all shadow-xs cursor-pointer"
                aria-label="Toggle theme"
                title="Toggle Dark / Light Mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-graphite" />}
              </button>

              {/* Primary Free Quote CTA (Desktop only - Sharp Format) */}
              <button
                onClick={() => onOpenQuote()}
                className="hidden md:inline-flex items-center justify-center gap-1.5 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] border border-vivid-teal cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Free Quote</span>
              </button>

              {/* Mobile Hamburger Toggle Button (Sharp Format) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text hover:bg-pure-white/90 border border-carbon/15 dark:border-dark-border transition-colors focus:outline-none shadow-xs"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER (SHARP SQUARE FORMAT) */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
          <div
            className="fixed inset-0 bg-carbon/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-x-2 top-2 bottom-20 bg-pure-white dark:bg-dark-card shadow-2xl p-5 flex flex-col justify-between overflow-y-auto border border-carbon/20 dark:border-dark-border">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-dark-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-auto flex items-center justify-center shrink-0">
                    <img src="/ps-logo.png" alt="PS Safetynets Solutions" className="h-full w-auto object-contain" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-carbon dark:text-dark-text block leading-none font-display">
                      PS Safetynets Solutions
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-vivid-teal font-bold uppercase mt-0.5 block">
                      Hyderabad Safety Solutions
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-gray-100 dark:bg-dark-surface text-carbon dark:text-dark-text border border-carbon/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Nav Links */}
              <div className="py-3 space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-eyebrow text-mist dark:text-dark-muted mb-2 px-2">
                  Navigation
                </p>

                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-[16px] text-sm font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'bg-carbon text-pure-white font-semibold'
                      : 'text-carbon dark:text-dark-text hover:bg-sage-canvas/40 dark:hover:bg-dark-surface'
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>

                {/* Services Accordion Dropdown on Mobile */}
                <div className="rounded-[18px] bg-sage-canvas/30 dark:bg-dark-surface/60 overflow-hidden border border-carbon/5 dark:border-dark-border">
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-bold text-carbon dark:text-dark-text flex items-center gap-1.5"
                    >
                      <Layers className="w-4 h-4 text-vivid-teal" />
                      <span>Services (All 5)</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                      className="p-1 rounded-full text-carbon dark:text-dark-text hover:bg-pure-white/40"
                      aria-label="Toggle mobile services"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesAccordionOpen ? 'rotate-180 text-vivid-teal' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expanded 5 Services in Mobile Drawer */}
                  {mobileServicesAccordionOpen && (
                    <div className="p-2 pt-0 space-y-1 border-t border-carbon/5 dark:border-dark-border">
                      {services.map((srv) => (
                        <Link
                          key={srv.id}
                          to={`/services/${srv.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-[12px] bg-pure-white dark:bg-dark-card text-xs font-semibold text-carbon dark:text-dark-text hover:bg-vivid-teal/20 transition-colors"
                        >
                          <div>
                            <div className="font-bold">{srv.title}</div>
                            <div className="text-[10px] text-slate dark:text-dark-muted font-normal">{srv.shortTitle}</div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-mist shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Gallery */}
                <Link
                  to="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-[16px] text-sm font-medium transition-colors ${
                    location.pathname === '/gallery'
                      ? 'bg-carbon text-pure-white font-semibold'
                      : 'text-carbon dark:text-dark-text hover:bg-sage-canvas/40 dark:hover:bg-dark-surface'
                  }`}
                >
                  <span>Gallery</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>

                {/* Reviews */}
                <Link
                  to="/reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-[16px] text-sm font-medium transition-colors ${
                    location.pathname === '/reviews'
                      ? 'bg-carbon text-pure-white font-semibold'
                      : 'text-carbon dark:text-dark-text hover:bg-sage-canvas/40 dark:hover:bg-dark-surface'
                  }`}
                >
                  <span>Reviews</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>

                {/* Visiting Card (3D Pass) */}
                <Link
                  to="/visiting-card"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-[16px] text-sm font-medium transition-colors ${
                    location.pathname === '/visiting-card' || location.pathname === '/business-card'
                      ? 'bg-amber-500 text-carbon font-bold'
                      : 'text-carbon dark:text-dark-text hover:bg-amber-500/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Visiting Card (3D)</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300">
                    Pass
                  </span>
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-[16px] text-sm font-medium transition-colors ${
                    location.pathname === '/contact'
                      ? 'bg-carbon text-pure-white font-semibold'
                      : 'text-carbon dark:text-dark-text hover:bg-sage-canvas/40 dark:hover:bg-dark-surface'
                  }`}
                >
                  <span>Contact</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-gray-100 dark:border-dark-border space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-vivid-teal text-carbon font-bold py-3.5 rounded-[16px] shadow-sm text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Free Doorstep Measurement</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919900980207"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-[14px] bg-gray-100 dark:bg-dark-surface text-carbon dark:text-dark-text text-xs font-bold"
                >
                  <span>Call 9900980207</span>
                </a>
                <a
                  href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20would%20like%20a%20free%20inspection%20and%20quote%20in%20Hyderabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-[14px] bg-[#25D366]/15 text-[#128C7E] dark:text-[#25D366] text-xs font-bold"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
