"use client";
import { useState, useEffect } from "react";
import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";
import { PORTFOLIO, PortfolioItem, PortfolioCategory } from "@/data/data";

function Modal({
  project,
  onClose,
}: {
  project: PortfolioItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-thumb"
          style={{ background: project.bg, position: "relative" }}
        >
          {project.glyph}
          <button className="modal-close" onClick={onClose}>
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-cat">{project.category}</div>
          <h3 style={{ marginTop: 6 }}>{project.title}</h3>
          <p className="modal-desc">
            {project.desc} Project ini fokus mendigitalisasi proses lama,
            mempermudah pelanggan memesan, dan meningkatkan visibilitas di
            pencarian lokal.
          </p>
          <div className="modal-meta">
            <div>
              <div className="modal-meta-l">Durasi</div>
              <div className="modal-meta-v">8 hari</div>
            </div>
            <div>
              <div className="modal-meta-l">Hasil</div>
              <div className="modal-meta-v">+218% order/bln</div>
            </div>
            <div>
              <div className="modal-meta-l">Stack</div>
              <div className="modal-meta-v">Next.js · Tailwind</div>
            </div>
            <div>
              <div className="modal-meta-l">Live</div>
              <div className="modal-meta-v">2026</div>
            </div>
          </div>
          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {project.tags.map((t) => (
              <span className="proj-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CATS: ("Semua" | PortfolioCategory)[] = [
  "Semua",
  "Landing Page",
  "Company Profile",
  "Advanced",
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"Semua" | PortfolioCategory>("Semua");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const items =
    filter === "Semua"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio">
      <div className="container">
        <ScrollReveal>
          <div className="portfolio-head">
            <div className="section-head">
              {/* <span className="eyebrow purple">
                <span className="dot" /> Portfolio
              </span> */}
              <h2>Contoh website yang bisa kamu miliki</h2>
              <p>
                Beberapa website terbaru. Klik salah satu untuk lihat detail.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="portfolio-filter">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`filter-pill ${filter === c ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
        {items.length === 0 ? (
          <div className="portfolio-empty">
            <div className="portfolio-empty-icon">📂</div>
            <p className="portfolio-empty-title">Belum ada portfolio</p>
            <p className="portfolio-empty-sub">
              {filter === 'Semua'
                ? 'Portfolio akan segera ditambahkan.'
                : `Belum ada project kategori "${filter}".`}
            </p>
          </div>
        ) : (
          <div className="portfolio-grid">
            {items.map((p) => (
              <button className="proj" key={p.id} onClick={() => setSelected(p)}>
                <div className="proj-thumb" style={{ background: p.bg }}>
                  <span className="proj-cat">{p.category}</span>
                  {p.glyph}
                </div>
                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span className="proj-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
