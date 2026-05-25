'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import { WA_URL } from '@/data/data';
import logo from '@/images/PP.png';

export default function Nav() {
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

  const handleWa = () => window.open(WA_URL, '_blank');

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <Image src={logo} alt="Jefta.dev" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
          <span>Jeff<span style={{ color: 'var(--primary)' }}></span>  Digital Creative</span>
        </a>
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div className="nav-cta">
          <button className="btn btn-primary" onClick={handleWa}>
            <Icon name="whatsapp" size={16} /> Chat WA
          </button>
          <button className="mobile-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <button className="btn btn-primary" onClick={() => { setOpen(false); handleWa(); }}>
          <Icon name="whatsapp" size={16} /> Chat WhatsApp
        </button>
      </div>
    </nav>
  );
}
