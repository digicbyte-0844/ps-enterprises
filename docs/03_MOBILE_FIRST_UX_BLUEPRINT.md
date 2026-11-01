# 03. Mobile-First UX & UI Overhaul Blueprint

## 1. Executive Mobile Strategy

Over **82% of all inbound emergency safety net inquiries and inspection requests originate from mobile smartphones** (residents noticing pigeons on balconies, parents concerned about toddlers near open railings, or turf owners looking for quick quotations).

The new website adopts a **pure mobile-first design philosophy**:
1. Every component is designed for one-handed thumb navigation.
2. Zero modal clipping or virtual keyboard obstruction.
3. Zero gesture collision between page scrolling and interactive sliders.
4. Unified, distraction-free bottom conversion dock.

---

## 2. The Mobile Layout Anatomy (Safe-Area & Viewport Management)

```
+-----------------------------------------------------------+
| [Status Bar] (iOS / Android dynamic safe area)            |
+-----------------------------------------------------------+
| [Compact Sticky Header] (Logo + Dark Toggle + Call Icon)  | -> 56px height
+-----------------------------------------------------------+
|                                                           |
|                                                           |
|                     SCROLLABLE VIEWPORT                   |
|                   (Content, Cards, Media)                 |
|                                                           |
|                                                           |
+-----------------------------------------------------------+
| [Unified Mobile Floating Dock] (Call | WhatsApp | Quote)  | -> 64px floating island
+-----------------------------------------------------------+
| [Safe Area Inset Bottom] (Home Indicator on iPhone/Android)| -> env(safe-area-inset-bottom)
+-----------------------------------------------------------+
```

### Essential Mobile CSS Reset Rules
```css
/* Eliminates 300ms tap delay and mobile highlight flashes */
* {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Uses dynamic small viewport units to avoid mobile address bar jumps */
.mobile-hero-height {
  height: 100svh;
  min-height: 560px;
}

/* Safe Area Inset Support */
.mobile-bottom-dock {
  padding-bottom: calc(0.75rem + env(safe-area-inset-bottom, 0px));
}
```

---

## 3. Solution 1: The Unified Floating "Capsule Dock"

### The Current Problem
In the existing codebase, two separate floating elements conflict:
1. `MobileStickyBar` fixed at `bottom-3`.
2. `FloatingActionHub` with 4 floating circles stacked at `bottom-20`.
On small devices (like iPhone 12/13 Mini or budget Androids), these elements overlap, cover up footer links, and trigger mis-clicks.

### The New Design: The Unified Floating Capsule Dock
Instead of two competing systems, we deploy **one sleek floating glass capsule** anchored at `bottom-4 inset-x-3 max-w-md mx-auto`:

```
+-----------------------------------------------------------------+
|  [📞 Call]    |   [💬 WhatsApp (Lead)]   |   [⚡ Book Free Quote] |
| (Dial direct) |  (Pre-filled quick chat) |  (Opens Bottom Sheet)|
+-----------------------------------------------------------------+
```

#### Technical Implementation of the Capsule Dock
```jsx
// components/mobile/UnifiedMobileDock.jsx
import React, { useState, useEffect } from 'react';
import { Phone, Sparkles, MessageCircle } from 'lucide-react';

export default function UnifiedMobileDock({ onOpenQuoteSheet }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hides on rapid downward scroll; reappears on upward flick
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-4 inset-x-3 z-40 md:hidden max-w-md mx-auto transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-obsidian-card/95 dark:bg-[#0c1424]/95 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-dock p-2 shadow-dock flex items-center justify-between gap-1.5 text-white">
        
        {/* Direct Helpline Call */}
        <a
          href="tel:+919900980207"
          aria-label="Direct Call PS Safetynets"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-white/5 active:bg-white/15 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-brand-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Lead Channel */}
        <a
          href="https://wa.me/919900980207?text=Hi%20PS%20Safetynets%2C%20I%20would%20like%20a%20free%20doorstep%20inspection%20in%20Hyderabad."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Quick Lead"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#25D366]/20 text-[#25D366] active:bg-[#25D366]/30 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Primary Booking Trigger */}
        <button
          onClick={onOpenQuoteSheet}
          aria-label="Open Doorstep Quote Sheet"
          className="flex-[1.8] flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-extrabold text-xs shadow-glow-azure active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Inspection</span>
        </button>

      </div>
    </div>
  );
}
```

---

## 4. Solution 2: Native Mobile Bottom Sheets (Replacing Centered Modals)

### The Current Problem
Centered modals (`QuoteModal.jsx`) cause UX failures on mobile:
1. When a user focuses on a text input, the virtual keyboard pops up and hides the "Submit" button.
2. The user has to pinch, zoom, or fight double scrollbars.
3. Background content scrolls unexpectedly.

### The New Design: Drag-to-Dismiss Bottom Sheet
- Appears smoothly from the bottom edge (`translate-y-0`).
- Features a **48px rounded-full drag indicator** at top.
- Includes a 2-Step progressive disclosure:
  - **Step 1 (Fast)**: Name + Phone number (Auto-validates 10-digit Indian numbers).
  - **Step 2 (Details)**: Select Service + Hyderabad Locality dropdown.
- Single-tap submission dispatches both FormSubmit background email and instant WhatsApp pre-fill.

```
+-----------------------------------------------------+
|                     [ ---- ] (Drag Handle)          |
| ⚡ Free Doorstep Inspection (30-Min SLA)       [ ✕ ] |
+-----------------------------------------------------+
| STEP 1 OF 2: CONTACT DETAILS                        |
|                                                     |
| [ Full Name                                       ] |
| [ +91 Mobile Number (10 Digits)                   ] |
|                                                     |
| [ Continue to Locality Selection ->               ] |
+-----------------------------------------------------+
```

---

## 5. Solution 3: Touch-Safe Ergonomics for Sliders & Tools

### The Current Problem
In `InteractiveCalculator.jsx` and `TensileSimulator.jsx`, dragging a finger vertically down the page accidentally grabs the slider handle, changing user values and halting page scroll.

### The New Design: Dual-Control "Stepper + Scrub Track"
Every dimension input on mobile combines **large 48px Stepper Buttons (`-` / `+`)** with a touch-damped slider:

```
[ Balcony Length (Width) ]
+--------------------------------------------------------+
|  [ - ] (48px)    |  18 Feet (Bold Text)  |   [ + ] (48px)|
+--------------------------------------------------------+
| ====[======O=========================================] | (Scrubber)
+--------------------------------------------------------+
```

```jsx
// components/mobile/TouchStepperInput.jsx
import React from 'react';
import { Minus, Plus } from 'lucide-react';

export default function TouchStepperInput({ label, value, min, max, step = 1, unit = 'ft', onChange }) {
  const handleDecrement = () => {
    if (value > min) onChange(value - step);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + step);
  };

  return (
    <div className="bg-canvas-muted dark:bg-obsidian-surface p-3.5 rounded-2xl border border-canvas-border dark:border-obsidian-border">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{label}</span>
        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-white dark:bg-obsidian-card text-brand-600 dark:text-brand-400 border border-slate-200 dark:border-slate-700">
          {value} {unit}
        </span>
      </div>

      {/* Mobile Stepper Row */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
          className="w-12 h-12 rounded-xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white active:scale-90 disabled:opacity-30 transition-transform cursor-pointer"
        >
          <Minus className="w-5 h-5" />
        </button>

        <div className="flex-1">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600 dark:accent-brand-400"
          />
        </div>

        <button
          type="button"
          onClick={handleIncrement}
          disabled={value >= max}
          aria-label={`Increase ${label}`}
          className="w-12 h-12 rounded-xl bg-white dark:bg-obsidian-card border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white active:scale-90 disabled:opacity-30 transition-transform cursor-pointer"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
```

---

## 6. Solution 4: Mobile Before-and-After Comparison

On mobile, dragging horizontal sliders often triggers the mobile browser's "Swipe to go Back" gesture.
The redesign introduces two modes:
1. **Interactive Slider with Edge Buffers**: A 24px safety margin on left and right prevents accidental browser navigation.
2. **One-Tap "Before / After" Segmented Switch**: For users with lower dexterity, a clear segmented control toggles between the "Clean Protected" view and "Infested Balcony" view with 0 drag friction.

---

## 7. Solution 5: High-Speed Mobile Navigation Drawer

The mobile drawer is revamped into an app-like navigation hub:
- **Instant Call & WhatsApp shortcuts** pinned at the top.
- **5 Service category shortcuts** with turnaround badges (`2-3 Hours`, `4-6 Hours`).
- **Locality quick picker**: Tap your neighborhood (e.g. Gachibowli, HITEC City) to immediately start a location-specific quote.
- **Dark/Light mode switch** with instant preview.
