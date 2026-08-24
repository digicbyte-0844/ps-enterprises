import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Play
} from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const desktopRef0 = useRef(null);
  const desktopRef1 = useRef(null);
  const mobileRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(0);

  const videoSources = [
    {
      src: '/kids-playing.mp4',
      poster: '/images/hero-balcony.jpg',
      label: 'Balcony Protection'
    },
    {
      src: '/kids_grill.mp4',
      poster: '/images/invisible-grill-toddler.jpg',
      label: 'SS 316 Invisible Grills'
    },
  ];

  // Dynamic Rotating Words
  const rotatingWords = [
    "Your Children & Pets",
    "High-Rise Balconies",
    "Luxury Skyline Views",
    "Box Cricket Turfs",
    "Building Duct Shafts",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsFading(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Robust play caller that handles browser autoplay restrictions
  const startAllVideos = useCallback(() => {
    [desktopRef0.current, desktopRef1.current, mobileRef.current].forEach((vid) => {
      if (vid) {
        vid.muted = true;
        vid.defaultMuted = true;
        vid.setAttribute('muted', '');
        vid.setAttribute('playsinline', 'true');
        vid.setAttribute('webkit-playsinline', 'true');
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    });
  }, []);

  // Desktop automatic smooth alternation between Video 0 and Video 1 (12s interval per clip)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev === 0 ? 1 : 0));
    }, 11000);

    return () => clearInterval(timer);
  }, []);

  // Start videos on mount and ensure continuous play
  useEffect(() => {
    startAllVideos();
  }, [startAllVideos]);

  // Mobile User Interaction Autoplay Unlocker
  useEffect(() => {
    const handleUnlock = () => {
      startAllVideos();
    };

    window.addEventListener('touchstart', handleUnlock, { passive: true, once: true });
    window.addEventListener('touchend', handleUnlock, { passive: true, once: true });
    window.addEventListener('click', handleUnlock, { passive: true, once: true });
    window.addEventListener('scroll', handleUnlock, { passive: true, once: true });

    return () => {
      window.removeEventListener('touchstart', handleUnlock);
      window.removeEventListener('touchend', handleUnlock);
      window.removeEventListener('click', handleUnlock);
      window.removeEventListener('scroll', handleUnlock);
    };
  }, [startAllVideos]);

  // When active video switches on mobile, trigger mobile play
  useEffect(() => {
    if (mobileRef.current) {
      mobileRef.current.muted = true;
      mobileRef.current.currentTime = 0;
      mobileRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  const stats = [
    { number: "10,000+", color: "text-emerald-400", label: "Homes Protected", sub: "Gachibowli, HITEC City & Kokapet", icon: ShieldCheck },
    { number: "400kg+", color: "text-amber-400", label: "Tensile Fall Safety", sub: "SS 316 Marine Grade Cables", icon: Shield },
    { number: "5 Years", color: "text-cyan-400", label: "Official Warranty", sub: "Free Stamped Doorstep Card", icon: Award },
    { number: "30 Mins", color: "text-emerald-300", label: "Rapid Dispatch", sub: "Same-Day Laser Inspection", icon: Clock },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP / TABLET VIEW (lg:flex): Seamless Dual-Video Crossfade */}
      {/* ========================================================================= */}
      <section className="hidden lg:flex relative min-h-[92vh] w-full items-center overflow-hidden bg-carbon text-left">
        
        {/* Dual-Video Crossfading Container (Both keep playing and loop continuously so 0 buffering pause happens) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-carbon">
          
          {/* Instant 0ms Visual Backdrop Image */}
          <img
            src="/images/hero-balcony.jpg"
            alt="PS Safetynets Solutions Balcony Protection"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Desktop Video 0 (Kids Playing / Balcony Netting) */}
          <video
            ref={desktopRef0}
            src={videoSources[0].src}
            poster={videoSources[0].poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              activeVideo === 0
                ? 'opacity-90 z-10 scale-100'
                : 'opacity-0 z-0 scale-105 pointer-events-none'
            }`}
          />

          {/* Desktop Video 1 (SS 316 Invisible Grills) */}
          <video
            ref={desktopRef1}
            src={videoSources[1].src}
            poster={videoSources[1].poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              activeVideo === 1
                ? 'opacity-90 z-10 scale-100'
                : 'opacity-0 z-0 scale-105 pointer-events-none'
            }`}
          />

          {/* Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/92 via-transparent to-carbon/80 z-20" />
        </div>

        {/* Content Container */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            
            {/* Top Verified Location & Standard Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-pure-white/10 backdrop-blur-md border-l-2 border-emerald-400 border-t border-r border-b border-pure-white/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-xs font-bold text-pure-white uppercase tracking-wider">
                HYDERABAD • ISO 9001:2015 CERTIFIED RIGGING
              </span>
            </div>

            {/* Headline with Dynamic Rotating Words */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-pure-white leading-[1.08] font-display">
                Protecting{' '}
                <span
                  className={`inline-block text-vivid-teal transition-all duration-300 transform ${
                    isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {rotatingWords[currentWordIndex]}
                </span>
                <br />
                With Zero View Blockage.
              </h1>
              <p className="text-base sm:text-xl text-pure-white/80 font-normal max-w-2xl pt-2 leading-relaxed">
                Hyderabad's trusted provider of UV-stabilized copolymer pigeon safety netting and Marine Grade SS 316 invisible grills. Stamped 5-year replacement guarantee with 30-minute laser inspection dispatch.
              </p>
            </div>

            {/* CTAs (Sharp Square Format) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2.5 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-sm sm:text-base py-4 px-8 shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer border border-vivid-teal"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Measurement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-pure-white/10 hover:bg-pure-white/20 text-pure-white font-semibold text-sm sm:text-base py-4 px-6 border border-pure-white/20 backdrop-blur-sm transition-all"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* 4 Sharp Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-3 bg-pure-white/10 backdrop-blur-md border border-pure-white/15 text-pure-white"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <IconComponent className="w-3.5 h-3.5 text-vivid-teal" />
                      <span className={`text-base sm:text-lg font-bold font-display ${stat.color}`}>
                        {stat.number}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-pure-white leading-tight">{stat.label}</div>
                    <div className="text-[10px] text-pure-white/60 leading-tight mt-0.5">{stat.sub}</div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Video Switcher Dots */}
        <div className="absolute bottom-6 right-8 z-30 flex items-center gap-2 bg-carbon/60 backdrop-blur-md p-2 border border-pure-white/20">
          {videoSources.map((v, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVideo(idx)}
              className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                activeVideo === idx
                  ? 'bg-vivid-teal text-carbon'
                  : 'bg-pure-white/10 text-pure-white/80 hover:bg-pure-white/20'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW (lg:hidden): Native Dedicated Looping Video Player */}
      {/* ========================================================================= */}
      <section className="lg:hidden w-full bg-carbon pt-16 pb-6 text-left">
        
        {/* Single Looping Mobile Video Player (Guaranteed 100% Autoplay on iOS & Android) */}
        <div className="w-full relative overflow-hidden bg-carbon aspect-[4/3] sm:aspect-video shadow-2xl">
          
          {/* Instant 0ms Image Backdrop */}
          <img
            src={videoSources[activeVideo].poster}
            alt="Balcony Safety Netting Hyderabad"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Native Looping Video */}
          <video
            ref={mobileRef}
            key={videoSources[activeVideo].src}
            src={videoSources[activeVideo].src}
            poster={videoSources[activeVideo].poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-transparent to-carbon/20 z-20 pointer-events-none" />

          {/* Mobile Video Switcher Pill */}
          <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-carbon/80 backdrop-blur-md p-1 border border-pure-white/20">
            {videoSources.map((v, idx) => (
              <button
                key={idx}
                onClick={() => setActiveVideo(idx)}
                className={`px-2.5 py-1 text-[10px] font-bold transition-all cursor-pointer ${
                  activeVideo === idx
                    ? 'bg-vivid-teal text-carbon'
                    : 'bg-pure-white/10 text-pure-white/80'
                }`}
              >
                {idx === 0 ? 'Pigeon Net' : 'Invisible Grill'}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Mobile Action Strip & 4 Sharp Trust Stats */}
        <div className="px-3.5 pt-4 pb-2 space-y-3">
          {/* Action Buttons (Sharp Edges) */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="w-full inline-flex items-center justify-center gap-2 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-xs sm:text-sm py-3.5 px-4 shadow-lg active:scale-98 transition-all border border-vivid-teal cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Doorstep Measurement</span>
            </button>

            <a
              href="#services"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-pure-white/10 hover:bg-pure-white/20 text-pure-white font-semibold text-xs py-3 px-4 border border-pure-white/20 active:scale-98 transition-all"
            >
              <span>Explore 5 Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Dynamic Rotating Headline on Mobile */}
          <div className="bg-pure-white/5 border border-pure-white/10 p-3.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
              HYDERABAD • ISO 9001:2015
            </span>
            <div className="text-sm font-bold text-pure-white leading-tight font-display">
              Protecting{' '}
              <span className="text-vivid-teal">
                {rotatingWords[currentWordIndex]}
              </span>{' '}
              with zero view blockage.
            </div>
          </div>

          {/* 4 Sharp Mobile Stats */}
          <div className="grid grid-cols-2 gap-2">
            {stats.map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={i}
                  className="p-2.5 bg-pure-white/10 border border-pure-white/15 text-pure-white"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <IconComp className="w-3.5 h-3.5 text-vivid-teal" />
                    <span className={`text-sm font-bold font-display ${stat.color}`}>
                      {stat.number}
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-pure-white leading-tight">{stat.label}</div>
                  <div className="text-[9px] text-pure-white/60 leading-tight mt-0.5">{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
