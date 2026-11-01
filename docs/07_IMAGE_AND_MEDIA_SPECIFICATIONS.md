# 07. Image, Media & Visual Asset Art Direction

This specification provides the creative art direction, asset inventory, aspect ratios, performance optimization rules, and exact AI generation prompts to replace all existing graphics with ultra-crisp, premium architectural imagery.

---

## 1. Visual Creative Direction

The existing website’s images suffer from uneven lighting, dated interiors, and compression artifacts. The new visual identity shifts from "amateur hardware installation" to **"Modern Luxury Architectural Safety"**:
- **Aesthetic Tone**: Ultra-clean, sunlit contemporary apartments (warm wood decking, floor-to-ceiling glass balustrades, panoramic city skylines).
- **Transparency Emphasis**: Photos must clearly show the dramatic difference between open, beautiful views and complete toddler/bird protection.
- **Lighting**: Bright natural daylight (10:00 AM sun) or warm architectural twilight/golden hour.
- **Human Connection**: Happy families, young children, or pet dogs safely enjoying balcony spaces without stress.

---

## 2. Complete Asset Matrix & Replacement Plan

| Asset Identifier | Current File | Target Resolution | Target Format | Aspect Ratio | Creative Subject |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `hero-balcony` | `/images/hero-balcony.jpg` | 1920 × 1080 (Desktop)<br>1080 × 1920 (Mobile) | WebP / AVIF | 16:9 & 9:16 | Panoramic high-rise balcony over modern city skyline at sunset. |
| `pigeon-safety-net` | `/images/pigeon-safety-net.jpg` | 1200 × 800 | WebP | 3:2 | Crystal-clear copolymer monofilament net, virtually invisible. |
| `balcony-before-mess` | `/images/balcony-before-mess.jpg` | 1200 × 800 | WebP | 3:2 | Balcony floor with pigeon droppings, feathers, and perching pigeons. |
| `balcony-after-clean` | `/images/balcony-after-clean.jpg` | 1200 × 800 | WebP | 3:2 | Identical angle: spotless sanitized balcony with invisible barrier. |
| `invisible-grill-main`| `/images/invisible-grill.jpg` | 1200 × 800 | WebP | 3:2 | Sleek SS 316 vertical wire cables on modern luxury balcony railing. |
| `invisible-grill-toddler`| `/images/invisible-grill-toddler.jpg`| 1200 × 800 | WebP | 3:2 | Toddler safely playing near balcony glass with invisible grill cables. |
| `box-cricket-arena` | `/images/box-cricket-net.jpg` | 1200 × 800 | WebP | 3:2 | Rooftop box cricket turf with high-tension black braided netting under lights. |
| `ducts-area-shaft` | `/images/ducts-area-net.jpg` | 1200 × 800 | WebP | 3:2 | Clean vertical plumbing shaft with tight netting and zipper hatches. |
| `bird-spikes-unit` | `/images/bird-spikes.jpg` | 1200 × 800 | WebP | 3:2 | Polycarbonate base with blunt SS 304 pins mounted on split AC unit. |
| `technician-laser` | `/images/technician-install.jpg`| 1200 × 800 | WebP | 3:2 | Uniformed safety rigger using laser distance calibrator on balcony. |

---

## 3. High-Fidelity AI Generation Prompts (Midjourney v6 / Flux.1 / DALL-E 3)

Use these copy-pasteable generation prompts to produce pristine, custom photography:

### 1. Modern Balcony Invisible Pigeon Netting (`pigeon-safety-net.webp`)
```text
Architectural photography of a luxurious high-rise apartment balcony in Hyderabad, modern glass balustrade, wooden teak decking, lush potted plants, sunny morning light, panoramic skyline view in background, transparent ultra-fine monofilament safety netting installed across balcony opening, virtually invisible with subtle sunlight catch, clean minimal aesthetic, 8k resolution, shot on Hasselblad H6D-100c, interior design magazine quality --ar 16:9 --style raw --v 6.0
```

### 2. SS 316 Marine Invisible Grills with Toddler Safety (`invisible-grill-toddler.webp`)
```text
Candid lifestyle photograph of a 3-year-old child and a golden retriever dog playing safely on a modern 18th-floor penthouse balcony, floor-to-ceiling sleek vertical stainless steel invisible grill cables spaced evenly at 2 inches, crystal clear city skyline view visible through the cables, warm late afternoon golden hour lighting, parents smiling in living room background, safe, peaceful, ultra-luxurious, photorealistic, 8k --ar 16:9 --v 6.0
```

### 3. Before: Pigeon Infested Balcony (`balcony-before-mess.webp`)
```text
Realistic photo of a high-rise apartment balcony infested with pigeons, dirty tiled floor with bird droppings, stray feathers on railing, two pigeons roosting on outdoor AC unit and parapet wall, cluttered and distressed atmosphere, natural lighting, realistic urban apartment problem --ar 3:2 --v 6.0
```

### 4. After: Pristine Sanitized Balcony with Invisible Net (`balcony-after-clean.webp`)
```text
Same balcony angle as before-mess, completely sanitized and gleaming clean, spotless tiles, modern outdoor seating furniture, transparent monofilament pigeon net securely anchored along the perimeter, pigeons flying away outside unable to enter, bright welcoming sunlight, beautiful and safe --ar 3:2 --v 6.0
```

### 5. Rooftop Box Cricket Turf Enclosure (`box-cricket-net.webp`)
```text
Commercial rooftop box cricket arena at dusk, lush vibrant green artificial turf pitch, heavy-duty black braided netting surrounding entire 4-wall perimeter and overhead ceiling grid, modern bright floodlights illuminated, crisp tensioned steel wire rigging, cinematic sports arena atmosphere, 8k, photorealistic --ar 16:9 --v 6.0
```

### 6. AC Outdoor Unit Humane Bird Spikes (`bird-spikes.webp`)
```text
Macro architectural close-up photograph of modern split air conditioner outdoor unit ledge, high-density transparent polycarbonate base strips with blunt-tip stainless steel 304 multi-angle bird spikes mounted firmly with structural silicone adhesive, clean parapet wall, pigeon perching prevented humanely, sharp focus, professional pest control engineering --ar 16:9 --v 6.0
```

### 7. Professional Rigging Technician with Laser Measure (`technician-install.webp`)
```text
Professional certified Indian safety technician wearing branded navy blue polo uniform, safety harness, and white helmet, holding a digital red laser distance meter calibrating balcony ceiling anchor points, modern high-rise building background, confident, skilled craftsmanship, bright natural lighting --ar 16:9 --v 6.0
```

---

## 4. Mobile Video Asset Specifications

The new mobile hero supports video backdrops optimized for iOS Safari Low Power Mode and cellular networks:
- **Format**: Dual-source `<source src="hero.webm" type="video/webm">` and `<source src="hero.mp4" type="video/mp4">`.
- **Codec**: H.264 / AV1 for ultra-low bitrate.
- **Max File Size**: `< 1.8 MB` per video clip.
- **Framerate**: 24 fps (Smooth cinematic feel, minimizes battery drain).
- **Attributes Required**:
  ```html
  <video
    autoplay
    muted
    loop
    playsinline
    webkit-playsinline="true"
    preload="metadata"
    poster="/images/hero-balcony.webp"
  >
  ```
- **Fallback**: Immediate 0-second image backdrop rendered before video load ensures 0ms layout shift (CLS: 0.00).
