# 05. Interactive Components Technical Specification

This document provides detailed implementation specifications for all high-interactivity components in the new design, ensuring fluid 60fps animations, touch-safe mobile controls, and zero layout shift.

---

## 1. Hero Section (`Hero.jsx`)

### Feature Overview
- **Dual-Video Seamless Crossfade**: Two video streams (Kids Playing Balcony Safety vs SS 316 Invisible Grills) pre-buffered and alternately crossfaded every 11 seconds with 0ms buffering stutter.
- **Dynamic Rotating Headline**: Smooth fading text cycling through 5 key protection pillars: *"Your Children & Pets"*, *"High-Rise Balconies"*, *"Luxury Skyline Views"*, *"Box Cricket Turfs"*, *"Building Duct Shafts"*.
- **Mobile Portrait Framing**: Eliminates the current clunky video box. Uses `100svh` vertical container with rich dark gradient scrim, placing headline, badges, and primary CTA strictly above the fold.
- **Mobile Autoplay Guard**: Handles iOS Safari Low Power Mode and Android autoplay restrictions via multi-event interaction listeners (`touchstart`, `click`, `scroll`).

---

## 2. Interactive Before/After Visualizer (`BeforeAfterSlider.jsx`)

### Feature Overview
- **Oscillating Auto-Sweep**: When idle, a smooth sine-wave animation gently sweeps between 20% and 80% every 4.5 seconds so users immediately understand the interactive transformation without having to touch it first.
- **Touch-Safe Dragging**: 24px horizontal deadband margin prevents accidental activation of the browser's "Swipe to Navigate" gesture on iOS and Android.
- **Dual-Mode Switch on Mobile**: Includes a pill toggle (`[Before] | [After]`) below the slider for users who prefer tapping over dragging.

```jsx
// Sine-Wave Idle Sweep Formula
const sweep = 50 + 30 * Math.sin((elapsedTime / 4500) * 2 * Math.PI);
```

---

## 3. Instant Cost Calculator (`InteractiveCalculator.jsx`)

### Feature Overview
- **Dynamic Pricing Engine**: Calculates accurate cost estimates based on dimensions, selected service base rate, and optional deep chemical sanitization.
- **Touch Stepper Controls**: Large 48px `[-]` and `[+]` buttons flank each slider for precise, frustration-free finger adjustments on mobile.
- **Instant WhatsApp Generator**: Formats calculations into a clean, professional WhatsApp message that directly opens the business chat with the owner (`9900980207`).

### Pricing Calculation Logic
```javascript
const areaPerUnit = isRunningFeet ? lengthFt : lengthFt * heightFt;
const totalArea = areaPerUnit * balconiesCount;
const baseCost = totalArea * activeService.basePrice;
const sanitizationCost = includeSanitization 
  ? (activeService.id === 'ducts-area' ? 0 : 499) 
  : 0;
const totalEstimate = Math.round(baseCost + sanitizationCost);
```

---

## 4. Tensile Load & Wind Stress Simulator (`TensileSimulator.jsx`)

### Feature Overview
- **Physics Stress Visualization**: Users adjust sliders for Simulated Impact Load (50kg – 500kg) and Simulated Wind Velocity (40km/h – 240km/h).
- **Comparative Analysis**: Live safety coefficient compares **SS 316 Marine Invisible Grills** (450kg max load, 220km/h wind safe) against **UV Copolymer Netting** (180kg max load) and **Conventional Iron Grills** (rust prone, view blocking).
- **Mobile Quick Presets**: One-tap pills for *"Toddler Lean (30kg)"*, *"Adult Impact (80kg)"*, and *"Monsoon Gale (120km/h)"*.

---

## 5. Unified Mobile Floating Dock (`UnifiedMobileDock.jsx`)

### Feature Overview
- **Ergonomic Floating Capsule**: Merges the separate call, WhatsApp, and quote buttons into a single 64px floating glass island anchored at `bottom-4`.
- **Smart Scroll Direction Detection**: Hides smoothly on downward scrolling to maximize reading area; immediately slides back up on the slightest upward flick.
- **iOS Safe Area Support**: Automatically adapts to iPhone home indicator bar via `padding-bottom: env(safe-area-inset-bottom)`.

---

## 6. Gesture-Driven Mobile Bottom Sheet (`MobileBottomSheet.jsx`)

### Feature Overview
- **Native App Feel**: Replaces traditional centered popups with a smooth slide-up bottom sheet.
- **Drag-to-Dismiss**: Features a tactile pill handle at top; pulling down past 120px smoothly closes the sheet.
- **Keyboard-Aware Scroll**: Input fields automatically scroll into view when the mobile software keyboard opens, preventing clipped buttons.
- **Confetti Celebration**: Fires a multi-colored canvas confetti burst on successful lead submission.

---

## 7. Hyderabad Service Network Section (`HyderabadLocationsSection.jsx`)

### Feature Overview
- **Zone Filtering Tabs**: Filters 25+ Hyderabad neighborhoods into **West Hyderabad (HITEC City/Gachibowli)**, **North Hyderabad (Secunderabad)**, and **East & Central (Uppal/LB Nagar)**.
- **Click-to-Quote Chips**: Tapping any location (e.g. *"Kondapur"*, *"Kokapet"*) immediately opens the booking sheet with that locality pre-filled and displays average arrival time (`20 - 30 mins`).

---

## 8. Accessible Hairline FAQ Accordion (`FAQSection.jsx`)

### Feature Overview
- **Smooth Height Interpolation**: Clean expand/collapse transitions using CSS grid animation (`grid-template-rows: 0fr -> 1fr`).
- **Full WAI-ARIA Compliance**: Proper `aria-expanded`, `aria-controls`, and keyboard navigation (`Enter` / `Space` / `Arrow` keys).
- **Embedded Schema**: Synchronized with Google `FAQPage` JSON-LD schema for rich SERP snippets.
