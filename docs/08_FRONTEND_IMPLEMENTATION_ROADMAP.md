# 08. Frontend Implementation & Engineering Roadmap

This document serves as the developer handbook and execution roadmap for building and deploying the redesigned website.

---

## 1. Directory Structure

```
ps-safetynets-solutions/
├── public/
│   ├── images/                     # Optimized WebP photography
│   │   ├── hero-balcony.webp
│   │   ├── pigeon-safety-net.webp
│   │   ├── balcony-before-mess.webp
│   │   ├── balcony-after-clean.webp
│   │   ├── invisible-grill.webp
│   │   ├── invisible-grill-toddler.webp
│   │   ├── box-cricket-net.webp
│   │   ├── ducts-area-net.webp
│   │   ├── bird-spikes.webp
│   │   └── technician-install.webp
│   ├── videos/                     # Compressed mobile video loops
│   │   ├── hero-balcony.mp4
│   │   └── hero-invisible-grill.mp4
│   ├── ps-logo.png
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _headers
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Glassmorphic header with mega-dropdown
│   │   │   ├── Footer.jsx          # Deep SEO footer with neighborhood links
│   │   │   ├── MobileDrawer.jsx    # App-style side drawer navigation
│   │   │   └── ScrollToTop.jsx     # Route scroll reset
│   │   ├── mobile/
│   │   │   ├── UnifiedMobileDock.jsx # 64px floating island action bar
│   │   │   ├── MobileBottomSheet.jsx # Gesture-driven drag-to-close lead sheet
│   │   │   └── TouchStepperInput.jsx # Touch-safe stepper + slider control
│   │   ├── interactive/
│   │   │   ├── Hero.jsx            # Dual-video crossfade & rotating text
│   │   │   ├── BeforeAfterSlider.jsx # Sine-wave idle sweep & comparison
│   │   │   ├── InteractiveCalculator.jsx # Pricing formula & WhatsApp output
│   │   │   └── TensileSimulator.jsx# Physical stress & wind resistance lab
│   │   ├── sections/
│   │   │   ├── ServicesSection.jsx # 5 services card showcase
│   │   │   ├── HyderabadLocationsSection.jsx # 25+ areas filterable grid
│   │   │   ├── EngineeringSection.jsx # Rigging standards & ISO compliance
│   │   │   ├── ReviewsSection.jsx  # High-contrast customer testimonials
│   │   │   ├── FAQSection.jsx      # Hairline accordion with schema sync
│   │   │   └── GoogleMapsSection.jsx # Pan-India metro coverage switcher
│   │   └── ui/
│   │       ├── WhatsAppIcon.jsx    # Crisp vector brand icon
│   │       └── Badge.jsx           # Reusable status chips
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark/Light state with class toggler
│   ├── data/
│   │   ├── servicesData.js         # Core specifications & package pricing
│   │   ├── locationsData.js        # 3 Hyderabad zones & 25+ localities
│   │   ├── reviewsData.js          # Customer stories & trust metrics
│   │   └── faqsData.js             # High-converting FAQ items
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ServiceDetailPage.jsx
│   │   ├── CalculatorPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── ReviewsPage.jsx
│   │   └── ContactPage.jsx
│   ├── utils/
│   │   ├── sendEmailInquiry.js     # FormSubmit API dispatcher
│   │   └── generateWhatsAppUrl.js  # Formatted WhatsApp link generator
│   ├── App.jsx                     # Core application shell & modal states
│   ├── main.jsx                    # React 18 createRoot mount
│   └── index.css                   # Tailwind imports & custom utilities
├── index.html                      # SEO meta, preloads & JSON-LD schemas
├── package.json
├── tailwind.config.js              # Theme tokens, font families, radius
├── vite.config.js                  # Vite build configuration
└── wrangler.json                   # Cloudflare Pages / Workers deployment
```

---

## 2. Step-by-Step Implementation Phase Plan

### Phase 1: Foundation & Styling Setup
1. **Font Configuration**: Link Google Fonts (`Plus Jakarta Sans` weights 400-800 and `Outfit` weights 600-800) in `index.html`.
2. **Tailwind Tokens**: Replace `tailwind.config.js` with the Electric Azure & Obsidian design tokens (as defined in `02_DESIGN_SYSTEM_AND_COLOR_PALETTES.md`).
3. **CSS Utilities**: Add smooth scrolling, glassmorphism filters, and safe-area inset rules in `src/index.css`.

### Phase 2: Mobile Infrastructure & Navigation
1. **Unified Mobile Dock**: Build `UnifiedMobileDock.jsx` with scroll-direction auto-hide and 3 primary triggers (Call, WhatsApp, Quote).
2. **Gesture Bottom Sheet**: Build `MobileBottomSheet.jsx` supporting drag-to-dismiss and 2-step lead capture.
3. **App-Style Drawer**: Implement `MobileDrawer.jsx` with instant phone/WhatsApp chips and direct service routing.

### Phase 3: Interactive Components Upgrade
1. **Hero**: Implement mobile-first portrait container (`100svh`) with dual-video crossfading and dynamic rotating words.
2. **Before/After Slider**: Add sine-wave idle animation and a dedicated mobile toggle switch (`[Before] | [After]`).
3. **Touch-Safe Calculator**: Replace plain sliders with `TouchStepperInput.jsx` (+ / - buttons).
4. **Tensile Simulator**: Add one-tap impact presets for mobile users.

### Phase 4: Page Assembly & Routing
1. Assemble all 7 pages with the revised color scheme and layout hierarchy.
2. Ensure dynamic service routing (`/services/:id`) loads service-specific specs, packages, and reviews.
3. Verify all telephone links (`tel:+919900980207`) and WhatsApp links (`wa.me/919900980207`).

### Phase 5: SEO, Schema & Lead Validation
1. Verify Google Ads conversion tracking script (`AW-18406713430`) in `index.html`.
2. Test FormSubmit serverless endpoint (`10594a937e70498bc8ff480b05d894e8`) with test submissions to `pssafetynetssolutions@gmail.com`.
3. Validate rich snippets using Google's Rich Results Test tool for `HomeAndConstructionBusiness` and `FAQPage`.

---

## 3. Production Build & Deployment Commands

```bash
# 1. Install Dependencies
npm install

# 2. Local Development Server
npm run dev

# 3. Production Build
npm run build

# 4. Preview Build Locally
npm run preview

# 5. Deploy to Cloudflare Pages / Workers
npm run deploy
```

---

## 4. Mobile Core Web Vitals Targets

| Metric | Target | Optimization Strategy |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.2s` | Preload hero background image; use modern WebP format; priority fetch. |
| **FID / INP (Interactivity)** | `< 50ms` | Lazy-load heavy components (Google Maps, Tensile Simulator) below fold. |
| **CLS (Cumulative Layout Shift)**| `0.00` | Explicit width/height on all images and video containers; 0-sec image backdrop. |
| **Touch Target Size** | `100% ≥ 48px` | Minimum 48px padding on all buttons, tabs, and form controls. |
