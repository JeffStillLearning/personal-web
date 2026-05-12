'use client';
import { useState } from 'react';
import Icon from './Icon';
import ScrollReveal from './ScrollReveal';
import { FAQ, WA_URL } from '@/data/data';

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  const handleWa = () => window.open(WA_URL, '_blank');
  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <ScrollReveal>
            <span className="eyebrow"><span className="dot" /> FAQ</span>
            <h2 style={{ marginTop: 16 }}>Pertanyaan yang sering ditanyakan</h2>
            <p style={{ marginTop: 16, color: 'var(--text-muted)' }}>Tidak yakin mulai dari mana? Mungkin jawabannya ada di sini.</p>
            <div className="faq-help" style={{ marginTop: 32 }}>
              <h3>Belum nemu jawaban?</h3>
              <p>Chat langsung — biasanya dibalas dalam 1 jam (jam kerja WIB). Konsultasi awal gratis tanpa minimum project.</p>
              <button className="btn btn-primary" onClick={handleWa}>
                <Icon name="whatsapp" size={16} /> Tanya via WA
              </button>
            </div>
          </ScrollReveal>
          <div className="faq-list">
            {FAQ.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-toggle">+</span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
