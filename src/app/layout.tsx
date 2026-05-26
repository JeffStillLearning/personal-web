import type { Metadata } from 'next';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema, servicesSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Jeff Digital Creative | Jasa Website Profesional untuk UMKM',
  description: 'Jasa pembuatan website Landing Page, Company Profile, dan Fitur Custom untuk UMKM Indonesia. Cepat, rapi, sesuai budget.',
  keywords: ['jasa pembuatan website', 'web developer freelance', 'website UMKM', 'landing page murah', 'company profile', 'Jeff Digital Creative', 'Banyuwangi', 'Jawa Timur'],
  authors: [{ name: 'Jefta Nala Putra' }],
  openGraph: {
    title: 'Jeff Digital Creative | Jasa Website Profesional untuk UMKM',
    description: 'Jasa pembuatan website Landing Page, Company Profile, dan Fitur Custom untuk UMKM Indonesia.',
    url: 'https://jeffdigitalcreative.my.id',
    siteName: 'Jeff Digital Creative',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeff Digital Creative | Jasa Website Profesional untuk UMKM',
    description: 'Jasa pembuatan website Landing Page, Company Profile, dan Fitur Custom untuk UMKM Indonesia.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jeffdigitalcreative.my.id' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={servicesSchema} />
        <JsonLd data={faqSchema} />
      </head>
      <body>{children}</body>
    </html>
  );
}
