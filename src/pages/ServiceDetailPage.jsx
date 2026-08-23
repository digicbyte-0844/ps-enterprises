import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import AnimatedImageCarousel from '../components/AnimatedImageCarousel';
import HyderabadLocationsSection from '../components/HyderabadLocationsSection';
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Star,
  Phone,
  Sparkles,
  CheckCircle2,
  Clock,
  ChevronRight,
  Layers,
  Award,
  Calendar,
  User,
  MapPin,
  Tag
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import confetti from 'canvas-confetti';

export default function ServiceDetailPage({ onOpenQuote }) {
  const { id } = useParams();
  const service = services.find((s) => s.id === id) || services[0];
  const [selectedPackage, setSelectedPackage] = useState(1);

  // Embedded Quick Booking State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    location: '',
    preferredDate: '',
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#64d5b3', '#0d1212', '#f59e0b'],
      });
    } catch (err) {}
  };

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in">
      
      {/* ========================================================================= */}
      {/* 1. CLEAN CINEMATIC HERO (SHARP SQUARE WITH MOVING MARQUEE) */}
      {/* ========================================================================= */}
      <section className="relative w-full flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-carbon text-pure-white">
        
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-80 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-carbon/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/92 via-transparent to-carbon/80 hidden lg:block" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-pure-white/80 mb-3 sm:mb-4">
            <Link to="/" className="hover:text-vivid-teal transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-vivid-teal transition-colors">Services</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold truncate">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-3 text-left">
              
              {/* Sharp Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-carbon/80 backdrop-blur-md border-l-2 border-emerald-400 border-t border-r border-b border-pure-white/20 text-pure-white shadow-sm">
                <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-vivid-teal">
                  PS SAFETYNETS • {service.eyebrow}
                </span>
              </div>

              {/* 1-2 Line Crisp Heading */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-pure-white tracking-tight leading-[1.15] drop-shadow-md font-display">
                {service.title}
              </h1>

              {/* Tagline */}
              <p className="text-emerald-300 text-xs sm:text-base font-semibold">
                {service.shortTitle} — {service.tagline}
              </p>

              {/* Sharp Moving Marquee Banner */}
              <div className="overflow-hidden py-2 px-3.5 bg-carbon/90 backdrop-blur-md border border-pure-white/20 flex items-center shadow-lg my-2">
                <div className="animate-marquee flex items-center gap-5 text-[11px] sm:text-xs font-bold text-vivid-teal tracking-wide">
                  <span>✨ {service.badge.toUpperCase()}</span>
                  <span>•</span>
                  <span className="text-amber-300">PRICE: {service.priceRange}</span>
                  <span>•</span>
                  <span className="text-cyan-300">INSTALL: {service.turnaround}</span>
                  <span>•</span>
                  <span className="text-emerald-300">RATING: ★ {service.rating} ({service.reviewsCount}+ REVIEWS)</span>
                  <span>•</span>
                  <span className="text-white">⚡ 30-MIN RAPID HYDERABAD DISPATCH</span>
                  <span>•</span>
                  {/* Seamless loop */}
                  <span>✨ {service.badge.toUpperCase()}</span>
                  <span>•</span>
                  <span className="text-amber-300">PRICE: {service.priceRange}</span>
                  <span>•</span>
                  <span className="text-cyan-300">INSTALL: {service.turnaround}</span>
                  <span>•</span>
                  <span className="text-emerald-300">RATING: ★ {service.rating} ({service.reviewsCount}+ REVIEWS)</span>
                  <span>•</span>
                  <span className="text-white">⚡ 30-MIN RAPID HYDERABAD DISPATCH</span>
                  <span>•</span>
                </div>
              </div>

              {/* Sharp CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 pt-2">
                <button
                  onClick={() => onOpenQuote(`${service.title} - Free Site Inspection`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3.5 px-6 sm:px-7 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm cursor-pointer border border-vivid-teal"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Doorstep Measurement</span>
                </button>

                <a
                  href={`https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                    service.title
                  )}%20in%20Hyderabad.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 sm:px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold transition-all shadow-lg active:scale-[0.98] border border-[#25D366]"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  <span>WhatsApp 9900980207</span>
                </a>
              </div>
            </div>

            {/* Right Photo Carousel (Sharp Square Edges) */}
            <div className="lg:col-span-5">
              <AnimatedImageCarousel
                images={service.galleryImages || [service.image]}
                title={service.title}
                badge={service.badge}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* ========================================================================= */}
        {/* 2. BEFORE / AFTER TRANSFORMATION */}
        {/* ========================================================================= */}
        {service.beforeImage && service.afterImage && (
          <div className="mb-14 sm:mb-20">
            <BeforeAfterSlider
              beforeImage={service.beforeImage}
              afterImage={service.afterImage}
              beforeLabel="Before: Vulnerable & Exposed"
              afterLabel={`After: Protected with ${service.title}`}
              title={`${service.title} — Real-World Transformation`}
              subtitle="Watch the transformation sweep automatically or drag the slider to compare before and after installation."
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. TECHNICAL SPECIFICATIONS (SHARP SQUARE FORMAT) */}
        {/* ========================================================================= */}
        <div className="bg-pure-white dark:bg-dark-card p-5 sm:p-10 border border-carbon/15 dark:border-dark-border shadow-subtle-hover mb-14 sm:mb-20 text-left">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
              ENGINEERING STANDARDS & HARDWARE
            </span>
            <h2 className="text-xl sm:text-4xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
              Technical Specifications & Rigging.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            {service.specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-sage-canvas/30 dark:bg-dark-surface/60 p-3.5 sm:p-5 border-l-2 border-cyan-500 border-t border-r border-b border-carbon/10 dark:border-dark-border flex flex-col justify-between"
              >
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-mist dark:text-dark-muted font-bold">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-base font-bold text-carbon dark:text-dark-text mt-1 sm:mt-2">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Key Engineering Highlights */}
          <div className="pt-5 sm:pt-6 border-t border-gray-200 dark:border-dark-border">
            <h3 className="text-xs font-bold uppercase tracking-wider text-carbon dark:text-dark-text mb-3 sm:mb-4">
              Safety & Architectural Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              {service.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-carbon/90 dark:text-dark-text font-medium">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. 3 TRANSPARENT INSTALLATION PACKAGES (SHARP FORMAT) */}
        {/* ========================================================================= */}
        {service.packages && (
          <div className="mb-14 sm:mb-20 text-left">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
                GUARANTEED TRANSPARENT PRICING
              </span>
              <h2 className="text-xl sm:text-4xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
                Recommended Installation Packages.
              </h2>
              <p className="text-slate dark:text-dark-muted text-xs sm:text-sm mt-1">
                Choose the certified package engineered for your building height and warranty preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {service.packages.map((pkg, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => setSelectedPackage(pIdx)}
                  className={`p-5 sm:p-8 flex flex-col justify-between border cursor-pointer transition-all duration-200 ${
                    pkg.recommended
                      ? 'bg-carbon text-pure-white border-2 border-vivid-teal shadow-2xl scale-[1.01]'
                      : 'bg-pure-white dark:bg-dark-card text-carbon dark:text-dark-text border border-carbon/15 dark:border-dark-border hover:border-carbon/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className={`text-xs font-bold px-3 py-1 uppercase tracking-wider ${
                        pkg.recommended ? 'bg-vivid-teal text-carbon' : 'bg-sage-canvas dark:bg-dark-surface text-carbon dark:text-dark-text border border-carbon/10'
                      }`}>
                        {pkg.recommended ? 'Most Popular' : pkg.durability}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight mb-1 font-display">
                      {pkg.name}
                    </h3>
                    <div className="text-xl sm:text-3xl font-extrabold my-3 sm:my-4 text-amber-400 font-display">
                      {pkg.price}
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm mb-5 sm:mb-6">
                      {pkg.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${pkg.recommended ? 'text-vivid-teal' : 'text-emerald-600'}`} />
                          <span className={pkg.recommended ? 'text-pure-white/90' : 'text-slate dark:text-dark-muted'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onOpenQuote(`${service.title} - ${pkg.name} (${pkg.price})`)}
                    className={`w-full py-3.5 text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer ${
                      pkg.recommended
                        ? 'bg-vivid-teal text-carbon hover:bg-teal-hover border border-vivid-teal'
                        : 'bg-carbon text-pure-white dark:bg-dark-surface hover:bg-black border border-carbon'
                    }`}
                  >
                    Select This Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. 5-STEP INSTALLATION PROTOCOL (SHARP SQUARE FORMAT) */}
        {/* ========================================================================= */}
        {service.installationSteps && (
          <div className="bg-pure-white dark:bg-dark-card p-5 sm:p-10 border border-carbon/15 dark:border-dark-border shadow-subtle-hover mb-14 sm:mb-20 text-left">
            <div className="max-w-2xl mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
                STANDARDIZED RIGGING
              </span>
              <h2 className="text-xl sm:text-4xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
                5-Step Certified Installation Protocol.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {service.installationSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-sage-canvas/30 dark:bg-dark-surface/60 p-4 sm:p-5 border-l-2 border-emerald-500 border-t border-r border-b border-carbon/10 dark:border-dark-border flex flex-col justify-between"
                >
                  <div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-carbon text-vivid-teal font-bold text-xs flex items-center justify-center mb-2.5 sm:mb-3">
                      {sIdx + 1}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-carbon dark:text-dark-text mb-1.5 font-display">
                      {step.title}
                    </h4>
                    <p className="text-slate dark:text-dark-muted text-xs leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. VERIFIED HYDERABAD CUSTOMER REVIEWS (AUTHENTIC HUMAN VOICE) */}
        {/* ========================================================================= */}
        {(service.serviceReviews || service.reviews) && (
          <div className="mb-14 sm:mb-20 text-left">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
                  VERIFIED HYDERABAD REVIEWS
                </span>
                <h2 className="text-xl sm:text-4xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
                  Reviews for {service.title}.
                </h2>
              </div>
              <div className="mt-2 sm:mt-0 text-xs font-semibold text-slate dark:text-dark-muted flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Verified Hyderabad Installations Only</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {(service.serviceReviews || service.reviews).map((rev, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-pure-white dark:bg-dark-card p-5 sm:p-8 border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Verified Resident
                      </span>
                    </div>

                    <blockquote className="text-sm sm:text-base font-bold text-carbon dark:text-dark-text mb-2.5 leading-snug font-display">
                      "{rev.quote}"
                    </blockquote>

                    <p className="text-slate dark:text-dark-muted text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {rev.details}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-gray-100 dark:border-dark-border flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-carbon dark:text-dark-text font-display">{rev.name}</div>
                      <div className="text-[10px] sm:text-[11px] text-mist dark:text-dark-muted">{rev.location}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 7. EMBEDDED DOORSTEP MEASUREMENT BOOKING FORM (SHARP SQUARE FORMAT) */}
        {/* ========================================================================= */}
        <div className="bg-carbon text-pure-white p-5 sm:p-10 lg:p-12 border border-carbon shadow-2xl relative overflow-hidden mb-14 sm:mb-20 text-left">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-vivid-teal">
                PS SAFETYNETS SOLUTIONS • HYDERABAD
              </span>
              <h3 className="text-xl sm:text-4xl font-bold text-pure-white tracking-tight leading-tight font-display">
                Ready to protect your space with {service.title}?
              </h3>
              <p className="text-pure-white/80 text-xs sm:text-base leading-relaxed">
                Book a certified Hyderabad safety technician. We arrive with laser precision tools, physical net & cable samples, and guaranteed upfront pricing.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href="tel:+919900980207"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-vivid-teal hover:bg-teal-hover text-carbon text-xs sm:text-sm font-bold transition-all shadow-md border border-vivid-teal"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99009 80207</span>
                </a>
                <a
                  href={`https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20${encodeURIComponent(
                    service.title
                  )}%20in%20Hyderabad.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold transition-all shadow-md border border-[#25D366]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp 9900980207</span>
                </a>
              </div>
            </div>

            {/* Booking Form in Sharp Box */}
            <div className="lg:col-span-6 bg-pure-white/10 backdrop-blur-md p-5 sm:p-8 border border-pure-white/20">
              {!bookingSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-pure-white mb-1 font-display">
                    Schedule Free Inspection for {service.title}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-pure-white/90 mb-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Sravan Reddy"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full bg-pure-white/15 border border-pure-white/20 px-3 py-2 text-xs sm:text-sm text-pure-white placeholder-pure-white/50 focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-pure-white/90 mb-1">Phone (WhatsApp)</label>
                      <input
                        type="tel"
                        placeholder="+91 99009 80207"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full bg-pure-white/15 border border-pure-white/20 px-3 py-2 text-xs sm:text-sm text-pure-white placeholder-pure-white/50 focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-pure-white/90 mb-1">Hyderabad Location</label>
                      <input
                        type="text"
                        placeholder="e.g. My Home Bhooja, HITEC City"
                        required
                        value={bookingForm.location}
                        onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                        className="w-full bg-pure-white/15 border border-pure-white/20 px-3 py-2 text-xs sm:text-sm text-pure-white placeholder-pure-white/50 focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-pure-white/90 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={bookingForm.preferredDate}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                        className="w-full bg-pure-white/15 border border-pure-white/20 px-3 py-2 text-xs sm:text-sm text-pure-white focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3.5 transition-all flex items-center justify-center gap-2 shadow-md text-xs sm:text-sm mt-1 cursor-pointer border border-vivid-teal"
                  >
                    <span>Confirm Free Inspection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-5">
                  <div className="w-10 h-10 bg-vivid-teal/30 text-vivid-teal flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-pure-white mb-1 font-display">
                    Booking Confirmed!
                  </h4>
                  <p className="text-pure-white/80 text-xs mb-3">
                    Our Hyderabad engineering team will contact you shortly on <strong>{bookingForm.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setBookingSubmitted(false)}
                    className="px-4 py-2 bg-pure-white/20 text-pure-white text-xs font-semibold hover:bg-pure-white/30 border border-pure-white/30"
                  >
                    Book Another Site
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 8. EXPLORE OTHER 4 CORE SAFETY SERVICES (SHARP SQUARE CARDS) */}
        {/* ========================================================================= */}
        <div className="mb-14 sm:mb-20 text-left">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
              COMPLETE SAFETY PORTFOLIO
            </span>
            <h2 className="text-xl sm:text-4xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
              Explore Our Other Safety Solutions.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {otherServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.id}`}
                className="group bg-pure-white dark:bg-dark-card overflow-hidden border border-carbon/15 dark:border-dark-border shadow-subtle-hover flex flex-col justify-between hover:border-carbon/30 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 bg-pure-white/95 dark:bg-dark-card/95 text-[9px] font-bold text-carbon dark:text-dark-text uppercase border-l-2 border-emerald-500">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h4 className="text-sm sm:text-base font-bold text-carbon dark:text-dark-text font-display mb-1 group-hover:text-emerald-600 dark:group-hover:text-vivid-teal transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate dark:text-dark-muted line-clamp-2 mb-2.5">
                    {item.description}
                  </p>
                  <span className="text-xs font-bold text-vivid-teal flex items-center gap-1">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 9. HYDERABAD LOCAL SEO & DISPATCH AREAS */}
        {/* ========================================================================= */}
        <HyderabadLocationsSection onOpenQuote={onOpenQuote} />
      </div>
    </div>
  );
}
