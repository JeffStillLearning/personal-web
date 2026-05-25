import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import pp from '@/images/PP.png';
// import { SKILLS } from '@/data/data';

// const checks = [
//   { t: 'Komunikasi via WhatsApp', d: 'Update progres harian, gampang revisi.' },
//   { t: 'Harga transparan', d: 'Quote di awal, tidak ada biaya tersembunyi.' },
//   { t: 'Garansi 30 hari', d: 'Bug fix gratis pasca-launch.' },
//   { t: 'Bilingual', d: 'Bisa Bahasa Indonesia & English untuk klien internasional.' },
// ];

export default function About() {
  return (
    <section id="tentang" className="about">
      <div className="container">
        <div className="about-grid">
          <ScrollReveal>
            <div className="about-photo">
              <Image src={pp} alt="Jefta Nala Putra" fill style={{ objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            
            <h2>Halo, saya Jefta. Saya bangun website untuk UMKM naik kelas.</h2>
            <p className="about-lead">
              Saya seorang mahasiswa ilmu komputer yang ingin bantu digitalisasi UMKM untuk memperluas jangkauan pasar dan meningkatkan efisiensi operasional.
              Saya percaya bahwa setiap pelaku usaha kecil berhak tumbuh. Misi saya adalah menjembatani kesenjangan digital agar UMKM Indonesia bisa bersaing, berkembang, dan berkelanjutan di era modern.
            </p>
            <div className="about-quote">
              <p>Website bukan sekadar tampilan — ini adalah alat kerja yang harus menghasilkan. Setiap baris kode yang saya tulis punya satu tujuan: bisnis Anda tumbuh.</p>
            </div>
            {/* <div className="skills">
              {SKILLS.map(s => <span key={s} className="skill">{s}</span>)}
            </div> */}
            {/* <div className="about-checks">
              {checks.map(c => (
                <div className="check" key={c.t}>
                  <div className="check-icon"><Icon name="check" size={14} /></div>
                  <div className="check-text"><strong>{c.t}</strong> — <span style={{ color: 'var(--text-muted)' }}>{c.d}</span></div>
                </div>
              ))}
            </div> */}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
