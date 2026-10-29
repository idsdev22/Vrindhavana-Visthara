
export const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzjfUiJnI82RvSZ-u7lSmywVISbsl_2KnPo3P14UcWYTRnH8uXhN769oV3-Qj6hCLNiEw/exec';

/**
 * Submits a website enquiry to Google Apps Script.
 * Apps Script saves the enquiry, sends an email,
 * and forwards it to the Firebase CRM API.
 */
export async function submitLead(leadData) {
  const propertyType =
    leadData.propertyType ||
    leadData.configuration ||
    '';

  const payload = {
    name: String(leadData.name || leadData.fullName || '').trim(),
    phone: String(leadData.phone || leadData.phoneNumber || '').trim(),
    city: String(leadData.city || '').trim(),
    address: String(leadData.address || leadData.city || '').trim(),
    projectName: String(leadData.projectName || 'Unknown Project').trim(),
    propertyType,
    source: propertyType
      ? `${leadData.source || 'General Enquiry'} [${propertyType}]`
      : (leadData.source || 'General Enquiry'),
    pageUrl: window.location.href,
    timestamp: new Date().toISOString()
  };

  if (!payload.name || !payload.phone) {
    return {
      success: false,
      error: 'Name and phone number are required.'
    };
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    // Opaque response: this does not confirm server-side success.
    return {
      success: true,
      message: 'Enquiry request submitted.'
    };
  } catch (error) {
    console.error('Failed to submit lead:', error);

    return {
      success: false,
      error: 'Unable to submit enquiry. Please try again.'
    };
  }
}
