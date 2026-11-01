import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import FloatingActionHub from './components/FloatingActionHub';
import QuoteModal from './components/QuoteModal';
import ServiceDetailModal from './components/ServiceDetailModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CalculatorPage from './pages/CalculatorPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import VisitingCardPage from './pages/VisitingCardPage';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');
  const [activeDetailService, setActiveDetailService] = useState(null);

  const handleOpenQuote = (serviceName = '') => {
    setQuoteService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteService('');
  };

  const handleSelectServiceDetail = (service) => {
    setActiveDetailService(service);
  };

  const handleCloseDetail = () => {
    setActiveDetailService(null);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-sage-canvas text-carbon dark:bg-[#080d0e] dark:text-[#e6f1f0] selection:bg-vivid-teal selection:text-carbon relative flex flex-col justify-between transition-colors duration-300">
          {/* Global Navigation */}
          <Navbar onOpenQuote={handleOpenQuote} />

          {/* Dynamic Route View */}
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenQuote={handleOpenQuote}
                    onSelectService={handleSelectServiceDetail}
                  />
                }
              />
              <Route
                path="/services"
                element={<ServicesPage onOpenQuote={handleOpenQuote} />}
              />
              <Route
                path="/services/:id"
                element={<ServiceDetailPage onOpenQuote={handleOpenQuote} />}
              />
              <Route
                path="/calculator"
                element={<CalculatorPage onOpenQuote={handleOpenQuote} />}
              />
              <Route
                path="/gallery"
                element={<GalleryPage onOpenQuote={handleOpenQuote} />}
              />
              <Route
                path="/reviews"
                element={<ReviewsPage onOpenQuote={handleOpenQuote} />}
              />
              <Route
                path="/contact"
                element={<ContactPage onOpenQuote={handleOpenQuote} />}
              />
              <Route
                path="/visiting-card"
                element={<VisitingCardPage />}
              />
              <Route
                path="/business-card"
                element={<VisitingCardPage />}
              />
              {/* Catch-all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Minimal Footer */}
          <Footer onOpenQuote={handleOpenQuote} />

          {/* Floating Action Hub (WhatsApp, Call, Email, Scroll-To-Top) for Windows & Mobile */}
          <FloatingActionHub />

          {/* Mobile Bottom Sticky Action Dock */}
          <MobileStickyBar onOpenQuote={handleOpenQuote} />

          {/* Global Free Quote Modal */}
          <QuoteModal
            isOpen={isQuoteOpen}
            initialService={quoteService}
            onClose={handleCloseQuote}
          />

          {/* Global Service Detail Spec Modal */}
          <ServiceDetailModal
            service={activeDetailService}
            onClose={handleCloseDetail}
            onOpenQuote={handleOpenQuote}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
