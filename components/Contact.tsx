"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact } from "@/lib/content";
import Logo from "./Logo";
import { Reveal, SplitTitle } from "./motion";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Société : ${d.get("company")}\nNom : ${d.get("name")}\nTéléphone : ${d.get("phone")}\nE-mail : ${d.get("email")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Demande de contact – " + (d.get("company") || d.get("name"))
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <Reveal>
            <p className="eyebrow">
              <span className="dot" /> Contact
            </p>
          </Reveal>
          <SplitTitle className="h2" text="Parlons de _votre projet." />
          <Reveal delay={0.1}>
            <p className="lead">Une question, un besoin d’accompagnement ? Nous vous répondons sous 24 h ouvrées.</p>
          </Reveal>

          <div className="info-list">
            {[
              { icon: MapPin, label: "Adresse", value: `${contact.address}, ${contact.city}`, href: "https://maps.google.com/?q=4+rue+de+Galliera+75116+Paris" },
              { icon: Phone, label: "Téléphone", value: contact.phone, href: contact.phoneHref },
              { icon: Mail, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
              { icon: Clock, label: "Horaires", value: contact.hours },
            ].map((it, i) => (
              <Reveal key={it.label} delay={0.1 + i * 0.06}>
                <a className="info-item" href={it.href} target={it.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <span className="info-icon">
                    <it.icon size={18} />
                  </span>
                  <span>
                    <small>{it.label}</small>
                    {it.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="map">
              <iframe
                title="Plan d'accès B&M Expertise"
                src="https://www.google.com/maps?q=4+rue+de+Galliera,+75116+Paris&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="form-wrap">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="ok"
                className="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={48} />
                <h3>Merci !</h3>
                <p>Votre messagerie s’est ouverte avec votre demande pré-remplie. Nous revenons vers vous rapidement.</p>
                <button className="btn btn-ghost" onClick={() => setSent(false)}>
                  Nouveau message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" className="form" onSubmit={onSubmit} exit={{ opacity: 0 }}>
                <h3>Vous souhaitez nous écrire</h3>
                <div className="form-row">
                  <Field id="company" label="Société" />
                  <Field id="name" label="Nom & prénom" required />
                </div>
                <div className="form-row">
                  <Field id="phone" label="Téléphone" type="tel" />
                  <Field id="email" label="E-mail" type="email" required />
                </div>
                <Field id="message" label="Votre message" textarea required />
                <label className="consent">
                  <input type="checkbox" required id="consent" />
                  <span>J’accepte la politique de confidentialité.</span>
                </label>
                <button type="submit" className="btn btn-primary btn-lg btn-block" id="btn-submit-contact">
                  Envoyer ma demande <ArrowRight size={18} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  textarea,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <div className="field">
      {textarea ? (
        <textarea id={id} name={id} placeholder=" " rows={5} required={required} />
      ) : (
        <input id={id} name={id} type={type} placeholder=" " required={required} />
      )}
      <label htmlFor={id}>
        {label}
        {required && " *"}
      </label>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <Reveal>
          <h2 className="cta-title">
            Prêt à confier votre gestion à des <em>experts</em> ?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <a href="#contact" className="cta-circle" id="cta-band-btn">
            <span>Prendre rendez-vous</span>
            <ArrowRight size={22} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>
              Bibas &amp; Murcia Expertise — Expertise comptable et commissariat aux comptes à Paris depuis 2008.
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Navigation</h4>
              <a href="/le-cabinet">Le cabinet</a>
              <a href="/nos-services">Nos services</a>
              <a href="/nos-outils">Nos outils</a>
              <a href="/recrutement">Recrutement</a>
            </div>
            <div>
              <h4>Espace client</h4>
              <a href="https://isuite.bmexpertise.fr/isuiteexpert/" target="_blank" rel="noopener noreferrer">Ma Compta</a>
              <a href="http://www.silaexpert06.fr/silae" target="_blank" rel="noopener noreferrer">Ma Paie</a>
            </div>
            <div>
              <h4>Contact</h4>
              <span>{contact.address}</span>
              <span>{contact.city}</span>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </div>
        <div className="footer-giant" aria-hidden>
          B&amp;M Expertise
        </div>
        <div className="footer-bottom">
          <span>© 2026 B&amp;M Expertise – Audit. Tous droits réservés.</span>
          <div>
            <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer">Réalisé par Microdidact</a>
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
