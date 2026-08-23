import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle, ArrowRight, Sparkles, Send, Copy, CheckCircle2, ExternalLink } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import WhatsAppInquiryModal from '../components/WhatsAppInquiryModal';
import EmailInquiryModal from '../components/EmailInquiryModal';
import confetti from 'canvas-confetti';
import HyderabadLocationsSection from '../components/HyderabadLocationsSection';

export default function ContactPage({ onOpenQuote }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'FIRST PIGEON NET',
    location: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const recipientEmail = 'pssafetynetssolutions@gmail.com';
  const ownerPhone = '9900980207';

  const generateEmailSubject = () => {
    return encodeURIComponent(`[Website Inspection Request] ${form.service} at ${form.location || 'Hyderabad'}`);
  };

  const generateEmailBody = () => {
    const text = `Hello PS Safetynets Solutions Team,

I have submitted a free inspection and quote request through your website.

CUSTOMER DETAILS:
- Name: ${form.name || 'Customer'}
- Phone / WhatsApp: ${form.phone || 'Not provided'}
- Email: ${form.email || 'Not provided'}
- Hyderabad Locality / Apartment: ${form.location || 'Hyderabad'}
- Requested Solution: ${form.service}
- Preferred Inspection Date: ${form.date || 'Earliest available'}
- Notes & Balcony Dimensions: ${form.message || 'Please arrange doorstep measurement and quotation.'}

Thank you,
${form.name || 'Customer'}`;
    return encodeURIComponent(text);
  };

  const generateWhatsAppText = () => {
    const text = `*NEW INSPECTION INQUIRY - PS SAFETYNETS SOLUTIONS HYDERABAD*

👤 *Name:* ${form.name || 'Customer'}
📞 *Phone:* ${form.phone || 'Not provided'}
📍 *Hyderabad Locality:* ${form.location || 'Hyderabad'}
🛠️ *Solution:* ${form.service}
📅 *Preferred Date:* ${form.date || 'Earliest available'}
📝 *Notes:* ${form.message || 'Please schedule doorstep measurement.'}

---------------------------------------
_Sent via Contact Form on PS Safetynets Solutions Website_`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#64d5b3', '#ea4335', '#25D366']
      });
    } catch (err) {}

    // Auto-trigger Gmail Web compose in new tab
    const subject = generateEmailSubject();
    const body = generateEmailBody();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleManualGmail = () => {
    const subject = generateEmailSubject();
    const body = generateEmailBody();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleManualMailto = () => {
    const subject = generateEmailSubject();
    const body = generateEmailBody();
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleManualWhatsApp = () => {
    const waUrl = `https://wa.me/91${ownerPhone}?text=${generateWhatsAppText()}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <div className="pt-24 sm:pt-36 pb-24 bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pure-white/90 dark:bg-dark-card border border-carbon/10 dark:border-dark-border mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-vivid-teal animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
              PS SAFETYNETS SOLUTIONS • HYDERABAD HQ
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-carbon dark:text-dark-text tracking-tight leading-[1.1]">
            Get in Touch.
          </h1>
          <p className="text-slate dark:text-dark-muted text-xs sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Schedule a free doorstep laser measurement anywhere in Hyderabad or reach our senior engineering team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-16">
          
          {/* Contact Details Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="bg-pure-white dark:bg-dark-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 border border-carbon/10 dark:border-dark-border shadow-subtle-hover space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-carbon dark:text-dark-text font-display">
                  Hyderabad Headquarters
                </h3>
                <p className="text-xs text-slate dark:text-dark-muted mt-1 leading-relaxed">
                  Serving West Hyderabad, Secunderabad, East & Central zones with guaranteed 30-minute rapid dispatch.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Phone Call */}
                <a
                  href="tel:+919900980207"
                  className="flex items-center gap-3 p-3 rounded-[16px] bg-sage-canvas/40 dark:bg-dark-surface hover:bg-sage-canvas transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-carbon text-vivid-teal flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mist dark:text-dark-muted font-bold uppercase">Helpline (7 AM - 9 PM)</div>
                    <div className="font-bold text-sm sm:text-base text-carbon dark:text-dark-text">+91 99009 80207</div>
                  </div>
                </a>

                {/* WhatsApp Quick Dialog Button */}
                <button
                  type="button"
                  onClick={() => setIsWhatsAppModalOpen(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-[16px] bg-[#25D366]/15 hover:bg-[#25D366]/25 transition-colors text-left group cursor-pointer border border-[#25D366]/20"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-[#128C7E] dark:text-[#25D366] font-bold uppercase">WhatsApp Consultation</div>
                    <div className="font-bold text-sm sm:text-base text-carbon dark:text-dark-text">9900980207 (Tap to Chat)</div>
                  </div>
                </button>

                {/* Email Dialog Button */}
                <button
                  type="button"
                  onClick={() => setIsEmailModalOpen(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-[16px] bg-[#ea4335]/15 hover:bg-[#ea4335]/25 transition-colors text-left group cursor-pointer border border-[#ea4335]/20"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ea4335] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-[#d93025] dark:text-[#ea4335] font-bold uppercase">Official Inquiries Email</div>
                    <div className="font-bold text-xs sm:text-sm text-carbon dark:text-dark-text truncate">
                      pssafetynetssolutions@gmail.com
                    </div>
                  </div>
                </button>

                {/* Working Hours */}
                <div className="flex items-center gap-3 p-3 rounded-[16px] bg-sage-canvas/40 dark:bg-dark-surface text-carbon dark:text-dark-text">
                  <div className="w-10 h-10 rounded-full bg-slate/10 dark:bg-dark-card flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-carbon dark:text-vivid-teal" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mist dark:text-dark-muted font-bold uppercase">Working Hours</div>
                    <div className="font-bold text-xs sm:text-sm">Mon - Sun: 7:00 AM – 9:00 PM (7 Days)</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-[16px] bg-sage-canvas/40 dark:bg-dark-surface text-carbon dark:text-dark-text">
                  <div className="w-10 h-10 rounded-full bg-slate/10 dark:bg-dark-card flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-carbon dark:text-vivid-teal" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mist dark:text-dark-muted font-bold uppercase">HQ Dispatch Center</div>
                    <div className="font-bold text-xs">HITEC City Main Road, Madhapur, Hyderabad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-pure-white dark:bg-dark-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-carbon/10 dark:border-dark-border shadow-subtle-hover">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-eyebrow text-vivid-teal block mb-1">
                    ZERO COST SITE VISIT
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
                    Book Free Doorstep Measurement
                  </h3>
                  <p className="text-slate dark:text-dark-muted text-xs sm:text-sm mt-1">
                    Fill in your details below. Your request will be instantly formatted and delivered to our engineering inbox.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Sravan Reddy"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1">Phone (WhatsApp) *</label>
                    <input
                      type="tel"
                      placeholder="+91 99009 80207"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1">Your Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. name@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1">Hyderabad Area / Apartment *</label>
                    <input
                      type="text"
                      placeholder="e.g. My Home Bhooja, HITEC City"
                      required
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1">Safety Solution</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                    >
                      <option value="FIRST PIGEON NET">FIRST PIGEON NET (Balcony Pest Netting)</option>
                      <option value="INVISIBLE GRILL">INVISIBLE GRILL (SS 316 Aesthetic Security)</option>
                      <option value="BOX CRICKET NET">BOX CRICKET NET (Sports Turf Netting)</option>
                      <option value="DUCTS AREA">DUCTS AREA (Shaft & Utility Enclosure)</option>
                      <option value="BIRDS SPIKES">BIRDS SPIKES (Humane Anti-Perch Spikes)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1">Preferred Inspection Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-carbon dark:text-dark-text mb-1">Additional Requirements / Balcony Size</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 2 Balconies on 14th floor, need laser measurement."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate/5 dark:bg-dark-surface border border-carbon/10 dark:border-dark-border rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-vivid-teal hover:bg-teal-hover text-carbon font-bold py-3.5 sm:py-4 rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-sm text-xs sm:text-sm mt-2 cursor-pointer active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Free Inspection Request (Email & WhatsApp)</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-vivid-teal/20 text-carbon flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8 text-[#059669]" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
                  Inquiry Ready & Sent, {form.name}!
                </h3>
                
                <p className="text-slate dark:text-dark-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Your inquiry details have been structured for <strong>{recipientEmail}</strong>. Click below to verify or send directly via WhatsApp:
                </p>

                {/* 3 Direct Actions on Confirmation */}
                <div className="space-y-2.5 max-w-md mx-auto pt-2">
                  {/* Gmail Button */}
                  <button
                    type="button"
                    onClick={handleManualGmail}
                    className="w-full py-3 px-4 rounded-[14px] bg-[#ea4335] hover:bg-[#d93025] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send / View in Gmail Web</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </button>

                  {/* WhatsApp Button */}
                  <button
                    type="button"
                    onClick={handleManualWhatsApp}
                    className="w-full py-3 px-4 rounded-[14px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Send Directly to Owner on WhatsApp (9900980207)</span>
                  </button>

                  {/* Default Email App */}
                  <button
                    type="button"
                    onClick={handleManualMailto}
                    className="w-full py-2.5 px-4 rounded-[14px] bg-slate/10 dark:bg-dark-surface hover:bg-slate/20 text-carbon dark:text-dark-text font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Default Email App (Outlook / Apple Mail)</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate dark:text-dark-muted hover:text-carbon dark:hover:text-vivid-teal underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Embedded Hyderabad Localities SEO Grid */}
        <HyderabadLocationsSection onOpenQuote={onOpenQuote} />
      </div>

      {/* WhatsApp Dialog */}
      <WhatsAppInquiryModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />

      {/* Email Dialog */}
      <EmailInquiryModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
