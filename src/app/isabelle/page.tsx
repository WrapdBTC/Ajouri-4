import type { Metadata } from "next";
import NextLink from "next/link";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { Marquee } from "@/components/Marquee";
import { FullBleed } from "@/components/FullBleed";
import { asset } from "@/lib/asset";
import { contact, mapsStudioHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inkabell Tattoo — Isabelle Ajouri · Fineline & Blackwork",
  description:
    "Inkabell Tattoo von Isabelle Ajouri in Neuburg an der Donau: individuelle Fineline- und Blackwork-Tattoos. Deine Geschichte. Deine Haut. Deine Kunst.",
  openGraph: {
    title: "Inkabell Tattoo — Isabelle Ajouri",
    description: "Deine Geschichte. Deine Haut. Deine Kunst.",
    images: [{ url: asset("/assets/isabelle/hero-wiese.jpg"), width: 1739, height: 2000 }],
  },
};

const c = contact.isabelle;

const styles = [
  {
    href: "/isabelle/galerie/#fineline",
    label: "Fineline",
    claim: "Feine Linien. Große Bedeutung.",
    text: "Zarte Konturen, kleine Details und eine reduzierte Ästhetik. Ein Symbol, ein Schriftzug, eine Blume oder eine persönliche Erinnerung.",
  },
  {
    href: "/isabelle/galerie/#blackwork",
    label: "Blackwork",
    claim: "Klare Kontraste. Starker Ausdruck.",
    text: "Markante Linien, dunkle Flächen und bewusste Kontraste. Von reduziert und elegant bis ausdrucksstark und auffällig.",
  },
];

export default function IsabelleHome() {
  return (
    <>
      <Hero
        size="full"
        image="/assets/isabelle/hero-wiese.jpg"
        alt="Isabelle Ajouri sitzt lächelnd im Herbstgras"
        position="50% 38%"
        eyebrow="Inkabell Tattoo · Fineline & Blackwork"
        title={
          <>
            Deine Geschichte. Deine Haut. <em>Deine Kunst.</em>
          </>
        }
        lead="Manche Geschichten erzählen wir mit Worten. Andere tragen wir für immer auf unserer Haut."
        actions={
          <>
            <Button href="/isabelle/anfrage/">
              Tattoo-Idee anfragen <Arrow />
            </Button>
            <Button href="/isabelle/galerie/" variant="outline">
              Meine Arbeit
            </Button>
          </>
        }
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>{c.booking}</span>
            <span className="text-muted">{c.street} · Neuburg</span>
          </p>
        }
      />

      {/* Welcome — real work photo */}
      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div className="reveal md:col-span-6">
            <p className="display-2">
              Ein Tattoo kann <em>so vieles sein.</em>
            </p>
            <p className="lead mt-8 !max-w-none">
              Eine Erinnerung. Ein Gefühl. Ein Neuanfang. Ein Symbol für etwas, das uns geprägt hat.
              Oder einfach ein Motiv, das wir lieben.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Für mich ist jedes Tattoo etwas Persönliches. Und genau deshalb verdient es Zeit,
              Aufmerksamkeit und ganz viel Liebe zum Detail.
            </p>
            <p className="font-display mt-7 text-[1.5rem] italic text-accent-text">
              Willkommen bei Inkabell Tattoo. 🖤
            </p>
          </div>
          <figure className="reveal ken-wrap md:col-span-5 md:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/tattoo-lachen.jpg"
                alt="Isabelle Ajouri tätowiert lächelnd einen Unterarm"
                position="55% 40%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Isabelle bei der Arbeit</figcaption>
          </figure>
        </div>
      </section>

      <Marquee
        items={["Fineline", "Blackwork", "Individuell", "Mit Liebe zum Detail", "Auf Anfrage", "Neuburg"]}
      />

      {/* I. Über mich */}
      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <figure className="reveal ken-wrap md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/portrait-fels.jpg"
                alt="Isabelle Ajouri steht vor einer Felswand"
                position="50% 40%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Isabelle Ajouri · Inkabell Tattoo</figcaption>
          </figure>

          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="I">Über mich</Eyebrow>
            <h2 className="display-2 mt-6">
              Hey, ich bin <em>Isabelle.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Das Gesicht hinter Inkabell Tattoo. Was einmal als Leidenschaft begonnen hat, ist heute
              mein ganz eigenes Herzensprojekt: ein Ort, an dem ich Kreativität, Liebe zur Kunst und
              mein Gespür für Ästhetik verbinden kann.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Ich habe mich auf Fineline- und Blackwork-Tattoos spezialisiert. Ich liebe es, aus
              einer Idee etwas ganz Eigenes entstehen zu lassen. Etwas, das nicht einfach nur schön
              aussieht, sondern sich für den Menschen, der es trägt, richtig anfühlt.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              In meinem Studio sollst du dich wohlfühlen und deine Wünsche offen aussprechen können.
              Ohne Druck und ohne das Gefühl, dich erklären zu müssen. Dafür mit ehrlicher Beratung,
              Kreativität und einem offenen Ohr für deine Ideen.
            </p>
            <p className="font-display mt-6 text-[1.4rem] italic text-accent-text">Deine Isabelle ♡</p>
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x">
          <PullQuote variant="statement" cite="— Isabelle">
            „Nicht jedes Tattoo braucht eine große Bedeutung. Aber jedes Tattoo sollte zu dir
            passen.“
          </PullQuote>
        </div>
      </section>

      {/* II. Meine Arbeit */}
      <section className="section-y-tight">
        <div className="container-x">
          <div className="reveal flex items-end justify-between gap-6">
            <div>
              <Eyebrow index="II">Meine Arbeit</Eyebrow>
              <h2 className="display-2 mt-4">
                Fineline <em>&amp; Blackwork.</em>
              </h2>
            </div>
            <Button href="/isabelle/galerie/" variant="text" className="hidden sm:inline-flex">
              Mehr dazu <Arrow />
            </Button>
          </div>

          <div className="mt-10 grid items-stretch gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
            {styles.map((w) => (
              <NextLink
                key={w.label}
                href={w.href}
                className="reveal group group/btn flex h-full flex-col border border-line bg-elev p-7 transition-colors duration-300 hover:border-accent md:p-10"
              >
                <span className="font-display text-[2.6rem] leading-none md:text-[3.25rem]">{w.label}</span>
                <span className="eyebrow mt-4 text-accent-text">{w.claim}</span>
                <p className="body-copy mt-5 !max-w-md flex-1">{w.text}</p>
                <span className="tap-row eyebrow mt-7 text-ink">
                  Arbeiten ansehen <Arrow />
                </span>
              </NextLink>
            ))}
          </div>
        </div>
      </section>

      {/* III. Philosophie — deep espresso band */}
      <section className="section-y-tight bg-deep text-deep-ink">
        <div className="container-x">
          <div className="reveal grid gap-8 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <p className="eyebrow opacity-70">III · Meine Philosophie</p>
              <h2 className="display-2 mt-6">
                Wohlfühlen beginnt damit, <em className="!text-accent">du selbst zu sein.</em>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[1.1rem] leading-relaxed opacity-90">
                Unsere Haut begleitet uns ein Leben lang. Sie trägt Erinnerungen und erzählt
                manchmal Geschichten, für die uns die Worte fehlen. Und manchmal möchten wir selbst
                entscheiden, welche Geschichte sie erzählen soll.
              </p>
            </div>
          </div>
          <ul className="mt-10 grid items-stretch gap-0 border-t border-current/20 md:mt-12 md:grid-cols-3">
            {[
              ["Feingefühl", "Ich begleite dich dabei, deine ganz persönliche Idee sichtbar zu machen."],
              ["Gut aufgehoben", "Im Mittelpunkt steht nicht nur das Tattoo, sondern der Mensch auf meinem Stuhl."],
              ["Ein Teil von dir", "Dein Tattoo soll sich nicht wie irgendein Bild anfühlen, sondern wie ein Teil von dir."],
            ].map(([title, text], i) => (
              <li
                key={title}
                className="reveal flex h-full flex-col border-b border-current/20 py-8 md:border-b-0 md:border-l md:px-7 md:py-10 md:first:border-l-0 md:first:pl-0"
              >
                <span className="font-display text-5xl leading-none text-accent tabular-nums opacity-90">
                  0{i + 1}
                </span>
                <h3 className="display-3 mt-7">{title}</h3>
                <p className="mt-3 max-w-xs flex-1 text-[0.95rem] leading-relaxed text-deep-ink/88">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FullBleed src="/assets/isabelle/band-wiese.jpg" alt="" position="50% 45%" height="band" />

      {/* IV. Mein Studio */}
      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <Eyebrow index="IV">Mein Studio</Eyebrow>
            <h2 className="display-2 mt-6">
              Ein Ort für <em>deine Ideen.</em>
            </h2>
            <p className="lead mt-6">
              Mein Studio befindet sich im gemeinsamen Haus Ajouri in Neuburg an der Donau. Ganz
              gleich, ob du dein erstes Tattoo planst oder schon mehrere Kunstwerke trägst: Wir nehmen
              uns Zeit, deine Vorstellungen zu besprechen.
            </p>
            <p className="mt-6 text-[0.98rem] leading-relaxed">
              <span className="font-medium">{c.street}</span> · {c.city} an der Donau
              <br />
              <span className="text-muted">
                {c.booking}, ausschließlich über Instagram{" "}
                <a href={c.instagramHref} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
                  {c.instagram}
                </a>
                .
              </span>
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Button href={c.dmHref}>
              Anfrage per Instagram <Arrow />
            </Button>
            <Button href={mapsStudioHref()} variant="outline">
              Route
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
