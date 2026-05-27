"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";
import { PORTFOLIO, PortfolioItem, PortfolioCategory } from "@/data/data";

function Modal({ project, onClose }: { project: PortfolioItem; onClose: () => void }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const imgs = project.images ?? [];
  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && imgs.length > 1) setActiveIdx(i => (i + 1) % imgs.length);
      if (e.key === "ArrowLeft"  && imgs.length > 1) setActiveIdx(i => (i - 1 + imgs.length) % imgs.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, imgs.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    currentY.current = 0;
    if (modalRef.current) modalRef.current.style.transition = "none";
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientY - startY.current;
    if (delta < 0) return;
    currentY.current = delta;
    if (modalRef.current) modalRef.current.style.transform = `translateY(${delta}px)`;
  };

  const onTouchEnd = () => {
    if (!modalRef.current) return;
    if (currentY.current > 100) {
      onClose();
    } else {
      modalRef.current.style.transition = "transform 0.3s ease";
      modalRef.current.style.transform = "";
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className={`modal ${imgs.length > 0 ? "has-gallery" : ""}`}
        onClick={e => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        <div className="modal-drag-handle" />

        {imgs.length > 0 ? (
          <>
            <div className="modal-gallery" style={{ aspectRatio: project.imageAspect ?? '4/3' }}>
              <div className="modal-gallery-main">
                <Image src={imgs[activeIdx]} alt={project.title} fill style={{ objectFit: "cover" }} />
              </div>
              {imgs.length > 1 && (
                <>
                  <button className="modal-gallery-nav modal-gallery-prev" onClick={() => setActiveIdx(i => (i - 1 + imgs.length) % imgs.length)}>‹</button>
                  <button className="modal-gallery-nav modal-gallery-next" onClick={() => setActiveIdx(i => (i + 1) % imgs.length)}>›</button>
                </>
              )}
              <div className="modal-gallery-counter">{activeIdx + 1} / {imgs.length}</div>
              <button className="modal-close" onClick={onClose}><Icon name="close" size={18} /></button>
            </div>
            {imgs.length > 1 && (
              <div className="modal-gallery-thumbs">
                {imgs.map((img, i) => (
                  <button key={i} className={`modal-gallery-thumb ${i === activeIdx ? "active" : ""}`} onClick={() => setActiveIdx(i)}>
                    <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="modal-thumb" style={{ background: project.bg, position: "relative" }}>
            {project.glyph}
            <button className="modal-close" onClick={onClose}><Icon name="close" size={18} /></button>
          </div>
        )}

        <div className="modal-body">
          <div className="modal-cat">{project.category}</div>
          <h3 style={{ marginTop: 6 }}>{project.title}</h3>
          <p className="modal-desc">{project.desc}</p>
        </div>
      </div>
    </div>
  );
}

const CATS: ("Semua" | PortfolioCategory)[] = ["Semua", "Landing Page", "Company Profile", "Advanced"];

export default function Portfolio() {
  const [filter, setFilter] = useState<"Semua" | PortfolioCategory>("Semua");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const items = filter === "Semua" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);

  return (
    <section id="portfolio">
      <div className="container">
        <ScrollReveal>
          <div className="portfolio-head">
            <div className="section-head">
              <h2>Contoh website yang bisa kamu miliki</h2>
              <p>Beberapa website terbaru. Klik salah satu untuk lihat detail.</p>
            </div>
          </div>
        </ScrollReveal>
        <div className="portfolio-filter">
          {CATS.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`filter-pill ${filter === c ? "active" : ""}`}>{c}</button>
          ))}
        </div>
        {items.length === 0 ? (
          <div className="portfolio-empty">
            <div className="portfolio-empty-icon">📂</div>
            <p className="portfolio-empty-title">Belum ada portfolio</p>
            <p className="portfolio-empty-sub">
              {filter === "Semua" ? "Portfolio akan segera ditambahkan." : `Belum ada project kategori "${filter}".`}
            </p>
          </div>
        ) : (
          <div className="portfolio-grid">
            {items.map(p => (
              <button className="proj" key={p.id} onClick={() => setSelected(p)}>
                <div className={`proj-thumb ${p.cover ? "has-img" : ""}`} style={p.cover ? undefined : { background: p.bg }}>
                  {p.cover
                    ? <Image src={p.cover} alt={p.title} fill style={{ objectFit: "cover", objectPosition: "left top" }} />
                    : p.glyph
                  }
                </div>
                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
