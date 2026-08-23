import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MapPin, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import confetti from 'canvas-confetti';

export default function WhatsAppInquiryModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: initialService || 'Balcony Pigeon Safety Net',
    message: '',
  });

  if (!isOpen) return null;

  const ownerPhone = '9900980207';

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#25D366', '#64d5b3', '#0d1212'],
      });
    } catch (err) {}

    const text = `*NEW SAFETY INQUIRY - PS SAFETYNETS SOLUTIONS HYDERABAD*

👤 *Customer Name:* ${formData.name || 'Not provided'}
📞 *Phone / WhatsApp:* ${formData.phone || 'Not provided'}
📍 *Hyderabad Locality:* ${formData.location || 'Hyderabad'}
🛠️ *Service Required:* ${formData.service || 'Balcony Safety Netting'}
📝 *Requirement / Notes:* ${formData.message || 'Please provide free laser inspection and doorstep quote.'}

---------------------------------------
_Sent via PS Safetynets Solutions Hyderabad Website_`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/91${ownerPhone}?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
    onClose();
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
        className="relative w-full max-w-lg bg-pure-white dark:bg-dark-card rounded-[32px] sm:rounded-[36px] p-5 sm:p-8 shadow-2xl border border-carbon/10 dark:border-dark-border z-10 my-auto text-carbon dark:text-dark-text overflow-hidden"
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
          <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
            <WhatsAppIcon className="w-7 h-7 fill-[#25D366]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
              WhatsApp Quick Inquiry
            </h3>
            <p className="text-slate dark:text-dark-muted text-xs sm:text-sm mt-0.5">
              Direct to Owner: <span className="font-semibold text-carbon dark:text-dark-text">+91 99009 80207</span>
            </p>
          </div>
        </div>

        {/* Live Status Pill */}
        <div className="mb-4 p-2.5 rounded-[16px] bg-[#25D366]/10 border border-[#25D366]/20 flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
          <span className="text-[#128C7E] dark:text-[#25D366] font-semibold">
            Owner Online • 30-Min Rapid Hyderabad Response
          </span>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSendWhatsApp} className="space-y-3">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Your WhatsApp No *</label>
              <input
                type="tel"
                placeholder="+91 99009 80207"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Hyderabad Locality *</label>
              <input
                type="text"
                placeholder="e.g. Gachibowli / Kondapur"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Required Solution</label>
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
              <option value="Complete High-Rise Balcony Inspection">Complete High-Rise Balcony Inspection</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-carbon dark:text-dark-text">Notes / Balcony Size (Optional)</label>
            <textarea
              rows="2"
              placeholder="e.g. Balcony on 14th floor, approx 12x6 ft."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-[14px] bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-vivid-teal resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-[16px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 hover:scale-[1.01] active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
              <span>Send Details to Owner on WhatsApp</span>
              <Send className="w-3.5 h-3.5 ml-1 opacity-90" />
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-carbon/5 dark:border-dark-border flex items-center justify-between text-[11px] text-slate dark:text-dark-muted">
          <span>⚡ Free Doorstep Measurement</span>
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
