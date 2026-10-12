import Hero from "@/components/Hero";
import { Cabinet, Marquee } from "@/components/Cabinet";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Recruitment, Team } from "@/components/People";
import { Contact, CtaBand } from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <Cabinet />
      <Services />
      <Tools />
      <Team />
      <CtaBand />
      <Recruitment />
      <Contact />
    </main>
  );
}
