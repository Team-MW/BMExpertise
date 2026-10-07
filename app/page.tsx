import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Cabinet, Marquee } from "@/components/Cabinet";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { Recruitment, Team } from "@/components/People";
import { Contact, CtaBand, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
