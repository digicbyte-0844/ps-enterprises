import React from 'react';
import InteractiveCalculator from '../components/InteractiveCalculator';
import TensileSimulator from '../components/TensileSimulator';
import GoogleMapsSection from '../components/GoogleMapsSection';

export default function CalculatorPage({ onOpenQuote }) {
  return (
    <div className="pt-28 sm:pt-36 pb-16 bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in">
      <InteractiveCalculator onOpenQuote={onOpenQuote} />
      <TensileSimulator />
      <GoogleMapsSection onOpenQuote={onOpenQuote} />
    </div>
  );
}
