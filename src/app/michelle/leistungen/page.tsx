import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { PriceRow } from "@/components/PriceRow";
import { contact, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Behandlungen & Buchung · Michelle Ajouri",
  description:
    "SKIN FIRST, individuelle Facials, persönliche Hautbegleitung, ganzheitliche Darmbegleitung online sowie Korean Lash Lift und Brow Lift bei Michelle Ajouri in Neuburg.",
};

const c = contact.michelle;

type Pkg = {
  name: string;
  claim: string;
  sessions: string;
  duration: string;
  price: string;
  popular?: boolean;
  text: string;
  features: string[];
};

const packages: Pkg[] = [
  {
    name: "SKIN START",
    claim: "Dein sanfter Einstieg",
    sessions: "4 Termine",
    duration: "rund 3 Monate",
    price: "1.049 €",
    text: "Dein sanfter Einstieg in eine Hautreise mit Begleitung. Behandlungen, die aufeinander aufbauen — und der Blick auf Haut und Darm zusammen.",
    features: [
      "4 Behandlungen, die aufeinander aufbauen",
      "5 abgestimmte REVIDERM-Produkte für zu Hause",
      "Haut und Darm im Blick",
      "Persönliche Check-ins zwischen den Terminen",
      "Deine WhatsApp-Gruppe mit Impulsen",
    ],
  },
  {
    name: "SKIN RENEWAL",
    claim: "Richtig ankommen",
    sessions: "6 Termine",
    duration: "rund 5 Monate",
    price: "1.549 €",
    popular: true,
    text: "Für alle, die richtig ankommen wollen. Deine Haut hat Zeit, sich nachhaltig zu verändern — Schritt für Schritt, von innen und außen.",
    features: [
      "6 Behandlungen, angepasst an deine Fortschritte",
      "Deine Haut gestärkt von innen und außen",
      "5 REVIDERM-Produkte inklusive",
      "Ich bin auch zwischen den Terminen für dich da",
      "Deine WhatsApp-Gruppe mit Impulsen",
    ],
  },
  {
    name: "SKIN TRANSFORMATION",
    claim: "Deine ganz große Hautreise",
    sessions: "10 Termine",
    duration: "rund 9 Monate",
    price: "2.490 €",
    text: "Neun Monate intensive Begleitung, in denen wir Haut und Darm in Balance bringen und dein Ergebnis langfristig festigen. Für dich, wenn du es von Herzen ernst meinst.",
    features: [
      "10 Behandlungen, aufeinander abgestimmt",
      "Haut und Darm in Balance",
      "5 REVIDERM-Produkte für zu Hause",
      "Volle Begleitung mit persönlichen Check-ins",
      "Deine WhatsApp-Gruppe mit Impulsen",
      "Alle Unterlagen als PDF",
    ],
  },
];

const facials = [
  "Aquafacial",
  "Microneedling",
  "Acid Peels",
  "Dermaplaning",
  "Oxygen",
  "Hydrolage",
  "Galvanik",
  "Mikroströme",
];

export default function MichelleBehandlungen() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/michelle/entspannung.jpg"
        alt="Entspannte Kundin mit geschlossenen Augen auf der Liege"
        position="50% 35%"
        eyebrow="Behandlungen & Buchung"
        title={
          <>
            Deine Hautreise beginnt <em>mit SKIN FIRST.</em>
          </>
        }
        lead="Bevor wir deine Haut gezielt behandeln, möchte ich sie verstehen. Danach entscheiden wir gemeinsam, wie es für dich weitergeht."
        actions={
          <>
            <Button href={c.bookingHref}>
              SKIN FIRST buchen <Arrow />
            </Button>
            <Button href="/michelle/hautreise/" variant="outline">
              So läuft&apos;s
            </Button>
          </>
        }
      />

      {/* 01 SKIN FIRST */}
      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div className="reveal md:col-span-6">
            <Eyebrow index="01">Ersttermin mit Hautanalyse &amp; individueller Behandlung</Eyebrow>
            <h2 className="display-2 mt-6">
              SKIN <em>FIRST.</em>
            </h2>
            <p className="lead mt-6 !max-w-lg">
              Bei SKIN FIRST nehmen wir uns Zeit für deine Hautgeschichte, deine Wünsche und deine
              aktuelle Pflegeroutine.
            </p>
            <ul className="mt-6 space-y-2 text-[0.98rem]">
              {[
                "Ausführliche Haut- und Bedarfsanalyse mit dem OBSERV 320 von REVIDERM",
                "Die kosmetische Behandlung, die zu deinem Hautzustand passt",
                "Deine tägliche Pflege und mögliche Einflüsse aus deinem Alltag",
                "Deine persönliche Empfehlung für die nächsten Schritte",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="text-accent-text">·</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="body-copy mt-6 !max-w-lg text-[0.92rem] text-muted">
              SKIN FIRST ist für neue Gesichtskundinnen und Gesichtskunden der erste
              Behandlungstermin.
            </p>
          </div>
          <div className="reveal md:col-span-5 md:col-start-8">
            <div className="border border-line bg-elev p-8 md:p-10">
              <p className="eyebrow text-accent-text">SKIN FIRST · 2 Std.</p>
              <p className="font-display mt-4 text-[3.25rem] leading-none tabular-nums">249 €</p>
              <p className="body-copy mt-4 !max-w-none text-[0.95rem]">
                Hautanalyse und Behandlung sind im Preis inklusive. Keine versteckten Kosten.
              </p>
              <Button href={c.bookingHref} className="mt-8 w-full">
                SKIN FIRST buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Individuelle Facials */}
      <section className="section-y-tight bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="02">Individuelle Facials</Eyebrow>
            <h2 className="display-2 mt-6">
              Deine Haut. Dein Moment. <em>Deine Behandlung.</em>
            </h2>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="lead !max-w-none">
              Nach unserem ersten Kennenlernen kannst du auch einzelne Gesichtsbehandlungen buchen,
              ganz ohne mehrmonatige Begleitung.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {facials.map((f) => (
                <li key={f} className="border border-line bg-elev px-3 py-1.5 text-[0.9rem]">
                  {f}
                </li>
              ))}
            </ul>
            <p className="body-copy mt-6 !max-w-none">
              Welche Anwendung sinnvoll ist, hängt von deinem aktuellen Hautzustand ab. Manchmal
              steht intensive Feuchtigkeit im Vordergrund, manchmal eine gezielte Wirkstoffbehandlung
              und manchmal braucht deine Haut vor allem Ruhe. Eine ayurvedisch inspirierte
              Gesichtsmassage gehört dazu, soweit die Anwendung es zulässt.
            </p>
            <p className="eyebrow mt-6 text-muted">In der Regel 90–100 Minuten</p>
            <Button href={c.bookingHref} variant="text" className="mt-6">
              Behandlung buchen <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* 03 Hautbegleitung */}
      <section className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="03"
            eyebrow="Deine persönliche Hautbegleitung"
            title={
              <>
                Wenn du mehr möchtest <em>als einen Termin.</em>
              </>
            }
            lead="Manche Hautziele brauchen Zeit. Gemeinsam entwickeln wir einen Fahrplan mit abgestimmten Behandlungen, ausgewählter Heimpflege und regelmäßigen Gesprächen. Deine Haut gibt die Richtung vor, ich begleite dich auf dem Weg."
          />

          <div className="mt-12 grid items-stretch gap-6 md:mt-14 md:grid-cols-3 md:gap-6">
            {packages.map((p) => (
              <article
                key={p.name}
                className={`reveal relative flex h-full flex-col border p-7 md:p-8 ${
                  p.popular ? "border-accent bg-deep text-deep-ink" : "border-line bg-elev"
                }`}
              >
                {p.popular && (
                  <span className="eyebrow absolute -top-3 left-7 bg-accent px-3 py-1 text-[0.6rem] text-deep">
                    Beliebt
                  </span>
                )}
                <p className={`eyebrow ${p.popular ? "text-accent" : "text-accent-text"}`}>
                  {p.claim}
                </p>
                <h3 className="font-display mt-3 text-[1.9rem] leading-none tracking-[0.03em] md:min-h-[3.8rem]">
                  {p.name}
                </h3>
                <p className={`mt-2 text-[0.9rem] ${p.popular ? "opacity-75" : "text-muted"}`}>
                  {p.sessions} · {p.duration}
                </p>
                <p className="font-display mt-6 text-[2.6rem] leading-none tabular-nums">{p.price}</p>
                <p className={`mt-5 text-[0.95rem] leading-relaxed ${p.popular ? "opacity-85" : "body-copy"}`}>
                  {p.text}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 text-[0.95rem] ${
                    p.popular ? "border-white/15" : "border-line"
                  }`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden className={p.popular ? "text-accent" : "text-accent-text"}>
                        ·
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={c.bookingHref}
                  variant={p.popular ? "solid" : "outline"}
                  className="mt-8 w-full"
                >
                  {p.name} anfragen
                </Button>
              </article>
            ))}
          </div>
          <div className="reveal mt-8 grid gap-6 border-t border-line pt-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow text-accent-text">In jedem Paket dabei</p>
              <p className="display-3 mt-3">
                Deine WhatsApp-Gruppe: <em>3 bis 4 Impulse pro Woche.</em>
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="body-copy !max-w-none">
                Ernährungsideen und Rezepte für Haut und Bauch, Bewegung und Face Yoga, Wissen zu
                Wirkstoffen wie Hyaluron, Niacinamid, Vitamin C oder Retinol und Tipps zur Anwendung
                deiner Produkte. Ich sende, du liest, wann es dir passt. Die anderen sehen deine
                Nummer nicht, Fragen schreibst du mir privat.
              </p>
              <p className="body-copy mt-4 !max-w-none text-[0.92rem] text-muted">
                Zugang während deiner Hautbegleitung und bis 4 Wochen danach. Die drei Rahmen sind
                ein Startpunkt, kein starrer Ablauf: Den genauen Fahrplan legen wir nach SKIN FIRST
                gemeinsam fest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Darmbegleitung */}
      <section className="section-y-tight bg-surface">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Img
              src="/assets/michelle/heimpflege-serum.jpg"
              alt="Seren mit Pipette auf einer Holzscheibe"
              position="50% 55%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="04">Ganzheitliche Darmbegleitung</Eyebrow>
            <h2 className="display-2 mt-6">
              Auch online <em>für dich da.</em>
            </h2>
            <p className="lead mt-6 !max-w-none">
              Neben meiner kosmetischen Arbeit begleite ich dich individuell rund um Darmgesundheit,
              Ernährung und Lebensstil, ganz bequem online.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Gemeinsam sprechen wir über deine Gewohnheiten, deine Fragen und mögliche
              Veränderungen im Alltag. Bei Bedarf können auch vorhandene Blut- und Laborwerte oder
              ergänzende Testverfahren Thema sein.
            </p>
            <p className="body-copy mt-4 !max-w-none text-[0.9rem] text-muted">
              Medizinisch notwendige Untersuchungen und Befundbewertungen erfolgen über entsprechend
              befugte Fachpersonen.
            </p>
            <Button
              href={mailto(c.email, "Anfrage Online-Beratung Darmbegleitung")}
              variant="text"
              className="mt-7"
            >
              Online-Beratung anfragen <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* 05 Lash & Brow */}
      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <Eyebrow index="05">Lash &amp; Brow Lift</Eyebrow>
            <h2 className="display-2 mt-6">
              Kleine Veränderung. <em>Große Wirkung.</em>
            </h2>
            <p className="lead mt-6">
              Manchmal braucht es gar nicht viel, um den eigenen Ausdruck zu unterstreichen.
            </p>
            <p className="body-copy mt-4 text-[0.92rem] text-muted">
              Auch ohne vorherigen SKIN-FIRST-Termin möglich, einzeln oder kombiniert.
            </p>
          </div>
          <ul className="divide-y divide-line border-b border-line md:col-span-7 md:col-start-6">
            <PriceRow
              name="Korean Lash Lift"
              time="60 Min."
              detail="Deine natürlichen Wimpern bekommen einen schönen Schwung. Inklusive Wimpern färben."
              price="75 €"
            />
            <PriceRow
              name="Brow Lift"
              time="60 Min."
              detail="Wir bringen deine Augenbrauen in eine harmonische Form. Färben und Zupfen sind inklusive."
              price="65 €"
            />
            <PriceRow
              name="Korean Lash Lift & Brow Lift"
              time="80 Min."
              detail="Beides in einem Termin."
              price="125 €"
            />
          </ul>
        </div>
      </section>

      {/* Booking */}
      <section className="section-y-tight bg-surface">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-7">
            <p className="eyebrow text-accent-text">Buchen &amp; bezahlen</p>
            <p className="display-3 mt-3">Direkt über Beautinda buchbar.</p>
            <p className="body-copy mt-3 !max-w-none">
              Sichere Onlinezahlung, auf Wunsch in Raten. Unsicher, was zu dir passt? Buch dir einen
              kostenlosen Kennenlern-Call.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-4 md:col-start-9 md:justify-end">
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href={c.callHref} variant="outline">
              Kennenlern-Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
