// Single source of truth for everything on the page.
// Mirrors Yoonus-Chenakkal-CV.md — update here, not in the components.

export const profile = {
  name: 'Yoonus Chenakkal',
  first: 'Yoonus',
  last: 'Chenakkal',
  title: 'Software Engineer',
  discipline: 'Flutter · Mobile & Web',
  roles: ['Flutter Developer', 'Mobile Engineer', 'Flutter Web Developer', 'Android & iOS'],
  location: 'Malappuram, Kerala, India',
  timezone: 'Asia/Kolkata',
  available: true,
  email: 'yoonuschenakkal.07@gmail.com',
  phone: '+91 81138 71486',
  phoneRaw: '918113871486',
  linkedin: 'https://linkedin.com/in/yoonuschenakkal',
  github: 'https://github.com/yoonuschenakkal',
  githubHandle: '@yoonuschenakkal',
  portrait: '/assets/yoonus_bg_removed.png',
  summary:
    'Flutter developer with two years of experience shipping production applications to Google Play, the App Store and the web — including a government-associated app serving 100,000+ users.',
  bio: [
    'I build cross-platform products end to end: one Flutter codebase reaching Android, iOS and the web, wired to Firebase or a REST backend, monetised, localised and released through Play Console and App Store Connect.',
    'That has meant a government-associated application serving 100,000+ users on a platform processing over ₹140 crore in transactions, a marketing platform for jewellery retailers, and a five-application intercity bus booking ecosystem currently in development.',
    'I work across the full delivery cycle — architecture, REST API integration, payment gateways, store submission and post-launch maintenance — and I am currently expanding into backend development with Node.js.',
  ],
}

export const stats = [
  { value: 2, prefix: '', suffix: '', label: 'Years shipping', sub: 'Production Flutter' },
  { value: 100, prefix: '', suffix: 'K+', label: 'Users reached', sub: 'Government platform' },
  { value: 140, prefix: '₹', suffix: 'Cr+', label: 'Transactions', sub: 'Platform processed' },
  { value: 7, prefix: '', suffix: '+', label: 'Apps delivered', sub: 'Play Store & App Store' },
]

export const projects = [
  {
    id: 'gov',
    index: '01',
    name: 'Government Services App',
    tagline: 'Public-sector platform · 100,000+ users',
    description:
      'Shipped and maintain a public-sector application distributed across both app stores, integrated against a Python/Django REST backend on a platform processing over ₹140 crore in transactions.',
    highlights: [
      'Over 100,000 users across Android and iOS',
      'Integrated against a Python/Django REST backend',
      'API contract design and integration debugging with Postman, Bruno and Swagger',
    ],
    stack: ['Flutter', 'Django REST', 'REST APIs', 'JWT'],
    platforms: ['Android', 'iOS'],
    org: 'Kayla Apps & AI',
    year: '2026',
    status: 'Live',
    confidential: true,
    links: {},
  },
  {
    id: 'nanus',
    index: '02',
    name: 'Nanus Gold Rate',
    tagline: 'Daily gold rates and a branded poster studio for jewellers',
    description:
      'A marketing platform for jewellery retailers to publish daily gold rates and generate branded promotional posters, built end to end across three platforms plus a Flutter web admin console.',
    highlights: [
      'Template-driven poster editor for logos, store details, photography, text and icons',
      'One-tap sharing to WhatsApp and Instagram',
      'Google Play and Apple in-app purchases on mobile, Razorpay on web',
      'Deep-link referral attribution to drive organic signups',
      'Localised in English, Malayalam, Tamil and Telugu',
      'Multi-provider auth — phone OTP, Google and Apple — on Firebase',
    ],
    stack: ['Flutter', 'Flutter Web', 'Firebase', 'In-App Purchase', 'Razorpay'],
    platforms: ['Android', 'iOS', 'Web'],
    org: 'Kayla Apps & AI',
    year: '2026',
    status: 'Live',
    links: {},
  },
  {
    id: 'daybus',
    index: '03',
    name: 'Day Bus',
    tagline: 'Intercity bus booking across five connected applications',
    description:
      'A five-application ecosystem — passenger, bus owner, staff, travel agency and super admin — on a Node.js backend, covering long-distance routes such as Kerala–Bangalore alongside regional services.',
    highlights: [
      'Seat and coach selection across sleeper, semi-sleeper and seater layouts, AC and non-AC',
      'Ordinary-route timetables and minimum-distance booking rules',
      'QR-based spot booking for staff ticketing walk-in passengers',
    ],
    stack: ['Flutter', 'Node.js', 'REST APIs', 'QR'],
    platforms: ['Android', 'iOS'],
    org: 'Kayla Apps & AI',
    year: '2026',
    status: 'In Development',
    links: {},
  },
  {
    id: 'keyroute',
    index: '04',
    name: 'KeyRoute',
    tagline: 'Bus and trip booking platform for travel across India',
    description:
      'A cross-platform booking app for trips across India with instant fare calculation, paired with a vendor app for agencies to register buses, manage packages and configure stops with dynamic pricing.',
    highlights: [
      'Instant fare calculation',
      'Google Maps routing and payment gateway integration',
      'Companion vendor app with dynamic stop-level pricing',
    ],
    stack: ['Flutter', 'Google Maps', 'Payments', 'GetX'],
    platforms: ['Android'],
    org: 'Codeedex Technologies',
    year: '2025',
    status: 'Live',
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.keyroute.user&pcampaignid=web_share',
    },
  },
  {
    id: 'syopi',
    index: '05',
    name: 'Syopi',
    tagline: 'Fashion and lifestyle commerce',
    description:
      'An e-commerce application supporting product discovery, wardrobe management and seasonal trend browsing, published on both Google Play and the App Store.',
    highlights: [
      'Product discovery and seasonal trend browsing',
      'Wardrobe management',
      'Published on Google Play and the App Store',
    ],
    stack: ['Flutter', 'E-commerce', 'REST APIs', 'Payments'],
    platforms: ['Android', 'iOS'],
    org: 'Codeedex Technologies',
    year: '2025',
    status: 'Live',
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.syopi.usernew&pcampaignid=web_share',
      apple: 'https://apps.apple.com/in/app/syopi/id6747420245',
    },
  },
  {
    id: 'fastbag',
    index: '06',
    name: 'FastBag',
    tagline: 'Multi-category delivery platform',
    description:
      'Paired vendor and customer applications for food, grocery and fashion delivery, built on MVVM with GetX.',
    highlights: [
      'Paired vendor and customer applications',
      'Food, grocery and fashion categories',
      'MVVM architecture with GetX',
    ],
    stack: ['Flutter', 'MVVM', 'GetX', 'REST APIs'],
    platforms: ['Android'],
    org: 'Codeedex Technologies',
    year: '2025',
    status: 'In Development',
    links: {},
  },
]

// An entry may carry flat `points`, project `groups`, or both.
export const experience = [
  {
    id: 'kayla',
    role: 'Software Engineer',
    company: 'Kayla Apps & AI',
    legal: 'Kayla Mayotech LLP',
    place: 'Hilite Business Park, Calicut',
    period: 'Dec 2025 — Present',
    current: true,
    groups: [
      {
        title: 'Government Services Application',
        note: 'client under NDA',
        platforms: 'Android & iOS',
        points: [
          'Shipped and maintain a public-sector application with 100,000+ users across both app stores, integrated against a Python/Django REST backend on a platform processing over ₹140 crore in transactions.',
          'Partnered with backend engineers on API contract design and integration debugging using Postman, Bruno and Swagger.',
        ],
      },
      {
        title: 'Nanus Gold Rate',
        platforms: 'Android, iOS, Flutter Web + admin console',
        points: [
          'Delivered a marketing platform for jewellery retailers to publish daily gold rates and generate branded promotional posters, built end to end across three platforms plus a Flutter web admin console.',
          'Built a template-driven poster editor letting merchants layer logos, store details, photography, text and icons over admin-configured templates, with one-tap sharing to WhatsApp and Instagram.',
          'Implemented cross-platform monetization — Google Play and Apple in-app purchases on mobile, Razorpay on web — alongside deep-link referral attribution to drive organic signups.',
          'Shipped localization in English, Malayalam, Tamil and Telugu, and multi-provider auth (phone OTP, Google, Apple) on a Firebase backend.',
        ],
      },
      {
        title: 'Day Bus',
        note: 'in development',
        platforms: 'Intercity bus booking platform',
        points: [
          'Building a five-application ecosystem — passenger, bus owner, staff, travel agency and super admin — on a Node.js backend, covering long-distance routes such as Kerala–Bangalore alongside regional services.',
          'Implemented seat and coach selection across sleeper, semi-sleeper and seater layouts in AC and non-AC configurations, ordinary-route timetables, minimum-distance booking rules, and QR-based spot booking for staff ticketing walk-in passengers.',
        ],
      },
    ],
  },
  {
    id: 'codeedex',
    role: 'Flutter Developer',
    company: 'Codeedex Technologies',
    legal: '',
    place: 'Perinthalmanna',
    period: 'Dec 2024 — Dec 2025',
    current: false,
    points: [
      'Delivered 7+ mobile applications within a 5-developer team, owning architecture, API integration, state management and release across three products maintained in production.',
      'Mentored junior developers and interns on Flutter fundamentals, state management patterns and scalable project structure.',
    ],
  },
]

export const skills = [
  {
    label: 'Languages & Frameworks',
    items: ['Dart', 'Flutter', 'Android', 'iOS', 'Flutter Web', 'JavaScript', 'Node.js'],
  },
  {
    label: 'State Management & Architecture',
    items: ['BLoC', 'GetX', 'Provider', 'MVVM', 'Clean Architecture', 'MVC'],
  },
  {
    label: 'Backend & Cloud',
    items: [
      'Firebase Auth',
      'Firestore',
      'Cloud Storage',
      'FCM',
      'Firebase Hosting',
      'REST APIs',
      'JWT',
      'JSON',
      'Django REST',
    ],
  },
  {
    label: 'Payments & Platform Services',
    items: [
      'Google Play Billing',
      'Apple In-App Purchase',
      'Razorpay',
      'Google Maps',
      'Geolocator',
      'Deep linking',
      'Referral attribution',
      'i18n localization',
      'QR generation & scanning',
    ],
  },
  {
    label: 'Local Storage',
    items: ['Hive', 'SharedPreferences', 'GetStorage'],
  },
  {
    label: 'Tooling & Release',
    items: [
      'Git',
      'GitHub',
      'Bitbucket',
      'Postman',
      'Bruno',
      'Swagger',
      'Play Console',
      'App Store Connect',
    ],
  },
]

export const education = [
  {
    qualification: 'Bachelor of Commerce (B.Com)',
    institution: 'Bharathiar University',
    year: '2024',
  },
  {
    qualification: 'Higher Secondary (+2), Computer Science',
    institution: '',
    year: '2021',
  },
]

// Flat list for the hero marquee.
export const marqueeItems = [
  'Flutter',
  'Dart',
  'JavaScript',
  'Node.js',
  'Firebase',
  'REST APIs',
  'BLoC',
  'GetX',
  'MVVM',
  'Clean Architecture',
  'Razorpay',
  'Google Maps',
  'iOS',
  'Android',
  'Flutter Web',
]

export const sections = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'work', label: 'Work', index: '02' },
  { id: 'stack', label: 'Stack', index: '03' },
  { id: 'experience', label: 'Experience', index: '04' },
  { id: 'contact', label: 'Contact', index: '05' },
]
