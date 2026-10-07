import Services from "@/components/Services";
import { CtaBand } from "@/components/Contact";

export default function NosServicesPage() {
  return (
    <main className="page-main pt-header">
      <div className="page-header container">
        <h1 className="h2">Nos services</h1>
        <p className="lead">Découvrez l'ensemble de notre offre d'accompagnement sur-mesure.</p>
      </div>
      <Services />
      <CtaBand />
    </main>
  );
}
