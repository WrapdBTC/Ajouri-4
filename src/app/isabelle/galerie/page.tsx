import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meine Arbeit · Inkabell Tattoo",
  description:
    "Fineline und Blackwork bei Inkabell Tattoo — individuelle Tattoos von Isabelle Ajouri in Neuburg an der Donau.",
};

const c = contact.isabelle;

const works = [
  {
    src: "/assets/isabelle/tattoo-lachen.jpg",
    alt: "Isabelle Ajouri tätowiert lächelnd einen Unterarm",
    label: "Isabelle bei der Arbeit",
    position: "55% 40%",
  },
  {
    src: "/assets/isabelle/work-ranke.jpg",
    alt: "Fineline-Tattoo einer Blätterranke um den Unterarm",
    label: "Blätterranke",
    position: "55% 50%",
  },
  {
    src: "/assets/isabelle/work-zahlen.jpg",
    alt: "Feines Zahlen-Tattoo an der Innenseite des Knöchels",
    label: "Zahlen & Schrift",
    position: "50% 55%",
  },
  {
    src: "/assets/isabelle/work-mond.jpg",
    alt: "Tattoo eines verzierten Mondes mit Sternen",
    label: "Mond & Sterne",
    position: "45% 50%",
  },
  {
    src: "/assets/isabelle/work-bluete.jpg",
    alt: "Fineline-Tattoo einer Blüte mit Ranken",
    label: "Blüte",
    position: "55% 45%",
  },
  {
    src: "/assets/isabelle/work-partner.jpg",
    alt: "Kleines Partner-Tattoo mit zwei Figuren am Knöchel",
    label: "Partner-Tattoo",
    position: "50% 40%",
  },
];

export default function IsabelleGalerie() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/isabelle/wiese-ruecken.jpg"
        alt="Isabelle Ajouri läuft im weißen Kleid über eine Wiese"
        position="50% 55%"
        eyebrow="Meine Arbeit · Inkabell Tattoo"
        title={
          <>
            Fineline <em>&amp; Blackwork.</em>
          </>
        }
        lead="Zwei Stilrichtungen, die auf unterschiedliche Weise besonders ausdrucksstark sein können. Gemeinsam entwickeln wir ein Design, das zu dir passt."
        actions={
          <>
            <Button href={c.dmHref}>
              Anfrage per Instagram <Arrow />
            </Button>
            <Button href="/isabelle/prozess/" variant="outline">
              Dein Tattoo
            </Button>
          </>
        }
      />

      <section className="section-y-tight">
        <div className="container-x grid gap-12 md:grid-cols-2 md:gap-14">
          {/* Fineline */}
          <div id="fineline" className="reveal scroll-mt-28">
            <Eyebrow index="I">Fineline</Eyebrow>
            <h2 className="display-2 mt-5">
              Feine Linien. <em>Große Bedeutung.</em>
            </h2>
            <p className="body-copy mt-6 !max-w-none">
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

          {/* Blackwork */}
          <div id="blackwork" className="reveal scroll-mt-28">
            <Eyebrow index="II">Blackwork</Eyebrow>
            <h2 className="display-2 mt-5">
              Klare Kontraste. <em>Starker Ausdruck.</em>
            </h2>
            <p className="body-copy mt-6 !max-w-none">
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
      </section>

      {/* Real work from the studio */}
      <section className="section-y-tight !pt-0">
        <div className="container-x">
         <div className="mx-auto max-w-5xl">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Aus meinem Studio</Eyebrow>
              <h2 className="display-2 mt-4">
                Frisch <em>gestochen.</em>
              </h2>
            </div>
            <Button href={c.instagramHref} variant="text">
              Mehr auf Instagram <Arrow />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
            {works.map((w) => (
              <figure key={w.src} className="reveal flex flex-col">
                <div className="ken-wrap relative aspect-[4/5] overflow-hidden bg-surface">
                  <Img
                    src={w.src}
                    alt={w.alt}
                    position={w.position}
                    className="ken-img absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <figcaption className="eyebrow mt-3 text-accent-text">{w.label}</figcaption>
              </figure>
            ))}
          </div>
         </div>
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
              Gefällt dir der Stil? Dann schreib mir auf Instagram und erzähl mir von deinem
              Wunschmotiv.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={c.dmHref}>
                Anfrage per Instagram <Arrow />
              </Button>
              <Button href="/isabelle/anfrage/" variant="outline">
                Was ich wissen möchte
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
