import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { Marquee } from "@/components/Marquee";
import { EditorialCover } from "@/components/EditorialCover";
import { FullBleed } from "@/components/FullBleed";
import { PhotoStrip } from "@/components/PhotoStrip";
import { asset } from "@/lib/asset";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vita Sonus — Sabine Ajouri",
  description:
    "Klangmassage, Klangreise und Meditation in Neuburg an der Donau. Vita Sonus von Sabine Ajouri: ein Raum für Entspannung, Achtsamkeit und die besondere Erfahrung von Klang.",
  openGraph: {
    title: "Vita Sonus — Sabine Ajouri",
    description: "Ein Raum, in dem es still werden darf.",
    images: [{ url: asset("/assets/sabine/hero-klangschalen.jpg"), width: 2000, height: 1467 }],
  },
};

const c = contact.sabine;

export default function SabineHome() {
  return (
    <>
      {/* Ritual invitation hero — short poetic lead */}
      <Hero
        size="full"
        image="/assets/sabine/hero-klangschalen.jpg"
        alt="Sabine Ajouri im Schneidersitz mit Klangschalen in der Natur"
        position="75% 12%"
        eyebrow="Vita Sonus · Neuburg"
        title={
          <>
            Ein Raum, in dem es <em>still werden darf.</em>
          </>
        }
        lead="Hier musst du nichts leisten. Du darfst einfach ankommen."
        leadClassName="!text-[1.45rem] md:!text-[1.65rem] !leading-snug italic font-display !text-ink/90 !max-w-[26ch]"
        actions={
          <>
            <Button href="/sabine/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/sabine/angebote/" variant="outline">
              Angebote
            </Button>
          </>
        }
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Offenes Studio · {c.openStudio}</span>
            <span className="text-muted">{c.phone}</span>
          </p>
        }
      />

      <Marquee
        items={["Klang", "Stille", "Achtsamkeit", "Ankommen", "Atem", "Ruhe", "Nachklang"]}
      />

      {/* Intro */}
      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-end">
          <p className="display-3 reveal md:col-span-6">
            Manchmal ist unser Alltag so laut, dass wir unsere eigene innere Stimme <em>kaum noch
            wahrnehmen.</em>
          </p>
          <div className="reveal md:col-span-5 md:col-start-8">
            <p className="body-copy !max-w-none">
              Wir funktionieren, erledigen, organisieren und vergessen dabei etwas ganz Wesentliches:
              uns selbst.
            </p>
            <p className="body-copy mt-4 !max-w-none">
              Vita Sonus ist ein Ort, an dem du all das für einen Moment hinter dir lassen darfst. Ein
              Raum für Entspannung, Achtsamkeit und die besondere Erfahrung von Klang.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome + pull quote */}
      <section className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <figure className="reveal ken-wrap md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/sabine/portrait-herbst.jpg"
                alt="Sabine Ajouri, lächelnd, im Herbstlicht"
                position="50% 30%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Sabine Ajouri · Vita Sonus</figcaption>
          </figure>

          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="I">Über mich</Eyebrow>
            <h2 className="display-2 mt-6">
              Schön, dass <em>du hier bist.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Ich bin Sabine. Mit Vita Sonus habe ich mir einen Herzenswunsch erfüllt: einen Ort, an
              dem Menschen für einen Moment aus ihrem hektischen Alltag aussteigen und wieder
              bewusster bei sich selbst ankommen können.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Mich fasziniert, was Klänge in uns auslösen können. Wie ein einzelner Ton einen Raum
              erfüllt, wie sich Schwingungen auf unterschiedliche Weise wahrnehmen lassen und wie
              wohltuend es sein kann, einmal nichts anderes tun zu müssen, als zuzuhören.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Mit Klangschalen und Meditation möchte ich dir genau diesen Raum schenken. Ohne
              Erwartungen, ohne Leistungsdruck. Dafür mit viel Achtsamkeit, Ruhe und dem Vertrauen
              darauf, dass jeder Mensch seine Entspannung auf seine eigene Weise findet.
            </p>
            <p className="font-display mt-6 text-[1.4rem] leading-snug italic text-accent-text">
              Vita Sonus ist meine Einladung an dich, dir selbst wieder ein bisschen näherzukommen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x">
          <PullQuote variant="statement" cite="— Sabine">
            „Du brauchst nichts mitzubringen. Du musst nichts können. Du darfst einfach sein.“
          </PullQuote>
        </div>
      </section>

      {/* Cinematic band — real session outdoors */}
      <FullBleed
        src="/assets/sabine/klangschalen-band.jpg"
        alt="Sabine Ajouri spielt Klangschalen im Freien"
        position="50% 55%"
        height="tall"
      />

      {/* Philosophie */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="II">Meine Philosophie</Eyebrow>
            <h2 className="display-2 mt-6">
              Du musst nicht <em>immer funktionieren.</em>
            </h2>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="lead !max-w-none">
              Wir kümmern uns um so vieles. Um unsere Familie, unsere Arbeit, unsere Verpflichtungen
              und die Menschen, die uns wichtig sind. Aber wann kümmern wir uns eigentlich einmal nur
              um uns selbst?
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Ich glaube, dass Ruhe kein Luxus sein sollte, sondern etwas, das wir uns ganz bewusst
              erlauben dürfen. Bei Vita Sonus bist du willkommen, ganz gleich, ob du schon
              Erfahrungen mit Meditation und Klangschalen gesammelt hast oder diese Welt gerade erst
              für dich entdeckst.
            </p>
          </div>
        </div>
      </section>

      {/* Real photography */}
      <section className="section-y-tight">
        <div className="container-x">
          <PhotoStrip
            photos={[
              {
                src: "/assets/sabine/arme-offen.jpg",
                alt: "Sabine Ajouri sitzt mit offenen Armen zwischen Klangschalen",
                position: "50% 40%",
              },
              {
                src: "/assets/sabine/namaste.jpg",
                alt: "Sabine Ajouri mit gefalteten Händen",
                position: "50% 35%",
              },
              {
                src: "/assets/sabine/lachen-wind.jpg",
                alt: "Sabine Ajouri lacht, eine Hand im Haar",
                position: "50% 40%",
              },
            ]}
            caption="Sabine Ajouri · Vita Sonus · Neuburg"
          />
        </div>
      </section>

      {/* Editorial covers */}
      <section className="section-y">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege in dein <em>Studio.</em>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-8 md:mt-16 md:grid-cols-3 md:gap-7">
            <EditorialCover
              href="/sabine/angebote/"
              eyebrow="Angebote"
              title="Drei Wege zu mehr Ruhe"
              text="Klangmassage, Klangreise und Meditation: bewusste Auszeiten vom Alltag."
              image="/assets/sabine/schneidersitz.jpg"
              position="50% 45%"
              alt="Sabine Ajouri im Schneidersitz zwischen Klangschalen"
              aspect="tall"
            />
            <EditorialCover
              href="/sabine/studio/"
              eyebrow="Studio"
              title="Freitagabend. Tür offen."
              text="Jeden Freitag von 16:30 bis 18:00 Uhr ohne Anmeldung: ankommen, kennenlernen, austauschen."
              image="/assets/sabine/klangschalen-spiel.jpg"
              position="50% 50%"
              alt="Hände mit Klöppel an einer Klangschale"
              aspect="tall"
            />
            <EditorialCover
              href="/sabine/kontakt/"
              eyebrow="Kontakt"
              title="Melde dich. Ganz in Ruhe."
              text="Adresse, Telefon und E-Mail. Ich melde mich persönlich bei dir."
              image="/assets/sabine/lachen.jpg"
              position="50% 30%"
              alt="Sabine Ajouri lacht im Herbstlicht"
              aspect="tall"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <h2 className="display-2 mt-6">
              Melde dich. <em>Ganz in Ruhe.</em>
            </h2>
            <p className="lead mt-6">
              Ruf an oder schreib mir, dann finden wir den passenden Einstieg. Oder komm freitags
              ganz unverbindlich ins offene Studio.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Button href="/sabine/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/sabine/studio/" variant="outline">
              Offenes Studio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
