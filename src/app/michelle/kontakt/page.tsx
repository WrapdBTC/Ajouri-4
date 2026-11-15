import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { InquiryForm } from "@/components/InquiryForm";
import { MetaRow } from "@/components/MetaRow";
import { contact, mailto, mapsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Termin · Michelle Ajouri",
  description:
    "Michelle Ajouri · Kosmetik, Haut & Darm — Sternstraße 180, 86633 Neuburg. Telefon, WhatsApp, Mail, kostenloser Kennenlern-Call und Buchung über Beautinda.",
};

const c = contact.michelle;

const faq = [
  {
    q: "Wie buche ich?",
    a: "SKIN FIRST, Behandlungen und Lash & Brow buchst du über Beautinda. Oder schreib mir per WhatsApp, Mail oder über das Formular. Wenn ich gerade in einer Behandlung bin, melde ich mich zurück.",
  },
  {
    q: "Wann bist du in Neuburg?",
    a: "Alle 9 Wochen für 3 Wochen — das sind die Behandlungsblöcke. Dazwischen bin ich in Kroatien und online für dich da.",
  },
  {
    q: "Verschieben?",
    a: "Bis 24 Stunden vorher kostenlos. Später oder nicht erschienen: 30 % des anteiligen Terminpreises.",
  },
  {
    q: "Parken?",
    a: "Sag bei der Terminanfrage kurz Bescheid — ich beschreibe dir gern den Weg zum neuen Studio in der Sternstraße.",
  },
];

export default function MichelleKontakt() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/michelle/brauen-detail.jpg"
        alt="Nahaufnahme gepflegter Haut und Augenbraue"
        position="50% 45%"
        eyebrow="Kontakt & Kennenlernen"
        title={
          <>
            Du hast Fragen? <em>Dann lass uns sprechen.</em>
          </>
        }
        lead="Ruf an, schreib mir über WhatsApp oder buch dir direkt einen kostenlosen Kennenlern-Call. Auch persönliche Online-Beratungen sind möglich. Ich freue mich darauf, dich und deine Haut kennenzulernen."
        actions={
          <>
            <Button href={c.callHref}>
              Kennenlern-Call anfragen <Arrow />
            </Button>
            <Button href={c.bookingHref} variant="outline">
              SKIN FIRST buchen
            </Button>
          </>
        }
      />

      <section className="section-y-tight">
        <div className="container-x">
          <MetaRow
            items={[
              { label: "Adresse", value: `${c.street} · ${c.city}` },
              { label: "Buchung", value: "Über Beautinda" },
              { label: "Telefon", value: c.phone },
            ]}
          />

          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
            <div className="reveal border border-line bg-elev p-5 sm:p-7 md:col-span-5 md:p-9">
              <Eyebrow>Studio</Eyebrow>
              <h2 className="display-3 mt-4">Michelle Ajouri</h2>
              <p className="eyebrow mt-2 text-muted">Kosmetik · Haut &amp; Darm</p>

              <address className="mt-7 space-y-1 not-italic leading-relaxed text-[1.05rem]">
                <p>{c.street}</p>
                <p>{c.city}</p>
              </address>

              <dl className="mt-7 space-y-4 border-t border-line pt-6 text-[0.95rem]">
                <div>
                  <dt className="eyebrow text-accent-text">Telefon / WhatsApp</dt>
                  <dd className="mt-1.5">
                    <a href={c.phoneHref} className="inline-flex min-h-8 items-center hover:underline">
                      {c.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-accent-text">E-Mail</dt>
                  <dd className="mt-1.5">
                    <a href={mailto(c.email)} className="inline-flex min-h-8 items-center hover:underline">
                      {c.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-accent-text">Instagram</dt>
                  <dd className="mt-1.5">
                    <a href={c.instagramHref} className="inline-flex min-h-8 items-center hover:underline" target="_blank" rel="noopener noreferrer">
                      {c.instagram}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-accent-text">Im Studio</dt>
                  <dd className="mt-1.5">{c.hours}</dd>
                </div>
              </dl>

              <p className="font-display mt-8 text-[1.35rem] italic text-accent-text">Deine Michelle 🤎</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={c.whatsappHref} variant="outline" size="sm">
                  WhatsApp
                </Button>
                <Button href={c.phoneHref} variant="outline" size="sm">
                  Anrufen
                </Button>
                <Button href={mapsHref(c.street, c.city)} variant="text" size="sm">
                  Route planen <Arrow />
                </Button>
              </div>
            </div>

            <div className="reveal md:col-span-7">
              <InquiryForm
                to={c.email}
                subject="Anfrage Michelle Ajouri · Haut & Darm"
                title="Schreib mir eine Nachricht."
                eyebrow="Anfrage"
                submitLabel="Nachricht senden"
              />
            </div>
          </div>

          {/* Under one roof */}
          <div className="reveal mt-8 overflow-hidden border border-line md:mt-10">
            <div className="grid md:grid-cols-12">
              <div className="flex flex-col justify-between gap-6 bg-elev p-6 md:col-span-12 md:flex-row md:items-center md:p-8">
                <div>
                  <p className="eyebrow text-accent-text">Unter einem Dach</p>
                  <p className="font-display mt-3 text-2xl leading-tight">
                    Ein Studio, drei Handwerke.
                  </p>
                  <p className="body-copy mt-2 !max-w-md text-[0.95rem]">
                    In der Sternstraße findest du auch Sabine Ajouri (Vita Sonus, Klang & Meditation) und Isabelle Ajouri (Inkabell Tattoo, Fineline & Blackwork).
                  </p>
                </div>
                <Button href="/" variant="text" size="sm">
                  Alle drei Welten <Arrow />
                </Button>
              </div>
            </div>
          </div>

          <div className="reveal mt-8 md:mt-10">
            <div
              id="buchen"
              className="scroll-mt-28 flex flex-col gap-6 border border-line bg-deep p-7 text-deep-ink md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div>
                <p className="eyebrow text-accent">Online buchen</p>
                <p className="display-3 mt-3">Deinen Termin buchst du über Beautinda.</p>
                <p className="mt-3 max-w-xl text-[0.95rem] opacity-80">
                  SKIN FIRST, Behandlungen, Hautbegleitung und Lash &amp; Brow — mit Onlinezahlung,
                  auf Wunsch in Raten über Klarna oder PayPal.
                </p>
              </div>
              <Button href={c.bookingHref} className="shrink-0">
                Zu Beautinda <Arrow />
              </Button>
            </div>
          </div>

          <div className="reveal mt-10 border-t border-line pt-8 md:mt-12 md:pt-10">
            <Eyebrow>Kurz gefragt</Eyebrow>
            <ul className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {faq.map((item) => (
                <li key={item.q} className="flex h-full flex-col">
                  <p className="font-display text-xl leading-snug">{item.q}</p>
                  <p className="body-copy mt-2 flex-1 !max-w-none text-[0.9rem]">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
