"use client";

import { ArrowUpRight, BarChart3, FileStack, Users, Wallet } from "lucide-react";
import { MouseEvent } from "react";
import { tools } from "@/lib/content";
import { Reveal, SplitTitle } from "./motion";

const icons = [BarChart3, Users, FileStack, Wallet];

function onMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Tools() {
  return (
    <section className="section tools dark" id="outils">
      <div className="tools-glow" />
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow light">
                <span className="dot" /> Nos outils digitaux
              </p>
            </Reveal>
            <SplitTitle className="h2 light" text="Votre cabinet, _accessible partout, tout le temps." />
          </div>
          <Reveal delay={0.1}>
            <p className="lead narrow light-muted">
              Depuis 2018, B&amp;M Expertise investit dans des outils collaboratifs : vos informations sont créées,
              transférées, analysées et disponibles où que vous soyez.
            </p>
          </Reveal>
        </div>

        <div className="tools-grid">
          {tools.map((t, i) => {
            const Icon = icons[i];
            const Wrapper = t.href ? "a" : "div";
            return (
              <Reveal key={t.title} delay={i * 0.08}>
                <Wrapper
                  className="tool-card"
                  onMouseMove={onMove}
                  id={`tool-${i}`}
                  {...(t.href ? { href: t.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="tool-top">
                    <span className="tool-icon">
                      <Icon size={22} />
                    </span>
                    {t.href && (
                      <span className="tool-access">
                        Accéder <ArrowUpRight size={14} />
                      </span>
                    )}
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <div className="tags">
                    {t.tags.map((tag) => (
                      <span key={tag} className="tag tag-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
