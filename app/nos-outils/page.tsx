import Image from "next/image";
import Tools from "@/components/Tools";
import { Reveal, SplitTitle } from "@/components/motion";
import { CtaBand } from "@/components/Contact";

export default function NosOutilsPage() {
  return (
    <main className="page-main pt-header">
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <Reveal>
                <p className="eyebrow"><span className="dot" /> Innovation digitale</p>
              </Reveal>
              <SplitTitle className="h2" text="Une comptabilité _connectée et simplifiée." />
              <Reveal delay={0.1}>
                <p className="lead">
                  Nous mettons à votre disposition des outils performants pour piloter votre activité, échanger avec nos équipes et accéder à vos documents 24h/24 et 7j/7 depuis votre smartphone ou votre ordinateur.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div style={{ position: "relative", aspectRatio: "1/1", maxWidth: "500px", margin: "0 auto", background: "var(--paper)", borderRadius: "30px", overflow: "hidden", display: "grid", placeItems: "center" }}>
                <Image src="/images/solution.jpg" alt="Solutions digitales B&M" fill style={{ objectFit: "contain", padding: "30px" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <Tools />
      <CtaBand />
    </main>
  );
}
