import Image from 'next/image';
import Icon from './Icon';
import logo from '@/images/PP.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top">
              <Image src={logo} alt="Jefta.dev" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <span>Jeff<span style={{ color: 'var(--primary)' }}></span></span>
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
              <li><a href="https://wa.me/6283110123195">0831-1012-3195</a></li>
              <li><a href="mailto:jefta.nala20@gmail.com">jefta.nala20@gmail.com</a></li>
              <li><span>Banyuwangi</span></li>
            </ul>
            <div className="socials" style={{ marginTop: 16 }}>
              <a href="https://www.instagram.com/jeffdigitalcreative/" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              <a href="#" aria-label="GitHub"><Icon name="github" size={18} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jefta Nala Putra.</span>
          <span>Banyuwangi, Jawa Timur, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
