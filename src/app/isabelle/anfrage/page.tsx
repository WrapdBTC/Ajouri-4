import type { Metadata } from "next";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { contact, mapsStudioHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anfrage · Atelier Isabelle",
  description:
    "Anfrage an Atelier Isabelle — Fine-Line Tattoos in Neuburg. Motiv, Stelle und Größe: das brauche ich für deine Anfrage.",
};

const c = contact.isabelle;

const checklist = [
  ["Motiv", "Was soll die Linie erzählen? Gern mit ein, zwei Referenzbildern als Richtung."],
  ["Stelle", "Wo am Körper soll das Tattoo sitzen — Unterarm, Schulter, Knöchel …"],
  ["Größe", "Ungefähr reicht, z. B. „ca. 8 cm“. Feine Linien brauchen etwas Raum."],
  ["Timing", "Gibt es einen Anlass oder ein Datum, auf das du hinplanst?"],
];

export default function IsabelleAnfrage() {
  return (
    <>
      <section className="relative isolate border-b border-line bg-surface">
        <div className="container-x pb-10 pt-14 md:pb-14 md:pt-20">
          <div className="anim-rise max-w-2xl">
            <Eyebrow>Anfrage · Atelier Isabelle</Eyebrow>
            <h1 className="display-2 mt-5">
              Erzähl von <em>deiner Idee.</em>
            </h1>
            <p className="lead anim-rise anim-rise-1 mt-5 !max-w-[36ch]">
              Motiv. Stelle. Größe. Mehr brauche ich für den Anfang nicht.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="reveal md:col-span-6">
            <Eyebrow index="I">Was ich wissen möchte</Eyebrow>
            <ol className="mt-8">
              {checklist.map(([title, text], i) => (
                <li
                  key={title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-6 last:border-b"
                >
                  <span className="chapter-num !text-[2rem]">0{i + 1}</span>
                  <div>
                    <h2 className="display-3">{title}</h2>
                    <p className="body-copy mt-2 !max-w-md text-[0.95rem]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal md:col-span-5 md:col-start-8">
            <div className="grid gap-6 border border-line bg-elev p-6 text-[0.95rem] md:p-8">
              <div>
                <p className="eyebrow text-accent-text">Termine</p>
                <p className="font-display mt-2 text-2xl leading-tight">{c.booking}</p>
              </div>
              <div>
                <p className="eyebrow text-accent-text">Atelier</p>
                <p className="mt-2">{c.street}</p>
                <p className="text-muted">{c.city}</p>
                <Button href={mapsStudioHref()} variant="text" size="sm" className="mt-3">
                  In Maps öffnen <Arrow />
                </Button>
              </div>
              <div>
                <p className="eyebrow text-accent-text">Walk-ins</p>
                <p className="mt-2">Keine — jedes Motiv wird vorher besprochen.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-6 bg-deep p-6 text-deep-ink md:p-8">
              <div>
                <p className="eyebrow text-accent">Kontakt</p>
                <p className="display-3 mt-3">Isabelles direkter Draht folgt in Kürze.</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed opacity-85">
                  Bis dahin erreichst du sie über das gemeinsame Studio in der Sternstraße.
                </p>
              </div>
              <Button href="/isabelle/galerie/" variant="outline" className="self-start">
                Zur Galerie
              </Button>
            </div>
          </div>
        </div>

        <div className="container-x">
          <div className="reveal mt-10 overflow-hidden border border-line md:mt-12">
            <div className="flex flex-col justify-between gap-6 bg-elev p-6 md:flex-row md:items-center md:p-8">
              <div>
                <p className="eyebrow text-accent-text">Unter einem Dach</p>
                <p className="font-display mt-3 text-2xl leading-tight">
                  Ein Studio, drei Handwerke.
                </p>
                <p className="body-copy mt-2 !max-w-md text-[0.95rem]">
                  In der Sternstraße findest du auch Michelle Ajouri (Kosmetik, Haut & Darm) und
                  Sabine Ajouri (Vita Sonus, Klang & Meditation).
                </p>
              </div>
              <Button href="/" variant="text" size="sm">
                Alle drei Welten <Arrow />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
