/**
 * Calendar utilities for SRGI Garba Night 2026
 * Saturday, 17 October 2026, 6:00 PM – 8:00 PM IST
 */

export const EVENT_DETAILS = {
  title: 'SRGI Garba Night 2026',
  description:
    'SR Group of Institutions, Jhansi presents GARBA NIGHT 2026 - A Royal Navratri Experience. Nine Colours. Endless Beats. One Magical Night.\n\nImportant: College ID is mandatory. Entry closes strictly at 6:10 PM.\nDress Code: Girls - Multicolour Traditional Wear | Boys - Blue Kurta Pajama.\nBring your Dandiya sticks!',
  location: 'SRGI Campus, Gwalior Road, Jhansi, Uttar Pradesh 284002',
  startDateIso: '2026-10-17T18:00:00+05:30',
  endDateIso: '2026-10-17T20:00:00+05:30',
  startUtc: '20261017T123000Z',
  endUtc: '20261017T143000Z',
};

export function getGoogleCalendarUrl(): string {
  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', EVENT_DETAILS.title);
  url.searchParams.set('dates', `${EVENT_DETAILS.startUtc}/${EVENT_DETAILS.endUtc}`);
  url.searchParams.set('details', EVENT_DETAILS.description);
  url.searchParams.set('location', EVENT_DETAILS.location);
  return url.toString();
}

export function downloadIcsFile(): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SRGI Jhansi//Garba Night 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${EVENT_DETAILS.title}`,
    `DESCRIPTION:${EVENT_DETAILS.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${EVENT_DETAILS.location}`,
    `DTSTART:${EVENT_DETAILS.startUtc}`,
    `DTEND:${EVENT_DETAILS.endUtc}`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    'UID:srgi-garba-night-2026@srgi.ac.in',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'SRGI-Garba-Night-2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
