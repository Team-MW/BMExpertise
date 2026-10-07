import { Cabinet } from "@/components/Cabinet";
import { Team } from "@/components/People";
import { CtaBand } from "@/components/Contact";

export default function LeCabinetPage() {
  return (
    <main className="page-main pt-header">
      <div className="page-header container">
        <h1 className="h2">Notre cabinet</h1>
        <p className="lead">Une équipe d'experts dédiée à la réussite de votre entreprise.</p>
      </div>
      <Cabinet />
      <Team />
      <CtaBand />
    </main>
  );
}
