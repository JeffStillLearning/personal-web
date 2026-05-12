// App.jsx — main landing page React app
const { useState, useEffect, useRef } = React;

function Icon({ name, size = 20 }) {
  const s = { width: size, height: size };
  switch (name) {
    case 'whatsapp':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C9.7 9 9.1 7.6 8.9 7c-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.5.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-3-.2-.3C4 14.9 3.5 13.5 3.5 12 3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 20.5 12 20.5z"/>
        </svg>
      );
    case 'check':
      return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
    case 'arrow-right':
      return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
    case 'menu':
      return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);
    case 'close':
      return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
    case 'instagram':
      return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>);
    case 'linkedin':
      return (<svg style={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>);
    case 'github':
      return (<svg style={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.64.71 1.03 1.61 1.03 2.71 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2z"/></svg>);
    default:
      return null;
  }
}

function Nav({ onWaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#faq', label: 'FAQ' },
  ];
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">J</span>
          <span>Jefta<span style={{color:'var(--primary)'}}>.</span>dev</span>
        </a>
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div className="nav-cta">
          <a href="#kontak" className="btn btn-ghost">Diskusi Project</a>
          <button className="btn btn-primary" onClick={onWaClick}>
            <Icon name="whatsapp" size={16} /> Chat WA
          </button>
          <button className="mobile-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <button className="btn btn-primary" onClick={() => { setOpen(false); onWaClick(); }}>
          <Icon name="whatsapp" size={16} /> Chat WhatsApp
        </button>
      </div>
    </nav>
  );
}

function Hero({ onWaClick }) {
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
            <button className="btn btn-primary" onClick={onWaClick}>
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
              <span style={{fontFamily:'JetBrains Mono, monospace'}}>warungbusri.id</span>
              <span className="hcm-dots"><span/><span/><span/></span>
            </div>
            <div className="hcm-headline">Menu Spesial<br/>Warung Bu Sri</div>
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

function TrustStrip() {
  const items = [
    { name: 'Warung Bu Sri', c: '#FF6B35' },
    { name: 'Klinik Permata', c: '#00B4D8' },
    { name: 'Koperasi Tani', c: '#7A5AE0' },
    { name: 'Kopi Tuju', c: '#FFC97A' },
    { name: 'Batik Sekar', c: '#FF7A88' },
    { name: 'Kos Melati', c: '#6BCB8C' },
  ];
  return (
    <div className="trust">
      <div className="container trust-inner">
        <span className="trust-label">Dipercaya oleh UMKM lokal</span>
        <div className="trust-logos">
          {items.map(i => (
            <span className="trust-logo" key={i.name}>
              <span className="mark" style={{background:i.c}}>{i.name[0]}</span>{i.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  const checks = [
    { t: 'Komunikasi via WhatsApp', d: 'Update progres harian, gampang revisi.' },
    { t: 'Harga transparan', d: 'Quote di awal, tidak ada biaya tersembunyi.' },
    { t: 'Garansi 30 hari', d: 'Bug fix gratis pasca-launch.' },
    { t: 'Bilingual', d: 'Bisa Bahasa Indonesia & English untuk klien internasional.' },
  ];
  return (
    <section id="tentang" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo">
            <div className="about-photo-glyph">J</div>
            <div className="about-photo-tag">[ foto profil ]</div>
          </div>
          <div>
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
                  <div className="check-text"><strong>{c.t}</strong> — <span style={{color:'var(--text-muted)'}}>{c.d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ onWaClick }) {
  return (
    <section id="layanan" className="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" /> Layanan</span>
          <h2>Pilih paket sesuai kebutuhan bisnis Anda</h2>
          <p>Tiga paket utama yang sudah ribuan kali terbukti membantu UMKM lokal. Atau diskusikan kebutuhan spesifik Anda — saya akan buatkan custom quote.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div className="service" key={s.id} style={{color: s.accent}}>
              <div className="service-mark" style={{background: s.bg, color: s.accent}}>
                {s.id === 'landing' ? '◆' : s.id === 'profile' ? '◐' : '⬡'}
              </div>
              <h3 style={{color: 'var(--text)'}}>{s.name}</h3>
              <div className="service-tag">{s.tagline}</div>
              <div className="service-price" style={{color: s.accent}}>{s.price}</div>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-bullets">
                {s.bullets.map(b => <li key={b} style={{color: 'var(--text)'}}>{b}</li>)}
              </ul>
              <button className="service-cta" onClick={onWaClick}>
                Diskusi paket ini <span className="arrow"><Icon name="arrow-right" size={16} /></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ onOpen }) {
  const [filter, setFilter] = useState('Semua');
  const cats = ['Semua', 'Landing Page', 'Company Profile', 'Advanced'];
  const items = filter === 'Semua' ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);
  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio-head">
          <div className="section-head">
            <span className="eyebrow purple"><span className="dot" /> Portfolio</span>
            <h2>Project yang sudah live & menghasilkan</h2>
            <p>Beberapa pekerjaan terbaru. Klik salah satu untuk lihat detail.</p>
          </div>
        </div>
        <div className="portfolio-filter">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`filter-pill ${filter === c ? 'active' : ''}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {items.map(p => (
            <button className="proj" key={p.id} onClick={() => onOpen(p)}>
              <div className="proj-thumb" style={{background: p.bg}}>
                <span className="proj-cat">{p.category}</span>
                {p.glyph}
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testi">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow teal"><span className="dot" /> Testimoni</span>
          <h2>Apa kata klien yang sudah pakai</h2>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map(t => (
            <div className="testi-card" key={t.name}>
              <div className="quote-mark">"</div>
              <p className="testi-body">{t.body}</p>
              <div className="testi-person">
                <div className="testi-avatar" style={{background: t.color}}>{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ onWaClick }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <div>
            <span className="eyebrow"><span className="dot" /> FAQ</span>
            <h2 style={{marginTop: 16}}>Pertanyaan yang sering ditanyakan</h2>
            <p style={{marginTop: 16, color: 'var(--text-muted)'}}>Tidak yakin mulai dari mana? Mungkin jawabannya ada di sini.</p>
            <div className="faq-help" style={{marginTop: 32}}>
              <h3>Belum nemu jawaban?</h3>
              <p>Chat langsung — biasanya dibalas dalam 1 jam (jam kerja WIB). Konsultasi awal gratis tanpa minimum project.</p>
              <button className="btn btn-primary" onClick={onWaClick}>
                <Icon name="whatsapp" size={16} /> Tanya via WA
              </button>
            </div>
          </div>
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

function CtaFinal({ onWaClick }) {
  return (
    <section id="kontak" style={{padding:'24px 0 0'}}>
      <div className="cta-final-wrap">
        <div className="cta-final" style={{margin: 0}}>
          <span className="eyebrow" style={{background:'rgba(255,255,255,.18)', color:'#fff'}}><span className="dot" /> Siap mulai?</span>
          <h2 style={{marginTop: 16}}>Yuk wujudkan website yang bikin bisnis Anda dilirik calon pembeli.</h2>
          <p>Konsultasi awal gratis. Saya bantu ngitung kebutuhan, kasih estimasi waktu dan biaya, tanpa tekanan.</p>
          <button className="btn" onClick={onWaClick}>
            <Icon name="whatsapp" size={18} /> Mulai dari WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark">J</span>
              <span>Jefta<span style={{color:'var(--primary)'}}>.</span>dev</span>
            </a>
            <p className="footer-tagline">Website profesional untuk UMKM Indonesia. Berbasis di Yogyakarta, melayani seluruh nusantara.</p>
          </div>
          <div className="footer-col">
            <h4>Layanan</h4>
            <ul>
              <li><a href="#layanan">Landing Page</a></li>
              <li><a href="#layanan">Company Profile</a></li>
              <li><a href="#layanan">Fitur Advanced</a></li>
              <li><a href="#layanan">Maintenance</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Jelajah</h4>
            <ul>
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontak</h4>
            <ul>
              <li><a href="#">WA: 0812-3456-7890</a></li>
              <li><a href="#">halo@jefta.dev</a></li>
              <li><a href="#">Yogyakarta, ID</a></li>
            </ul>
            <div className="socials" style={{marginTop: 16}}>
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              <a href="#" aria-label="GitHub"><Icon name="github" size={18} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jefta Nala Putra. Dibangun dengan Next.js + Tailwind.</span>
          <span>Hosting: Vercel · Made in Yogyakarta</span>
        </div>
      </div>
    </footer>
  );
}

function WaFloat({ onClick }) {
  return (
    <button className="wa-float" onClick={onClick} aria-label="Chat WhatsApp">
      <span className="wa-float-pulse" />
      <Icon name="whatsapp" size={22} />
      <span className="label">Chat WhatsApp</span>
    </button>
  );
}

function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-thumb" style={{background: project.bg, position: 'relative'}}>
          {project.glyph}
          <button className="modal-close" onClick={onClose}><Icon name="close" size={18} /></button>
        </div>
        <div className="modal-body">
          <div className="modal-cat">{project.category}</div>
          <h3 style={{marginTop: 6}}>{project.title}</h3>
          <p className="modal-desc">{project.desc} Project ini fokus mendigitalisasi proses lama, mempermudah pelanggan memesan, dan meningkatkan visibilitas di pencarian lokal.</p>
          <div className="modal-meta">
            <div><div className="modal-meta-l">Durasi</div><div className="modal-meta-v">8 hari</div></div>
            <div><div className="modal-meta-l">Hasil</div><div className="modal-meta-v">+218% order/bln</div></div>
            <div><div className="modal-meta-l">Stack</div><div className="modal-meta-v">Next.js · Tailwind</div></div>
            <div><div className="modal-meta-l">Live</div><div className="modal-meta-v">2026</div></div>
          </div>
          <div style={{marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            {project.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#FF6B35", "#00B4D8", "#7A5AE0"],
  "headingFont": "Plus Jakarta Sans",
  "rounded": "soft",
  "showFloating": true
}/*EDITMODE-END*/;

function ThemeApplier({ t }) {
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--primary', t.palette[0]);
    r.style.setProperty('--secondary', t.palette[1]);
    r.style.setProperty('--accent', t.palette[2]);
    // soft tint of primary
    const softMap = {
      '#FF6B35': '#FFE4D6', '#2A6FDB': '#DCE7FC', '#1F8A5B': '#DCEFE4',
      '#D946EF': '#FBE3FA', '#0EA5E9': '#D6EEFB',
    };
    r.style.setProperty('--primary-soft', softMap[t.palette[0]] || '#FFE4D6');
    document.body.style.setProperty('--heading-font', t.headingFont);
    const radii = { sharp: ['4px','8px','12px'], soft: ['10px','16px','24px'], round: ['16px','24px','32px'] }[t.rounded] || ['10px','16px','24px'];
    r.style.setProperty('--radius-sm', radii[0]);
    r.style.setProperty('--radius', radii[1]);
    r.style.setProperty('--radius-lg', radii[2]);
    document.querySelectorAll('h1,h2,h3,h4,h5,.brand,.display').forEach(el => {
      el.style.fontFamily = `'${t.headingFont}', 'Plus Jakarta Sans', sans-serif`;
    });
  }, [t]);
  return null;
}

function App() {
  const [project, setProject] = useState(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const onWaClick = () => {
    const msg = encodeURIComponent('Halo Jefta, saya tertarik untuk diskusi project website. Boleh konsultasi?');
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in'));
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <ThemeApplier t={t} />
      <Nav onWaClick={onWaClick} />
      <Hero onWaClick={onWaClick} />
      <TrustStrip />
      <About />
      <Services onWaClick={onWaClick} />
      <Portfolio onOpen={setProject} />
      <Testimonials />
      <FAQSection onWaClick={onWaClick} />
      <CtaFinal onWaClick={onWaClick} />
      <Footer />
      {t.showFloating && <WaFloat onClick={onWaClick} />}
      {project && <Modal project={project} onClose={() => setProject(null)} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakColor
          label="Brand colors"
          value={t.palette}
          options={[
            ['#FF6B35', '#00B4D8', '#7A5AE0'],
            ['#2A6FDB', '#06B6D4', '#F59E0B'],
            ['#1F8A5B', '#0EA5E9', '#D946EF'],
            ['#E11D48', '#0F172A', '#F59E0B'],
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakSection label="Typography" />
        <TweakSelect
          label="Heading font"
          value={t.headingFont}
          options={['Plus Jakarta Sans', 'Space Grotesk', 'Manrope', 'DM Sans']}
          onChange={(v) => setTweak('headingFont', v)}
        />
        <TweakSection label="Shape" />
        <TweakRadio
          label="Roundness"
          value={t.rounded}
          options={['sharp', 'soft', 'round']}
          onChange={(v) => setTweak('rounded', v)}
        />
        <TweakSection label="Floating CTA" />
        <TweakToggle
          label="WhatsApp button"
          value={t.showFloating}
          onChange={(v) => setTweak('showFloating', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
