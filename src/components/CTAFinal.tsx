'use client';
import Icon from './Icon';
import { WA_URL } from '@/data/data';

export default function CTAFinal() {
  const handleWa = () => window.open(WA_URL, '_blank');
  return (
    <section id="kontak" style={{ padding: '24px 0 0' }}>
      <div className="cta-final-wrap">
        <div className="cta-final" style={{ margin: 0 }}>
          <span className="eyebrow" style={{ background: 'rgba(255,255,255,.18)', color: '#fff' }}>
            <span className="dot" /> Siap mulai?
          </span>
          <h2 style={{ marginTop: 16 }}>Yuk wujudkan website yang bikin bisnis Anda dilirik calon pembeli.</h2>
          <p>Konsultasi awal gratis. Saya bantu ngitung kebutuhan, kasih estimasi waktu dan biaya, tanpa tekanan.</p>
          <button className="btn" onClick={handleWa}>
            <Icon name="whatsapp" size={18} /> Mulai dari WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
