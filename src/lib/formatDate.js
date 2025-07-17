export function formatDate(dateString, locale = 'en') {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
