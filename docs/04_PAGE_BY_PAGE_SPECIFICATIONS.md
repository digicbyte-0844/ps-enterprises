# 04. Page-by-Page UI/UX Specifications & Mobile Wireframes

This document details the exact layout, section hierarchy, content strategy, responsive behaviors, and conversion mechanics for each of the 7 pages on the redesigned website.

---

## 1. Page: Home (`/`)

### Objective
High-conversion landing experience. Immediately establishes local credibility in Hyderabad, displays transparent pricing, provides proof of 5-year guarantee, and captures leads in under 2 clicks.

### Section Breakdown & Hierarchy

```
[1. Hero (Video / Dynamic Headline / 4 Trust Pillars)]
       ↓
[2. Interactive Before/After Visualizer (Mobile Touch-Optimized)]
       ↓
[3. Core 5 Safety Solutions (Segmented Cards)]
       ↓
[4. Instant Cost Estimator Preview (Interactive Sliders)]
       ↓
[5. Hyderabad 30-Min Service Network (25+ Localities)]
       ↓
[6. High-Rise Tensile Load & Wind Simulator]
       ↓
[7. Architectural Engineering & Rigging Standards]
       ↓
[8. Verified Customer Testimonials & Case Studies]
       ↓
[9. High-Intent FAQ Accordion (Schema Optimized)]
       ↓
[10. Final Call to Action & Doorstep Booking]
```

### Mobile Layout Wireframe (`< 768px`)
- **Hero**: Vertical 100svh frame. Background video loops smoothly without audio. Headline: *"Protecting [Dynamic Word] with Zero View Blockage"*. Two primary buttons: *"Book Free Measurement"* (Full width, Azure Gradient) and *"Call Helpline"* (Glass border).
- **Before/After**: Centered visualizer with a dual-mode toggle switch (`[Before] | [After]`) plus smooth drag handle.
- **5 Services**: Horizontal swipeable carousel with pagination dots so mobile users can flick through services without scrolling 1,500px down.
- **Locations**: Quick neighborhood grid (2 columns) with average arrival times (e.g. *"Gachibowli • 20 mins"*).

---

## 2. Page: Services Catalog (`/services`)

### Objective
Showcase all 5 safety solutions with complete transparency, comparative feature matrices, turnaround times, and pricing packages.

### Section Hierarchy
1. **Catalog Header**:
   - Eyebrow: `5 CERTIFIED SAFETY SOLUTIONS • HYDERABAD`
   - Title: `Engineered for Strength. Invisible to Sight.`
   - Filter Tabs: `All Solutions (5)`, `Residential & Balconies`, `Sports & Turfs`, `Shafts & Ducts`, `Bird Deterrents`.
2. **Services Grid / List**:
   - Each service card contains:
     - High-clarity 16:9 photography with zoom hover.
     - Price tag chip (e.g., `₹18 - ₹26 / sq.ft`).
     - Turnaround chip (e.g., `2 - 3 Hours`).
     - 5 Core bullet specifications.
     - 3-tier package preview (Standard, Premium, Marine Pro).
     - Direct CTA: *"View Full Engineering Specs"* & *"Quick Quote"*.
3. **Comparative Matrix Section**:
   - Side-by-side comparison between PS Safetynets Solutions vs Traditional Iron Grills vs Cheap Local Poly Nets.
4. **Hyderabad Dispatch Band**:
   - Guaranteed same-day inspection dispatch across Gachibowli, Madhapur, HITEC City, Kondapur, Secunderabad.

### Mobile-Specific Adaptation
- Service cards collapse technical specifications into an expandable accordion: `[ + View 6 Technical Specs ]` to keep initial card height under 420px.
- Package cards swipe horizontally instead of stacking vertically.

---

## 3. Page: Service Detail (`/services/:id`)

### Objective
Deep-dive page for individual solutions (`pigeon-net`, `invisible-grill`, `box-cricket-net`, `ducts-area`, `birds-spikes`). Serves as primary Google Ads / SEO landing page.

### Section Hierarchy
1. **Cinematic Hero**:
   - Breadcrumb: `Home / Services / [Service Title]`
   - Badge: Warranty & tensile rating (e.g. `400kg+ Load Capacity • SS 316 Marine Grade`).
   - Headline & Tagline.
   - Quick action buttons (Direct Phone + WhatsApp pre-filled with this service).
2. **Interactive Before/After Slider**:
   - Specific to this service (e.g., Balcony with pigeon droppings vs Clean transparent net).
3. **Engineering Specification Grid**:
   - 6 structured data cards (Tensile breaking load, material grade, UV endurance, optical transparency, anchoring system, mesh aperture).
4. **5-Step Installation Workflow**:
   - Laser calibration → SS 316 anchor expansion → Perimeter turnbuckles → Diamond stitch lock → Doorstep warranty certificate handover.
5. **3-Tier Pricing Packages**:
   - Standard, Recommended, Pro Armor with itemized inclusions.
6. **Embedded Fast-Booking Form**:
   - Inline form pre-selected with this service.
7. **Verified Customer Reviews**:
   - 3 real customer reviews specifically about this service.
8. **Related Services**:
   - Cards linking to complementary solutions (e.g. Bird Spikes for AC units).

---

## 4. Page: Instant Cost Calculator (`/calculator`)

### Objective
Demystify pricing, generate trust, and capture high-intent leads with real-time calculations.

### Section Hierarchy
1. **Interactive Estimator Card**:
   - Service Selector (5 options).
   - Length (Width) Stepper + Slider (4 ft to 60 ft).
   - Height Stepper + Slider (3 ft to 20 ft).
   - Number of Balconies Stepper (1 to 5+ units).
   - Deep Sanitization add-on toggle.
2. **Dynamic Price Breakdown Box**:
   - Calculated Area (sq.ft / running ft).
   - Base Estimate Range.
   - 5-Year Warranty card inclusion indicator.
   - *"Send Estimate to WhatsApp"* (Creates formatted message).
   - *"Book Doorstep Measurement"* (Opens Bottom Sheet).
3. **Tensile & Wind Stress Simulator**:
   - Interactive simulation showing how the selected material handles wind speeds up to 240 km/h and loads up to 500 kg.

---

## 5. Page: Installation Gallery (`/gallery`)

### Objective
Provide visual proof of workmanship, clean aesthetic integration, and architectural aesthetics across real Hyderabad apartments and commercial sites.

### Section Hierarchy
1. **Filter Header**:
   - Categories: `All Photos (12)`, `Balcony Pigeon Nets`, `Invisible Grills`, `Box Cricket Turfs`, `Building Ducts`, `Bird Spikes`.
2. **Masonry Photo Grid**:
   - High-resolution cards with subtle hover zoom.
   - Location tag (e.g. *"My Home Bhooja, HITEC City"*).
   - Specification badge (e.g. *"SS 316 Marine Grade"*).
3. **Interactive Lightbox Modal**:
   - Fullscreen preview on tap with pinch-to-zoom support on mobile.
   - Direct button: *"I Want This Installed"* (Pre-fills quotation request with photo reference).

---

## 6. Page: Verified Reviews (`/reviews`)

### Objective
Social proof powerhouse. Demonstrates reliability across luxury high-rises, gated communities, and commercial turfs.

### Section Hierarchy
1. **Trust Header & Metric Counters**:
   - `10,000+` Hyderabad Homes Protected.
   - `4.98 / 5.0` Star Rating across Google & direct reviews.
   - `5-Year` Official Replacement Guarantee.
   - `30-Min` Average Dispatch SLA.
2. **Categorized Testimonial Cards**:
   - Customer name, apartment community name (e.g., *Prestige High Fields*, *Aparna Sarovar*, *Lanco Hills*).
   - Star rating (5/5).
   - Verified installation badge.
   - Detailed feedback on rigging quality, punctuality, and view preservation.
3. **Society President & Facility Manager Case Studies**:
   - Contracts covering 850+ units and 24-storey utility shafts.

---

## 7. Page: Contact & Free Inspection (`/contact`)

### Objective
Zero-friction communication hub for booking doorstep measurements and reaching senior engineers.

### Section Hierarchy
1. **Contact Information Cards**:
   - **Helpline**: `+91 99009 80207` (One-tap direct dial).
   - **WhatsApp Desk**: `9900980207` (One-tap chat).
   - **Direct Admin Email**: `pssafetynetssolutions@gmail.com`.
   - **Hub Address**: HITEC City Main Road, Madhapur & Gachibowli Hub, Hyderabad 500081.
2. **Doorstep Laser Inspection Booking Form**:
   - Name, Mobile number, Hyderabad Locality, Service, Preferred Inspection Date, Dimensions/Notes.
   - Automatic FormSubmit dispatch + instant WhatsApp copy.
3. **Hyderabad Service Zones Map / Accordion**:
   - List of all covered PIN codes and average team arrival times.
4. **Google Maps Interactive Embed**:
   - Visual geographic locator centered on HITEC City / Gachibowli.
