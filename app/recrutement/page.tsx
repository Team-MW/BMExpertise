import { Recruitment } from "@/components/People";
import { CtaBand } from "@/components/Contact";

export default function RecrutementPage() {
  return (
    <main className="page-main pt-header">
      <div className="page-header container">
        <h1 className="h2">Nous rejoindre</h1>
        <p className="lead">Découvrez nos offres d'emploi et opportunités de carrière.</p>
      </div>
      <Recruitment />
      <CtaBand />
    </main>
  );
}
