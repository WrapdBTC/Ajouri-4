import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { ChapterIndex } from "@/components/ChapterIndex";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dein Tattoo · Inkabell Tattoo",
  description:
    "Deine Idee, dein Design, dein Termin, deine Nachpflege — so entsteht dein Tattoo bei Inkabell Tattoo, Isabelle Ajouri in Neuburg.",
};

export default function IsabelleProzess() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/isabelle/tattoo-fokus.jpg"
        alt="Isabelle Ajouri tätowiert konzentriert einen Unterarm"
        position="50% 30%"
        eyebrow="Dein Tattoo · Inkabell Tattoo"
        title={
          <>
            Von deiner Idee bis zum <em>fertigen Kunstwerk.</em>
          </>
        }
        lead="Vier Schritte, in denen du jederzeit Fragen stellen darfst und dich gut aufgehoben fühlst."
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
      />

      {/* Dense numbered steps — high contrast on deep */}
      <section className="section-y-tight bg-deep text-deep-ink">
        <div className="container-x">
          <div className="reveal max-w-md">
            <Eyebrow>Ablauf</Eyebrow>
            <h2 className="display-2 mt-5 text-deep-ink">
              Alles beginnt <em className="!text-accent">mit einem Gedanken.</em>
            </h2>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-deep-ink/90">
              Du weißt jederzeit, wo du stehst: von deiner ersten Idee bis zur Nachpflege.
            </p>
          </div>

          <ChapterIndex
            className="mt-8 border-deep-ink/25 md:mt-10 [&_.body-copy]:!max-w-none [&_.body-copy]:!text-deep-ink/88 [&_.chapter-num]:!text-accent-text [&_.chapter-num]:!opacity-100 [&_.display-3]:!text-deep-ink [&_li]:border-deep-ink/25"
            chapters={[
              {
                numeral: "01",
                title: "Deine Idee",
                line: "Vielleicht hast du schon eine ganz konkrete Vorstellung, vielleicht nur ein Gefühl. Erzähl mir davon: Wunschmotiv, Körperstelle, Größe und alles, was dir wichtig ist.",
              },
              {
                numeral: "02",
                title: "Dein Design",
                line: "Aus deinen Wünschen entsteht ein Motiv, das zu dir passt. Gemeinsam achten wir auf Proportionen, Details und die Wirkung auf deiner Haut.",
              },
              {
                numeral: "03",
                title: "Dein Termin",
                line: "Jetzt wird aus deiner Idee ein Tattoo. Ich nehme mir die Zeit, die eine sorgfältige Umsetzung braucht, in ruhiger Atmosphäre und mit Raum für deine Fragen.",
              },
              {
                numeral: "04",
                title: "Deine Nachpflege",
                line: "Damit dein Tattoo gut abheilt, erkläre ich dir nach dem Termin, wie du deine frisch tätowierte Haut pflegst. Auch danach darfst du dich bei Fragen jederzeit melden.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
          <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-4 md:aspect-[3/4]">
            <Img
              src="/assets/isabelle/arme-himmel.jpg"
              alt=""
              position="50% 30%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="eyebrow text-accent-text">Bereit?</p>
            <h2 className="display-2 mt-4">
              Erzähl mir <em>von deiner Idee.</em>
            </h2>
            <p className="lead mt-5">
              Ich freue mich darauf, gemeinsam mit dir etwas entstehen zu lassen, das ein Teil von dir
              wird.
            </p>
            <p className="body-copy mt-3 text-[0.92rem] text-muted">
              Anfragen nehme ich ausschließlich über Instagram entgegen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={contact.isabelle.dmHref}>
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
