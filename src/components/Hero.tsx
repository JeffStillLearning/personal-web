'use client';
import Icon from './Icon';
import { WA_URL } from '@/data/data';

export default function Hero() {
  const handleWa = () => window.open(WA_URL, '_blank');
  return (
    <header className="hero" id="top">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="reveal in">
          <span className="eyebrow"><span className="dot" /> Freelance Web Developer · UMKM Friendly</span>
          <h1>
            Website Profesional untuk <span className="accent">Bisnis Lokal</span> yang Mau Berkembang
          </h1>
          <p className="hero-sub">
            Jasa pembuatan Landing Page, Company Profile, dan Fitur Custom — cepat,
            rapi, dan sesuai budget UMKM. Mobile-first, SEO-ready, langsung bisa
            terima order via WhatsApp.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={handleWa}>
              <Icon name="whatsapp" size={18} /> Chat WhatsApp Sekarang
            </button>
            <a href="#portfolio" className="btn btn-ghost">Lihat Portfolio</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="v">40+</div><div className="l">Project selesai</div></div>
            <div className="hero-stat"><div className="v">5–14</div><div className="l">Hari kerja</div></div>
            <div className="hero-stat"><div className="v">96%</div><div className="l">Klien repeat order</div></div>
          </div>
        </div>
        <div className="hero-visual reveal in">
          <div className="hero-card hero-card-main">
            <div className="hcm-top">
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>warungbusri.id</span>
              <span className="hcm-dots"><span /><span /><span /></span>
            </div>
            <div className="hcm-headline">Menu Spesial<br />Warung Bu Sri</div>
            <div className="hcm-row">
              <span className="hcm-pill">Buka 06:00</span>
              <span className="hcm-pill">Order WA</span>
            </div>
          </div>
          <div className="hero-card hero-card-stat">
            <div className="stat-icon">↗</div>
            <div className="stat-val">+218%</div>
            <div className="stat-lbl">Order bulanan</div>
            <div className="stat-trend">+82 last 30d</div>
          </div>
          <div className="hero-card hero-card-wa">
            <div className="wa-mock">
              <div className="wa-avatar" />
              <div className="wa-body">
                <div className="wa-name">Ibu Ratna</div>
                <div className="wa-msg">Mas, mau pesan nasi rames 3 ya untuk jam 12</div>
                <div className="wa-time">Baru saja</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
