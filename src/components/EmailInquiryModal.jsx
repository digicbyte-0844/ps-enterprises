import React, { useState } from 'react';
import { Mail, Send, X, CheckCircle2, Copy, Sparkles, Phone, MapPin, ExternalLink } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import confetti from 'canvas-confetti';

export default function EmailInquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: 'Balcony Pigeon Safety Net',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const recipientEmail = 'pssafetynetssolutions@gmail.com';

  const generateEmailSubject = () => {
    return encodeURIComponent(`[Inquiry] ${formData.service} at ${formData.location || 'Hyderabad'}`);
  };

  const generateEmailBody = () => {
    const text = `Hello PS Safetynets Solutions Team,

I would like to request an inspection and quotation for safety netting services in Hyderabad.

CUSTOMER DETAILS:
- Name: ${formData.name || 'Not provided'}
- Phone / WhatsApp: ${formData.phone || 'Not provided'}
- Email: ${formData.email || 'Not provided'}
- Hyderabad Locality / Landmark: ${formData.location || 'Hyderabad'}
- Requested Solution: ${formData.service}
- Additional Requirements / Balcony Size: ${formData.message || 'Please provide site measurement and quotation.'}

Thank you,
${formData.name || 'Customer'}`;
    return encodeURIComponent(text);
  };

  const handleSendGmailWeb = (e) => {
    e.preventDefault();
    setIsSent(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ea4335', '#64d5b3', '#34484a'],
      });
    } catch (err) {}

    const subject = generateEmailSubject();
    const body = generateEmailBody();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSendDefaultEmail = (e) => {
    e.preventDefault();
    setIsSent(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ea4335', '#64d5b3', '#34484a'],
      });
    } catch (err) {}

    const subject = generateEmailSubject();
    const body = generateEmailBody();
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-carbon/75 dark:bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-xl bg-pure-white dark:bg-dark-card rounded-[32px] sm:rounded-[36px] p-5 sm:p-8 shadow-2xl border border-carbon/10 dark:border-dark-border z-10 my-auto text-carbon dark:text-dark-text overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate/10 dark:bg-dark-surface hover:bg-slate/20 text-carbon dark:text-dark-text flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pr-10">
          <div className="w-12 h-12 rounded-2xl bg-[#ea4335]/15 text-[#ea4335] flex items-center justify-center shrink-0 shadow-sm">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
              Send Email Inquiry
            </h3>
            <p className="text-slate dark:text-dark-muted text-xs sm:text-sm mt-0.5">
              Direct to <span className="font-semibold text-carbon dark:text-dark-text">{recipientEmail}</span>
            </p>
          </div>
        </div>

        {/* Copy Email Quick Pill */}
        <div className="mb-5 p-2.5 rounded-[16px] bg-sage-canvas/40 dark:bg-dark-surface/70 border border-carbon/5 dark:border-dark-border flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs truncate">
            <span className="text-slate dark:text-dark-muted">Recipient:</span>
            <strong className="text-carbon dark:text-dark-text font-mono text-[11px] sm:text-xs truncate">
              {recipientEmail}
            </strong>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="shrink-0 px-2.5 py-1 rounded-[10px] bg-pure-white dark:bg-dark-card hover:bg-carbon hover:text-pure-white text-[11px] font-bold transition-all flex items-center gap-1 shadow-xs"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Your Name *</label>
              <input
                type="text"
                placeholder="e.g. Ramesh Reddy"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Phone / WhatsApp *</label>
              <input
                type="tel"
                placeholder="+91 99009 80207"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Hyderabad Locality *</label>
              <input
                type="text"
                placeholder="e.g. Gachibowli / HITEC City"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Safety Solution</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal"
              >
                <option value="Balcony Pigeon Safety Net">Balcony Pigeon Safety Net</option>
                <option value="SS 316 Invisible Grills">SS 316 Invisible Grills</option>
                <option value="Box Cricket Turf Net">Box Cricket Turf Net</option>
                <option value="Building Ducts Area Netting">Building Ducts Area Netting</option>
                <option value="Polycarbonate Bird Spikes">Polycarbonate Bird Spikes</option>
                <option value="Complete High-Rise Inspection">Complete High-Rise Inspection</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Requirement Details / Balcony Dimensions</label>
            <textarea
              rows="2"
              placeholder="e.g. 2 Balconies on 14th floor, approx 15x6 ft. Need quotation and site visit."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            {/* Primary: Send via Gmail Web */}
            <button
              type="button"
              onClick={handleSendGmailWeb}
              className="w-full py-3.5 px-4 rounded-[16px] bg-[#ea4335] hover:bg-[#d93025] text-pure-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#ea4335]/30 hover:scale-[1.01] active:scale-[0.98] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Open in Gmail (Pre-filled Complete Info)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Secondary: Default Email Client */}
            <button
              type="button"
              onClick={handleSendDefaultEmail}
              className="w-full py-2.5 px-4 rounded-[14px] bg-slate/10 dark:bg-dark-surface hover:bg-slate/20 text-carbon dark:text-dark-text font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open in Other Email App (Outlook / Apple Mail)</span>
            </button>
          </div>
        </form>

        {/* Footer Guarantee */}
        <div className="mt-4 pt-3 border-t border-carbon/5 dark:border-dark-border flex items-center justify-between text-[11px] text-slate dark:text-dark-muted">
          <span>⚡ 30-Min Rapid Hyderabad Response</span>
          <a
            href="tel:+919900980207"
            className="font-bold text-carbon dark:text-vivid-teal hover:underline flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>Call 9900980207</span>
          </a>
        </div>
      </div>
    </div>
  );
}
