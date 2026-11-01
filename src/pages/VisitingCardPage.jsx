import React, { useState, useRef } from 'react';
import {
  Download,
  Share2,
  Copy,
  Printer,
  Check,
  RotateCw,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Globe,
  ShieldCheck,
  Award,
  Layers,
  Palette,
  Edit3,
  Sliders,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Smartphone
} from 'lucide-react';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import VisitingCard, { CARD_THEMES } from '../components/VisitingCard';
import VisitingCardFlatExport from '../components/VisitingCardFlatExport';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function VisitingCardPage() {
  const [selectedTheme, setSelectedTheme] = useState('royal-obsidian');
  const [orientation, setOrientation] = useState('horizontal'); // 'horizontal' | 'vertical'
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [exportQrCodeUrl, setExportQrCodeUrl] = useState('');

  // Editable Cardholder State
  const [cardData, setCardData] = useState({
    company: 'PS Safetynets Solutions',
    tagline: 'Architectural Safety & Netting Solutions',
    name: 'Laxman Mylapalli',
    designation: 'Managing Director & Proprietor',
    phone: '+91 99009 80207',
    email: 'pssafetynetssolutions@gmail.com',
    website: 'pssafetynetssolutions.in',
    address: 'HITEC City, Madhapur & Gachibowli Hub, Hyderabad - 500081'
  });

  const frontCardRef = useRef(null);
  const backCardRef = useRef(null);
  const flatFrontRef = useRef(null);
  const flatBackRef = useRef(null);
  const printSheetRef = useRef(null);

  // Generate high-res WhatsApp QR code for flat export
  React.useEffect(() => {
    const theme = CARD_THEMES[selectedTheme] || CARD_THEMES['royal-obsidian'];
    const whatsappText = `Hello PS Safetynets Solutions, I scanned the official visiting card of Laxman Mylapalli (Proprietor) and would like to schedule a free doorstep measurement.`;
    const qrData = `https://wa.me/919900980207?text=${encodeURIComponent(whatsappText)}`;

    QRCode.toDataURL(qrData, {
      width: 500,
      margin: 1,
      color: {
        dark: theme.qrDark,
        light: theme.qrLight
      },
      errorCorrectionLevel: 'H'
    })
      .then((url) => setExportQrCodeUrl(url))
      .catch((err) => console.error('Export QR error', err));
  }, [selectedTheme]);

  // Trigger vCard (.vcf) download
  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${cardData.name}`,
      `ORG:${cardData.company}`,
      `TITLE:${cardData.designation}`,
      `TEL;TYPE=CELL,VOICE:${cardData.phone.replace(/[^0-9+]/g, '')}`,
      `EMAIL;TYPE=WORK,INTERNET:${cardData.email}`,
      `URL:https://${cardData.website}`,
      `ADR;TYPE=WORK:;;${cardData.address};Hyderabad;Telangana;500081;India`,
      'NOTE:ISO 9001:2015 Certified Architectural Safety Netting & SS 316 Invisible Grills. 5-Year Stamped Warranty.',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${cardData.name.replace(/\s+/g, '_')}_PS_Safetynets.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E5B548', '#64d5b3', '#25D366']
      });
    } catch (e) {}
  };

  // Export card as high-res 300 DPI PNG image using un-transformed flat export nodes
  const handleExportCardImage = async (whichSide = 'both') => {
    setDownloading(true);
    try {
      if (whichSide === 'front' || whichSide === 'both') {
        const targetNode = flatFrontRef.current || frontCardRef.current;
        if (targetNode) {
          const canvas = await html2canvas(targetNode, {
            scale: 1, // flatFrontRef is already exact 300 DPI (1050x600 or 600x1050)
            backgroundColor: null,
            useCORS: true,
            logging: false,
            allowTaint: true
          });
          const image = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = image;
          link.download = `PS_Safetynets_Front_${orientation}_${selectedTheme}_Laxman_Mylapalli.png`;
          link.click();
        }
      }

      if (whichSide === 'back' || whichSide === 'both') {
        const targetNode = flatBackRef.current || backCardRef.current;
        if (targetNode) {
          const canvas = await html2canvas(targetNode, {
            scale: 1, // flatBackRef is already exact 300 DPI flat without rotateY distortion
            backgroundColor: null,
            useCORS: true,
            logging: false,
            allowTaint: true
          });
          const image = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = image;
          link.download = `PS_Safetynets_Back_${orientation}_${selectedTheme}_Laxman_Mylapalli.png`;
          link.click();
        }
      }

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (e) {}
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setDownloading(false);
    }
  };

  // Copy details to clipboard
  const handleCopyDetails = () => {
    const text = `*${cardData.company}*
${cardData.tagline}
👤 ${cardData.name} (${cardData.designation})
📞 Helpline: ${cardData.phone}
💬 WhatsApp: 9900980207
✉️ Email: ${cardData.email}
🌐 Website: https://${cardData.website}
📍 Address: ${cardData.address}
🛡️ Certifications: ISO 9001:2015 Certified • 5-Year Stamped Warranty
🛠️ Services: First Pigeon Net • SS 316 Invisible Grills • Box Cricket Nets • Ducts Netting • Birds Spikes`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  // Print card sheet
  const handlePrintSheet = () => {
    window.print();
  };

  return (
    <div className="pt-24 sm:pt-36 pb-24 bg-sage-canvas dark:bg-[#080d0e] min-h-screen text-carbon dark:text-[#e6f1f0] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HEADER & INTRO */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pure-white/90 dark:bg-dark-card border-l-2 border-amber-500 border-t border-r border-b border-carbon/10 dark:border-dark-border mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-carbon dark:text-amber-400">
              OFFICIAL VISITING CARD & BUSINESS IDENTITY SUITE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] font-display">
            Executive Business Card.
          </h1>
          <p className="text-slate dark:text-dark-muted text-xs sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Engineered with senior designer precision. Explore the 3D physical card physics, customize credentials, scan the smart QR code, or export 300 DPI print-ready production files.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN INTERACTIVE 3D STUDIO WORKSPACE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT 7 COLS: 3D INTERACTIVE CARD STAGE */}
          <div className="lg:col-span-7 bg-pure-white/80 dark:bg-dark-card/90 backdrop-blur-md p-6 sm:p-10 border border-carbon/15 dark:border-dark-border shadow-subtle-hover flex flex-col items-center">
            
            {/* Top Quick Action Bar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-carbon/10 dark:border-dark-border">
              {/* Orientation Switcher */}
              <div className="flex items-center gap-1.5 bg-sage-canvas/40 dark:bg-dark-surface p-1 border border-carbon/10">
                <button
                  type="button"
                  onClick={() => setOrientation('horizontal')}
                  className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                    orientation === 'horizontal'
                      ? 'bg-carbon text-white shadow-xs'
                      : 'text-carbon/70 dark:text-dark-muted hover:text-carbon'
                  }`}
                >
                  Classic (3.5" × 2")
                </button>
                <button
                  type="button"
                  onClick={() => setOrientation('vertical')}
                  className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                    orientation === 'vertical'
                      ? 'bg-carbon text-white shadow-xs'
                      : 'text-carbon/70 dark:text-dark-muted hover:text-carbon'
                  }`}
                >
                  Executive Vertical (2" × 3.5")
                </button>
              </div>

              {/* Flip Button */}
              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-pure-white dark:bg-dark-surface hover:bg-carbon hover:text-white transition-all border border-carbon/20 text-xs font-bold cursor-pointer group shadow-2xs"
              >
                <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
                <span>Flip to {isFlipped ? 'Front Face' : 'Back Face (QR)'}</span>
              </button>
            </div>

            {/* The 3D Physical Card Rendering */}
            <div className="py-6 sm:py-8 flex items-center justify-center w-full min-h-[380px]">
              <VisitingCard
                themeId={selectedTheme}
                orientation={orientation}
                isFlipped={isFlipped}
                onFlipToggle={() => setIsFlipped(!isFlipped)}
                cardData={cardData}
                frontCardRef={frontCardRef}
                backCardRef={backCardRef}
                enableTilt={true}
              />
            </div>

            {/* Interactive Hints & Flip Notice */}
            <div className="w-full pt-4 mt-2 border-t border-carbon/10 dark:border-dark-border flex items-center justify-between text-[11px] text-slate dark:text-dark-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Move mouse over card for gyroscopic 3D foil reflection</span>
              </span>
              <span className="font-semibold text-carbon dark:text-dark-text">
                Current View: <strong className="text-amber-500 uppercase">{isFlipped ? 'Back (QR Code)' : 'Front (Identity)'}</strong>
              </span>
            </div>

            {/* Export & Production Buttons Under Card */}
            <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                disabled={downloading}
                onClick={() => handleExportCardImage('front')}
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-carbon text-white hover:bg-black text-xs font-bold transition-all shadow-xs cursor-pointer border border-carbon"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>{downloading ? 'Rendering...' : 'Download Front (PNG)'}</span>
              </button>

              <button
                type="button"
                disabled={downloading}
                onClick={() => handleExportCardImage('back')}
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-carbon text-white hover:bg-black text-xs font-bold transition-all shadow-xs cursor-pointer border border-carbon"
              >
                <Download className="w-3.5 h-3.5 text-vivid-teal" />
                <span>{downloading ? 'Rendering...' : 'Download Back (PNG)'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadVCard}
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#25D366] text-white hover:bg-[#1faa4f] text-xs font-bold transition-all shadow-xs cursor-pointer border border-[#25D366]"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Save to Phone (.VCF)</span>
              </button>
            </div>

          </div>

          {/* RIGHT 5 COLS: CONTROLS, THEMES & REAL-TIME CUSTOMIZER */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Theme Selector Palette */}
            <div className="bg-pure-white dark:bg-dark-card p-5 sm:p-6 border-l-4 border-l-amber-500 border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm sm:text-base font-bold text-carbon dark:text-dark-text flex items-center gap-2 font-display">
                  <Palette className="w-4 h-4 text-amber-500" />
                  <span>Curated Luxury Editions</span>
                </h3>
                <span className="text-[10px] font-bold text-mist uppercase">4 Styles</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {Object.values(CARD_THEMES).map((th) => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => setSelectedTheme(th.id)}
                    className={`p-3 text-left transition-all border cursor-pointer relative overflow-hidden ${
                      selectedTheme === th.id
                        ? 'border-amber-500 bg-amber-500/10 shadow-xs ring-1 ring-amber-500'
                        : 'border-carbon/10 hover:border-carbon/30 bg-sage-canvas/20 dark:bg-dark-surface'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-mist">
                        {th.badge}
                      </span>
                      {selectedTheme === th.id && (
                        <Check className="w-3.5 h-3.5 text-amber-500" />
                      )}
                    </div>
                    <div className="text-xs font-bold text-carbon dark:text-dark-text truncate">
                      {th.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Cardholder Data Customizer */}
            <div className="bg-pure-white dark:bg-dark-card p-5 sm:p-6 border-l-4 border-l-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-carbon dark:text-dark-text flex items-center gap-2 font-display">
                  <Sliders className="w-4 h-4 text-emerald-500" />
                  <span>Cardholder & QR Configuration</span>
                </h3>
                <span className="text-[10px] text-emerald-600 dark:text-vivid-teal font-bold uppercase">
                  Live Preview
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-carbon dark:text-dark-text mb-1">
                    Cardholder Full Name
                  </label>
                  <input
                    type="text"
                    value={cardData.name}
                    onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                    className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3 py-1.5 text-xs text-carbon dark:text-dark-text focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-carbon dark:text-dark-text mb-1">
                    Executive Title / Designation
                  </label>
                  <input
                    type="text"
                    value={cardData.designation}
                    onChange={(e) => setCardData({ ...cardData, designation: e.target.value })}
                    className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3 py-1.5 text-xs text-carbon dark:text-dark-text focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-carbon dark:text-dark-text mb-1">
                      Direct Mobile / Phone
                    </label>
                    <input
                      type="text"
                      value={cardData.phone}
                      onChange={(e) => setCardData({ ...cardData, phone: e.target.value })}
                      className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3 py-1.5 text-xs text-carbon dark:text-dark-text focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-carbon dark:text-dark-text mb-1">
                      Smart QR Destination:
                    </label>
                    <div className="w-full bg-[#25D366]/15 border border-[#25D366]/40 px-2.5 py-1.5 text-[11px] text-[#128C7E] dark:text-[#25D366] font-bold flex items-center gap-1.5">
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                      <span>Always Redirects to WhatsApp Chat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Sharing & Print Suite */}
            <div className="bg-pure-white dark:bg-dark-card p-5 sm:p-6 border-l-4 border-l-carbon dark:border-l-vivid-teal border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover space-y-3">
              <span className="text-[10px] font-bold text-mist uppercase tracking-wider block">
                Direct Dispatch & Print Tools
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="flex items-center justify-center gap-2 p-2.5 bg-sage-canvas/40 dark:bg-dark-surface hover:bg-sage-canvas transition-colors border border-carbon/15 text-xs font-bold text-carbon dark:text-dark-text cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Details!' : 'Copy Contact Text'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintSheet}
                  className="flex items-center justify-center gap-2 p-2.5 bg-sage-canvas/40 dark:bg-dark-surface hover:bg-sage-canvas transition-colors border border-carbon/15 text-xs font-bold text-carbon dark:text-dark-text cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-amber-500" />
                  <span>Print Sheet (Ctrl+P)</span>
                </button>
              </div>

              {/* Direct WhatsApp Share Link */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `*PS Safetynets Solutions - Executive Contact Card*\nLaxman Mylapilli (Managing Director & Proprietor)\nPhone: +91 99009 80207\nWebsite: https://pssafetynetssolutions.in\nSS 316 Invisible Grills & Pigeon Netting Solutions.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#128C7E] dark:text-[#25D366] text-xs font-bold transition-all text-center"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                <span>Share Card on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. GEMINI AI LUXURY 3D MOCKUP PRESENTATION */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-carbon/15 dark:border-dark-border gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                SENIOR DESIGNER SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-carbon dark:text-dark-text tracking-tight font-display">
                Photorealistic Studio Mockups.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate dark:text-dark-muted max-w-md">
              High-resolution 3D material studies demonstrating the metallic gold cold-foiling, tactile debossed safety net grid, and 450 GSM velvet cardstock finish.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Mockup 1: Vertical Luxury on Slate Slab */}
            <div className="bg-pure-white dark:bg-dark-card border border-carbon/15 dark:border-dark-border overflow-hidden shadow-subtle-hover group">
              <div className="relative aspect-[3/2] overflow-hidden bg-carbon">
                <img
                  src="/images/business-card-vertical-luxury.jpg"
                  alt="PS Safetynets Executive Card Front and Back on Slate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-carbon/90 text-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-amber-400/30">
                  Front & Back Presentation
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-carbon dark:text-dark-text font-display">
                    Obsidian & 24K Gold Stamped Suite
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 dark:text-vivid-teal font-bold">
                    300 DPI Prepress
                  </span>
                </div>
                <p className="text-xs text-slate dark:text-dark-muted leading-relaxed">
                  Features deep matte midnight blue textured cardstock with 24K embossed gold foil typography, tactile debossed diamond netting texture, and metallic gold foil scannable QR matrix.
                </p>
              </div>
            </div>

            {/* Mockup 2: Horizontal Card on Architect's Drafting Table */}
            <div className="bg-pure-white dark:bg-dark-card border border-carbon/15 dark:border-dark-border overflow-hidden shadow-subtle-hover group">
              <div className="relative aspect-[3/2] overflow-hidden bg-carbon">
                <img
                  src="/images/business-card-horizontal-desk.jpg"
                  alt="PS Safetynets Horizontal Business Card on Architectural Blueprints"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-carbon/90 text-emerald-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-emerald-400/30">
                  Architectural Desk Edition
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-carbon dark:text-dark-text font-display">
                    Classic Horizontal Blueprint Edition
                  </h3>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                    Gilded Edge Bevel
                  </span>
                </div>
                <p className="text-xs text-slate dark:text-dark-muted leading-relaxed">
                  Crafted for high-net-worth society executives, architects, and builders. Gilded gold foil beveled borders and precision Swiss typography framed against high-rise safety engineering blueprints.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. COMMERCIAL PRINT SPECIFICATIONS & PREPRESS GUIDE */}
        {/* ========================================================================= */}
        <div className="mb-16 bg-pure-white dark:bg-dark-card p-6 sm:p-10 border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
              OFFSET PRINT PRODUCTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
              Commercial Print House Technical Specifications.
            </h2>
            <p className="text-xs sm:text-sm text-slate dark:text-dark-muted mt-2">
              Ready to send to your local or international printing press. Designed according to ISO/IEC 7810 ID-1 standard business card proportions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {/* Spec 1 */}
            <div className="p-4 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 space-y-1.5">
              <span className="text-[10px] text-mist font-bold uppercase">Finished Dimensions</span>
              <div className="text-base font-bold text-carbon dark:text-dark-text">3.5" × 2.0" (89 × 51 mm)</div>
              <p className="text-slate dark:text-dark-muted text-[11px]">
                Standard US & International business card aspect ratio (horizontal & vertical).
              </p>
            </div>

            {/* Spec 2 */}
            <div className="p-4 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 space-y-1.5">
              <span className="text-[10px] text-mist font-bold uppercase">Prepress Bleed Margin</span>
              <div className="text-base font-bold text-carbon dark:text-dark-text">3.75" × 2.25" (95 × 57 mm)</div>
              <p className="text-slate dark:text-dark-muted text-[11px]">
                3.175 mm (1/8") outer bleed on all four sides with 4mm inner safe typography margin.
              </p>
            </div>

            {/* Spec 3 */}
            <div className="p-4 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 space-y-1.5">
              <span className="text-[10px] text-mist font-bold uppercase">Paper Stock & Weight</span>
              <div className="text-base font-bold text-carbon dark:text-dark-text">450 GSM Velvet Soft-Touch</div>
              <p className="text-slate dark:text-dark-muted text-[11px]">
                Heavyweight duplex cotton or velvet matte lamination for ultra-premium hand-feel.
              </p>
            </div>

            {/* Spec 4 */}
            <div className="p-4 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 space-y-1.5">
              <span className="text-[10px] text-mist font-bold uppercase">Specialty Finishes</span>
              <div className="text-base font-bold text-carbon dark:text-dark-text">Spot UV + 24K Cold Foil</div>
              <p className="text-slate dark:text-dark-muted text-[11px]">
                High-build Spot 3D UV on PS Shield emblem, metallic gold foil typography & debossed net.
              </p>
            </div>
          </div>

          {/* Color Palettes Code Table */}
          <div className="mt-6 pt-6 border-t border-carbon/10 dark:border-dark-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#071b33] border border-carbon/20 shadow-xs" />
              <div>
                <span className="font-bold text-carbon dark:text-dark-text block">Shield Navy Blue</span>
                <span className="font-mono text-mist text-[11px]">#071B33 • Pantone 289 C</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#F5A623] border border-carbon/20 shadow-xs" />
              <div>
                <span className="font-bold text-carbon dark:text-dark-text block">Imperial Amber Gold</span>
                <span className="font-mono text-mist text-[11px]">#F5A623 • Pantone 871 C</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#64d5b3] border border-carbon/20 shadow-xs" />
              <div>
                <span className="font-bold text-carbon dark:text-dark-text block">Architectural Vivid Teal</span>
                <span className="font-mono text-mist text-[11px]">#64D5B3 • Cyan Accent</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. COMPLETE BUSINESS DATA DIRECTORY & CONTACT MATRIX */}
        {/* ========================================================================= */}
        <div className="bg-pure-white dark:bg-dark-card p-6 sm:p-10 border-l-4 border-l-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
              OFFICIAL BUSINESS DOSSIER
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
              Enterprise Contact & Credentials Matrix.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
            
            {/* Primary Contacts */}
            <div className="space-y-3">
              <h4 className="font-bold text-carbon dark:text-dark-text uppercase tracking-wider text-xs border-b border-carbon/10 pb-1.5 flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>Direct Telephony & Email</span>
              </h4>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">24/7 Rapid Helpline</span>
                  <a href="tel:+919900980207" className="font-bold text-carbon dark:text-dark-text hover:text-emerald-600 transition-colors">
                    +91 99009 80207
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">Official WhatsApp Desk</span>
                  <a href="https://wa.me/919900980207" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 dark:text-emerald-400">
                    9900980207 (Instant Chat)
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">Official Admin Email</span>
                  <a href="mailto:pssafetynetssolutions@gmail.com" className="font-medium text-carbon dark:text-dark-text hover:underline truncate block">
                    pssafetynetssolutions@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Headquarters & Service Hubs */}
            <div className="space-y-3">
              <h4 className="font-bold text-carbon dark:text-dark-text uppercase tracking-wider text-xs border-b border-carbon/10 pb-1.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Headquarters & Dispatch</span>
              </h4>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">Hyderabad Central HQ</span>
                  <p className="text-carbon dark:text-dark-text font-medium leading-relaxed">
                    HITEC City Main Road, Madhapur & Gachibowli Hub, Hyderabad - 500081, Telangana, India
                  </p>
                </div>
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">Pan-India Rapid Dispatch</span>
                  <p className="text-slate dark:text-dark-muted text-xs leading-relaxed">
                    Hyderabad • Bengaluru • Mumbai & MMR • Pune • Chennai • Delhi NCR
                  </p>
                </div>
              </div>
            </div>

            {/* Quality & Warranties */}
            <div className="space-y-3">
              <h4 className="font-bold text-carbon dark:text-dark-text uppercase tracking-wider text-xs border-b border-carbon/10 pb-1.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-vivid-teal" />
                <span>Certifications & Warranties</span>
              </h4>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">Quality Standard</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">ISO 9001:2015 Certified Installation</span>
                </div>
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">Official Guarantee</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">5-Year Stamped Replacement Warranty</span>
                </div>
                <div>
                  <span className="text-[10px] text-mist uppercase font-bold block">Material Grade</span>
                  <span className="font-medium text-carbon dark:text-dark-text">SS 316 Marine Grade & UV-Stabilized Monomer</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 6. HIDDEN PRINT-READY SHEET (FOR BROWSER PRINT ENGINE) */}
      {/* ========================================================================= */}
      <div id="printable-visiting-card-sheet" className="hidden print:block p-8 bg-white text-black">
        <div className="text-center mb-8 border-b border-black/20 pb-4">
          <h2 className="text-xl font-bold uppercase tracking-wider">PS Safetynets Solutions • Commercial Visiting Card Sheet</h2>
          <p className="text-xs text-gray-600">Standard 3.5" × 2.0" Print-Ready Layout • Crop & Bleed Guides Included</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-12 py-8">
          {/* Front Card Print Box */}
          <div className="border border-dashed border-gray-400 p-2 text-center">
            <span className="text-[10px] text-gray-500 font-bold uppercase block mb-1">FRONT FACE</span>
            <div className="w-[336px] h-[192px] bg-white border border-black p-4 flex flex-col justify-between text-left">
              <div className="flex items-center gap-2">
                <img src="/ps-logo.png" alt="PS" className="w-10 h-10 object-contain" />
                <div>
                  <div className="text-sm font-bold uppercase text-black">PS Safetynets Solutions</div>
                  <div className="text-[8px] text-gray-600 uppercase font-semibold">Architectural Safety & Netting Solutions</div>
                </div>
              </div>
              <div className="my-auto">
                <div className="text-base font-bold text-black">{cardData.name}</div>
                <div className="text-[10px] text-gray-700">{cardData.designation}</div>
              </div>
              <div className="text-[8px] text-gray-800 space-y-0.5 border-t border-gray-300 pt-1">
                <div>Phone: {cardData.phone} • WhatsApp: 9900980207</div>
                <div>Email: {cardData.email} • Web: {cardData.website}</div>
                <div>HITEC City & Gachibowli Hub, Hyderabad 500081</div>
              </div>
            </div>
          </div>

          {/* Back Card Print Box */}
          <div className="border border-dashed border-gray-400 p-2 text-center">
            <span className="text-[10px] text-gray-500 font-bold uppercase block mb-1">BACK FACE</span>
            <div className="w-[336px] h-[192px] bg-white border border-black p-4 flex flex-col justify-between text-left">
              <div className="flex items-center justify-between text-[8px] text-gray-700 font-bold uppercase border-b border-gray-200 pb-1">
                <span>ISO 9001:2015 CERTIFIED</span>
                <span>5-YEAR STAMPED WARRANTY</span>
              </div>
              <div className="text-[9px] text-gray-800 space-y-1 my-auto">
                <div className="font-bold uppercase text-[8px] text-gray-500">Core Engineering Solutions:</div>
                <div>• First Pigeon Netting (UV Copolymer)</div>
                <div>• SS 316 Marine Invisible Grills</div>
                <div>• Box Cricket Turf Enclosures</div>
                <div>• Duct Area & Building Shaft Netting</div>
                <div>• Polycarbonate Anti-Bird Spikes</div>
              </div>
              <div className="text-[8px] text-gray-600 border-t border-gray-200 pt-1 flex justify-between">
                <span>Doorstep Measurement: 30 Mins Dispatch</span>
                <span className="font-bold">pssafetynetssolutions.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. DEDICATED 300 DPI FLAT EXPORT STAGE (PERFECT ALIGNMENT, NO 3D SKEW) */}
      {/* ========================================================================= */}
      <VisitingCardFlatExport
        frontRef={flatFrontRef}
        backRef={flatBackRef}
        themeId={selectedTheme}
        orientation={orientation}
        cardData={cardData}
        qrCodeUrl={exportQrCodeUrl}
      />

    </div>
  );
}
