import React, { useState } from 'react';
import { Mail, Send, X, CheckCircle2, Sparkles, Phone, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendEmailInquiry } from '../utils/sendEmailInquiry';

export default function EmailInquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: 'FIRST PIGEON NET',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  if (!isOpen) return null;

  const recipientEmail = 'pssafetynetssolutions@gmail.com';

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^0-9]/g, '');
    return cleaned.length >= 10;
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    setLoading(true);

    // 1. Dispatch real email to admin (pssafetynetssolutions@gmail.com)
    await sendEmailInquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      service: formData.service,
      message: formData.message,
      formSource: 'Email Inquiry Modal'
    });

    setLoading(false);
    setIsSent(true);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'ads_conversion_Sign_up_1', {
        event_category: 'Lead',
        event_label: 'Email Inquiry Modal',
        value: 1.0
      });
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ea4335', '#10b981', '#0d1212'],
      });
    } catch (err) {}
  };

  const handleOpenGmailCompose = () => {
    const subject = encodeURIComponent(`[Inquiry] ${formData.service} at ${formData.location || 'Hyderabad'}`);
    const body = encodeURIComponent(`Hello PS Safetynets Solutions Team,

I have submitted an inquiry for safety netting in Hyderabad:

- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'Not specified'}
- Location: ${formData.location}
- Service: ${formData.service}
- Requirements / Dimensions: ${formData.message || 'Please provide site measurement and quote.'}

Thank you,
${formData.name}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleClose = () => {
    setIsSent(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      service: 'FIRST PIGEON NET',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto animate-fade-in text-left">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-carbon/75 dark:bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card with Sharp Square Edges */}
      <div
        className="relative w-full max-w-lg bg-pure-white dark:bg-dark-card border-l-4 border-l-[#ea4335] border-t border-r border-b border-carbon/20 dark:border-dark-border p-5 sm:p-8 shadow-2xl z-10 my-auto text-carbon dark:text-dark-text overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 dark:bg-dark-surface hover:bg-gray-200 dark:hover:bg-dark-border text-carbon dark:text-dark-text flex items-center justify-center transition-colors border border-carbon/10 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSent ? (
          <div>
            {/* Header */}
            <div className="mb-5 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#ea4335]/10 text-[#ea4335] border border-[#ea4335]/20 mb-2">
                <Mail className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  DIRECT EMAIL TO ADMIN
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-display">
                Send Inquiry to Admin Gmail
              </h3>
              <p className="text-slate dark:text-dark-muted text-xs mt-1">
                Your request will be dispatched directly to <strong className="text-carbon dark:text-dark-text">{recipientEmail}</strong>.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSendEmail} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Reddy"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ea4335]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9900980207"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (phoneError) setPhoneError('');
                    }}
                    className={`w-full px-3 py-2 bg-sage-canvas/30 dark:bg-dark-surface border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ea4335] ${
                      phoneError ? 'border-red-500' : 'border-carbon/15 dark:border-dark-border'
                    }`}
                  />
                  {phoneError && <p className="text-[10px] text-red-500 font-semibold mt-0.5">{phoneError}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Hyderabad Locality *</label>
                  <input
                    type="text"
                    placeholder="e.g. Gachibowli / HITEC City"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ea4335]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Safety Solution</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ea4335]"
                  >
                    <option value="FIRST PIGEON NET">Balcony Pigeon Safety Net</option>
                    <option value="INVISIBLE GRILL">SS 316 Invisible Grills</option>
                    <option value="BOX CRICKET NET">Box Cricket Turf Net</option>
                    <option value="DUCTS AREA">Building Ducts Area Netting</option>
                    <option value="BIRDS SPIKES">Polycarbonate Bird Spikes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">Requirement Details / Dimensions</label>
                <textarea
                  rows="2"
                  placeholder="e.g. 2 Balconies on 14th floor, approx 15x6 ft. Need site visit and quote."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ea4335] resize-none"
                />
              </div>

              {/* Single Clean Primary Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 bg-[#ea4335] hover:bg-[#d93025] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer border border-[#ea4335]"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Send Direct Email Inquiry to Admin</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-slate dark:text-dark-muted mt-2">
                  ⚡ 30-Min response from PS Safetynets Solutions Hyderabad.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Sent Confirmation Screen */
          <div className="text-center py-5">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-300">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-1 font-display">
              Email Dispatched to Admin!
            </h3>
            <p className="text-slate dark:text-dark-muted text-xs max-w-sm mx-auto mb-4 leading-relaxed">
              Your inquiry for <strong className="text-carbon dark:text-dark-text">{formData.service}</strong> has been sent to <strong>{recipientEmail}</strong>.
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleOpenGmailCompose}
                className="w-full py-3 px-4 bg-[#ea4335] hover:bg-[#d93025] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors border border-[#ea4335] cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Gmail (View Sent Pre-fill)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleClose}
                className="w-full py-2.5 bg-carbon hover:bg-black text-pure-white text-xs font-bold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
