
export const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzjfUiJnI82RvSZ-u7lSmywVISbsl_2KnPo3P14UcWYTRnH8uXhN769oV3-Qj6hCLNiEw/exec';

export async function submitLead(leadData) {
  const payload = {
    name: String(
      leadData.name || leadData.fullName || ''
    ).trim(),

    phone: String(
      leadData.phone || leadData.phoneNumber || ''
    ).trim(),

    city: String(leadData.city || '').trim(),

    address: String(leadData.address || '').trim(),

    projectName: String(
      leadData.projectName || 'Unknown Project'
    ).trim(),

    propertyType:
      leadData.propertyType ||
      leadData.configuration ||
      '',

    source: 'VISTHARA',

    pageUrl: window.location.href,

    timestamp: new Date().toISOString()
  };

  if (!payload.name || !payload.phone) {
    return {
      success: false,
      message: 'Please enter your name and phone number.'
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

    // no-cors does not expose the server response.
    // This means the request was attempted, not verified.
    return {
      success: true,
      message: 'Your enquiry request has been submitted.'
    };

  } catch (error) {
    console.error('Lead submission failed:', error);

    return {
      success: false,
      message: 'Unable to submit your enquiry. Please try again.'
    };
  }
}
