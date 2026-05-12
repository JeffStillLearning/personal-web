import Icon from './Icon';
import ScrollReveal from './ScrollReveal';
import { SKILLS } from '@/data/data';

const checks = [
  { t: 'Komunikasi via WhatsApp', d: 'Update progres harian, gampang revisi.' },
  { t: 'Harga transparan', d: 'Quote di awal, tidak ada biaya tersembunyi.' },
  { t: 'Garansi 30 hari', d: 'Bug fix gratis pasca-launch.' },
  { t: 'Bilingual', d: 'Bisa Bahasa Indonesia & English untuk klien internasional.' },
];

export default function About() {
  return (
    <section id="tentang" className="about">
      <div className="container">
        <div className="about-grid">
          <ScrollReveal>
            <div className="about-photo">
              <div className="about-photo-glyph">J</div>
              <div className="about-photo-tag">[ foto profil ]</div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <span className="eyebrow teal"><span className="dot" /> Tentang Saya</span>
            <h2>Halo, saya Jefta. Saya bangun website yang fokus jualan, bukan cuma cantik.</h2>
            <p className="about-lead">
              Sudah 3 tahun saya bantu UMKM dan bisnis lokal punya kehadiran online yang serius.
              Lulusan Teknik Informatika, eks tim engineering di dua startup B2B di Jakarta.
              Sekarang full-time freelance, fokus melayani klien yang butuh hasil cepat tanpa drama.
            </p>
            <div className="skills">
              {SKILLS.map(s => <span key={s} className="skill">{s}</span>)}
            </div>
            <div className="about-checks">
              {checks.map(c => (
                <div className="check" key={c.t}>
                  <div className="check-icon"><Icon name="check" size={14} /></div>
                  <div className="check-text"><strong>{c.t}</strong> — <span style={{ color: 'var(--text-muted)' }}>{c.d}</span></div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
