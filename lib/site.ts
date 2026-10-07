/**
 * Single source of truth for personal/brand data.
 * Only real, verifiable information lives here.
 */
export const site = {
  name: 'Furkan Söyleyici',
  initials: 'FS',
  url: 'https://www.furkansoyleyici.com',
  email: 'soyleyicifurkan@gmail.com',
  location: { city: 'Isparta', country: 'Türkiye' },
  social: {
    github: 'https://github.com/furkansylyc',
    linkedin: 'https://www.linkedin.com/in/furkansylyc/',
  },
  /**
   * Path to the résumé PDF inside /public (e.g. '/furkan-soyleyici-resume.pdf').
   * Resume buttons stay hidden while this is null.
   */
  resumeUrl: null as string | null,
  /** Toggle the "Available for projects" indicator in the navbar. */
  available: true,
  year: 2026,
} as const;
