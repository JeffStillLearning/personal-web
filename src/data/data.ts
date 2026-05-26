import type { StaticImageData } from 'next/image';

export type PortfolioCategory = 'Landing Page' | 'Company Profile' | 'Advanced';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  desc: string;
  tags: string[];
  bg: string;
  glyph: string;
  cover?: StaticImageData;
  images?: StaticImageData[];
  imageAspect?: string;
}

import dentiqueHero       from '@/images/dentique-clinic/dentique-clinic-hero.png';
import dentiqueBooking    from '@/images/dentique-clinic/dentique-clinic-BookingSection.png';
import dentiqueDoctors    from '@/images/dentique-clinic/dentique-clinic-DoctorsSection.png';
import dentiqueFacilities from '@/images/dentique-clinic/dentique-clinic-FacilitiesSection.png';
import dentiqueFaq        from '@/images/dentique-clinic/dentique-clinic-FAQSection.png';
import dentiqueFlow       from '@/images/dentique-clinic/dentique-clinic-FlowSection.png';
import dentiqueFooter     from '@/images/dentique-clinic/dentique-clinic-FooterSection.png';
import dentiqueLocation   from '@/images/dentique-clinic/dentique-clinic-LocationSection.png';
import dentiqueServices   from '@/images/dentique-clinic/dentique-clinic-ServicesSection.png';
import dentiqueTestimonial from '@/images/dentique-clinic/dentique-clinic-TestimonialSection.png';

import griyaHero        from '@/images/griya-nusantara/griya-nusantara-HeroSection.png';
import griyaBenefit     from '@/images/griya-nusantara/griya-nusantara-BenefitSection.png';
import griyaCta         from '@/images/griya-nusantara/griya-nusantara-CTAFormSection.png';
import griyaFaq         from '@/images/griya-nusantara/griya-nusantara-FAQSection.png';
import griyaFooter      from '@/images/griya-nusantara/griya-nusantara-footer.png';
import griyaGallery     from '@/images/griya-nusantara/griya-nusantara-GallerySection.png';
import griyaHowToBuy    from '@/images/griya-nusantara/griya-nusantara-HowToBuySection.png';
import griyaKpr1        from '@/images/griya-nusantara/griya-nusantara-KPRCalculator-1.png';
import griyaKpr2        from '@/images/griya-nusantara/griya-nusantara-KPRCalculator-2.png';
import griyaLocation    from '@/images/griya-nusantara/griya-nusantara-LocationSection.png';
import griyaTestimonial from '@/images/griya-nusantara/griya-nusantara-TestimonialSection.png';
import griyaUnits       from '@/images/griya-nusantara/griya-nusantara-UnitsSection.png';

export interface Testimonial {
  name: string;
  role: string;
  body: string;
  avatar: string;
  color: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  name: string;
  price: string;
  tagline: string;
  desc: string;
  bullets: string[];
  accent: string;
  bg: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'dentique-clinic',
    title: 'Dentique Clinic',
    category: 'Landing Page',
    desc: 'Company profile modern untuk klinik gigi dengan fitur booking, jadwal dokter, galeri fasilitas, dan informasi layanan lengkap.',
    tags: ['Company Profile', 'Booking', 'Next.js', 'Tailwind CSS', 'SEO'],
    bg: 'linear-gradient(135deg, #C7EEF6 0%, #6BC8DA 100%)',
    glyph: 'DC',
    cover: dentiqueHero,
    images: [
      dentiqueHero, dentiqueBooking, dentiqueDoctors, dentiqueFacilities,
      dentiqueFaq, dentiqueFlow, dentiqueFooter, dentiqueLocation,
      dentiqueServices, dentiqueTestimonial,
    ],
  },
  {
    id: 'griya-nusantara',
    title: 'Griya Nusantara',
    category: 'Landing Page',
    desc: 'Landing page properti perumahan dengan kalkulator KPR, galeri unit, lokasi, dan form konsultasi untuk mempercepat konversi calon pembeli.',
    tags: ['Landing Page', 'Properti', 'KPR Calculator', 'Next.js'],
    bg: 'linear-gradient(135deg, #D4F3DD 0%, #6BCB8C 100%)',
    glyph: 'GN',
    cover: griyaHero,
    images: [
      griyaHero, griyaUnits, griyaBenefit, griyaGallery,
      griyaKpr1, griyaKpr2, griyaHowToBuy, griyaLocation,
      griyaTestimonial, griyaFaq, griyaCta, griyaFooter,
    ],
    imageAspect: '3/2',
  },
  // {
  //   id: 'warung-bu-sri',
  //   title: 'Warung Bu Sri',
  //   category: 'Landing Page',
  //   desc: 'Landing page menu digital + lokasi untuk warung makan keluarga di Jogja.',
  //   tags: ['Landing Page', 'Menu Digital', 'WhatsApp Order'],
  //   bg: 'linear-gradient(135deg, #FFE0CC 0%, #FFB088 100%)',
  //   glyph: 'BS',
  // },
  // {
  //   id: 'klinik-permata',
  //   title: 'Klinik Permata',
  //   category: 'Company Profile',
  //   desc: 'Company profile + jadwal dokter untuk klinik gigi di Bandung.',
  //   tags: ['Company Profile', 'Jadwal Dokter', 'SEO Lokal'],
  //   bg: 'linear-gradient(135deg, #C7EEF6 0%, #6BC8DA 100%)',
  //   glyph: 'KP',
  // },
  // {
  //   id: 'tani-makmur',
  //   title: 'Tani Makmur',
  //   category: 'Advanced',
  //   desc: 'Sistem booking lahan + dashboard admin untuk koperasi tani.',
  //   tags: ['Booking', 'Dashboard', 'Custom'],
  //   bg: 'linear-gradient(135deg, #E9DCFF 0%, #B196FF 100%)',
  //   glyph: 'TM',
  // },
  // {
  //   id: 'kopi-tuju',
  //   title: 'Kopi Tuju',
  //   category: 'Landing Page',
  //   desc: 'Landing page promo grand opening kedai kopi di Bekasi.',
  //   tags: ['Landing Page', 'Event'],
  //   bg: 'linear-gradient(135deg, #FFE9C7 0%, #FFC97A 100%)',
  //   glyph: 'KT',
  // },
  // {
  //   id: 'batik-sekar',
  //   title: 'Batik Sekar',
  //   category: 'Company Profile',
  //   desc: 'Katalog batik tulis + cerita brand untuk pengrajin Solo.',
  //   tags: ['Company Profile', 'Katalog'],
  //   bg: 'linear-gradient(135deg, #FFD3D8 0%, #FF7A88 100%)',
  //   glyph: 'BS',
  // },
  // {
  //   id: 'kos-melati',
  //   title: 'Kos Melati',
  //   category: 'Advanced',
  //   desc: 'Sistem pencarian kamar + chat WA otomatis untuk pemilik kos.',
  //   tags: ['Booking', 'Auto-WA'],
  //   bg: 'linear-gradient(135deg, #D4F3DD 0%, #6BCB8C 100%)',
  //   glyph: 'KM',
  // },
];

export const TESTIMONIALS: Testimonial[] = [];

export const FAQ: FaqItem[] = [
  {
    q: 'Berapa lama waktu pengerjaan?',
    a: 'Untuk Landing Page sekitar 7-10 hari kerja. Company Profile 10–14 hari. Fitur custom tergantung kompleksitas — kita diskusikan dulu sebelum mulai.',
  },
  {
    q: 'Apakah bisa revisi setelah launch website?',
    a: 'Tidak bisa. 1-2 hari sebelum launch website ada sesi revisi, sehingga ada waktu untuk mengerjakan yang kurang. Setelah launch maka tidak ada sesi revisi',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'DP 50% di awal untuk mulai pengerjaan, sisa 50% setelah website siap launch. Transfer bank lokal seperti BRI, QRIS, atau e-wallet (Dana/Shopeepay).',
  },
  {
    q: 'Apakah sudah include hosting & domain?',
    a: 'Sudah termasuk hosting dan domain ".com". Jika belum terdaftar selama 1 tahun, Jika ingin lebih professional maka ada biaya tambahan sesuai dengan domain yang didaftarkan. Jika bisnis sudah berkembang dan ramai pengunjung diwebsite anda maka hosting bisa diupgrade dengan biaya tambahan.',
  },
  {
    q: 'Apakah bisa request fitur custom?',
    a: 'Bisa. anda bisa request fitur custom untuk website anda, untuk biaya tambahan bisa disesuaikan dengan tingkat kesulitan fitur yang diinginkan.',
  },
  {
    q: 'Apakah saya bisa update sendiri kontennya?',
    a: 'Tidak bisa terkhusus website landing page. Website dibuat dengan framework dan bahasa pemrograman. Pemilik website landing page tidak bisa update sendiri tanpa bantuan programmer. Namun anda bisa hubungi saya untuk bantu update website anda dengan biaya tambahan.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: 'Mulai Rp 1.500.000',
    tagline: 'Halaman fokus konversi',
    desc: 'Satu halaman fokus jualan. Cocok untuk promo produk, event, atau jasa spesifik. Pengunjung langsung tahu apa yang Anda tawarkan dan cara menghubungi.',
    bullets: ['1 Halaman scroll panjang (Hero, Tentang, Layanan, CTA)', 'Desain responsif mobile & desktop', 'WhatsApp button', 'Free domain .com (1 tahun)', 'Free SSL', 'SEO On-Page Basic', '1x Revisi', 'Garansi maintenance 15 hari'],
    accent: '#FF6B35',
    bg: '#FFF1EA',
  },
  {
    id: 'profile',
    name: 'Company Profile',
    price: 'Mulai 2.750.000',
    tagline: 'Wajah profesional bisnis',
    desc: 'Website resmi multi-halaman: tentang, layanan, galeri, kontak. Membangun kepercayaan calon klien dan muncul di pencarian Google.',
    bullets: ['Semua yang ada di Landing Page, plus:', 'Hingga 5 halaman (Home, About, Services, Portfolio, Contact)', 'Desain visual lebih kompleks (CTA, Form, Galeri)', 'WhatsApp Chat langsung', '2 Email Bisnis', '10 GB Disk Storage', '3x Revisi Gratis', 'SEO On-Page', 'Garansi Maintenance 1 Bulan'],
    accent: '#00B4D8',
    bg: '#E7F7FB',
  },
  {
    id: 'advanced',
    name: 'Fitur Advanced',
    price: 'Mulai 5.000.000',
    tagline: 'Solusi sesuai kebutuhan',
    desc: 'Sistem booking, integrasi payment, dashboard admin, CRM sederhana, otomasi WA. Diskusikan kebutuhan Anda saya buatkan yang pas.',
    bullets: ['Semua yang ada di Company Profile, plus:', 'Fitur Custom (Booking, Payment, Dashboard, dll)', 'Hingga 8+ halaman', 'Animasi interaktif', 'Integrasi API / Payment Gateway', 'Speed Optimization', '5x Revisi Gratis', 'Garansi Maintenance 1,5 Bulan', 'AI Search Optimization'],
    accent: '#7A5AE0',
    bg: '#F1ECFE',
  },
];

// export const SKILLS = [
//   'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
//   'Framer Motion', 'SEO Technical', 'Vercel', 'PostgreSQL', 'Stripe', 'Midtrans',
// ];

export const WA_NUMBER = '6281234567890'; // TODO: replace with real number
export const WA_MESSAGE = encodeURIComponent('Halo Jefta, saya tertarik untuk diskusi project website. Boleh konsultasi?');
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
