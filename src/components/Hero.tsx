'use client';
import Image from 'next/image';
import Icon from './Icon';
import { WA_URL } from '@/data/data';
import photo from '@/images/PP.png';

export default function Hero() {
  const handleWa = () => window.open(WA_URL, '_blank');
  return (
    <header className="hero" id="top">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="reveal in">
          {/* <span className="eyebrow"><span className="dot" /> Freelance Web Developer · UMKM Friendly</span> */}
          <h1>
            Website Profesional untuk <span className="accent">Bisnis Lokal</span> yang Mau Berkembang
          </h1>
          <p className="hero-sub">
            Jasa pembuatan Landing Page, Company Profile, dan Fitur Custom cepat,
            rapi, dan sesuai budget UMKM. Mobile first, SEO-ready, langsung bisa
            terima order via WhatsApp.
          </p>
          {/* <div className="hero-ctas">
            <button className="btn btn-primary" onClick={handleWa}>
              <Icon name="whatsapp" size={18} /> Chat WhatsApp Sekarang
            </button>
            <a href="#portfolio" className="btn btn-ghost">Lihat Portfolio</a>
          </div> */}
          {/* <div className="hero-stats">
            <div className="hero-stat"><div className="v">40+</div><div className="l">Project selesai</div></div>
            <div className="hero-stat"><div className="v">5–14</div><div className="l">Hari kerja</div></div>
            <div className="hero-stat"><div className="v">96%</div><div className="l">Klien repeat order</div></div>
          </div> */}
        </div>
        <div className="hero-visual reveal in">
          <Image src={photo} alt="Jefta Nala Putra" className="hero-photo" priority />
        </div>
      </div>
    </header>
  );
}
