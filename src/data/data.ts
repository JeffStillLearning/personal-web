export type PortfolioCategory = 'Landing Page' | 'Company Profile' | 'Advanced';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  desc: string;
  tags: string[];
  bg: string;
  glyph: string;
}

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
    a: 'Untuk Landing Page biasanya 5–7 hari kerja. Company Profile 10–14 hari. Fitur custom tergantung kompleksitas — kita diskusikan dulu sebelum mulai.',
  },
  {
    q: 'Apakah bisa revisi setelah selesai?',
    a: 'Bisa. Setiap paket sudah termasuk 2x revisi besar gratis. Setelah itu revisi minor tetap bisa, dengan biaya tambahan terjangkau.',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'DP 50% di awal untuk mulai pengerjaan, sisa 50% setelah website siap launch. Transfer bank lokal, QRIS, atau e-wallet (OVO/GoPay/Dana).',
  },
  {
    q: 'Apakah sudah include hosting & domain?',
    a: 'Hosting gratis lewat Vercel selama traffic masih wajar (untuk mayoritas UMKM ini cukup). Domain .com / .id dibantu beli & setting, biayanya terpisah sekitar Rp150–250rb/tahun.',
  },
  {
    q: 'Apakah bisa request fitur custom?',
    a: 'Sangat bisa. Contoh fitur yang pernah dibuat: booking online, integrasi pembayaran, dashboard admin, kirim WA otomatis, hitung ongkir, dsb. Chat dulu untuk konsultasi gratis.',
  },
  {
    q: 'Apakah saya bisa update sendiri kontennya?',
    a: 'Untuk Landing Page biasanya kontennya statis dan jarang berubah. Kalau butuh sering update (misal menu, harga, produk), bisa pakai sistem sederhana yang bisa Anda kelola sendiri tanpa coding.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: 'Mulai Rp 1.500.000',
    tagline: 'Halaman fokus konversi',
    desc: 'Satu halaman fokus jualan. Cocok untuk promo produk, event, atau jasa spesifik. Pengunjung langsung tahu apa yang Anda tawarkan dan cara menghubungi.',
    bullets: ['1 Halaman scroll panjang (Hero, Tentang, Layanan, CTA)', 'Desain responsif mobile & desktop', 'WhatsApp button', 'Free domain .com (1 tahun)', 'Hosting 6 bulan', 'Free SSL', 'SEO On-Page Basic', '1x Revisi', 'Garansi maintenance 15 hari'],
    accent: '#FF6B35',
    bg: '#FFF1EA',
  },
  {
    id: 'profile',
    name: 'Company Profile',
    price: 'Mulai 2.750.000',
    tagline: 'Wajah profesional bisnis',
    desc: 'Website resmi multi-halaman: tentang, layanan, galeri, kontak. Membangun kepercayaan calon klien dan muncul di pencarian Google.',
    bullets: ['Semua yang ada di Landing Page, plus:', 'Hosting 1 Tahun', 'Hingga 5 halaman (Home, About, Services, Portfolio, Contact)', 'Desain visual lebih kompleks (CTA, Form, Galeri)', 'WhatsApp Chat langsung', '2 Email Bisnis', '10 GB Disk Storage', '3x Revisi Gratis', 'SEO On-Page', 'Garansi Maintenance 1 Bulan'],
    accent: '#00B4D8',
    bg: '#E7F7FB',
  },
  {
    id: 'advanced',
    name: 'Fitur Advanced',
    price: 'Mulai 5.000.000',
    tagline: 'Solusi sesuai kebutuhan',
    desc: 'Sistem booking, integrasi payment, dashboard admin, CRM sederhana, otomasi WA. Diskusikan kebutuhan Anda — saya buatkan yang pas.',
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
