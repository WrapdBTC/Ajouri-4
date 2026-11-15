import NextLink from "next/link";
import { contact, family, headers, mailto, studio, type ThemeKey } from "@/lib/site";

const taglines: Record<ThemeKey, string> = {
  hub: "Drei Frauen. Drei Handwerke. Ein Name — Haut, Klang und Tattoo. Neuburg an der Donau.",
  michelle: "Haut lesen. Darm verstehen. Bei dir ankommen. Skinhealth meets Selfcare.",
  sabine: "Klangmassage, Klangreise, Meditation. Ein Raum, in dem es still werden darf.",
  isabelle: "Inkabell Tattoo. Fineline & Blackwork — deine Geschichte, deine Haut, deine Kunst.",
};

type Line = { text: string; href?: string };

function contactLines(current: ThemeKey): Line[] {
  switch (current) {
    case "michelle": {
      const c = contact.michelle;
      return [
        { text: c.street },
        { text: c.city },
        { text: c.phone, href: c.phoneHref },
        { text: c.email, href: mailto(c.email) },
        { text: c.hours },
      ];
    }
    case "sabine": {
      const c = contact.sabine;
      return [
        { text: c.street },
        { text: c.city },
        { text: c.phone, href: c.phoneHref },
        { text: c.email, href: mailto(c.email) },
        { text: `Offenes Studio: ${c.openStudio}` },
      ];
    }
    case "isabelle": {
      const c = contact.isabelle;
      return [
        { text: c.street },
        { text: c.city },
        { text: c.booking },
        { text: "Tattoo-Idee anfragen", href: "/isabelle/anfrage/" },
      ];
    }
    default:
      return [
        { text: `${studio.street} · ${studio.city}` },
        { text: `Michelle · ${contact.michelle.phone}`, href: "/michelle/kontakt/" },
        { text: `Sabine · ${contact.sabine.phone}`, href: "/sabine/kontakt/" },
        { text: "Isabelle · Anfrage", href: "/isabelle/anfrage/" },
      ];
  }
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls =
    "inline-flex min-h-8 items-center transition-opacity duration-300 hover:opacity-100 opacity-75";
  return href.startsWith("/") ? (
    <NextLink href={href} className={cls}>
      {children}
    </NextLink>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function SiteFooter({ current }: { current: ThemeKey }) {
  const cfg = headers[current];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-deep-ink">
      <div className="container-x pt-16 pb-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            {current === "hub" ? (
              <p className="font-display text-3xl tracking-[0.2em] uppercase">{cfg.title}</p>
            ) : (
              <p className="font-display text-4xl leading-none">{cfg.title}</p>
            )}
            <p className="eyebrow mt-3 opacity-60">{cfg.subtitle}</p>
            <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed opacity-75">{taglines[current]}</p>
          </div>

          <div className="md:col-span-4 md:col-start-6">
            <p className="eyebrow opacity-50">Kontakt</p>
            <ul className="mt-5 space-y-0.5 text-[0.95rem] leading-relaxed">
              {contactLines(current).map((l) => (
                <li key={l.text}>
                  {l.href ? <FooterLink href={l.href}>{l.text}</FooterLink> : <span className="opacity-75">{l.text}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="eyebrow opacity-50">Familie Ajouri</p>
            <ul className="mt-5 space-y-0.5 text-[0.95rem] leading-relaxed">
              <li>
                <FooterLink href="/">Ajouri — Übersicht</FooterLink>
              </li>
              {family.map((m) => (
                <li key={m.slug}>
                  {m.slug === current ? (
                    <span aria-current="page">
                      {m.first} — {m.craft}
                    </span>
                  ) : (
                    <FooterLink href={m.href}>
                      {m.first} — {m.craft}
                    </FooterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-current/15 pt-6 text-[0.72rem] tracking-[0.04em] opacity-60">
          <p>© {year} Ajouri · Neuburg an der Donau</p>
        </div>
      </div>
    </footer>
  );
}
