"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";
import { Reveal, SplitTitle } from "./motion";

export function Faq() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <Reveal>
            <p className="eyebrow">
              <span className="dot" /> Questions fréquentes
            </p>
          </Reveal>
          <SplitTitle className="h2" text="Vous avez des questions ? _Nous y répondons." />
        </div>
        
        <div className="faq-list">
          {faqs.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="faq-item">
                <button
                  className={`faq-btn ${active === i ? "is-active" : ""}`}
                  onClick={() => toggle(i)}
                  aria-expanded={active === i}
                >
                  <span className="faq-q">{q.question}</span>
                  <motion.span className="faq-icon" animate={{ rotate: active === i ? 45 : 0 }}>
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="faq-answer">{q.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
