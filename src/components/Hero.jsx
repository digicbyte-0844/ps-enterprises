import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Award
} from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const desktopRefs = [useRef(null), useRef(null)];
  const mobileRefs = [useRef(null), useRef(null)];
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState({ 0: false, 1: false });

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

  // Instant Playback Trigger for immediate 0ms video start
  const playVideoElements = useCallback((index) => {
    const dEl = desktopRefs[index]?.current;
    const mEl = mobileRefs[index]?.current;

    [dEl, mEl].forEach((el) => {
      if (el) {
        el.muted = true;
        el.defaultMuted = true;
        el.setAttribute('muted', '');
        el.setAttribute('playsinline', 'true');
        el.setAttribute('webkit-playsinline', 'true');
        
        // Immediate playback attempt
        const promise = el.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay policy fallback: re-trigger on first interaction
          });
        }
      }
    });
  }, []);

  const handleVideoEnded = (index) => {
    const next = (index + 1) % videoSources.length;
    setActiveVideo(next);

    const dEl = desktopRefs[next]?.current;
    const mEl = mobileRefs[next]?.current;

    [dEl, mEl].forEach((el) => {
      if (el) {
        el.currentTime = 0;
        el.play().catch(() => {});
      }
    });
  };

  const handleVideoCanPlay = (idx) => {
    setVideoLoaded((prev) => ({ ...prev, [idx]: true }));
    if (idx === activeVideo) {
      playVideoElements(idx);
    }
  };

  // Immediate start on mount
  useEffect(() => {
    playVideoElements(activeVideo);
  }, [activeVideo, playVideoElements]);

  // Universal Mobile Touch/Scroll Instant Autoplay Unlocker
  useEffect(() => {
    const unlockMobileAutoplay = () => {
      playVideoElements(0);
      playVideoElements(1);
    };

    window.addEventListener('touchstart', unlockMobileAutoplay, { passive: true, once: true });
    window.addEventListener('click', unlockMobileAutoplay, { passive: true, once: true });
    window.addEventListener('scroll', unlockMobileAutoplay, { passive: true, once: true });

    return () => {
      window.removeEventListener('touchstart', unlockMobileAutoplay);
      window.removeEventListener('click', unlockMobileAutoplay);
      window.removeEventListener('scroll', unlockMobileAutoplay);
    };
  }, [playVideoElements]);

  const stats = [
    { number: "10,000+", color: "text-emerald-400", label: "Homes Protected", sub: "Gachibowli, HITEC City & Kokapet", icon: ShieldCheck },
    { number: "400kg+", color: "text-amber-400", label: "Tensile Fall Safety", sub: "SS 316 Marine Grade Cables", icon: Shield },
    { number: "5 Years", color: "text-cyan-400", label: "Official Warranty", sub: "Free Stamped Doorstep Card", icon: Award },
    { number: "30 Mins", color: "text-emerald-300", label: "Rapid Dispatch", sub: "Same-Day Laser Inspection", icon: Clock },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP / TABLET VIEW (lg:flex): Sharp Square Format with Rich Accents */}
      {/* ========================================================================= */}
      <section className="hidden lg:flex relative min-h-[92vh] w-full items-center overflow-hidden bg-carbon">
        
        {/* Full-Bleed Dual-Video Player Container with Instant High-Clarity Backdrop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-carbon">
          
          {/* Instant 0ms Visual Backdrop Image (Never a black void while video initializes) */}
          <img
            src="/images/hero-balcony.jpg"
            alt="PS Safetynets Solutions Balcony Protection"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {videoSources.map((v, idx) => (
            <video
              key={idx}
              ref={desktopRefs[idx]}
              src={v.src}
              poster={v.poster}
              autoPlay
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              onCanPlay={() => handleVideoCanPlay(idx)}
              onLoadedData={() => handleVideoCanPlay(idx)}
              onEnded={() => handleVideoEnded(idx)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === activeVideo && videoLoaded[idx]
                  ? 'opacity-90 z-10 scale-100'
                  : 'opacity-0 z-0 scale-105 pointer-events-none'
              }`}
            />
          ))}

          {/* Subtle Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/92 via-transparent to-carbon/80 z-20" />
        </div>

        {/* Main Desktop Container */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-8 lg:px-12 py-24">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="col-span-7 max-w-2xl text-left">
              {/* Sharp Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-carbon/75 backdrop-blur-md border-l-2 border-vivid-teal border-t border-r border-b border-pure-white/20 text-pure-white mb-4 shadow-sm">
                <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-vivid-teal">
                  HYDERABAD'S PREMIER SAFETY ENCLOSURES
                </span>
              </div>

              <h1 className="text-4xl xl:text-5xl 2xl:text-[56px] font-bold text-pure-white tracking-tight leading-[1.12] mb-4 drop-shadow-md font-display">
                Unseen protection for <br />
                <span className="relative inline-block font-extrabold text-vivid-teal min-h-[1.15em]">
                  <span
                    className={`inline-block transition-all duration-300 transform ${
                      isFading
                        ? 'opacity-0 translate-y-1.5 blur-xs'
                        : 'opacity-100 translate-y-0 blur-none'
                    }`}
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                  <span className="block h-[3px] bg-vivid-teal mt-0.5 w-full" />
                </span>
              </h1>

              <p className="text-pure-white/90 text-sm xl:text-base font-normal max-w-lg mb-6 leading-relaxed drop-shadow-sm">
                Marine-grade <strong className="text-amber-300 font-semibold">SS 316 invisible grills</strong> and <strong className="text-emerald-300 font-semibold">UV-treated copolymer nets</strong> engineered to protect your little ones without blocking your skyline view.
              </p>

              {/* Sharp Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center justify-center gap-2 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-xs xl:text-sm px-6 py-3.5 transition-all duration-200 shadow-xl hover:scale-[1.02] active:scale-[0.98] group cursor-pointer border border-vivid-teal"
                >
                  <span>Book Free Doorstep Measurement</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-1.5 bg-carbon/60 hover:bg-carbon/80 backdrop-blur-md text-pure-white font-semibold text-xs xl:text-sm px-5 py-3.5 border border-pure-white/30 transition-all hover:scale-[1.02]"
                >
                  <span>Explore 5 Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-vivid-teal" />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Sharp Square Stat Cards */}
            <div className="col-span-5 flex flex-col items-end gap-2.5 max-w-xs ml-auto">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="w-full bg-carbon/75 hover:bg-carbon/90 backdrop-blur-md p-3.5 border-l-4 border-l-vivid-teal border-t border-r border-b border-pure-white/15 text-left shadow-lg transition-all duration-200 hover:translate-x-[-4px] flex items-center gap-3.5"
                  >
                    <div className="w-9 h-9 bg-pure-white/10 text-vivid-teal flex items-center justify-center shrink-0 border border-pure-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-base font-extrabold ${item.color} tracking-tight leading-none`}>
                        {item.number}
                      </div>
                      <div className="text-xs font-bold text-pure-white mt-1 leading-tight">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-pure-white/70 font-normal mt-0.5 leading-none">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW (lg:hidden): Instant 0ms Visual & Video Scene */}
      {/* ========================================================================= */}
      <section className="lg:hidden w-full bg-carbon pt-16 pb-6">
        
        {/* Pure Dual-Video Scene with Instant Backdrop Image (0ms perceptual delay) */}
        <div className="w-full relative overflow-hidden bg-carbon aspect-[4/3] sm:aspect-video shadow-2xl">
          
          {/* Instant 0ms Image Backdrop */}
          <img
            src="/images/hero-balcony.jpg"
            alt="Balcony Safety Netting Hyderabad"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {videoSources.map((v, idx) => (
            <video
              key={idx}
              ref={mobileRefs[idx]}
              src={v.src}
              poster={v.poster}
              autoPlay
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              onCanPlay={() => handleVideoCanPlay(idx)}
              onLoadedData={() => handleVideoCanPlay(idx)}
              onEnded={() => handleVideoEnded(idx)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === activeVideo && videoLoaded[idx]
                  ? 'opacity-100 z-10'
                  : 'opacity-0 z-0 pointer-events-none'
              }`}
            />
          ))}

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-transparent to-carbon/20 z-20 pointer-events-none" />
        </div>

        {/* Dedicated Mobile Action Strip & 4 Sharp Trust Stats */}
        <div className="px-3.5 pt-4 pb-2 space-y-3">
          {/* Action Buttons (Sharp Edges) */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="w-full inline-flex items-center justify-center gap-2 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-xs sm:text-sm py-3.5 px-4 shadow-lg active:scale-98 transition-all border border-vivid-teal"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Doorstep Measurement</span>
            </button>

            <a
              href="#services"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-pure-white/10 hover:bg-pure-white/20 text-pure-white font-semibold text-xs py-3 px-4 border border-pure-white/20 active:scale-98 transition-all"
            >
              <span>Explore 5 Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 text-vivid-teal" />
            </a>
          </div>

          {/* 4 Sharp Trust Metrics in Clean 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="bg-pure-white/5 p-3 border-l-2 border-l-vivid-teal border-t border-r border-b border-pure-white/10 text-left"
              >
                <div className={`text-sm font-extrabold ${st.color} tracking-tight leading-none`}>
                  {st.number}
                </div>
                <div className="text-xs font-bold text-pure-white mt-1 leading-tight">
                  {st.label}
                </div>
                <div className="text-[10px] text-pure-white/70 font-normal mt-0.5 leading-tight line-clamp-1">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
