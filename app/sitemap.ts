import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { locales } from '@/lib/i18n';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Home
    routes.push({
      url: `${site.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });

    // Projects index
    routes.push({
      url: `${site.url}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Contact
    routes.push({
      url: `${site.url}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });

    // Project case studies
    projects.forEach((p) => {
      routes.push({
        url: `${site.url}/${locale}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return routes;
}
