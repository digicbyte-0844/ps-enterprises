import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Zap,
  Building,
  Radio,
  ExternalLink
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export const CARD_THEMES = {
  'royal-obsidian': {
    id: 'royal-obsidian',
    name: 'Executive Obsidian & 24K Gold',
    badge: 'Luxury Matte',
    frontBg: 'bg-gradient-to-br from-[#0c1013] via-[#14191e] to-[#070a0c]',
    backBg: 'bg-gradient-to-br from-[#090d10] via-[#11161b] to-[#05080a]',
    textColor: 'text-white',
    subTextColor: 'text-amber-100/70',
    accentText: 'bg-gradient-to-r from-[#F7D070] via-[#E5B548] to-[#CAA030] bg-clip-text text-transparent',
    border: 'border border-[#E5B548]/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_25px_rgba(229,181,72,0.15)]',
    pillBg: 'bg-amber-400/10 text-amber-300 border border-amber-400/25',
    qrDark: '#0b0f12',
    qrLight: '#ffffff',
    foilGlint: 'from-amber-200/20 via-white/10 to-transparent',
    chipColor: 'bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600',
    sealText: 'text-amber-300'
  },
  'imperial-navy': {
    id: 'imperial-navy',
    name: 'Imperial Navy & Amber (Brand)',
    badge: 'Official Identity',
    frontBg: 'bg-gradient-to-br from-[#071b33] via-[#0b2749] to-[#041224]',
    backBg: 'bg-gradient-to-br from-[#051528] via-[#09223f] to-[#030d1a]',
    textColor: 'text-white',
    subTextColor: 'text-blue-100/75',
    accentText: 'bg-gradient-to-r from-[#FFD066] via-[#F5A623] to-[#FFBF33] bg-clip-text text-transparent',
    border: 'border border-amber-500/40 shadow-[0_20px_60px_-15px_rgba(7,27,51,0.9),0_0_25px_rgba(245,166,35,0.2)]',
    pillBg: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    qrDark: '#071b33',
    qrLight: '#ffffff',
    foilGlint: 'from-amber-300/20 via-sky-200/15 to-transparent',
    chipColor: 'bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600',
    sealText: 'text-amber-400'
  },
  'minimalist-ivory': {
    id: 'minimalist-ivory',
    name: 'Architectural Ivory & Emerald',
    badge: 'Cotton Letterpress',
    frontBg: 'bg-gradient-to-br from-[#ffffff] via-[#f7faf8] to-[#edf3ef]',
    backBg: 'bg-gradient-to-br from-[#f8faf9] via-[#edf3f0] to-[#e4ece7]',
    textColor: 'text-[#0d1212]',
    subTextColor: 'text-[#4a5555]',
    accentText: 'text-[#065f46]',
    border: 'border border-emerald-900/15 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)]',
    pillBg: 'bg-emerald-600/10 text-emerald-800 border border-emerald-600/20',
    qrDark: '#064e3b',
    qrLight: '#ffffff',
    foilGlint: 'from-emerald-300/20 via-white/40 to-transparent',
    chipColor: 'bg-gradient-to-br from-emerald-300 via-teal-500 to-emerald-700',
    sealText: 'text-emerald-700'
  },
  'cyber-frost': {
    id: 'cyber-frost',
    name: 'Cyber Glass & Vivid Teal',
    badge: 'Frosted Acrylic',
    frontBg: 'bg-gradient-to-br from-[#0a181c]/95 via-[#0d2226]/95 to-[#061214]/95 backdrop-blur-xl',
    backBg: 'bg-gradient-to-br from-[#081518]/95 via-[#0b1c20]/95 to-[#040c0e]/95 backdrop-blur-xl',
    textColor: 'text-white',
    subTextColor: 'text-teal-100/70',
    accentText: 'bg-gradient-to-r from-[#64d5b3] via-[#7ef4d4] to-[#40c29f] bg-clip-text text-transparent',
    border: 'border border-[#64d5b3]/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85),0_0_25px_rgba(100,213,179,0.25)]',
    pillBg: 'bg-[#64d5b3]/15 text-[#64d5b3] border border-[#64d5b3]/30',
    qrDark: '#061214',
    qrLight: '#ffffff',
    foilGlint: 'from-teal-300/25 via-emerald-200/15 to-transparent',
    chipColor: 'bg-gradient-to-br from-teal-200 via-teal-400 to-cyan-600',
    sealText: 'text-[#64d5b3]'
  }
};

export default function VisitingCard({
  themeId = 'royal-obsidian',
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  isFlipped = false,
  onFlipToggle,
  cardData = {
    company: 'PS Safetynets Solutions',
    tagline: 'Architectural Safety & Netting Solutions',
    name: 'Laxman Mylapalli',
    designation: 'Managing Director & Proprietor',
    phone: '+91 99009 80207',
    email: 'pssafetynetssolutions@gmail.com',
    website: 'pssafetynetssolutions.in',
    address: 'HITEC City, Madhapur & Gachibowli Hub, Hyderabad - 500081'
  },
  frontCardRef,
  backCardRef,
  enableTilt = true
}) {
  const theme = CARD_THEMES[themeId] || CARD_THEMES['royal-obsidian'];
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const cardContainerRef = useRef(null);
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Generate dynamic high-res QR code (Always redirects to WhatsApp chat)
  useEffect(() => {
    const whatsappText = `Hello PS Safetynets Solutions, I scanned the visiting card of Laxman Mylapalli (Proprietor) and would like to request a free doorstep inspection in Hyderabad.`;
    const qrData = `https://wa.me/919900980207?text=${encodeURIComponent(whatsappText)}`;

    QRCode.toDataURL(qrData, {
      width: 450,
      margin: 1,
      color: {
        dark: theme.qrDark,
        light: theme.qrLight
      },
      errorCorrectionLevel: 'H'
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error('QR code error', err));
  }, [theme]);

  // Gyroscopic 3D mouse tilt handler
  const handleMouseMove = (e) => {
    if (!enableTilt || !cardContainerRef.current) return;
    const rect = cardContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 12;

    setTilt({
      rotX,
      rotY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotX: 0, rotY: 0, glareX: 50, glareY: 50 });
  };

  const isVertical = orientation === 'vertical';

  // Base dimensions (Standard visiting card ratio 3.5" x 2.0" = 1.75)
  // Responsive container sizing:
  const cardStyleDimensions = isVertical
    ? 'w-[290px] sm:w-[320px] md:w-[340px] h-[480px] sm:h-[520px] md:h-[550px]'
    : 'w-[310px] sm:w-[450px] md:w-[510px] h-[195px] sm:h-[275px] md:h-[305px]';

  return (
    <div
      ref={cardContainerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none perspective-1500 mx-auto my-2 sm:my-4 transition-all duration-300 ${cardStyleDimensions}`}
      style={{
        transform: enableTilt && isHovered
          ? `perspective(1200px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
    >
      {/* Card 3D Flip Wrapper */}
      <div
        className="w-full h-full relative transform-style-3d transition-transform duration-700 ease-in-out cursor-pointer"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        onClick={onFlipToggle}
        title="Click to flip card"
      >
        {/* ========================================================================= */}
        {/* FRONT SIDE */}
        {/* ========================================================================= */}
        <div
          ref={frontCardRef}
          className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden p-5 sm:p-7 flex flex-col justify-between ${theme.frontBg} ${theme.border}`}
        >
          {/* Subtle Safety Mesh Texture Background Debossing */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 10px 10px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Dynamic Light Reflection / Foil Sheen */}
          {enableTilt && isHovered && (
            <div
              className={`absolute inset-0 pointer-events-none bg-gradient-to-tr ${theme.foilGlint} opacity-40 transition-opacity duration-300`}
              style={{
                backgroundPosition: `${tilt.glareX}% ${tilt.glareY}%`
              }}
            />
          )}

          {/* Corner Metallic Accent Trim */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/15 to-transparent pointer-events-none" />

          {/* Top Bar: Brand, Logo & Smart Chip */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Emblem */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-pure-white/10 backdrop-blur-md p-1 border border-white/20 shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/ps-logo.png"
                  alt="PS Shield Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight uppercase leading-tight font-display">
                  <span className={theme.accentText}>{cardData.company}</span>
                </h2>
                <p className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${theme.subTextColor}`}>
                  {cardData.tagline}
                </p>
              </div>
            </div>

            {/* Simulated Smart Contact Chip & Certified Seal */}
            <div className="flex flex-col items-end gap-1.5">
              <div className={`w-8 h-6 rounded-sm ${theme.chipColor} border border-white/30 shadow-inner flex items-center justify-center relative overflow-hidden`}>
                <div className="w-full h-[1px] bg-black/30 absolute top-2" />
                <div className="w-full h-[1px] bg-black/30 absolute bottom-2" />
                <div className="h-full w-[1px] bg-black/30 absolute left-2.5" />
                <Radio className="w-3 h-3 text-black/60 relative z-10" />
              </div>
              <span className={`text-[8px] font-bold tracking-widest uppercase ${theme.sealText}`}>
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Middle Body: Executive Profile & Designation */}
          <div className={`relative z-10 ${isVertical ? 'my-auto space-y-3' : 'my-2 sm:my-3'}`}>
            <div className="inline-block">
              <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${theme.pillBg} mb-1 inline-block`}>
                Official Executive Pass
              </span>
              <h3 className={`text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight ${theme.textColor}`}>
                {cardData.name}
              </h3>
              <p className={`text-xs sm:text-sm font-semibold tracking-wide ${theme.subTextColor}`}>
                {cardData.designation}
              </p>
            </div>

            {/* Quick Core Specializations (Only visible in vertical or larger cards) */}
            {isVertical && (
              <div className="pt-2 border-t border-white/10 space-y-1.5 text-[10px] text-white/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>SS 316 Invisible Grills Specialist</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>High-Rise Pigeon Netting & Sports Turf</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>5-Year Official Stamped Warranty</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar: Contact Grid & Rapid Dispatch */}
          <div className="relative z-10 border-t border-white/15 pt-2.5 sm:pt-3">
            <div className={`grid ${isVertical ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-x-4 gap-y-1.5'} text-[10px] sm:text-[11px] ${theme.textColor}`}>
              {/* Phone */}
              <div className="flex items-center gap-2 truncate">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Phone className="w-2.5 h-2.5" />
                </div>
                <span className="font-bold tracking-tight truncate">{cardData.phone}</span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2 truncate">
                <div className="w-5 h-5 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                  <WhatsAppIcon className="w-2.5 h-2.5 fill-[#25D366]" />
                </div>
                <span className="font-semibold truncate">9900980207 (Direct Chat)</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 truncate">
                <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                  <Mail className="w-2.5 h-2.5" />
                </div>
                <span className="truncate">{cardData.email}</span>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2 truncate">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <Globe className="w-2.5 h-2.5" />
                </div>
                <span className="font-semibold text-emerald-400 dark:text-vivid-teal truncate">{cardData.website}</span>
              </div>
            </div>

            {/* Address Row */}
            <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] sm:text-[9px] text-white/60">
              <div className="flex items-center gap-1 truncate max-w-[80%]">
                <MapPin className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                <span className="truncate">{cardData.address}</span>
              </div>
              <span className="font-mono tracking-widest text-amber-300 font-bold uppercase shrink-0">
                CLICK TO FLIP &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BACK SIDE */}
        {/* ========================================================================= */}
        <div
          ref={backCardRef}
          className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden rotate-y-180 p-5 sm:p-7 flex flex-col justify-between ${theme.backBg} ${theme.border}`}
        >
          {/* Subtle Grid Deboss */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 10px 10px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Holographic Security Strip */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-teal-400/20 via-amber-300/30 via-pink-400/20 to-blue-400/20 border-b border-white/20 flex items-center justify-between px-4">
            <span className="text-[7px] font-mono tracking-widest text-white/70 uppercase">
              AUTHENTIC SECURITY SHIELD • PS ENTERPRISES
            </span>
            <span className="text-[7px] font-mono tracking-widest text-amber-300 font-bold uppercase">
              VERIFIED V-CARD
            </span>
          </div>

          {/* Top of Back Card: Assurance & Certification */}
          <div className="relative z-10 pt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-amber-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className={`text-[10px] sm:text-xs font-bold tracking-tight block leading-tight ${theme.textColor}`}>
                  5-Year Doorstep Warranty
                </span>
                <span className={`text-[8px] sm:text-[9px] font-medium block ${theme.subTextColor}`}>
                  Stamped Official Handover Certificate
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded ${theme.pillBg} inline-block`}>
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Center of Back Card: QR Code & Core Services Grid */}
          <div className={`relative z-10 flex ${isVertical ? 'flex-col items-center gap-4 my-2' : 'flex-row items-center justify-between gap-4 my-auto'}`}>
            
            {/* Dynamic Scannable QR Code */}
            <div className="flex flex-col items-center">
              <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-lg border border-white/30 flex items-center justify-center relative group">
                {qrCodeUrl ? (
                  <img
                    src={qrCodeUrl}
                    alt="Scan Contact QR Code"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-200 animate-pulse rounded" />
                )}
                {/* Mini Center Shield Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-white shadow-md p-0.5 border border-amber-500/50 flex items-center justify-center">
                    <img src="/ps-logo.png" alt="PS" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-wider text-[#25D366] mt-1.5 text-center flex items-center gap-1">
                <WhatsAppIcon className="w-2.5 h-2.5 fill-[#25D366]" />
                Scan for WhatsApp Chat
              </span>
            </div>

            {/* 5 Core Safety Pillars List */}
            <div className="flex-1 space-y-1.5 text-[9px] sm:text-[11px] text-left">
              <div className="text-[9px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                5 Core Architectural Services:
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="font-medium truncate">First Pigeon Net (UV Copolymer)</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="font-medium truncate">SS 316 Marine Invisible Grills</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="font-medium truncate">Box Cricket & Sports Turf Enclosures</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="font-medium truncate">Building Duct & Shaft Netting</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="font-medium truncate">Polycarbonate Bird Spikes</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar of Back Card: Pan-India Dispatch Hubs */}
          <div className="relative z-10 border-t border-white/15 pt-2 flex items-center justify-between text-[8px] sm:text-[9px] text-white/60">
            <div className="truncate max-w-[80%]">
              <span className="font-bold text-amber-300">Rapid Dispatch:</span> Hyderabad • Bengaluru • Mumbai • Pune • Chennai • Delhi NCR
            </div>
            <span className="font-mono tracking-wider text-amber-300 font-bold uppercase shrink-0">
              &larr; FLIP FRONT
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
