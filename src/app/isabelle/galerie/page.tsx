import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Meine Arbeit · Inkabell Tattoo",
  description:
    "Fineline und Blackwork bei Inkabell Tattoo — individuelle Tattoos von Isabelle Ajouri in Neuburg an der Donau.",
};

export default function IsabelleGalerie() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        imageShape="landscape"
        image="/assets/isabelle/01-hero.jpg"
        alt="Dunkles Tattoo-Studio mit warmem Licht"
        position="50% 40%"
        eyebrow="Meine Arbeit · Inkabell Tattoo"
        title={
          <>
            Fineline <em>&amp; Blackwork.</em>
          </>
        }
        lead="Zwei Stilrichtungen, die auf unterschiedliche Weise besonders ausdrucksstark sein können. Gemeinsam entwickeln wir ein Design, das zu dir passt."
        actions={
          <>
            <Button href="/isabelle/anfrage/">
              Tattoo-Idee anfragen <Arrow />
            </Button>
            <Button href="/isabelle/prozess/" variant="outline">
              Dein Tattoo
            </Button>
          </>
        }
      />

      <section className="pt-6 md:pt-8">
        {/* Fineline */}
        <div id="fineline" className="container-x scroll-mt-28 grid gap-6 pb-8 md:grid-cols-12 md:gap-12 md:pb-10">
          <div className="reveal md:col-span-5">
            <Eyebrow index="I">Fineline</Eyebrow>
            <h2 className="display-2 mt-5">
              Feine Linien. <em>Große Bedeutung.</em>
            </h2>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="body-copy !max-w-none">
              Fineline-Tattoos zeichnen sich durch ihre besonders feine und filigrane Gestaltung aus:
              zarte Konturen, kleine Details und eine reduzierte Ästhetik. Ob ein kleines Symbol, ein
              Schriftzug, eine Blume oder eine persönliche Erinnerung.
            </p>
            <p className="body-copy mt-4 !max-w-none">
              Ich achte darauf, dass Motiv, Größe und Körperstelle harmonieren und das Design auch
              langfristig gut zur Geltung kommt.
            </p>
            <p className="font-display mt-5 text-[1.35rem] italic text-accent-text">
              Fein. Persönlich. Mit Liebe zum Detail.
            </p>
          </div>
        </div>
        <figure className="reveal container-x">
          <div className="ken-wrap relative aspect-[16/10] w-full overflow-hidden md:aspect-[2/1]">
            <Img
              src="/assets/isabelle/03-tattoo-botanical.jpg"
              alt="Fineline-Tattoo mit botanischem Motiv"
              position="50% 40%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4">
            <p className="eyebrow text-accent-text">Fineline</p>
            <p className="text-[0.85rem] text-ink/70">Zarte Konturen · kleine Details</p>
          </figcaption>
        </figure>

        {/* Blackwork */}
        <div id="blackwork" className="container-x scroll-mt-28 mt-14 grid gap-6 pb-8 md:mt-20 md:grid-cols-12 md:gap-12 md:pb-10">
          <div className="reveal md:col-span-5">
            <Eyebrow index="II">Blackwork</Eyebrow>
            <h2 className="display-2 mt-5">
              Klare Kontraste. <em>Starker Ausdruck.</em>
            </h2>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="body-copy !max-w-none">
              Blackwork lebt von der Wirkung schwarzer Farbe. Markante Linien, dunkle Flächen und
              bewusste Kontraste lassen ganz unterschiedliche Designs entstehen, von reduziert und
              elegant bis ausdrucksstark und auffällig.
            </p>
            <p className="body-copy mt-4 !max-w-none">
              Es braucht nicht immer viele Farben, um ein Motiv lebendig wirken zu lassen. Manchmal
              gibt gerade die bewusste Reduktion auf Schwarz einem Tattoo seinen besonderen
              Charakter.
            </p>
            <p className="font-display mt-5 text-[1.35rem] italic text-accent-text">
              Individuell. Ausdrucksstark. Zeitlos.
            </p>
          </div>
        </div>
        <div className="container-x grid items-stretch gap-5 md:mt-7 md:grid-cols-2 md:gap-6">
          <figure className="reveal flex h-full flex-col">
            <div className="ken-wrap relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/04-tattoo-geometric.jpg"
                alt="Tattoo mit klaren schwarzen Linien"
                position="50% 50%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <p className="eyebrow text-accent-text">Blackwork</p>
              <p className="text-[0.85rem] text-ink/70">Markante Linien · bewusste Kontraste</p>
            </figcaption>
          </figure>
          <figure className="reveal flex h-full flex-col">
            <div className="ken-wrap relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/06-portal.jpg"
                alt="Atmosphäre im Tattoo-Studio"
                position="50% 50%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <p className="eyebrow text-accent-text">Studio</p>
              <p className="text-[0.85rem] text-ink/70">Ein Ort für deine Ideen</p>
            </figcaption>
          </figure>
        </div>

        {/* Session — once */}
        <figure className="reveal container-x mt-5 md:mt-7">
          <div className="ken-wrap relative aspect-[16/9] overflow-hidden md:aspect-[2.2/1]">
            <Img
              src="/assets/isabelle/05-process.jpg"
              alt="Entwurf und Arbeitsplatz im Tattoo-Studio"
              position="50% 40%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="eyebrow text-accent-text">Dein Design</p>
              <p className="mt-1 text-[0.85rem] text-ink/70">
                Von deiner Idee bis zum fertigen Kunstwerk.
              </p>
            </div>
            <Button href="/isabelle/prozess/" variant="text">
              So entsteht dein Tattoo <Arrow />
            </Button>
          </figcaption>
        </figure>

        {/* Portrait closing — once, centered */}
        <div className="container-x mt-5 mb-2 md:mt-7 md:mb-0">
          <figure className="reveal mx-auto max-w-md">
            <div className="ken-wrap relative aspect-[3/4] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/portrait-kleid.jpg"
                alt="Isabelle Ajouri lacht, eine Hand im Haar"
                position="50% 35%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <p className="eyebrow text-accent-text">Isabelle Ajouri</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
        <div className="container-x">
          <div className="reveal mx-auto max-w-lg text-center">
            <Eyebrow>Deine Idee</Eyebrow>
            <p className="display-3 mt-6">
              Jedes Motiv beginnt mit einem Menschen, der eine Idee mitbringt.
            </p>
            <p className="body-copy mx-auto mt-6 !max-w-sm">
              Gefällt dir der Stil? Dann erzähl mir von deinem Wunschmotiv. Wir entwickeln daraus
              ein Design, das zu dir und deinem Körper passt.
            </p>
            <Button href="/isabelle/anfrage/" className="mt-10">
              Tattoo-Idee anfragen <Arrow />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
