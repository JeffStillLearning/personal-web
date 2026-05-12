// Static data for portfolio, testimonials, FAQ

const PORTFOLIO = [
  {
    id: "warung-bu-sri",
    title: "Warung Bu Sri",
    category: "Landing Page",
    desc: "Landing page menu digital + lokasi untuk warung makan keluarga di Jogja.",
    tags: ["Landing Page", "Menu Digital", "WhatsApp Order"],
    bg: "linear-gradient(135deg, #FFE0CC 0%, #FFB088 100%)",
    glyph: "BS",
  },
  {
    id: "klinik-permata",
    title: "Klinik Permata",
    category: "Company Profile",
    desc: "Company profile + jadwal dokter untuk klinik gigi di Bandung.",
    tags: ["Company Profile", "Jadwal Dokter", "SEO Lokal"],
    bg: "linear-gradient(135deg, #C7EEF6 0%, #6BC8DA 100%)",
    glyph: "KP",
  },
  {
    id: "tani-makmur",
    title: "Tani Makmur",
    category: "Advanced",
    desc: "Sistem booking lahan + dashboard admin untuk koperasi tani.",
    tags: ["Booking", "Dashboard", "Custom"],
    bg: "linear-gradient(135deg, #E9DCFF 0%, #B196FF 100%)",
    glyph: "TM",
  },
  {
    id: "kopi-tuju",
    title: "Kopi Tuju",
    category: "Landing Page",
    desc: "Landing page promo grand opening kedai kopi di Bekasi.",
    tags: ["Landing Page", "Event"],
    bg: "linear-gradient(135deg, #FFE9C7 0%, #FFC97A 100%)",
    glyph: "KT",
  },
  {
    id: "batik-sekar",
    title: "Batik Sekar",
    category: "Company Profile",
    desc: "Katalog batik tulis + cerita brand untuk pengrajin Solo.",
    tags: ["Company Profile", "Katalog"],
    bg: "linear-gradient(135deg, #FFD3D8 0%, #FF7A88 100%)",
    glyph: "BS",
  },
  {
    id: "kos-melati",
    title: "Kos Melati",
    category: "Advanced",
    desc: "Sistem pencarian kamar + chat WA otomatis untuk pemilik kos.",
    tags: ["Booking", "Auto-WA"],
    bg: "linear-gradient(135deg, #D4F3DD 0%, #6BCB8C 100%)",
    glyph: "KM",
  },
];

const TESTIMONIALS = [
  {
    name: "Ibu Ratna",
    role: "Pemilik, Warung Bu Sri",
    body: "Dulu pelanggan suka nanya menu lewat WA satu-satu. Sekarang tinggal share link, hemat waktu banget. Webnya juga cepat dibuka di HP saya yang lama.",
    avatar: "R",
    color: "#FF6B35",
  },
  {
    name: "Drg. Permata",
    role: "Owner, Klinik Permata",
    body: "Pas search 'klinik gigi dekat sini' di Google, klinik saya muncul di halaman 1 setelah 2 bulan website live. Pasien baru naik dua kali lipat.",
    avatar: "P",
    color: "#00B4D8",
  },
  {
    name: "Pak Hendro",
    role: "Ketua, Koperasi Tani Makmur",
    body: "Awalnya saya ragu mau pakai sistem online. Tapi prosesnya dibimbing pelan-pelan sampai anggota koperasi paham. Recommended buat UMKM.",
    avatar: "H",
    color: "#7A5AE0",
  },
];

const FAQ = [
  {
    q: "Berapa lama waktu pengerjaan?",
    a: "Untuk Landing Page biasanya 5–7 hari kerja. Company Profile 10–14 hari. Fitur custom tergantung kompleksitas — kita diskusikan dulu sebelum mulai.",
  },
  {
    q: "Apakah bisa revisi setelah selesai?",
    a: "Bisa. Setiap paket sudah termasuk 2x revisi besar gratis. Setelah itu revisi minor tetap bisa, dengan biaya tambahan terjangkau.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "DP 50% di awal untuk mulai pengerjaan, sisa 50% setelah website siap launch. Transfer bank lokal, QRIS, atau e-wallet (OVO/GoPay/Dana).",
  },
  {
    q: "Apakah sudah include hosting & domain?",
    a: "Hosting gratis lewat Vercel selama traffic masih wajar (untuk mayoritas UMKM ini cukup). Domain .com / .id dibantu beli & setting, biayanya terpisah sekitar Rp150–250rb/tahun.",
  },
  {
    q: "Apakah bisa request fitur custom?",
    a: "Sangat bisa. Contoh fitur yang pernah dibuat: booking online, integrasi pembayaran, dashboard admin, kirim WA otomatis, hitung ongkir, dsb. Chat dulu untuk konsultasi gratis.",
  },
  {
    q: "Apakah saya bisa update sendiri kontennya?",
    a: "Untuk Landing Page biasanya kontennya statis dan jarang berubah. Kalau butuh sering update (misal menu, harga, produk), bisa pakai sistem sederhana yang bisa Anda kelola sendiri tanpa coding.",
  },
];

const SERVICES = [
  {
    id: "landing",
    name: "Landing Page",
    price: "Mulai 1,5jt",
    tagline: "Halaman fokus konversi",
    desc: "Satu halaman fokus jualan. Cocok untuk promo produk, event, atau jasa spesifik. Pengunjung langsung tahu apa yang Anda tawarkan dan cara menghubungi.",
    bullets: ["Desain mobile-first", "WhatsApp CTA terintegrasi", "Optimasi SEO dasar", "Load < 2 detik"],
    accent: "#FF6B35",
    bg: "#FFF1EA",
  },
  {
    id: "profile",
    name: "Company Profile",
    price: "Mulai 3jt",
    tagline: "Wajah profesional bisnis",
    desc: "Website resmi multi-halaman: tentang, layanan, galeri, kontak. Membangun kepercayaan calon klien dan muncul di pencarian Google.",
    bullets: ["3–6 halaman lengkap", "Galeri foto produk/jasa", "Google Maps & schema lokal", "Panduan update sendiri"],
    accent: "#00B4D8",
    bg: "#E7F7FB",
  },
  {
    id: "advanced",
    name: "Fitur Advanced",
    price: "Custom quote",
    tagline: "Solusi sesuai kebutuhan",
    desc: "Sistem booking, integrasi payment, dashboard admin, CRM sederhana, otomasi WA. Diskusikan kebutuhan Anda — saya buatkan yang pas.",
    bullets: ["Konsultasi kebutuhan gratis", "Booking & sistem antrian", "Dashboard admin custom", "Integrasi payment gateway"],
    accent: "#7A5AE0",
    bg: "#F1ECFE",
  },
];

const SKILLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Framer Motion", "SEO Technical", "Vercel", "PostgreSQL", "Stripe", "Midtrans"
];

Object.assign(window, { PORTFOLIO, TESTIMONIALS, FAQ, SERVICES, SKILLS });
