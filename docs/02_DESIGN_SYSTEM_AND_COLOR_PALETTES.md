# 02. Design System, Color Palettes & Visual Tokens

This specification defines the visual identity, color schemes, typography hierarchy, elevation, and design tokens for the new website.

---

## 1. Color Palette Options

The existing site’s washed-out sage background (`#d3e4df`) and low-contrast teal (`#64d5b3`) are replaced with three modern, production-grade color schemes.

### Option A (Recommended): "Architectural Obsidian & Electric Azure"
> **Concept**: Represents unblocked panoramic skies, structural marine stainless steel, and precision engineering. Provides high contrast and readability on mobile screens under direct sunlight.

```
LIGHT MODE (Crisp Porcelain Canvas)
├── Background Canvas:      #F8FAFC (Slate 50 - Ultra-clean daylight)
├── Surface Card:           #FFFFFF (Pure White with subtle 1px border)
├── Secondary Surface:      #F1F5F9 (Slate 100 for nested panels & inputs)
├── Text Primary:           #0F172A (Slate 900 - Razor-sharp typography)
├── Text Secondary:         #475569 (Slate 600 - High legibility body)
├── Text Muted:             #94A3B8 (Slate 400 - Eyebrows and captions)
├── Primary Accent:         #0284C7 (Electric Sky Azure - CTAs & Links)
├── Primary Hover:          #0369A1 (Deeper Ocean Azure)
├── Safety / Verified:      #10B981 (Shield Emerald - Guarantee & WhatsApp)
├── Rating / Trust:         #F59E0B (Sunlight Amber - Stars & Dispatches)
└── Border Line:            #E2E8F0 (Subtle hairline divider)

DARK MODE (Deep Obsidian Architectural Glass)
├── Background Canvas:      #090D16 (Deep Space Obsidian)
├── Surface Card:           #0F172A (Navy Slate Card)
├── Secondary Surface:      #1E293B (Elevated Slate Surface)
├── Text Primary:           #F8FAFC (Luminescent White)
├── Text Secondary:         #94A3B8 (Soft Slate Muted)
├── Primary Accent:         #38BDF8 (Vibrant Cyan-Azure Glow)
├── Safety / Verified:      #34D399 (Emerald Glow)
├── Rating / Trust:         #FBBF24 (Warm Gold)
└── Border Line:            rgba(255, 255, 255, 0.08)
```

---

### Option B: "Luxury Penthouse Jade & Champagne Gold"
> **Concept**: Tailored for high-end gated communities (Gachibowli, Jubilee Hills, Kokapet). Feels like an architectural brochure for luxury real estate.

```
LIGHT MODE
├── Background Canvas:      #F4F7F5 (Soft Jade Porcelain)
├── Surface Card:           #FFFFFF (Crisp White)
├── Text Primary:           #0E1715 (Deep Forest Black)
├── Primary Accent:         #059669 (Prestige Emerald Jade)
├── Secondary Accent:       #D97706 (Champagne Gold for 5-Year Warranty)
└── Border Line:            #E0E7E4

DARK MODE
├── Background Canvas:      #080E0D (Deep Jade Obsidian)
├── Surface Card:           #0F1A18 (Forest Velvet)
├── Primary Accent:         #10B981 (Vibrant Jade)
├── Secondary Accent:       #F59E0B (Warm Champagne)
└── Border Line:            rgba(16, 185, 129, 0.15)
```

---

### Option C: "High-Contrast Cyber Titanium & Stark White"
> **Concept**: Stark, punchy, modern industrial design. High contrast, sharp edges, and maximum visual punch.

```
LIGHT MODE
├── Background Canvas:      #FFFFFF (Stark Clean White)
├── Surface Card:           #F8F9FA (Off-white)
├── Text Primary:           #000000 (True Ink Black)
├── Primary Accent:         #2563EB (High-Volt Royal Cobalt)
└── Secondary Accent:       #DC2626 (Warning Red / Urgent Dispatch)

DARK MODE
├── Background Canvas:      #000000 (True OLED Black)
├── Surface Card:           #111111 (Titanium Carbon)
├── Text Primary:           #FFFFFF (Pure White)
├── Primary Accent:         #60A5FA (Neon Cobalt)
└── Secondary Accent:       #EF4444 (Emergency Accent)
```

---

## 2. Recommended Tailwind CSS Configuration

Below is the drop-in `tailwind.config.js` implementation for **Option A (Architectural Obsidian & Electric Azure)**:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7', // Primary Accent Light
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          glow: '#38BDF8', // Dark Mode Highlight
        },
        safety: {
          50: '#ECFDF5',
          500: '#10B981', // Guarantee Badge & WhatsApp
          600: '#059669',
          dark: '#34D399',
        },
        obsidian: {
          canvas: '#090D16',
          card: '#0F172A',
          surface: '#1E293B',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        canvas: {
          light: '#F8FAFC',
          card: '#FFFFFF',
          muted: '#F1F5F9',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'dock': '28px',
        'sheet': '32px',
        'card': '20px',
        'pill': '9999px',
        'btn': '14px',
      },
      boxShadow: {
        'dock': '0 20px 40px -10px rgba(2, 132, 199, 0.25), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'sheet': '0 -20px 50px -12px rgba(0, 0, 0, 0.35)',
        'card-hover': '0 20px 35px -10px rgba(15, 23, 42, 0.08)',
        'glow-azure': '0 0 25px rgba(56, 189, 248, 0.35)',
        'glow-emerald': '0 0 25px rgba(16, 185, 129, 0.35)',
      },
      letterSpacing: {
        eyebrow: '0.14em',
        tightest: '-0.035em',
      }
    },
  },
  plugins: [],
}
```

---

## 3. Typography Hierarchy

| Style Role | Font Family | Size (Mobile) | Size (Desktop) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | Outfit | `32px / 2rem` | `64px / 4rem` | 800 (ExtraBold) | 1.08 | `-0.03em` |
| **Section Title** | Outfit | `26px / 1.625rem` | `44px / 2.75rem`| 700 (Bold) | 1.15 | `-0.02em` |
| **Card Title** | Plus Jakarta Sans| `18px / 1.125rem` | `22px / 1.375rem`| 700 (Bold) | 1.25 | `-0.01em` |
| **Body Primary** | Plus Jakarta Sans| `14px / 0.875rem` | `16px / 1rem` | 400 (Regular) | 1.6 | `normal` |
| **Eyebrow Tag** | Plus Jakarta Sans| `11px / 0.6875rem`| `12px / 0.75rem` | 800 (ExtraBold) | 1.2 | `0.14em` (Uppercase)|
| **Metric Stat** | Outfit | `24px / 1.5rem` | `36px / 2.25rem` | 800 (ExtraBold) | 1.0 | `-0.02em` |
| **Button Label** | Plus Jakarta Sans| `14px / 0.875rem` | `15px / 0.9375rem`| 700 (Bold) | 1.0 | `0.01em` |

---

## 4. Elevation, Glassmorphism & UI Tokens

### Frosted Glass Properties
```css
/* Light Mode Glass Header & Dock */
.glass-light {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

/* Dark Mode Glass Header & Dock */
.glass-dark {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Mobile Touch Targets
- All interactive touch targets (buttons, links, inputs, stepper buttons) must have a **minimum touch footprint of 48px × 48px** to guarantee zero missed taps on touchscreen devices.
- Spacing between clickable elements must never be less than `8px`.
