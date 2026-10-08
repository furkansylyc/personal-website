import type { Locale } from '@/lib/i18n';

type L<T> = Record<Locale, T>;

export type Img = { src: string; width: number; height: number };

export type PreviewKind = 'phones' | 'browser' | 'ai' | 'wide';

export type Project = {
  slug: string;
  title: string;
  featured: boolean;
  /** Hue used for the subtle tint behind previews. */
  hue: number;
  category: L<string>;
  platform: L<string>;
  status?: L<string>;
  /** Short stack shown in rows. */
  stack: string[];
  /** Full stack shown on the case study page. */
  fullStack: string[];
  summary: L<string>;
  statement: L<string>;
  problem?: L<string>;
  solution?: L<string>;
  built?: L<string[]>;
  challenges?: L<string[]>;
  result?: L<string>;
  links: { live?: string; github?: string; play?: string };
  preview: { kind: PreviewKind; images?: Img[] };
  cover?: Img;
  gallery?: Img[];
  /** Brand mark used by CSS-drawn previews when no real screenshots exist. */
  mark?: string;
  /** Custom logo for project, used in navbar and branding */
  logo?: string;
};

const img = (src: string, width: number, height: number): Img => ({ src, width, height });

const en = (n: number) => {
  const sizes: Record<number, [number, number]> = {
    1: [980, 2048], 2: [987, 2048], 3: [983, 2048], 4: [981, 2048], 5: [977, 2048],
    6: [755, 1600], 7: [751, 1600], 8: [756, 1600], 9: [756, 1600], 10: [727, 1600],
  };
  return img(`/photos/en/en${n}.jpg`, ...sizes[n]);
};

export const projects: Project[] = [
  {
    slug: 'easynote',
    title: 'EasyNote',
    featured: true,
    hue: 172,
    logo: '/photos/en.png',
    category: { en: 'Android', tr: 'Android' },
    platform: { en: 'Android · Google Play', tr: 'Android · Google Play' },
    status: { en: 'Live on Google Play', tr: 'Google Play’de yayında' },
    stack: ['Kotlin', 'Firebase', 'Room', 'Maps'],
    fullStack: ['Kotlin', 'XML', 'Firebase Auth', 'Firebase Cloud Messaging', 'Google Maps SDK', 'Room', 'Retrofit', 'Android Studio'],
    summary: {
      en: 'Modern Android note-taking experience with offline support and location-aware reminders.',
      tr: 'Çevrimdışı destek ve konuma duyarlı hatırlatmalar sunan modern bir Android not uygulaması.',
    },
    statement: {
      en: 'A note-taking app that remembers when — and where — something matters.',
      tr: 'Bir şeyin ne zaman — ve nerede — önemli olduğunu hatırlayan bir not uygulaması.',
    },
    problem: {
      en: 'Notes, reminders and places usually live in separate apps. The context that makes a note useful — the right time or the right location — gets lost between them.',
      tr: 'Notlar, hatırlatmalar ve konumlar genellikle ayrı uygulamalarda yaşar. Bir notu değerli kılan bağlam — doğru zaman ya da doğru yer — bu uygulamaların arasında kaybolur.',
    },
    solution: {
      en: 'EasyNote brings them into one calm interface: write a note, attach a reminder or pin it to a place on the map, and let the app surface it at the right moment. Google sign-in and local storage keep it fast and personal.',
      tr: 'EasyNote hepsini sade tek bir arayüzde birleştiriyor: notunu yaz, hatırlatma ekle ya da haritada bir konuma sabitle; uygulama doğru anda karşına çıkarsın. Google ile giriş ve yerel depolama deneyimi hızlı ve kişisel tutuyor.',
    },
    built: {
      en: [
        'Authentication with Google sign-in via Firebase Auth',
        'Offline-first local storage with Room',
        'Time-based reminders delivered as notifications',
        'Location-based notes with Google Maps SDK',
        'Categories, colour labels, favourites and search',
        'Dark and light theme support',
        'Localization in 31+ languages',
      ],
      tr: [
        'Firebase Auth ile Google girişi ve kimlik doğrulama',
        'Room ile offline-first yerel depolama',
        'Bildirim olarak gelen zaman bazlı hatırlatmalar',
        'Google Maps SDK ile konum bazlı notlar',
        'Kategoriler, renk etiketleri, favoriler ve arama',
        'Karanlık ve aydınlık tema desteği',
        '31+ dilde yerelleştirme',
      ],
    },
    challenges: {
      en: [
        'Configuring localization across 31+ languages without breaking layouts or fragmenting strings.',
        'Processing location data from the Maps SDK and tying it reliably to individual notes.',
        'Designing a clean authentication flow with Firebase while keeping data access fast and local.',
        'Moving data management toward a REST API with Retrofit without giving up offline use.',
      ],
      tr: [
        'Arayüzü bozmadan ve metinleri dağıtmadan 31+ dilde yerelleştirmeyi yapılandırmak.',
        'Maps SDK’dan gelen konum verisini işleyip her nota güvenilir şekilde bağlamak.',
        'Veri erişimini hızlı ve yerel tutarken Firebase ile temiz bir kimlik doğrulama akışı kurmak.',
        'Çevrimdışı kullanımdan vazgeçmeden veri yönetimini Retrofit ile REST API’ye taşımak.',
      ],
    },
    result: {
      en: 'Published on Google Play. The backend keeps evolving, with data increasingly managed through a REST API.',
      tr: 'Google Play’de yayında. Backend gelişmeye devam ediyor; veriler giderek REST API üzerinden yönetiliyor.',
    },
    links: { play: 'https://play.google.com/store/apps/details?id=com.furkansoyleyici.easynote' },
    preview: { kind: 'phones', images: [en(1), en(3)] },
    cover: en(1),
    gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(en),
  },
  {
    slug: 'ucardent',
    title: 'UçarDent',
    featured: true,
    hue: 212,
    mark: 'UçarDent',
    category: { en: 'Web', tr: 'Web' },
    platform: { en: 'Web · Desktop & mobile', tr: 'Web · Masaüstü & mobil' },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    fullStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    summary: {
      en: 'Modern dental clinic website focused on conversion, SEO, localization and premium user experience.',
      tr: 'Dönüşüm, SEO, çoklu dil ve premium kullanıcı deneyimine odaklanan modern bir diş kliniği web sitesi.',
    },
    statement: {
      en: 'A clinic website designed to turn visitors into patients.',
      tr: 'Ziyaretçiyi hastaya dönüştürmek için tasarlanmış bir klinik web sitesi.',
    },
    problem: {
      en: 'A clinic’s website is often a patient’s first impression. It has to build trust quickly, be found on search and make getting in touch effortless — on any device, in more than one language.',
      tr: 'Bir kliniğin web sitesi çoğu zaman hastanın ilk izlenimidir. Hızla güven vermeli, aramalarda bulunmalı ve iletişime geçmeyi zahmetsiz kılmalı — her cihazda ve birden fazla dilde.',
    },
    solution: {
      en: 'A fast, premium Next.js site with a clear conversion path, a search-friendly structure and built-in localization — designed mobile-first.',
      tr: 'Net bir dönüşüm akışına, arama dostu bir yapıya ve yerleşik çoklu dil desteğine sahip; mobil öncelikli tasarlanmış hızlı ve premium bir Next.js sitesi.',
    },
    built: {
      en: [
        'Conversion-focused page structure and calls to action',
        'SEO-friendly architecture and metadata',
        'Localization for multiple languages',
        'Responsive, mobile-first premium interface',
        'Type-safe codebase with TypeScript',
      ],
      tr: [
        'Dönüşüm odaklı sayfa yapısı ve aksiyon çağrıları',
        'SEO dostu mimari ve metadata',
        'Birden fazla dil için yerelleştirme',
        'Responsive, mobil öncelikli premium arayüz',
        'TypeScript ile tip güvenli kod tabanı',
      ],
    },
    links: {},
    preview: { kind: 'browser' },
  },
  {
    slug: 'findbest',
    title: 'FindBest',
    featured: true,
    hue: 258,
    mark: 'FindBest',
    category: { en: 'AI / Web / Mobile', tr: 'Yapay Zekâ / Web / Mobil' },
    platform: { en: 'Web & mobile', tr: 'Web & mobil' },
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    fullStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    summary: {
      en: 'AI-powered shopping assistant designed to help users make better product decisions.',
      tr: 'Kullanıcıların daha iyi ürün kararları vermesine yardımcı olan yapay zekâ destekli bir alışveriş asistanı.',
    },
    statement: {
      en: 'An AI assistant that helps people choose the right product.',
      tr: 'İnsanların doğru ürünü seçmesine yardım eden bir yapay zekâ asistanı.',
    },
    problem: {
      en: 'Choosing a product means comparing endless listings, specs and reviews. It is slow, and it is easy to end up with the wrong thing.',
      tr: 'Bir ürün seçmek; sayısız ilanı, teknik özelliği ve yorumu karşılaştırmak demek. Yavaş bir süreç ve yanlış ürünle sonuçlanmak çok kolay.',
    },
    solution: {
      en: 'FindBest uses AI to help users narrow down options and compare products, so they can make a confident decision faster.',
      tr: 'FindBest, seçenekleri daraltmak ve ürünleri karşılaştırmak için yapay zekâdan yararlanıyor; böylece kullanıcı daha hızlı ve emin bir karar verebiliyor.',
    },
    built: {
      en: [
        'AI-assisted product discovery and recommendations',
        'Product comparison experience',
        'React + TypeScript front end',
        'FastAPI backend services',
        'PostgreSQL data layer',
      ],
      tr: [
        'Yapay zekâ destekli ürün keşfi ve öneriler',
        'Ürün karşılaştırma deneyimi',
        'React + TypeScript ön yüz',
        'FastAPI backend servisleri',
        'PostgreSQL veri katmanı',
      ],
    },
    links: {},
    preview: { kind: 'ai' },
  },
  {
    slug: 'stoneage',
    title: 'Stone Age',
    featured: false,
    hue: 32,
    logo: '/photos/logo.png',
    category: { en: 'Game · Android', tr: 'Oyun · Android' },
    platform: { en: 'Android · Google Play', tr: 'Android · Google Play' },
    status: { en: 'Live on Google Play', tr: 'Google Play’de yayında' },
    stack: ['Unity', 'C#'],
    fullStack: ['Unity', 'C#', 'Android Studio'],
    summary: {
      en: 'Stone Age–themed brick breaker that pairs classic gameplay with modern visuals.',
      tr: 'Klasik oynanışı modern görsellerle buluşturan Taş Devri temalı tuğla kırma oyunu.',
    },
    statement: {
      en: 'A classic brick breaker, reimagined in the Stone Age.',
      tr: 'Taş Devri’nde yeniden yorumlanan klasik bir tuğla kırma oyunu.',
    },
    built: {
      en: [
        'Faithful brick-breaker mechanics tuned for touch',
        'Stone Age–themed graphics and animations',
        'Multiple levels and difficulty settings',
        'Power-ups and bonuses',
        'Mobile-friendly controls and a minimal interface',
      ],
      tr: [
        'Dokunmatik için ayarlanmış klasik tuğla kırma mekanikleri',
        'Taş Devri temalı grafikler ve animasyonlar',
        'Farklı bölümler ve zorluk seviyeleri',
        'Power-up’lar ve bonuslar',
        'Mobil uyumlu kontroller ve sade arayüz',
      ],
    },
    challenges: {
      en: [
        'Optimizing game mechanics for mobile devices in Unity.',
        'Managing animations, building the level system and integrating sound effects.',
      ],
      tr: [
        'Oyun mekaniklerini Unity’de mobil cihazlar için optimize etmek.',
        'Animasyon yönetimi, seviye sisteminin kurulumu ve ses efektlerinin entegrasyonu.',
      ],
    },
    result: {
      en: 'Published on Google Play and updated based on player feedback.',
      tr: 'Google Play’de yayınlandı ve oyuncu geri bildirimlerine göre güncelleniyor.',
    },
    links: { play: 'https://play.google.com/store/apps/details?id=com.RaGame.StoneAge' },
    preview: { kind: 'phones', images: [img('/photos/sa/sa1.jpg', 921, 2048), img('/photos/sa/sa2.jpg', 921, 2048)] },
    cover: img('/photos/sa/sa1.jpg', 921, 2048),
    gallery: [1, 2, 3, 4, 5].map((n) => img(`/photos/sa/sa${n}.jpg`, 921, 2048)),
  },
  {
    slug: 'linguasense',
    title: 'LinguaSense',
    featured: false,
    hue: 330,
    logo: '/photos/linguasense/lslogo.png',
    category: { en: 'Android · EdTech', tr: 'Android · Eğitim' },
    platform: { en: 'Android', tr: 'Android' },
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'TTS'],
    fullStack: ['Kotlin', 'Jetpack Compose', 'Room', 'Text-to-Speech', 'Material Design 3', 'Navigation Compose', 'ViewModel & StateFlow'],
    summary: {
      en: 'Educational app that assesses children’s phonological and syntactic language skills.',
      tr: 'Çocukların fonolojik ve sentaktik dil becerilerini değerlendiren eğitici bir uygulama.',
    },
    statement: {
      en: 'Language assessment for children, designed to feel like play.',
      tr: 'Çocuklar için oyun gibi hissettiren bir dil değerlendirme uygulaması.',
    },
    built: {
      en: [
        'Phonological test across place, manner and voicing, with A/B word groups',
        'Train-themed syntactic test where children order words into wagons',
        'Read-aloud with Text-to-Speech',
        'Local storage of age, per-category timings and test dates with Room',
        'Child-friendly interface with Material Design 3 and animated feedback',
      ],
      tr: [
        'Çıkış yeri, çıkış şekli ve ötümlülük kategorilerinde A/B gruplu fonolojik test',
        'Kelimelerin vagonlara yerleştirildiği tren temalı sentaktik test',
        'Text-to-Speech ile sesli okuma',
        'Room ile yaş, kategori bazlı süre ve test tarihlerinin yerel kaydı',
        'Material Design 3 ve animasyonlu geri bildirimlerle çocuk dostu arayüz',
      ],
    },
    links: {},
    preview: { kind: 'phones', images: [img('/photos/linguasense/1.jpg', 604, 1284), img('/photos/linguasense/3.jpg', 610, 1318)] },
    cover: img('/photos/linguasense/1.jpg', 604, 1284),
    gallery: [
      img('/photos/linguasense/1.jpg', 604, 1284),
      img('/photos/linguasense/2.jpg', 610, 1311),
      img('/photos/linguasense/3.jpg', 610, 1318),
      img('/photos/linguasense/4.jpg', 610, 1313),
      img('/photos/linguasense/5.jpg', 610, 1312),
    ],
  },
  {
    slug: 'fitapp',
    title: 'FitApp',
    featured: false,
    hue: 140,
    logo: '/photos/fitapp.jpg',
    category: { en: 'Android', tr: 'Android' },
    platform: { en: 'Android', tr: 'Android' },
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room'],
    fullStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Room', 'Android Studio'],
    summary: {
      en: 'Fitness app with personalised workout plans, goal-weight tracking and progress charts.',
      tr: 'Kişisel antrenman planları, hedef kilo takibi ve ilerleme grafikleri sunan fitness uygulaması.',
    },
    statement: {
      en: 'Personal fitness planning that makes progress visible.',
      tr: 'İlerlemeyi görünür kılan kişisel fitness planlaması.',
    },
    built: {
      en: [
        'Personalised workout plans',
        'Exercise filtering by category',
        'Goal-weight setting and current-weight tracking',
        'Weekly and monthly progress charts',
        'Reminder notifications',
        'Light and dark themes',
      ],
      tr: [
        'Kişiselleştirilmiş antrenman planları',
        'Kategoriye göre egzersiz filtreleme',
        'Hedef kilo belirleme ve güncel kilo takibi',
        'Haftalık ve aylık ilerleme grafikleri',
        'Hatırlatıcı bildirimler',
        'Açık ve koyu tema',
      ],
    },
    links: {},
    preview: { kind: 'phones', images: [img('/photos/fitapp/fitapp1.jpg', 979, 2048), img('/photos/fitapp/fitapp3.jpg', 980, 2048)] },
    cover: img('/photos/fitapp/fitapp1.jpg', 979, 2048),
    gallery: [
      [1, 979], [2, 989], [3, 980], [4, 981], [5, 972], [6, 975], [7, 976], [8, 974],
    ].map(([n, w]) => img(`/photos/fitapp/fitapp${n}.jpg`, w, 2048)),
  },
  {
    slug: 'siirblog',
    title: 'Şiir Blog',
    featured: false,
    hue: 24,
    logo: '/photos/raw.jpg',
    category: { en: 'Web · Full-stack', tr: 'Web · Full-stack' },
    platform: { en: 'Web', tr: 'Web' },
    status: { en: 'Live', tr: 'Yayında' },
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    fullStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Vercel'],
    summary: {
      en: 'A digital archive for my father’s poetry — full-stack, with an admin panel and comment moderation.',
      tr: 'Babamın şiirleri için dijital bir arşiv — admin paneli ve yorum moderasyonu içeren full-stack bir proje.',
    },
    statement: {
      en: 'Technology in service of a family legacy.',
      tr: 'Bir aile mirasının hizmetinde teknoloji.',
    },
    problem: {
      en: 'Poems written over many years existed only on paper and in memory, with no lasting place to be read and shared.',
      tr: 'Yıllar boyunca yazılan şiirler yalnızca kâğıtta ve hafızada duruyordu; okunup paylaşılabilecekleri kalıcı bir yerleri yoktu.',
    },
    solution: {
      en: 'A full-stack web archive with a simple reading experience for visitors and an admin panel for managing poems and comments.',
      tr: 'Ziyaretçiler için sade bir okuma deneyimi ve şiirlerle yorumları yönetmek için bir admin paneli sunan full-stack bir web arşivi.',
    },
    built: {
      en: [
        'Admin panel to add, edit and delete poems',
        'Poem search, list and detail pages',
        'Per-poem view counts',
        'Comment approval and rejection',
        'JWT-based authentication',
        'Front end and API deployed on Vercel',
      ],
      tr: [
        'Şiir ekleme, düzenleme ve silme için admin paneli',
        'Şiir arama, liste ve detay sayfaları',
        'Şiir bazlı görüntülenme sayıları',
        'Yorum onaylama ve reddetme',
        'JWT tabanlı kimlik doğrulama',
        'Ön yüz ve API’nin Vercel üzerinde yayını',
      ],
    },
    result: {
      en: 'Live at senolsoyleyici.com.tr — a lasting digital home for my father’s poems.',
      tr: 'senolsoyleyici.com.tr adresinde yayında — babamın şiirleri için kalıcı bir dijital ev.',
    },
    links: { live: 'https://www.senolsoyleyici.com.tr/' },
    preview: { kind: 'wide', images: [img('/photos/siir/siir2.png', 1918, 871)] },
    cover: img('/photos/siir/siir2.png', 1918, 871),
    gallery: [
      img('/photos/siir/siir2.png', 1918, 871),
      img('/photos/siir/siir3.png', 1915, 868),
      img('/photos/siir/siir4.png', 1919, 871),
      img('/photos/siir/siir5.png', 1919, 871),
      img('/photos/siir/siir6.png', 1902, 871),
      img('/photos/siir/siir7.png', 1897, 865),
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectIndex = (slug: string) => projects.findIndex((p) => p.slug === slug);
