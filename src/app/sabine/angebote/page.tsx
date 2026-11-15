import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { contact, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Angebote · Vita Sonus — Klangmassage, Klangreise, Meditation",
  description:
    "Klangmassage, Klangreise und Meditation bei Vita Sonus — drei Wege zu mehr Ruhe und Achtsamkeit mit Sabine Ajouri in Neuburg an der Donau.",
};

const c = contact.sabine;

const offerings = [
  {
    numeral: "I",
    name: "Klangmassage",
    mood: "Wenn du Entspannung nicht nur hören, sondern auch spüren möchtest.",
    detail: [
      "Speziell ausgewählte Klangschalen werden auf oder neben dem bekleideten Körper platziert und sanft angeschlagen. Es entstehen unterschiedliche Töne und feine Schwingungen, die du teilweise auch direkt am Körper wahrnehmen kannst.",
      "Anders als bei einer klassischen Massage wird nicht mit den Händen geknetet. Die besondere Erfahrung entsteht durch das Zusammenspiel von Klang, Schwingung und Ruhe. Du darfst die Augen schließen und einfach wahrnehmen, was die Klänge bei dir auslösen.",
    ],
    forWhom:
      "Für Menschen, die sich eine besondere Form der Entspannung wünschen, neugierig auf die Wirkung von Klängen sind oder sich bewusst Zeit für sich selbst nehmen möchten.",
    time: "45–60 Min.",
    image: "/assets/sabine/04-klangmassage.jpg",
    position: "40% 50%",
    landscape: true,
  },
  {
    numeral: "II",
    name: "Klangreise",
    mood: "Schließe deine Augen. Und lass dich von den Klängen tragen.",
    detail: [
      "Eine besondere Form der geführten Entspannung: Du machst es dir bequem und lässt dich von Klängen, sanften Schwingungen, Ruhe und gegebenenfalls meiner Stimme begleiten. Es gibt nichts, was du erreichen musst, und kein Gefühl, das entstehen muss.",
      "Manche erleben die Klänge als beruhigend, andere nehmen Bilder, Erinnerungen oder Gefühle wahr. Jede Klangreise darf anders sein, denn jeder Mensch bringt etwas anderes mit.",
    ],
    forWhom:
      "Für alle, die sich nach einer bewussten Auszeit sehnen, sich auf neue Entspannungserfahrungen einlassen möchten oder das Zusammenspiel verschiedener Klänge genießen wollen.",
    time: "60–90 Min.",
    image: "/assets/sabine/klangreise.jpg",
    position: "50% 50%",
  },
  {
    numeral: "III",
    name: "Meditation",
    mood: "Wieder mehr im Hier und Jetzt ankommen.",
    detail: [
      "Meditation ist eine Einladung, die Aufmerksamkeit auf den gegenwärtigen Moment zu richten: den eigenen Atem, den Körper, die Gedanken, die kommen und gehen, und die kleinen Momente der Stille dazwischen.",
      "Es geht nicht darum, den Kopf vollständig leer zu bekommen, sondern um einen freundlicheren Umgang mit den eigenen Gedanken. Begleitet von Atemübungen, Achtsamkeitsimpulsen und ausgewählten Klängen. Vorkenntnisse brauchst du keine.",
    ],
    forWhom:
      "Für Menschen, die sich mehr Achtsamkeit im Alltag wünschen, Entspannung bewusst üben möchten oder neugierig sind, was Meditation für sie bedeuten kann.",
    time: "nach Absprache",
    image: "/assets/sabine/meditation-sitzend.jpg",
    position: "50% 40%",
  },
];

export default function SabineAngebote() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/sabine/portrait-lachen-2.jpg"
        alt="Sabine Ajouri — Vita Sonus"
        position="62% 28%"
        eyebrow="Meine Angebote · Vita Sonus"
        title={
          <>
            Drei Wege zu mehr <em>Ruhe und Achtsamkeit.</em>
          </>
        }
        lead="Jedes Angebot hat seine eigene Atmosphäre. Gemeinsam finden wir heraus, was dir gerade guttut."
        actions={
          <>
            <Button href="/sabine/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/sabine/studio/" variant="outline">
              Offenes Studio
            </Button>
          </>
        }
      />

      <section className="section-y-tight">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="I"
            eyebrow="Erlebnisse"
            title={
              <>
                Drei Wege. <em>Ein Raum.</em>
              </>
            }
            lead="Klangmassage, Klangreise und Meditation. Du brauchst keine Vorkenntnisse, nur ein wenig Zeit für dich."
          />

          <div className="mt-8 space-y-0 md:mt-10">
            {offerings.map((o, i) => (
              <article
                key={o.name}
                className={`reveal grid gap-6 border-t border-line py-7 md:grid-cols-12 md:gap-8 md:py-9 ${
                  i === offerings.length - 1 ? "border-b" : ""
                }`}
              >
                <div className={`ken-wrap relative overflow-hidden bg-surface md:col-span-5 ${
                    "landscape" in o ? "aspect-[16/10] md:aspect-[4/3] md:self-center" : "aspect-[4/5]"
                  }`}>
                  <Img
                    src={o.image}
                    alt=""
                    position={o.position}
                    className="ken-img absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col md:col-span-6 md:col-start-7 md:justify-center">
                  <div className="flex items-baseline gap-5">
                    <span className="chapter-num !text-[2.5rem] md:!text-[3rem]">{o.numeral}</span>
                    <div>
                      <h2 className="display-3">{o.name}</h2>
                      <p className="eyebrow mt-2 text-muted">{o.time}</p>
                    </div>
                  </div>
                  <p className="font-display mt-7 text-[1.45rem] leading-snug italic text-accent-text md:text-[1.6rem]">
                    {o.mood}
                  </p>
                  {o.detail.map((d) => (
                    <p key={d.slice(0, 24)} className="body-copy mt-5 !max-w-md">
                      {d}
                    </p>
                  ))}
                  <p className="mt-6 border-l border-accent/50 pl-5 text-[0.9rem] leading-relaxed text-muted">
                    <span className="eyebrow block text-accent-text">Für wen</span>
                    <span className="mt-2 block">{o.forWhom}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-6">
            <Eyebrow>Noch unsicher?</Eyebrow>
            <h3 className="display-2 mt-4">Komm erst einmal vorbei.</h3>
            <p className="body-copy mt-6 !max-w-md">
              Du weißt noch nicht, welches Angebot zu dir passt? Freitags von 16:30 bis 18:00 Uhr ist
              mein Studio offen: zum Kennenlernen, Fragenstellen und Austauschen, ganz ohne
              Anmeldung.
            </p>
            <Button href={mailto(c.email, "Anfrage Vita Sonus")} variant="text" className="mt-8">
              Angebot anfragen <Arrow />
            </Button>
          </div>
          <div className="reveal border border-line bg-elev p-8 md:col-span-5 md:col-start-8 md:p-10">
            <p className="eyebrow text-accent-text">Termine</p>
            <p className="display-3 mt-4">Einzeltermine nach Absprache.</p>
            <p className="body-copy mt-4 !max-w-none">
              Ruf an oder schreib mir, ich melde mich persönlich bei dir.
            </p>
            <Button href="/sabine/kontakt/#buchen" className="mt-8">
              Termin wählen <Arrow />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Bereit?</p>
            <p className="display-3 mt-3">Wähle deinen Termin — oder komm Freitag vorbei.</p>
          </div>
          <div className="flex flex-wrap gap-3">
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
