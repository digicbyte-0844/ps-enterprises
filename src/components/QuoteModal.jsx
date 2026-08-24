import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Phone, MapPin, User, ArrowRight, MessageSquare, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import confetti from 'canvas-confetti';
import { sendEmailInquiry } from '../utils/sendEmailInquiry';

export default function QuoteModal({ isOpen, initialService = '', onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'FIRST PIGEON NET',
    location: '',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const recipientEmail = 'pssafetynetssolutions@gmail.com';
  const ownerPhone = '9900980207';

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^0-9]/g, '');
    return cleaned.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    setLoading(true);

    // 1. Dispatch real email directly to admin inbox (pssafetynetssolutions@gmail.com)
    await sendEmailInquiry({
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      service: formData.service,
      preferredDate: formData.preferredDate,
      message: formData.notes,
      formSource: 'Doorstep Quote Modal'
    });

    setLoading(false);
    setSubmitted(true);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'ads_conversion_Sign_up_1', {
        event_category: 'Lead',
        event_label: 'Doorstep Quote Modal',
        value: 1.0
      });
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#0d1212', '#f59e0b', '#38bdf8'],
      });
    } catch (err) {}
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: initialService || 'FIRST PIGEON NET',
      location: '',
      preferredDate: '',
      notes: '',
    });
    onClose();
  };

  const generateWhatsAppUrl = () => {
    const text = `*NEW INSPECTION INQUIRY - PS SAFETYNETS SOLUTIONS HYDERABAD*

👤 *Customer Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Hyderabad Locality:* ${formData.location}
🛠️ *Safety Solution:* ${formData.service}
📅 *Preferred Date:* ${formData.preferredDate || 'Earliest available'}
📝 *Balcony Dimensions / Notes:* ${formData.notes || 'Please schedule doorstep measurement.'}

---------------------------------------
_Sent via Quote Modal on pssafetynetssolutions.in_`;
    return `https://wa.me/91${ownerPhone}?text=${encodeURIComponent(text)}`;
  };

  const generateGmailUrl = () => {
    const subject = encodeURIComponent(`[Website Inspection Request] ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(`Hello PS Safetynets Solutions Team,

I have submitted a free doorstep measurement request:

- Name: ${formData.name}
- Phone: ${formData.phone}
- Location: ${formData.location}
- Service: ${formData.service}
- Preferred Date: ${formData.preferredDate || 'Earliest available'}
- Notes: ${formData.notes || 'Please arrange site visit.'}

Thank you,
${formData.name}`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fade-in text-left">
      <div
        className="fixed inset-0 bg-carbon/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-3.5 sm:p-6">
        {/* Modal Box with Sharp Square Architectural Formatting */}
        <div className="relative bg-pure-white dark:bg-dark-card w-full max-w-xl border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/20 dark:border-dark-border shadow-2xl p-6 sm:p-9 my-6">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-100 dark:bg-dark-surface text-carbon dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-border flex items-center justify-center transition-colors border border-carbon/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-5 pr-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-pure-white dark:bg-dark-surface border-l-2 border-emerald-500 border-t border-r border-b border-carbon/10 mb-2 shadow-2xs">
                  <Sparkles className="w-3 h-3 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
                    PS SAFETYNETS SOLUTIONS • HYDERABAD
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
                  Book Free Doorstep Measurement.
                </h3>
                <p className="text-slate dark:text-dark-muted text-xs mt-1 leading-relaxed">
                  We dispatch certified technicians with laser measurement tools and physical samples across all Hyderabad localities.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Safety Service Select */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-dark-text mb-1">
                    Selected Safety Solution *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                    required
                  >
                    <option value="FIRST PIGEON NET">FIRST PIGEON NET (Balcony Pest Protection)</option>
                    <option value="INVISIBLE GRILL">INVISIBLE GRILL (SS 316 Aesthetic Security)</option>
                    <option value="BOX CRICKET NET">BOX CRICKET NET (Sports Turf Netting)</option>
                    <option value="DUCTS AREA">DUCTS AREA (Shaft & Building Utility)</option>
                    <option value="BIRDS SPIKES">BIRDS SPIKES (Humane Anti-Perch Spikes)</option>
                    <option value="Complete Home Netting Package">Complete Home Netting Package</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-dark-text mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 absolute left-3 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border pl-9 pr-3 py-2 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-dark-text mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="tel"
                        placeholder="e.g. 9900980207"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (phoneError) setPhoneError('');
                        }}
                        className={`w-full bg-sage-canvas/30 dark:bg-dark-surface border pl-9 pr-3 py-2 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal ${
                          phoneError ? 'border-red-500' : 'border-carbon/15 dark:border-dark-border'
                        }`}
                        required
                      />
                    </div>
                    {phoneError && <p className="text-[10px] text-red-500 font-semibold mt-0.5">{phoneError}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-dark-text mb-1">
                      Hyderabad Locality / Society *
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 absolute left-3 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="text"
                        placeholder="e.g. My Home Bhooja, HITEC City"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border pl-9 pr-3 py-2 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-dark-text mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 absolute left-3 top-3 text-mist dark:text-dark-muted" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border pl-9 pr-3 py-2 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-carbon dark:text-dark-text mb-1">
                    Balcony Dimensions / Specific Notes
                  </label>
                  <textarea
                    rows="2"
                    placeholder="e.g. 2 Balconies on 14th floor, approx 15x6 ft. Need site visit and quote."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3 py-2 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3.5 transition-all flex items-center justify-center gap-2 shadow-sm text-xs sm:text-sm cursor-pointer border border-vivid-teal"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-carbon border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Submit & Book Free Measurement</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate dark:text-dark-muted mt-2">
                    ⚡ Instant delivery directly to <strong>pssafetynetssolutions@gmail.com</strong>. Free doorstep visit.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Success Screen with Direct Gmail & WhatsApp Integrations */
            <div className="text-center py-5">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-300">
                <CheckCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-carbon dark:text-dark-text tracking-tight mb-1 font-display">
                Request Sent Successfully, {formData.name || 'Customer'}!
              </h3>
              <p className="text-slate dark:text-dark-muted text-xs max-w-md mx-auto mb-4 leading-relaxed">
                Your inspection inquiry for <strong className="text-carbon dark:text-dark-text">{formData.service}</strong> at <strong className="text-carbon dark:text-dark-text">{formData.location}</strong> has been dispatched directly to our master engineer.
              </p>

              {/* Verified Details Card */}
              <div className="bg-sage-canvas/40 dark:bg-dark-surface p-3 border border-carbon/10 mb-4 text-xs text-left space-y-1">
                <div><span className="text-mist font-semibold">Phone:</span> <strong>{formData.phone}</strong></div>
                <div><span className="text-mist font-semibold">Service:</span> <strong>{formData.service}</strong></div>
                <div><span className="text-mist font-semibold">Location:</span> <strong>{formData.location}</strong></div>
              </div>

              {/* Action Buttons: WhatsApp & Gmail */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm transition-colors border border-[#25D366]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send on WhatsApp (9900980207)</span>
                </a>

                <a
                  href={generateGmailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#ea4335] hover:bg-[#d93025] text-white font-bold text-xs shadow-sm transition-colors border border-[#ea4335]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Gmail</span>
                </a>
              </div>

              <div className="mt-3">
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 bg-carbon hover:bg-black text-pure-white text-xs font-bold transition-colors cursor-pointer"
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
