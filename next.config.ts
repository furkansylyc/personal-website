import type { NextConfig } from 'next';

const legacyProjects = ['easynote', 'stoneage', 'fitapp', 'linguasense', 'siirblog'];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // Keep old project URLs (e.g. /easynote, /easynote.html) working.
    // The proxy then adds the visitor's locale prefix.
    return legacyProjects.flatMap((slug) => [
      { source: `/${slug}`, destination: `/projects/${slug}`, permanent: true },
      { source: `/${slug}.html`, destination: `/projects/${slug}`, permanent: true },
    ]);
  },
};

export default nextConfig;
