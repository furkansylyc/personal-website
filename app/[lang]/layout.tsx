import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { site } from '@/lib/site';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const viewport: Viewport = {
  themeColor: '#07090d',
  width: 'device-width',
  initialScale: 1,
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = getDictionary(locale);

  const title = dict.meta.title;
  const description = dict.meta.description;
  const canonicalUrl = `${site.url}/${locale}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s · ${site.name}`,
    },
    description,
    keywords: [
      'Furkan Söyleyici',
      'Software Engineer',
      'Android Developer',
      'Web Developer',
      'Kotlin',
      'Jetpack Compose',
      'React',
      'Next.js',
      'Spring Boot',
      'TypeScript',
      'Mobile Developer',
    ],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${site.url}/en`,
        tr: `${site.url}/tr`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: canonicalUrl,
      title,
      description,
      siteName: site.name,
      images: [
        {
          url: '/photos/f.jpg',
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/photos/f.jpg'],
      creator: '@furkansylyc',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: '/photos/fs-seffaf.png',
      apple: '/photos/fs-seffaf.png',
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = getDictionary(locale);

  // Schema.org Person structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: 'Software Engineer',
    description: dict.meta.description,
    url: site.url,
    sameAs: [site.social.github, site.social.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.city,
      addressCountry: site.location.country,
    },
    knowsAbout: [
      'Android Development',
      'Kotlin',
      'Jetpack Compose',
      'Web Development',
      'Next.js',
      'React',
      'TypeScript',
      'Spring Boot',
    ],
  };

  return (
    <html lang={locale} className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          {dict.nav.skip}
        </a>
        <ScrollReveal />
        <Navbar locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
