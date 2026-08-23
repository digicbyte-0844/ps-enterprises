import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Phone, MapPin, User, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, initialService = '', onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'FIRST PIGEON NET',
    location: '',
    propertyType: 'Apartment Balcony',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#64d5b3', '#0d1212', '#34484a', '#ffffff'],
        });
      } catch (err) {}
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fade-in">
      <div
        className="fixed inset-0 bg-carbon/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        {/* Modal Box */}
        <div className="relative bg-pure-white dark:bg-dark-card w-full max-w-xl rounded-[36px] overflow-hidden shadow-2xl border border-carbon/5 dark:border-dark-border p-6 sm:p-10 my-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-gray-100 dark:bg-dark-surface text-carbon dark:text-dark-text hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="inline-block text-[11px] font-bold uppercase tracking-eyebrow text-vivid-teal mb-1">
                  PS SAFETYNETS SOLUTIONS • HYDERABAD
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-carbon dark:text-dark-text tracking-tight">
                  Request Free Doorstep Measurement.
                </h3>
                <p className="text-slate dark:text-dark-muted text-xs sm:text-sm mt-1">
                  Same-day laser measurement across Gachibowli, HITEC City, Madhapur, Secunderabad, LB Nagar & all Hyderabad areas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1.5">
                    Selected Safety Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-carbon"
                    required
                  >
                    <option value="FIRST PIGEON NET">FIRST PIGEON NET (Balcony Pest Netting)</option>
                    <option value="INVISIBLE GRILL">INVISIBLE GRILL (SS 316 Aesthetic Security)</option>
                    <option value="BOX CRICKET NET">BOX CRICKET NET (Sports Turf Netting)</option>
                    <option value="DUCTS AREA">DUCTS AREA (Shaft & Building Utility)</option>
                    <option value="BIRDS SPIKES">BIRDS SPIKES (Humane Anti-Perch Spikes)</option>
                    <option value="Complete Home Netting Package">Complete Home Netting Package</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1.5">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-carbon"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="tel"
                        placeholder="+91 99009 80207"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-carbon"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1.5">
                      Hyderabad Location / Apartment
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3.5 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="text"
                        placeholder="e.g. My Home Bhooja, HITEC City"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-carbon"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1.5">
                      Preferred Inspection Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3.5 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-carbon"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3.5 rounded-[12px] transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-carbon border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit & Book Free Measurement</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-mist dark:text-dark-muted mt-2">
                    ⚡ Certified Hyderabad rigger will arrive with laser tools and physical material samples.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-vivid-teal/20 text-carbon flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#059669]" />
              </div>

              <h3 className="text-2xl font-bold text-carbon dark:text-dark-text tracking-tight mb-2">
                Thank you, {formData.name || 'Customer'}!
              </h3>
              <p className="text-slate dark:text-dark-muted text-sm max-w-md mx-auto mb-6">
                We have received your inspection request for <strong>{formData.service}</strong> in Hyderabad. Our team will contact you on <strong>{formData.phone}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919900980207?text=Hi%20PS%20Safetynets%20Solutions%2C%20I%20just%20booked%20a%20free%20quote%20request%20for%20${encodeURIComponent(
                    formData.service
                  )}%20at%20${encodeURIComponent(formData.location)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-[12px] bg-[#25D366] text-white font-bold text-xs shadow-sm hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp: 9900980207</span>
                </a>

                <button
                  onClick={handleReset}
                  className="flex-1 py-3.5 px-4 rounded-[12px] bg-carbon text-pure-white text-xs font-bold hover:bg-black transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
