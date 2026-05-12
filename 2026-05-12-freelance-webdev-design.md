# Spec Design: Website Freelance Web Developer
**Tanggal:** 2026-05-12  
**Status:** Disetujui  
**Author:** Brainstorming Session

---

## 1. Overview

Website personal untuk jasa **web development freelance** yang berfungsi sebagai portfolio sekaligus landing page untuk convert pengunjung menjadi klien. Target utama adalah **UMKM / bisnis lokal** yang membutuhkan website profesional dengan budget terjangkau.

---

## 2. Tujuan

- Menampilkan portfolio proyek yang sudah pernah dikerjakan
- Meyakinkan calon klien untuk langsung menghubungi via WhatsApp
- Muncul di hasil pencarian Google dan rekomendasi AI search (ChatGPT, Perplexity, Google AI Overview)

---

## 3. Target Pengguna

**Primary:** Pemilik UMKM / bisnis lokal (warung, toko, restoran, jasa) yang:
- Belum punya website atau website-nya sudah usang
- Butuh kehadiran online yang profesional
- Mengakses internet mayoritas via smartphone

---

## 4. Layanan yang Ditawarkan

| Layanan | Deskripsi |
|---|---|
| **Landing Page** | Halaman promosi yang dirancang untuk mengkonversi pengunjung menjadi pembeli |
| **Company Profile** | Website resmi yang membuat bisnis terlihat lebih terpercaya dan profesional |
| **Fitur Advanced** | Solusi custom: sistem booking, integrasi payment, dashboard admin, CRM sederhana |

---

## 5. Struktur Website

### 5.1 Halaman Utama (Single Page)

| # | Section | Konten |
|---|---|---|
| 1 | **Hero** | Headline, sub-headline, CTA WhatsApp |
| 2 | **Tentang Saya** | Perkenalan singkat, skill & pengalaman |
| 3 | **Layanan** | 3 card: Landing Page, Company Profile, Advanced |
| 4 | **Portfolio Preview** | 2-3 proyek terbaik + tombol "Lihat Semua" |
| 5 | **Testimonial** | 2-3 review dari klien |
| 6 | **FAQ** | Pertanyaan umum dari calon klien UMKM |
| 7 | **CTA Final** | Ajakan kontak via WhatsApp |
| 8 | **Footer** | Link navigasi, sosial media, copyright |

### 5.2 Halaman Portfolio (Terpisah)

- Grid proyek dengan **filter kategori**: Landing Page / Company Profile / Advanced
- Setiap card menampilkan: thumbnail, nama proyek, deskripsi singkat
- Tombol detail per proyek (modal atau halaman tersendiri)
- Filter berjalan di sisi client (tanpa database)

---

## 6. Copywriting

### Hero Section
> **Headline:** "Website Profesional untuk Bisnis Lokal yang Mau Berkembang"  
> **Sub-headline:** "Jasa pembuatan Landing Page, Company Profile, dan Fitur Custom — cepat, rapi, dan sesuai budget UMKM"  
> **CTA Button:** "Chat WhatsApp Sekarang 💬"

### FAQ (Contoh Pertanyaan)
- Berapa lama waktu pengerjaan?
- Apakah bisa revisi setelah selesai?
- Bagaimana sistem pembayaran?
- Apakah sudah include hosting & domain?
- Apakah bisa request fitur custom?

---

## 7. Desain Visual

### 7.1 Vibe
**Colorful & Friendly** — hangat, approachable, cocok untuk klien UMKM lokal

### 7.2 Palet Warna
| Peran | Warna | Hex |
|---|---|---|
| Primary | Orange / Coral | `#FF6B35` |
| Secondary | Teal / Cyan | `#00B4D8` |
| Background | Putih + Light Gray | `#FFFFFF` / `#F8F9FA` |
| Text | Dark Navy | `#1A1A2E` |

### 7.3 Typography
- **Heading:** Plus Jakarta Sans
- **Body:** Inter

### 7.4 Visual Style
- Ilustrasi / ikon flat colorful (bukan foto stock)
- Card dengan subtle shadow dan rounded corners
- Animasi fade-in saat scroll
- Gradient accent di Hero section
- WhatsApp floating button di pojok kanan bawah

---

## 8. Tech Stack

| Teknologi | Kegunaan |
|---|---|
| **Next.js** | Framework utama — performa cepat, SEO-friendly |
| **Tailwind CSS** | Styling cepat dan konsisten |
| **Framer Motion** | Animasi scroll yang smooth |
| **Vercel** | Hosting gratis, deploy otomatis |

### Data Portfolio
- Disimpan sebagai **file JSON statis** (tidak perlu database)
- Update manual via kode

---

## 9. Fitur Teknis

### 9.1 Mobile & Performance
- ✅ Responsive **mobile-first** (mayoritas klien UMKM akses via HP)
- ✅ Optimasi gambar otomatis (Next.js Image)
- ✅ Loading cepat — target Lighthouse score > 90

### 9.2 SEO Google
- ✅ Meta title & description per halaman
- ✅ Open Graph + Twitter Card
- ✅ Sitemap.xml & robots.txt
- ✅ URL struktur bersih

### 9.3 AI Search Optimization
- ✅ **Schema Markup / Structured Data** (JSON-LD) untuk:
  - `LocalBusiness`
  - `Service`
  - `FAQPage`
- ✅ **llms.txt** — file khusus agar AI model memahami konten website
- ✅ **Konten berbasis pertanyaan** — FAQ ditulis sesuai cara orang bertanya ke AI
- ✅ Page speed tinggi (sinyal kepercayaan untuk AI search)

### 9.4 Kontak
- ✅ WhatsApp button floating (pojok kanan bawah, selalu terlihat)
- ✅ CTA WhatsApp di Hero dan Footer
- ✅ Google Analytics untuk tracking pengunjung

### 9.5 Tidak Diperlukan (YAGNI)
- ❌ CMS / admin panel
- ❌ Database / backend server
- ❌ Sistem login / autentikasi
- ❌ Form kontak (cukup WhatsApp)

---

## 10. Ringkasan Keputusan Desain

| Aspek | Keputusan |
|---|---|
| Struktur | Single Page + halaman Portfolio terpisah |
| Target klien | UMKM / bisnis lokal |
| Layanan | Landing Page, Company Profile, Advanced Features |
| Kontak | WhatsApp (floating button + CTA) |
| Vibe desain | Colorful & Friendly |
| Warna utama | Orange `#FF6B35` + Teal `#00B4D8` |
| Framework | Next.js + Tailwind CSS |
| Hosting | Vercel (gratis) |
| Data portfolio | JSON statis |
| SEO | Google SEO + AI Search Optimization |

---

*Spec ini siap digunakan sebagai dasar implementasi.*
