# ps-enterprises
safety net solutions


/generate-ui --project "ps-safetynets-solutions" --stack "React + Tailwind CSS" --design-system "zoox-style"

# SYSTEM ROLE
Act as a Senior Frontend UI/UX Developer. Your task is to build a high-converting, premium service landing page for "PS Safetynets Solutions". 
CRITICAL: You must strictly adhere to the "Zoox Style Reference" provided in the Design System section below. The mood is calm futurism, premium, spacious, and gallery-like. Do not use generic SaaS dashboard styles.

# DESIGN SYSTEM (ZOOX STYLE)
**Theme:** Light / Premium Gallery
**Typography:** 
- Headings: System sans-serif (Inter/Neue Haas Grotesk) mimicking 'GT Standard L' (Weight 400 only, tracking normal).
- Body/UI: System sans-serif mimicking 'GT Standard S' (Weights 400/500/600, tracking tight on body, spaced on micro-labels, font-variant-caps for eyebrows).

**Tailwind v4 Configuration / Custom Variables:**
- `--color-sage-canvas: #d3e4df` (Dominant page background, flows between sections)
- `--color-pure-white: #ffffff` (Card surfaces, image masks)
- `--color-carbon: #0d1212` (Primary text, dark pills)
- `--color-graphite: #34484a` (Deep forest dark section background, dark borders)
- `--color-slate: #565959` (Secondary body text)
- `--color-mist: #7b8889` (Eyebrow labels, small caps)
- `--color-vivid-teal: #64d5b3` (The ONLY filled chromatic CTA button color)

**Shapes & Spacing:**
- Cards/Image Containers: `border-radius: 36px` (NO heavy shadows, rely on radius).
- Primary Buttons: `border-radius: 12px`.
- Nav Pills: `border-radius: 16px`.
- Section gaps: 80px to 120px of breathing room.

# PAGE ARCHITECTURE & CONTENT

## 1. Navigation Bar
- Background: Transparent (sits on the sage canvas).
- Layout: Logo text "PS Safetynets" (Carbon color, weight 600) on the left. Centered links (Services, Gallery, Reviews) in 14px weight 500 Carbon text. 
- Right Action: A Dark Pill CTA (`#0d1212` background, white text, 16px radius) saying "Contact Us".

## 2. Hero Section (Sage Canvas)
- Background: Full-bleed Sage Canvas (`#d3e4df`).
- Layout: Centered text-only composition. 120px top/bottom padding.
- Eyebrow: "PREMIUM SAFETY SOLUTIONS" (12px, weight 600, uppercase, color Mist `#7b8889`, wide letter-spacing).
- Headline: "Unseen protection. Ultimate peace of mind." (Size 80px-120px, weight 400, color Carbon `#0d1212`).
- Primary CTA: Vivid Teal (`#64d5b3`) filled button, Carbon text, reading "Request a Free Quote".

## 3. Core Services (White Cards on Sage)
- Background: Continues on Sage Canvas (`#d3e4df`).
- Layout: A spacious stack or 2-column grid. Generous gap between elements.
- Cards: Each service must be in a White (`#ffffff`) card with a massive 36px border-radius, overflow hidden.
- Generate these exactly:
  1. **FIRST PIGEON NET:** Image (`https://source.unsplash.com/800x600/?balcony,apartment`). Eyebrow: "PEST CONTROL". Text: "Keep your balcony clean and safe with our highly durable, transparent pigeon netting. 5-year guarantee."
  2. **BOX CRICKET NET:** Image (`https://source.unsplash.com/800x600/?cricket,sports,turf`). Eyebrow: "SPORTS". Text: "Versatile, high-strength nylon nets for cricket, football, and multi-play commercial areas."
  3. **INVISIBLE GRILL:** Image (`https://source.unsplash.com/800x600/?modern,window,view`). Eyebrow: "AESTHETIC SECURITY". Text: "Minimalist design using high-tension stainless steel. Secure your view without blocking it."
  4. **DUCTS AREA:** Image (`https://source.unsplash.com/800x600/?building,shaft`). Eyebrow: "UTILITY". Text: "Secure building shafts and service spaces from pests. Complete cleaning and custom access hatches included."
  5. **BIRDS SPIKES:** Image (`https://source.unsplash.com/800x600/?bird,roof`). Eyebrow: "HUMANE DETERRENT". Text: "Long-lasting, UV-stabilized spikes for ledges and AC units. Low visibility, high effectiveness."

## 4. Dark Forest Feature Section (Reviews)
- Background: Full-bleed Deep Forest (`#34484a`). This is the dramatic contrast moment.
- Padding: 100px vertical padding.
- Headline: "Trusted by hundreds." (Size 56px, weight 400, color White).
- Content: Two or three floating White (`#ffffff`) cards with 36px border-radius side-by-side. Inside, put text reviews:
  - Review 1: "The invisible grills are exactly what we needed. Safe for our toddler, and we didn't lose our view." - Priya R.
  - Review 2: "Installed box cricket nets for our society. The tension and quality of the materials are unmatched." - Vikram K.
  - Review 3: "Fast, professional pigeon net installation. Completely cleaned up the duct area too." - Rahul S.

## 5. Minimal Footer
- Background: Sage Canvas (`#d3e4df`).
- Layout: Vertical list of links separated by 1px hairline border (`#565959`).
- Content: Services, Reviews, Contact, 2026 © PS Safetynets Solutions.

# EXECUTION RULES
- Output the complete, functional code in a single artifact.
- Write actual, production-ready React/Tailwind code.
- DO NOT use generic box-shadows on the main cards; use the 36px radius to define the shape against the sage background.
- Keep typography sizes massive for hero headers (weight 400) and small/mechanical for UI labels.
- The ONLY button that should be colorful is the Vivid Teal `#64d5b3` CTA.