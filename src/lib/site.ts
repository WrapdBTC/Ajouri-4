export type Slug = "michelle" | "sabine" | "isabelle";
export type ThemeKey = "hub" | Slug;

export type Link = { label: string; href: string };

/** The three members of the family, in hub order. */
export const family: {
  slug: Slug;
  first: string;
  name: string;
  house: string;
  craft: string;
  numeral: string;
  claim: string;
  line: string;
  href: string;
  portal: string;
  portalPosition: string;
  portrait: string;
  portraitPosition: string;
}[] = [
  {
    slug: "michelle",
    first: "Michelle",
    name: "Michelle Ajouri",
    house: "Kosmetik · Haut & Darm",
    craft: "Haut & Darm",
    numeral: "I",
    claim: "Haut lesen. Darm verstehen. Bei dir ankommen.",
    line: "Ganzheitliche Hautpflege, individuelle Gesichtsbehandlungen und persönliche Begleitung für deine Hautgesundheit und dein Wohlbefinden.",
    href: "/michelle/",
    portal: "/assets/michelle/herbst-blick.jpg",
    portalPosition: "50% 60%",
    portrait: "/assets/michelle/portal-herbst.jpg",
    portraitPosition: "48% 20%",
  },
  {
    slug: "sabine",
    first: "Sabine",
    name: "Sabine Ajouri",
    house: "Vita Sonus",
    craft: "Klang",
    numeral: "II",
    claim: "Wenn die Welt draußen laut wird, darf es in dir still werden.",
    line: "Klangmassagen, Klangreisen und Meditationen als bewusste Auszeit vom Alltag.",
    href: "/sabine/",
    portal: "/assets/sabine/portal-lachen.jpg",
    portalPosition: "50% 28%",
    portrait: "/assets/sabine/portrait-herbst.jpg",
    portraitPosition: "50% 22%",
  },
  {
    slug: "isabelle",
    first: "Isabelle",
    name: "Isabelle Ajouri",
    house: "Inkabell Tattoo",
    craft: "Tattoo",
    numeral: "III",
    claim: "Deine Geschichte. Deine Haut. Meine Kunst.",
    line: "Individuelle Fineline- und Blackwork-Tattoos, die so einzigartig sind wie der Mensch, der sie trägt.",
    href: "/isabelle/",
    portal: "/assets/isabelle/portal-lachen-v2.jpg",
    portalPosition: "50% 30%",
    portrait: "/assets/isabelle/portrait-fels.jpg",
    portraitPosition: "50% 40%",
  },
];

/** Shared studio — the practices under one roof. */
export const studio = {
  street: "Sternstraße 180",
  city: "86633 Neuburg",
} as const;

export const contact = {
  michelle: {
    street: studio.street,
    city: studio.city,
    phone: "+49 1577 5056789",
    phoneHref: "tel:+4915775056789",
    whatsappHref: "https://wa.me/4915775056789",
    /** Kostenloser Kennenlern-Call — eigener Beautinda-Buchungslink */
    callHref: "https://beautinda.de/artist/q6srKpOFipeO5tobOMsPosxin2t1",
    email: "michelle@ajouri.de",
    hours: "Nach Vereinbarung",
    instagram: "@michelle.ajouri",
    instagramHref: "https://www.instagram.com/michelle.ajouri/",
    booking: "Termine über Beautinda",
    bookingHref: "https://beautinda.de/artist/NV4Nm1FjNjNwZTo2LhNrgYPPWt53",
    web: "michelleajouri.de",
    webHref: "https://michelleajouri.de/",
  },
  sabine: {
    street: studio.street,
    city: studio.city,
    phone: "+49 160 99300610",
    phoneHref: "tel:+4916099300610",
    email: "info@vitasonus.de",
    openStudio: "Freitag · 16:30 – 18:00 Uhr",
    web: "vitasonus.de",
    webHref: "https://vitasonus.de/",
  },
  isabelle: {
    street: studio.street,
    city: studio.city,
    /** Anfragen ausschließlich über Instagram. */
    booking: "Termine nach vorheriger Anfrage",
    instagram: "@_inkabell_",
    instagramHref: "https://www.instagram.com/_inkabell_/",
    dmHref: "https://ig.me/m/_inkabell_",
    requestHours: "Mo – Fr · 10:00 – 18:00 Uhr",
  },
} as const;

export function mailto(address: string, subject?: string) {
  return subject
    ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
    : `mailto:${address}`;
}

export function mapsHref(street: string, city: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}`)}`;
}

export function mapsStudioHref() {
  return mapsHref(studio.street, studio.city);
}

/** Per-world header configuration — routes, not hash anchors. */
export const headers: Record<
  ThemeKey,
  {
    title: string;
    subtitle: string;
    logo?: { light: string; dark: string };
    anchors: Link[];
    cta?: Link;
  }
> = {
  hub: {
    title: "Ajouri",
    subtitle: "Neuburg an der Donau",
    anchors: [
      { label: "Die drei Welten", href: "/#welten" },
      { label: "Haltung", href: "/#haltung" },
      { label: "Adressen", href: "/#adressen" },
    ],
  },
  michelle: {
    title: "Michelle Ajouri",
    subtitle: "Kosmetik · Haut & Darm",
    logo: {
      light: "/assets/michelle/logo-mark-light.png",
      dark: "/assets/michelle/logo-mark-dark.png",
    },
    anchors: [
      { label: "Start", href: "/michelle/" },
      { label: "Behandlungen", href: "/michelle/leistungen/" },
      { label: "Hautreise", href: "/michelle/hautreise/" },
      { label: "Kontakt", href: "/michelle/kontakt/" },
    ],
    cta: { label: "SKIN FIRST buchen", href: "https://beautinda.de/artist/NV4Nm1FjNjNwZTo2LhNrgYPPWt53" },
  },
  sabine: {
    title: "Vita Sonus",
    subtitle: "Sabine Ajouri",
    anchors: [
      { label: "Start", href: "/sabine/" },
      { label: "Angebote", href: "/sabine/angebote/" },
      { label: "Studio", href: "/sabine/studio/" },
      { label: "Kontakt", href: "/sabine/kontakt/" },
    ],
    cta: { label: "Termin wählen", href: "/sabine/kontakt/#buchen" },
  },
  isabelle: {
    title: "Inkabell Tattoo",
    subtitle: "Isabelle Ajouri · Fineline & Blackwork",
    anchors: [
      { label: "Start", href: "/isabelle/" },
      { label: "Meine Arbeit", href: "/isabelle/galerie/" },
      { label: "Dein Tattoo", href: "/isabelle/prozess/" },
      { label: "Anfrage", href: "/isabelle/anfrage/" },
    ],
    cta: { label: "Anfrage", href: "/isabelle/anfrage/" },
  },
};
