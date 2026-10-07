"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Magnetic } from "./motion";

const ease = [0.22, 1, 0.36, 1] as const;
const lines = [["Votre", "gestion,"], ["notre", "_expertise."]];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  let w = 0;
  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="hero-media" style={{ y: imgY, scale: imgScale }}>
        <Image src="/images/hero-office.jpg" alt="Bureaux du cabinet B&M à Paris" fill preload sizes="100vw" />
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-grain" />

      <motion.div className="container hero-content" style={{ y: contentY, opacity }}>
        <motion.p
          className="eyebrow light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <span className="dot" /> Expertise comptable · Commissariat aux comptes · Paris 16ᵉ
        </motion.p>

        <h1 className="hero-title" aria-label="Votre gestion, notre expertise.">
          {lines.map((line, li) => (
            <span className="hero-line" key={li}>
              {line.map((word) => {
                const i = w++;
                return (
                  <span className="word-mask" key={word} aria-hidden>
                    <motion.span
                      className="word"
                      initial={{ y: "115%", rotate: 4 }}
                      animate={{ y: "0%", rotate: 0 }}
                      transition={{ duration: 1.2, delay: 0.35 + i * 0.09, ease }}
                    >
                      {word.startsWith("_") ? <em>{word.slice(1)}</em> : word}
                    </motion.span>{" "}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
        >
          <p className="hero-lead">
            Depuis plus de 26 ans, B&amp;M Expertise accompagne dirigeants, TPE, PME et holdings à chaque étape de
            leur vie — avec la proximité d’un cabinet à taille humaine et la puissance d’outils 100 % digitaux.
          </p>
          <div className="hero-ctas">
            <Magnetic>
              <a href="#contact" className="btn btn-light btn-lg" id="hero-cta-contact">
                Parlons de votre projet <ArrowRight size={18} />
              </a>
            </Magnetic>
            <a href="#services" className="btn btn-outline-light btn-lg" id="hero-cta-services">
              Nos services
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2, ease }}
      >
        <svg viewBox="0 0 120 120" className="badge-ring">
          <defs>
            <path id="circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <text>
            <textPath href="#circle">DEPUIS 2008 · B&amp;M EXPERTISE · AUDIT · PARIS · </textPath>
          </text>
        </svg>
        <ArrowDown size={20} className="badge-arrow" />
      </motion.div>
    </section>
  );
}
