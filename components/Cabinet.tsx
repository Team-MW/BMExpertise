"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { poles, sectors, stats } from "@/lib/content";
import { Counter, Reveal, SplitTitle } from "./motion";

export function Marquee() {
  const items = [...sectors, ...sectors];
  return (
    <div className="marquee" aria-label="Secteurs d'activité accompagnés">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="marquee-item">
            {s}
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M7 0l1.6 5.4L14 7l-5.4 1.6L7 14l-1.6-5.4L0 7l5.4-1.6z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Cabinet() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section className="section cabinet" id="cabinet">
      <div className="container">
        <div className="cabinet-grid" ref={ref}>
          <div className="cabinet-text">
            <Reveal>
              <p className="eyebrow">
                <span className="dot" /> Le cabinet
              </p>
            </Reveal>
            <SplitTitle
              className="h2"
              text="Un cabinet à taille humaine, des _solutions sur-mesure."
            />
            <Reveal delay={0.1}>
              <p className="lead">
                Fondé en 2008 et installé rue de Galliera, à deux pas du Palais de Tokyo, B&amp;M Expertise réunit
                experts-comptables, commissaires aux comptes, juristes et spécialistes de la paie.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="body">
                Disponibles et réactives, nos équipes ont à cœur d’assurer un service de proximité et de proposer des
                solutions pertinentes et créatives pour optimiser le pilotage de votre entreprise. Notre richesse :
                des collaborateurs expérimentés, des outils innovants et une grande diversité de missions.
              </p>
            </Reveal>

            <div className="stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.08} className="stat">
                  <strong>
                    <Counter to={s.value} suffix={s.suffix} />
                  </strong>
                  <span>{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="cabinet-visual">
            <motion.div className="img-frame img-main" style={{ y: y1 }}>
              <Image src="/images/team.jpg" alt="Associés du cabinet en rendez-vous" fill sizes="(max-width: 900px) 100vw, 45vw" />
            </motion.div>
            <motion.div className="img-frame img-float" style={{ y: y2 }}>
              <Image src="/images/desk.jpg" alt="Analyse de rapports financiers" fill sizes="(max-width: 900px) 50vw, 20vw" />
            </motion.div>
            <motion.div className="float-card glass" style={{ y: y2 }}>
              <span className="float-kicker">Depuis 2018</span>
              <span className="float-title">100 % digitalisé</span>
              <span className="float-sub">Vos données disponibles en temps réel, où que vous soyez.</span>
            </motion.div>
          </div>
        </div>

        <div className="poles">
          <Reveal>
            <h3 className="poles-title">
              Notre organisation <em>en 5 pôles</em>
            </h3>
          </Reveal>
          <div className="poles-grid">
            {poles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="pole">
                <span className="pole-num">0{i + 1}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
                <span className="pole-line" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
