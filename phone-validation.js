/**
 * Shared Cameroon phone validation.
 *
 * Accepts numbers typed with spaces, a leading "+", a "237" country code,
 * or a leading "0" (e.g. "677 12 34 56", "+237677123456", "0677123456")
 * and checks them against Cameroon's mobile prefixes.
 *
 * @param {string} phone - raw phone input from a form field
 * @returns {{ isValid: boolean, normalized: string|null }}
 *   normalized is the clean 9-digit number (e.g. "677123456") when valid,
 *   or null when invalid.
 */
function validateCameroonPhone(phone) {
  if (typeof phone !== 'string') phone = String(phone || '');

  // Remove spaces and + signs
  let cleaned = phone.replace(/[\s+]/g, '');

  // Strip anything that isn't a digit (dashes, dots, etc.)
  cleaned = cleaned.replace(/\D/g, '');

  // Remove leading zeros (local dialing prefix, e.g. "0677123456")
  cleaned = cleaned.replace(/^0+/, '');

  // Extract the last 9 digits — this also naturally strips a leading
  // "237" country code (e.g. "237677123456" -> "677123456")
  const nineDigits = cleaned.slice(-9);

  const isValid = /^[2367][0-9]{8}$/.test(nineDigits);

  return {
    isValid,
    normalized: isValid ? nineDigits : null
  };
}
