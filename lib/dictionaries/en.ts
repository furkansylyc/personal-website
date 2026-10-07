type Word = { t: string; accent?: boolean };

const en = {
  meta: {
    title: 'Furkan Söyleyici — Software Engineer · Android & Web Developer',
    description:
      'Furkan Söyleyici is a software engineer building mobile and web products — Android apps with Kotlin, web apps with React & Next.js, and APIs with Spring Boot.',
    projectsTitle: 'All projects',
    projectsDescription:
      'Android apps, web products and full-stack builds by Furkan Söyleyici — from EasyNote to UçarDent and FindBest.',
    contactTitle: 'Contact',
    contactDescription:
      'Get in touch with Furkan Söyleyici for product work, collaborations and engineering opportunities.',
  },
  nav: {
    home: 'Home',
    work: 'Work',
    about: 'About',
    experience: 'Experience',
    contact: 'Contact',
    available: 'Available for projects',
    menu: 'Open menu',
    close: 'Close menu',
    language: 'Change language',
    skip: 'Skip to content',
    primary: 'Primary',
  },
  hero: {
    eyebrow: 'Software Engineer',
    title: [
      [{ t: 'I' }, { t: 'build' }, { t: 'mobile' }, { t: '&' }],
      [{ t: 'web' }, { t: 'products.', accent: true }],
    ] as Word[][],
    subtitle: 'From idea to production.',
    disciplines: ['Android', 'Web', 'Backend'],
    primaryCta: 'View selected work',
    resume: 'Resume',
    secondaryCta: 'Get in touch',
    visualAlt: 'EasyNote Android app running on a phone',
    tagMobile: 'Android · Kotlin',
    tagWeb: 'Web · Next.js',
  },
  capabilities: {
    label: 'Capabilities',
    items: [
      { label: 'Android', text: 'Modern mobile experiences with Kotlin & Jetpack Compose.' },
      { label: 'Web', text: 'Modern web applications with React & Next.js.' },
      { label: 'Backend', text: 'Scalable APIs with Spring Boot & PostgreSQL.' },
      { label: 'Based in', text: 'Isparta, Türkiye' },
    ],
  },
  work: {
    eyebrow: 'Selected Work',
    title: 'Projects that make an impact.',
    lead: 'Real problems, clean solutions.',
    viewAll: 'View all projects',
    caseStudy: 'Read case study',
  },
  about: {
    eyebrow: 'About',
    hello: "I'm Furkan.",
    title: 'A software engineer focused on building useful digital products.',
    body: [
      'I enjoy taking products from idea to production — from architecture and UI to APIs, deployment and iteration.',
      'Most of my work sits where mobile, web and backend meet: native Android apps in Kotlin, fast web experiences with React and Next.js, and the services behind them. I care about the details users feel and the structure other engineers have to maintain.',
    ],
    photoAlt: 'Furkan Söyleyici working on a laptop at a café in the evening',
    beyondTitle: 'Beyond code.',
    beyondText: 'Football. Product design. Learning how things work.',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'What I work on.',
    items: [
      {
        role: 'Software Engineer',
        context: 'Independent projects & freelance',
        detail:
          'Designing, building and shipping products end to end — from architecture and interface to APIs and deployment.',
        tags: ['Android', 'Web', 'Backend'],
      },
      {
        role: 'Android Development',
        context: 'Kotlin · Java · Jetpack Compose',
        detail:
          'Apps shipped to Google Play — EasyNote and Stone Age — alongside FitApp and LinguaSense.',
        tags: ['Kotlin', 'Firebase', 'Room'],
      },
      {
        role: 'Web Development',
        context: 'React · Next.js · TypeScript',
        detail:
          'Conversion-focused websites and full-stack web apps, including UçarDent, FindBest and Şiir Blog.',
        tags: ['Next.js', 'TypeScript', 'Node.js'],
      },
    ],
  },
  stack: {
    eyebrow: 'Technology',
    title: 'Tools I build with.',
    groups: {
      mobile: 'Mobile',
      web: 'Web',
      backend: 'Backend',
      tools: 'Tools',
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: [{ t: 'Have an idea' }, { t: 'worth building?', accent: true }] as Word[],
    text: "I'm open to interesting projects, collaborations and engineering opportunities.",
    cta: 'Get in touch',
    emailLabel: 'Or write directly',
    copy: 'Copy email',
    copied: 'Copied',
  },
  footer: {
    tagline: 'Software Engineer · Android & Web Developer',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
    navLabel: 'Footer',
  },
  projects: {
    eyebrow: 'Index',
    title: 'All projects',
    lead: 'Products, experiments and client work across Android, web and backend.',
    featured: 'Featured',
    other: 'More work',
    project: 'Project',
    category: 'Category',
    stack: 'Stack',
  },
  caseStudy: {
    back: 'All projects',
    problem: 'The Problem',
    solution: 'The Solution',
    built: 'What I Built',
    stack: 'Tech Stack',
    screens: 'Product Preview',
    challenges: 'Challenges',
    result: 'What shipped',
    next: 'Next project',
    live: 'Live project',
    github: 'GitHub',
    play: 'Google Play',
    category: 'Category',
    platform: 'Platform',
    status: 'Status',
    openImage: 'Open image',
    closeImage: 'Close',
    screenshot: 'screenshot',
  },
  contactPage: {
    eyebrow: 'Contact',
    title: "Let's build something.",
    lead: 'Tell me about your product, idea or role. I usually reply within a couple of days.',
    direct: 'Direct',
    social: 'Elsewhere',
    location: 'Location',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      successTitle: 'Message sent.',
      successText: "Thanks for reaching out — I'll get back to you soon.",
      errorTitle: 'Something went wrong.',
      errorText: 'Your message could not be sent. Please try again or email me directly.',
      invalid: 'Please fill in all fields with a valid email address.',
    },
  },
  notFound: {
    title: 'Page not found.',
    text: "The page you're looking for doesn't exist or has moved.",
    home: 'Back to home',
  },
};

export type Dictionary = typeof en;
export default en;
