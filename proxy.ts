import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, hasLocale } from '@/lib/i18n';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static files or system paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/photos') ||
    pathname.includes('.') // favicon.ico, robots.txt, app-ads.txt etc.
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a supported locale
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && hasLocale(firstSegment)) {
    return NextResponse.next();
  }

  // Detect locale from Accept-Language header
  const acceptLang = request.headers.get('accept-language') || '';
  let detectedLocale = defaultLocale;

  if (acceptLang.toLowerCase().includes('tr')) {
    detectedLocale = 'tr';
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|photos|favicon.ico|app-ads.txt).*)'],
};
