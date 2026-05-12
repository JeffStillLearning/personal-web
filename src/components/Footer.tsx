import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark">J</span>
              <span>Jefta<span style={{ color: 'var(--primary)' }}>.</span>dev</span>
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
              <li><a href="https://wa.me/6281234567890">WA: 0812-3456-7890</a></li>
              <li><a href="mailto:halo@jefta.dev">halo@jefta.dev</a></li>
              <li><span>Yogyakarta, ID</span></li>
            </ul>
            <div className="socials" style={{ marginTop: 16 }}>
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
