import React from 'react';
import Hero from '../components/Hero';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ServicesSection from '../components/ServicesSection';
import TensileSimulator from '../components/TensileSimulator';
import HyderabadLocationsSection from '../components/HyderabadLocationsSection';
import EngineeringSection from '../components/EngineeringSection';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';

export default function HomePage({ onOpenQuote, onSelectService }) {
  return (
    <div className="animate-fade-in">
      {/* 1. Full Bleed Video Hero with Animated Loop & Changable Dynamic Words */}
      <Hero onOpenQuote={onOpenQuote} />

      {/* 2. Real-World Before / After Visualizer */}
      <section className="relative w-full bg-sage-canvas dark:bg-dark-canvas py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            beforeImage="/images/balcony-before-mess.jpg"
            afterImage="/images/pigeon-safety-net.jpg"
            beforeLabel="Before: Pigeons, Droppings & Hazard"
            afterLabel="After: 100% Invisible PS Protection"
            title="Experience the Unseen Difference."
            subtitle="Drag the interactive slider to see how PS Safetynets Solutions transforms high-risk balconies into clean, safe living spaces."
          />
        </div>
      </section>

      {/* 3. Core 5 Safety Services */}
      <ServicesSection
        onOpenQuote={onOpenQuote}
        onSelectService={onSelectService}
      />

      {/* 4. Hyderabad Local SEO & Service Areas Hub */}
      <HyderabadLocationsSection onOpenQuote={onOpenQuote} />

      {/* 5. Interactive Stress & Tensile Load Simulator */}
      <TensileSimulator />

      {/* 6. Engineering & Rigging Standards */}
      <EngineeringSection />

      {/* 7. Dark Forest Feature Section (Reviews & Contrast Moment #34484a) */}
      <ReviewsSection onOpenQuote={onOpenQuote} />

      {/* 8. FAQ Hairline Accordion */}
      <FAQSection />
    </div>
  );
}
