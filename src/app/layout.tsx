import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jefta.dev — Website Profesional untuk Bisnis Lokal',
  description: 'Jasa pembuatan website Landing Page, Company Profile, dan Fitur Custom untuk UMKM Indonesia. Cepat, rapi, sesuai budget.',
  keywords: ['jasa pembuatan website', 'web developer freelance', 'website UMKM', 'landing page murah', 'company profile', 'Yogyakarta'],
  authors: [{ name: 'Jefta Nala Putra' }],
  openGraph: {
    title: 'Jefta.dev — Website Profesional untuk Bisnis Lokal',
    description: 'Jasa pembuatan website Landing Page, Company Profile, dan Fitur Custom untuk UMKM Indonesia.',
    url: 'https://jefta.dev',
    siteName: 'Jefta.dev',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jefta.dev — Website Profesional untuk Bisnis Lokal',
    description: 'Jasa pembuatan website Landing Page, Company Profile, dan Fitur Custom untuk UMKM Indonesia.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jefta.dev' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
