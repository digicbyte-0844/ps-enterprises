import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Radio
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { CARD_THEMES } from './VisitingCard';

export default function VisitingCardFlatExport({
  frontRef,
  backRef,
  themeId = 'royal-obsidian',
  orientation = 'horizontal',
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
  qrCodeUrl = ''
}) {
  const theme = CARD_THEMES[themeId] || CARD_THEMES['royal-obsidian'];
  const isVertical = orientation === 'vertical';

  // Exact 300 DPI print-ready dimensions (3.5" x 2.0" = 1050px x 600px)
  const cardWidth = isVertical ? 600 : 1050;
  const cardHeight = isVertical ? 1050 : 600;

  return (
    <div
      style={{
        position: 'fixed',
        top: '-99999px',
        left: '-99999px',
        width: '3000px',
        height: '3000px',
        opacity: 1,
        pointerEvents: 'none',
        zIndex: -9999
      }}
      aria-hidden="true"
    >
      {/* ========================================================================= */}
      {/* 1. FLAT 300 DPI FRONT CARD (NO 3D TRANSFORMS, ZERO CLIPPING) */}
      {/* ========================================================================= */}
      <div
        ref={frontRef}
        id="export-front-card"
        style={{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '32px',
          boxSizing: 'border-box',
          padding: isVertical ? '48px 42px' : '48px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: "'Inter', sans-serif"
        }}
        className={`${theme.frontBg} ${theme.border}`}
      >
        {/* Subtle Diamond Netting Mesh Texture Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage: 'radial-gradient(circle at 12px 12px, rgba(255,255,255,0.8) 1.5px, transparent 0)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none'
          }}
        />

        {/* Corner Metallic Trim Accents */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle at top right, rgba(245,166,35,0.25), transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle at bottom left, rgba(245,166,35,0.18), transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* TOP HEADER: Logo Emblem, Brand Name & Smart Chip */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
            {/* Logo Emblem Box */}
            <div
              style={{
                width: isVertical ? '90px' : '100px',
                height: isVertical ? '90px' : '100px',
                borderRadius: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                padding: '10px',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
              }}
            >
              <img
                src="/ps-logo.png"
                alt="PS Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div>
              <h2
                style={{
                  fontSize: isVertical ? '30px' : '36px',
                  fontWeight: '800',
                  letterSpacing: '-0.5px',
                  textTransform: 'uppercase',
                  lineHeight: '1.1',
                  margin: 0
                }}
              >
                <span className={theme.accentText}>{cardData.company}</span>
              </h2>
              <p
                style={{
                  fontSize: isVertical ? '14px' : '16px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginTop: '6px',
                  marginBottom: 0
                }}
                className={theme.subTextColor}
              >
                {cardData.tagline}
              </p>
            </div>
          </div>

          {/* Smart Chip & ISO Certification Badge */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <div
              style={{
                width: '64px',
                height: '46px',
                borderRadius: '8px',
                border: '1.5px solid rgba(255,255,255,0.4)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
              className={theme.chipColor}
            >
              <div style={{ position: 'absolute', top: '15px', width: '100%', height: '1.5px', backgroundColor: 'rgba(0,0,0,0.35)' }} />
              <div style={{ position: 'absolute', bottom: '15px', width: '100%', height: '1.5px', backgroundColor: 'rgba(0,0,0,0.35)' }} />
              <div style={{ position: 'absolute', left: '20px', height: '100%', width: '1.5px', backgroundColor: 'rgba(0,0,0,0.35)' }} />
              <Radio style={{ width: '22px', height: '22px', color: 'rgba(0,0,0,0.65)', position: 'relative', zIndex: 2 }} />
            </div>
            <span
              style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
              className={theme.sealText}
            >
              ISO 9001:2015
            </span>
          </div>
        </div>

        {/* MIDDLE BODY: Executive Credentials */}
        <div style={{ position: 'relative', zIndex: 10, margin: isVertical ? 'auto 0' : '20px 0' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '6px 16px',
              borderRadius: '9999px',
              marginBottom: '12px'
            }}
            className={theme.pillBg}
          >
            Official Executive Pass
          </div>

          <h3
            style={{
              fontSize: isVertical ? '44px' : '52px',
              fontWeight: '900',
              letterSpacing: '-0.8px',
              lineHeight: '1.1',
              margin: '0 0 6px 0'
            }}
            className={theme.textColor}
          >
            {cardData.name}
          </h3>

          <p
            style={{
              fontSize: isVertical ? '20px' : '24px',
              fontWeight: '700',
              letterSpacing: '0.5px',
              margin: 0
            }}
            className={theme.subTextColor}
          >
            {cardData.designation}
          </p>

          {isVertical && (
            <div
              style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '16px'
              }}
              className={theme.textColor}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0 }} />
                <span>SS 316 Marine Invisible Grills Specialist</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0 }} />
                <span>High-Rise Pigeon Netting & Sports Turf</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award style={{ width: '20px', height: '20px', color: '#f59e0b', flexShrink: 0 }} />
                <span>5-Year Official Stamped Warranty</span>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM FOOTER: Contact Grid & Address */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            borderTop: '1.5px solid rgba(255,255,255,0.2)',
            paddingTop: '22px'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isVertical ? '1fr' : 'repeat(2, 1fr)',
              gap: isVertical ? '14px' : '16px 36px',
              fontSize: isVertical ? '17px' : '19px'
            }}
            className={theme.textColor}
          >
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(16, 185, 129, 0.25)',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  flexShrink: 0
                }}
              >
                <Phone style={{ width: '18px', height: '18px' }} />
              </div>
              <span style={{ fontWeight: '800' }}>{cardData.phone}</span>
            </div>

            {/* WhatsApp */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(37, 211, 102, 0.25)',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  flexShrink: 0
                }}
              >
                <WhatsAppIcon style={{ width: '18px', height: '18px', fill: '#25D366' }} />
              </div>
              <span style={{ fontWeight: '700' }}>9900980207 (Direct WhatsApp)</span>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(239, 68, 68, 0.25)',
                  color: '#f87171',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  flexShrink: 0
                }}
              >
                <Mail style={{ width: '18px', height: '18px' }} />
              </div>
              <span style={{ fontWeight: '600' }}>{cardData.email}</span>
            </div>

            {/* Website */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(59, 130, 246, 0.25)',
                  color: '#60a5fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  flexShrink: 0
                }}
              >
                <Globe style={{ width: '18px', height: '18px' }} />
              </div>
              <span style={{ fontWeight: '800', color: '#64d5b3' }}>{cardData.website}</span>
            </div>
          </div>

          {/* Address Row */}
          <div
            style={{
              marginTop: '16px',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '15px'
            }}
            className={theme.subTextColor}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin style={{ width: '18px', height: '18px', color: '#f59e0b', flexShrink: 0 }} />
              <span>{cardData.address}</span>
            </div>
            <span style={{ fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: '#f59e0b' }}>
              HYDERABAD HQ
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FLAT 300 DPI BACK CARD (NO ROTATEX/Y, ZERO SKEW, CRISP WHATSAPP QR) */}
      {/* ========================================================================= */}
      <div
        ref={backRef}
        id="export-back-card"
        style={{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '32px',
          boxSizing: 'border-box',
          padding: isVertical ? '48px 42px' : '48px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: "'Inter', sans-serif",
          marginTop: '60px'
        }}
        className={`${theme.backBg} ${theme.border}`}
      >
        {/* Subtle Diamond Netting Mesh Texture Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage: 'radial-gradient(circle at 12px 12px, rgba(255,255,255,0.8) 1.5px, transparent 0)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none'
          }}
        />

        {/* Holographic Security Authentication Strip */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '32px',
            background: 'linear-gradient(90deg, rgba(100,213,179,0.3), rgba(245,166,35,0.35), rgba(236,72,153,0.3), rgba(59,130,246,0.3))',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 32px'
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: '800', fontFamily: 'monospace', letterSpacing: '2px', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase' }}>
            AUTHENTIC SECURITY SHIELD • PS ENTERPRISES
          </span>
          <span style={{ fontSize: '12px', fontWeight: '800', fontFamily: 'monospace', letterSpacing: '2px', color: '#f59e0b', textTransform: 'uppercase' }}>
            WHATSAPP DIRECT PASS
          </span>
        </div>

        {/* TOP OF BACK CARD: Quality Assurance Header */}
        <div style={{ position: 'relative', zIndex: 10, paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b'
              }}
            >
              <Award style={{ width: '30px', height: '30px' }} />
            </div>
            <div>
              <span style={{ fontSize: '20px', fontWeight: '800', display: 'block', lineHeight: '1.1' }} className={theme.textColor}>
                5-Year Stamped Doorstep Warranty
              </span>
              <span style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginTop: '2px' }} className={theme.subTextColor}>
                Certified Laser Measurement & Genuine Materials
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '6px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            className={theme.pillBg}
          >
            ISO 9001:2015
          </div>
        </div>

        {/* CENTER BODY: High-Res Scannable WhatsApp QR Code & 5 Core Services */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: isVertical ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isVertical ? '28px' : '48px',
            margin: isVertical ? '20px 0' : 'auto 0'
          }}
        >
          {/* WhatsApp Direct QR Code Box */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div
              style={{
                padding: '14px',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                border: '2px solid rgba(255,255,255,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {qrCodeUrl ? (
                <img
                  src={qrCodeUrl}
                  alt="WhatsApp Direct QR Code"
                  style={{ width: isVertical ? '200px' : '210px', height: isVertical ? '200px' : '210px', objectFit: 'contain' }}
                />
              ) : (
                <div style={{ width: '210px', height: '210px', backgroundColor: '#e5e7eb' }} />
              )}

              {/* Center WhatsApp Logo Badge */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '9999px',
                    backgroundColor: '#25D366',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    padding: '8px',
                    border: '2.5px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <WhatsAppIcon style={{ width: '100%', height: '100%', fill: '#ffffff' }} />
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '12px',
                fontSize: '14px',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#25D366'
              }}
            >
              <WhatsAppIcon style={{ width: '16px', height: '16px', fill: '#25D366' }} />
              <span>Scan for Direct WhatsApp Chat</span>
            </div>
          </div>

          {/* 5 Core Engineering Safety Services */}
          <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                fontSize: '16px',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#f59e0b',
                marginBottom: '4px'
              }}
            >
              5 Core Architectural Safety Solutions:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: isVertical ? '15px' : '17px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className={theme.textColor}>
                <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontWeight: '600' }}>First Pigeon Netting (UV Copolymer Monofilament)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className={theme.textColor}>
                <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontWeight: '600' }}>SS 316 Marine Grade Invisible Grills</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className={theme.textColor}>
                <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontWeight: '600' }}>Box Cricket & Multi-Sport Turf Enclosures</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className={theme.textColor}>
                <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontWeight: '600' }}>Duct Area & Building Service Shaft Netting</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className={theme.textColor}>
                <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10b981', flexShrink: 0 }} />
                <span style={{ fontWeight: '600' }}>Polycarbonate & SS Anti-Bird Spikes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM OF BACK CARD: Pan-India Dispatch Hubs */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            borderTop: '1.5px solid rgba(255,255,255,0.2)',
            paddingTop: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '14px'
          }}
          className={theme.subTextColor}
        >
          <div>
            <strong style={{ color: '#f59e0b', fontWeight: '800' }}>Rapid Dispatch:</strong>{' '}
            <span>Hyderabad • Bengaluru • Mumbai • Pune • Chennai • Delhi NCR</span>
          </div>
          <span style={{ fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#64d5b3' }}>
            pssafetynetssolutions.in
          </span>
        </div>
      </div>
    </div>
  );
}
