import NextLink from "next/link";
import { PageShell } from "@/components/PageShell";
import { Img } from "@/components/Img";
import { Arrow } from "@/components/Button";
import { Eyebrow, SectionIntro } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { contact, family, mailto, mapsStudioHref, studio } from "@/lib/site";

const principles = [
  {
    numeral: "I",
    title: "Kein festes Schema",
    text: "Jeder Mensch bringt seine eigene Geschichte mit. Seine Wünsche, seine Bedürfnisse und manchmal auch seine Unsicherheiten.",
  },
  {
    numeral: "II",
    title: "Ohne Zeitdruck",
    text: "Ohne Erwartungen und ohne Termine im Minutentakt. Hier darfst du einfach du selbst sein.",
  },
  {
    numeral: "III",
    title: "Mit ganz viel Herz",
    text: "Ehrliche Aufmerksamkeit und Liebe zu dem, was wir tun. Das verbindet alle drei Welten.",
  },
];

/** Equal portal cards — photo fades into the card, text has its own inner margin. */
function Portal({ m }: { m: (typeof family)[number] }) {
  return (
    <NextLink
      href={m.href}
      data-theme={m.slug}
      className="reveal group group/btn flex h-full flex-col bg-bg text-ink"
    >
      <div className="ken-wrap relative aspect-[3/4] overflow-hidden">
        <Img
          src={m.portal}
          alt=""
          position={m.portalPosition}
          className="ken-img absolute inset-0 h-full w-full object-cover"
        />
        {/* Veil in the world's own colour: the photo melts into the card below */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 via-30% to-transparent to-60%"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent"
        />
        <span className="font-display absolute top-5 left-5 text-[2rem] leading-none text-white md:top-6 md:left-6 md:text-[2.4rem]">
          {m.numeral}
        </span>
        <span className="eyebrow absolute top-6 right-5 text-white md:top-7 md:right-6">
          {m.craft}
        </span>
        <div className="absolute inset-x-0 bottom-0 px-5 pb-1 md:px-7">
          <p className="eyebrow text-accent-text">{m.house}</p>
          <h3 className="font-display mt-2 text-[2rem] leading-none md:text-[2.35rem]">{m.first}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 pt-4 pb-5 md:px-7 md:pb-6">
        <p className="font-display text-[1.3rem] leading-snug italic text-ink">{m.claim}</p>
        <p className="body-copy mt-3 !max-w-none flex-1 text-[0.95rem]">{m.line}</p>
        <span className="tap-row eyebrow mt-4 text-ink">
          <span className="sr-only">Zur Welt von {m.first}</span>
          Zur Welt <Arrow />
        </span>
      </div>
    </NextLink>
  );
}

export default function HubPage() {
  return (
    <PageShell theme="hub">
      {/* ---------- Editorial cover hero ---------- */}
      <section className="container-x pt-8 md:pt-16">
        <div className="anim-rise flex items-center justify-between gap-6">
          <Eyebrow>Haut · Klang · Tattoo</Eyebrow>
          <p className="eyebrow hidden text-muted sm:block">Neuburg an der Donau</p>
        </div>

        <h1 className="wordmark wordmark-display anim-rise anim-rise-1 mt-7 tracking-[0.12em] text-[clamp(2.6rem,15vw,4.25rem)] leading-[0.86] md:mt-12 md:text-[min(calc((100vw-5.5rem)/4.1),19rem)] md:tracking-[0.12em]">
          Ajouri
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="display-2 anim-rise anim-rise-2 md:col-span-7">
            <span className="sm:whitespace-nowrap">Drei Frauen.</span>{" "}
            <span className="sm:whitespace-nowrap">Drei Handwerke.</span>{" "}
            <em className="sm:whitespace-nowrap">Ein Name.</em>
          </p>
          <p className="lead anim-rise anim-rise-3 !max-w-none md:col-span-4 md:col-start-9">
            Drei Frauen, die unterschiedlicher kaum sein könnten. Drei Leidenschaften, die jede für
            sich etwas Besonderes ist. Und doch verbindet uns weit mehr als unser Nachname.
          </p>
        </div>
      </section>

      {/* Cinematic field — atmosphere only; entry is via the portals below */}
      <section className="anim-rise anim-rise-4 mt-10 md:mt-14" aria-hidden="true">
        <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21.5/10]">
          <Img
            src="/assets/hub/drei-zusammen.jpg"
            alt=""
            position="50% 58%"
            priority
            className="anim-settle absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ---------- Die drei Welten — portals ---------- */}
      <section id="welten" className="section-y-tight">
        <div className="container-x">
          <SectionIntro
            layout="split"
            eyebrow="Die drei Welten"
            title={
              <>
                Drei Welten. <em>Eine gemeinsame Haltung.</em>
              </>
            }
            lead="Michelle, Sabine und Isabelle Ajouri. Jede Welt steht für sich, mit eigener Atmosphäre und eigenem Handwerk. Unter einem Dach in Neuburg."
          />

          <div className="mt-10 grid items-stretch gap-8 md:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
            {family.map((m) => (
              <Portal key={m.slug} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Haltung with pull-quote ---------- */}
      <section id="haltung" className="section-y-tight bg-surface">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <PullQuote variant="statement" cite="— Michelle, Sabine & Isabelle Ajouri">
              „Ohne Zeitdruck. Ohne Erwartungen. Dafür mit ganz viel Herz, ehrlicher Aufmerksamkeit
              und Liebe zu dem, was wir tun.“
            </PullQuote>
          </div>

          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
            <div className="reveal md:col-span-4">
              <Eyebrow>Die Haltung</Eyebrow>
              <h2 className="display-2 mt-6">
                Ein Ort, an dem du <em>du selbst sein darfst.</em>
              </h2>
              <p className="lead mt-8 !max-w-none">
                Wir glauben daran, dass Schönheit, Wohlbefinden und Persönlichkeit nicht nach einem
                festen Schema funktionieren.
              </p>
              <p className="font-display mt-6 text-[1.5rem] italic text-accent-text">
                Willkommen bei Ajouri.
              </p>
            </div>
            <ol className="md:col-span-7 md:col-start-6">
              {principles.map((p) => (
                <li
                  key={p.title}
                  className="reveal grid grid-cols-[4rem_1fr] gap-5 border-t border-line py-7 last:border-b md:grid-cols-[5.5rem_1fr] md:gap-8"
                >
                  <span className="chapter-num !text-[2.5rem] md:!text-[3.25rem]">{p.numeral}</span>
                  <div className="pt-1">
                    <h3 className="display-3">{p.title}</h3>
                    <p className="body-copy mt-3 max-w-md">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Adressen ---------- */}
      <section id="adressen" className="section-y-tight">
        <div className="container-x">
          <SectionIntro
            layout="split"
            eyebrow="Adressen"
            title={
              <>
                Wo du uns <em>findest.</em>
              </>
            }
            lead="Drei Handwerke unter einem Dach. Jede Welt hat ihren eigenen Draht."
          />

          {/* One address for all three — said once, not per column */}
          <div className="reveal mt-10 flex flex-col gap-5 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between md:mt-14 md:p-8">
            <div>
              <p className="eyebrow text-accent-text">Gemeinsames Studio</p>
              <p className="display-3 mt-2">
                {studio.street} · {studio.city}
              </p>
            </div>
            <a
              href={mapsStudioHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn tap-row eyebrow shrink-0 text-ink"
            >
              In Maps öffnen <Arrow />
            </a>
          </div>

          <div className="mt-2 grid items-stretch md:grid-cols-3">
            {family.map((m) => (
              <div
                key={m.slug}
                className="reveal flex h-full flex-col border-b border-line py-8 md:border-b-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    data-theme={m.slug}
                    aria-hidden
                    className="flex h-3.5 w-7 overflow-hidden rounded-full ring-1 ring-black/10"
                  >
                    <span className="w-1/2 bg-bg" />
                    <span className="w-1/2 bg-accent" />
                  </span>
                  <p className="eyebrow text-muted">
                    {m.numeral} — {m.house}
                  </p>
                </div>
                <h3 className="display-3 mt-6">{m.name}</h3>

                <div className="body-copy mt-6 !max-w-none flex-1 space-y-1 text-[0.95rem]">
                  {m.slug === "michelle" && (
                    <>
                      <p>
                        <a className="inline-flex min-h-8 items-center text-ink hover:underline" href={contact.michelle.phoneHref}>
                          {contact.michelle.phone}
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex min-h-8 items-center text-ink hover:underline" href={mailto(contact.michelle.email)}>
                          {contact.michelle.email}
                        </a>
                      </p>
                    </>
                  )}
                  {m.slug === "sabine" && (
                    <>
                      <p>
                        <a className="inline-flex min-h-8 items-center text-ink hover:underline" href={contact.sabine.phoneHref}>
                          {contact.sabine.phone}
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex min-h-8 items-center text-ink hover:underline" href={mailto(contact.sabine.email)}>
                          {contact.sabine.email}
                        </a>
                      </p>
                      <p className="pt-2">Offenes Studio: {contact.sabine.openStudio}</p>
                    </>
                  )}
                  {m.slug === "isabelle" && (
                    <>
                      <p>
                        <a className="inline-flex min-h-8 items-center text-ink hover:underline" href={contact.isabelle.instagramHref} target="_blank" rel="noopener noreferrer">
                          Instagram {contact.isabelle.instagram}
                        </a>
                      </p>
                      <p>Anfragen ausschließlich über Instagram.</p>
                      <p className="pt-2">{contact.isabelle.booking}</p>
                    </>
                  )}
                </div>

                <NextLink
                  href={m.slug === "isabelle" ? "/isabelle/anfrage/" : `/${m.slug}/kontakt/`}
                  className="group/btn tap-row eyebrow mt-8 text-ink"
                >
                  {m.slug === "isabelle" ? "Anfrage" : "Kontakt"} <Arrow />
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
