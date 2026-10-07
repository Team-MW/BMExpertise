"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/content";
import { Reveal, SplitTitle } from "./motion";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="dot" /> Nos services
              </p>
            </Reveal>
            <SplitTitle className="h2" text="Chaque étape de votre entreprise, _accompagnée." />
          </div>
          <Reveal delay={0.1}>
            <p className="lead narrow">
              De la création à la transmission, nous mobilisons l’expertise adaptée à vos enjeux du moment.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          <Reveal>
          <ul className="services-list" role="tablist">
            {services.map((s, i) => (
                <li key={s.id}>
                  <button
                    role="tab"
                    id={`service-${s.id}`}
                    aria-selected={active === i}
                    className={`service-row ${active === i ? "is-active" : ""}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="service-num">{s.number}</span>
                    <span className="service-title">{s.title}</span>
                    <motion.span className="service-icon" animate={{ rotate: active === i ? 45 : 0 }}>
                      <Plus size={20} />
                    </motion.span>
                  </button>
                  {/* Mobile inline panel */}
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.div
                        className="service-inline"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p>{s.text}</p>
                        <div className="tags">
                          {s.tags.map((t) => (
                            <span key={t} className="tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
            ))}
          </ul>
          </Reveal>

          <div className="service-panel" role="tabpanel" aria-labelledby={`service-${current.id}`}>
            <div className="service-panel-bg" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="service-panel-inner"
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="panel-num">{current.number}</span>
                <h3>{current.title}</h3>
                <p>{current.text}</p>
                <div className="tags">
                  {current.tags.map((t, i) => (
                    <motion.span
                      key={t}
                      className="tag tag-light"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <a href="#contact" className="panel-link" id={`service-cta-${current.id}`}>
                  Échanger avec un expert <ArrowRight size={16} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
