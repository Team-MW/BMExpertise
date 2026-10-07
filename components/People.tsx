"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { jobs, partners, reasons, team } from "@/lib/content";
import { Reveal, SplitTitle } from "./motion";

const initials = (n: string) =>
  n
    .split(/[\s-]+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export function Team() {
  return (
    <section className="section team" id="equipe">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="dot" /> L’équipe
              </p>
            </Reveal>
            <SplitTitle className="h2" text="Des experts engagés, _à vos côtés." />
          </div>
          <Reveal delay={0.1}>
            <p className="lead narrow">
              2 associés, 4 chefs de mission, 1 juriste et 18 collaborateurs : un interlocuteur dédié qui connaît
              votre dossier.
            </p>
          </Reveal>
        </div>

        <div className="partners">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="partner">
              <span className="avatar avatar-lg">{initials(p.name)}</span>
              <div>
                <h3>{p.name}</h3>
                <span>{p.role} · Expert-comptable</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.07} className="member">
              <span className="avatar">{initials(m.name)}</span>
              <h4>{m.name}</h4>
              <span>{m.role}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Recruitment() {
  return (
    <section className="section recruit" id="recrutement">
      <div className="container recruit-grid">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="dot" /> Recrutement
            </p>
          </Reveal>
          <SplitTitle className="h2" text="Rejoignez une équipe _qui vous fait grandir." />
          <div className="reasons">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={i * 0.06}>
                <div className="reason">
                  <span className="check">
                    <Check size={14} />
                  </span>
                  {r}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="jobs">
          <Reveal>
            <p className="jobs-label">Offres ouvertes</p>
          </Reveal>
          {jobs.map((j, i) => (
            <Reveal key={j.title + j.type} delay={i * 0.06}>
              <a
                href={`mailto:sec@bibas-murcia.fr?subject=${encodeURIComponent("Candidature – " + j.title)}`}
                className="job"
                id={`job-${i}`}
              >
                <div>
                  <span className="job-dept">{j.dept}</span>
                  <span className="job-title">{j.title}</span>
                </div>
                <span className="job-type">{j.type}</span>
                <span className="job-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <a
              href="mailto:sec@bibas-murcia.fr?subject=Candidature%20spontan%C3%A9e"
              className="btn btn-primary"
              id="btn-candidature"
            >
              Candidature spontanée <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
