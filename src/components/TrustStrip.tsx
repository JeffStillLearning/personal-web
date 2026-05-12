const items = [
  { name: 'Warung Bu Sri', c: '#FF6B35' },
  { name: 'Klinik Permata', c: '#00B4D8' },
  { name: 'Koperasi Tani', c: '#7A5AE0' },
  { name: 'Kopi Tuju', c: '#FFC97A' },
  { name: 'Batik Sekar', c: '#FF7A88' },
  { name: 'Kos Melati', c: '#6BCB8C' },
];

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="container trust-inner">
        <span className="trust-label">Dipercaya oleh UMKM lokal</span>
        <div className="trust-logos">
          {items.map(i => (
            <span className="trust-logo" key={i.name}>
              <span className="mark" style={{ background: i.c }}>{i.name[0]}</span>{i.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
