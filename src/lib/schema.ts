import { FAQ } from '@/data/data';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jefta.dev — Jasa Web Developer Freelance',
  description: 'Jasa pembuatan website Landing Page, Company Profile, dan Fitur Custom untuk UMKM Indonesia.',
  url: 'https://jefta.dev',
  telephone: '+6281234567890',
  email: 'halo@jefta.dev',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yogyakarta',
    addressCountry: 'ID',
  },
  priceRange: 'Rp1.500.000 – Custom',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [],
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'LocalBusiness', name: 'Jefta.dev' },
  serviceType: 'Web Development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Paket Website',
    itemListElement: [
      { '@type': 'Offer', name: 'Landing Page', price: '1500000', priceCurrency: 'IDR' },
      { '@type': 'Offer', name: 'Company Profile', price: '3000000', priceCurrency: 'IDR' },
      { '@type': 'Offer', name: 'Fitur Advanced', description: 'Custom quote' },
    ],
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
