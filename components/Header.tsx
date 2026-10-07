"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Lock, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { clientLinks, nav } from "@/lib/content";

export default function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 40);
    setHidden(v > prev && v > 400 && !open);
  });

  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <motion.header
        className={`header ${scrolled ? "is-scrolled" : ""}`}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container header-inner">
          <a href="#top" id="nav-logo" aria-label="Accueil">
            <Logo light={!scrolled} />
          </a>

          <nav className="nav-desktop" aria-label="Navigation principale">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="nav-link" id={`nav-${n.href.slice(1)}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div
              className="client"
              onMouseEnter={() => setClient(true)}
              onMouseLeave={() => setClient(false)}
            >
              <button className="btn btn-ghost btn-sm" id="btn-espace-client" onClick={() => setClient((c) => !c)}>
                <Lock size={14} /> Espace client
              </button>
              <AnimatePresence>
                {client && (
                  <motion.div
                    className="client-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {clientLinks.map((c) => (
                      <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                        {c.label} <ArrowUpRight size={15} />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#contact" className="btn btn-primary btn-sm hide-mobile" id="btn-header-contact">
              Prendre rendez-vous
            </a>
            <button className="burger" aria-label="Menu" id="btn-burger" onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mobile-top">
              <Logo light />
              <button className="burger light" aria-label="Fermer" onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="container mobile-nav">
              {nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  <span>0{i + 1}</span>
                  {n.label}
                </motion.a>
              ))}
            </nav>
            <div className="container mobile-client">
              {clientLinks.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                  {c.label} <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
