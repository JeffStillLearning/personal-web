'use client';
import { useState } from 'react';
import Icon from './Icon';
import ScrollReveal from './ScrollReveal';
import { FAQ, WA_URL } from '@/data/data';

export default function FAQSection() {
  const [open, setOpen] = useState(-1);
  const handleWa = () => window.open(WA_URL, '_blank');
  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-sidebar">
            <ScrollReveal>
              <h2>Pertanyaan yang sering ditanyakan</h2>
              <p style={{ marginTop: 16, color: 'var(--text-muted)' }}>Tidak yakin mulai dari mana? Mungkin jawabannya ada di sini.</p>
            </ScrollReveal>
            <div className="faq-help">
              <h3>Belum nemu jawaban?</h3>
              <p>Chat langsung — biasanya dibalas dalam 1 jam (jam kerja WIB). Konsultasi awal gratis tanpa minimum project.</p>
              <button className="btn btn-primary" onClick={handleWa}>
                <Icon name="whatsapp" size={16} /> Tanya via WA
              </button>
            </div>
          </div>
          <div className="faq-list">
            {FAQ.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-toggle">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 8 11 13 6" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a"><div className="faq-a-inner"><div className="faq-a-content">{f.a}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
