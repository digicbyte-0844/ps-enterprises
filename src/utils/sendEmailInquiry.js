/**
 * Reliable Serverless Email Dispatcher for PS Safetynets Solutions
 * Sends direct lead payload to pssafetynetssolutions@gmail.com
 */
export async function sendEmailInquiry({
  name = '',
  phone = '',
  email = '',
  location = '',
  service = '',
  preferredDate = '',
  message = '',
  formSource = 'Website Lead'
}) {
  const adminEmail = 'pssafetynetssolutions@gmail.com';

  const payload = {
    _subject: `🚨 [NEW HYDERABAD INQUIRY] ${service || 'Safety Netting'} - ${name || 'Customer'} (${location || 'Hyderabad'})`,
    _template: 'table',
    _captcha: 'false',
    'Customer Name': name || 'Not specified',
    'Phone / WhatsApp': phone || 'Not specified',
    'Customer Email': email || 'Not specified',
    'Hyderabad Location / Apartment': location || 'Not specified',
    'Requested Safety Solution': service || 'Safety Netting',
    'Preferred Inspection Date': preferredDate || 'Immediate / Earliest',
    'Requirement & Dimensions': message || 'Doorstep laser measurement requested',
    'Submission Source': formSource,
    'Timestamp (IST)': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${adminEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      return { success: false, error: 'Server responded with error' };
    }
  } catch (err) {
    console.warn('FormSubmit network fallback:', err);
    // Even if network blocks FormSubmit, return fallback success so user is routed to WhatsApp/Gmail backup
    return { success: true, fallback: true };
  }
}
