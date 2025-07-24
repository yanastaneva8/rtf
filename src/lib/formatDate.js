export function formatDate(dateString, locale = 'en') {
  if (!dateString) {
    console.error('No date provided');
    return 'Invalid date';
  }
  // If the string is in YYYY-MM-DD format, add the time portion.
  const isoString = /^\d{4}-\d{2}-\d{2}$/.test(dateString)
    ? `${dateString}T00:00:00Z`
    : dateString;
  
  const timestamp = Date.parse(isoString);
  if (isNaN(timestamp)) {
    console.error('Invalid date string:', dateString, '=>', isoString);
    return 'Invalid date';
  }
  const date = new Date(timestamp);
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}