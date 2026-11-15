import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { ChapterIndex } from "@/components/ChapterIndex";
import { MetaRow } from "@/components/MetaRow";
import { contact, mapsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offenes Studio · Vita Sonus",
  description:
    "Offenes Studio bei Vita Sonus: jeden Freitag 16:30–18:00 Uhr ohne Anmeldung — ankommen, kennenlernen, austauschen. Sternstraße 180, Neuburg an der Donau.",
};

const c = contact.sabine;

export default function SabineStudio() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/sabine/meditation.jpg"
        alt="Sabine Ajouri in Meditationshaltung mit Klangschalen"
        position="50% 28%"
        eyebrow="Offenes Studio · Vita Sonus"
        title={
          <>
            Freitagabend. <em>Die Tür steht offen.</em>
          </>
        }
        lead="Ankommen. Kennenlernen. Austauschen."
        leadClassName="!text-[1.45rem] !leading-snug italic font-display !text-ink/90"
        actions={
          <>
            <Button href={c.phoneHref}>
              Anrufen <Arrow />
            </Button>
            <Button href={mapsHref(c.street, c.city)} variant="outline">
              Route planen
            </Button>
          </>
        }
      />

      <section className="pt-6 md:pt-8">
        <div className="container-x">
          <MetaRow
            items={[
              { label: "Wann", value: c.openStudio },
              { label: "Wo", value: `${c.street} · ${c.city}` },
              { label: "Anmeldung", value: "Nicht nötig" },
            ]}
          />
        </div>
      </section>

      <section className="section-y-tight !pt-6 md:!pt-8">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="I">Offenes Studio</Eyebrow>
            <h2 className="display-2 mt-6">
              Ganz unverbindlich <em>vorbeischauen.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Du bist neugierig auf Vita Sonus? Jeden Freitag öffne ich meine Türen für alle, die
              meine Räume kennenlernen, Fragen stellen oder sich einfach ein wenig austauschen
              möchten.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Du benötigst keine Anmeldung. Komm einfach vorbei, schau dich um und fühl dich
              willkommen.
            </p>
            <p className="mt-6 border-l border-accent/50 pl-5 text-[0.95rem] leading-relaxed">
              <span className="eyebrow block text-accent-text">Wichtig</span>
              <span className="mt-2 block">
                Während des offenen Studios finden keine Klangmassagen, Klangreisen oder geführten
                Meditationen statt. Es ist bewusst eine unverbindliche Kennenlernzeit und kein festes
                Veranstaltungsprogramm.
              </span>
            </p>
          </div>
          <aside className="reveal border border-line bg-elev p-9 md:col-span-5 md:col-start-8 md:p-11">
            <p className="eyebrow text-accent-text">Freitags</p>
            <p className="display-3 mt-4">{c.openStudio}</p>
            <address className="mt-8 not-italic leading-relaxed">
              {c.street}
              <br />
              {c.city}
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={c.phoneHref} size="sm">
                Anrufen
              </Button>
              <Button href={mapsHref(c.street, c.city)} variant="text" size="sm">
                Route planen <Arrow />
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Numbered Friday ritual */}
      <section className="section-y-tight bg-surface">
        <div className="container-x">
          <div className="reveal max-w-xl">
            <Eyebrow>Hier ist Platz für deine Fragen</Eyebrow>
            <h2 className="display-2 mt-6">
              Was dich am Freitag <em>erwartet.</em>
            </h2>
          </div>
          <ChapterIndex
            className="mt-8 md:mt-10"
            layout="row"
            chapters={[
              {
                numeral: "I",
                title: "Ankommen",
                line: "Ohne Anmeldung, ohne Termin. Du kommst, wann es dir passt.",
              },
              {
                numeral: "II",
                title: "Kennenlernen",
                line: "Schau dir die Räume an und sieh, wer hinter Vita Sonus steckt.",
              },
              {
                numeral: "III",
                title: "Fragen stellen",
                line: "Wie läuft eine Klangmassage ab? Was ist Meditation? Hier ist Platz dafür.",
              },
              {
                numeral: "IV",
                title: "Austauschen",
                line: "Gemeinsam finden wir heraus, welches Angebot dich interessieren könnte.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
          <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Img
              src="/assets/sabine/studio-schalen.jpg"
              alt="Sabine Ajouri sitzt zwischen ihren Klangschalen"
              position="50% 75%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal sticky-caption md:col-span-5 md:col-start-7">
            <Eyebrow>Der Raum</Eyebrow>
            <h2 className="display-3 mt-4">
              Ein Raum, in dem <em>es still werden darf.</em>
            </h2>
            <p className="body-copy mt-5">
              Ein Ort für Entspannung, Achtsamkeit und die besondere Erfahrung von Klang. Hier musst
              du nichts leisten, du darfst einfach ankommen.
            </p>
            <p className="font-display mt-5 text-[1.35rem] italic text-accent-text">
              Ich freue mich auf dich. Deine Sabine 🤍
            </p>
            <Button href="/sabine/angebote/" variant="text" className="mt-8">
              Zu den Angeboten <Arrow />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Einzeltermin</p>
            <p className="display-3 mt-3">Klangmassage, Klangreise oder Meditation: nach Absprache.</p>
          </div>
          <Button href="/sabine/kontakt/#buchen">
            Termin wählen <Arrow />
          </Button>
        </div>
      </section>
    </>
  );
}
