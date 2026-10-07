import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { Hero } from '@/components/Hero';
import { CapabilitiesBar } from '@/components/CapabilitiesBar';
import { SelectedWork } from '@/components/SelectedWork';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { TechStack } from '@/components/TechStack';
import { ContactCta } from '@/components/ContactCta';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <CapabilitiesBar dict={dict} />
      <SelectedWork locale={locale} dict={dict} />
      <About dict={dict} />
      <Experience dict={dict} />
      <TechStack dict={dict} />
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
