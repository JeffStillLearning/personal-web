'use client';
import Icon from './Icon';
import ScrollReveal from './ScrollReveal';
import { SERVICES, WA_URL } from '@/data/data';

export default function Services() {
  const handleWa = () => window.open(WA_URL, '_blank');
  return (
    <section id="layanan" className="services">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow"><span className="dot" /> Layanan</span>
            <h2>Pilih paket sesuai kebutuhan bisnis Anda</h2>
            <p>Tiga paket utama yang sudah terbukti membantu UMKM lokal. Atau diskusikan kebutuhan spesifik Anda — saya buatkan custom quote.</p>
          </div>
        </ScrollReveal>
        <div className="services-grid">
          {SERVICES.map(s => (
            <ScrollReveal key={s.id}>
              <div className="service" style={{ color: s.accent }}>
                <div className="service-mark" style={{ background: s.bg, color: s.accent }}>
                  {s.id === 'landing' ? '◆' : s.id === 'profile' ? '◐' : '⬡'}
                </div>
                <h3 style={{ color: 'var(--text)' }}>{s.name}</h3>
                <div className="service-tag">{s.tagline}</div>
                <div className="service-price" style={{ color: s.accent }}>{s.price}</div>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-bullets">
                  {s.bullets.map(b => <li key={b} style={{ color: 'var(--text)' }}>{b}</li>)}
                </ul>
                <button className="service-cta" onClick={handleWa}>
                  Diskusi paket ini <span className="arrow"><Icon name="arrow-right" size={16} /></span>
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
