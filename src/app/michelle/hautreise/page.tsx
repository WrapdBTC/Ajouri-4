import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { ChapterIndex } from "@/components/ChapterIndex";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deine Hautreise · Michelle Ajouri",
  description:
    "So läuft deine Hautreise bei Michelle Ajouri ab: Kennenlern-Call, Fragebogen und Hautfotos, SKIN FIRST mit OBSERV-Hautanalyse und deine Hautpflege zu Hause.",
};

const c = contact.michelle;

const photoSteps: [string, string, string][] = [
  ["1", "Gesicht zum Fenster", "Tageslicht von vorn. Keine Lampe, kein Blitz."],
  ["2", "Frisch & ohne Make-up", "Gesicht waschen, 15 Minuten warten, Haare aus dem Gesicht."],
  ["3", "Handy auf Augenhöhe", "30–40 cm Abstand, kein Weitwinkel, kein Beauty-Modus. Am besten hilft dir jemand."],
  ["4", "Drei Fotos", "Frontal, linke Seite, rechte Seite. Optional eine Nahaufnahme deiner Stelle."],
  ["5", "Deine Produkte", "Alles, was du gerade benutzt, nebeneinander, Etiketten nach vorn."],
  ["6", "Per WhatsApp oder Mail", "In Originalqualität, mit Fragebogen, spätestens 2 Tage vor dem Termin."],
];

const homeCare: [string, string][] = [
  ["Reinigung", "Eine sanfte, passende Reinigung ist die Grundlage. Sie entfernt Schmutz, überschüssigen Talg und Rückstände, ohne deine Haut unnötig zu strapazieren."],
  ["Wirkstoffe", "Nicht jeder Wirkstoff passt zu jeder Haut. Ich wähle gezielt aus, was sinnvoll ist und wie du es verträglich in deinen Alltag integrierst."],
  ["Enzympeeling", "Kann abgestorbene Hautschüppchen sanft lösen und die Oberfläche glatter erscheinen lassen. Wie oft, hängt von deinem Hautzustand ab."],
  ["Durchblutungsfördernde Masken", "Können die oberflächliche Durchblutung vorübergehend anregen. Bei empfindlicher Haut oder Rötungen sind andere Anwendungen oft sinnvoller."],
  ["Sonnenschutz", "Gehört zu jeder guten Routine. Die schönste Behandlung bringt wenig, wenn wir die Haut danach nicht vor UV-Strahlung schützen."],
  ["Kontinuität", "Du musst nicht jeden Trend mitmachen. Wichtiger ist eine Routine, die du verstehst, gut verträgst und langfristig beibehalten kannst."],
];

export default function MichelleHautreise() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/michelle/maske-berry.jpg"
        alt="Beerenfarbene Maske wird auf die Wange aufgetragen"
        position="50% 35%"
        eyebrow="Deine Hautreise · vor Ort & online"
        title={
          <>
            So läuft deine <em>Hautreise ab.</em>
          </>
        }
        lead="Von unserem ersten Gespräch bis zu deinem persönlichen Hautgefühl. Ohne Druck und ohne Verpflichtung zu einem langfristigen Konzept."
        actions={
          <>
            <Button href={c.callHref}>
              Kennenlern-Call anfragen <Arrow />
            </Button>
            <Button href="/michelle/leistungen/" variant="outline">
              Behandlungen
            </Button>
          </>
        }
      />

      {/* Steps */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-4">
            <div className="md:sticky md:top-28">
              <Eyebrow index="I">Schritt für Schritt</Eyebrow>
              <h2 className="display-2 mt-6">
                Vom ersten Gespräch <em>bis zu deinem Hautgefühl.</em>
              </h2>
              <div className="ken-wrap relative mt-10 hidden aspect-[3/4] overflow-hidden md:block">
                <Img
                  src="/assets/michelle/pflege-collage.jpg"
                  alt="Collage aus Pflege, Pflanzen und gepflegter Augenpartie"
                  position="50% 50%"
                  className="ken-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <ChapterIndex
            className="md:col-span-7 md:col-start-6"
            chapters={[
              { numeral: "01", title: "Wir lernen uns kennen", line: "Ein kostenloser Kennenlern-Call, telefonisch oder online. Du erzählst von deinen Wünschen und Fragen, ich erkläre dir meine Arbeitsweise. SKIN FIRST kannst du natürlich auch direkt buchen." },
              { numeral: "02", title: "Fragebogen & Hautfotos", line: "Vor dem ersten Termin bekommst du einen Fragebogen zu deiner Haut und deiner Pflege. Wenn es sinnvoll ist, schickst du mir aktuelle Hautfotos." },
              { numeral: "03", title: "SKIN FIRST", line: "Wir besprechen deine Wünsche, machen die OBSERV-Hautanalyse und wählen die passende Behandlung. Du erfährst, worauf du zu Hause achten solltest." },
              { numeral: "04", title: "Du entscheidest, wie es weitergeht", line: "Eine einzelne Gesichtsbehandlung, regelmäßige Selfcare-Termine oder eine Hautbegleitung mit individuellem Fahrplan." },
              { numeral: "05", title: "Ich bin auch zwischen den Terminen da", line: "Bei Fragen zu Produkten, Unsicherheiten oder Veränderungen meldest du dich einfach. In der Hautbegleitung gibt es persönliche Check-ins und Impulse." },
              { numeral: "06", title: "Wir schauen auf deine Entwicklung", line: "Wir dokumentieren deine Haut, betrachten Veränderungen und passen Behandlung oder Pflege an. Nicht, weil sie perfekt werden muss, sondern weil sie Aufmerksamkeit verdient." },
            ]}
          />
        </div>
      </section>

      {/* Before first appointment */}
      <section className="section-y-tight">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="II"
            eyebrow="Vor deinem ersten Termin"
            title={
              <>
                Gut vorbereitet, <em>ganz entspannt.</em>
              </>
            }
            lead="Den Fragebogen bekommst du vor deinem ersten Termin. Fragebogen und Fotos bitte spätestens 2 Tage vorher zurückschicken."
          />
          <ul className="mt-10 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Fragebogen ausgefüllt",
              "Einwilligungen unterschrieben (allgemein, Datenschutz, ggf. Foto)",
              "Hautfotos und Produktfotos geschickt",
              "Am Tag möglichst ohne Make-up kommen",
              "Sag mir, wenn sich etwas verändert hat: Medikamente, Schwangerschaft, Allergien",
            ].map((t) => (
              <li
                key={t}
                className="reveal flex gap-3 border-b border-line py-5 text-[0.95rem] sm:pr-6 lg:border-b-0 lg:border-l lg:px-5 lg:first:border-l-0 lg:first:pl-0"
              >
                <span aria-hidden className="text-accent-text">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo guide */}
      <section className="section-y bg-deep text-deep-ink">
        <div className="container-x">
          <p className="eyebrow text-accent">III · In 5 Minuten · ohne Filter · mit Tageslicht</p>
          <h2 className="display-2 mt-6">
            So machst du deine <em className="text-accent">Hautfotos.</em>
          </h2>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {photoSteps.map(([n, t, l]) => (
              <li key={n} className="reveal border-t border-white/15 pt-5">
                <span className="font-display text-[2.5rem] leading-none text-accent">{n}</span>
                <h3 className="font-display mt-3 text-[1.5rem] leading-tight">{t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed opacity-80">{l}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-[0.9rem] opacity-70">
            Bitte nicht: Filter · Blitz · Lampenlicht · Make-up · Gegenlicht. Deine Fotos nutze ich
            nur für deine Beratung.
          </p>
        </div>
      </section>

      {/* Home care */}
      <section className="section-y-tight bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-4">
            <Eyebrow index="IV">Deine Hautpflege zu Hause</Eyebrow>
            <h2 className="display-2 mt-6">
              Kleine Routinen. <em>Bewusste Entscheidungen.</em>
            </h2>
            <p className="lead mt-6">
              Die Zeit im Studio ist wertvoll. Aber auch das, was du täglich zu Hause machst, spielt
              eine wichtige Rolle. Deine Routine besprechen wir gemeinsam.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ChapterIndex
              chapters={homeCare.map(([t, l], i) => ({
                numeral: `0${i + 1}`,
                title: t,
                line: l,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Bereit?</p>
            <p className="display-3 mt-3">Deine Haut braucht keine Perfektion. Sondern die richtige Aufmerksamkeit.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href={c.whatsappHref} variant="outline">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
