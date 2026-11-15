import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { SplitFeature } from "@/components/SplitFeature";
import { EditorialCover } from "@/components/EditorialCover";
import { ChapterIndex } from "@/components/ChapterIndex";
import { StatStrip } from "@/components/MetaRow";
import { Img } from "@/components/Img";
import { BrandMark } from "@/components/BrandMark";
import { asset } from "@/lib/asset";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Michelle Ajouri — Kosmetik · Haut & Darm",
  description:
    "Haut lesen. Darm verstehen. Bei dir ankommen. Kosmetik in Neuburg an der Donau: Hautanalyse mit dem OBSERV 320, individuelle Gesichtsbehandlungen und persönliche Hautbegleitung.",
  openGraph: {
    title: "Michelle Ajouri — Kosmetik · Haut & Darm",
    description: "Haut lesen. Darm verstehen. Bei dir ankommen.",
    images: [{ url: asset("/assets/michelle/hero-herbst.jpg"), width: 2000, height: 1406 }],
  },
};

const c = contact.michelle;

export default function MichelleHome() {
  return (
    <>
      <Hero
        size="full"
        image="/assets/michelle/hero-herbst.jpg"
        alt="Michelle Ajouri sitzt lachend im Herbstgras"
        position="70% 60%"
        eyebrow="Kosmetik · Haut & Darm · Neuburg an der Donau"
        title={
          <>
            Haut lesen. Darm verstehen. <em>Bei dir ankommen.</em>
          </>
        }
        lead="Schöne Haut beginnt für mich nicht bei einer Creme. Sie beginnt damit, dich und deine Haut wirklich zu verstehen."
        actions={
          <>
            <Button href={c.bookingHref}>
              SKIN FIRST buchen <Arrow />
            </Button>
            <Button href="/michelle/leistungen/" variant="outline">
              Behandlungen
            </Button>
          </>
        }
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Skinhealth meets Selfcare.</span>
            <span className="text-muted">{c.phone}</span>
          </p>
        }
      />

      {/* Intro */}
      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-end">
          <p className="display-3 reveal md:col-span-6">
            Zeit zum Durchatmen. Zum Loslassen. <em>Zum Ankommen.</em>
          </p>
          <div className="reveal md:col-span-5 md:col-start-8">
            <p className="body-copy !max-w-none">
              Ich verbinde moderne Hautanalysen, individuell abgestimmte Gesichtsbehandlungen und
              ganzheitliche Beratung mit etwas, das im Alltag oft viel zu kurz kommt: Zeit für dich.
            </p>
            <p className="body-copy mt-4 !max-w-none">
              Ob du dir eine wohltuende Einzelbehandlung wünschst oder deine Haut langfristig
              begleiten lassen möchtest, wir finden gemeinsam heraus, was zu dir passt.
            </p>
          </div>
        </div>
      </section>

      {/* I. Über mich */}
      <section className="section-y-tight">
        <div className="container-x">
          <SplitFeature
            image="/assets/michelle/portal-herbst.jpg"
            alt="Michelle Ajouri lächelnd im Herbstlicht"
            position="50% 70%"
            index="I"
            eyebrow="Über mich"
            title={
              <>
                Hey du, <em>schön, dass du hier bist.</em>
              </>
            }
          >
            <p className="lead !max-w-none">
              Ich bin Michelle. Kosmetikerin, Haut- und Darmexpertin und angehende Heilpraktikerin.
              Aber vor allem bin ich ein Mensch, dem es unglaublich am Herzen liegt, dass andere
              sich wieder wohl in ihrer eigenen Haut fühlen.
            </p>
            <p className="body-copy !max-w-none">
              Ich weiß selbst, wie belastend es sein kann, wenn der eigene Körper immer wieder kleine
              oder große Baustellen aufmacht. Wenn man von einer Empfehlung zur nächsten springt und
              irgendwann gar nicht mehr weiß, wo man eigentlich anfangen soll. Genau deshalb möchte
              ich anders arbeiten.
            </p>
            <p className="body-copy !max-w-none">
              Ich möchte verstehen, was dich beschäftigt. Wie es deiner Haut geht, wie du dich
              fühlst und was dein Alltag mit dir macht. Ob Stress, Schlaf, Ernährung oder deine
              Verdauung möglicherweise eine Rolle spielen. Mein Schwerpunkt ist und bleibt die
              Hautgesundheit, aber ich betrachte dein Wohlbefinden nicht losgelöst von deinem
              restlichen Leben.
            </p>
            <p className="body-copy !max-w-none">
              Mein Wunsch ist, dass du meine Räume nicht nur mit einem guten Hautgefühl verlässt.
              Sondern auch ein bisschen leichter, ein bisschen entspannter und vielleicht wieder ein
              Stück näher bei dir selbst.
            </p>
            <p className="body-copy !max-w-none text-[0.9rem] text-muted">
              Gut zu wissen: Bis zu meiner Heilpraktiker-Erlaubnis arbeite ich kosmetisch und
              beratend und stelle keine Diagnosen. Wenn ich etwas sehe, das eine Ärztin anschauen
              sollte, sag ich es dir ehrlich.
            </p>
            <p className="eyebrow mt-2 text-muted">Michelle Ajouri · Kosmetikerin</p>
          </SplitFeature>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x">
          <PullQuote variant="statement" cite="Body · Mind · Soul">
            „Ich möchte einen Menschen einmal als Ganzes betrachten. Denn für mich gehören Körper,
            Kopf und Seele zusammen.“
          </PullQuote>
        </div>
      </section>

      {/* II. Philosophie */}
      <section className="section-y-tight bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="II">Meine Philosophie</Eyebrow>
            <h2 className="display-2 mt-6">
              Deine Haut braucht Aufmerksamkeit. <em>Und du auch.</em>
            </h2>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="lead !max-w-none">
              Kennst du das Gefühl, wenn ständig irgendetwas erledigt werden muss? Genau deshalb ist
              eine Gesichtsbehandlung bei mir mehr als reine Hautpflege. Sie ist auch deine bewusste
              Auszeit vom Alltag.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Meine regulären Gesichtsbehandlungen dauern in der Regel 90 bis 100 Minuten. Ich nehme
              mir diese Zeit, weil ich nicht möchte, dass du dich wie der nächste Termin in meinem
              Kalender fühlst.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Herzstück vieler Behandlungen ist meine ayurvedisch inspirierte Gesichtsmassage:
              sanfte, rhythmische Berührungen und bewusste Ruhe, eingesetzt, wenn sie zur Anwendung
              und zu deinem Hautzustand passt. Während ich mich um deine Haut kümmere, darfst du dich
              einmal um gar nichts kümmern.
            </p>
            <p className="font-display mt-7 text-[1.45rem] leading-snug italic text-accent-text">
              Hautpflege für dein Äußeres. Entspannung für dein Inneres.
            </p>
          </div>
        </div>
        <div className="container-x">
          <StatStrip
            className="mt-12 md:mt-14"
            items={[
              { value: "90–100 Min.", label: "dauert eine reguläre Gesichtsbehandlung" },
              { value: "Ayurveda", label: "inspirierte Gesichtsmassage als Herzstück" },
              { value: "OBSERV 320", label: "bildbasierte Hautanalyse von REVIDERM" },
              { value: "Online", label: "Darmbegleitung bequem von zu Hause" },
            ]}
          />
        </div>
      </section>

      {/* III. Haut & Darm — brand moment with the mark */}
      <section className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal flex justify-center md:col-span-4">
            <BrandMark className="h-72 w-40 md:h-96 md:w-52" />
          </div>
          <div className="reveal md:col-span-7 md:col-start-6">
            <Eyebrow index="III">Haut &amp; Darm</Eyebrow>
            <h2 className="display-2 mt-6">
              Haut und Bauch <em>reden miteinander.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Unsere Haut ist ein komplexes Organ, das auf viele Einflüsse reagiert: Hormone,
              Ernährung, Schlaf, Stress, Umwelt und natürlich deine tägliche Pflege. Auch zwischen
              Darm und Haut gibt es interessante Zusammenhänge.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Wichtig ist mir: Nicht jeder Pickel kommt vom Darm. Und nicht jede Hautveränderung
              lässt sich durch eine Ernährungsumstellung lösen. Deshalb betrachten wir zuerst deine
              Haut ganz genau und sprechen bei Bedarf auch über Ernährung, Verdauung, Schlaf und
              deinen Alltag.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Manchmal lohnt es sich, nicht nur zu fragen: „Welche Creme brauche ich?“ Sondern auch:
              „Was könnte meine Haut gerade zusätzlich beeinflussen?“
            </p>
          </div>
        </div>
      </section>

      {/* IV. Hautanalyse */}
      <section className="section-y bg-deep text-deep-ink">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="reveal md:col-span-5">
              <p className="eyebrow text-accent">IV · Hautanalyse · REVIDERM OBSERV 320</p>
              <h2 className="display-2 mt-6">
                Was deine Haut dir <em className="!text-accent">erzählen möchte.</em>
              </h2>
            </div>
            <div className="reveal md:col-span-6 md:col-start-7">
              <p className="text-[1.1rem] leading-relaxed opacity-90">
                Vielleicht fühlt sich deine Haut trocken an und glänzt trotzdem. Vielleicht entstehen
                ständig neue Unreinheiten. Mit verschiedenen Licht- und Filtertechnologien des OBSERV
                320 betrachten wir deinen Hautzustand genauer.
              </p>
              <p className="mt-5 text-[0.98rem] leading-relaxed opacity-80">
                Wir schauen uns deine Aufnahmen gemeinsam an. Ich erkläre dir, was wir sehen und
                welche Möglichkeiten wir für deine Pflege haben. In einer längeren Begleitung
                vergleichen wir spätere Aufnahmen mit den ersten, damit du deine Fortschritte nicht
                nur fühlst, sondern auch nachvollziehen kannst.
              </p>
            </div>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Hautstruktur", "Unebenheiten, vergrößerte Poren oder feine Linien."],
              ["Pigmentierungen", "Pigmentverschiebungen und ungleichmäßige Hauttöne."],
              ["Rötungen & sensible Bereiche", "Partien, die empfindlich wirken oder auffällig sind."],
              ["Talg & Hautoberfläche", "Wie sich der Hautfilm verteilt und wo andere Pflege hilft."],
            ].map(([t, l]) => (
              <li key={t} className="reveal border-t border-white/15 pt-5">
                <h3 className="font-display text-[1.45rem] leading-tight">{t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed opacity-80">{l}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* V. Produkte & Technologie */}
      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="V">Produkte &amp; Technologie</Eyebrow>
            <h2 className="display-2 mt-6">
              Wirkstoffe mit Verstand. <em>Pflege mit Gefühl.</em>
            </h2>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="body-copy !max-w-none">
              Ich glaube nicht daran, dass wir unsere Haut mit möglichst vielen Produkten überfordern
              müssen. REVIDERM ist mein Partner für professionelle Hautpflege, moderne Hautanalysen
              und gezielte Wirkstoffkonzepte. Ob Feuchtigkeit, Hautbarriere, unreine Haut oder erste
              Zeichen der Hautalterung: Die Pflege wähle ich passend zu deinem Hautzustand.
            </p>
            <p className="font-display mt-6 text-[1.45rem] leading-snug italic text-accent-text">
              So viel wie nötig. So individuell wie möglich.
            </p>
          </div>
        </div>
      </section>

      {/* VI. Hautreise preview */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow index="VI">Deine Hautreise</Eyebrow>
              <h2 className="display-2 mt-6">
                Ein Termin. <em>Oder eine Begleitung, die weitergeht.</em>
              </h2>
            </div>
            <p className="lead md:col-span-4 md:col-start-9">
              Wir beginnen nicht mit irgendeiner Behandlung, sondern damit, deine Haut
              kennenzulernen. Danach entscheidest du, ohne Druck.
            </p>
          </div>
          <ChapterIndex
            layout="row"
            className="mt-12 md:mt-14"
            chapters={[
              {
                numeral: "I",
                title: "Kennenlernen",
                line: "Ein kostenloser Call, telefonisch oder online. Du erzählst, ich hör zu.",
              },
              {
                numeral: "II",
                title: "Fragebogen & Fotos",
                line: "Damit ich mich schon vorher mit deiner Haut beschäftigen kann.",
              },
              {
                numeral: "III",
                title: "SKIN FIRST",
                line: "OBSERV-Hautanalyse, die passende Behandlung und deine nächsten Schritte.",
              },
              {
                numeral: "IV",
                title: "Du entscheidest",
                line: "Einzelbehandlung, Selfcare-Termine oder persönliche Hautbegleitung.",
              },
            ]}
          />
          <div className="reveal mt-10">
            <Button href="/michelle/hautreise/" variant="text">
              So läuft deine Hautreise ab <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* Entry points */}
      <section className="section-y">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege zu <em>deiner Haut.</em>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-8 md:mt-16 md:grid-cols-3 md:gap-7">
            <EditorialCover
              href="/michelle/leistungen/"
              eyebrow="Behandlungen & Buchung"
              title="Von SKIN FIRST bis Lash & Brow"
              text="SKIN FIRST, individuelle Facials, persönliche Hautbegleitung, Darmbegleitung online und Lash & Brow Lift."
              image="/assets/michelle/entspannung.jpg"
              position="50% 35%"
              alt="Entspannte Kundin mit geschlossenen Augen auf der Liege"
              aspect="tall"
            />
            <EditorialCover
              href="/michelle/hautreise/"
              eyebrow="Hautreise"
              title="Vom ersten Gespräch bis zum Hautgefühl"
              text="Wie deine Hautreise abläuft, wie du deine Hautfotos machst und was du zu Hause für deine Haut tun kannst."
              image="/assets/michelle/maske-berry.jpg"
              position="50% 40%"
              alt="Beerenfarbene Maske auf der Wange"
              aspect="tall"
            />
            <EditorialCover
              href="/michelle/kontakt/"
              eyebrow="Kontakt & Kennenlernen"
              title="Lass uns sprechen"
              text="Telefon, WhatsApp, Mail oder ein kostenloser Kennenlern-Call. Sternstraße 180 in Neuburg."
              image="/assets/michelle/brauen-detail.jpg"
              position="50% 50%"
              alt="Nahaufnahme gepflegter Haut und Augenbraue"
              aspect="tall"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Img
              src="/assets/michelle/herbst-sprung.jpg"
              alt="Michelle Ajouri springt lachend über eine Herbstwiese"
              position="50% 35%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow>Kontakt &amp; Kennenlernen</Eyebrow>
            <h2 className="display-2 mt-6">
              Du hast Fragen? <em>Dann lass uns sprechen.</em>
            </h2>
            <p className="lead mt-6">
              Vielleicht weißt du schon ganz genau, was du möchtest. Vielleicht bist du aber auch
              noch unsicher, wo du anfangen sollst. Beides ist völlig in Ordnung.
            </p>
            <p className="font-display mt-6 text-[1.4rem] italic text-accent-text">Deine Michelle 🤎</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={c.callHref}>
                Kennenlern-Call anfragen <Arrow />
              </Button>
              <Button href={c.bookingHref} variant="outline">
                SKIN FIRST buchen
              </Button>
              <Button href={c.whatsappHref} variant="text">
                WhatsApp <Arrow />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
