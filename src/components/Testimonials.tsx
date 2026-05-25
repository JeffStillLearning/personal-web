import ScrollReveal from './ScrollReveal';
import { TESTIMONIALS } from '@/data/data';

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            {/* <span className="eyebrow teal"><span className="dot" /> Testimoni</span> */}
            <h2>Apa kata klien yang sudah pakai</h2>
          </div>
        </ScrollReveal>
        {TESTIMONIALS.length === 0 ? (
          <div className="portfolio-empty">
            <div className="portfolio-empty-icon">💬</div>
            <p className="portfolio-empty-title">Belum ada testimoni</p>
            <p className="portfolio-empty-sub">Testimoni dari klien akan ditampilkan di sini.</p>
          </div>
        ) : (
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <ScrollReveal key={t.name}>
                <div className="testi-card">
                  <div className="quote-mark">&ldquo;</div>
                  <p className="testi-body">{t.body}</p>
                  <div className="testi-person">
                    <div className="testi-avatar" style={{ background: t.color }}>{t.avatar}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
