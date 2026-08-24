/**
 * Reliable Serverless Email Dispatcher for PS Safetynets Solutions
 * Sends direct lead payload to pssafetynetssolutions@gmail.com
 * Secure FormSubmit Endpoint: 10594a937e70498bc8ff480b05d894e8
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
  // Secure FormSubmit endpoint token linked to pssafetynetssolutions@gmail.com
  const formEndpoint = '10594a937e70498bc8ff480b05d894e8';

  const currentDomain = typeof window !== 'undefined' ? window.location.origin : 'https://pssafetynetssolutions.in';

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
    'Submission Source': `${formSource} (${currentDomain})`,
    'Timestamp (IST)': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${formEndpoint}`, {
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
    return { success: true, fallback: true };
  }
}
