import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle, ArrowRight, Sparkles, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import WhatsAppInquiryModal from '../components/WhatsAppInquiryModal';
import EmailInquiryModal from '../components/EmailInquiryModal';
import confetti from 'canvas-confetti';
import HyderabadLocationsSection from '../components/HyderabadLocationsSection';
import { sendEmailInquiry } from '../utils/sendEmailInquiry';

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
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const recipientEmail = 'pssafetynetssolutions@gmail.com';
  const ownerPhone = '9900980207';

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^0-9]/g, '');
    return cleaned.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(form.phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    setLoading(true);

    // 1. Dispatch real email to admin (pssafetynetssolutions@gmail.com)
    await sendEmailInquiry({
      name: form.name,
      phone: form.phone,
      email: form.email,
      location: form.location,
      service: form.service,
      preferredDate: form.date,
      message: form.message,
      formSource: 'Contact Page Form'
    });

    setLoading(false);
    setSubmitted(true);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'ads_conversion_Sign_up_1', {
        event_category: 'Lead',
        event_label: 'Contact Page Form',
        value: 1.0
      });
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#64d5b3', '#ea4335', '#25D366']
      });
    } catch (err) {}
  };

  const generateWhatsAppUrl = () => {
    const text = `*NEW INSPECTION INQUIRY - PS SAFETYNETS SOLUTIONS HYDERABAD*

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
📍 *Hyderabad Locality:* ${form.location}
🛠 *Solution:* ${form.service}
📅 *Preferred Date:* ${form.date || 'Earliest available'}
📝 *Notes:* ${form.message || 'Please schedule doorstep measurement.'}

---------------------------------------
_Sent via Contact Page on pssafetynetssolutions.in_`;
    return `https://wa.me/91${ownerPhone}?text=${encodeURIComponent(text)}`;
  };

  const generateGmailUrl = () => {
    const subject = encodeURIComponent(`[Website Inspection Request] ${form.service} at ${form.location || 'Hyderabad'}`);
    const body = encodeURIComponent(`Hello PS Safetynets Solutions Team,

I have submitted an inspection request through your contact page:

- Name: ${form.name}
- Phone: ${form.phone}
- Email: ${form.email || 'Not provided'}
- Location: ${form.location}
- Service: ${form.service}
- Preferred Date: ${form.date || 'Earliest available'}
- Notes: ${form.message || 'Please arrange doorstep measurement and quotation.'}

Thank you,
${form.name}`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 sm:pt-36 pb-24 bg-sage-canvas dark:bg-[#080d0e] min-h-screen transition-colors duration-300 animate-fade-in text-left">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pure-white/90 dark:bg-dark-card border-l-2 border-emerald-500 border-t border-r border-b border-carbon/10 dark:border-dark-border mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-carbon dark:text-vivid-teal">
              PS SAFETYNETS SOLUTIONS • HYDERABAD HQ
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-carbon dark:text-dark-text tracking-tight leading-[1.1] font-display">
            Get in Touch.
          </h1>
          <p className="text-slate dark:text-dark-muted text-xs sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Schedule a free doorstep laser measurement anywhere in Hyderabad or reach our senior engineering team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-16">
          
          {/* Contact Details Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="bg-pure-white dark:bg-dark-card p-6 sm:p-8 border-l-4 border-l-vivid-teal border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover space-y-5">
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
                  className="flex items-center gap-3 p-3 bg-sage-canvas/40 dark:bg-dark-surface hover:bg-sage-canvas transition-colors border border-carbon/10 group"
                >
                  <div className="w-10 h-10 bg-carbon text-vivid-teal flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mist dark:text-dark-muted font-bold uppercase">Helpline (7 AM - 9 PM)</div>
                    <div className="text-sm font-bold text-carbon dark:text-dark-text group-hover:text-emerald-600 transition-colors">+91 99009 80207</div>
                  </div>
                </a>

                {/* Direct WhatsApp Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setIsWhatsAppModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-800 dark:text-emerald-400 font-bold uppercase">Official WhatsApp Desk</div>
                      <div className="text-sm font-bold text-carbon dark:text-dark-text">9900980207</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 px-2 py-1 bg-white/80 dark:bg-dark-card border border-[#25D366]/40">
                    Quick Chat
                  </span>
                </button>

                {/* Direct Email Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setIsEmailModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 bg-[#ea4335]/10 hover:bg-[#ea4335]/20 border border-[#ea4335]/30 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#ea4335] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-red-800 dark:text-red-400 font-bold uppercase">Direct Admin Email</div>
                      <div className="text-xs sm:text-sm font-bold text-carbon dark:text-dark-text truncate">pssafetynetssolutions@gmail.com</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-red-700 dark:text-red-400 px-2 py-1 bg-white/80 dark:bg-dark-card border border-[#ea4335]/40 shrink-0">
                    Send Mail
                  </span>
                </button>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 bg-sage-canvas/40 dark:bg-dark-surface border border-carbon/10">
                  <div className="w-10 h-10 bg-carbon text-vivid-teal flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mist dark:text-dark-muted font-bold uppercase">Main Hub & Dispatch</div>
                    <div className="text-xs sm:text-sm font-bold text-carbon dark:text-dark-text">HITEC City Main Road, Madhapur & Gachibowli Hub, Hyderabad 500081</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-pure-white dark:bg-dark-card p-6 sm:p-8 border-l-4 border-l-emerald-500 border-t border-r border-b border-carbon/15 dark:border-dark-border shadow-subtle-hover">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-vivid-teal block mb-1">
                      FREE DOORSTEP INSPECTION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-carbon dark:text-dark-text tracking-tight font-display">
                      Book Certified Laser Measurement.
                    </h3>
                    <p className="text-slate dark:text-dark-muted text-xs mt-1">
                      Fill in your details below for instant delivery directly to <strong>pssafetynetssolutions@gmail.com</strong>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-carbon dark:text-dark-text mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Reddy"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-carbon dark:text-dark-text mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          placeholder="e.g. 9900980207"
                          required
                          value={form.phone}
                          onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
                            if (phoneError) setPhoneError('');
                          }}
                          className={`w-full bg-sage-canvas/30 dark:bg-dark-surface border px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal ${
                            phoneError ? 'border-red-500' : 'border-carbon/15 dark:border-dark-border'
                          }`}
                        />
                        {phoneError && <p className="text-[10px] text-red-500 font-semibold mt-0.5">{phoneError}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-carbon dark:text-dark-text mb-1">Hyderabad Locality / Apartment *</label>
                        <input
                          type="text"
                          placeholder="e.g. My Home Bhooja, HITEC City"
                          required
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-carbon dark:text-dark-text mb-1">Safety Solution Required</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal"
                        >
                          <option value="FIRST PIGEON NET">FIRST PIGEON NET (Balcony Pest Protection)</option>
                          <option value="INVISIBLE GRILL">INVISIBLE GRILL (SS 316 Aesthetic Security)</option>
                          <option value="BOX CRICKET NET">BOX CRICKET NET (Sports Turf Netting)</option>
                          <option value="DUCTS AREA">DUCTS AREA (Shaft & Building Utility)</option>
                          <option value="BIRDS SPIKES">BIRDS SPIKES (Humane Anti-Perch Spikes)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-carbon dark:text-dark-text mb-1">Balcony Dimensions / Notes</label>
                      <textarea
                        rows="3"
                        placeholder="e.g. 2 Balconies on 14th floor, approx 15x6 ft. Need site visit and quotation."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-sage-canvas/30 dark:bg-dark-surface border border-carbon/15 dark:border-dark-border px-3.5 py-2.5 text-xs sm:text-sm text-carbon dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-vivid-teal resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-vivid-teal hover:bg-teal-hover text-carbon font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer border border-vivid-teal"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-carbon border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inspection Request to Admin</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Success Screen */
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-300">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-carbon dark:text-dark-text tracking-tight mb-1 font-display">
                    Thank You, {form.name || 'Customer'}!
                  </h3>
                  <p className="text-slate dark:text-dark-muted text-xs max-w-md mx-auto mb-5 leading-relaxed">
                    Your request for <strong className="text-carbon dark:text-dark-text">{form.service}</strong> at <strong className="text-carbon dark:text-dark-text">{form.location}</strong> has been emailed directly to <strong>{recipientEmail}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm transition-colors border border-[#25D366]"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Send on WhatsApp</span>
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

                  <div className="mt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-carbon hover:bg-black text-pure-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Local SEO Section */}
        <HyderabadLocationsSection onOpenQuote={onOpenQuote} />
      </div>

      {/* Embedded Modals */}
      <WhatsAppInquiryModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialService={form.service}
      />
      <EmailInquiryModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
