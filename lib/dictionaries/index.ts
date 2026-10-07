import type { Locale } from '@/lib/i18n';
import en from './en';
import tr from './tr';

export type { Dictionary } from './en';

const dictionaries = { en, tr };

export const getDictionary = (locale: Locale) => dictionaries[locale];
